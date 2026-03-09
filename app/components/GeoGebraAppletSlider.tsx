"use client";

import { Badge, Center, Slider } from "@mantine/core";
import Script from "next/script";
import { Fragment, Suspense, useEffect, useRef, useState } from "react";

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
    const [scriptisLoaded, setScriptisLoaded] = useState(false)
    const ggbRef = useRef<HTMLDivElement | null>(null);
    const apiRef = useRef<any>(null);

    // Initialize the applet once
    useEffect(() => {
        const container = ggbRef.current;
        if (!container) return;
        if (!scriptisLoaded) return;

        // // Check if applet is already initialized in this container
        // const existingApplet = container.querySelector('[id^="ggb"]');
        // if (existingApplet && apiRef.current) {
        //     // Applet already exists, skip reinitializing
        //     return;
        // }

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

            // Set up callback to store API on load. Coordinate handling
            // is applied in a separate effect to avoid re-initializing the
            // applet when coords change.



            // params.appletOnLoad = (api: any) => {
            //     apiRef.current = api;

            //     // Setze die weite des unsichtbaren divs auf 0. Es wird von GeoGebra benötigt und muss erhalten bleiben, deshalb kann es nicht gelöscht werden.
            //     setTimeout(() => {
            //         const divs = document.querySelectorAll('div[style*="z-index: -32767"]');
            //         divs.forEach((div) => {
            //             if (div.getAttribute("aria-hidden") === "true") {
            //                 (div as HTMLElement).style.width = "0px";
            //             }
            //         });
            //     }, 100);
            // };

            // Clear any existing content before injecting
            container.innerHTML = "";
            const applet = new window.GGBApplet(params, true);
            applet.inject(container);
    }, [materialId, width, height, appName, disableZoom, scriptisLoaded]);

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
            <Script
                src="https://www.geogebra.org/apps/deployggb.js" 
                strategy="lazyOnload"
                onReady={() => setScriptisLoaded(true)} />
            <Center my={"md"}>
                <Slider
                    thumbChildren={<Badge size="xl">{sliderLabel}</Badge>}
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
            <GeoGebraAppletSliderinner {...props} />
        </Suspense>
    );
}
