"use client";

import { Center, Container, Grid, GridCol, ScrollAreaAutosize } from "@mantine/core";
import { Sideview } from "../ui/sideview";
import { usePathname } from "next/navigation";
import { cacheLife } from "next/dist/server/use-cache/cache-life";

export function LayoutGrid({ children }: { children: any }) {
  const pathname = usePathname();
  const showSideview = pathname.startsWith("/themen") || pathname.startsWith("/klasse7+8") || pathname.startsWith("/klasse9+10");

  return (
    <Grid justify="space-between" gutter={0}>
      {showSideview && (
        <GridCol span={2.5}>
          <Sideview />
        </GridCol>
      )}
      <GridCol span={showSideview ? 9.5 : 12}>
       <ScrollAreaAutosize mah={"calc(100vh - 56px)"}><Container size={"md"} pt={20}>{children}</Container></ScrollAreaAutosize>
      </GridCol>
    </Grid>
  );
}