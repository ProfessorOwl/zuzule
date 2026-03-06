import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { CheckableHeading } from "@/components/CheckableHeading";
import { Lösung } from "@/components/Lösung";
import MBlockMath from "@/components/MBlockMath";
import { Flex, List, ListItem, Mark, Space } from "@mantine/core";
import { BetterInlineMath as InlineMath, BlockMathScroll as BlockMath } from "@/components/CustomMath";
import Video from "@/components/Video";
import KegelOberfläche from "/videos/KegelOberfläche.mov";
import thinsp from "@/components/thinsp";
import Image from "@/components/Image";
import { Fragment } from "react/jsx-runtime";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kegel – zuzule",
};

export default function Kegel() {
    return (
        <Fragment>
            <CheckableHeading title="Der Kegel">
                Kegel begegnen uns besonders im Sommer in Form von Eiswaffeln, ansonsten sieht man sie oft am Straßenrand in Form von Verkehrskegeln stehen oder im Meer als gewundene Muscheln.
                <Flex>
                    <Image src="/Kegel/Eiswaffel.webp" width={2700} height={3375} alt="Eine Eiswaffel" />
                    <Image src="/Kegel/VerkehrskegelWellington.webp" width={1250} height={1590} alt="Sir Wellington mit einem Verkehrskegel auf dem Kopf" />
                    <Image src="/Kegel/Muschel.webp" width={3321} height={4981} alt="Eine kegelförmige Muschel" />
                </Flex>
                Im Mathematikunterricht sind wir jedoch weniger am Vorkommen von Kegeln in unserer Umwelt interessiert, als vielmehr an der mathematischen Beschreibung: Was ist überhaupt ein Kegel und wie können wir das Volumen oder den Oberflächeninhalt von ihnen berechnen?
            </CheckableHeading>
            <CheckableHeading title="Definition" titleOrder={2}>
                Ein Kegel hat einen Kreis als Grundfläche. Ziehen wir seinen Mittelpunkt senkrecht in die Höhe, so bekommen wir die Kegelspitze. Die verbinden wir nun mit jedem Punkt aus dem Kreis, sodass sich die Oberfläche bildet. Et voilà: Ein <b>gerader Kegel</b>!
            </CheckableHeading>
            <CheckableHeading title="Netz eines Kegels">
                Man könnte denken, dass es sehr schwer ist, das Netz eines Kegels aufzuzeichnen, weil er neben der Kreisseite keine Kante hat. Genau das erleichtert uns aber die Arbeit, denn so können wir den Kegel <b>abrollen</b>
                . Schau dir das Video dazu an!
                <Video src={KegelOberfläche} />
            </CheckableHeading>

            <CheckableHeading title="Oberfläche">
                Die Grundfläche eines Kegels können wir mit einem Zirkel einfach ausmessen, da sie ein Kreis ist. Ihre Fläche entspricht also:
                <BlockMath math="G = \pi \cdot r_G^2" />
                <Mark c={"desred"}>
                    <InlineMath math="r_G" />
                </Mark>{" "}
                meint dabei den Radius der Grundfläche. Durch das Abrollen des Kegels haben wir aber noch einen <b>Kreisausschnitt</b> bekommen! Wir markieren uns, wie weit der Kegel mit genau einer Umdrehung kommt. Genau diese Fläche entspricht der <b>Mantelfläche</b> des Kegels. Der Radius des „Abrollkreises“ entspricht der Höhe{" "}
                <Mark c={"desblue"}>
                    <InlineMath math="h_\text{Wand}" />{" "}
                </Mark>
                unserer Kegelwand (aufpassen: <InlineMath math="\textcolor{#3312B8}{h_\text{Wand}} \neq \textcolor{#12B886}{h}" />
                ). Hier nochmal ein Bild zur Illustration:
                <Image src="/Kegel/Kegel.webp" width={1200} height={600} alt="Ein Kegel mit seiner Mantelfläche" />
                <CheckableBlockquote icon="frage" title="Aufgabe" titleOrder={2}>
                    Mit der Info kannst du nun auch Netze zeichnen. Zeichne von den folgenden Zylindern die Netze auf:
                    <Image src="/Kegel/KegelNetze.webp" width={1400} height={600} alt="Ein Kegel mit seiner Mantelfläche" />
                    <Lösung title="Lösung" titleOrder={3} id="LösungNetze">
                        <Image
                            src="/Kegel/KegelNetzeLösung.webp"
                            h={{
                                base: "auto",
                                md: 600,
                            }}
                            width={1650}
                            height={1200}
                            alt="Ein Kegel mit seiner Mantelfläche"
                        />{" "}
                    </Lösung>
                </CheckableBlockquote>
                Um die Mantelfläche zu berechnen, benötigen wir neben der Wandhöhe noch die Länge des Kreisbogens (im Bild schwarz). Diese entspricht aber gerade dem Umfang unserer Grundfläche, da der Mantel mit ihr bündig schließen muss. Deshalb können wir uns jetzt einen Trick zu nutze machen:
                <Flex>
                    <Image src="/Kegel/Mantel1mod.webp" width={6000} height={4000} alt="Der Mantel eines Kegels" />
                    <Image src="/Kegel/Mantel2mod.webp" width={1250} height={1590} alt="Der Mantel eines Kegels zweimal zerteilt und nebeneinander gelegt" />
                    <Image src="/Kegel/Mantel4.webp" width={3321} height={4981} alt="Der Mantel eines Kegels viermal zerteilt und nebeneinander gelegt" />
                    <Image src="/Kegel/Mantel8.webp" width={3321} height={4981} alt="Der Mantel eines Kegels achtmal zerteilt und nebeneinander gelegt" />
                    <Image src="/Kegel/Mantel16mod.webp" width={3321} height={4981} alt="Der Mantel eines Kegels sechzehnmal zerteilt und nebeneinander gelegt" />
                </Flex>
                Durch mehrfaches halbieren und aneinanderlegen der Mantelfläche entsteht ein <b>Rechteck</b>! Im letzten Bild sieht es zwar aus, als wäre es ein Parallelogramm, aber stell dir vor, wir würden es nochmal, nochmal, nochmal… zerteilen. Irgendwann ist die Strecke{" "}
                <Mark c="desblue">
                    <InlineMath math="h_\text{Wand}" />
                </Mark>{" "}
                dann senkrecht zur Strecke <InlineMath math="\frac{U}{2}" />. Die Mantelfläche <InlineMath math="M" /> lässt sich also mit der Formel
                <BlockMath math="M = \frac{U}{2}\cdot \textcolor{#3312B8}{h_\text{Wand}}" />
                berechnen!
                <CheckableBlockquote titleOrder={2} title="Aufgabe: Kannst du es beweisen?" icon="frage">
                    Was geometrisch geht, geht auch mit Formeln. Kannst du die Formel <InlineMath math="M = \frac{U}{2}\cdot \textcolor{#3312B8}{h_\text{Wand}}" /> herleiten? Benutze dafür den Umfang der Grundfläche und das „Tortenstück“, das der Mantel darstellt.
                    <Lösung titleOrder={3} title="Lösung" id="Lösung-Beweis">
                        Wir schreiben erstmal die Formeln für den Umfang der Grundfläche auf.
                        <BlockMath math="U = 2\pi r_G" />
                        Der Mantel bildet ein Kreissegment (das „Tortenstück“), wenn man ihn abrollt. Dieses Segment hat einen bestimmten Anteil an der Gesamtfläche des Kreises. Schau dir das untere Bild dafür an!
                        <Image
                            src="/Kegel/MantelflächeGanz.webp"
                            width={750}
                            height={750}
                            alt="Das Netz einer Mantelfläche als Anteil im ganzen Kreis"
                            h={{
                                base: "auto",
                                md: 375,
                            }}
                        />
                        Die Fläche des kompletten Kreises ist:
                        <BlockMath math="A = \pi \cdot \textcolor{#3312B8}{h_\text{Wand}}^2" />
                        Den Anteil der Mantelfläche daran können wir aus den Umfängen ableiten. Angenommen, das Netz des Mantels entspricht exakt einem Viertelkreis. Dann hat es einen Anteil von <InlineMath math="\frac{1}{4}" /> an der Fläche und dem Umfang des kompletten Kreises. Allgemein ausgedrückt:
                        <MBlockMath mobile="M &= \frac{U}{U_\text{Gesamt}}\cdot A \\ &\Downarrow \scriptsize{\text{Einsetzen}} \\ &= \frac{U}{2\cancel{\pi\textcolor{#3312B8}{h_\text{Wand}}}} \cdot \cancel{\pi} \textcolor{#3312B8}{h_\text{Wand}}^{\cancel{2}}\\ &= \frac{U}{2} \cdot \textcolor{#3312B8}{h_\text{Wand}}" desktop="M &= \frac{U}{U_\text{Gesamt}}\cdot A &&\lvert \text{Einsetzen} \\ &= \frac{U}{2\cancel{\pi\textcolor{#3312B8}{h_\text{Wand}}}} \cdot \cancel{\pi} \textcolor{#3312B8}{h_\text{Wand}}^{\cancel{2}}\\ &= \frac{U}{2} \cdot \textcolor{#3312B8}{h_\text{Wand}}" />
                        Damit haben wir die Formel hergeleitet!
                    </Lösung>
                </CheckableBlockquote>
                <CheckableBlockquote titleOrder={2} title="Aufgabe: Oberflächeninhalt" icon="frage">
                    Skizziere folgende Kegel und berechne ihren Oberflächeninhalt.
                    <List type="ordered">
                        <ListItem>
                            <InlineMath math="r = 3\,\text{cm}\quad h = 4\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="r = 1{,}5\,\text{cm}\quad h = 3\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="r = 10\,\text{mm}\quad h = 3{,}7\,\text{cm}" />
                        </ListItem>
                    </List>
                    <Lösung titleOrder={3} title="Lösung" id="Lösung-Oberfläche">
                        <Image src="/Kegel/KegelOberflächen.webp" width={1400} height={1000} alt="Das Netz einer Mantelfläche als Anteil im ganzen Kreis" h={500} />
                        <List type="ordered">
                            <ListItem>
                                Grundfläche:
                                <BlockMath math="G &= \pi r_G^2 \\ &= \pi \cdot (3\,\text{cm})^2 \\ &\Rightarrow G \approx 28{,}27\,\text{cm}^2" />
                                Für die Mantelfläche benötigen wir den Umfang der Grundfläche und die Höhe <InlineMath math="h_\text{Wand}" />
                                <BlockMath math="U &= 2\pi r_G \\ &= 2\pi \cdot 3\,\text{cm} \\ &\Rightarrow U \approx 18{,}85\,\text{cm}" />
                                <BlockMath math="h_\text{Wand} &= \sqrt{r_G^2 + h^2} \\ &= \sqrt{(3\,\text{cm})^2 + (4\,\text{cm})^2} \\ &\Rightarrow h_\text{Wand} = 5\,\text{cm}" />
                                Damit können wir die Mantelfläche <InlineMath math="M" /> berechnen:
                                <BlockMath math="M &= \frac{U}{2} \cdot h_\text{Wand} \\ &= \frac{18{,}25\,\text{cm}}{2} \cdot 5\,\text{cm} \\ &\Rightarrow M = 45{,}63\,\text{cm}^2" />
                                Insgesamt ergibt das eine Oberfläche von
                                <BlockMath math="O = G + M = 28{,}27\,\text{cm}^2+ 45{,}63\,\text{cm}^2 = 73{,}9\,\text{cm}^2" />
                            </ListItem>
                            <ListItem>
                                Grundfläche:
                                <BlockMath math="G &= \pi \cdot (1{,}5\,\text{cm})^2 \\ &\Rightarrow G \approx 7{,}07\,\text{cm}^2" />
                                Berechnen von Umfang und <InlineMath math="h_\text{Wand}" /> für die Mantelfläche:
                                <BlockMath math="U &= 2\pi \cdot 1{,}5\,\text{cm} \\ &\Rightarrow U \approx 9{,}42\,\text{cm}" />
                                <BlockMath math="h_\text{Wand} &= \sqrt{(1{,}5\,\text{cm})^2 + (3\,\text{cm})^2} \\ &\Rightarrow h_\text{Wand} \approx 3{,}35\,\text{cm}" />
                                Berechnen der Mantelfläche <InlineMath math="M" />
                                :
                                <BlockMath math="M &= \frac{9{,}42\,\text{cm}}{2} \cdot 3{,}35\,\text{cm} \\ &\Rightarrow M = 15{,}78\,\text{cm}^2" />
                                Insgesamt ergibt das eine Oberfläche von
                                <BlockMath math="O = 7{,}07\,\text{cm}^2+ 15{,}78\,\text{cm}^2 = 22{,}85\,\text{cm}^2" />
                            </ListItem>
                            <ListItem>
                                Grundfläche:
                                <BlockMath math="G &= \pi \cdot (1\,\text{cm})^2 \\ &\Rightarrow G \approx 3{,}14\,\text{cm}^2" />
                                Berechnen von Umfang und <InlineMath math="h_\text{Wand}" /> für die Mantelfläche:
                                <BlockMath math="U &= 2\pi \cdot 1\,\text{cm} \\ &\Rightarrow U \approx 6{,}28\,\text{cm}" />
                                <BlockMath math="h_\text{Wand} &= \sqrt{(1\,\text{cm})^2 + (3{,}7\,\text{cm})^2} \\ &\Rightarrow h_\text{Wand} \approx 3{,}83\,\text{cm}" />
                                Berechnen der Mantelfläche <InlineMath math="M" />
                                :
                                <BlockMath math="M &= \frac{6{,}28\,\text{cm}}{2} \cdot 3{,}83\,\text{cm} \\ &\Rightarrow M = 12{,}03\,\text{cm}^2" />
                                Insgesamt ergibt das eine Oberfläche von
                                <BlockMath math="O = 3{,}14\,\text{cm}^2+ 12{,}03\,\text{cm}^2 = 15{,}17\,\text{cm}^2" />
                            </ListItem>
                        </List>
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>
            <CheckableHeading title="Volumen">
                Im Gegensatz zur Oberfläche ist das Volumen eines Kegels nicht wirklich intuitiv berechnbar. Stattdessen werden wir uns eine Formel dafür herleiten. Dafür müssen wir uns Pyramiden anschauen!
                <CheckableHeading title="Volumen einer Pyramide" titleOrder={2}>
                    Wir konstruieren uns eine quadratische Pyramide in einem Würfel. Dieser hat die doppelte Höhe unserer Pyramide.
                    <Image
                        h={{
                            base: "auto",
                            md: 425,
                        }}
                        src="/Pyramiden/VolumenPyramide/PyramideinWürfelEinzeln.webp"
                        width={1050}
                        height={850}
                        alt="Eine Pyramide in einem Quader"
                    />
                    In diesen Würfel können wir jedoch nicht nur eine Pyramide packen, sondern tatsächlich <b>6 Stück</b>
                    ! Denn unter jede Grundseite passt eine weitere Pyramide, ohne, dass sie einer anderen in die Quere kommt.
                    <Image
                        h={{
                            base: "auto",
                            md: 425,
                        }}
                        src="/Pyramiden/VolumenPyramide/PyramideinWürfel.webp"
                        width={1050}
                        height={850}
                        alt="Sechs Pyramiden in einem Quader"
                    />
                    Das ist etwas schlecht vorzustellen, deshalb ist hier einmal ein Bild von den Pyramiden „herausgezogen“:
                    <Image
                        h={{
                            base: "auto",
                            md: 825,
                        }}
                        src="/Pyramiden/VolumenPyramide/PyramideinWürfelExplosion.webp"
                        width={1650}
                        height={1700}
                        alt="Eine Pyramide in einem Quader"
                    />
                    Mathematisch können wir das so formulieren:
                    <BlockMath math="V_\text{Quader} = 6 \cdot V_\text{Pyramide}" />
                    Kannst du daraus selber eine Formel für das Pyramidenvolumen herleiten? Denke dran: Der Quader ist doppelt so hoch wie eine der Pyramiden!
                    <CheckableBlockquote title="Herleitung" titleOrder={3} icon="frage">
                        <Lösung>
                            Wir können also über die Volumenformel für einen Quader auf das Volumen einer Pyramide schließen! Für einen Quader gilt:
                            <BlockMath math="V_\text{Quader} = G \cdot h_\text{Quader}" />
                            mit der Grundfläche <InlineMath math="G" /> und der Höhe <InlineMath math="h_\text{Quader}" />
                            . Das können wir in die vorige Gleichung einsetzen, also bekommen wir:
                            <MBlockMath mobile="V_\text{Quader} &= 6 \cdot V_\text{Pyramide} \\ &\Downarrow\scriptsize{V_\text{Quader} = G \cdot h_\text{Quader}} \\ G \cdot h_\text{Quader} &= 6 \cdot V_\text{Pyramide} \\ &\Downarrow \scriptsize{h_\text{Quader} = 2\cdot h_\text{Pyramide}} \\ G \cdot 2 h_\text{Pyramide} &= 6 \cdot V_\text{Pyramide} \\ &\Downarrow \scriptsize{:6} \\ G \cdot \frac{2}{6} h_\text{Pyramide} &= V_\text{Pyramide} \\ V_\text{Pyramide} &= \frac{1}{3} G \cdot h_\text{Pyramide}" desktop="V_\text{Quader} &= 6 \cdot V_\text{Pyramide} &&\lvert V_\text{Quader} = G \cdot h_\text{Quader} \\ G \cdot h_\text{Quader} &= 6 \cdot V_\text{Pyramide} &&\lvert h_\text{Quader} = 2\cdot h_\text{Pyramide} \\ G \cdot 2 h_\text{Pyramide} &= 6 \cdot V_\text{Pyramide} &&\lvert :6 \\ G \cdot \frac{2}{6} h_\text{Pyramide} &= V_\text{Pyramide} \\ V_\text{Pyramide} &= \frac{1}{3} G \cdot h_\text{Pyramide}" />
                            Eine Pyramide ist also immer ein Drittel so groß wie der sie umgebende Quader!
                        </Lösung>
                        <Space my="xs" />
                    </CheckableBlockquote>
                </CheckableHeading>
                <CheckableHeading title="Volumen eines Kegels" titleOrder={2}>
                    Für eine Pyramide gilt also:
                    <BlockMath math="V = \frac{1}{3}Gh_\text{Pyramide}" />
                    Die Formel ist dabei <b>unabhängig</b> von der Anzahl der Ecken, die die Grundfläche hat. Das bedeutet: Egal, ob wir ein Dreieck, Viereck, Sechseck, ... haben, das Volumen <InlineMath math="V" /> berechnet sich immer nach <InlineMath math="V = \frac{1}{3}Gh_\text{Pyramide}" />.
                    <CheckableBlockquote icon="frage" title="Aufgabe: Von der Pyramide zum Kegel" titleOrder={2}>
                        Damit hast du alle Informationen, um dir herzuleiten, wie sich das Volumen eines Kegels berechnen lässt. Halte deine Überlegungen in Form von Skizzen und einem Erklärtext fest!
                        <Lösung title="Lösung" titleOrder={3} id="Lösung-Kegelvolumen">
                            <Image
                                h={{
                                    base: "auto",
                                    md: 325,
                                }}
                                src="/Kegel/PyramidezuKegel.webp"
                                width={1650}
                                height={650}
                                alt="Es sind vier Pyramiden nebeneinander dargestellt. Zuerst mit einer dreieckigen Grundfläche, dann mit einer sechseckigen, zwölfeckigen und vierundzwanzigeckigen. Die letzte Pyramide sieht fast aus wie ein Kegel"
                            />
                            Fügen wir zu einer Pyramide immer mehr Ecken hinzu, so ähnelt die Grundfläche immer mehr einem Kreis. Das 24-Eck ist z.B. optisch fast nicht mehr von einem Kreis zu unterscheiden. Fügen wir immer mehr und mehr Ecken hinzu, gelangen wir nach unendlich vielen Ecken tatsächlich beim Kreis an – die Volumenformel für die Pyramide hat sich dabei jedoch nicht geändert. Also gilt sie auch für einen Kegel!
                        </Lösung>
                    </CheckableBlockquote>
                    <CheckableBlockquote title="Aufgabe: Ausbau eines Dachstuhls" icon="frage">
                        Ein Hausbesitzer möchte seinen Dachstuhl renovieren. Der Turm hat einen Durchmesser von 6{thinsp}
                        m, das Dach hat eine Höhe 5,5
                        {thinsp}
                        m.
                        <Image src="/Kegel/DachKegel.webp" width={6000} height={4000} alt="Ein Bild von einem kegelförmigen Dach." />
                        <List type="ordered">
                            <ListItem>Beurteile anhand der Grundfläche und des Volumens, ob der Dachboden als Zimmer genutzt werden kann. Wenn ja, welches Zimmer kannst du dir dort vorstellen? Vergiss dabei nicht, dass das Dach auch gedämmt werden muss!</ListItem>
                            <ListItem>
                                Nach einem schweren Unwetter muss das Dach neu gedeckt werden, da Feuchtigkeit eindringt. Dafür sollen Zinkbleche verwendet werden, die pro m<sup>2</sup> 65€ kosten. Der Dachdecker verlangt noch einmal 40€ pro m<sup>2</sup> an Arbeitskosten. Berechne die Gesamtkosten.
                            </ListItem>
                        </List>
                        <Lösung title="Lösung" id="Lösung-Dachstuhl" titleOrder={3}>
                            <List type="ordered">
                                <ListItem>
                                    Grundfläche des Dachstuhls berechnen:
                                    <MBlockMath
                                        desktop="G &= \pi r^2 &&\lvert r = \frac{d}{2} \\
                                            &= \pi \left(\frac{d}{2}\right)^2 &&\lvert d = 6\,\text{m}\\
                                            &= \pi \left(\frac{6\,\text{m}}{2}\right)^2 \\
                                            &\Rightarrow G \approx 28{,}27\,\text{m}^2"
                                        mobile="G &= \pi r^2 \\
                                            &\Downarrow \scriptsize{r = \frac{d}{2}} \\
                                            &= \pi \left(\frac{d}{2}\right)^2 \\
                                            &\Downarrow \scriptsize{d = 6\,\text{m}} \\
                                            &= \pi \left(\frac{6\,\text{m}}{2}\right)^2 \\
                                            &\Rightarrow G \approx 28{,}27\,\text{m}^2"
                                    />
                                    Volumen des Dachstuhls berechnen:
                                    <MBlockMath
                                        desktop="V &= \frac{1}{3}Gh &&\lvert G = 28{,}27\,\text{m}^2, h = 5{,}5\,\text{m} \\
                                        &= \frac{1}{3}\cdot 28{,}27\,\text{m}^2 \cdot 5{,}5\,\text{m} \\
                                        &\Rightarrow V = 51{,}84\,\text{m}^3"
                                        mobile="V &= \frac{1}{3}Gh \\
                                    &\Downarrow \scriptsize{G = 28{,}27\,\text{m}^2, h = 5{,}5\,\text{m}} \\
                                        &= \frac{1}{3}\cdot 28{,}27\,\text{m}^2 \cdot 5{,}5\,\text{m} \\
                                        &\Rightarrow V = 51{,}84\,\text{m}^3"
                                    />
                                    Zum Vergleich: Ein Zimmer mit einer Grundfläche von 3 mal 4{thinsp}m und einer Höhe von 2,5
                                    {thinsp}m hat eine Fläche von <InlineMath math="3\,\text{m}\cdot 4\,\text{m} = 12\,\text{m}^2" />
                                    und ein Volumen von <InlineMath math="12\,\text{m}^2 \cdot 2{,}5\,\text{m} = 30\,\text{m}^3" />. Der Dachstuhl kann also sicherlich noch als Zimmer verwendet werden, auch wenn die Dachschräge viel vom Stehplatz wegnimmt.
                                </ListItem>
                                <ListItem>
                                    Höhe des Mantels berechnen:
                                    <MBlockMath
                                        desktop="h_\text{Mantel} &= \sqrt{r^2 + h^2} &&\lvert r = 3\,\text{m},\; h = 5{,}5\,\text{m} \\
                                        &= \sqrt{(3\,\text{m})^2 + (5{,}5\,\text{m})^2}  \\
                                        &\Rightarrow h_\text{Mantel} \approx 6{,}26\,\text{m} \\"
                                        mobile="h_\text{Mantel} &= \sqrt{r^2 + h^2} \\
                                    &\Downarrow \scriptsize{r = 3\,\text{m},\; h = 5{,}5\,\text{m}} \\
                                        &= \sqrt{(3\,\text{m})^2 + (5{,}5\,\text{m})^2}  \\
                                        &\Rightarrow h_\text{Mantel} \approx 6{,}26\,\text{m} \\"
                                    />
                                    Nun kann die Mantelfläche bestimmt werden:
                                    <MBlockMath
                                        mobile="M &= \frac{U}{2} \cdot h_\text{Mantel} \\
                                    &\Downarrow \scriptsize{U = 2\pi r ,\; h_\text{Mantel} = 6{,}26\,\text{m}} \\
                                        &= \frac{\cancel{2}\pi r}{\cancel{2}} \cdot h_\text{Mantel} \\
                                        &\Downarrow \scriptsize{r = 3, \; h_\text{Mantel} = 6{,}26\,\text{m}} \\
                                        &= \pi \cdot 3\,\text{m} \cdot 6{,}26\,\text{m} \\
                                        &\Rightarrow M \approx 59{,}00\,\text{m}^2"
                                        desktop="M &= \frac{U}{2} \cdot h_\text{Mantel} &&\lvert U = 2\pi r ,\; h_\text{Mantel} = 6{,}26\,\text{m} \\
                                        &= \frac{\cancel{2}\pi r}{\cancel{2}} \cdot h_\text{Mantel} &&\lvert r = 3, \; h_\text{Mantel} = 6{,}26\,\text{m} \\
                                        &= \pi \cdot 3\,\text{m} \cdot 6{,}26\,\text{m} \\
                                        &\Rightarrow M \approx 59{,}00\,\text{m}^2"
                                    />
                                    Die Dachfläche beträgt also 18,78m
                                    <sup>2</sup>. Pro Quadratmeter muss 65€ für das Zinkblech und weitere 40€ für die Arbeit ausgegeben werden. Insgesamt also <InlineMath math="65€ + 40€= 105€" />
                                    . Das bedeutet in unserem Fall:
                                    <BlockMath math="59\,\text{m}^2 \cdot 105\frac{€}{\text{m}^2} = 6195€" />
                                    Es kostet also 6195€ um das Dach neuzudecken.
                                </ListItem>
                            </List>
                        </Lösung>
                    </CheckableBlockquote>
                </CheckableHeading>
            </CheckableHeading>
        </Fragment>
    );
}
