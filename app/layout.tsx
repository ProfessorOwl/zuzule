import "@mantine/core/styles.css";
import React, { Suspense } from "react";
import {
    MantineProvider,
    ColorSchemeScript,
    mantineHtmlProps,
} from "@mantine/core";
import Script from "next/script";
import { theme } from "../theme";
import { HeaderSimple } from "./ui/header";
import { Lexend } from "next/font/google";
import localFont from "next/font/local";
import { LayoutGrid } from "./components/LayoutGrid";
import "./styles/globals.css";
import "katex/dist/katex.min.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
    title: "zuzule",
    description: "Zurück zum Lehrer – vor zum Lerner.",
};

const lexend = Lexend({
    subsets: ["latin"],
});

const pennstander = localFont({
    src: "./fonts/PennstanderMath-Light.otf",
    variable: "--font-pennstander",
});

export default function RootLayout({ children }: { children: any }) {
    return (
        <html lang="de" {...mantineHtmlProps} style={{ overflow: "clip" }}>
            <head>
                <ColorSchemeScript />
                <link rel="shortcut icon" href="/favicon.svg" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
                <Script
                    src="https://www.geogebra.org/apps/deployggb.js"
                    strategy="beforeInteractive"
                />
            </head>
            <body className={`${lexend.className} ${pennstander.variable}`}>
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
