import { Center, Flex, Stack, Text, ImageProps } from "@mantine/core";
import Image, {BetterImageProps} from "./Image"; 

interface ImageCaptionProps extends BetterImageProps {
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
                <Text size="sm" mt="0" ta={"center"} lh={"xs"} maw={{base: 300, xs: 400, sm: 500, md: 375}}> 
                    {children}
                </Text>
            </Stack>
        );
    }
}
