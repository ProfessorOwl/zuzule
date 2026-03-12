import { Image as MantineImage, ImageProps } from "@mantine/core";
import NextImage from "next/image"

export interface BetterImageProps extends ImageProps {
    h?: number | "auto";
    fit?: "contain" | "cover";
    width: number;
    height: number;
    alt: string;
}

export default function Image({h, fit = "contain", alt, width, height, ...others }: BetterImageProps) {
    const aspectRatio = width/height
    return (
        <MantineImage
            fit={fit}
            alt={alt}
            width={width > 1400 ? 1400 : width}
            height={width > 1400 ? width/aspectRatio : height}
            sizes={"(max-width: var(--mantine-breakpoint-md)) 80vw, 40vw"}
            my= "md"
            mx= "auto"
            component={NextImage}
            // w="100%"
            h={ h ? {base: "auto", md: h} : {base: "auto", md: 300}}
            maw= {{
                base: 300,
                xs: 400,
                sm: 500,
                md: "100%",
            }}
            {...others}
        />
    );
}
