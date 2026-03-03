"use client";

import {
    Center,
    CSSProperties,
    Flex,
    Image,
    Stack,
    StyleProp,
    Text,
} from "@mantine/core";
import NextImage from "next/image";

interface ImageCaptionProps {
    children: React.ReactNode;
    h?: StyleProp<CSSProperties["Height"]>;
    fit?: "contain" | "cover";
    src: string;
    width: number;
    height: number;
    alt: string;
    rotate?: false | "right" | "left";
}

export function ImageCaption({
    children,
    h,
    fit = "contain",
    src,
    width,
    height,
    alt,
    rotate = false,
}: ImageCaptionProps) {
    if (rotate == "right") {
        return (
            <Center>
                <Image
                    h={{ base: "auto", md: h }}
                    //@ts-ignore
                    w={{ base: 300, xs: 400, sm: 500, md: "auto" }}
                    mx={0}
                    fit={fit}
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                ></Image>
                <Flex align={"flex-end"} h={h}>
                    <Text
                        size="sm"
                        lh={"xs"}
                        style={{ writingMode: "sideways-lr" }}
                    >
                        {children}
                    </Text>
                </Flex>
            </Center>
        );
    }
    if (rotate == "left") {
        return (
            <Center>
                <Flex align={"flex-end"} h={h}>
                    <Text
                        size="sm"
                        lh={"xs"}
                        style={{ writingMode: "sideways-lr" }}
                    >
                        {children}
                    </Text>
                </Flex>
                <Image
                    h={h}
                    w={"auto"}
                    fit={fit}
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                ></Image>
            </Center>
        );
    } else {
        return (
            <Stack gap={"xs"} maw="100%">
                <Image
                    h={h}
                    fit={fit}
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                    mb={"0"}
                ></Image>
                <Text size="sm" ta={"center"} lh={"xs"}>
                    {children}
                </Text>
            </Stack>
        );
    }
}
