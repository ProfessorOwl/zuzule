import { Center, Flex, Group, Image, Stack, Text } from "@mantine/core";
import NextImage from "next/image";

interface ImageCaptionProps {
    children: React.ReactNode;
    h: number;
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
                    component={NextImage}
                    h={h}
                    w={(width / height) * h}
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
                    component={NextImage}
                    h={h}
                    w={(width / height) * h}
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
}
