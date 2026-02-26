"use client";

import { Container, Grid, GridCol, ScrollAreaAutosize } from "@mantine/core";
import { Sideview78 } from "../ui/sideview78";
import { Sideview910 } from "../ui/sideview910";
import { DocumentOutline } from "./DocumentOutline";
import { usePathname } from "next/navigation";

export function LayoutGrid({ children }: { children: any }) {
    const pathname = usePathname();
    const showSideview78 = pathname.startsWith("/klasse78");
    const showSideview910 = pathname.startsWith("/klasse910");
    const showOutline = showSideview78 || showSideview910;

    return (
        <Grid justify="space-between" gutter={0}>
            {showSideview78 && (
                <GridCol span={{ base: 0, md: 2.5 }} visibleFrom="md">
                    <Sideview78 />
                </GridCol>
            )}
            {showSideview910 && (
                <GridCol span={{ base: 0, md: 2.5 }} visibleFrom="md">
                    <Sideview910 />
                </GridCol>
            )}
            <GridCol
                span={showOutline ? { base: 12, md: 7 } : { base: 12, md: 12 }}
            >
                <ScrollAreaAutosize mah={"calc(100vh - 56px)"}>
                    <Container fluid pb={200} px={{ base: "sm", sm: "md" }}>
                        <div>{children}</div>
                    </Container>
                </ScrollAreaAutosize>
            </GridCol>
            {showOutline && (
                <GridCol span={{ base: 0, md: 2.5 }} visibleFrom="md">
                    <DocumentOutline />
                </GridCol>
            )}
        </Grid>
    );
}
