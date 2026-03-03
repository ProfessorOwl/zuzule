"use client";

import {
    CSSProperties,
    Image,
    StyleProp,
} from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import NextImage from "next/image";
import { useEffect, useRef } from "react";

interface BetterImageProps {
    h?: StyleProp<CSSProperties["Height"]>;
    fit?: "contain" | "cover";
    src: string;
    width: number;
    height: number;
    alt: string;
}

export default function BetterImage({
    h,
    fit = "contain",
    src,
    width,
    height,
    alt,
}: BetterImageProps) {
    const {ref, width: containerWidth} = useElementSize()
    console.log(containerWidth)
        return (
                <Image
                    //@ts-ignore
                    ref={ref}
                    fit={fit}
                    src={src}
                    width={width}
                    height={height}
                    sizes={`${containerWidth}px`}
                    alt={alt}
                />
        )
    }
