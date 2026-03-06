import { ImageCaption } from "@/components/ImageCaption";
import { CheckableHeading } from "@/components/CheckableHeading";
import { Button, Divider, Flex, List, ListItem, Space, Spoiler } from "@mantine/core";
import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { Lösung } from "@/components/Lösung";
import { BetterInlineMath as InlineMath, BlockMathScroll as BlockMath } from "@/components/CustomMath";
import Video from "@/components/Video";
import UmfangZylinder from "/videos/UmfangZylinder.mov";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";
import GeoGebraAppletSlider from "@/components/GeoGebraAppletSlider";
import thinsp from "@/components/thinsp";
import Image from "@/components/Image";
import { Fragment } from "react/jsx-runtime";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Zylinder – zuzule",
};

export default function Zylinder() {
    return (
        <Fragment>
            <CheckableHeading title="Der Zylinder">
                Zylinder sind beliebte Formen in unserem Alltag. Seien es Lampenschirme, die Stangen von Straßenlaternen oder Konservendosen – überall findet man diese Form. Deswegen ist es für uns interessant, diese Form mathematisch beschreiben zu können!
                <Flex>
                    <Image src="/Zylinder/dosen.jpg" width={6000} height={4000} alt="Verschiedene Dosen" />
                    <Image src="/Zylinder/regler.jpg" width={6000} height={4000} alt="Ein Regler für die Lautstärke" />
                </Flex>
            </CheckableHeading>

            <CheckableHeading title="Definition" titleOrder={2}>
                Die Grundfläche eines Zylinders ist immer ein <b>Kreis</b>. Wenn wir diesen nehmen und in den Raum hineinziehen, so bekommen wir einen Körper, den wir <b>Zylinder</b> nennen.
            </CheckableHeading>
            <CheckableBlockquote title="Aufgabe: Zylinder in der Umgebung" icon="frage" titleOrder={3}>
                Gehe raus und suche nach beliebigen Sachen, die für dich nach einem Zylinder aussehen. Fallen dir plötzlich vielleicht Dinge auf, die du vorher so noch nie bemerkt hast? Mache von deiner Expedition Fotos und bringe sie mit in den Unterricht!
            </CheckableBlockquote>
            <CheckableHeading title="Schrägbilder">
                Aus der Orientierungsstufe kennst du bereits das <b>Schrägbild</b> eines Quaders. Das sollte ungefähr so aussehen wie in dem Bild.
                <Image src="/Prismen/QuaderSchrägbild@2x.png" width={1802} height={1200} alt="Schrägbild eines Quaders auf kariertem Papier." />
                Verdeckte Kanten werden also mit einer gestrichelten Linie angedeutet, während sichtbare Kanten durchgezogen werden.
                <Divider />
                Versuchen wir uns mal an einem Schrägbild von einem Zylinder.
                <List type="ordered">
                    <ListItem>Zuerst zeichnen wir einen Kreis als Grundfläche. Dieser ist wegen der Perspektive etwas zusammengedrückt und nach hinten rechts verzerrt. Zwischen den äußersten Punkten links und rechts können wir den weiter hinten liegenden Teil gestrichelt zeichnen – das spart uns später Arbeit. Wenn du noch</ListItem>
                    <ListItem>Dann ziehen wir die äußersten Kanten nach oben, bis wir die gewünschte Höhe erreichen.</ListItem>
                    <ListItem>Darauf setzen wir nun die Oberseite.</ListItem>
                </List>
                <Image src="/Zylinder/ZylinderSchrägbildEntstehung@2x.png" width={2402} height={1200} alt="Es wird gezeigt, wie das Schrägbild eines Zylinders Schritt für Schritt gezeichnet wird. Links wird mit einem Kreis angefangen. Auf dessen Außenseiten werden zwei senkrechte Striche gezeichnet, die alle die gleiche Höhe haben. Auf deren Enden wird dann ein identischer Kreis zu dem unten gezeichnet." />
            </CheckableHeading>
            <CheckableBlockquote icon="frage" title="Aufgabe: Schrägbilder">
                Zeichne die Zylinder mit Radius <InlineMath math="r" /> und Höhe <InlineMath math="h" /> als Schrägbilder.
                <List type="ordered">
                    <ListItem>
                        <InlineMath math="r = 1\,\text{cm} \quad h = 3\,\text{cm}" />
                    </ListItem>
                    <ListItem>
                        <InlineMath math="r = 1{,}5\,\text{cm} \quad h = 4\,\text{cm}" />
                    </ListItem>
                    <ListItem>
                        <InlineMath math="r = 1\,\text{cm} \quad h = 5\,\text{cm}" />
                    </ListItem>
                    <ListItem>
                        <InlineMath math="r = 2\,\text{cm} \quad h = 6{,}5\,\text{cm}" />
                    </ListItem>
                    <ListItem>
                        <InlineMath math="r = 0{,}5\,\text{cm} \quad h = 2\,\text{cm}" />
                    </ListItem>
                    <ListItem>
                        <InlineMath math="r = 3\,\text{cm} \quad h = 1{,}5\,\text{cm}" />
                    </ListItem>
                </List>
                <Lösung title="Lösung" id="Lösung-Schrägbilder" titleOrder={3}>
                    <Image
                        h={{
                            base: "auto",
                            md: 500,
                        }}
                        src="/Zylinder/ZylinderLösung@2x.png"
                        width={3600}
                        height={2000}
                        alt="Zylinder aus den Teilaufgaben 1 bis 6."
                    />
                </Lösung>
            </CheckableBlockquote>
            <CheckableHeading title="Der Mantel eines Zylinders">
                Eine praktische Eigenschaft von Zylindern ist, dass man sie <b>rollen</b> kann. Denk mal an einen Autoreifen – er ist praktisch nichts anderes als ein rollender Zylinder – insbesondere wenn wir uns die Autoreifen von Formel-1 Autos anschauen!
                <ImageCaption src="/Zylinder/formel1reifen.jpg" width={846} rotate="right" height={537} alt="Ein Formel-1 Auto von hinten. Links sind zwei Reifen sichtbar.">
                    rare-gallery.com
                </ImageCaption>
                Die Fläche, über die man einen Zylinder rollen kann, nennt man auch <b>Mantelfläche</b>. Die Ober- und Unterseite des Zylinders wird <b>Grundfläche</b> genannt. Das kannst du dir merken, wenn du an einen Regenmantel denkst: Den trägst du schließlich um dich herum und nicht unter dir 🧥.
                <CheckableHeading title="Bestimmen der Fläche eines Zylinders durch Abrollen" titleOrder={2}>
                    Da wir Zylinder abrollen können, lässt sich die Fläche eines Zylinders relativ einfach bestimmen. Wir legen ihn dazu auf eine Seite und schauen, wie weit wir ihn rollen müssen, bis wir wieder am Startpunkt angekommen sind! Bei Objekten, die aus Plastik sind, geht das ganz gut mit einem Blatt Papier als Unterlage und einem Filzstift oder Textmarker zum anmalen. Der geht danach nämlich wieder gut ab und wir sehen dadurch, wann wir genau eine Umdrehung haben. Schau es dir in dem Video unten an.
                    <Video src={UmfangZylinder} />
                    Die abgerollte Mantelfläche bildet ein Rechteck, das in unserem Beispiel die Kantenlängen <InlineMath math="9{,}4\,\text{cm}" /> und <InlineMath math="4{,}7\,\text{cm}" /> hat. Der Flächeninhalt <InlineMath math="A" /> ergibt sich also wie folgt:
                    <BlockMath math="A &= 9{,}4\,\text{cm} \cdot 4{,}7\,\text{cm} \\ &= 44{,}18\,\text{cm}^2" />
                    Das Problem ist nun aber, dass wir nicht unbedingt jeden Zylinder mit einem Filzstift anmalen wollen. Wie würden wir die Mantelfläche eines Autoreifens bestimmen? Dann bräuchten wir bereits einen Eimer Farbe – diese Kleckerei können wir uns mit etwas Mathematik sparen.
                </CheckableHeading>
                <CheckableHeading title="Bestimmen der Fläche eines Zylinders mit Formeln" titleOrder={2}>
                    Aus dem Unterricht sollte dir bereits bekannt sein, wie man den Umfang <InlineMath math="U" /> eines Kreises berechnet. Wir können dafür die Formel
                    <BlockMath math="U &= 2 \cdot \pi \cdot r \\ &= \pi \cdot d" />
                    verwenden. <InlineMath math="r" /> ist hierbei der Radius, <InlineMath math="d" /> der Durchmesser. Falls dir nicht klar sein sollte, warum wir den Umfang auf diese zwei Arten berechnen können, zeichne dir einen Kreis mit Durchmesser und Radius auf – dann kommst du selber drauf!
                    <CheckableBlockquote title="Exkurs: Die Kreiszahl π" icon="exkurs" titleOrder={3}>
                        Die Zahl <InlineMath math="\pi \approx 3,1415 \dots" /> ist das Verhältnis zwischen dem Umfang <InlineMath math="U" /> eines Kreises und seinem Durchmesser <InlineMath math="d" />. Tatsächlich ist es egal, wie groß ein Kreis ist – dieses Verhältnis ist immer gleich <InlineMath math="\pi" />
                        . Auch in unserem Beispiel:
                        <BlockMath math="\pi &= \frac{U}{d} \\ &= \frac{9{,}4\,\text{cm}}{3\,\text{cm}} \\ &\approx 3,13" />
                    </CheckableBlockquote>
                    <Image src="/Zylinder/durchmesserFluid.jpg" width={6000} height={4000} alt="Ein Geodreieck wird an eine Flasche mit Korrekturfluid gehalten. Der Durchmesser beträgt 3 cm" />
                    Der Radius beträgt in unserem Fall <InlineMath math="1{,}5\,\text{cm}" />
                    . Nun verwenden wir die Formel für den Umfang eines Kreises, um den Umfang unseres Gefäßes zu bekommen:
                    <BlockMath math="U &= 2 \cdot \pi \cdot r \\ &= 2 \cdot \pi \cdot 1{,}5\,\text{cm} \\ &\approx 9{,}4\,\text{cm}" />
                    Das ist genau die Länge, die wir auch durch das Abrollen der Dose bekommen. Nun benötigen wir noch die Höhe unseres Zylinders.
                    <Image src="/Zylinder/höheFluid.jpg" width={6000} height={4000} alt="Ein Geodreieck wird an eine Flasche mit Korrekturfluid gehalten. Die Höhe beträgt 5 cm" />
                    Die Höhe beträgt in unserem Fall also <InlineMath math="5\,\text{cm}" />. Um die Mantelfläche zu erstellen, „ziehen" wir diese nach oben. Mathematisch machen wir das, indem wir den Umfang <InlineMath math="U" /> mit der Höhe <InlineMath math="h" /> multiplizieren:
                    <BlockMath math="A &= U \cdot h \\ &= 9{,}4\,\text{cm} \cdot 5\,\text{cm} \\ &= 47\,\text{cm}^2" />
                    Das passt gut zu der Fläche, die man durch das Abrollen der Flasche bekommt. Dadurch erhalten wir nämlich ca. <InlineMath math="44\,\text{cm}^2" />.
                </CheckableHeading>
                <CheckableBlockquote icon="frage" title="Aufgabe: Mantelfläche">
                    Berechne die Mantelfläche der Zylinder, welche Radius <InlineMath math="r" /> und Höhe <InlineMath math="h" /> haben.
                    <List type="ordered">
                        <ListItem>
                            <InlineMath math="r = 2\,\text{cm} \quad h = 1\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="r = 4{,}7\,\text{cm} \quad h = 10\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="r = 1{,}9\,\text{cm} \quad h = 1{,}1\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="r = 5\,\text{cm} \quad h = 3{,}2\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="r = 7\,\text{m} \quad h = 4{,}3\,\text{m}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="r = 19\,\text{mm} \quad h = 2{,}6\,\text{cm}" />
                        </ListItem>
                    </List>
                    <Lösung title="Lösung" id="Lösung-Mantelfläche" titleOrder={3}>
                        <List type="ordered">
                            <ListItem>
                                <InlineMath math="U = 4\pi\,\text{cm}\approx 12{,}57\,\text{cm}\quad A = 4\pi\,\text{cm}^2 \approx 12{,}57\,\text{cm}^2" />
                            </ListItem>
                            <ListItem>
                                <InlineMath math="U = \tfrac{47}{5}\pi\,\text{cm}\approx 11{,}94\,\text{cm}\quad A = \tfrac{209}{50}\pi\,\text{cm}^2 \approx 13{,}13\,\text{cm}^2" />
                            </ListItem>
                            <ListItem>
                                <InlineMath math="U = \tfrac{19}{5}\pi\,\text{cm}\approx 12{,}57\,\text{cm}\quad A = 4\pi\,\text{cm}^2 \approx 12{,}57\,\text{cm}^2" />
                            </ListItem>
                            <ListItem>
                                <InlineMath math="U = 10\pi\,\text{cm}\approx 31{,}42\,\text{cm}\quad A = 32\pi\,\text{cm}^2 \approx 100{,}53\,\text{cm}^2" />
                            </ListItem>
                            <ListItem>
                                <InlineMath math="U = 14\pi\,\text{m}\approx 43{,}93\,\text{m}\quad A = \tfrac{301}{5}\pi\,\text{m}^2 \approx 189{,}12\,\text{m}^2" />
                            </ListItem>
                            <ListItem>
                                <InlineMath math="U = 3{,}8\pi\,\text{cm}\approx 11{,}94\,\text{cm}\quad A = \tfrac{247}{25}\pi\,\text{cm}^2 \approx 31{,}04\,\text{cm}^2" />
                            </ListItem>
                        </List>
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>
            <CheckableHeading title="Die Gesamtoberfläche eines Zylinders">
                Wir haben bisher nur die Mantelfläche eines Zylinders betrachtet. Ein Zylinder hat aber (meistens) noch einen Boden und einen Deckel. Für die Gesamtoberfläche müssen wir diese also auch betrachten!
                <Divider />
                Die Ober- und Unterseite eines Zylinders ist ein Kreis. Deswegen können wir die Flächenformel eines Kreises verwenden!
                <BlockMath math="A_\text{Kappe} = \pi \cdot r^2" />
                Um nun die Gesamtoberfläche <InlineMath math="O" /> eines Zylinders zu bekommen, addieren wir die Ober- und Unterseite <InlineMath math="A_\text{Kappe}" /> sowie die Mantelfläche <InlineMath math="M" /> zusammen:
                <BlockMath math="A = M + 2\cdot A_\text{Kappe}" />
                <CheckableBlockquote icon="frage" title="Aufgabe: Oberfläche">
                    Berechne die Gesamtoberfläche der Zylinder, welche Radius <InlineMath math="r" /> und Höhe <InlineMath math="h" /> haben.
                    <List type="ordered">
                        <ListItem>
                            <InlineMath math="r = 3\,\text{cm} \quad h = 1{,}2\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="r = 8{,}2\,\text{cm} \quad h = 5\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="r = 7{,}3\,\text{cm} \quad h = 3{,}9\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="r = 4\,\text{cm} \quad h = 9{,}1\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="r = 6{,}7\,\text{m} \quad h = 7{,}5\,\text{m}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="r = 1{,}95\,\text{m} \quad h = 480\,\text{cm}" />
                        </ListItem>
                    </List>
                    <Lösung
                        title="Lösung" //
                        id="Lösung-Oberfläche"
                        titleOrder={3}
                    >
                        <List type="ordered" visibleFrom="md">
                            <ListItem>
                                <BlockMath math="&&M &= \tfrac{36}{5}\pi\,\text{cm}^2 \approx 22{,}62\,\text{cm}^2 \\ &&A_\text{Kappe} &= 9\pi\,\text{cm}^2 \approx 28{,}27\,\text{cm}^2 \\ &&O &= \tfrac{126}{5}\pi\,\text{cm}^2 \approx 79{,}17\,\text{cm}^2" />
                            </ListItem>
                            <ListItem>
                                <BlockMath math="&&M &= 82\pi\,\text{cm}^2 \approx 257{,}61\,\text{cm}^2 \\ &&A_\text{Kappe} &= \tfrac{1681}{25}\pi\,\text{cm}^2 \approx 211{,}24\,\text{cm}^2 \\ &&O &= \tfrac{5412}{25}\pi\,\text{cm}^2 \approx 680{,}09\,\text{cm}^2" />
                            </ListItem>
                            <ListItem>
                                <BlockMath math="&&M &= \tfrac{2847}{50}\pi\,\text{cm}^2 \approx 178{,}88\,\text{cm}^2 \\ &&A_\text{Kappe} &= \tfrac{5329}{100}\pi\,\text{cm}^2 \approx 167{,}42\,\text{cm}^2 \\ &&O &= \tfrac{4088}{25}\pi\,\text{cm}^2 \approx 513{,}71\,\text{cm}^2" />
                            </ListItem>
                            <ListItem>
                                <BlockMath math="&&M &= \tfrac{364}{5}\pi\,\text{cm}^2 \approx 228{,}71\,\text{cm}^2 \\ &&A_\text{Kappe} &= 16\pi\,\text{cm}^2 \approx 50{,}27\,\text{cm}^2 \\ &&O &= \tfrac{524}{5}\pi\,\text{cm}^2 \approx 329{,}24\,\text{cm}^2" />
                            </ListItem>
                            <ListItem>
                                <BlockMath math="&&M &= \tfrac{201}{2}\pi\,\text{m}^2 \approx 315{,}73\,\text{m}^2 \\ &&A_\text{Kappe} &= \tfrac{4489}{100}\pi\,\text{m}^2 \approx 141{,}03\,\text{m}^2 \\ &&O &= \tfrac{4757}{25}\pi\,\text{m}^2 \approx 597{,}78\,\text{m}^2" />
                            </ListItem>
                            <ListItem>
                                <BlockMath math="&&M &= \tfrac{468}{25}\pi\,\text{m}^2\approx 58{,}81\,\text{m}^2 \\ &&A_\text{Kappe} &= \tfrac{1521}{400}\pi\,\text{m}^2 \approx 11{,}95\,\text{m}^2 \\ &&O &= \tfrac{1053}{40}\pi\,\text{m}^2 \approx 82{,}70\,\text{m}^2" />
                            </ListItem>
                        </List>
                        <List type="ordered" hiddenFrom="md">
                            <ListItem>
                                <BlockMath math="M &= \tfrac{36}{5}\pi\,\text{cm}^2 \\ &\approx 22{,}62\,\text{cm}^2 \\ A_\text{Kappe} &= 9\pi\,\text{cm}^2 \\ &\approx 28{,}27\,\text{cm}^2 \\ O &= \tfrac{126}{5}\pi\,\text{cm}^2 \\ &\approx 79{,}17\,\text{cm}^2" />
                            </ListItem>
                            <ListItem>
                                <BlockMath math="M &= 82\pi\,\text{cm}^2 \\ &\approx 257{,}61\,\text{cm}^2 \\ A_\text{Kappe} &= \tfrac{1681}{25}\pi\,\text{cm}^2 \\ &\approx 211{,}24\,\text{cm}^2 \\ O &= \tfrac{5412}{25}\pi\,\text{cm}^2 \\ &\approx 680{,}09\,\text{cm}^2" />
                            </ListItem>
                            <ListItem>
                                <BlockMath math="M &= \tfrac{2847}{50}\pi\,\text{cm}^2 \\ &\approx 178{,}88\,\text{cm}^2 \\ A_\text{Kappe} &= \tfrac{5329}{100}\pi\,\text{cm}^2 \\ &\approx 167{,}42\,\text{cm}^2 \\ O &= \tfrac{4088}{25}\pi\,\text{cm}^2 \\ &\approx 513{,}71\,\text{cm}^2" />
                            </ListItem>
                            <ListItem>
                                <BlockMath math="M &= \tfrac{364}{5}\pi\,\text{cm}^2 \\ &\approx 228{,}71\,\text{cm}^2 \\ A_\text{Kappe} &= 16\pi\,\text{cm}^2 \\ &\approx 50{,}27\,\text{cm}^2 \\ O &= \tfrac{524}{5}\pi\,\text{cm}^2 \\ &\approx 329{,}24\,\text{cm}^2" />
                            </ListItem>
                            <ListItem>
                                <BlockMath math="M &= \tfrac{201}{2}\pi\,\text{m}^2 \\ &\approx 315{,}73\,\text{m}^2 \\ A_\text{Kappe} &= \tfrac{4489}{100}\pi\,\text{m}^2 \\ &\approx 141{,}03\,\text{m}^2 \\ O &= \tfrac{4757}{25}\pi\,\text{m}^2 \\ &\approx 597{,}78\,\text{m}^2" />
                            </ListItem>
                            <ListItem>
                                <BlockMath math="M &= \tfrac{468}{25}\pi\,\text{m}^2\\ &\approx 58{,}81\,\text{m}^2 \\ A_\text{Kappe} &= \tfrac{1521}{400}\pi\,\text{m}^2 \\ &\approx 11{,}95\,\text{m}^2 \\ O &= \tfrac{1053}{40}\pi\,\text{m}^2 \\ &\approx 82{,}70\,\text{m}^2" />
                            </ListItem>
                        </List>
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>
            <CheckableHeading title="Volumenberechnung">
                Im Alltag begegnen wir Zylindern häufig im Vorratsschrank der Eltern: Seien es passierte Tomaten, eine abgepackte Dose Chili oder eine Portion Thunfisch. Dabei sind die meisten Konservendosen Zylinder.
                <CheckableBlockquote title="Aufgabe: Zylinder als Packmaß" icon="frage">
                    Überlege dir, was die Vor- und Nachteile von zylinderförmigen Verpackungen sind. Wenn so viele Verpackungen zylinderförmig sind, warum verpacken wir dann nicht alles in Zylindern?
                    <Lösung title="Lösung" titleOrder={3} id="lösung-zylinder-als-packmaß">
                        <b>Vorteile:</b>
                        <List>
                            <ListItem>Zylinder lassen sich gut stapeln.</ListItem>
                            <ListItem>Die meisten Zylinder haben viel Volumen bei wenig Oberfläche.</ListItem>
                            <ListItem>Durch die runde Form lassen sich Zylinder nicht so einfach eindrücken und sind stabil.</ListItem>
                            <ListItem>Leicht herzustellen, da Zylinder nur 3 Seiten haben.</ListItem>
                        </List>
                        <b>Nachteile:</b>
                        <List>
                            <ListItem>Können wegrollen.</ListItem>
                            <ListItem>Sind nicht so gut stapelbar wie Quader als Packungen.</ListItem>
                        </List>
                        <Divider />
                        Das sind einige Gründe, die man mit den Augen sehen kann. Der wichtigste Grund ist jedoch der: Der Inhalt von Konservendosen wird bei der Produktion <b>in</b> in der Dose aufgekocht – und das halten nur Zylinder (oder Kugeln) aus. Schau dir zur Erklärung mal dieses Video von der Sendung mit der Maus an:{" "}
                        <Link target="_blank" href="https://www.wdrmaus.de/filme/sachgeschichten/konservendose.php5">
                            {" "}
                            <Button mb={"0.2em"} rightSection={<IconExternalLink />}>
                                Hier klicken!
                            </Button>
                        </Link>
                    </Lösung>
                </CheckableBlockquote>
                <CheckableHeading title="Volumen mathematisch hergeleitet" titleOrder={2}>
                    <CheckableHeading title="Volumen eines Quaders" titleOrder={3}>
                        Ein Zylinder ist nicht so unterschiedlich von einem Quader: Zylinder haben einen Kreis als Grundfläche, Quader ein Rechteck. Ansonsten sind beides Körper, bei denen man die Grundfläche „in die Höhe gezogen“ hat. Erinnern wir uns also erstmal an das Volumen eines Quaders zurück! Das können wir mit <InlineMath math="A = a \cdot b" /> berechnen, wobei <InlineMath math="a" /> und <InlineMath math="b" /> die beiden Grundseiten bezeichnen.
                        <Image src="/Prismen/RechteckFläche@2x.png" width={1802} height={1200} alt="Ein Rechteck mit der Fläche A und den Seiten a und b." />
                        Das Volumen eines Quaders ergibt sich also durch das <b>„hochziehen“</b> dieser Fläche in den Raum. Schau es dir mal an diesem Beispiel hier an, wo ein Quader eine Grundfläche von 3&nbsp;mal 2{thinsp}
                        cm und eine Höhe von 2{thinsp}
                        cm hat.
                        <GeoGebraAppletSlider
                            materialId="x5z6yk9z"
                            appName="3d"
                            width={800}
                            height={500}
                            coord3d={{
                                xmin: -4,
                                xmax: 6,
                                ymin: 0,
                                ymax: 5,
                                zmin: -3,
                                zmax: 4,
                            }}
                            sliderLabel="Höhe"
                            // @ts-ignore
                            sliderWidth={{
                                base: 250,
                                md: 400,
                            }}
                            sliderMin={0}
                            sliderMax={2}
                            sliderStep={1}
                            sliderInitialValue={2}
                            sliderMarks={[
                                {
                                    value: 0,
                                    label: "0",
                                },
                                {
                                    value: 1,
                                    label: "1",
                                },
                                {
                                    value: 2,
                                    label: "2",
                                },
                            ]}
                        />
                        Füllen wir den Quader mit Würfeln aus, die ein Volumen von 1{thinsp}
                        cm
                        <sup>3</sup> haben, kann man gut nachvollziehen, dass das Volumen vom gesamten Quader 12
                        {thinsp}
                        cm
                        <sup>3</sup> sein muss. 6 Würfel sind unten, weitere 6 sind oben. Das ergibt sich auch aus der Berechnung von Grundfläche mal Höhe:
                        <BlockMath math="\textcolor{blue}{A} &= 3 \, \text{cm} \cdot 2 \, \text{cm} \\ &= 6\, \text{cm}^2 \\ \textcolor{green}{V} &=\textcolor{blue}{A} \cdot h \\ &= 6 \, \text{cm}^2 \cdot 2\,\text{cm} \\ &= 12 \, \text{cm}^3" />
                        Können wir diese Formel eventuell auch bei Zylindern anwenden? Gilt <InlineMath math="V = A \cdot h" /> hier immer? Testen wir es mal!
                    </CheckableHeading>
                    <CheckableHeading title="Volumen eines Zylinders" titleOrder={3}>
                        Wir verfahren nach dem gleichen Prinzip wie bei einem Quader. Wir berechnen zuerst den Flächeninhalt der Grundfläche und „ziehen“ ihn dann in die Höhe. Wir multiplizieren dazu den Flächeninhalt mit der Höhe. Als Objekt suchen wir uns eine beliebige Dose aus dem Vorratsschrank aus z.B. eine Dose Kokosmilch. Sie hat einen Durchmesser von 7,5
                        {thinsp}
                        cm und eine Höhe von 11
                        {thinsp}
                        cm.
                        <Flex>
                            <Image src="/Zylinder/doseKokosDurchmesser.jpg" width={6000} height={4000} alt="Ein Lineal liegt unter einer Konservendose. Ablesbar ist ein Durchmesser von 7,5 cm." />
                            <Image src="/Zylinder/doseKokosHöhe.JPG" width={6000} height={4000} alt="Ein Lineal wird neben eine Konservendose gehalten. Ablesbar ist eine Höhe von 11 cm." />
                        </Flex>
                        Wir berechnen zuerst den Flächeninhalt mit der Flächenformel für einen Kreis:
                        <BlockMath math="A &= \pi \cdot r^2 \\ &= \pi \cdot \left(\frac{7{,}5\,\text{cm}}{2}\right)^2\\ &\approx 44{,}18\,\text{cm}^2" />
                        Das Volumen berechnen wir nun nach dem gleichen Prinzip wie beim Quader, also:
                        <BlockMath math="V &= A \cdot h \\ &= 44{,}18\,\text{cm}^2 \cdot 11\,\text{cm} \\ &\approx 485{,}97\,\text{cm}^3" />
                        Das ist etwas mehr, als die 400
                        {thinsp}
                        mL, die eigentlich als Füllmenge auf der Dose stehen. Wir dürfen aber nicht vergessen, dass wir die Dose von außen gemessen haben und diese nie komplett ausgefüllt werden. In der Dose selbst ist also etwas weniger Platz, und es wird nur ca. 400
                        {thinsp}
                        mL Kokosmilch vorhanden sein.
                        <CheckableBlockquote icon="frage" title="Aufgabe: Stimmt die Mengenangabe?">
                            Ein Hersteller kann viel auf die Dose schreiben – ob es aber wirklich stimmt, ist eine andere Frage. Damit wir nicht um unser Geld gebracht werden, messen wir das mal nach. Bestimme die tatsächliche Füllmenge mittels der Formel <InlineMath math="V = A \cdot h" />. Versuche die Maße möglichst genau abzulesen! Als Füllmenge ist bei beiden Dosen 400
                            {thinsp}
                            mL angegeben.
                            <Space />
                            <List type="ordered">
                                <ListItem>
                                    <b>Dose mit Kokosmilch</b>
                                    <Flex>
                                        <Image
                                            h={{
                                                base: "auto",
                                                md: 275,
                                            }}
                                            src="/Zylinder/innenKokos.jpg"
                                            width={6000}
                                            height={4000}
                                            alt="Ein Lineal liegt über der Öffnung einer Konservendose mit Kokosmilch. Ablesbar ist ein Durchmesser von 7,3 cm."
                                        />
                                        <Image
                                            h={{
                                                base: "auto",
                                                md: 275,
                                            }}
                                            src="/Zylinder/füllstandKokos.jpg"
                                            width={6000}
                                            height={4000}
                                            alt="Ein Stäbchen, das in die Kokosmilch getunkt wurde, liegt neben einem Lineal. Es wurde ca. 9,5 cm tief hineingetaucht."
                                        />
                                    </Flex>
                                    <Spoiler maxHeight={0} showLabel="Maße einblenden" hideLabel="Maße ausblenden">
                                        Innerer Durchmesser: 7,3
                                        {thinsp}
                                        cm. Bedeckter Bereich auf Stäbchen: 9,5
                                        {thinsp}
                                        cm{" "}
                                    </Spoiler>
                                </ListItem>
                                <Space />
                                <ListItem>
                                    <b>Dose mit gehackten Tomaten</b>
                                    <Flex>
                                        <Image
                                            h={{
                                                base: "auto",
                                                md: 275,
                                            }}
                                            src="/Zylinder/innenTomate.jpg"
                                            width={6000}
                                            height={4000}
                                            alt="Ein Lineal liegt über der Öffnung einer Konservendose mit gehackten Tomaten. Ablesbar ist ein Durchmesser von 7,3 cm."
                                        />
                                        <Image
                                            h={{
                                                base: "auto",
                                                md: 275,
                                            }}
                                            src="/Zylinder/füllstandTomate.jpg"
                                            width={6000}
                                            height={4000}
                                            alt="Ein Stäbchen, das in die gehackten Tomaten getunkt wurde, liegt neben einem Lineal. Es wurde ca. 9,7 cm tief hineingetaucht."
                                        />
                                    </Flex>
                                    <Spoiler maxHeight={0} showLabel="Maße einblenden" hideLabel="Maße ausblenden">
                                        Innerer Durchmesser: 7,3
                                        {thinsp}
                                        cm. Bedeckter Bereich auf Stäbchen: 9,7
                                        {thinsp}
                                        cm{" "}
                                    </Spoiler>
                                </ListItem>
                                <Space />
                                <ListItem>Suche bei dir Zuhause nach einer Dose, die vielleicht eine andere Größe und Füllmenge hat. Stimmt die Füllmenge mit deiner Messung überein?</ListItem>
                            </List>
                            <Lösung title="Lösung" titleOrder={3} id="lösung-mengenangabe">
                                <b>Dose mit Kokosmilch</b>
                                <BlockMath math="A &= \pi \cdot r^2 \\ &= \pi \cdot \left(\frac{7{,}3\,\text{cm}}{2}\right)^2 \\ &\approx 41{,}85\,\text{cm}^2 \\ V &= A \cdot h \\ &= 42{,}31\,\text{cm}^2 \cdot 9,5\,\text{cm} \\ &\approx 397{,}61\,\text{cm}^3" />
                                <Space />
                                <b>Dose mit gehackten Tomaten</b>
                                <BlockMath math="A &= \pi \cdot r^2 \\ &= \pi \cdot \left(\frac{7{,}3\,\text{cm}}{2}\right)^2 \\ &\approx 41{,}85\,\text{cm}^2 \\ V &= A \cdot h \\ &= 42{,}31\,\text{cm}^2 \cdot 9,7\,\text{cm} \\ &\approx 405{,}98\,\text{cm}^3" />
                                Gehen wir davon aus, dass wir richtig gemessen haben, so sind in der Kokosmilch <InlineMath math="400\,\text{mL} - 397{,}61\,\text{mL} = 2{,}39\,\text{mL}" /> zu wenig drin, während uns einem bei den gehackten Tomaten <InlineMath math="405{,}98\,\text{mL} - 400\,\text{mL} = 5{,}98\,\text{mL}" /> geschenkt werden. Ob das als Anlass genügt, um die Kokosmilch im Supermarkt zurückzugeben, muss jedoch jeder selber entscheiden…
                            </Lösung>
                        </CheckableBlockquote>
                    </CheckableHeading>
                </CheckableHeading>
            </CheckableHeading>
        </Fragment>
    );
}
