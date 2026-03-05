import { CheckableHeading } from "@/components/CheckableHeading";
import { SuspenseCheckableHeading } from "@/components/SuspenseCheckableHeading";
import thinsp from "@/components/thinsp";
import { Divider, Flex, List, ListItem, Mark, Space, Table, Text } from "@mantine/core";
import Video from "@/components/Video"
import Lichtkugel from "/videos/Lichtkugel.mov";
import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import Image from "@/components/Image";
import { Fragment } from "react/jsx-runtime";
import { ImageCaption } from "@/components/ImageCaption";
import { BetterInlineMath as InlineMath, BlockMathScroll as BlockMath } from "@/components/CustomMath";
import MBlockMath from "@/components/MBlockMath";
import { Lösung } from "@/components/Lösung";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kugeln – zuzule",
};

export default function Kugeln() {
    return (
        <Fragment>
        <SuspenseCheckableHeading title="Die Kugel">
            Fragt man mehrere Mathematikerinnen und Mathematiker nach ihrem Lieblingskörper, so werden viele von ihnen vermutlich antworten, dass die <b>Kugel</b> der beste Körper ist. Kugeln haben nämlich einige interessante Eigenschaften: Sie hat keinerlei Kanten oder Ecken, kann frei rollen, sieht immer gleich aus, egal von welchem Winkel man sie betrachtet… Die Liste könnte jetzt noch lange weitergehen! Einige weitere Eigenschaften werden wir auf dieser Seite erkunden.
            <Flex>
                <Image
                    h={{base: "auto", md: 350}}
                    width={3375}
                    height={5062}
                    src={"/Kugeln/basketball.jpg"}
                    alt="Ein Basketball, der ins Netz fällt"
                />
                <Image
                    h={{base: "auto", md: 350}}
                    width={3375}
                    height={5062}
                    src={"/Kugeln/LasVegasSphere.jpg"}
                    alt="Ein Basketball, der ins Netz fällt"
                />
            </Flex>
        </SuspenseCheckableHeading>
        <CheckableHeading title="Definition" titleOrder={2}>
            Eine Kugel ist eine Form, bei der alle Punkte auf der Oberfläche den <b>gleichen Abstand zu einem gemeinsamen Mittelpunkt</b> haben. Anders gesprochen: Nimmt man sich ein Seil mit fixer Länge und fixiert es an einem Stativ im Raum, dann sind all die Punkte Teil der Kugel, die man mit der Spitze erreichen kann. 
            Das Video unten zeigt die zweite Definition in Aktion:
            <Video src={Lichtkugel}/>
            Zeichnet man die Lichtbahnen nach, so entsteht dabei dieses Bild:
                <Image
                    h={{base: "auto", md: 400}}
                    width={1920}
                    height={1080}
                    src={"/Kugeln/LichtKugel.jpg"}
                    alt="Eine Kugel, die aus Licht gezeichnet ist"
                />
            Durch das Fixieren des Mittelpunktes auf dem Stativ und einem festen Radius haben wir damit eine Kugel mit einem Radius von 0,6{thinsp}m gezeichnet.
            <CheckableBlockquote icon="aha" title="Probier es selbst aus!">
                Man braucht keine professionelle Kamera für solche Langzeitbelichtungen. Schau mal in den Einstellungen deiner Handykamera und schaue, ob dort irgendwo das Wort „Langzeitbelichtung“ auftaucht – den Modus suchst du. Verdunkel dann den Raum und nimm eine schwache Lichtquelle, wie ein Feuerzeug, eine Wunderkerze oder ähnliches, und fahre damit Muster in den Raum. Schaffst du es auch, eine Kugel zu machen? Sind noch andere Formen möglich? Schau, was dabei herauskommt!
            </CheckableBlockquote>
        </CheckableHeading>
        <CheckableHeading title="Volumen">
            Das Volumen einer Kugel ist schwieriger zu bestimmen als bei den anderen Körpern wie Pyramiden, Prismen oder Kegel. Wir müssen dafür etwas kreativ werden und müssen das <b>Prinzip des Cavalieri</b> benutzen!
            <CheckableBlockquote title="Das Prinzip des Cavalieri" titleOrder={2} icon="exkurs">
                Das Prinzip besagt, dass zwei Körper das gleiche Volumen besitzen, wenn sie in jeder Höhe die gleiche Schnittfläche besitzen. Vergleichen wir z.B. einen geraden mit einem Schiefen Quader, die beide die gleiche Grundflächen wie Höhen haben.
                <Image
                    width={6000}
                    height={4000}
                    src={"/SchiefeKoerper/Schachteile.jpg"}
                    alt="Ein gerader und ein schiefer Stapel aus quadratischen Teilen"
                />
                Beide Stapel bestehen aus 10 gleichgroßen Teilstücken. In dem Beispiel sind sie relativ groß, kann man die Scheiben noch gut voneinander unterscheiden. Aber stell dir vor, wir machen sie dünner:
                <Flex>
                <ImageCaption
                    h={{base: "auto", md: 250}}
                    src="/SchiefeKoerper/PapierstapelGerade.jpg"
                    width={6000}
                    height={4000}
                    alt="Ein gerader Stapel Papier">
                Der Papierstapel ist gerade.</ImageCaption>           
                <ImageCaption
                    h={{base: "auto", md: 250}}
                    width={6000}
                    height={4000}
                    src={"/SchiefeKoerper/PapierstapelSchief.jpg"}
                    alt="Ein schiefer Stapel Papier"
                >Der Papierstapel ist schief.</ImageCaption>
                </Flex>
                Die einzelnen Seiten sind nur schwer voneinander zu unterscheiden – aber beide Stapel haben exakt gleich viele Blätter. Es gilt also auch hier: Beide Stapel haben in der gleichen Höhe den gleichen Flächeninhalt, deshalb haben sie auch das gleiche Volumen.

            </CheckableBlockquote>
            <CheckableHeading title="Herleitung des Kugelvolumens" titleOrder={2}>
                Oft hat man das Prinzip des Cavalieri dann im Kopf, wenn zwei Körper sich schon relativ ähnlich sehen: gerade vs. schiefe Pyramide, gerade vs. schiefes Prisma, … Tatsächlich ist es aber egal, welche Form unser Körper und die Schnittfläche haben, solange der <b>Flächeninhalt gleich ist</b>. Das nutzen wir nun aus.
                Wir konstruieren eine Halbkugel mit Radius <InlineMath math="r"/>. Daneben stellen wir einen Zylinder mit gleichem Radius <InlineMath math="r"/>, der so hoch ist wie die Kugel, also <InlineMath math="r"/>-hoch.
                <Image
                    h={{base: "auto", md: 400}}
                    width={1550}
                    height={1000}
                    src={"/Kugeln/KugelKegelHerleitung.png"}
                    alt="Links ein Zylinder, der einen Kegel enthält, rechts eine Halbkugel. Beide haben gleiche Höhe und Radius."
                />
                Um das Prinzip des Cavalieri anwenden zu können, müssen wir zeigen, dass auf gleiche Höhe gleich große Flächen existieren. 
                <List>
                    <ListItem><b>Kreisring im Zylinder:</b> Wir schauen uns den Kreisring an, der zwischen Zylinder und Kegel liegt. Seine Fläche können wir berechnen, indem wir die Fläche des kleinen Kreises im Kegel von der Fläche des Gesamtkreises des Zylinders abziehen.
                    <Divider/>
                    Die gesamte Kreisfläche entspricht der Grundseite des Zylinders:
                        <BlockMath math="A_\text{voll} = \pi \textcolor{#12B886}{r}^2"/>
                    Der Radius des Innenkreises im Kegel entspricht gerade unserer Höhe <InlineMath math="\textcolor{#3312B8}{x}"/>, da der Kegel eine Neigung von 45° hat. Heißt: Für jedes <InlineMath math="\textcolor{#3312B8}{x}"/> das wir hoch gehen, müssen wir auch <InlineMath math="\textcolor{#3312B8}{x}"/> zur Seite gehen. Hier ergibt sich:
                    <BlockMath math="A_\text{innen} = \pi \textcolor{#3312B8}{x}^2"/>
                    Damit könne wir die Fläche vom Kreisring <InlineMath math="A_\text{Z}"/> berechnen.
                    <BlockMath math="A_\text{Z} &= A_\text{voll} - A_\text{innen} \\ &= \pi \textcolor{#12B886}{r}^2 - \pi \textcolor{#3312B8}{x}^2"/>
                    Weiter können wir das erstmal nicht vereinfachen. Gehen wir also zum Halbkreis
                    </ListItem>

                    <ListItem>
                    <b>Fläche im Halbkreis:</b> Hier müssen wir den Satz des Pythagoras einsetzen, um nach <InlineMath math="\textcolor{#D1BC1B}{r_\text{K}}"/> aufzulösen.
                    <MBlockMath desktop="\textcolor{#3312B8}{x}^2 + \textcolor{#D1BC1B}{\textcolor{#D1BC1B}{r_\text{K}}}^2 &= \textcolor{#12B886}{r}^2 &&\lvert -\textcolor{#3312B8}{x}^2 \\ \textcolor{#D1BC1B}{r_\text{K}}^2 &= \textcolor{#12B886}{r}^2 - \textcolor{#3312B8}{x}^2 &&\lvert \sqrt{} \\ \textcolor{#D1BC1B}{r_\text{K}} &= \sqrt{\textcolor{#12B886}{r}^2 - \textcolor{#3312B8}{x}^2}" mobile="\textcolor{#3312B8}{x}^2 + \textcolor{#D1BC1B}{r_\text{K}}^2 &= \textcolor{#12B886}{r}^2 \\ &Downarrow \scriptsize{-\textcolor{#3312B8}{x}^2} \\ \textcolor{#D1BC1B}{r_\text{K}}^2 &= \textcolor{#12B886}{r}^2 - \textcolor{#3312B8}{x}^2 \\&Downarrow \scriptsize{\sqrt{}} \\ \textcolor{#D1BC1B}{r_\text{K}} &= \sqrt{\textcolor{#12B886}{r}^2 - \textcolor{#3312B8}{x}^2}"/>
                    Nun nutzen wir die normale Flächenformel für einen Kreis, um auf die Fläche <InlineMath math="A_\text{K}"/> zu kommen:
                    <BlockMath math="A_\text{K} &= \pi \textcolor{#D1BC1B}{r_\text{K}}^2 \\ &=\pi \cdot \left(\sqrt{\textcolor{#12B886}{r}^2 - \textcolor{#3312B8}{x}^2}\right)^2 \\ &= \pi (\textcolor{#12B886}{r}^2 - \textcolor{#3312B8}{x}^2) \\ &= \pi \textcolor{#12B886}{r}^2 - \pi \textcolor{#3312B8}{x}^2"/>
                    Das ist exakt das gleiche Ergebnis wie vorhin!
                    </ListItem>
                </List>
                Damit haben wir hergeleitet, dass die Halbkugel in jeder Höhe die gleiche Höhe hat wie der Kreisring zwischen Kegel und Zylinder, denn es gilt: <InlineMath math="A_\text{Z} = A_\text{K}"/>. Wir können also die Regel von Cavalieri anwenden. Die Halbkugel hat damit das gleiche Volumen wie der Körper zwischen dem Kegel und dem Zylinder. Genau dieses Volumen müssen wir jetzt berechnen!
                <Divider/>
                Das Volumen bekommen wir raus, indem wir das Volumen des Kegels vom Volumen des Zylinders abziehen.
                <List>
                    <ListItem><b>Volumen des Zylinders:</b>
                    <MBlockMath desktop="V_\text{Zylinder} &= \pi \textcolor{#12B886}{r}^2 \cdot h &&\lvert h = \textcolor{#12B886}{r} \\ &= \pi \textcolor{#12B886}{r}^2 \cdot \textcolor{#12B886}{r} \\ &=\pi \textcolor{#12B886}{r}^3" mobile="V_\text{Zylinder} &= \pi \textcolor{#12B886}{r}^2 \cdot h \\ &\Downarrow \scriptsize{h = \textcolor{#12B886}{r}} \\ &= \pi \textcolor{#12B886}{r}^2 \cdot \textcolor{#12B886}{r} \\ &=\pi \textcolor{#12B886}{r}^3"/>
                    </ListItem>
                    <ListItem>
                    <b>Volumen des Kegels:</b>
                    <MBlockMath desktop="V_\text{Kegel} &= \frac{1}{3}\pi \textcolor{#12B886}{r}^2 \cdot h &&\lvert h = \textcolor{#12B886}{r} \\ &= \frac{1}{3}\pi \textcolor{#12B886}{r}^2 \cdot \textcolor{#12B886}{r} \\ &=\frac{1}{3}\pi \textcolor{#12B886}{r}^3" mobile="V_\text{Kegel} &= \frac{1}{3}\pi \textcolor{#12B886}{r}^2 \cdot h \\ &\Downarrow \scriptsize{h = \textcolor{#12B886}{r}} \\ &= \frac{1}{3}\pi \textcolor{#12B886}{r}^2 \cdot \textcolor{#12B886}{r} \\ &=\frac{1}{3}\pi \textcolor{#12B886}{r}^3"/>
                    </ListItem>
                </List>

                Berechnen wir das Volumen des Körpers und damit auch der Halbkugel <InlineMath math="V_\text{Halbkugel}"/>, so kommen wir auf:
                    <BlockMath math="V &= V_\text{Zylinder} - V_\text{Kegel} \\ &= \pi \textcolor{#12B886}{r}^3 - \frac{1}{3}\pi \textcolor{#12B886}{r}^3 \\ &= \frac{2}{3}\pi \textcolor{#12B886}{r}^3"/>
                Das Volumen der Halbkugel entspricht also <InlineMath math="V_\text{Halbkugel} = \frac{2}{3}\pi \textcolor{#12B886}{r}^3"/>. Um das Volumen einer ganzen Kugel zu bekommen, multiplizieren wir das Volumen mal zwei, also bekommen wir:
                    <BlockMath math="V_\text{Kugel} = \frac{4}{3}\pi \textcolor{#12B886}{r}^3"/>
            </CheckableHeading>
            <CheckableBlockquote title="Aufgabe: Volumenübungen" icon="frage" titleOrder={2}>
                Gegeben ist der Wert eines Maßes. Berechne die fehlenden Maße <InlineMath math="r, d"/> und <InlineMath math="V"/>
                <List>
                    <ListItem>
                        <InlineMath math="r=3\,\text{cm}"/>
                    </ListItem>
                    <ListItem>
                        <InlineMath math="r=1.5\,\text{m}"/>
                    </ListItem>
                    <ListItem>
                        <InlineMath math="d=4\,\text{m}"/>
                    </ListItem>
                    <ListItem>
                        <InlineMath math="V=55\,\text{m}^3"/>
                    </ListItem>
                    <ListItem>
                        <InlineMath math="V=1135\,\text{cm}^3"/>
                    </ListItem>
                </List>
                <Lösung title="Lösung" titleOrder={3} id="Lösung-Volumen">
                <List>
                    <ListItem>
                        Gegeben: <InlineMath math="r=3\,\text{cm}"/>
                        <BlockMath math="d &= 2 r \\&= 6\,\text{cm} \\ V &= \frac{4}{3}\pi r^3\\ &= \frac{4}{3}\pi \cdot(3\,\text{cm})^3 \\&\approx 113{,}10\,\text{cm}^3 "/>
                    </ListItem>
                    <ListItem>
                        Gegegen: <InlineMath math="r=1.5\,\text{m}"/>
                        <BlockMath math="d &= 2 r \\&= 3\,\text{m} \\ V &= \frac{4}{3}\pi r^3 \\ &= \frac{4}{3}\pi \cdot(1{,}5\,\text{m})^3 \\ &\approx 14{,}14\,\text{m}^3 "/>
                    </ListItem>
                    <ListItem>
                        Gegeben: <InlineMath math="d=4\,\text{m}"/>
                        <BlockMath math="r &= \frac{1}{2} d \\&= 2\,\text{m} \\ V &= \frac{4}{3}\pi r^3 \\ &= \frac{4}{3}\pi \cdot(2\,\text{m})^3 \\ &\approx 33{,}51\,\text{m}^3 "/>
                    </ListItem>
                    <ListItem>
                        Gegeben: <InlineMath math="V=55\,\text{m}^3"/>
                        <MBlockMath desktop=" V &= \frac{4}{3}\pi r^3 && \lvert \cdot \frac{3}{4} \\ \frac{3}{4}V &= \pi r^3 && \lvert : \pi \\ \frac{3}{4\pi}V &= r^3 && \lvert \sqrt[3]{} \\ \sqrt[3]{\frac{3}{4\pi}V} &= r \\&\Rightarrow r = \sqrt[3]{\frac{3}{4\pi}55\,\text{m}^3} \approx 2{,}36\,\text{m} \\ d &= 2r \\ &= 4{,}72\,\text{m}\\"
                        mobile=" V &= \frac{4}{3}\pi r^3 \\ &\Downarrow \scriptsize{\cdot \frac{3}{4}} \\ \frac{3}{4}V &= \pi r^3\\ &\Downarrow \scriptsize{: \pi} \\ \frac{3}{4\pi}V &= r^3 \\ &\Downarrow \scriptsize{\sqrt[3]{}} \\ \sqrt[3]{\frac{3}{4\pi}V} &= r \\&\Rightarrow r = \sqrt[3]{\frac{3}{4\pi}55\,\text{m}^3} \approx 2{,}36\,\text{m} \\ d &= 2r\\ &= 4{,}72\,\text{m}"/>
                    </ListItem>
                    <ListItem>
                        Gegeben: <InlineMath math="V=1135\,\text{cm}^3"/>
                        <BlockMath math=" r &=  \sqrt[3]{\frac{3}{4\pi}V} \\ &= \sqrt[3]{\frac{3}{4\pi}1135\,\text{cm}^3} \approx 6{,}47\,\text{cm} \\
                        d &= 2r \\ &= 12{,}94\,\text{m}"/> </ListItem>
                </List>
                </Lösung>
            </CheckableBlockquote>
        </CheckableHeading>
        <CheckableHeading title="Oberfläche">
            Auch die Oberfläche einer Kugel lässt sich nicht so einfach wie bei anderen Körpern bestimmen. Da wir das Volumen aber bereits wissen, können wir es uns einfacher machen! Hierbei greifen wir auf die Grundfläche von Pyramiden zurück.
            <Divider/>
            Dafür füllen wir die Oberfläche einer Kugel mit ganz vielen <b>Vierecken</b> oder <b>Dreiecken</b> aus. Die Form spielt keine Rolle, solange man aus den Flächen eine Pyramide bilden kann, deren Spitze der Mittelpunkt der Kugel ist. Die linke Seite des Bildes unten erklärt, wie so eine „Kugel“ aussehen würde.
            <Image
                visibleFrom="md"
                h={{base: "auto", md: 400}}
                width={2100}
                height={800}
                src={"/Kugeln/KugelUnterteilungDesktop.png"}
                alt="Eine Kugel, deren Oberfläche in viele Rechtecke unterteilt ist. Ein Rechteck ist hervorgehoben, die Ecken sind mit Linien bis zum Mittelpunkt der Kugel verbunden, sodass eine quadratische Pyramide entsteht. "
            />
            <Image
                hiddenFrom="md"
                h={{base: "auto", md: 400}}
                width={2100}
                height={800}
                src={"/Kugeln/KugelUnterteilungMobil.png"}
                alt="Eine Kugel, deren Oberfläche in viele Rechtecke unterteilt ist. Ein Rechteck ist hervorgehoben, die Ecken sind mit Linien bis zum Mittelpunkt der Kugel verbunden, sodass eine quadratische Pyramide entsteht"
            />
            Der Trick ist nun – da wir die Seiten frei wählen können – dass wir die Pyramiden unendlich klein wählen. Dadurch bekommen wir nämlich wieder eine Kugel! Außerdem können wir dann annehmen, dass unsere Pyramiden eine Höhe von <Mark c={"teal"}><InlineMath math="r"/></Mark>haben.
            Jetzt nutzen wir aus, dass wir die Volumenformel für Kugel und Pyramide kennen, damit können wir dann die Oberflächenformel der Kugel herleiten.
                <Divider/>
            Die Volumenformel für eine Kugel lautet:
                <BlockMath math="V = \frac{4}{3}\pi \textcolor{#12B886}{r}^3"/>
            Die Kugel haben wir in eine beliebige Anzahl von Pyramiden zerteilt, also in <InlineMath math="n"/>-Pyramiden.
                <BlockMath math="V = V_\text{Pyramide, 1} + V_\text{Pyramide, 2} + \ldots + V_{\text{Pyramide}, n}"/>
            Beide Gleichungen können wir gleichsetzen, da beide dem Kugelvolumen entsprechen:
                <BlockMath math="\frac{4}{3}\pi \textcolor{#12B886}{r}^3 = V_\text{Pyramide, 1} + V_\text{Pyramide, 2} + \ldots + V_{\text{Pyramide}, n}"/>
            Jetzt setzen wir die Formel für das Pyramidenvolumen <InlineMath math="V_\text{Pyramide} = \frac{1}{3}Gh"/>ein, wobei die Höhe <InlineMath math="h"/> in unserem Fall dem Radius <Mark c="teal"><InlineMath math="r"/></Mark> entspricht:
                <MBlockMath desktop="\frac{4}{3}\pi \textcolor{#12B886}{r}^3 &= \frac{1}{3}G_1\textcolor{#12B886}{r} + \frac{1}{3}G_2\textcolor{#12B886}{r} + \ldots + \frac{1}{3}G_n\textcolor{#12B886}{r} &&\lvert \cdot 3 \\
                    4\pi \textcolor{#12B886}{r}^3 &= G_1\textcolor{#12B886}{r} + G_2\textcolor{#12B886}{r} + \ldots + G_n\textcolor{#12B886}{r} &&\lvert :r \\
                    4\pi \textcolor{#12B886}{r}^2 &= G_1 + G_2 + \ldots + G_n"
                    mobile="\frac{4}{3}\pi \textcolor{#12B886}{r}^3 &= \frac{1}{3}G_1\textcolor{#12B886}{r} + \frac{1}{3}G_2\textcolor{#12B886}{r} + \ldots + \frac{1}{3}G_n\textcolor{#12B886}{r} \\ &\Rightarrow \scriptsize{\cdot 3} \\
                    4\pi \textcolor{#12B886}{r}^3 &= G_1\textcolor{#12B886}{r} + G_2\textcolor{#12B886}{r} + \ldots + G_n\textcolor{#12B886}{r} \\ &\Rightarrow \scriptsize{:3} \\
                    4\pi \textcolor{#12B886}{r}^2 &= G_1 + G_2 + \ldots + G_n"
                    />
            Die Gleichung haben wir vereinfacht, indem wir mit 3 multipliziert und durch <Mark c="teal"> <InlineMath math="r"/></Mark> geteilt haben. Auf der rechten Seite stehen nun nur noch die Grundflächen der Pyramiden. Genau hier wollten wir ankommen! Denn die Summe aller Grundfläche entspricht dem Oberflächeninhalt der Kugel!
            <BlockMath math="4\pi \textcolor{#12B886}{r}^2 &= O"/>
            Damit haben wir die Oberflächenformel für die Kugel hergeleitet!
        </CheckableHeading>
        </Fragment>
    );
}
