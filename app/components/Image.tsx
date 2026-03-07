"use client";

import { CSSProperties, Image, ImageProps, StyleProp } from "@mantine/core";

interface BetterImageProps extends ImageProps {
    h?: StyleProp<CSSProperties["Height"]>;
    fit?: "contain" | "cover";
    src: string;
    width: number;
    height: number;
    alt: string;
}

export default function BetterImage({ h, fit = "contain", src, width, height, alt, ...others }: BetterImageProps) {
    const aspectRatio = width/height
    return (
        <Image
            h={h}
            fit={fit}
            src={src}
            width={width > 1400 ? 1400 : width}
            height={width > 1400 ? width/aspectRatio : height}
            sizes={"(max-width: var(--mantine-breakpoint-md)) 80vw, 40vw"}
            alt={alt}
            {...others}
        />
    );
}
