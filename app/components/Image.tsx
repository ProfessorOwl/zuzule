"use client";

import {
    CSSProperties,
    Image,
    ImageProps,
    StyleProp,
} from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import NextImage from "next/image";
import { useEffect, useRef } from "react";

interface BetterImageProps extends ImageProps{
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
    ...others
}: BetterImageProps) {
    const {ref, width: containerWidth} = useElementSize()
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
                    {...others}
                />
        )
    }
