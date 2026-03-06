"use client";

import { Center, CSSProperties, Flex, Stack, StyleProp, Text, ImageProps } from "@mantine/core";
import Image from "./Image";

interface ImageCaptionProps extends ImageProps {
    children: string | string[];
    fit?: "contain" | "cover";
    src: string;
    width: number;
    height: number;
    alt: string;
    rotate?: false | "right" | "left";
}

export function ImageCaption({ children, h, fit = "contain", src, width, height, alt, rotate = false, ...others }: ImageCaptionProps) {
    if (rotate == "right") {
        return (
            <Center mx={"auto"}>
                <Image h={h} mx={0} fit={fit} src={src} width={width} height={height} alt={alt} {...others}></Image>
                <Flex align={"flex-end"} h={h}>
                    <Text
                        size="sm"
                        lh={"xs"}
                        style={{
                            writingMode: "sideways-lr",
                        }}
                    >
                        {children}
                    </Text>
                </Flex>
            </Center>
        );
    }
    if (rotate == "left") {
        return (
            <Center mx={"auto"}>
                <Flex align={"flex-end"} h={h}>
                    <Text
                        size="sm"
                        lh={"xs"}
                        style={{
                            writingMode: "sideways-lr",
                        }}
                    >
                        {children}
                    </Text>
                </Flex>
                <Image h={h} mx={0} fit={fit} src={src} width={width} height={height} alt={alt} {...others}></Image>
            </Center>
        );
    } else {
        return (
            <Stack gap={"xs"} maw="100%" mx={"auto"}>
                <Image h={h} fit={fit} src={src} width={width} height={height} alt={alt} mb={"0"} {...others}></Image>
                <Text size="sm" ta={"center"} lh={"xs"}>
                    {children}
                </Text>
            </Stack>
        );
    }
}
