import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { CheckableHeading } from "@/components/CheckableHeading";
import { Lösung } from "@/components/Lösung";
import { SuspenseCheckableHeading } from "@/components/SuspenseCheckableHeading";
import {
    Blockquote,
    Divider,
    Group,
    Image,
    List,
    ListItem,
    SimpleGrid,
    Text,
    Title,
} from "@mantine/core";
import NextImage from "next/image";
import { InlineMath, BlockMath } from "react-katex";

export default function Prismen() {
    const LtexSchrägbildera = `
        \\begin{aligned}G &= 1 \\,\\text{cm} \\cdot 2 \\,\\text{cm} \\\\ 
        &= 2 \\,\\text{cm}^2 \\\\ 
        M &= 2 \\cdot 3 \\,\\text{cm} \\cdot 1 \\,\\text{cm} + 2 \\cdot 3 \\,\\text{cm} \\cdot 2 \\,\\text{cm} \\\\ 
        &=  6 \\, \\text{cm}^2 + 12 \\, \\text{cm}^2 \\\\ 
        &= 18 \\, \\text{cm}^2  \\\\ 
        O &= 2 \\cdot G + M \\\\ 
        &= 2 \\cdot 2 \\,\\text{cm}^2 + 18 \\, \\text{cm}^2  \\\\ 
        &= 22\\, \\text{cm}^2 \\end{aligned}
    `;
    const LtexSchrägbilderb = `
        \\begin{aligned}G &= \\frac{1}{2} 12 \\,\\text{cm} \\cdot h \\\\ 
        &= \\frac{1}{2} 12 \\,\\text{cm}\\cdot 8 \\,\\text{cm}\\\\ 
        &= 96 \\,\\text{cm}^2 \\\\
        M &= 2 \\cdot 10 \\,\\text{cm} \\cdot 40 \\,\\text{cm} +  12 \\,\\text{cm} \\cdot 40 \\,\\text{cm} \\\\ 
        &=  800 \\, \\text{cm}^2 +  480 \\, \\text{cm}^2 \\\\ 
        &= 1280 \\, \\text{cm}^2  \\\\ 
        O &= 2 \\cdot G + M \\\\ 
        &= 2 \\cdot 96 \\,\\text{cm}^2 + 1280 \\, \\text{cm}^2  \\\\ 
        &= 1472 \\, \\text{cm}^2 \\end{aligned}
    `;
    const LtexSchrägbilderc = `
    \\begin{aligned} A &= 20 \\, \\text{cm}^2 \\\\
    M &= U \\cdot 11 \\, \\text{cm} \\\\
    &= 15 \\, \\text{cm} \\cdot 11 \\, \\text{cm} \\\\
    &= 165 \\, \\text{cm}^2 \\\\
    O &= 2 \\cdot A + M \\\\ 
        &= 2 \\cdot 20 \\,\\text{cm}^2 + 165 \\, \\text{cm}^2  \\\\ 
        &= 205 \\, \\text{cm}^2 
    \\end{aligned}
    `;
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
                h={400}
                fit="contain"
                component={NextImage}
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
                icon="IconHelpHexagonFilled"
                title="Aufgabe: Prismen im Alltag"
            >
                Suche in deinem Zimmer Objekte, die ein Prisma sind und bringe
                sie in den Unterricht mit. Was für eine Form hat die
                Grundfläche, aus der das Prisma „gezogen“ wird?
            </CheckableBlockquote>

            <CheckableBlockquote icon="IconInfoHexagonFilled" title="Aha! 1">
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
                Zeichnen wir mal ein Schrägbild von dem dreieckigen Prisma oben.
                <List type="ordered">
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
                    h={300}
                    fit="contain"
                    component={NextImage}
                    src="/PrismaSchrägbildEntstehung@2x.png"
                    width={2402}
                    height={1200}
                    alt="Es wird gezeigt, wie das Schrägbild eines Prismas Schritt für Schritt gezeichnet wird. Links wird mit einem Dreieck angefangen. Auf dessen Ecken werden senkrechte Striche gezeichnet, die alle die gleiche Höhe haben. Deren Enden werden dann verbunden, wodurch sich ein Dreieck identisch zu dem unteren ergibt."
                />
            </CheckableHeading>

            <CheckableBlockquote
                icon="IconHelpHexagonFilled"
                title="Aufgabe: Schrägbilder"
            >
                Vervollständige die folgenden Schrägbilder in deinem Heft:
                <Image
                    h={300}
                    fit="contain"
                    component={NextImage}
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
                            h={300}
                            fit="contain"
                            component={NextImage}
                            src="/SchrägbilderVervollständigenLösung@2x.png"
                            width={3600}
                            height={1200}
                            alt="Die Lösung, wie die Schräbilder vervollständigt werden können."
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
                        h={300}
                        fit="contain"
                        component={NextImage}
                        src="/NetzWürfel.jpg"
                        width={6000}
                        height={4000}
                        alt="Ein Würfelnetz, gezeichnet auf Papier."
                    />
                    <Image
                        h={300}
                        fit="contain"
                        component={NextImage}
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
                        h={300}
                        fit="contain"
                        component={NextImage}
                        src="/NetzPrisma.jpg"
                        width={6000}
                        height={4000}
                        alt="Das Netz eines dreieckigen Prismas, gezeichnet auf Papier."
                    />
                    <Image
                        h={300}
                        fit="contain"
                        component={NextImage}
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
                Unterscheided hier zwischen <b>Mantelfläche</b> und{" "}
                <b>Grundfläche</b>. Die Grundfläche bezeichnet die Grundform des
                Prismas, also ob es z.B. drei- oder viereckig ist. Die
                Mantelfläche ist dann die Fläche, die durch die Höhe des Prismas
                dazukommt.
                <Image
                    h={400}
                    fit="contain"
                    component={NextImage}
                    src="/PrismaNetzFläche@2x.png"
                    width={3200}
                    height={2000}
                    alt="Ein Prisma mit seinem Netz."
                />
                Der <b>Oberflächeinhalt</b> <InlineMath>O</InlineMath> des
                Prismas lässt sich dann über die <b>Mantelfläche</b>{" "}
                <InlineMath>M = M_1 + M_2 + M_3</InlineMath> und die{" "}
                <b>Grundfläche</b> <InlineMath>G</InlineMath> berechnen:{" "}
                <BlockMath>
                    {" "}
                    O = M + 2\cdot G = M_1 + M_2 + M_3 + 2\cdot G
                </BlockMath>
                Da die Grundfläche zweimal vorkommt, müssen wir sie auch doppelt
                in der Rechnung berücksichtigen!
            </CheckableHeading>
            <CheckableBlockquote
                title="Aufgabe: Oberflächeninhalt"
                icon="IconHelpHexagonFilled"
            >
                Berechne den Oberflächeninhalt der Prismen:
                <Image
                    h={300}
                    fit="contain"
                    component={NextImage}
                    src="/PrismaOberflächeninhalt@2x.png"
                    width={3602}
                    height={1200}
                    alt="Ein Prisma mit seinem Netz. Die Mantelfläche ergibt nun ein großes Rechteck."
                />
                <CheckableHeading title="Lösung" id="Lösung-Oberflächeninhalt">
                    <Lösung>
                        <List type="ordered">
                            <ListItem>
                                {" "}
                                Rechteckiges Prisma
                                <BlockMath>{LtexSchrägbildera}</BlockMath>
                            </ListItem>
                            <ListItem>Dreieckiges Prisma
                            <BlockMath>{LtexSchrägbilderb}</BlockMath></ListItem>
                            <ListItem>
                                Fünfeckiges Prisma
                                <BlockMath>{LtexSchrägbilderc}</BlockMath>
                            </ListItem>
                        </List>
                    </Lösung>
                </CheckableHeading>
            </CheckableBlockquote>
            <CheckableBlockquote title="Aha! 2" icon="IconInfoHexagonFilled">
                Zerlegt man das Prisma, das wir oben sehen, in ein etwas anderes
                Netz, können wir etwas praktisches beobachten: Die Mantelfläche
                eines Prismas bildet ein <b>Rechteck</b>! Die Seitenlängen
                dieses Rechtecks können wir uns leicht herleiten, wenn wir die
                Grundfläche kennen. Die einen Seiten entsprechen der <b>Höhe</b>{" "}
                des Prismas, die anderen dem <b>Umfang</b> der Grundfläche. Das
                macht die Berechnung des Oberflächeninhalts deutlich einfacher!
                <Image
                    h={400}
                    fit="contain"
                    component={NextImage}
                    src="/PrismaNetzFlächeRechteck@2x.png"
                    width={3200}
                    height={2000}
                    alt="Ein Prisma mit seinem Netz. Die Mantelfläche ergibt nun ein großes Rechteck."
                />
            </CheckableBlockquote>
        </div>
    );
}
