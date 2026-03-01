import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { CheckableHeading } from "@/components/CheckableHeading";
import { Lösung } from "@/components/Lösung";
import { SuspenseCheckableHeading } from "@/components/SuspenseCheckableHeading";
import { ImageCaption } from "@/components/ImageCaption";
import {
    Center,
    Container,
    Divider,
    Image,
    List,
    ListItem,
    SimpleGrid,
} from "@mantine/core";
import NextImage from "next/image";
import { InlineMath } from "react-katex";
import BlockMath from "@/components/BlockMath";
import GeoGebraAppletSlider from "@/components/GeoGebraAppletSlider";
import Video from "next-video";
import VieleckInDreiecke from "/videos/Vieleck in Dreiecke.mov";

export default function Prismen() {
    return (
        <div>
            <SuspenseCheckableHeading title="Das Prisma">
                Prismen kennst du vielleicht schon aus dem Physikunterricht. Mit
                ihnen kann man zeigen, dass weißes Licht tatsächlich aus allen
                Farben des Regenbogens besteht – schau dir das Beispiel in dem
                Bild an! Solche Prismen sind aus Glas und meistens dreieckig.
                <Divider my={"md"} />
                Das Wort „Prisma“ bezeichnet aber nicht nur solche Glasgeräte,
                sondern im allgemeinen alle Körper mit dieser Form. Mathematisch
                interessiert uns daher weniger die Lichtbrechung, sondern viel
                mehr, was die Form so besonders macht! Wie könnte man es aus
                Papier falten? Welches Volumen hat ein Prisma? Und sind Prismen
                überhaupt immer dreieckig?
            </SuspenseCheckableHeading>
            <Image
                h={{base: "auto", md: 400}}
                src="/prisma1.jpg"
                width={3499}
                height={5249}
                alt="Ein Prisma, an dem weißes Licht in einem Regenbogen gebrochen wird."
            />

            <SuspenseCheckableHeading title="Definition eines Prismas">
                Wir nehmen eine Grundfläche mit beliebiger, aber eckiger Form:
                Ein sogenanntes <b>n-Eck</b>. Nehmen wir seine Fläche und ziehen
                sie in den Raum hinein, so entsteht ein Körper. Diesen nennen
                wir <b>Prisma</b>.
            </SuspenseCheckableHeading>

            <CheckableBlockquote
                icon="frage"
                title="Aufgabe: Prismen im Alltag"
            >
                Suche in deinem Zimmer Objekte, die ein Prisma sind und bringe
                sie in den Unterricht mit. Was für eine Form hat die
                Grundfläche, aus der das Prisma „gezogen“ wird?
            </CheckableBlockquote>

            <CheckableBlockquote icon="aha" title="Aha! 1">
                {" "}
                Ein Prisma hat also nicht immer eine dreieckige Grundseite,
                sondern kann jede eckige Form als Grundseite haben!
                Dementsprechend ist also auch ein <b>Würfel</b> oder ein{" "}
                <b>Quader</b> ein Prisma.{" "}
            </CheckableBlockquote>

            <CheckableHeading title="Schrägbilder">
                Aus der Orientierungsstufe kennst du bereits das{" "}
                <b>Schrägbild</b> eines Quaders. Das sollte ungefähr so aussehen
                wie in dem Bild.
                <Image
                    src="/QuaderSchrägbild@2x.png"
                    width={1802}
                    height={1200}
                    alt="Schrägbild eines Quaders auf kariertem Papier."
                />
                Verdeckte Kanten werden also mit einer gestrichelten Linie
                angedeutet, während sichtbare Kanten durchgezogen werden.
                <Divider />
                Zeichnen wir mal ein Schrägbild von dem dreieckigen Prisma oben.
                <List type="ordered" withPadding>
                    <ListItem>
                        Zuerst zeichnen wir dazu die dreieckige Grundfläche.
                        Weil sie auf dem „Boden“ liegt, wird sie etwas nach
                        rechts-hinten verzerrt. Die beiden nach hinten zeigenden
                        Kanten werden verdeckt sein, also zeichnen wir sie
                        bereits gestrichelt.
                    </ListItem>
                    <ListItem>
                        Als nächstes ziehen wir die drei Kanten von den Ecken
                        aus nach oben. Auch hier gilt: Die hinterste Kante ist
                        verdeckt und wird deshalb gestrichelt gezeichnet.{" "}
                    </ListItem>
                    <ListItem>
                        Im letzten Schritt verbinden wir die Eckpunkte der
                        oberen Fläche. Sie sollte genau die gleiche Form wie die
                        untere Fläche haben!{" "}
                    </ListItem>
                </List>
                <Image
                    src="/PrismaSchrägbildEntstehung@2x.png"
                    width={2402}
                    height={1200}
                    alt="Es wird gezeigt, wie das Schrägbild eines Prismas Schritt für Schritt gezeichnet wird. Links wird mit einem Dreieck angefangen. Auf dessen Ecken werden senkrechte Striche gezeichnet, die alle die gleiche Höhe haben. Deren Enden werden dann verbunden, wodurch sich ein Dreieck identisch zu dem unteren ergibt."
                />
            </CheckableHeading>

            <CheckableBlockquote icon="frage" title="Aufgabe: Schrägbilder">
                Vervollständige die folgenden Schrägbilder in deinem Heft:
                <Image
                    src="/SchrägbilderVervollständigenAufgabe@2x.png"
                    width={3600}
                    height={1200}
                    alt="4 Schrägbilder, welche vervollständigt werden sollen."
                />
                <CheckableHeading
                    title="Lösung"
                    id="Lösung-Schrägbilder"
                    titleOrder={2}
                >
                    <Lösung>
                        <Image
                            src="/SchrägbilderVervollständigenLösung@2x.png"
                            width={3600}
                            height={1200}
                            alt="Die Lösung, wie die Schrägbilder vervollständigt werden können."
                        />
                    </Lösung>
                </CheckableHeading>
            </CheckableBlockquote>

            <CheckableHeading title="Netze von Prismen">
                Geometrische Körper kann man in Netze zerlegen. Vielleicht hast
                du schonmal ein Würfelnetz aufgemalt, um daraus einen
                Spielwürfel zu basteln?
                <SimpleGrid cols={2} my={"md"}>
                    <Image
                        src="/NetzWürfel.jpg"
                        width={6000}
                        height={4000}
                        alt="Ein Würfelnetz, gezeichnet auf Papier."
                    />
                    <Image
                        src="/WürfelPapier.jpg"
                        width={6000}
                        height={4000}
                        alt="Das Würfelnetz gefaltet und verklebt, sodass es einen 3D-Würfel ergibt."
                    />
                </SimpleGrid>
                Auch Prismen kannst du in ein Netz zerlegen! Zeichne dafür
                zuerst die Grundfläche des Prismas auf, in dem Beispiel hier
                wäre das ein Dreieck. Dann ziehst du senkrecht von jeder Ecke
                Linien hoch. Diese bestimmen, wie hoch dein Körper am Ende wird.
                Auf eine dieser Seiten musst du dann die Seite zeichnen, die der
                Grundseite gegenüberliegt – hier also erneut ein Dreieck. Dann
                heißt es: Ausschneiden, Falten und mit Klebeband zusammenkleben!
                <SimpleGrid cols={2} my={"md"}>
                    <Image
                        src="/NetzPrisma.jpg"
                        width={6000}
                        height={4000}
                        alt="Das Netz eines dreieckigen Prismas, gezeichnet auf Papier."
                    />
                    <Image
                        src="/PrismaPapier.jpg"
                        width={6000}
                        height={4000}
                        alt="Das Netz des Prismas gefaltet und verklebt, sodass ein 3D-Prisma ergibt."
                    />
                </SimpleGrid>
            </CheckableHeading>
            <CheckableHeading title="Oberflächeninhalt von Prismen">
                Über das Netz eines Körpers lässt sich gut der Oberflächeninhalt
                berechnen, da hier nur noch einfache Formen vorkommen. Man
                Unterscheidet hier zwischen <b>Mantelfläche</b> und{" "}
                <b>Grundfläche</b>. Die Grundfläche bezeichnet die Grundform des
                Prismas, also ob es z.B. drei- oder viereckig ist. Die
                Mantelfläche ist dann die Fläche, die durch die Höhe des Prismas
                dazukommt.
                <Image
                    h={{base: "auto", md: 400}}
                    src="/PrismaNetzFläche@2x.png"
                    width={3200}
                    height={2000}
                    alt="Ein Prisma mit seinem Netz."
                />
                Der <b>Oberflächeninhalt</b> <InlineMath>O</InlineMath> des
                Prismas lässt sich dann über die <b>Mantelfläche</b>{" "}
                <InlineMath>M = M_1 + M_2 + M_3</InlineMath> und die{" "}
                <b>Grundfläche</b> <InlineMath>G</InlineMath> berechnen:
                <BlockMath>{String.raw`
                    O = \textcolor{red}{M} + 2\cdot \textcolor{blue}{G} =  \textcolor{red}{M_1} +  \textcolor{red}{M_2} +  \textcolor{red}{M_3} + 2\cdot  \textcolor{blue}{G}
                `}</BlockMath>
                Da die Grundfläche zweimal vorkommt, müssen wir sie auch doppelt
                in der Rechnung berücksichtigen!
            </CheckableHeading>
            <CheckableBlockquote
                title="Aufgabe: Oberflächeninhalt"
                icon="frage"
            >
                Berechne den Oberflächeninhalt der Prismen:
                <Image
                    src="/PrismaOberflächeninhalt@2x.png"
                    width={3602}
                    height={1200}
                    alt="Ein Prisma mit seinem Netz. Die Mantelfläche ergibt nun ein großes Rechteck."
                />
                <CheckableHeading
                    title="Lösung"
                    id="Lösung-Oberflächeninhalt"
                    titleOrder={2}
                >
                    <Lösung>
                        <List type="ordered" withPadding>
                            <ListItem>
                                {" "}
                                Rechteckiges Prisma
                                <BlockMath>{String.raw`
                                    \begin{aligned}G &= 1 \,\text{cm} \cdot 2 \,\text{cm} \\ 
                                    &= 2 \,\text{cm}^2 \\ 
                                    M &= 2 \cdot 3 \,\text{cm} \cdot 1 \,\text{cm} + 2 \cdot 3 \,\text{cm} \cdot 2 \,\text{cm} \\ 
                                    &=  6 \, \text{cm}^2 + 12 \, \text{cm}^2 \\ 
                                    &= 18 \, \text{cm}^2  \\ 
                                    O &= 2 \cdot G + M \\ 
                                    &= 2 \cdot 2 \,\text{cm}^2 + 18 \, \text{cm}^2  \\ 
                                    &= 22\, \text{cm}^2 \end{aligned}
                                `}</BlockMath>
                            </ListItem>
                            <ListItem>
                                Dreieckiges Prisma
                                <BlockMath>{String.raw`
                                    \begin{aligned}G &= \frac{1}{2} 12 \,\text{cm} \cdot h \\ 
                                    &= \frac{1}{2} 12 \,\text{cm}\cdot 8 \,\text{cm}\\ 
                                    &= 96 \,\text{cm}^2 \\
                                    M &= 2 \cdot 10 \,\text{cm} \cdot 40 \,\text{cm} +  12 \,\text{cm} \cdot 40 \,\text{cm} \\ 
                                    &=  800 \, \text{cm}^2 +  480 \, \text{cm}^2 \\ 
                                    &= 1280 \, \text{cm}^2  \\ 
                                    O &= 2 \cdot G + M \\ 
                                    &= 2 \cdot 96 \,\text{cm}^2 + 1280 \, \text{cm}^2  \\ 
                                    &= 1472 \, \text{cm}^2 \end{aligned}
                                `}</BlockMath>
                            </ListItem>
                            <ListItem>
                                Fünfeckiges Prisma
                                <BlockMath>{String.raw`
                                    \begin{aligned} A &= 20 \, \text{cm}^2 \\
                                    M &= U \cdot 11 \, \text{cm} \\
                                    &= 15 \, \text{cm} \cdot 11 \, \text{cm} \\
                                    &= 165 \, \text{cm}^2 \\
                                    O &= 2 \cdot A + M \\ 
                                        &= 2 \cdot 20 \,\text{cm}^2 + 165 \, \text{cm}^2  \\ 
                                        &= 205 \, \text{cm}^2 
                                    \end{aligned}
                                `}</BlockMath>
                            </ListItem>
                        </List>
                    </Lösung>
                </CheckableHeading>
            </CheckableBlockquote>
            <CheckableBlockquote title="Aha! 2" icon="aha">
                Zerlegt man das Prisma, das wir oben sehen, in ein etwas anderes
                Netz, können wir etwas praktisches beobachten: Die Mantelfläche
                eines Prismas bildet ein <b>Rechteck</b>! Die Seitenlängen
                dieses Rechtecks können wir uns leicht herleiten, wenn wir die
                Grundfläche kennen. Die einen Seiten entsprechen der <b>Höhe</b>{" "}
                des Prismas, die anderen dem <b>Umfang</b> der Grundfläche. Das
                macht die Berechnung des Oberflächeninhalts deutlich einfacher!
                <Image
                    h={{base: "auto", md: 400}}
                    src="/PrismaNetzFlächeRechteck@2x.png"
                    width={3200}
                    height={2000}
                    alt="Ein Prisma mit seinem Netz. Die Mantelfläche ergibt nun ein großes Rechteck."
                />
            </CheckableBlockquote>
            <CheckableHeading title="Volumenberechnung">
                Neben dem Oberflächeninhalt ist oft auch das Volumen eines
                Körpers interessant. Das ist bei einem Prisma zum Glück nicht
                allzu kompliziert, da wir es mathematisch gut beschreiben
                können.
                <CheckableBlockquote
                    title="Exkurs: Volumenbestimmung durch Verdrängung"
                    icon="exkurs"
                >
                    <SimpleGrid cols={2} my={"md"}>
                        <ImageCaption
                            h={{base: "auto", md: 250}}
                            src="/VolumenWasser/VolumenWasser1.jpg"
                            width={6000}
                            height={4000}
                            alt="Ein Stein neben einem leeren Messbecher"
                        >
                            Experimentell lässt sich das Volumen beliebiger
                            Körper gut mit etwas Wasser und einem Messbecher
                            testen. Testen wir das Volumen von diesem Stein.
                        </ImageCaption>
                        <ImageCaption
                            h={{base: "auto", md: 250}}
                            src="/VolumenWasser/VolumenWasser2.jpg"
                            width={6000}
                            height={4000}
                            alt="Der Füllstand des Messbechers ist sichtbar: 600 mL"
                        >
                            Wir messen eine genaue Menge Wasser ab, z.B.
                            600&thinsp;mL.
                        </ImageCaption>
                        <ImageCaption
                            h={{base: "auto", md: 250}}
                            src="/VolumenWasser/VolumenWasser3.jpg"
                            width={6000}
                            height={4000}
                            alt="Der Stein wird in den Messbecher gegeben."
                        >
                            Dann geben wir den Stein in den Messbecher – er muss
                            komplett bedeckt sein!
                        </ImageCaption>
                        <ImageCaption
                            h={{base: "auto", md: 250}}
                            src="/VolumenWasser/VolumenWasser4.jpg"
                            width={6000}
                            height={4000}
                            alt="Der Stein ist am Boden des Messbechers."
                        >
                            Der Stein ist dichter als Wasser und sinkt deshalb
                            zu Boden.
                        </ImageCaption>
                        <ImageCaption
                            h={{base: "auto", md: 250}}
                            src="/VolumenWasser/VolumenWasser5.jpg"
                            width={6000}
                            height={4000}
                            alt="Das neue Volumen entspricht 720 mL."
                        >
                            Der vom Stein eingenommene Raum steigert die
                            Füllhöhe in unserem Gefäß. Jetzt können wir das neue
                            Volumen ablesen: Ca. 720&thinsp;mL.
                        </ImageCaption>
                    </SimpleGrid>
                    Das Volumen des Steins entspricht der Differenz der beiden
                    abgelesenen Wassermengen:{" "}
                    <InlineMath>
                        {
                            "720\\,\\text{mL} - 600\\,\\text{mL} = 120\\,\\text{mL}"
                        }
                    </InlineMath>
                    . Mit der Methode lässt sich natürlich nicht nur das Volumen
                    von Steinen bestimmen, sondern von allen möglichen Körpern
                    und Formen. Voraussetzung ist nur, dass du ein Gefäß hast,
                    bei dem du die Füllmenge ablesen kannst.
                </CheckableBlockquote>
                <CheckableHeading
                    title="Volumen mathematisch hergeleitet"
                    titleOrder={2}
                >
                    <CheckableHeading
                        title="Volumen eines Quaders"
                        titleOrder={3}
                    >
                        Da ein Quader ein Spezialfall eines Prismas ist, können
                        wir uns daran herleiten, wie wir das Volumen eines
                        allgemeinen Prismas berechnen. Ein Quader hat eine
                        rechteckige Grundfläche. Deren Inhalt können wir mit{" "}
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
                        Das Volumen eines Quaders ergibt sich nun durch das{" "}
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
                            sliderWidth={400}
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
                        Können wir diese Formel eventuell auch bei Prismen
                        anwenden? Gilt <InlineMath>V = A \cdot h</InlineMath>{" "}
                        hier immer? Testen wir es mal!
                    </CheckableHeading>
                    <CheckableHeading
                        title="Volumen eines Prismas"
                        titleOrder={3}
                    >
                        Die Grundfläche eines Prismas ist immer eine beliebige,
                        eckige Fläche, also ein <b>n-Eck</b>. Nehmen wir jedoch
                        hier als Beispiel ein dreieckiges Prisma. Seine
                        Grundfläche können wir mit der Formel{" "}
                        <InlineMath>{String.raw`A = \frac{1}{2} \textcolor{blue}{g} \cdot \textcolor{red}{h}`}</InlineMath>{" "}
                        berechnen. Im Bild unten findest du dazu nochmal eine
                        Herleitung.
                        <Image
                            src="/DreieckFläche@2x.png"
                            width={2400}
                            height={1200}
                            alt="Ein Dreieck mit der Höhe h und der Grundseite g. Die Höhe zerteilt es in zwei weitere Dreiecke mit den Flächen A1 und A2."
                        />
                        Wir können aus jedem Dreieck also ein Rechteck mit
                        doppelter Fläche machen. Das können wir auch für die
                        Volumenberechnung ausnutzen, denn von einem Quader
                        wissen wir, dass die Volumenformel{" "}
                        <InlineMath>V = A \cdot h</InlineMath> ist, also
                        Grundfläche mal Höhe. Daraus können wir uns nun
                        herleiten, dass auch das Volumen eines dreieckigen
                        Prismas mit der Formel{" "}
                        <InlineMath> V = A \cdot h</InlineMath> berechenbar ist.
                        Denn mit dem Verdoppeln des Flächeninhaltes verdoppeln
                        wir auch das Volumen. Das Volumen ergibt sich also mit
                        der Formel:
                        <BlockMath>{String.raw`
                            \begin{aligned}
                            V_\text{viereckiges Prisma} &= A_\text{Viereck} \cdot \textcolor{green}{h_\text{Prisma}} \\
                            \frac{1}{2} V_\text{viereckiges Prisma} &= \frac{1}{2} A_\text{Viereck} \cdot \textcolor{green}{h_\text{Prisma}} \\
                            V_\text{dreieckiges Prisma} &= A_\text{Dreieck} \cdot \textcolor{green}{h_\text{Prisma}}
                            \end{aligned}
                        `}</BlockMath>
                        <Image
                            src="/DreieckigesPrismaVolumen@2x.png"
                            width={2400}
                            height={1200}
                            alt="Die Grundfläche eines dreieckigen Prismas wird verdoppelt, wodurch ein quadratisches Prisma entsteht."
                        />
                        Von dem Volumen eines dreieckigen Prismas können wir uns
                        jedes andere Prisma herleiten, da wir jedes n-Eck in
                        beliebig viele Dreiecke zerteilen können! Schau dir dazu
                        das Video unten an.
                        <Container my={"md"} maw={750}>
                            <Video src={VieleckInDreiecke} />
                        </Container>
                        Dadurch können wir also die Formel{" "}
                        <InlineMath>V = A \cdot h</InlineMath> festhalten für{" "}
                        <b>alle</b> Prismen. Egal, wie das Prisma aussieht, es
                        das Volumen entspricht immer der Grundfläche mal der
                        Höhe.
                    </CheckableHeading>
                </CheckableHeading>
            </CheckableHeading>
        </div>
    );
}
