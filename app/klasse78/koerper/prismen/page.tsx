import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { CheckableHeading } from "@/components/CheckableHeading";
import { Lösung } from "@/components/Lösung";
import { ImageCaption } from "@/components/ImageCaption";
import { Divider, Flex, List, ListItem } from "@mantine/core";
import { BlockMath } from "@/components/CustomMath";
import { InlineMath } from "react-katex";
import GeoGebraAppletSlider from "@/components/GeoGebraAppletSlider";
import Video from "@/components/Video";
import VieleckInDreiecke from "/videos/Vieleck in Dreiecke.mov";
import thinsp from "@/components/thinsp";
import Image from "@/components/Image";
import { Fragment } from "react/jsx-runtime";
import { Metadata } from "next";
import { Hinweis } from "@/components/Hinweis";

export const metadata: Metadata = {
    title: "Prismen – zuzule",
};

export default function Prismen() {
    return (
        <Fragment>
            <CheckableHeading title="Das Prisma">
                Prismen kennst du vielleicht schon aus dem Physikunterricht. Mit ihnen kann man zeigen, dass weißes Licht tatsächlich aus allen Farben des Regenbogens besteht – schau dir das Beispiel in dem Bild an! Solche Prismen sind aus Glas und meistens dreieckig.
                <Divider my={"md"} />
                Das Wort „Prisma“ bezeichnet aber nicht nur solche Glasgeräte, sondern im allgemeinen alle Körper mit dieser Form. Mathematisch interessiert uns daher weniger die Lichtbrechung, sondern viel mehr, was die Form so besonders macht! Wie könnte man es aus Papier falten? Welches Volumen hat ein Prisma? Und sind Prismen überhaupt immer dreieckig?
                <Image h={400} src="/Prismen/prisma1.webp" width={3499} height={3377} alt="Ein Prisma, an dem weißes Licht in einem Regenbogen gebrochen wird." />
                <CheckableHeading title="Definition" titleOrder={2}>
                    Wir nehmen eine Grundfläche mit beliebiger, aber eckiger Form: Ein sogenanntes <b>n-Eck</b>. Nehmen wir seine Fläche und ziehen sie in den Raum hinein, so entsteht ein Körper. Diesen nennen wir <b>Prisma</b>.
                </CheckableHeading>
                <CheckableBlockquote icon="frage" title="Aufgabe: Prismen im Alltag">
                    Suche in deinem Zimmer Objekte, die ein Prisma sind und bringe sie in den Unterricht mit. Was für eine Form hat die Grundfläche, aus der das Prisma „gezogen“ wird?
                </CheckableBlockquote>
                <CheckableBlockquote icon="aha" title="Aha! 1">
                    Ein Prisma hat also nicht immer eine dreieckige Grundseite, sondern kann jede eckige Form als Grundseite haben! Dementsprechend ist also auch ein <b>Würfel</b> oder ein <b>Quader</b> ein Prisma.
                </CheckableBlockquote>
            </CheckableHeading>

            <CheckableHeading title="Schrägbilder">
                Aus der Orientierungsstufe kennst du bereits das <b>Schrägbild</b> eines Quaders. Das sollte ungefähr so aussehen wie in dem Bild.
                <Image src="/Prismen/Quader.webp" width={901} height={600} alt="Schrägbild eines Quaders auf kariertem Papier." />
                Verdeckte Kanten werden also mit einer gestrichelten Linie angedeutet, während sichtbare Kanten durchgezogen werden.
                <Divider />
                Zeichnen wir mal ein Schrägbild von dem dreieckigen Prisma oben.
                <List type="ordered" withPadding>
                    <ListItem>Zuerst zeichnen wir dazu die dreieckige Grundfläche. Weil sie auf dem „Boden“ liegt, wird sie etwas nach rechts-hinten verzerrt. Die beiden nach hinten zeigenden Kanten werden verdeckt sein, also zeichnen wir sie bereits gestrichelt.</ListItem>
                    <ListItem>Als nächstes ziehen wir die drei Kanten von den Ecken aus nach oben. Auch hier gilt: Die hinterste Kante ist verdeckt und wird deshalb gestrichelt gezeichnet. </ListItem>
                    <ListItem>Im letzten Schritt verbinden wir die Eckpunkte der oberen Fläche. Sie sollte genau die gleiche Form wie die untere Fläche haben! </ListItem>
                </List>
                <Image src="/Prismen/PrismaSchrägbildEntstehung.webp" width={1201} height={600} alt="Es wird gezeigt, wie das Schrägbild eines Prismas Schritt für Schritt gezeichnet wird. Links wird mit einem Dreieck angefangen. Auf dessen Ecken werden senkrechte Striche gezeichnet, die alle die gleiche Höhe haben. Deren Enden werden dann verbunden, wodurch sich ein Dreieck identisch zu dem unteren ergibt." />
                <CheckableBlockquote icon="frage" title="Aufgabe: Schrägbilder">
                    Vervollständige die folgenden Schrägbilder in deinem Heft:
                    <Image src="/Prismen/SchrägbilderVervollständigenAufgabe.webp" width={1800} height={600} alt="4 Schrägbilder, welche vervollständigt werden sollen." />
                    <Hinweis id="hinweis-schrägbilder" titleOrder={3}>
                        Die vertikalen Linien zeigen dir, wie hoch das Prisma sein muss. Die Länge ist in den Beispielen immer gleich!
                    </Hinweis>
                    <Lösung title="Lösung" id="Lösung-Schrägbilder" titleOrder={3}>
                        <Image src="/Prismen/SchrägbilderVervollständigenLösung.webp" width={1800} height={600} alt="Die Lösung, wie die Schrägbilder vervollständigt werden können." />
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>

            <CheckableHeading title="Netze von Prismen">
                Geometrische Körper kann man in Netze zerlegen. Vielleicht hast du schonmal ein Würfelnetz aufgemalt, um daraus einen Spielwürfel zu basteln?
                <Flex>
                    <Image src="/Prismen/NetzWürfel.webp" width={6000} height={4000} alt="Ein Würfelnetz, gezeichnet auf Papier." flex={"1 1 300px"} />
                    <Image src="/Prismen/WürfelPapier.webp" width={6000} height={4000} alt="Das Würfelnetz gefaltet und verklebt, sodass es einen 3D-Würfel ergibt." flex={"1 1 300px"} />
                </Flex>
                Auch Prismen kannst du in ein Netz zerlegen! Zeichne dafür zuerst die Grundfläche des Prismas auf, in dem Beispiel hier wäre das ein Dreieck. Dann ziehst du senkrecht von jeder Ecke Linien hoch. Diese bestimmen, wie hoch dein Körper am Ende wird. Auf eine dieser Seiten musst du dann die Seite zeichnen, die der Grundseite gegenüberliegt – hier also erneut ein Dreieck. Dann heißt es: Ausschneiden, Falten und mit Klebeband zusammenkleben!
                <Flex>
                    <Image src="/Prismen/NetzPrisma.webp" width={6000} height={4000} alt="Das Netz eines dreieckigen Prismas, gezeichnet auf Papier." flex={"1 1 300px"} />
                    <Image src="/Prismen/PrismaPapier.webp" width={6000} height={4000} alt="Das Netz des Prismas gefaltet und verklebt, sodass ein 3D-Prisma ergibt." flex={"1 1 300px"} />
                </Flex>
            </CheckableHeading>

            <CheckableHeading title="Oberflächeninhalt">
                Über das Netz eines Körpers lässt sich gut der Oberflächeninhalt berechnen, da hier nur noch einfache Formen vorkommen. Man unterscheidet hier zwischen <b>Mantelfläche</b> und <b>Grundfläche</b>. Die Grundfläche bezeichnet die Grundform des Prismas, also ob es z.{thinsp}B. drei- oder viereckig ist. Die Mantelfläche ist dann die Fläche, die durch die Höhe des Prismas dazukommt.
                <Image h={500} src="/Prismen/PrismaNetzFläche.webp" width={1800} height={1000} alt="Ein Prisma mit seinem Netz." />
                Der <b>Oberflächeninhalt</b> <InlineMath math="O" /> des Prismas lässt sich dann über die <b>Mantelfläche</b> <InlineMath math="M = \textcolor{#3012B8}{M_1} + \textcolor{#3012B8}{M_2} + \textcolor{#3012B8}{M_3}" /> und die <b>Grundfläche</b> <InlineMath math="\textcolor{#0D8762}{G}" /> berechnen:
                <BlockMath math="O = M + 2\cdot \textcolor{#0D8762}{G} = \textcolor{#3012B8}{M_1} + \textcolor{#3012B8}{M_2} + \textcolor{#3012B8}{M_3} + 2\cdot \textcolor{#0D8762}{G}" />
                Da die Grundfläche zweimal vorkommt, müssen wir sie auch doppelt in der Rechnung berücksichtigen!
                <CheckableBlockquote title="Aufgabe: Oberflächeninhalt" icon="frage">
                    Berechne den Oberflächeninhalt der Prismen.
                    <Image src="/Prismen/PrismaOberflächeninhalt.webp" width={1800} height={600} alt="Ein Prisma mit seinem Netz. Die Mantelfläche ergibt nun ein großes Rechteck." />
                    <Lösung title="Lösung" id="Lösung-Oberflächeninhalt" titleOrder={3}>
                        <List type="ordered" withPadding>
                            <ListItem>
                                Rechteckiges Prisma
                                <BlockMath math="G &= 1 \,\text{cm} \cdot 2 \,\text{cm} \\ &= 2 \,\text{cm}^2 \\ M &= 2 \cdot 3 \,\text{cm} \cdot 1 \,\text{cm} + 2 \cdot 3 \,\text{cm} \cdot 2 \,\text{cm} \\ &= 6 \, \text{cm}^2 + 12 \, \text{cm}^2 \\ &= 18 \, \text{cm}^2 \\ O &= 2 \cdot G + M \\ &= 2 \cdot 2 \,\text{cm}^2 + 18 \, \text{cm}^2 \\ &= 22\, \text{cm}^2" />
                            </ListItem>
                            <ListItem>
                                Dreieckiges Prisma
                                <BlockMath math="G &= \frac{1}{2} 12 \,\text{cm} \cdot \textcolor{#B81E46}{h} \\ &= \frac{1}{2} 12 \,\text{cm}\cdot 8 \,\text{cm}\\ &= 96 \,\text{cm}^2 \\ M &= 2 \cdot 10 \,\text{cm} \cdot 40 \,\text{cm} + 12 \,\text{cm} \cdot 40 \,\text{cm} \\ &= 800 \, \text{cm}^2 + 480 \, \text{cm}^2 \\ &= 1280 \, \text{cm}^2 \\ O &= 2 \cdot G + M \\ &= 2 \cdot 96 \,\text{cm}^2 + 1280 \, \text{cm}^2 \\ &= 1472 \, \text{cm}^2" />
                            </ListItem>
                            <ListItem>
                                Fünfeckiges Prisma
                                <BlockMath math="\textcolor{#B81E46}{A} &= 20 \, \text{cm}^2 \\ M &= \textcolor{#3012B8}{U} \cdot 11 \, \text{cm} \\ &= 15 \, \text{cm} \cdot 11 \, \text{cm} \\ &= 165 \, \text{cm}^2 \\ O &= 2 \cdot \textcolor{#B81E46}{A} + M \\ &= 2 \cdot 20 \,\text{cm}^2 + 165 \, \text{cm}^2 \\ &= 205 \, \text{cm}^2" />
                            </ListItem>
                        </List>
                    </Lösung>
                </CheckableBlockquote>
                <CheckableBlockquote title="Aha! 2" icon="aha">
                    Zerlegt man das Prisma, das wir oben sehen, in ein etwas anderes Netz, können wir etwas praktisches beobachten: Die Mantelfläche eines Prismas bildet ein <b>Rechteck</b>! Die Seitenlängen dieses Rechtecks können wir uns leicht herleiten, wenn wir die Grundfläche kennen. Die einen Seiten entsprechen der <b>Höhe</b> des Prismas, die anderen dem <b>Umfang</b> der Grundfläche. Das macht die Berechnung des Oberflächeninhalts deutlich einfacher!
                    <Image h={500} src="/Prismen/PrismaNetzFlächeRechteck.webp" width={1600} height={1000} alt="Ein Prisma mit seinem Netz. Die Mantelfläche ergibt nun ein großes Rechteck." />
                </CheckableBlockquote>
            </CheckableHeading>
            <CheckableHeading title="Volumenberechnung">
                Neben dem Oberflächeninhalt ist oft auch das Volumen eines Körpers interessant. Das ist bei einem Prisma zum Glück nicht allzu kompliziert, da wir es mathematisch gut beschreiben können.
                <CheckableBlockquote title="Exkurs: Volumenbestimmung durch Verdrängung" icon="exkurs">
                    <Flex>
                        <ImageCaption h={250} src="/Prismen/VolumenWasser/VolumenWasser1.webp" width={6000} height={4000} alt="Ein Stein neben einem leeren Messbecher">
                            Experimentell lässt sich das Volumen beliebiger Körper gut mit etwas Wasser und einem Messbecher testen. Testen wir das Volumen von diesem Stein.
                        </ImageCaption>
                        <ImageCaption h={250} src="/Prismen/VolumenWasser/VolumenWasser2.webp" width={6000} height={4000} alt="Der Füllstand des Messbechers ist sichtbar: 600 mL">
                            Wir messen eine genaue Menge Wasser ab, z.{thinsp}B. <InlineMath math="600\,\text{mL}" />.
                        </ImageCaption>
                        <ImageCaption h={250} src="/Prismen/VolumenWasser/VolumenWasser3.webp" width={6000} height={4000} alt="Der Stein wird in den Messbecher gegeben.">
                            Dann geben wir den Stein in den Messbecher – er muss komplett bedeckt sein!
                        </ImageCaption>
                        <ImageCaption h={250} src="/Prismen/VolumenWasser/VolumenWasser4.webp" width={6000} height={4000} alt="Der Stein ist am Boden des Messbechers.">
                            Der Stein ist dichter als Wasser und sinkt deshalb zu Boden.
                        </ImageCaption>
                        <ImageCaption h={250} src="/Prismen/VolumenWasser/VolumenWasser5.webp" width={6000} height={4000} alt="Das neue Volumen entspricht 720 mL.">
                            Der vom Stein eingenommene Raum steigert die Füllhöhe in unserem Gefäß. Jetzt können wir das neue Volumen ablesen: Ca. <InlineMath math="720\,\text{mL}" />.
                        </ImageCaption>
                    </Flex>
                    Das Volumen des Steins entspricht der Differenz der beiden abgelesenen Wassermengen: <InlineMath math="720\,\text{mL} - 600\,\text{mL} = 120\,\text{mL}" />. Mit der Methode lässt sich natürlich nicht nur das Volumen von Steinen bestimmen, sondern von allen möglichen Körpern und Formen. Voraussetzung ist nur, dass du ein Gefäß hast, bei dem du die Füllmenge ablesen kannst.
                </CheckableBlockquote>
                <CheckableHeading title="Volumen mathematisch hergeleitet" titleOrder={2}>
                    <CheckableHeading title="Volumen eines Quaders" titleOrder={3}>
                        Da ein Quader ein Spezialfall eines Prismas ist, können wir uns daran herleiten, wie wir das Volumen eines allgemeinen Prismas berechnen. Ein Quader hat eine rechteckige Grundfläche. Deren Inhalt können wir mit <InlineMath math="A = a \cdot b" /> berechnen, wobei <InlineMath math="a" /> und <InlineMath math="b" /> die beiden Grundseiten bezeichnen.
                        <Image src="/Prismen/RechteckFläche.webp" width={698} height={450} h={225} alt="Ein Rechteck mit der Fläche A und den Seiten a und b." />
                        Das Volumen eines Quaders ergibt sich nun durch das <b>„hochziehen"</b> dieser Fläche in den Raum. Schau es dir mal an diesem Beispiel hier an, wo ein Quader eine Grundfläche von <InlineMath math="3" /> mal <InlineMath math="2\,\text{cm}" /> und eine Höhe von <InlineMath math="2\,\text{cm}" /> hat.
                        <GeoGebraAppletSlider
                            materialId="x5z6yk9z"
                            appName="3d"
                            coord3d={{
                                xmin: -4,
                                xmax: 6,
                                ymin: 0,
                                ymax: 5,
                                zmin: -3,
                                zmax: 4,
                            }}
                            sliderLabel={"Höhe"}
                            // @ts-ignore
                            sliderWidth={{
                                base: 200,
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
                        Füllen wir den Quader mit Würfeln aus, die ein Volumen von <InlineMath math="1\,\text{cm}^3" /> haben, kann man gut nachvollziehen, dass das Volumen vom gesamten Quader <InlineMath math="12\,\text{cm}^3" /> sein muss. <InlineMath math="6" /> Würfel sind unten, weitere <InlineMath math="6" /> sind oben. Das ergibt sich auch aus der Berechnung von Grundfläche mal Höhe:
                        <BlockMath math="\textcolor{#3012B8}{A} &= 3 \, \text{cm} \cdot 2 \, \text{cm} \\ &= 6\, \text{cm}^2 \\ \textcolor{#0D8762}{V} &=\textcolor{#3012B8}{A} \cdot h \\ &= 6 \, \text{cm}^2 \cdot 2\,\text{cm} \\ &= 12 \, \text{cm}^3" />
                        Können wir diese Formel eventuell auch bei Prismen anwenden? Gilt <InlineMath math="\textcolor{#0D8762}{V} = \textcolor{#3012B8}{A} \cdot h" /> hier immer? Testen wir es mal!
                    </CheckableHeading>
                    <CheckableHeading title="Volumen eines Prismas" titleOrder={3}>
                        Die Grundfläche eines Prismas ist immer eine beliebige, eckige Fläche, also ein <b>n-Eck</b>. Nehmen wir jedoch hier als Beispiel ein dreieckiges Prisma. Seine Grundfläche können wir mit der Formel <InlineMath math="A = \frac{1}{2} \textcolor{#3012B8}{g} \cdot \textcolor{#B81E46}{h}" /> berechnen. Im Bild unten findest du dazu nochmal eine Herleitung.
                        <Image src="/Prismen/DreieckFläche.webp" width={1200} height={600} alt="Ein Dreieck mit der Höhe h und der Grundseite g. Die Höhe zerteilt es in zwei weitere Dreiecke mit den Flächen A1 und A2." />
                        Wir können aus jedem Dreieck also ein Rechteck mit doppelter Fläche machen. Das können wir auch für die Volumenberechnung ausnutzen, denn von einem Quader wissen wir, dass die Volumenformel <InlineMath math="V = A \cdot h" /> ist, also Grundfläche mal Höhe. Daraus können wir uns nun herleiten, dass auch das Volumen eines dreieckigen Prismas mit der Formel <InlineMath math="V = A \cdot h" /> berechenbar ist. Denn mit dem Verdoppeln des Flächeninhaltes verdoppeln wir auch das Volumen. Das Volumen ergibt sich also mit der Formel:
                        <BlockMath math="V_\text{viereckiges Prisma} &= A_\text{Viereck} \cdot \textcolor{#0D8762}{h_\text{Prisma}} \\ \frac{1}{2} V_\text{viereckiges Prisma} &= \frac{1}{2} A_\text{Viereck} \cdot \textcolor{#0D8762}{h_\text{Prisma}} \\ V_\text{dreieckiges Prisma} &= A_\text{Dreieck} \cdot \textcolor{#0D8762}{h_\text{Prisma}}" />
                        <Image src="/Prismen/DreieckigesPrismaVolumen.webp" width={1200} height={600} alt="Die Grundfläche eines dreieckigen Prismas wird verdoppelt, wodurch ein quadratisches Prisma entsteht." />
                        Von dem Volumen eines dreieckigen Prismas können wir uns jedes andere Prisma herleiten, da wir jedes n-Eck in beliebig viele Dreiecke zerteilen können! Schau dir dazu das Video unten an.
                        <Video src={VieleckInDreiecke} />
                        Dadurch können wir also die Formel <InlineMath math="V = A \cdot h" /> festhalten für <b>alle</b> Prismen. Egal, wie das Prisma aussieht, das Volumen entspricht immer der Grundfläche mal der Höhe.
                    </CheckableHeading>
                </CheckableHeading>
                <CheckableBlockquote title="Aufgabe: Volumenübung" titleOrder={2}>
                    Berechne das Volumen der Prismen.
                    <Image src="/Prismen/PrismaVolumen.webp" h={675} width={1500} height={1350} alt="Drei verschiedene Prismen." />
                    <Hinweis id="hinweis-oberflächeninhalt" titleOrder={3}>
                        Denke dran: Berechne zuerst die Grundfläche und ziehe diese dann in die Höhe!
                    </Hinweis>
                    <Lösung title="Lösung" titleOrder={3} id="Lösung-Volumen">
                        <List type="ordered">
                            <ListItem>
                                Bei dem Prisma handelt es sich um einen Quader, daher können wir einfach alle Kantenlängen miteinander multiplizieren, um das Volumen zu bekommen.
                                <BlockMath
                                    math="V &= 4\,\text{cm} \cdot 3\,\text{cm} \cdot 5\,\text{cm} \\
                            &=60\,\text{cm}^3"
                                />
                            </ListItem>
                            <ListItem>
                                Hier ist die Grundfläche etwas komplizierte und besteht aus einem Dreieck und einem Rechteck.
                                <BlockMath
                                    math="G_\text{Rechteck} &= 6\,\text{cm} \cdot 2\,\text{cm} \\ 
                            &= 12\,\text{cm}^2"
                                />
                                <BlockMath
                                    math="G_\text{Dreieck} &= \frac{1}{2} \cdot 6\,\text{cm} \cdot 1{,}5\,\text{cm} \\
                            &= 4{,}5\,\text{cm}^2"
                                />
                                Insgesamt hat das Prisma also eine Grundfläche von <InlineMath math="12\,\text{cm}^2 + 4{,}5\,\text{cm}^2 = 16{,}5\,\text{cm}^2" />. Diese müssen wir im letzten Schritt noch mit der Höhe multiplizieren, um das Volumen zu bekommen:
                                <BlockMath
                                    math="V &= 16{,}5\,\text{cm}^2 \cdot 2{,}5\,\text{cm} \\
                            &= 42{,}25\,\text{cm}^3"
                                />
                            </ListItem>
                            <ListItem>
                                Diese Form ist komplett unbeständig. Da aber der Flächeninhalt mit der Höhe gegeben ist, lässt sich das Volumen dennoch einfach berechnen:
                                <BlockMath
                                    math="\textcolor{#0D8762}{V} &= 14{,}9\,\text{cm}^2 \cdot 7\,\text{cm} \\
                            &= 104{,}3\,\text{cm}^3"
                                />
                            </ListItem>
                        </List>
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>
        </Fragment>
    );
}
