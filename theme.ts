"use client";

import { createTheme, Divider, Image, List, Space } from "@mantine/core";
import NextImage from "next/image";
export const theme = createTheme({
    components: {
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
                fit: "contain",
                component: NextImage,
            },
        }),
        Space: Space.extend({
            defaultProps: {
                my: "md",
            },
        }),
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
