import { CheckableHeading } from "@/components/CheckableHeading";
import thinsp from "@/components/thinsp";
import { Divider, Flex, List, ListItem, Mark, Space, Table, Text } from "@mantine/core";
import Video from "@/components/Video";
import Lichtkugel from "/videos/Lichtkugel.mov";
import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import Image from "@/components/Image";
import { Fragment } from "react/jsx-runtime";
import { ImageCaption } from "@/components/ImageCaption";
import { BlockMath } from "@/components/CustomMath";
import { InlineMath } from "react-katex";
import MBlockMath from "@/components/MBlockMath";
import { Lösung } from "@/components/Lösung";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kugeln – zuzule",
};

export default function Kugeln() {
    return (
        <Fragment>
            <CheckableHeading title="Die Kugel">
                Fragt man mehrere Mathematikerinnen und Mathematiker nach ihrem Lieblingskörper, so werden viele von ihnen vermutlich antworten, dass die <b>Kugel</b> der beste Körper ist. Kugeln haben nämlich einige interessante Eigenschaften: Sie hat keinerlei Kanten oder Ecken, kann frei rollen, sieht immer gleich aus, egal von welchem Winkel man sie betrachtet… Die Liste könnte jetzt noch lange weitergehen! Einige weitere Eigenschaften werden wir auf dieser Seite erkunden.
                <Flex>
                    <Image flex={"0 0 300px"} h={350} width={3375} height={5062} src={"/Kugeln/basketball.webp"} alt="Ein Basketball, der ins Netz fällt" />
                    <Image flex={"0 0 300px"} h={350} width={3375} height={5062} src={"/Kugeln/LasVegasSphere.webp"} alt="Ein Basketball, der ins Netz fällt" />
                </Flex>
            </CheckableHeading>
            <CheckableHeading title="Definition" titleOrder={2}>
                Eine Kugel ist eine Form, bei der alle Punkte auf der Oberfläche den <b>gleichen Abstand zu einem gemeinsamen Mittelpunkt</b> haben. Anders gesprochen: Nimmt man sich ein Seil mit fixer Länge und fixiert es an einem Stativ im Raum, dann sind all die Punkte Teil der Kugel, die man mit der Spitze erreichen kann. Das Video unten zeigt die zweite Definition in Aktion:
                <Video src={Lichtkugel} />
                Zeichnet man die Lichtbahnen nach, so entsteht dabei dieses Bild:
                <Image h={400} width={1920} height={1080} src={"/Kugeln/LichtKugel.webp"} alt="Eine Kugel, die aus Licht gezeichnet ist" />
                Durch das Fixieren des Mittelpunktes auf dem Stativ und einem festen Radius haben wir damit eine Kugel mit einem Radius von <InlineMath math="0{,}6\,\text{m}" /> gezeichnet.
                <CheckableBlockquote icon="aha" title="Probier es selbst aus!">
                    Man braucht keine professionelle Kamera für solche Langzeitbelichtungen. Schau mal in den Einstellungen deiner Handykamera und schaue, ob dort irgendwo das Wort „Langzeitbelichtung“ auftaucht – den Modus suchst du. Verdunkel dann den Raum und nimm eine schwache Lichtquelle, wie ein Feuerzeug, eine Wunderkerze oder ähnliches, und fahre damit Muster in den Raum. Schaffst du es auch, eine Kugel zu machen? Sind noch andere Formen möglich? Schau, was dabei herauskommt!
                </CheckableBlockquote>
            </CheckableHeading>
            <CheckableHeading title="Volumen">
                Das Volumen einer Kugel ist schwieriger zu bestimmen als bei den anderen Körpern wie Pyramiden, Prismen oder Kegel. Wir müssen dafür etwas kreativ werden und müssen das <b>Prinzip des Cavalieri</b> benutzen!
                <CheckableBlockquote title="Das Prinzip des Cavalieri" titleOrder={2} icon="exkurs">
                    Das Prinzip besagt, dass zwei Körper das gleiche Volumen besitzen, wenn sie in jeder Höhe die gleiche Schnittfläche besitzen. Vergleichen wir z.{thinsp}B. einen geraden mit einem schiefen Quader, die beide die gleiche Grundflächen wie Höhen haben.
                    <Image width={6000} height={4000} src={"/SchiefeKoerper/Schachteile.webp"} alt="Ein gerader und ein schiefer Stapel aus quadratischen Teilen" />
                    Beide Stapel bestehen aus <InlineMath math="10" /> gleichgroßen Teilstücken. In dem Beispiel sind sie relativ groß, kann man die Scheiben noch gut voneinander unterscheiden. Aber stell dir vor, wir machen sie dünner:
                    <Flex>
                        <ImageCaption h={250} src="/SchiefeKoerper/PapierstapelGerade.webp" width={6000} height={4000} alt="Ein gerader Stapel Papier">
                            Der Papierstapel ist gerade.
                        </ImageCaption>
                        <ImageCaption h={250} width={6000} height={4000} src={"/SchiefeKoerper/PapierstapelSchief.webp"} alt="Ein schiefer Stapel Papier">
                            Der Papierstapel ist schief.
                        </ImageCaption>
                    </Flex>
                    Die einzelnen Seiten sind nur schwer voneinander zu unterscheiden – aber beide Stapel haben exakt gleich viele Blätter. Es gilt also auch hier: Beide Stapel haben in der gleichen Höhe den gleichen Flächeninhalt, deshalb haben sie auch das gleiche Volumen.
                </CheckableBlockquote>
                <CheckableHeading title="Herleitung des Kugelvolumens" titleOrder={2}>
                    Oft hat man das Prinzip des Cavalieri dann im Kopf, wenn zwei Körper sich schon relativ ähnlich sehen: gerade vs. schiefe Pyramide, gerade vs. schiefes Prisma, … Tatsächlich ist es aber egal, welche Form unser Körper und die Schnittfläche haben, solange der <b>Flächeninhalt gleich ist</b>. Das nutzen wir nun aus. Wir konstruieren eine Halbkugel mit Radius <InlineMath math="r" />. Daneben stellen wir einen Zylinder mit gleichem Radius <InlineMath math="r" />, der so hoch ist wie die Kugel, also <InlineMath math="r" />
                    -hoch.
                    <Image h={400} width={1550} height={1000} src={"/Kugeln/KugelKegelHerleitung.webp"} alt="Links ein Zylinder, der einen Kegel enthält, rechts eine Halbkugel. Beide haben gleiche Höhe und Radius." />
                    Um das Prinzip des Cavalieri anwenden zu können, müssen wir zeigen, dass auf gleiche Höhe gleich große Flächen existieren.
                    <List>
                        <ListItem>
                            <b>Kreisring im Zylinder:</b> Wir schauen uns den Kreisring an, der zwischen Zylinder und Kegel liegt. Seine Fläche können wir berechnen, indem wir die Fläche des kleinen Kreises im Kegel von der Fläche des Gesamtkreises des Zylinders abziehen.
                            <Divider />
                            Die gesamte Kreisfläche entspricht der Grundseite des Zylinders:
                            <BlockMath math="A_\text{voll} = \pi \textcolor{#0D8762}{r}^2" />
                            Der Radius des Innenkreises im Kegel entspricht gerade unserer Höhe <InlineMath math="\textcolor{#3012B8}{x}" />, da der Kegel eine Neigung von 45° hat. Heißt: Für jedes <InlineMath math="\textcolor{#3012B8}{x}" /> das wir hoch gehen, müssen wir auch <InlineMath math="\textcolor{#3012B8}{x}" /> zur Seite gehen. Hier ergibt sich:
                            <BlockMath math="A_\text{innen} = \pi \textcolor{#3012B8}{x}^2" />
                            Damit können wir die Fläche vom Kreisring <InlineMath math="A_\text{Z}" /> berechnen.
                            <BlockMath math="A_\text{Z} &= A_\text{voll} - A_\text{innen} \\ &= \pi \textcolor{#0D8762}{r}^2 - \pi \textcolor{#3012B8}{x}^2" />
                            Weiter können wir das erstmal nicht vereinfachen. Gehen wir also zum Halbkreis
                        </ListItem>

                        <ListItem>
                            <b>Fläche im Halbkreis:</b> Hier müssen wir den Satz des Pythagoras einsetzen, um nach <InlineMath math="\textcolor{#987000}{r_\text{K}}" /> aufzulösen.
                            <MBlockMath desktop="\textcolor{#3012B8}{x}^2 + \textcolor{#987000}{\textcolor{#987000}{r_\text{K}}}^2 &= \textcolor{#0D8762}{r}^2 &&\lvert -\textcolor{#3012B8}{x}^2 \\ \textcolor{#987000}{r_\text{K}}^2 &= \textcolor{#0D8762}{r}^2 - \textcolor{#3012B8}{x}^2 &&\lvert \sqrt{} \\ \textcolor{#987000}{r_\text{K}} &= \sqrt{\textcolor{#0D8762}{r}^2 - \textcolor{#3012B8}{x}^2}" mobile="\textcolor{#3012B8}{x}^2 + \textcolor{#987000}{r_\text{K}}^2 &= \textcolor{#0D8762}{r}^2 \\ &Downarrow \scriptsize{-\textcolor{#3012B8}{x}^2} \\ \textcolor{#987000}{r_\text{K}}^2 &= \textcolor{#0D8762}{r}^2 - \textcolor{#3012B8}{x}^2 \\&Downarrow \scriptsize{\sqrt{}} \\ \textcolor{#987000}{r_\text{K}} &= \sqrt{\textcolor{#0D8762}{r}^2 - \textcolor{#3012B8}{x}^2}" />
                            Nun nutzen wir die normale Flächenformel für einen Kreis, um auf die Fläche <InlineMath math="A_\text{K}" /> zu kommen:
                            <BlockMath math="A_\text{K} &= \pi \textcolor{#987000}{r_\text{K}}^2 \\ &=\pi \cdot \left(\sqrt{\textcolor{#0D8762}{r}^2 - \textcolor{#3012B8}{x}^2}\right)^2 \\ &= \pi (\textcolor{#0D8762}{r}^2 - \textcolor{#3012B8}{x}^2) \\ &= \pi \textcolor{#0D8762}{r}^2 - \pi \textcolor{#3012B8}{x}^2" />
                            Das ist exakt das gleiche Ergebnis wie vorhin!
                        </ListItem>
                    </List>
                    Damit haben wir hergeleitet, dass die Halbkugel in jeder Höhe die gleiche Schnittfläche hat wie der Kreisring zwischen Kegel und Zylinder, denn es gilt: <InlineMath math="A_\text{Z} = A_\text{K}" />
                    . Wir können also die Regel von Cavalieri anwenden. Die Halbkugel hat damit das gleiche Volumen wie der Körper zwischen dem Kegel und dem Zylinder. Genau dieses Volumen müssen wir jetzt berechnen!
                    <Divider />
                    Das Volumen bekommen wir raus, indem wir das Volumen des Kegels vom Volumen des Zylinders abziehen.
                    <List>
                        <ListItem>
                            <b>Volumen des Zylinders:</b>
                            <MBlockMath desktop="V_\text{Zylinder} &= \pi \textcolor{#0D8762}{r}^2 \cdot h &&\lvert h = \textcolor{#0D8762}{r} \\ &= \pi \textcolor{#0D8762}{r}^2 \cdot \textcolor{#0D8762}{r} \\ &=\pi \textcolor{#0D8762}{r}^3" mobile="V_\text{Zylinder} &= \pi \textcolor{#0D8762}{r}^2 \cdot h \\ &\Downarrow \scriptsize{h = \textcolor{#0D8762}{r}} \\ &= \pi \textcolor{#0D8762}{r}^2 \cdot \textcolor{#0D8762}{r} \\ &=\pi \textcolor{#0D8762}{r}^3" />
                        </ListItem>
                        <ListItem>
                            <b>Volumen des Kegels:</b>
                            <MBlockMath desktop="V_\text{Kegel} &= \frac{1}{3}\pi \textcolor{#0D8762}{r}^2 \cdot h &&\lvert h = \textcolor{#0D8762}{r} \\ &= \frac{1}{3}\pi \textcolor{#0D8762}{r}^2 \cdot \textcolor{#0D8762}{r} \\ &=\frac{1}{3}\pi \textcolor{#0D8762}{r}^3" mobile="V_\text{Kegel} &= \frac{1}{3}\pi \textcolor{#0D8762}{r}^2 \cdot h \\ &\Downarrow \scriptsize{h = \textcolor{#0D8762}{r}} \\ &= \frac{1}{3}\pi \textcolor{#0D8762}{r}^2 \cdot \textcolor{#0D8762}{r} \\ &=\frac{1}{3}\pi \textcolor{#0D8762}{r}^3" />
                        </ListItem>
                    </List>
                    Berechnen wir das Volumen des Körpers und damit auch der Halbkugel <InlineMath math="V_\text{Halbkugel}" />
                    , so kommen wir auf:
                    <BlockMath math="V &= V_\text{Zylinder} - V_\text{Kegel} \\ &= \pi \textcolor{#0D8762}{r}^3 - \frac{1}{3}\pi \textcolor{#0D8762}{r}^3 \\ &= \frac{2}{3}\pi \textcolor{#0D8762}{r}^3" />
                    Das Volumen der Halbkugel entspricht also <InlineMath math="V_\text{Halbkugel} = \frac{2}{3}\pi \textcolor{#0D8762}{r}^3" />
                    . Um das Volumen einer ganzen Kugel zu bekommen, multiplizieren wir das Volumen mal zwei, also bekommen wir:
                    <BlockMath math="V_\text{Kugel} = \frac{4}{3}\pi \textcolor{#0D8762}{r}^3" />
                </CheckableHeading>
                <CheckableBlockquote title="Aufgabe: Volumenübungen" icon="frage" titleOrder={2}>
                    Gegeben ist der Wert eines Maßes. Berechne die fehlenden Maße <InlineMath math="r, d" /> und <InlineMath math="V" />
                    <List>
                        <ListItem>
                            <InlineMath math="r=3\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="r=1.5\,\text{m}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="d=4\,\text{m}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="V=55\,\text{m}^3" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="V=1135\,\text{cm}^3" />
                        </ListItem>
                    </List>
                    <Lösung title="Lösung" titleOrder={3} id="Lösung-Volumen">
                        <List>
                            <ListItem>
                                Gegeben: <InlineMath math="r=3\,\text{cm}" />
                                <BlockMath math="d &= 2 r \\&= 6\,\text{cm} \\ V &= \frac{4}{3}\pi r^3\\ &= \frac{4}{3}\pi \cdot(3\,\text{cm})^3 \\&\approx 113{,}10\,\text{cm}^3 " />
                            </ListItem>
                            <ListItem>
                                Gegeben: <InlineMath math="r=1.5\,\text{m}" />
                                <BlockMath math="d &= 3\,\text{m} \\ V &= \frac{4}{3}\pi \cdot(1{,}5\,\text{m})^3 \\ &\approx 14{,}14\,\text{m}^3 " />
                            </ListItem>
                            <ListItem>
                                Gegeben: <InlineMath math="d=4\,\text{m}" />
                                <BlockMath math="r &= \frac{1}{2} d \\&= 2\,\text{m} \\ V &= \frac{4}{3}\pi \cdot(2\,\text{m})^3 \\ &\approx 33{,}51\,\text{m}^3 " />
                            </ListItem>
                            <ListItem>
                                Gegeben: <InlineMath math="V=55\,\text{m}^3" />
                                <MBlockMath desktop=" V &= \frac{4}{3}\pi r^3 && \lvert \cdot \frac{3}{4} \\ \frac{3}{4}V &= \pi r^3 && \lvert : \pi \\ \frac{3}{4\pi}V &= r^3 && \lvert \sqrt[3]{} \\ \sqrt[3]{\frac{3}{4\pi}V} &= r \\ \Rightarrow r &= \sqrt[3]{\frac{3}{4\pi}55\,\text{m}^3} \approx 2{,}36\,\text{m} \\ d &= 4{,}72\,\text{m}\\" mobile=" V &= \frac{4}{3}\pi r^3 \\ &\Downarrow \scriptsize{\cdot \frac{3}{4}} \\ \frac{3}{4}V &= \pi r^3\\ &\Downarrow \scriptsize{: \pi} \\ \frac{3}{4\pi}V &= r^3 \\ &\Downarrow \scriptsize{\sqrt[3]{}} \\ \sqrt[3]{\frac{3}{4\pi}V} &= r \\ \Rightarrow r &= \sqrt[3]{\frac{3}{4\pi}55\,\text{m}^3} \approx 2{,}36\,\text{m} \\ d &= 4{,}72\,\text{m}" />
                            </ListItem>
                            <ListItem>
                                Gegeben: <InlineMath math="V=1135\,\text{cm}^3" />
                                <BlockMath
                                    math=" r &=  \sqrt[3]{\frac{3}{4\pi}V} \\ &= \sqrt[3]{\frac{3}{4\pi}1135\,\text{cm}^3} \approx 6{,}47\,\text{cm} \\
                        d &= 2r \\ &= 12{,}94\,\text{m}"
                                />
                            </ListItem>
                        </List>
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>
            <CheckableHeading title="Oberfläche">
                Auch die Oberfläche einer Kugel lässt sich nicht so einfach wie bei anderen Körpern bestimmen. Da wir das Volumen aber bereits wissen, können wir es uns einfacher machen! Hierbei greifen wir auf die Grundfläche von Pyramiden zurück.
                <Divider />
                Dafür füllen wir die Oberfläche einer Kugel mit ganz vielen <b>Vierecken</b> oder <b>Dreiecken</b> aus. Die Form spielt keine Rolle, solange man aus den Flächen eine Pyramide bilden kann, deren Spitze der Mittelpunkt der Kugel ist. Die linke Seite des Bildes unten erklärt, wie so eine „Kugel“ aussehen würde.
                <Image visibleFrom="md" h={400} width={2100} height={800} src={"/Kugeln/KugelUnterteilungDesktop.webp"} alt="Eine Kugel, deren Oberfläche in viele Rechtecke unterteilt ist. Ein Rechteck ist hervorgehoben, die Ecken sind mit Linien bis zum Mittelpunkt der Kugel verbunden, sodass eine quadratische Pyramide entsteht. " />
                <Image hiddenFrom="md" h={400} width={2100} height={800} src={"/Kugeln/KugelUnterteilungMobil.webp"} alt="Eine Kugel, deren Oberfläche in viele Rechtecke unterteilt ist. Ein Rechteck ist hervorgehoben, die Ecken sind mit Linien bis zum Mittelpunkt der Kugel verbunden, sodass eine quadratische Pyramide entsteht" />
                Der Trick ist nun – da wir die Seiten frei wählen können – dass wir die Pyramiden unendlich klein wählen. Dadurch bekommen wir nämlich wieder eine Kugel! Außerdem können wir dann annehmen, dass unsere Pyramiden eine Höhe von{" "}
                <Mark c={"teal.9"}>
                    <InlineMath math="r" />
                </Mark>{" "}
                haben. Jetzt nutzen wir aus, dass wir die Volumenformel für Kugel und Pyramide kennen, damit können wir dann die Oberflächenformel der Kugel herleiten.
                <Divider />
                Die Volumenformel für eine Kugel lautet:
                <BlockMath math="V = \frac{4}{3}\pi \textcolor{#0D8762}{r}^3" />
                Die Kugel haben wir in eine beliebige Anzahl von Pyramiden zerteilt, also in <InlineMath math="n" />
                -Pyramiden.
                <BlockMath math="V = V_\text{Pyramide, 1} + V_\text{Pyramide, 2} + \ldots + V_{\text{Pyramide}, n}" />
                Beide Gleichungen können wir gleichsetzen, da beide dem Kugelvolumen entsprechen:
                <BlockMath math="\frac{4}{3}\pi \textcolor{#0D8762}{r}^3 = V_\text{Pyramide, 1} + V_\text{Pyramide, 2} + \ldots + V_{\text{Pyramide}, n}" />
                Jetzt setzen wir die Formel für das Pyramidenvolumen <InlineMath math="V_\text{Pyramide} = \frac{1}{3}Gh" /> ein, wobei die Höhe <InlineMath math="h" /> in unserem Fall dem Radius{" "}
                <Mark c="teal.9">
                    <InlineMath math="r" />
                </Mark>{" "}
                entspricht:
                <MBlockMath
                    desktop="\frac{4}{3}\pi \textcolor{#0D8762}{r}^3 &= \frac{1}{3}G_1\textcolor{#0D8762}{r} + \frac{1}{3}G_2\textcolor{#0D8762}{r} + \ldots + \frac{1}{3}G_n\textcolor{#0D8762}{r} &&\lvert \cdot 3 \\
                    4\pi \textcolor{#0D8762}{r}^3 &= G_1\textcolor{#0D8762}{r} + G_2\textcolor{#0D8762}{r} + \ldots + G_n\textcolor{#0D8762}{r} &&\lvert :r \\
                    4\pi \textcolor{#0D8762}{r}^2 &= G_1 + G_2 + \ldots + G_n"
                    mobile="\frac{4}{3}\pi \textcolor{#0D8762}{r}^3 &= \frac{1}{3}G_1\textcolor{#0D8762}{r} + \frac{1}{3}G_2\textcolor{#0D8762}{r} + \ldots + \frac{1}{3}G_n\textcolor{#0D8762}{r} \\ &\Downarrow \scriptsize{\cdot 3} \\
                    4\pi \textcolor{#0D8762}{r}^3 &= G_1\textcolor{#0D8762}{r} + G_2\textcolor{#0D8762}{r} + \ldots + G_n\textcolor{#0D8762}{r} \\ &\Downarrow \scriptsize{:3} \\
                    4\pi \textcolor{#0D8762}{r}^2 &= G_1 + G_2 + \ldots + G_n"
                />
                Die Gleichung haben wir vereinfacht, indem wir mit 3 multipliziert und durch{" "}
                <Mark c="teal.9">
                    {" "}
                    <InlineMath math="r" />
                </Mark>{" "}
                geteilt haben. Auf der rechten Seite stehen nun nur noch die Grundflächen der Pyramiden. Genau hier wollten wir ankommen! Denn die Summe aller Grundfläche entspricht dem Oberflächeninhalt der Kugel!
                <BlockMath math=" O = 4\pi \textcolor{#0D8762}{r}^2" />
                Damit haben wir die Oberflächenformel für die Kugel hergeleitet!
                <CheckableBlockquote title="Aufgabe: Oberflächenübungen" icon="frage">
                    Gegeben ist der Wert eines Maßes. Berechne die fehlenden Maße <InlineMath math="r, d" /> und <InlineMath math="O" />
                    <List>
                        <ListItem>
                            <InlineMath math="r=2\,\text{m}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="r=3{,}4\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="d=0{,}9\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="O=209\,\text{cm}^2" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="O=3950\,\text{mm}^2" />
                        </ListItem>
                    </List>
                    <Lösung title="Lösung" id="Lösung-Oberflächen" titleOrder={3}>
                        <List>
                            <ListItem>
                                Gegeben: <InlineMath math="r=2\,\text{m}" />
                                <BlockMath math="d &= 2 r \\ &= 2 \cdot 2\,\text{m} \\&= 4\,\text{m} \\ O &= 4\pi r^2\\ &= 4\pi \cdot(2\,\text{m})^2 \\&\approx 50{,}27\,\text{m}^2 " />
                            </ListItem>
                            <ListItem>
                                Gegeben: <InlineMath math="r=3{,}4\,\text{cm}" />
                                <BlockMath math="d &= 2 \cdot 3{,}4\,\text{cm} \\ &= 6{,}8\,\text{cm}  \\ O&= 4\pi \cdot(3{,}4\,\text{cm})^2 \\&\approx 145{,}27\,\text{cm}^2 " />
                            </ListItem>
                            <ListItem>
                                Gegeben: <InlineMath math="d=0{,}9\,\text{cm}" />
                                <BlockMath math="r &= \frac{1}{2} d \\ &= \frac{1}{2} \cdot 0{,}9\,\text{cm} \\&= 0{,}45 \,\text{cm} \\ O&= 4\pi \cdot(0{,}9\,\text{cm})^2 \\&\approx 10{,}18\,\text{cm}^2 " />
                            </ListItem>
                            <ListItem>
                                Gegeben: <InlineMath math="O=209\,\text{cm}^2" />
                                <MBlockMath
                                    desktop="O &= 4\pi r^2 && \lvert : 4\pi \\ \frac{O}{4\pi} &= r^2 &&\lvert \sqrt{} \\ \sqrt{\frac{O}{4\pi}} &= r \\\Rightarrow r &= \sqrt{\frac{209\,\text{cm}^2}{4\pi}} \approx 16{,}63\,\text{cm} \\ 
                        d &= 2 \cdot  16{,}63\,\text{cm} \\ &= 33{,}26\,\text{cm}"
                                    mobile="O &= 4\pi r^2 \\ &\Downarrow \scriptsize{: 4\pi} \\ \frac{O}{4\pi} &= r^2 \\ &\Downarrow \scriptsize{\sqrt{}} \\ \sqrt{\frac{O}{4\pi}} &= r \\\Rightarrow r &= \sqrt{\frac{209\,\text{cm}^2}{4\pi}} \approx 16{,}63\,\text{cm} \\ 
                        d &= 2 \cdot  16{,}63\,\text{cm} \\ &= 33{,}26\,\text{cm}"
                                />
                            </ListItem>
                            <ListItem>
                                Gegeben: <InlineMath math="O=3950\,\text{mm}^2" />
                                <BlockMath
                                    math=" r &=  \sqrt{\frac{O}{4\pi}} \\ &= \sqrt{\frac{3950\,\text{mm}^2}{4\pi} } \approx 313{,}54\,\text{mm} \\
                        d &= 2 \cdot 313{,}54\,\text{mm} \\ &= 627{,}08\,\text{mm}"
                                />{" "}
                            </ListItem>
                        </List>
                    </Lösung>
                </CheckableBlockquote>
                <CheckableBlockquote title="Aufgabe: Lunge" titleOrder={2}>
                    Damit unser Körper genug Sauerstoff bekommt ist unsere Lunge mit extrem vielen, kleinen Lungenbläschen versehen. Im Schnitt hat jeder Mensch <InlineMath math="400" /> Millionen dieser Bläschen, die ca. einen Durchmesser von <InlineMath math="0{,}2\,\text{mm}" /> haben.
                    <List type="ordered">
                        <ListItem>Berechne die Gesamtoberfläche der Lunge.</ListItem>
                        <ListItem>Wie vielen Quadratmetern entspricht das? Berechne die Seitenlänge eines Quadrats mit identischem Flächeninhalt.</ListItem>
                    </List>
                    <Lösung title="Lösung" titleOrder={3} id="Lösung-Lunge">
                        <List type="ordered">
                            <ListItem>
                                Die Oberfläche eines Lungenbläschen berechnet sich mit der Formel <InlineMath math="O = 4\pi r^2" />. Da in der Aufgabe nur der Durchmesser gegeben ist, müssen wir den Radius daraus durch Halbieren herleiten.
                                <BlockMath
                                    math="O_\text{Bläschen} &= 4 \pi \cdot (\frac{0{,}2}{2}\,\text{mm})^2 \\
                                        &= 0{,}123\,\text{mm}^2"
                                />
                                Für das Gesamtvolumen der Lunge müssen wir diesen Wert mit 400.000.000 multiplizieren:
                                <BlockMath
                                    math="O_\text{Lunge} &= 400.000.000 \cdot O_\text{Bläschen} \\
                                        &= 400.000.000 \cdot 0{,}123\,\text{mm}^2 \\
                                        &=50.400.000\,\text{mm}^2 "
                                />
                            </ListItem>
                            <ListItem>
                                Wir müssen zuerst den Wert von mm<sup>2</sup> in m<sup>2</sup> umrechnen:
                                <BlockMath
                                    math="50.400.000\,\text{mm}^2 &= 50.400.000 \cdot \,(0{,}001\text{m})^2 \\
                                        &= 50{,}4\,\text{m}^2"
                                />
                                Das ist die Gesamtfläche der Lunge in m<sup>2</sup>. Um zu der Fläche eines Quadrates zu kommen, verwenden wir dessen Flächeformel und stellen nach der Seitenlänge um:
                                <MBlockMath
                                    desktop="A &= a^2 &&\lvert \sqrt{} \\
                                    &\Rightarrow a = \sqrt{A}"
                                    mobile="A &= a^2 \\ &\Downarrow \scriptsize{\sqrt{}} \\
                                    &\Rightarrow a = \sqrt{A}"
                                />
                                Einsetzen der Lungenoberfläche gibt uns:
                                <BlockMath
                                    math="A &= \sqrt{50{,}4\,\text{m}^2} \\
                                    &\approx 7,10\,\text{m}"
                                />
                                Die Gesamtoberfläche der Lunge ist demnach identisch mit dem Flächeninhalt eines quadratischen Zimmers, das eine Seitenlänge von ca. <InlineMath math="7\,\text{m}" /> hat! Ist dein Zimmer so groß?
                            </ListItem>
                        </List>
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>
            <CheckableBlockquote icon="frage" title="Aufgabe: Planetenvergleich" titleOrder={1}>
                Sucht man nach Bildern unseres Sonnensystems, so stößt man oft auf solche Darstellungen:
                <Image h={350} width={3804} height={2160} src={"/Kugeln/Sonnensystem.webp"} alt="Eine Darstellung unseres Sonnensystems von der Seite. Die Größenverhältnisse und Abstände sind nicht korrekt." />
                Das sieht zwar schön aus, aber die Größenverhältnisse sind (hier) falsch. Deshalb macht es Sinn, sich mathematisch die Unterschiede bewusst zu machen. Vergleiche die Erde und den Mond mit dem größten Planeten, Jupiter. Die Himmelskörper haben folgende Radii <InlineMath math="r" />:
                <BlockMath math="r_\text{Erde}&=6371\,\text{km} \\ r_\text{Mond}&=1738\,\text{km} \\ r_\text{Jupiter}& =71492\,\text{km}" />
                <List type="ordered">
                    <ListItem>Berechne die Oberflächeninhalte der Himmelskörper und bestimme die Verhältnisse Erde/Mond und Jupiter/Erde.</ListItem>
                    <ListItem>Berechne die Volumina der Himmelskörper, gib erneut die Verhältnisse an.</ListItem>
                    <ListItem>
                        Die Himmelskörper haben verschiedene Dichten <InlineMath math="\rho" />.
                        <BlockMath
                            math="\rho_\text{Erde} & = 5{,}5\frac{\text{g}}{\text{cm}^3} \\
                            \rho_\text{Mond} &= 3{,}4\frac{\text{g}}{\text{cm}^3} \\
                            \rho_\text{Jupiter} &= 1{,}3\frac{\text{g}}{\text{cm}^3}"
                        />
                        Berechne deren Massen und bestimme erneut die Verhältnisse. Gibt es einen Unterschied zum Volumen? Was könnte das über die Zusammensetzung der Planeten aussagen?
                    </ListItem>
                </List>
                <Divider />
                <b>Hinweis:</b> Die Zahlen werden hier ziemlich groß. Verwende die wissenschaftliche Notation, um nicht alle Stellen ausschreiben zu müssen, z.{thinsp}B. <InlineMath math="150.000 = 150 \cdot 10^3" />, <InlineMath math="13.400.000.000.000 = 13,4 \cdot 10^{12}" />. Das fasst die vielen Nullen als Zehnerpotenz hinter der Zahl zusammen.
                <Lösung title="Lösung" id="Lösung-Planetenvergleich" titleOrder={2}>
                    <List type="ordered">
                        <ListItem>
                            Formel für Oberflächeninhalt: <InlineMath math="O =4\pi r^2" />
                            <BlockMath
                                math="O_\text{Erde} &= 4 \pi \cdot( 6371\,\text{km})^2 \\
                            &= 510.064.472\,\text{km}^2 \\
                            O_\text{Mond} &= 4 \pi \cdot (1738\,\text{km})^2 \\
                            &= 37.958.532\,\text{km}^2 \\
                            O_\text{Jupiter} &= 4 \pi \cdot (71492\,\text{km})^2 \\
                            &= 64.228.053.050\,\text{km}^2"
                            />
                            Verhältnis Erde/Mond:
                            <BlockMath math="\frac{O_\text{Erde}}{O_\text{Mond}} = \frac{510.064.472\,\text{km}^2}{37.958.532\,\text{km}^2} \approx 13{,}44" />
                            Verhältnis Jupiter/Erde:
                            <BlockMath math="\frac{O_\text{Jupiter}}{O_\text{Erde}} = \frac{64.228.053.050\,\text{km}^2}{510.064.472\,\text{km}^2} \approx 125{,}92" />
                            Die Oberfläche der Erde ist ca. <InlineMath math="13" /> mal so groß wie die des Mondes, die Oberfläche von Jupiter ca. <InlineMath math="126" /> mal so groß wie die Erde.
                        </ListItem>
                        <ListItem>
                            Formel für Volumen: <InlineMath math="V = \frac{4}{3}\pi r^3" />
                            <BlockMath
                                math="V_\text{Erde} &= \frac{4}{3}\pi \cdot( 6371\,\text{km})^3 \\ 
                            &= 1.083.206.917.000\,\text{km}^3 \\
                            V_\text{Mond} &= \frac{4}{3}\pi \cdot( 1738\,\text{km})^3 \\ 
                            &= 21.990.642.870\,\text{km}^3 \\
                            V_\text{Jupiter} &= \frac{4}{3}\pi \cdot( 71492\,\text{km})^3 \\ 
                            &= 1.530.597.323.000.000\,\text{km}^3"
                            />
                            Die Zahlen können wir in wissenschaftliche Notation überführen, um sie besser lesbar zu machen.
                            <BlockMath
                                math="V_\text{Erde} &= 1.083.206.917.000\,\text{km}^3 \\
                            &= 1,08 \cdot 10^{12}\,\text{km}^3 \\ 
                            V_\text{Mond} &= 21.990.642.870\,\text{km}^3 \\
                            &= 22,0 \cdot 10^9\,\text{km}^3 \\
                            V_\text{Jupiter} &= 1.530.597.323.000.000\,\text{km}^3 \\
                            &= 1.53 \cdot 10^{15}\,\text{km}^3"
                            />
                            Verhältnis Erde/Mond:
                            <BlockMath math="\frac{V_\text{Erde}}{V_\text{Mond}} = \frac{1,08 \cdot 10^{12}\,\text{km}^3}{22,0 \cdot 10^9\,\text{km}^3} \approx 49{,}26" />
                            Verhältnis Jupiter/Erde:
                            <BlockMath math="\frac{V_\text{Jupiter}}{V_\text{Erde}} = \frac{1.53 \cdot 10^{15}\,\text{km}^2}{1,08 \cdot 10^{12}\,\text{km}^2} \approx 1413{,}02" />
                            Der Mond passt demnach ca. <InlineMath math="49" /> mal in die Erde, die Erde wiederum ca. <InlineMath math="1413" /> mal in Jupiter.
                        </ListItem>
                        <ListItem>
                            Um das Gewicht <InlineMath math="m" /> aus dem Volumen <InlineMath math="V" /> und der Dichte <InlineMath math="\rho" /> zu berechnen, benutzt man folgende Formel:
                            <BlockMath math="m = V \cdot \rho" />
                            Die Dichte ist oben in <InlineMath math="\frac{\text{g}}{\text{cm}^3}" />. Das sollten wir in <InlineMath math="\frac{\text{t}}{\text{km}^3}" /> umrechnen, damit die Einheiten mit dem Volumen übereinstimmen.
                            <BlockMath
                                math="\frac{\text{g}}{\text{cm}^3} &= \frac{10^{-6}\,\text{t}}{\left(10^{-5}\,\text{km}\right)^3} \\
                            &= \frac{10^{-6}\,\text{t}}{10^{-15}\,\text{km}^3} \\
                            &= \frac{\text{t}}{10^{-9}\,\text{km}^3} \\
                            &= 10^9\,\frac{\text{t}}{\text{km}^3} \\
                            &\stackrel{\wedge}{=}  1.000.000.000\,\frac{\text{t}}{\text{km}^3}"
                            />
                            Jetzt wird es Zeit, die Volumina mit den Dichten zu multiplizieren, um die Masse der Himmelskörper zu bekommen.
                            <BlockMath
                                math="m_\text{Erde} &= 1,08 \cdot 10^{12}\,\text{km}^3 \cdot 5{,}5 \cdot  10^9\,\frac  {\text{t}}{\text{km}^3} \\
                            &= 5{,}96 \cdot 10^{21}\,\text{t} \\
                            m_\text{Mond} &= 22,0 \cdot 10^9\,\text{km}^3 \cdot 3{,}4 \cdot  10^9\,\frac  {\text{t}}{\text{km}^3} \\
                            &= 7{,}48 \cdot 10^{19}\,\text{t} \\
                            m _\text{Jupiter} &= 1.53 \cdot 10^{15}\,\text{km}^3 \cdot 1{,}3 \cdot  10^9\,\frac  {\text{t}}{\text{km}^3} \\ 
                            &= 2{,}00 \cdot 10^{24}\,\text{t}"
                            />
                            Verhältnis Erde/Mond:
                            <BlockMath math="\frac{m_\text{Erde}}{m_\text{Mond}} = \frac{5{,}96 \cdot 10^{21}\,\text{t}}{7{,}48 \cdot 10^{19}\,\text{t}} \approx 79{,}68" />
                            Verhältnis Jupiter/Erde:
                            <BlockMath math="\frac{m_\text{Jupiter}}{m_\text{Erde}} = \frac{2{,}00 \cdot 10^{24}\,\text{t}}{5{,}96 \cdot 10^{21}\,\text{t}} \approx 335{,}57" />
                            Die Erde ist also ca. <InlineMath math="80" /> mal so schwer wie der Mond, und ca. <InlineMath math="336" /> mal leichter als Jupiter. Die Zahlen unterscheiden sich stark von den Volumenverhältnisses! Denn die Erde ist fast doppelt so dicht wie der Mond und mehr als viermal so dicht wie Jupiter! Eine Erklärung für die Gewichtsunterschiede ist, dass die Erde einen großen Anteil Metall in ihrer Kruste hat, während der Mond vor allem aus Gestein besteht. Jupiter auf der anderen Seite besteht vornehmlich aus Gas, auch wenn er einen festen Kern hat.
                        </ListItem>
                    </List>
                </Lösung>
            </CheckableBlockquote>
        </Fragment>
    );
}
