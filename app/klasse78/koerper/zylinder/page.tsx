import { ImageCaption } from "@/components/ImageCaption";
import { CheckableHeading } from "@/components/CheckableHeading";
import {
    Button,
    Container,
    Divider,
    Flex,
    Group,
    Image,
    List,
    ListItem,
    Space,
    Spoiler,
    ThemeIcon,
} from "@mantine/core";
import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { Lösung } from "@/components/Lösung";
import { InlineMath } from "react-katex";
import BlockMath from "@/components/BlockMath";
import Video from "next-video";
import UmfangZylinder from "/videos/UmfangZylinder.mov";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";
import GeoGebraAppletSlider from "@/components/GeoGebraAppletSlider";

export default function Zylinder() {
    return (
        <div>
            <CheckableHeading title="Der Zylinder">
                Zylinder sind beliebte Formen in unserem Alltag. Seien es
                Lampenschirme, die Stangen von Straßenlaternen oder
                Konservendosen – überall findet man diese Form. Deswegen ist es
                für uns interessant, diese Form mathematisch beschreiben zu
                können!
                <Flex>
                    <Image
                        src="/dosen.jpg"
                        width={6000}
                        height={4000}
                        alt="Verschiedene Dosen"
                    />
                    <Image
                        src="/regler.jpg"
                        width={6000}
                        height={4000}
                        alt="Ein Regler für die Lautstärke"
                    />
                </Flex>
            </CheckableHeading>

            <CheckableHeading title="Definition eines Zylinders">
                Die Grundfläche eines Zylinders ist immer ein <b>Kreis</b>. Wenn
                wir diesen nehmen und in den Raum hineinziehen, so bekommen wir
                einen Körper, den wir <b>Zylinder</b> nennen.
            </CheckableHeading>
            <CheckableBlockquote
                title="Aufgabe: Zylinder in der Umgebung"
                icon="frage"
            >
                Gehe raus und suche nach beliebigen Sachen, die für dich nach
                einem Zylinder aussehen. Fallen dir plötzlich vielleicht Dinge
                auf, die du vorher so noch nie bemerkt hast? Mache von deiner
                Expedition Fotos und bringe sie mit in den Unterricht!
            </CheckableBlockquote>
            <CheckableHeading title="Schrägbilder">
                Aus der Orientierungsstufe kennst du bereits das{" "}
                <b>Schrägbild</b> eines Quaders. Das sollte ungefähr so aussehen
                wie in dem Bild.
                <Image
                    src="/QuaderSchrägbild@2x.png"
                    width={1802}
                    height={1200}
                    sizes="500px"
                    alt="Schrägbild eines Quaders auf kariertem Papier."
                />
                Verdeckte Kanten werden also mit einer gestrichelten Linie
                angedeutet, während sichtbare Kanten durchgezogen werden.
                <Divider />
                Versuchen wir uns mal an einem Schrägbild von einem Zylinder.
                <List type="ordered">
                    <ListItem>
                        Zuerst zeichnen wir einen Kreis als Grundfläche. Dieser
                        ist wegen der Perspektive etwas zusammengedrückt und
                        nach hinten rechts verzerrt. Zwischen den äußersten
                        Punkten links und rechts können wir den weiter hinten
                        liegenden Teil gestrichelt zeichnen – das spart uns
                        später Arbeit. Wenn du noch
                    </ListItem>
                    <ListItem>
                        Dann ziehen wir die äußersten Kanten nach oben, bis wir
                        die gewünschte Höhe erreichen.
                    </ListItem>
                    <ListItem>Darauf setzen wir nun die Oberseite.</ListItem>
                </List>
                <Image
                    src="/ZylinderSchrägbildEntstehung@2x.png"
                    width={2402}
                    height={1200}
                    alt="Es wird gezeigt, wie das Schrägbild eines Zylinders Schritt für Schritt gezeichnet wird. Links wird mit einem Kreis angefangen. Auf dessen Außenseiten werden zwei senkrechte Striche gezeichnet, die alle die gleiche Höhe haben. Auf deren Enden wird dann ein identischer Kreis zu dem unten gezeichnet."
                />
            </CheckableHeading>
            <CheckableBlockquote icon="frage" title="Aufgabe: Schrägbilder">
                Zeichne die Zylinder mit Radius <InlineMath>r</InlineMath> und
                Höhe <InlineMath>h</InlineMath> als Schrägbilder.
                <List type="ordered">
                    <ListItem>
                        <InlineMath>{String.raw`r = 1\,\text{cm} \quad h = 3\,\text{cm}`}</InlineMath>
                    </ListItem>
                    <ListItem>
                        <InlineMath>{String.raw`r = 1{,}5\,\text{cm} \quad h = 4\,\text{cm}`}</InlineMath>
                    </ListItem>
                    <ListItem>
                        <InlineMath>{String.raw`r = 1\,\text{cm} \quad h = 5\,\text{cm}`}</InlineMath>
                    </ListItem>
                    <ListItem>
                        <InlineMath>{String.raw`r = 2\,\text{cm} \quad h = 6{,}5\,\text{cm}`}</InlineMath>
                    </ListItem>
                    <ListItem>
                        <InlineMath>{String.raw`r = 0{,}5\,\text{cm} \quad h = 2\,\text{cm}`}</InlineMath>
                    </ListItem>
                    <ListItem>
                        <InlineMath>{String.raw`r = 3\,\text{cm} \quad h = 1{,}5\,\text{cm}`}</InlineMath>
                    </ListItem>
                </List>
                <CheckableHeading
                    title="Lösung"
                    id="Lösung-Schrägbilder"
                    titleOrder={2}
                >
                    <Lösung>
                        <Image
                            h={{base: "auto", md: 500}}
                            src="/ZylinderLösung@2x.png"
                            width={3600}
                            height={2000}
                            alt="Zylinder aus den Teilaufgaben 1 bis 6."
                        />
                    </Lösung>
                </CheckableHeading>
            </CheckableBlockquote>
            <CheckableHeading title="Der Mantel eines Zylinders">
                Eine praktische Eigenschaft von Zylindern ist, dass man sie{" "}
                <b>rollen</b> kann. Denk mal an einen Autoreifen – er ist
                praktisch nichts anderes als ein rollender Zylinder –
                insbesondere wenn wir uns die Autoreifen von Formel-1 Autos
                anschauen!
                <ImageCaption
                    src="/Formel1Reifen.jpg"
                    width={846}
                    rotate="right"
                    height={537}
                    alt="Ein Formel-1 Auto von hinten. Links sind zwei Reifen sichtbar."
                >
                    rare-gallery.com
                </ImageCaption>
                Die Fläche, über die man einen Zylinder rollen kann, nennt man
                auch <b>Mantelfläche</b>. Die Ober- und Unterseite des Zylinders
                wird <b>Grundfläche</b> genannt. Das kannst du dir merken, wenn
                du an einen Regenmantel denkst: Den trägst du schließlich um
                dich herum und nicht unter dir 🧥.
                <CheckableHeading
                    title="Bestimmen der Fläche eines Zylinders durch Abrollen"
                    titleOrder={2}
                >
                    Da wir Zylinder abrollen können, lässt sich die Fläche eines
                    Zylinders relativ einfach bestimmen. Wir legen ihn dazu auf
                    eine Seite und schauen, wie weit wir ihn rollen müssen, bis
                    wir wieder am Startpunkt angekommen sind! Bei Objekten, die
                    aus Plastik sind, geht das ganz gut mit einem Blatt Papier
                    als Unterlage und einem Filzstift oder Textmarker zum
                    anmalen. Der geht danach nämlich wieder gut ab und wir sehen
                    dadurch, wann wir genau eine Umdrehung haben. Schau es dir
                    in dem Video unten an.
                    <Container
                        my={"md"}
                        maw={{ base: 300, xs: 400, sm: 500, md: 750 }}
                    >
                        <Video
                            src={UmfangZylinder}
                            style={{
                                width: "100%",
                                height: "auto",
                                aspectRatio: "16/9",
                            }}
                        />
                    </Container>
                    Die abgerollte Mantelfläche bildet ein Rechteck, das in
                    unserem Beispiel die Kantenlängen{" "}
                    <InlineMath>{String.raw`9{,}4\,\text{cm}`}</InlineMath> und{" "}
                    <InlineMath>{String.raw`4{,}7\,\text{cm}`}</InlineMath> hat.
                    Der Flächeninhalt <InlineMath>A</InlineMath> ergibt sich
                    also wie folgt:
                    <BlockMath>
                        {String.raw`
                        \begin{aligned}
                        A &= 9{,}4\,\text{cm} \cdot 4{,}7\,\text{cm} \\
                        &= 44{,}18\,\text{cm}^2
                        \end{aligned}
                        `}
                    </BlockMath>
                    Das Problem ist nun aber, dass wir nicht unbedingt jeden
                    Zylinder mit einem Filzstift anmalen wollen. Wie würden wir
                    die Mantelfläche eines Autoreifens bestimmen? Dann bräuchten
                    wir bereits einen Eimer Farbe – diese Kleckerei können wir
                    uns mit etwas Mathematik sparen.
                </CheckableHeading>
                <CheckableHeading
                    title="Bestimmen der Fläche eines Zylinders mit Formeln"
                    titleOrder={2}
                >
                    Aus dem Unterricht sollte dir bereits bekannt sein, wie man
                    den Umfang <InlineMath>U</InlineMath> eines Kreises
                    berechnet. Wir können dafür die Formel
                    <BlockMath>
                        {String.raw`
                        \begin{aligned}
                        U &= 2 \cdot \pi \cdot r \\
                        &= \pi \cdot d
                        \end{aligned}
                        `}
                    </BlockMath>
                    verwenden. <InlineMath>r</InlineMath> ist hierbei der
                    Radius, <InlineMath>d</InlineMath> der Durchmesser. Falls
                    dir nicht klar sein sollte, warum wir den Umfang auf diese
                    zwei Arten berechnen können, zeichne dir einen Kreis mit
                    Durchmesser und Radius auf – dann kommst du selber drauf!
                    <CheckableBlockquote
                        title="Exkurs: Die Kreiszahl π"
                        icon="exkurs"
                    >
                        Die Zahl{" "}
                        <InlineMath>\pi \approx 3,1415 \dots</InlineMath> ist
                        das Verhältnis zwischen dem Umfang{" "}
                        <InlineMath>U</InlineMath> eines Kreises und seinem
                        Durchmesser <InlineMath>d</InlineMath>. Tatsächlich ist
                        es egal, wie groß ein Kreis ist – dieses Verhältnis ist
                        immer gleich <InlineMath>\pi</InlineMath>. Auch in
                        unserem Beispiel:
                        <BlockMath>
                            {String.raw`
                            \begin{aligned}
                            \pi &= \tfrac{U}{d} \\
                                &=  \tfrac{9{,}4\,\text{cm}}{3\,\text{cm}} \\
                                &\approx 3,13 
                            \end{aligned}
                            `}
                        </BlockMath>
                    </CheckableBlockquote>
                    <Image
                        src="/durchmesserFluid.jpg"
                        width={6000}
                        height={4000}
                        alt="Ein Geodreieck wird an eine Flasche mit Korrekturfluid gehalten. Der Durchmesser beträgt 3 cm"
                    />
                    Der Radius beträgt in unserem Fall{" "}
                    <InlineMath>{String.raw`1{,}5\,\text{cm}`}</InlineMath>. Nun
                    verwenden wir die Formel für den Umfang eines Kreises, um
                    den Umfang unseres Gefäßes zu bekommen:
                    <BlockMath>
                        {String.raw`
                        \begin{aligned}
                        U &= 2 \cdot \pi \cdot r \\
                        &= 2 \cdot \pi \cdot 1{,}5\,\text{cm} \\
                        &\approx 9{,}4\,\text{cm}
                        \end{aligned}
                        `}
                    </BlockMath>
                    Das ist genau die Länge, die wir auch durch das Abrollen der
                    Dose bekommen. Nun benötigen wir noch die Höhe unseres
                    Zylinders.
                    <Image
                        src="/höheFluid.jpg"
                        width={6000}
                        height={4000}
                        alt="Ein Geodreieck wird an eine Flasche mit Korrekturfluid gehalten. Die Höhe beträgt 5 cm"
                    />
                    Die Höhe beträgt in unserem Fall also{" "}
                    <InlineMath>{String.raw`5\,\text{cm}`}</InlineMath>. Um die
                    Mantelfläche zu erstellen, „ziehen“ wir diese nach oben.
                    Mathematisch machen wir das, indem wir den Umfang{" "}
                    <InlineMath>U</InlineMath> mit der Höhe{" "}
                    <InlineMath>h</InlineMath> multiplizieren:
                    <BlockMath>
                        {String.raw`
                        \begin{aligned}
                        A &= U \cdot h \\
                        &= 9{,}4\,\text{cm} \cdot 5\,\text{cm} \\
                        &= 47\,\text{cm}^2
                        \end{aligned}
                        `}
                    </BlockMath>
                    Das passt gut zu der Fläche, die man durch das Abrollen der
                    Flasche bekommt. Dadurch erhalten wir nämlich ca.{" "}
                    <InlineMath>{String.raw`44\,\text{cm}^2`}</InlineMath>.
                </CheckableHeading>
                <CheckableBlockquote icon="frage" title="Aufgabe: Mantelfläche">
                    Berechne die Mantelfläche der Zylinder, welche Radius{" "}
                    <InlineMath>r</InlineMath> und Höhe{" "}
                    <InlineMath>h</InlineMath> haben.
                    <List type="ordered">
                        <ListItem>
                            <InlineMath>{String.raw`r = 2\,\text{cm} \quad h = 1\,\text{cm}`}</InlineMath>
                        </ListItem>
                        <ListItem>
                            <InlineMath>{String.raw`r = 4{,}7\,\text{cm} \quad h = 10\,\text{cm}`}</InlineMath>
                        </ListItem>
                        <ListItem>
                            <InlineMath>{String.raw`r = 1{,}9\,\text{cm} \quad h = 1{,}1\,\text{cm}`}</InlineMath>
                        </ListItem>
                        <ListItem>
                            <InlineMath>{String.raw`r = 5\,\text{cm} \quad h = 3{,}2\,\text{cm}`}</InlineMath>
                        </ListItem>
                        <ListItem>
                            <InlineMath>{String.raw`r = 7\,\text{m} \quad h = 4{,}3\,\text{m}`}</InlineMath>
                        </ListItem>
                        <ListItem>
                            <InlineMath>{String.raw`r = 19\,\text{mm} \quad h = 2{,}6\,\text{cm}`}</InlineMath>
                        </ListItem>
                    </List>
                    <CheckableHeading
                        title="Lösung"
                        id="Lösung-Mantelfläche"
                        titleOrder={2}
                    >
                        <Lösung>
                            <List type="ordered">
                                <ListItem>
                                    <InlineMath>{String.raw`U = 4\pi\,\text{cm}\approx 12{,}57\,\text{cm}\quad A = 4\pi\,\text{cm}^2 \approx 12{,}57\,\text{cm}^2`}</InlineMath>
                                </ListItem>
                                <ListItem>
                                    <InlineMath>{String.raw`U = \tfrac{47}{5}\pi\,\text{cm}\approx 11{,}94\,\text{cm}\quad A = \tfrac{209}{50}\pi\,\text{cm}^2 \approx 13{,}13\,\text{cm}^2`}</InlineMath>
                                </ListItem>
                                <ListItem>
                                    <InlineMath>{String.raw`U = \tfrac{19}{5}\pi\,\text{cm}\approx 12{,}57\,\text{cm}\quad A = 4\pi\,\text{cm}^2 \approx 12{,}57\,\text{cm}^2`}</InlineMath>
                                </ListItem>
                                <ListItem>
                                    <InlineMath>{String.raw`U = 10\pi\,\text{cm}\approx 31{,}42\,\text{cm}\quad A = 32\pi\,\text{cm}^2 \approx 100{,}53\,\text{cm}^2`}</InlineMath>
                                </ListItem>
                                <ListItem>
                                    <InlineMath>{String.raw`U = 14\pi\,\text{m}\approx 43{,}93\,\text{m}\quad A = \tfrac{301}{5}\pi\,\text{m}^2 \approx 189{,}12\,\text{m}^2`}</InlineMath>
                                </ListItem>
                                <ListItem>
                                    <InlineMath>{String.raw`U = 3{,}8\pi\,\text{cm}\approx 11{,}94\,\text{cm}\quad A = \tfrac{247}{25}\pi\,\text{cm}^2 \approx 31{,}04\,\text{cm}^2`}</InlineMath>
                                </ListItem>
                            </List>
                        </Lösung>
                    </CheckableHeading>
                </CheckableBlockquote>
            </CheckableHeading>
            <CheckableHeading title="Die Gesamtoberfläche eines Zylinders">
                Wir haben bisher nur die Mantelfläche eines Zylinders
                betrachtet. Ein Zylinder hat aber (meistens) noch einen Boden
                und einen Deckel. Für die Gesamtoberfläche müssen wir diese also
                auch betrachten!
                <Divider />
                Die Ober- und Unterseite eines Zylinders ist ein Kreis. Deswegen
                können wir die Flächenformel eines Kreises verwenden!
                <BlockMath>
                    {String.raw`
                    A_\text{Kappe} = \pi \cdot r^2
                    `}
                </BlockMath>
                Um nun die Gesamtoberfläche <InlineMath>O</InlineMath> eines
                Zylinders zu bekommen, addieren wir die Ober- und Unterseite{" "}
                <InlineMath>{String.raw`A_\text{Kappe}`}</InlineMath> sowie die
                Mantelfläche <InlineMath>M</InlineMath> zusammen:
                <BlockMath>
                    {String.raw`
                    A = M + 2\cdot A_\text{Kappe}
                    `}
                </BlockMath>
                <CheckableBlockquote icon="frage" title="Aufgabe: Oberfläche">
                    Berechne die Gesamtoberfläche der Zylinder, welche Radius{" "}
                    <InlineMath>r</InlineMath> und Höhe{" "}
                    <InlineMath>h</InlineMath> haben.
                    <List type="ordered">
                        <ListItem>
                            <InlineMath>{String.raw`r = 3\,\text{cm} \quad h = 1{,}2\,\text{cm}`}</InlineMath>
                        </ListItem>
                        <ListItem>
                            <InlineMath>{String.raw`r = 8{,}2\,\text{cm} \quad h = 5\,\text{cm}`}</InlineMath>
                        </ListItem>
                        <ListItem>
                            <InlineMath>{String.raw`r = 7{,}3\,\text{cm} \quad h = 3{,}9\,\text{cm}`}</InlineMath>
                        </ListItem>
                        <ListItem>
                            <InlineMath>{String.raw`r = 4\,\text{cm} \quad h = 9{,}1\,\text{cm}`}</InlineMath>
                        </ListItem>
                        <ListItem>
                            <InlineMath>{String.raw`r = 6{,}7\,\text{m} \quad h = 7{,}5\,\text{m}`}</InlineMath>
                        </ListItem>
                        <ListItem>
                            <InlineMath>{String.raw`r = 1{,}95\,\text{m} \quad h = 480\,\text{cm}`}</InlineMath>
                        </ListItem>
                    </List>
                    <CheckableHeading
                        title="Lösung" //
                        id="Lösung-Oberfläche"
                        titleOrder={2}
                    >
                        <Lösung>
                            <List type="ordered" visibleFrom="md">
                                <ListItem>
                                    <BlockMath>{String.raw`
                                    \begin{aligned}
                                    &&M &= \tfrac{36}{5}\pi\,\text{cm}^2 \approx 22{,}62\,\text{cm}^2 \\
                                    &&A_\text{Kappe} &= 9\pi\,\text{cm}^2 \approx 28{,}27\,\text{cm}^2 \\
                                    &&O &= \tfrac{126}{5}\pi\,\text{cm}^2 \approx 79{,}17\,\text{cm}^2
                                    \end{aligned}
                                    `}</BlockMath>
                                </ListItem>
                                <ListItem>
                                    <BlockMath>{String.raw`
                                    \begin{aligned}
                                    &&M &= 82\pi\,\text{cm}^2 \approx 257{,}61\,\text{cm}^2 \\
                                    &&A_\text{Kappe} &= \tfrac{1681}{25}\pi\,\text{cm}^2 \approx 211{,}24\,\text{cm}^2 \\
                                    &&O &= \tfrac{5412}{25}\pi\,\text{cm}^2 \approx 680{,}09\,\text{cm}^2
                                    \end{aligned}
                                    `}</BlockMath>
                                </ListItem>
                                <ListItem>
                                    <BlockMath>{String.raw`
                                    \begin{aligned}
                                    &&M &= \tfrac{2847}{50}\pi\,\text{cm}^2 \approx 178{,}88\,\text{cm}^2 \\
                                    &&A_\text{Kappe} &= \tfrac{5329}{100}\pi\,\text{cm}^2 \approx 167{,}42\,\text{cm}^2 \\
                                    &&O &= \tfrac{4088}{25}\pi\,\text{cm}^2 \approx 513{,}71\,\text{cm}^2
                                    \end{aligned}
                                    `}</BlockMath>
                                </ListItem>
                                <ListItem>
                                    <BlockMath>{String.raw`
                                    \begin{aligned}
                                    &&M &= \tfrac{364}{5}\pi\,\text{cm}^2 \approx 228{,}71\,\text{cm}^2 \\
                                    &&A_\text{Kappe} &= 16\pi\,\text{cm}^2 \approx 50{,}27\,\text{cm}^2 \\
                                    &&O &= \tfrac{524}{5}\pi\,\text{cm}^2 \approx 329{,}24\,\text{cm}^2
                                    \end{aligned}
                                    `}</BlockMath>
                                </ListItem>
                                <ListItem>
                                    <BlockMath>{String.raw`
                                    \begin{aligned}
                                    &&M &= \tfrac{201}{2}\pi\,\text{m}^2 \approx 315{,}73\,\text{m}^2 \\
                                    &&A_\text{Kappe} &= \tfrac{4489}{100}\pi\,\text{m}^2 \approx 141{,}03\,\text{m}^2 \\
                                    &&O &= \tfrac{4757}{25}\pi\,\text{m}^2 \approx 597{,}78\,\text{m}^2
                                    \end{aligned}
                                    `}</BlockMath>
                                </ListItem>
                                <ListItem>
                                    <BlockMath>{String.raw`
                                    \begin{aligned}
                                    &&M &= \tfrac{468}{25}\pi\,\text{m}^2\approx 58{,}81\,\text{m}^2 \\ 
                                    &&A_\text{Kappe} &= \tfrac{1521}{400}\pi\,\text{m}^2 \approx 11{,}95\,\text{m}^2 \\
                                    &&O &= \tfrac{1053}{40}\pi\,\text{m}^2 \approx 82{,}70\,\text{m}^2
                                    \end{aligned}
                                    `}</BlockMath>
                                </ListItem>
                            </List>
                            <List type="ordered" hiddenFrom="md">
                                <ListItem>
                                    <BlockMath>{String.raw`
                                    \begin{aligned}
                                    M &= \tfrac{36}{5}\pi\,\text{cm}^2 \\ &\approx 22{,}62\,\text{cm}^2 \\
                                    A_\text{Kappe} &= 9\pi\,\text{cm}^2 \\ &\approx 28{,}27\,\text{cm}^2 \\
                                    O &= \tfrac{126}{5}\pi\,\text{cm}^2 \\ &\approx 79{,}17\,\text{cm}^2
                                    \end{aligned}
                                    `}</BlockMath>
                                </ListItem>
                                <ListItem>
                                    <BlockMath>{String.raw`
                                    \begin{aligned}
                                    M &= 82\pi\,\text{cm}^2 \\ &\approx 257{,}61\,\text{cm}^2 \\
                                    A_\text{Kappe} &= \tfrac{1681}{25}\pi\,\text{cm}^2 \\ &\approx 211{,}24\,\text{cm}^2 \\
                                    O &= \tfrac{5412}{25}\pi\,\text{cm}^2 \\ &\approx 680{,}09\,\text{cm}^2
                                    \end{aligned}
                                    `}</BlockMath>
                                </ListItem>
                                <ListItem>
                                    <BlockMath>{String.raw`
                                    \begin{aligned}
                                    M &= \tfrac{2847}{50}\pi\,\text{cm}^2 \\ &\approx 178{,}88\,\text{cm}^2 \\
                                    A_\text{Kappe} &= \tfrac{5329}{100}\pi\,\text{cm}^2 \\ &\approx 167{,}42\,\text{cm}^2 \\
                                    O &= \tfrac{4088}{25}\pi\,\text{cm}^2 \\ &\approx 513{,}71\,\text{cm}^2
                                    \end{aligned}
                                    `}</BlockMath>
                                </ListItem>
                                <ListItem>
                                    <BlockMath>{String.raw`
                                    \begin{aligned}
                                    M &= \tfrac{364}{5}\pi\,\text{cm}^2 \\ &\approx 228{,}71\,\text{cm}^2 \\
                                    A_\text{Kappe} &= 16\pi\,\text{cm}^2 \\ &\approx 50{,}27\,\text{cm}^2 \\
                                    O &= \tfrac{524}{5}\pi\,\text{cm}^2 \\ &\approx 329{,}24\,\text{cm}^2
                                    \end{aligned}
                                    `}</BlockMath>
                                </ListItem>
                                <ListItem>
                                    <BlockMath>{String.raw`
                                    \begin{aligned}
                                    M &= \tfrac{201}{2}\pi\,\text{m}^2 \\ &\approx 315{,}73\,\text{m}^2 \\
                                    A_\text{Kappe} &= \tfrac{4489}{100}\pi\,\text{m}^2 \\ &\approx 141{,}03\,\text{m}^2 \\
                                    O &= \tfrac{4757}{25}\pi\,\text{m}^2 \\ &\approx 597{,}78\,\text{m}^2
                                    \end{aligned}
                                    `}</BlockMath>
                                </ListItem>
                                <ListItem>
                                    <BlockMath>{String.raw`
                                    \begin{aligned}
                                    M &= \tfrac{468}{25}\pi\,\text{m}^2\\ &\approx 58{,}81\,\text{m}^2 \\ 
                                    A_\text{Kappe} &= \tfrac{1521}{400}\pi\,\text{m}^2 \\ &\approx 11{,}95\,\text{m}^2 \\
                                    O &= \tfrac{1053}{40}\pi\,\text{m}^2 \\ &\approx 82{,}70\,\text{m}^2
                                    \end{aligned}
                                    `}</BlockMath>
                                </ListItem>
                            </List>
                        </Lösung>
                    </CheckableHeading>
                </CheckableBlockquote>
            </CheckableHeading>
            <CheckableHeading title="Volumenberechnung">
                Im Alltag begegnen wir Zylindern häufig im Vorratsschrank der
                Eltern: Seien es passierte Tomaten, eine abgepackte Dose Chili
                oder eine Portion Thunfisch. Dabei sind die meisten
                Konservendosen Zylinder.
                <CheckableBlockquote
                    title="Aufgabe: Zylinder als Packmaß"
                    icon="frage"
                >
                    Überlege dir, was die Vor- und Nachteile von
                    zylinderförmigen Verpackungen sind. Wenn so viele
                    Verpackungen zylinderförmig sind, warum verpacken wir dann
                    nicht alles in Zylindern?
                    <CheckableHeading
                        title="Lösung"
                        titleOrder={2}
                        id="lösung-zylinder-als-packmaß"
                    >
                        <Lösung>
                            <b>Vorteile:</b>
                            <List>
                                <ListItem>
                                    Zylinder lassen sich gut stapeln.
                                </ListItem>
                                <ListItem>
                                    Die meisten Zylinder haben viel Volumen bei
                                    wenig Oberfläche.
                                </ListItem>
                                <ListItem>
                                    Durch die runde Form lassen sich Zylinder
                                    nicht so einfach eindrücken und sind stabil.
                                </ListItem>
                                <ListItem>
                                    Leicht herzustellen, da Zylinder nur 3
                                    Seiten haben.
                                </ListItem>
                            </List>
                            <b>Nachteile:</b>
                            <List>
                                <ListItem>Können wegrollen.</ListItem>
                                <ListItem>
                                    Sind nicht so gut stapelbar wie Quader als
                                    Packungen.
                                </ListItem>
                            </List>
                            <Divider />
                            Das sind einige Gründe, die man mit den Augen sehen
                            kann. Der wichtigste Grund ist jedoch der: Der
                            Inhalt von Konservendosen wird bei der Produktion{" "}
                            <b>in</b> in der Dose aufgekocht – und das halten
                            nur Zylinder (oder Kugeln) aus. Schau dir zur
                            Erklärung mal dieses Video von der Sendung mit der
                            Maus an:{" "}
                            <Link
                                target="_blank"
                                href="https://www.wdrmaus.de/filme/sachgeschichten/konservendose.php5"
                            >
                                {" "}
                                <Button
                                    mb={"0.2em"}
                                    rightSection={<IconExternalLink />}
                                >
                                    Hier klicken!
                                </Button>
                            </Link>
                        </Lösung>
                    </CheckableHeading>
                </CheckableBlockquote>
                <CheckableHeading
                    title="Volumen mathematisch hergeleitet"
                    titleOrder={2}
                >
                    <CheckableHeading
                        title="Volumen eines Quaders"
                        titleOrder={3}
                    >
                        Ein Zylinder ist nicht so unterschiedlich von einem
                        Quader: Zylinder haben einen Kreis als Grundfläche,
                        Quader ein Rechteck. Ansonsten sind beides Körper, bei
                        denen man die Grundfläche „in die Höhe gezogen“ hat.
                        Erinnern wir uns also erstmal an das Volumen eines
                        Quaders zurück! Das können wir mit{" "}
                        <InlineMath>A = a \cdot b</InlineMath> berechnen, wobei{" "}
                        <InlineMath>a</InlineMath> und{" "}
                        <InlineMath>b</InlineMath> die beiden Grundseiten
                        bezeichnen.
                        <Image
                            src="/RechteckFläche@2x.png"
                            width={1802}
                            height={1200}
                            alt="Ein Rechteck mit der Fläche A und den Seiten a und b."
                        />
                        Das Volumen eines Quaders ergibt sich also durch das{" "}
                        <b>„hochziehen“</b> dieser Fläche in den Raum. Schau es
                        dir mal an diesem Beispiel hier an, wo ein Quader eine
                        Grundfläche von 3&nbsp;mal 2&thinsp;cm und eine Höhe von
                        2&thinsp;cm hat.
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
                            sliderWidth={{ base: 250, md: 400 }}
                            sliderMin={0}
                            sliderMax={2}
                            sliderStep={1}
                            sliderInitialValue={2}
                            sliderMarks={[
                                { value: 0, label: "0" },
                                { value: 1, label: "1" },
                                { value: 2, label: "2" },
                            ]}
                        />
                        Füllen wir den Quader mit Würfeln aus, die ein Volumen
                        von 1&thinsp;cm<sup>3</sup> haben, kann man gut
                        nachvollziehen, dass das Volumen vom gesamten Quader
                        12&thinsp;cm<sup>3</sup> sein muss. 6 Würfel sind unten,
                        weitere 6 sind oben. Das ergibt sich auch aus der
                        Berechnung von Grundfläche mal Höhe:
                        <BlockMath>{String.raw`
                            \begin{aligned}
                            \textcolor{blue}{A} &= 3 \, \text{cm} \cdot 2 \, \text{cm} \\
                            &= 6\, \text{cm}^2 \\
                            \textcolor{green}{V} &=\textcolor{blue}{A} \cdot h \\
                            &= 6 \, \text{cm}^2 \cdot 2\,\text{cm} \\
                            &= 12 \, \text{cm}^3
                            \end{aligned}
                        `}</BlockMath>
                        Können wir diese Formel eventuell auch bei Zylindern
                        anwenden? Gilt <InlineMath>V = A \cdot h</InlineMath>{" "}
                        hier immer? Testen wir es mal!
                    </CheckableHeading>
                    <CheckableHeading
                        title="Volumen eines Zylinders"
                        titleOrder={3}
                    >
                        Wir verfahren nach dem gleichen Prinzip wie bei einem
                        Quader. Wir berechnen zuerst den Flächeninhalt der
                        Grundfläche und „ziehen“ ihn dann in die Höhe. Wir
                        multiplizieren dazu den Flächeninhalt mit der Höhe. Als
                        Objekt suchen wir uns eine beliebige Dose aus dem
                        Vorratsschrank aus z.B. eine Dose Kokosmilch. Sie hat
                        einen Durchmesser von 7,5&thinsp;cm und eine Höhe von
                        11&thinsp;cm.
                        <Flex>
                            <Image
                                src="/doseKokosDurchmesser.jpg"
                                width={6000}
                                height={4000}
                                sizes="500px"
                                alt="Ein Lineal liegt unter einer Konservendose. Ablesbar ist ein Durchmesser von 7,5 cm."
                            />
                            <Image
                                src="/doseKokosHöhe.jpg"
                                width={6000}
                                height={4000}
                                sizes="500px"
                                alt="Ein Lineal wird neben eine Konservendose gehalten. Ablesbar ist eine Höhe von 11 cm."
                            />
                        </Flex>
                        Wir berechnen zuerst den Flächeninhalt mit der
                        Flächenformel für einen Kreis:
                        <BlockMath>
                            {String.raw`
                            \begin{aligned}
                            A &= \pi \cdot r^2 \\
                                &= \pi \cdot \left(\frac{7{,}5\,\text{cm}}{2}\right)^2\\
                                &\approx 44{,}18\,\text{cm}^2
                            \end{aligned}
                            `}
                        </BlockMath>
                        Das Volumen berechnen wir nun nach dem gleichen Prinzip
                        wie beim Quader, also:
                        <BlockMath>
                            {String.raw`
                            \begin{aligned}
                            V &= A \cdot h \\
                                &= 44{,}18\,\text{cm}^2 \cdot  11\,\text{cm} \\
                                &\approx 485{,}97\,\text{cm}^3
                            \end{aligned}
                            `}
                        </BlockMath>
                        Das ist etwas mehr, als die 400&thinsp;mL, die
                        eigentlich als Füllmenge auf der Dose stehen. Wir dürfen
                        aber nicht vergessen, dass wir die Dose von außen
                        gemessen haben und diese nie komplett ausgefüllt werden.
                        In der Dose selbst ist also etwas weniger Platz, und es
                        wird nur ca. 400&thinsp;mL Kokosmilch vorhanden sein.
                        <CheckableBlockquote
                            icon="frage"
                            title="Aufgabe: Stimmt die Mengenangabe?"
                        >
                            Ein Hersteller kann viel auf die Dose schreiben – ob
                            es aber wirklich stimmt, ist eine andere Frage.
                            Damit wir nicht um unser Geld gebracht werden,
                            messen wir das mal nach. Bestimme die tatsächliche
                            Füllmenge mittels der Formel{" "}
                            <InlineMath>V = A \cdot h</InlineMath>. Versuche die
                            Maße möglichst genau abzulesen! Als Füllmenge ist
                            bei beiden Dosen 400&thinsp;mL angegeben.
                            <Space />
                            <List type="ordered">
                                <ListItem>
                                    <b>Dose mit Kokosmilch</b>
                                    <Flex>
                                        <Image
                                            h={{ base: "auto", md: 275 }}
                                            src="/innenKokos.jpg"
                                            width={6000}
                                            height={4000}
                                            sizes="500px"
                                            alt="Ein Lineal liegt über der Öffnung einer Konservendose mit Kokosmilch. Ablesbar ist ein Durchmesser von 7,3 cm."
                                        />
                                        <Image
                                            h={{ base: "auto", md: 275 }}
                                            src="/füllstandKokos.jpg"
                                            width={6000}
                                            height={4000}
                                            sizes="500px"
                                            alt="Ein Stäbchen, das in die Kokosmilch getunkt wurde, liegt neben einem Lineal. Es wurde ca. 9,5 cm tief hineingetaucht."
                                        />
                                    </Flex>
                                    <Spoiler
                                        maxHeight={0}
                                        showLabel="Maße einblenden"
                                        hideLabel="Maße ausblenden"
                                    >
                                        Innerer Durchmesser: 7,3&thinsp;cm.
                                        Bedeckter Bereich auf Stäbchen:
                                        9,5&thinsp;cm{" "}
                                    </Spoiler>
                                </ListItem>
                                <Space />
                                <ListItem>
                                    <b>Dose mit gehackten Tomaten</b>
                                    <Flex>
                                        <Image
                                            h={{ base: "auto", md: 275 }}
                                            src="/innenTomate.jpg"
                                            width={6000}
                                            height={4000}
                                            sizes="500px"
                                            alt="Ein Lineal liegt über der Öffnung einer Konservendose mit gehackten Tomaten. Ablesbar ist ein Durchmesser von 7,3 cm."
                                        />
                                        <Image
                                            h={{ base: "auto", md: 275 }}
                                            src="/füllstandTomate.jpg"
                                            width={6000}
                                            height={4000}
                                            sizes="500px"
                                            alt="Ein Stäbchen, das in die gehackten Tomaten getunkt wurde, liegt neben einem Lineal. Es wurde ca. 9,7 cm tief hineingetaucht."
                                        />
                                    </Flex>
                                    <Spoiler
                                        maxHeight={0}
                                        showLabel="Maße einblenden"
                                        hideLabel="Maße ausblenden"
                                    >
                                        Innerer Durchmesser: 7,3&thinsp;cm.
                                        Bedeckter Bereich auf Stäbchen:
                                        9,7&thinsp;cm{" "}
                                    </Spoiler>
                                </ListItem>
                                <Space />
                                <ListItem>
                                    Suche bei dir Zuhause nach einer Dose, die
                                    vielleicht eine andere Größe und Füllmenge
                                    hat. Stimmt die Füllmenge mit deiner Messung
                                    überein?
                                </ListItem>
                            </List>
                            <CheckableHeading
                                title="Lösung"
                                titleOrder={2}
                                id="lösung-mengenangabe"
                            >
                                <Lösung>
                                    <b>Dose mit Kokosmilch</b>
                                    <BlockMath>
                                        {String.raw`
                                        \begin{aligned}
                                        A &= \pi \cdot r^2 \\
                                            &= \pi \cdot \left(\frac{7{,}3\,\text{cm}}{2}\right)^2 \\
                                            &\approx 41{,}85\,\text{cm}^2 \\
                                        V &= A \cdot h \\
                                            &= 42{,}31\,\text{cm}^2 \cdot 9,5\,\text{cm} \\
                                            &\approx 397{,}61\,\text{cm}^3
                                        \end{aligned}
                                        `}
                                    </BlockMath>
                                    <Space />
                                    <b>Dose mit gehackten Tomaten</b>
                                    <BlockMath>
                                        {String.raw`
                                        \begin{aligned}
                                        A &= \pi \cdot r^2 \\
                                            &= \pi \cdot \left(\frac{7{,}3\,\text{cm}}{2}\right)^2 \\
                                            &\approx 41{,}85\,\text{cm}^2 \\
                                        V &= A \cdot h \\
                                            &= 42{,}31\,\text{cm}^2 \cdot 9,7\,\text{cm} \\
                                            &\approx 405{,}98\,\text{cm}^3
                                        \end{aligned}
                                        `}
                                    </BlockMath>
                                    Gehen wir davon aus, dass wir richtig
                                    gemessen haben, so sind in der Kokosmilch{" "}
                                    <InlineMath>{String.raw`400\,\text{mL} - 397{,}61\,\text{mL} = 2{,}39\,\text{mL}`}</InlineMath>{" "}
                                    zu wenig drin, während uns einem bei den
                                    gehackten Tomaten{" "}
                                    <InlineMath>{String.raw`405{,}98\,\text{mL} - 400\,\text{mL} = 5{,}98\,\text{mL}`}</InlineMath>{" "}
                                    geschenkt werden. Ob das als Anlass genügt,
                                    um die Kokosmilch im Supermarkt
                                    zurückzugeben, muss jedoch jeder selber
                                    entscheiden…
                                </Lösung>
                            </CheckableHeading>
                        </CheckableBlockquote>
                    </CheckableHeading>
                </CheckableHeading>
            </CheckableHeading>
        </div>
    );
}
