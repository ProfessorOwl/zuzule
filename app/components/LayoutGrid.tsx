"use client";

import { Center, Container, Grid, GridCol, ScrollAreaAutosize } from "@mantine/core";
import { Sideview } from "../ui/sideview";
import { Unna } from "next/font/google";
import { usePathname } from "next/navigation";

const unna = Unna({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function LayoutGrid({ children }: { children: any }) {
  const pathname = usePathname();
  const showSideview = pathname.startsWith("/themen");

  return (
    <Grid justify="space-between">
      {showSideview && (
        <GridCol span={2.5}>
          <Sideview />
        </GridCol>
      )}
      <GridCol className={unna.className} span={showSideview ? 9.5 : 12}>
       <Container size={"md"}><ScrollAreaAutosize mah={500}>{children}</ScrollAreaAutosize></Container>
      </GridCol>
    </Grid>
  );
}