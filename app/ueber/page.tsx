import { Box, Divider, Flex, SimpleGrid, Space, Title } from "@mantine/core";
import { Metadata } from "next";
import { Fragment } from "react/jsx-runtime";

export const metadata: Metadata = {
    title: "Über das Projekt – zuzule",
};

export default function Ueber() {
    return <Fragment>
        <Title order={1} mb={"md"} mt={"xl"}>Über das Projekt</Title>
       „Zurück zum Lehrer“ oder auch <b>zuzule</b> ist eine Lernwebsite, die es ermöglicht, Online-Lerninhalte gezielt im Unterricht einsetzen zu können. Sie wird im Rahmen einer Masterarbeit gestaltet und beinhaltet im Moment Geometrie und Körper als Themen.
        <Title order={2} mb={"md"} mt={"xl"}>Motivation</Title>
        Die meisten Lernwebsiten sind übersät mit unnötigen Inhalten wie Werbung, Anmeldeaufforderungen, unübersichtliche Inhaltsvorschläge, etc. Die Lerninhalte sind oft nach keinen Kriterien im Lehrplan gestaltet – dadurch benötigen sie entweder zu viel Vorwissen oder gehen nicht tief genug in die Thematik herein. Ein letzter Punkt ist die fehlende Kontrolle über die Inhalte. Der Lerngruppe kann entweder die ganze Website oder nichts geteilt werden. Lösungen, unnötige oder ablenkende Inhalte können nicht ausgeblendet werden.
        <Space/>
        <b>zuzuLe</b> versucht, all diese Schwächen zu kompensieren.

        <Title order={2} mb={"md"} mt={"xl"}>Funktionsweise</Title>
        <SimpleGrid cols={{base: 1, md: 2}}>
            <Box>Jedes Kapitel lässt sich mit dem Kästchen neben dem Titel ein- und ausklappen. Diese Änderung wird auch in der Kapitelübersicht rechts reflektiert. </Box>
            <video width={"100%"} autoPlay loop>
                <source src="/Anleitung1.webm" type="video/webm" />
            </video>

        </SimpleGrid>

        <Divider/>
        <SimpleGrid cols={{base: 1, md: 2}}>
        <Box>
        Durch Klicken auf den Button „Inhalt freigeben“ oben rechts werden die gemachten Änderungen festgehalten und eingeklappte Kapitel vollständig ausgeblendet. Der Link dieser Seite kann nun an die Lerngruppe weitergegeben werden, sodass eine personalisierte Websiteerfahrung gewährleistet werden kann.
        </Box>
            <video width={"100%"} autoPlay loop>
                <source src="/Anleitung2.webm" type="video/webm" />
            </video>
        </SimpleGrid>

        </Fragment>;
}
