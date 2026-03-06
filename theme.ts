"use client";

import { createTheme, Divider, Flex, Image, List, ListItem, Mark, Space, Text } from "@mantine/core";
import { generateColors } from "@mantine/colors-generator";
import NextImage from "next/image";

export const theme = createTheme({
    components: {
        Text: Text.extend({
            defaultProps: {
                lh: 1.7,
                mt: 5,
                component: "div",
            },
        }),
        Divider: Divider.extend({
            defaultProps: {
                my: "md",
            },
        }),
        List: List.extend({
            defaultProps: {
                withPadding: true,
            },
        }),

        Image: Image.extend({
            defaultProps: {
                my: "md",
                mx: "auto",
                fit: "contain",
                component: NextImage,
                maw: "100%",
                h: {
                    base: "auto",
                    md: 300,
                },
                w: {
                    base: 300,
                    xs: 400,
                    sm: 500,
                    md: "auto",
                },
            },
        }),
        Space: Space.extend({
            defaultProps: {
                my: "md",
            },
        }),
        Flex: Flex.extend({
            defaultProps: {
                wrap: "wrap",
            },
        }),
        Mark: Mark.extend({
            defaultProps: {
                color: "none",
            },
        }),
    },
    colors: {
        desblue: generateColors("#3312B8"),
        desred: generateColors("#C92052"),
        desyellow: generateColors("#D1BC1B"),
    },
    fontSizes: {
        xs: "12pt",
        sm: "14pt",
        md: "16pt",
        lg: "18pt",
        xl: "20pt",
    },
    primaryColor: "teal",
    lineHeights: {
        xs: "1.5",
        sm: "1.6",
        md: "1.7",
        lg: "1.8",
        xl: "1.9",
    },
});
