"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
    /* Put your mantine theme override here */
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
