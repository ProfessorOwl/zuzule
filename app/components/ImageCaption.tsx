import { Image, Stack, Text } from "@mantine/core";
import NextImage from "next/image";

interface ImageCaptionProps {
    children: React.ReactNode;
    h: number;
    fit?: "contain" | "cover";
    src: string;
    width: number;
    height: number;
    alt: string;
}

export function ImageCaption({
    children,
    h,
    fit = "contain",
    src,
    width,
    height,
    alt,
}: ImageCaptionProps) {
    return (
        <Stack gap={"xs"} w={(width / height) * h}>
            <Image
                component={NextImage}
                h={h}
                fit={fit}
                src={src}
                width={width}
                height={height}
                alt={alt}
            ></Image>
            <Text size="sm" ta={"center"} lh={"xs"}>
                {children}
            </Text>
        </Stack>
    );
}
