"use client";

import { Center } from "@mantine/core";
import { useEffect, useRef } from "react";

declare global {
    interface Window {
        GGBApplet: any;
    }
}

type Props = {
    materialId?: string;
    ggbBase64?: string;
    ggbUrl?: string;
    width?: number;
    height?: number;
    appName?: string;
    params?: Record<string, any>;
    disableZoom?: boolean; // default: true
    coord?: { xmin: number; ymin: number; xmax: number; ymax: number };
    coord3d?: {
        xmin: number;
        xmax: number;
        ymin: number;
        ymax: number;
        zmin: number;
        zmax: number;
        yVertical?: boolean; // default: true
    };
    mapValue?: { name: string; value: any }; // object with name of variable in applet and value to set
};

export default function GeoGebra({
    materialId,
    ggbBase64,
    ggbUrl,
    width = 800,
    height = 600,
    appName = "graphing",
    params: extraParams,
    disableZoom = true,
    coord,
    coord3d,
    mapValue,
}: Props) {
    const ggbRef = useRef<HTMLDivElement | null>(null);
    const apiRef = useRef<any>(null);
    const prevMapValueRef = useRef<{ name: string; value: any } | null>(null);

    // Initialize the applet once
    useEffect(() => {
        const params: any = {
            appName,
            width,
            height,
            showToolBar: false,
            showAlgebraInput: false,
            showMenuBar: false,
        };

        if (materialId) {
            params.material_id = materialId;
        } else if (ggbBase64) {
            params.ggbBase64 = ggbBase64;
        } else if (ggbUrl) {
            params.filename = ggbUrl;
        }

        // default: disable zoom/scrolling unless explicitly allowed
        if (disableZoom) {
            params.showZoomButtons = false;
            params.enableShiftDragZoom = false;
            params.enableWheelZoom = false;
        }

        // merge any extra params (overrides defaults)
        if (extraParams && typeof extraParams === "object") {
            Object.assign(params, extraParams);
        }

        // Set up callback to store API on load. Coordinate handling
        // is applied in a separate effect to avoid re-initializing the
        // applet when coords change.
        params.appletOnLoad = (api: any) => {
            apiRef.current = api;
            console.log("GeoGebra: applet loaded");
        };

        const applet = new window.GGBApplet(params, true);
        const container = ggbRef.current;
        if (container) applet.inject(container);

        return () => {
            if (container && container.parentNode) {
                container.innerHTML = "";
            }
            apiRef.current = null;
        };
    }, [
        materialId,
        ggbBase64,
        ggbUrl,
        width,
        height,
        appName,
        extraParams,
        disableZoom,
    ]);

    // Apply coordinate system when api becomes available or when coords change.
    useEffect(() => {
        const api = apiRef.current;
        if (!api) return;

        try {
            if (coord3d) {
                api.setCoordSystem(
                    coord3d.xmin,
                    coord3d.xmax,
                    coord3d.ymin,
                    coord3d.ymax,
                    coord3d.zmin,
                    coord3d.zmax,
                    coord3d.yVertical ?? false,
                );
                console.log("GeoGebra: setCoordSystem 3D applied", coord3d);
            } else if (coord) {
                api.setCoordSystem(
                    coord.xmin,
                    coord.xmax,
                    coord.ymin,
                    coord.ymax,
                );
                console.log("GeoGebra: setCoordSystem 2D applied", coord);
            }
        } catch (e) {
            console.warn("GeoGebra: setCoordSystem failed", e);
        }
    }, [coord, coord3d]);

    // Update mapValue without reloading the applet
    useEffect(() => {
        if (mapValue && apiRef.current) {
            try {
                // Unregister previous listener if it exists
                if (
                    prevMapValueRef.current &&
                    prevMapValueRef.current.name !== mapValue.name
                ) {
                    apiRef.current.unregisterObjectUpdateListener(
                        prevMapValueRef.current.name,
                    );
                }

                apiRef.current.setValue(mapValue.name, mapValue.value);
                console.log(
                    "GeoGebra: setValue applied",
                    mapValue.name,
                    mapValue.value,
                );

                // Register listener for continuous updates of this value
                apiRef.current.registerObjectUpdateListener(
                    mapValue.name,
                    (objName: string) => {
                        console.log(
                            `GeoGebra: ${objName} updated to`,
                            apiRef.current.getValue(objName),
                        );
                    },
                );

                prevMapValueRef.current = mapValue;
            } catch (e) {
                console.warn("GeoGebra: setValue failed", e);
            }
        }
        return () => {
            // cleanup: unregister listener for previous mapValue on unmount
            const prev = prevMapValueRef.current;
            if (prev && apiRef.current) {
                try {
                    apiRef.current.unregisterObjectUpdateListener(prev.name);
                } catch (e) {
                    /* ignore */
                }
            }
            prevMapValueRef.current = null;
        };
    }, [mapValue]);

    return (
        <Center my={"md"}>
            <div ref={ggbRef}></div>
        </Center>
    );
}
