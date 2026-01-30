import "@mantine/core/styles.css";
import React, { Suspense } from "react";
import {
    MantineProvider,
    ColorSchemeScript,
    mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../theme";
import { HeaderSimple } from "./ui/header";
import { Lexend } from "next/font/google";
import { LayoutGrid } from "./components/LayoutGrid";
import "./styles/globals.css";
import "katex/dist/katex.min.css";

export const metadata = {
    title: "zuzule",
    description: "",
};

const lexend = Lexend({
    subsets: ["latin"],
});

export default function RootLayout({ children }: { children: any }) {
    return (
        <html lang="de" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
                <link rel="shortcut icon" href="/favicon.svg" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
            </head>
            <body className={lexend.className}>
                <MantineProvider theme={theme}>
                    <HeaderSimple />
                    <Suspense>
                    <LayoutGrid>{children}</LayoutGrid>
                    </Suspense>
                </MantineProvider>
            </body>
        </html>
    );
}
