"use client";

import { Badge, Center, Slider } from "@mantine/core";
import Script from "next/script";
import { Fragment, Suspense, useEffect, useRef, useState } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { useViewportSize } from "@mantine/hooks";

declare global {
    interface Window {
        GGBApplet: any;
    }
}

export interface GeoGebraProps {
    materialId: string;
    width?: number;
    height?: number;
    appName?: string;
    params?: Record<string, any>;
    disableZoom?: boolean;
    coord?: {
        xmin: number;
        ymin: number;
        xmax: number;
        ymax: number;
    };
    coord3d?: {
        xmin: number;
        xmax: number;
        ymin: number;
        ymax: number;
        zmin: number;
        zmax: number;
        yVertical?: boolean;
    };
    sliderLabel: string;
    sliderWidth: number | { base?: number; xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
    sliderMin?: number;
    sliderMax?: number;
    sliderStep?: number;
    sliderInitialValue?: number;
    sliderMarks?: Array<{
        value: number;
        label: string;
    }>;
}

function GeoGebraAppletSliderinner({ materialId, width = 800, height = 600, appName = "graphing", disableZoom = true, coord, coord3d, sliderLabel, sliderWidth, sliderMin, sliderMax, sliderStep = 1, sliderInitialValue, sliderMarks }: GeoGebraProps) {
    const [value, setValue] = useState(sliderInitialValue ?? sliderMin);
    const [scriptisLoaded, setScriptisLoaded] = useState(false);
    const ggbRef = useRef<HTMLDivElement | null>(null);
    const apiRef = useRef<any>(null);
    const { height: viewHeight, width: viewWidth } = useViewportSize();
    const aspectRatio = width / height;

    if (viewWidth < 1200) {
        width = 500;
    } else if (viewWidth < 1408) {
        width = 660;
    }
    height = width / aspectRatio;
    // Initialize the applet once
    useEffect(() => {
        const container = ggbRef.current;
        if (!container) return;
        if (!scriptisLoaded) return;

        const params: any = {
            appName,
            width,
            height,
            showToolBar: false,
            showAlgebraInput: false,
            showMenuBar: false,
            material_id: materialId,
        };

        // default: disable zoom/scrolling unless explicitly allowed
        if (disableZoom) {
            params.showZoomButtons = false;
            params.enableShiftDragZoom = false;
            params.enableWheelZoom = false;
        }

        params.appletOnLoad = (api: any) => {
            apiRef.current = api;
        };

        // Clear any existing content before injecting
        const applet = new window.GGBApplet(params, true);
        applet.inject(container);
    }, [scriptisLoaded]);

    // Apply coordinate system when api becomes available or when coords change.
    useEffect(() => {
        const api = apiRef.current;
        if (!api) return;

        if (coord3d) {
            api.setCoordSystem(coord3d.xmin, coord3d.xmax, coord3d.ymin, coord3d.ymax, coord3d.zmin, coord3d.zmax, coord3d.yVertical ?? false);
        } else if (coord) {
            api.setCoordSystem(coord.xmin, coord.xmax, coord.ymin, coord.ymax);
        }
    }, [coord, coord3d]);

    // Update slider value in GeoGebra applet
    useEffect(() => {
        apiRef.current?.setValue("h", value);
    }, [value]);

    return (
        <Fragment>
            <Script src="https://www.geogebra.org/apps/deployggb.js" strategy="lazyOnload" onReady={() => setScriptisLoaded(true)} />
            <Center my={"md"}>
                <Slider
                    thumbChildren={
                        <Badge size="xl" color="teal.9">
                            {sliderLabel}
                        </Badge>
                    }
                    styles={{
                        thumb: {
                            width: 100,
                            backgroundColor: "transparent",
                            borderColor: "transparent",
                        },
                    }}
                    label={null}
                    mt={"md"}
                    mb={"lg"}
                    w={sliderWidth}
                    marks={sliderMarks}
                    step={sliderStep}
                    min={sliderMin}
                    max={sliderMax}
                    value={value}
                    color="teal.9"
                    onChange={setValue}
                />
            </Center>
            <Center my={"md"}>
                <div ref={ggbRef}></div>
            </Center>
        </Fragment>
    );
}

export default function GeoGebraAppletSlider(props: GeoGebraProps) {
    return (
        <Suspense>
            <ErrorBoundary errorMessage="Die GeoGebra-Komponente konnte nicht geladen werden. Bitte aktualisiere die Seite.">
                <GeoGebraAppletSliderinner {...props} />
            </ErrorBoundary>
        </Suspense>
    );
}
