"use client";

import { Container, Grid, GridCol, ScrollAreaAutosize } from "@mantine/core";
import { Sideview78 } from "../ui/sideview78";
import { Sideview910 } from "../ui/sideview910";
import { DocumentOutline } from "./DocumentOutline";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LayoutGridInner({ children }: { children: any }) {
    const pathname = usePathname();
    const isStudent = useSearchParams().get("students") == "true";
    const showSideview78 = pathname.startsWith("/klasse78");
    const showSideview910 = pathname.startsWith("/klasse910");
    const showOutline = showSideview78 || showSideview910;


    return (
        <Grid justify="space-between" gutter={0}>
            {showSideview78 && !isStudent && (
                <GridCol
                    span={{
                        base: 0,
                        md: 2.5,
                    }}
                    visibleFrom="md"
                >
                    <Sideview78 />
                </GridCol>
            )}
            {showSideview910 && !isStudent && (
                <GridCol
                    span={{
                        base: 0,
                        md: 2.5,
                    }}
                    visibleFrom="md"
                >
                    <Sideview910 />
                </GridCol>)}
            <GridCol
                span={
                    showOutline
                        ? isStudent ? {
                              base: 12,
                              md: 9,
                              lg: 9.5,
                          } : {
                              base: 12,
                              md: 6.5,
                              lg: 7,
                          } 
                        : {
                              base: 12,
                              md: 12,
                          }
                }
                style={{
                    overflow: "hidden",
                }}
            >
                <ScrollAreaAutosize mah={"calc(100vh - 56px)"} key={pathname}>
                    <Container
                        pb={200}
                        px={{
                            base: "10",
                            sm: "md",
                        }}
                    >
                        {children}
                    </Container>
                </ScrollAreaAutosize>
            </GridCol>
            {showOutline && (
                <GridCol
                    span={{
                        base: 0,
                        md: 3,
                        lg: 2.5,
                    }}
                    visibleFrom="md"
                >
                    <DocumentOutline />
                </GridCol>
            )}
        </Grid>
    );
}

export function LayoutGrid({ children }: { children: any }) {
    return (
        <Suspense>
            <LayoutGridInner>{children}</LayoutGridInner>
        </Suspense>
    );
}
