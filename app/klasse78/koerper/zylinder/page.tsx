import { ImageCaption } from "@/components/ImageCaption";
import { CheckableHeading } from "@/components/CheckableHeading";
import {
    Container,
    Divider,
    Flex,
    Group,
    Image,
    List,
    ListItem,
} from "@mantine/core";
import NextImage from "next/image";
import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { Lösung } from "@/components/Lösung";
import { BlockMath, InlineMath } from "react-katex";
import Video from "next-video";
import UmfangZylinder from "/videos/UmfangZylinder.mov";

export default function Zylinder() {
    return (
        <div>
            <CheckableHeading title="Der Zylinder">
                Zylinder sind beliebte Formen in unserem Alltag. Seien es
                Lampenschirme, die Stangen von Straßenlaternen oder
                Konservendosen – überall findet man diese Form. Deswegen ist es
                für uns interessant, diese Form mathematisch beschreiben zu
                können!
                <Flex my={"md"}>
                    <Image
                        h={300}
                        fit="contain"
                        component={NextImage}
                        src="/dosen.jpg"
                        width={6000}
                        height={4000}
                        alt="Verschiedene Dosen"
                    />
                    <Image
                        h={300}
                        fit="contain"
                        component={NextImage}
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
                icon="IconHelpHexagonFilled"
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
                    my={"md"}
                    h={300}
                    fit="contain"
                    component={NextImage}
                    src="/QuaderSchrägbild@2x.png"
                    width={1802}
                    height={1200}
                    alt="Schrägbild eines Quaders auf kariertem Papier."
                />
                Verdeckte Kanten werden also mit einer gestrichelten Linie
                angedeutet, während sichtbare Kanten durchgezogen werden.
                <Divider my={"md"} />
                Versuchen wir uns mal an einem Schrägbild von einem Zylinder.
                <List type="ordered" withPadding>
                    <ListItem>
                        Zuerst zeichnen wir die den Kreis als Grundfläche.
                        Dieser ist wegen der Perspektive etwas zusammengedrückt
                        und nach hinten rechts verzerrt. Zwischen den äußersten
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
                    my={"md"}
                    h={300}
                    fit="contain"
                    component={NextImage}
                    src="/ZylinderSchrägbildEntstehung@2x.png"
                    width={2402}
                    height={1200}
                    alt="Es wird gezeigt, wie das Schrägbild eines Zylinders Schritt für Schritt gezeichnet wird. Links wird mit einem Kreis angefangen. Auf dessen Außenseiten werden zwei senkrechte Striche gezeichnet, die alle die gleiche Höhe haben. Auf deren Enden wird dann ein identischer Kreis zu dem unten gezeichnet."
                />
            </CheckableHeading>
            <CheckableBlockquote
                icon="IconHelpHexagonFilled"
                title="Aufgabe: Schrägbilder"
            >
                Zeichne die Zylinder mit Radius <InlineMath>r</InlineMath> und
                Höhe <InlineMath>h</InlineMath> als Schrägbilder.
                <List type="ordered" withPadding>
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
                            my={"md"}
                            h={500}
                            fit="contain"
                            component={NextImage}
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
                    h={300}
                    fit="contain"
                    src="/Formel1Reifen.jpg"
                    width={846}
                    height={537}
                    rotate="right"
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
                    <Container my={"md"} maw={750}>
                        <Video src={UmfangZylinder} />
                    </Container>
                    Die abgerollte Mantelfläche bildet ein Rechteck mit, das in
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
                        icon="IconArrowBearRight2"
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
                            \pi &= \frac{U}{d} \\
                                &=  \frac{9{,}4\,\text{cm}}{3\,\text{cm}} \\
                                &\approx 3,13 
                            \end{aligned}
                            `}
                        </BlockMath>
                    </CheckableBlockquote>
                    <Image
                        my={"md"}
                        h={300}
                        fit="contain"
                        component={NextImage}
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
                        my={"md"}
                        h={300}
                        fit="contain"
                        component={NextImage}
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
                <CheckableBlockquote
                    icon="IconHelpHexagonFilled"
                    title="Aufgabe: Mantelfläche"
                >
                    Berechne die Mantelfläche der Zylinder, welche Radius{" "}
                    <InlineMath>r</InlineMath> und Höhe{" "}
                    <InlineMath>h</InlineMath> haben.
                    <List type="ordered" withPadding>
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
                    <List type="ordered" withPadding>
                        <ListItem>
                            <InlineMath>{String.raw`U = 4\pi\,\text{cm}\approx 12{,}57\,\text{cm}\quad A = 4\pi\text{cm}^2 \approx 12{,}57\,\text{cm}^2`}</InlineMath>
                        </ListItem>
                        <ListItem>
                            <InlineMath>{String.raw`U = \frac{47}{5}\pi\,\text{cm}\approx 11{,}94\,\text{cm}\quad A = \frac{209}{50}\pi\text{cm}^2 \approx 13{,}13\,\text{cm}^2`}</InlineMath>
                        </ListItem>
                        <ListItem>
                            <InlineMath>{String.raw`U = \frac{19}{5}\pi\,\text{cm}\approx 12{,}57\,\text{cm}\quad A = 4\pi\text{cm}^2 \approx 12{,}57\,\text{cm}^2`}</InlineMath>
                        </ListItem>
                        <ListItem>
                            <InlineMath>{String.raw`U = 10\pi\,\text{cm}\approx 31{,}42\,\text{cm}\quad A = 32\pi\text{cm}^2 \approx 100{,}53\,\text{cm}^2`}</InlineMath>
                        </ListItem>
                        <ListItem>
                            <InlineMath>{String.raw`U = 14\pi\,\text{m}\approx 43{,}93\,\text{m}\quad A = \frac{301}{5}\pi\text{m}^2 \approx 189{,}12\,\text{m}^2`}</InlineMath>
                        </ListItem>
                                                <ListItem>
                            <InlineMath>{String.raw`U = 3{,}8\pi\,\text{cm}\approx 11{,}94\,\text{cm}\quad A = \frac{247}{25}\pi\text{cm}^2 \approx 31{,}04\,\text{cm}^2`}</InlineMath>
                        </ListItem>
                    </List>
                        </Lösung>
                    </CheckableHeading>
                </CheckableBlockquote>
            </CheckableHeading>
        </div>
    );
}
