"use client";

import { Anchor, createTheme, Divider, Flex, List, Mark, Space, Spoiler, Text } from "@mantine/core";
import { generateColors } from "@mantine/colors-generator";

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
        Space: Space.extend({
            defaultProps: {
                my: "md",
            },
        }),
        Flex: Flex.extend({
            defaultProps: {
                wrap: "wrap",
                my: "md",
                gap: "md"
            },
        }),
        Mark: Mark.extend({
            defaultProps: {
                color: "none",
            },
        }),
        Anchor: Anchor.extend({
            defaultProps: {
                c: "teal.9"
            }
        })
    },
    colors: {
        teal: generateColors("#0D8762"),
        desblue: generateColors("#3012B8"),
        desred: generateColors("#B81E46"),
        desyellow: generateColors("#A39215"),
    },
    headings: {
         sizes: {
            h1: {fontSize: "2.125rem"},
            h2: {fontSize: "1.625rem"},
            h3: {fontSize: "1.625rem"},
            h4: {fontSize: "1.625rem"},
            h5: {fontSize: "1.625rem"},
            h6: {fontSize: "1.625rem"},

         }

    },
    fontSizes: {
        xs: "12pt",
        sm: "14pt",
        md: "16pt",
        lg: "18pt",
        xl: "20pt",
    },
    primaryColor: "teal",
    defaultRadius: "sm",
    
    lineHeights: {
        xs: "1.5",
        sm: "1.6",
        md: "1.7",
        lg: "1.8",
        xl: "1.9",
    },
});
