import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { CheckableHeading } from "@/components/CheckableHeading";
import { ImageCaption } from "@/components/ImageCaption";
import { Lösung } from "@/components/Lösung";
import MBlockMath from "@/components/MBlockMath";
import { SuspenseCheckableHeading } from "@/components/SuspenseCheckableHeading";
import {
    Divider,
    Flex,
    List,
    ListItem,
    Mark,
    SimpleGrid,
    Space,
} from "@mantine/core";
import {BetterInlineMath as InlineMath, BlockMathScroll as BlockMath} from "@/components/CustomMath";
import thinsp from "@/components/thinsp";
import Image from "@/components/Image";
import { Fragment } from "react/jsx-runtime";

export default function Pyramiden() {
    return (
        <Fragment>
            <SuspenseCheckableHeading title="Die Pyramide">
                Pyramiden haben auf Menschen schon lange eine Anziehungskraft –
                so haben schon die Maya und Ägypter Pyramiden gebaut, die
                teilweise noch bis heute stehen. Deswegen ist es nicht
                verwunderlich, dass sich auch Mathematiker für Pyramiden
                interessieren. Wir schauen uns hier die Grundlagen an und gehen
                auf die Eigenschaften von Pyramiden ein: Wie „baut“ man
                Pyramiden aus Papier? Wie bestimmt man deren Oberflächeninhalt
                oder Volumen?
                <Flex>
                    <Image
                        src="/Pyramiden/pyramideägypten.jpg"
                        width={3888}
                        height={2202}
                        alt="Mehrere ägyptische Pyramiden"
                    />
                    <Image
                        src="/Pyramiden/pyramidemaya.jpg"
                        width={6000}
                        height={3927}
                        alt="Eine Pyramide der Maya"
                    />
                </Flex>
            </SuspenseCheckableHeading>
            <CheckableHeading title="Definition">
                Eine Pyramide hat eine eckige Grundfläche, z.B. ein Dreieck oder
                ein Quadrat. Allgemein nennt man eckige Flächen auch{" "}
                <b>n-Ecke</b>. Den Mittelpunkt dieser Fläche ziehen wir nach
                oben, sodass wir die Pyramidenspitze bekommen. Verbinden wir nun
                alle Eckpunkte unserer Grundfläche mit der Spitze, so erhalten
                wir eine <b>gerade Pyramide</b>!
            </CheckableHeading>
            <CheckableBlockquote icon="frage" title="Alles Pyramiden?">
                Welche der folgenden Abbildungen sind Pyramiden und welche
                nicht? Wenn ja, gib die Maße und Form der Grundfläche sowie die
                Höhe in cm an (2 Kästchen = 1{thinsp}cm).
                <Image
                    src="/Pyramiden/IstPyramide.png"
                    width={1000}
                    height={1000}
                    alt="Eine Pyramide der Maya"
                    h={{ base: "auto", md: 500 }}
                />
                <Lösung title="Lösung" id="Lösung-AllesPyramide" titleOrder={3}>
                    <List type="ordered">
                        <ListItem>
                            Ja, eine sechseckige, gerade Pyramide. Durchmesser =
                            3{thinsp}cm, Höhe = 3{thinsp}cm.
                        </ListItem>
                        <ListItem>
                            Nein, es hat eine runde Grundfläche, daher ist es
                            ein Zylinder.
                        </ListItem>
                        <ListItem>
                            Ja, eine quadratische, gerade Pyramide. Kantenlänge
                            = 2{thinsp}cm, Höhe = 2,5{thinsp}cm.{" "}
                        </ListItem>
                        <ListItem>
                            Nein, das ist keine normale geometrische Form.
                        </ListItem>
                        <ListItem>
                            Ja, das ist eine rechteckige, schiefe Pyramide.
                            Kantenlängen = 2 und 3{thinsp}cm, Höhe =
                            4{thinsp}cm{" "}
                        </ListItem>
                    </List>
                </Lösung>
            </CheckableBlockquote>
            <CheckableHeading title="Volumenberechnung">
                Das Volumen von einer quadratischen Pyramide lässt sich sowohl
                experimentell als auch mathematisch gut herleiten. Fangen wir
                erstmal experimentell an!
                <CheckableHeading titleOrder={2} title="Experimentell">
                    Für das Experiment falten wir eine quadratische Pyramide und
                    füllen sie mit Zucker. Dadurch können wir wiegen, wie viel
                    Zucker sie enthält. Ihre Höhe soll dabei ihrer Kantenlänge
                    entsprechen. Dafür müssen wir zuerst das Netz aufzeichnen.
                    Als Seitenlänge wählen wir z.B. 5{thinsp}cm.
                    <Image
                        src="/Pyramiden/VolumenPyramide/PyramideNetz.jpg"
                        width={1200}
                        height={600}
                        alt="Das Netz einer Pyramide auf einem Din A4 Blatt"
                    />
                    Das Netz einer quadratischen Pyramide sieht aus wie ein
                    Quadrat mit einem Dreieck auf jeder Seite. Die Höhe der
                    Dreiecke ist nicht gleich der Höhe der Pyramide! Überlege
                    dir, wie man sie berechnen kann!
                    <CheckableBlockquote
                        title="Höhe der Dreieckswände"
                        titleOrder={3}
                        icon="aha"
                    >
                        <Lösung>
                            Du kannst den Satz des Pythagoras verwenden, um die
                            Pyramidenhöhe zu bestimmen. In dem Beispiel hier ist
                            es eine quadratische Pyramide mit Seitenlänge 3 und
                            Höhe 3. Wenn du die <Mark c={"desblue"}>Höhe</Mark>{" "}
                            in einer der Wände einzeichnest siehst du, dass sie
                            zusammen mit der{" "}
                            <Mark c={"green"}>Pyramidenhöhe</Mark> und der{" "}
                            <Mark c={"desred"}>halben Seitenlänge</Mark> ein
                            rechtwinkliges Dreieck bildet. Wir können also den{" "}
                            <b>Satz des Pythagoras</b> verwenden, um die Länge
                            von{" "}
                            <Mark c={"desblue"}>
                                h<sub>Dreieck</sub>
                            </Mark>{" "}
                            zu berechnen.
                            <MBlockMath
                                desktop="\textcolor{#3312B8}{h_\text{Dreieck}} = \sqrt{1{,}5^2 + 3^2} = \sqrt{11{,}25} \approx 3,35"
                                mobile="\textcolor{#3312B8}{h_\text{Dreieck}} &= \sqrt{1{,}5^2 + 3^2} \\ &= \sqrt{11{,}25} \\ &\approx 3,35"
                            />
                            Damit unsere Pyramide also eine Höhe von 3{thinsp}cm
                            hat, muss die Höhe einer Dreieckswand ca.
                            3,35{thinsp}cm betragen.
                            <Image
                                src="/Pyramiden/VolumenPyramide/PyramideHöhe.png"
                                width={6000}
                                height={4000}
                                alt="Das Netz einer Pyramide auf einem Din A4 Blatt"
                            />
                        </Lösung>
                        <Space my="xs" />
                    </CheckableBlockquote>
                    <SimpleGrid cols={2} my={"md"}>
                        <ImageCaption
                            h={{ base: "auto", md: 250 }}
                            src="/Pyramiden/VolumenPyramide/PyramideNetzausgeschnitten.jpg"
                            width={6000}
                            height={4000}
                            alt="Das ausgeschnittene Netz mit einem Loch in der Mitte"
                        >
                            Das Netz schneidest du nun aus und schneidest ein
                            Loch in Mitte, sodass wir später Zucker hineingießen
                            können
                        </ImageCaption>
                        <ImageCaption
                            h={{ base: "auto", md: 250 }}
                            src="/Pyramiden/VolumenPyramide/PyramidePapier.jpg"
                            width={6000}
                            height={4000}
                            alt="Die zusammengeklebte Pyramide"
                        >
                            Die Pyramide klebst du vorsichtig mit Klebeband
                            zusammen, sodass alle Kanten dicht sind!
                        </ImageCaption>
                        <ImageCaption
                            h={{ base: "auto", md: 250 }}
                            src="/Pyramiden/VolumenPyramide/PyramideWaageZubehör.jpg"
                            width={6000}
                            height={4000}
                            alt="Die Pyramide kopfüber in einem Glas auf einer Waage. Daneben ein Papiertrichter und ein Glas mit Zucker"
                        >
                            Die Pyramide stellst du nun kopfüber in einem Glas
                            auf eine Waage und tarierst sie auf 0{thinsp}g. Zum
                            Einfüllen ist ein Trichter praktisch – wenn du
                            keinen hast, kannst du dir einen aus Papier rollen.
                        </ImageCaption>
                        <ImageCaption
                            h={{ base: "auto", md: 250 }}
                            src="/Pyramiden/VolumenPyramide/PyramideWaageVoll.jpg"
                            width={6000}
                            height={4000}
                            alt="Die nun gefüllte Pyramide im Glas auf der Waage. Die Waage zeigt 43 Gram an"
                        >
                            Die Waage zeigt an, dass unsere Pyramide ca.
                            45{thinsp}g Zucker enthält.
                        </ImageCaption>
                    </SimpleGrid>
                    Um nun von dem Gewicht auf das Volumen zu kommen, benötigen
                    wir die Dichte des Zuckers. Für Glukose, also
                    Haushaltszucker, beträgt sie{" "}
                    <InlineMath math="1{,}56\,\tfrac{\text{g}}{\text{mL}}"/>
                    . Probiere selber, daraus das Volumen zu bekommen!
                    <Lösung
                        title="Lösung: Volumen übers Gewicht"
                        titleOrder={3}
                    >
                        Die Dichte hat als Einheit{" "}
                        <InlineMath math="\frac{\text{Gewicht}}{\text{Volumen}}"/>
                        , bzw. mathematisch:{" "}
                        <InlineMath math="\rho = \frac{m}{V}"/>
                        , wobei <InlineMath math="\rho"/> die Dichte ist,{" "}
                        <InlineMath math="m"/> die Masse und{" "}
                        <InlineMath math="V"/> das Volumen. Wir kennen
                        Dichte und Masse, also stellen wir nach{" "}
                        <InlineMath math="V"/> um:
                        <MBlockMath
                            mobile="\rho &= \frac{m}{V} \\ &\Downarrow \scriptsize{\cdot V} \\ \rho \cdot V &= m \\ &\Downarrow \scriptsize{: \rho} \\ V &= \frac{m}{\rho}"
                            desktop="\rho &= \frac{m}{V} &&\lvert \cdot V \\ \rho \cdot V &= m &&\lvert \: \rho \\ V &= \frac{m}{\rho}"
                        />
                        Setzen wir die Dichte von{" "}
                        <InlineMath math="1{,}56\,\tfrac{\text{g}}{\text{mL}}"/>{" "}
                        und die Masse von{" "}
                        <InlineMath math="43\,\text{g}"/> ein,
                        so erhalten wir:
                        <MBlockMath
                            desktop="V = \frac{m}{\rho} = \frac{43\,\text{g}}{1{,}56\,\tfrac{\text{g}}{\text{mL}}} \approx 27,56\,\text{mL}"
                            mobile="V &= \frac{m}{\rho} \\ &= \frac{43\,\text{g}}{1{,}56\,\tfrac{\text{g}}{\text{mL}}} \\ &\approx 27,56\,\text{mL}"
                        />
                    </Lösung>
                </CheckableHeading>
                <CheckableBlockquote
                    icon="aha"
                    title="Volumenformel experimentell"
                >
                    Mit dem experimentell berechneten Volumen können wir eine
                    Formel für Pyramiden aufstellen, sodass wir ohne
                    Zuckerfüllung das Volumen berechnen können. Vergleichen wir
                    sie dazu mit einem Würfel, der die Pyramide genau
                    umschließt. Seine Seitenlängen entsprechen also der Höhe der
                    Pyramide.
                    <Image
                        h={{ base: "auto", md: 375 }}
                        src="/Pyramiden/VolumenPyramide/PyramideWürfel.png"
                        width={750}
                        height={900}
                        alt="Eine Pyramide in einem Quader"
                    />
                    Nehmen wir die Seitenlänge der Pyramide, die wir gebastelt
                    haben, also 5{thinsp}cm. Dann hat der Würfel ein Volumen von{" "}
                    <InlineMath math="a^3 = 5\,\text{cm}\cdot 5\,\text{cm}\cdot 5\,\text{cm} = 125\,\text{cm}^3"/>
                    . Für unsere Pyramide bekamen wir experimentell ein Volumen
                    von 27,57{thinsp}mL. Setzen wir das ins Verhältnis mit dem
                    Würfel, so bekommen wir:
                    <MBlockMath
                        desktop="\text{Anteil Pyramide} = \frac{27{,}57\,\text{cm}^3}{125\,\text{cm}^3} \approx 0,22 \approx \frac{1}{5}"
                        mobile="\text{Anteil Pyramide} &= \frac{27{,}57\,\text{cm}^3}{125\,\text{cm}^3} \\ &\approx 0,22 \\ &\approx \frac{1}{5}"
                    />
                    Wenn wir einen Quader mit der Formel{" "}
                    <InlineMath math="V_\text{Quader} = G \cdot h"/>{" "}
                    berechnen, so nimmt eine Pyramide laut unserem Experiment
                    nur ein Fünftel des Volumens ein, also:
                    <BlockMath math="V_\text{Pyramide} = \frac{1}{5}G\cdot h" />
                    Aber stimmt das auch mit der theoretischen Herleitung
                    überein? Mit ihr bekommen wir ein eindeutiges Ergebnis!
                </CheckableBlockquote>
                <CheckableHeading title="Theoretisch" titleOrder={2}>
                    Wir konstruieren uns erneut eine quadratische Pyramide in
                    einem Würfel. Dieser soll diesmal aber die doppelte Höhe
                    unserer Pyramide haben.
                    <Image
                        h={{ base: "auto", md: 425 }}
                        src="/Pyramiden/VolumenPyramide/PyramideinWürfelEinzeln.png"
                        width={1050}
                        height={850}
                        alt="Eine Pyramide in einem Quader"
                    />
                    In diesen Würfel können wir jedoch nicht nur eine Pyramide
                    packen, sondern tatsächlich <b>6 Stück</b>! Denn unter jede
                    Grundseite passt eine weitere Pyramide, ohne, dass sie einer
                    anderen in die Quere kommt.
                    <Image
                        h={{ base: "auto", md: 425 }}
                        src="/Pyramiden/VolumenPyramide/PyramideinWürfel.png"
                        width={1050}
                        height={850}
                        alt="Sechs Pyramiden in einem Quader"
                    />
                    Das ist etwas schlecht vorzustellen, deshalb ist hier einmal
                    ein Bild von den Pyramiden „herausgezogen“:
                    <Image
                        h={{ base: "auto", md: 825 }}
                        src="/Pyramiden/VolumenPyramide/PyramideinWürfelExplosion.png"
                        width={1650}
                        height={1700}
                        alt="Eine Pyramide in einem Quader"
                    />
                    Mathematisch können wir das so formulieren:
                    <BlockMath math="V_\text{Quader} = 6 \cdot V_\text{Pyramide}" />
                    Kannst du daraus selber eine Formel für das Pyramidenvolumen
                    herleiten? Denke dran: Der Quader ist doppelt so hoch wie
                    eine der Pyramiden!
                    <CheckableBlockquote
                        title="Herleitung"
                        titleOrder={3}
                        icon="frage"
                    >
                        <Lösung>
                            Wir können also über die Volumenformel für einen
                            Quader auf das Volumen einer Pyramide schließen! Für
                            einen Quader gilt:
                            <BlockMath math="V_\text{Quader} = G \cdot h_\text{Quader}" />
                            mit der Grundfläche <InlineMath math="G"/> und
                            der Höhe{" "}
                            <InlineMath math="h_\text{Quader}"/>
                            . Das können wir in die vorige Gleichung einsetzen,
                            also bekommen wir:
                            <MBlockMath
                                mobile="V_\text{Quader} &= 6 \cdot V_\text{Pyramide} \\ &\Downarrow\scriptsize{V_\text{Quader} = G \cdot h_\text{Quader}} \\ G \cdot h_\text{Quader} &= 6 \cdot V_\text{Pyramide} \\ &\Downarrow \scriptsize{h_\text{Quader} = 2\cdot h_\text{Pyramide}} \\ G \cdot 2 h_\text{Pyramide} &= 6 \cdot V_\text{Pyramide} \\ &\Downarrow \scriptsize{:6} \\ G \cdot \frac{2}{6} h_\text{Pyramide} &= V_\text{Pyramide} \\ V_\text{Pyramide} &= \frac{1}{3} G \cdot h_\text{Pyramide}"
                                desktop="V_\text{Quader} &= 6 \cdot V_\text{Pyramide} &&\lvert V_\text{Quader} = G \cdot h_\text{Quader} \\ G \cdot h_\text{Quader} &= 6 \cdot V_\text{Pyramide} &&\lvert h_\text{Quader} = 2\cdot h_\text{Pyramide} \\ G \cdot 2 h_\text{Pyramide} &= 6 \cdot V_\text{Pyramide} &&\lvert :6 \\ G \cdot \frac{2}{6} h_\text{Pyramide} &= V_\text{Pyramide} \\ V_\text{Pyramide} &= \frac{1}{3} G \cdot h_\text{Pyramide}"
                            />
                            Eine Pyramide ist also immer ein Drittel so groß wie
                            der sie umgebende Quader!
                        </Lösung>
                        <Space my="xs" />
                    </CheckableBlockquote>
                </CheckableHeading>
                <CheckableBlockquote
                    title="Aufgabe: Pyramidenrätsel"
                    icon="frage"
                >
                    Es sind mehrere Pyramiden gegeben. Bestimme den Wert der
                    Unbekannten!
                    <Image
                        h={{ base: "auto", md: 500 }}
                        src="/Pyramiden/Pyramidenrätsel.png"
                        width={1400}
                        height={1000}
                        alt="Mehrere Pyramiden als Aufgabenstellungen"
                    />
                    <Lösung
                        title="Lösung"
                        id="Lösung-Pyramidenrätsel"
                        titleOrder={3}
                    >
                        <List type="ordered">
                            <ListItem>
                                Nach Höhe umstellen und einsetzen:
                                <MBlockMath
                                    desktop="V &= \frac{1}{3}Gh &&\lvert \cdot \frac{3}{G} \\ \frac{3V}{G} &= h \\ \Rightarrow h &= \frac{3 \cdot 32}{4 \cdot 4} = \frac{96}{16} = 6"
                                    mobile="V &= \frac{1}{3}Gh \\ &\Downarrow \scriptsize{\cdot \frac{3}{G}} \\ \frac{3V}{G} &= h \\ \Rightarrow h &= \frac{3 \cdot 32}{4 \cdot 4} = \frac{96}{16} = 6"
                                />
                            </ListItem>
                            <ListItem>
                                Nach Grundfläche umstellen und einsetzen:
                                <MBlockMath
                                    desktop="V &= \frac{1}{3}Gh &&\lvert \cdot \frac{3}{h} \\ \frac{3V}{h} &= G \\ &\Rightarrow G = \frac{3 \cdot 18}{9} = \frac{54}{9} = 6"
                                    mobile="V &= \frac{1}{3}Gh \\ &\Downarrow \scriptsize{\cdot \frac{3}{h}} \\ \frac{3V}{h} &= G \\ &\Rightarrow G = \frac{3 \cdot 18}{9} = \frac{54}{9} = 6"
                                />
                            </ListItem>
                            <ListItem>
                                Zuerst nach Grundfläche umstellen:
                                <MBlockMath
                                    mobile="V &= \frac{1}{3}Gh \\ &\Downarrow \scriptsize{\cdot \frac{3}{h}} \\ G &= \frac{3V}{h}\\ &\Rightarrow G = \frac{3\cdot 18\sqrt{3}}{6} = 9\sqrt{3}"
                                    desktop="V &= \frac{1}{3}Gh &&\lvert \cdot \frac{3}{h} \\ G &= \frac{3V}{h}\\ &\Rightarrow G = \frac{3\cdot 18\sqrt{3}}{6} = 9\sqrt{3}"
                                />
                                Formel für Dreiecksgrundfläche:{" "}
                                <InlineMath math="G = \frac{1}{2}xh_\triangle"/>
                                . Da es ein gleichseitiges Dreieck ist, gilt mit
                                dem Satz des Pythagoras:
                                <MBlockMath
                                    mobile="x^2 &= h_\triangle^2 + \left(\frac{1}{2}x^2\right)^2 \\ &\Downarrow \scriptsize{-\left(\frac{1}{2}x^2\right)^2} \\ x^2 - \left(\frac{1}{2}x^2\right)^2 &= h_\triangle^2 \\ &\Downarrow \scriptsize{\sqrt{}} \\ h_\triangle &= \sqrt{x^2 - \left(\frac{1}{2}x^2\right)^2} \\ &= \sqrt{x^2 - \frac{1}{4}x^2} \\ &= \sqrt{\frac{3}{4}x^2} \\ &= \frac{\sqrt{3}}{2}x"
                                    desktop="x^2 &= h_\triangle^2 + \left(\frac{1}{2}x^2\right)^2 &&\lvert -\left(\frac{1}{2}x^2\right)^2\\ x^2 - \left(\frac{1}{2}x^2\right)^2 &= h_\triangle^2 &&\lvert \sqrt{}\\ h_\triangle &= \sqrt{x^2 - \left(\frac{1}{2}x^2\right)^2} \\ &= \sqrt{x^2 - \frac{1}{4}x^2} \\ &= \sqrt{\frac{3}{4}x^2} \\ &= \frac{\sqrt{3}}{2}x"
                                />
                                Das können wir in die Formel für die
                                Dreiecksfläche einsetzen und bekommen:
                                <MBlockMath
                                    mobile="G &= \frac{1}{2}xh_\triangle \\ &= \frac{1}{2}x\cdot \frac{\sqrt{3}}{2}x \\ &= \frac{\sqrt{3}}{4}x^2 \\ &\Downarrow \scriptsize{\cdot \frac{4}{\sqrt{3}}} \\ \frac{4}{\sqrt{3}}G &= x^2 \\ &\Downarrow \scriptsize{\sqrt{}} \\ x &= \sqrt{\frac{4}{\sqrt{3}}G}"
                                    desktop="G &= \frac{1}{2}xh_\triangle \\ &= \frac{1}{2}x\cdot \frac{\sqrt{3}}{2}x \\ &= \frac{\sqrt{3}}{4}x^2 &&\lvert \cdot \frac{4}{\sqrt{3}} \\ \frac{4}{\sqrt{3}}G &= x^2 &&\lvert \sqrt{} \\ x &= \sqrt{\frac{4}{\sqrt{3}}G}"
                                />
                                Jetzt das Ergebnis für{" "}
                                <InlineMath math="G"/> einsetzen, dann
                                bekommen wir <InlineMath math="x"/> heraus:
                                <BlockMath math="x &= \sqrt{\frac{4}{\sqrt{3}}G} \\ &= \sqrt{\frac{4}{\sqrt{3}}\cdot9\sqrt{3}} \\ &= \sqrt{4 \cdot 9} \\ &= 6" />{" "}
                            </ListItem>

                            <ListItem>
                                Wieder erst nach Grundfläche umstellen, x als
                                unbekannte Höhe bleibt vorhanden:
                                <BlockMath math="V &= \frac{1}{3}Gx" />
                                Die rechteckige Grundfläche berechnet sich nach{" "}
                                <InlineMath math="G = 6 \cdot \frac{1}{2}x = 3x"/>
                                , das wir einsetzen können:
                                <MBlockMath
                                    mobile="V &= \frac{1}{3}Gx \\ &= \frac{1}{3}\cdot 3x \cdot x \\ &= x^2 \\ &\Downarrow \scriptsize{\sqrt{}} \\ x &= \sqrt{V} \\ &\Rightarrow x = \sqrt{25} = 5"
                                    desktop="V &= \frac{1}{3}Gx \\ &= \frac{1}{3}\cdot 3x \cdot x \\ &= x^2 &&\lvert \sqrt{} \\ x &= \sqrt{V} \\ &\Rightarrow x = \sqrt{25} = 5"
                                />
                            </ListItem>
                        </List>
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>
            <CheckableHeading title="Oberfläche">
                Neben dem Volumen ist auch die Oberfläche von Pyramiden wichtig,
                z.B. um die Menge an Ziegeln für ein Dach zu berechnen. Hier
                gibt es jedoch keine allgemeine Formel, denn die Oberfläche ist
                abhängig von der Anzahl der Seiten.
                <Divider />
                Vergleichen wir mal die Netze von einer dreieckigen und einer
                quadratischen Pyramide:
                <Image
                    h={{ base: "auto", md: 500 }}
                    src="/Pyramiden/PyramideOberfläche.png"
                    width={1400}
                    height={1000}
                    alt="Eine dreieckige und eine viereckige Pyramide mit den dazugehörigen Netzen"
                />
                Die Gesamtfläche der Dreiecke, die auf die Pyramidenspitze
                zeigen, nennt man auch{" "}
                <b>
                    Mantelfläche <InlineMath math="M"/>
                </b>
                . Übrig bleibt nur die Grundfläche <InlineMath math="G"/>:
                Hier also das Dreieck oder das Viereck. Mathematisch können wir
                das so formulieren:
                <BlockMath math="O = G + M" />
                Für die dreieckige Pyramide gilt:
                <BlockMath math="O = G + 3 \cdot A_\text{Dreieck}" />
                oder für die viereckige:
                <BlockMath math="O = G + 4 \cdot A_\text{Dreieck}" />
                Die Höhe der Dreiecke kannst du meistens mit dem Satz des
                Pythagoras berechnen. Schau dir den Infokasten an, wenn du hier
                Hilfe brauchst oder gehe direkt zu den Aufgaben!
                <CheckableBlockquote
                    title="Wdh: Höhe der Dreieckswände"
                    titleOrder={2}
                    icon="aha"
                >
                    <Lösung>
                        Du kannst den Satz des Pythagoras verwenden, um die
                        Pyramidenhöhe zu bestimmen. In dem Beispiel hier ist es
                        eine quadratische Pyramide mit Seitenlänge 3 und Höhe 3.
                        Wenn du die <Mark c={"desblue"}>Höhe</Mark> in einer der
                        Wände einzeichnest siehst du, dass sie zusammen mit der{" "}
                        <Mark c={"green"}>Pyramidenhöhe</Mark> und der{" "}
                        <Mark c={"desred"}>halben Seitenlänge</Mark> ein
                        rechtwinkliges Dreieck bildet. Wir können also den{" "}
                        <b>Satz des Pythagoras</b> verwenden, um die Länge von{" "}
                        <Mark c={"desblue"}>
                            h<sub>Dreieck</sub>
                        </Mark>{" "}
                        zu berechnen.
                        <MBlockMath
                            desktop="\textcolor{#3312B8}{h_\text{Dreieck}} = \sqrt{1{,}5^2 + 3^2} = \sqrt{11{,}25} \approx 3,35"
                            mobile="\textcolor{#3312B8}{h_\text{Dreieck}} &= \sqrt{1{,}5^2 + 3^2} \\ &= \sqrt{11{,}25} \\ &\approx 3,35"
                        />
                        Damit unsere Pyramide also eine Höhe von 3{thinsp}cm
                        hat, muss die Höhe einer Dreieckswand ca. 3,35{thinsp}cm
                        betragen.
                        <Image
                            src="/Pyramiden/VolumenPyramide/PyramideHöhe.png"
                            width={6000}
                            height={4000}
                            alt="Das Netz einer Pyramide auf einem Din A4 Blatt"
                        />
                    </Lösung>
                    <Space my="xs" />
                </CheckableBlockquote>
                <CheckableBlockquote
                    titleOrder={2}
                    title="Aufgabe: Dachdecken"
                    icon="frage"
                >
                    Die Dächer eines Schlosses sollen restauriert werden. Pro m
                    <sup>2</sup> benötigt eine Dachdeckerfirma 30
                    Schieferplatten, die in 6er-Packungen gekauft werden. Eine
                    Packung kostet 30€, zusätzlich wird eine Dachdeckerin oder
                    ein Dachdecker für 50€ pro m<sup>2</sup> bezahlt. Bestimme
                    den Gesamtpreis der Restauration und zeichne eine Skizze der
                    Dächer.
                    <List>
                        <ListItem>
                            <b>Dach 1</b>
                            <br />
                            Grundseite: Rechteck 10{thinsp}m x 10{thinsp}m /
                            Höhe: 16{thinsp}m
                        </ListItem>
                        <ListItem>
                            <b>Dächer 2-6</b> <br />
                            Grundfläche: Achteck mit 19,3{thinsp}m<sup>
                                2
                            </sup>{" "}
                            und einer Kantenlänge von 2{thinsp}cm / Höhe:
                            5{thinsp}m
                        </ListItem>
                    </List>
                    <Image
                        h={{ base: "auto", md: 500 }}
                        fit="contain"
                        src="/Pyramiden/SchlossDächer.jpg"
                        width={6484}
                        height={4323}
                        alt="Ein Schloss mit vielen pyramidenförmigen Dächern"
                    />
                    <Lösung
                        title="Lösung"
                        titleOrder={3}
                        id="Lösung-Dachdecken"
                    >
                        Skizze:
                        <ImageCaption
                            fit="contain"
                            src="/Pyramiden/DächerSkizze.png"
                            width={1200}
                            height={600}
                            alt="Eine Skizze der beiden Dachformen"
                        >
                            (Nicht maßstabsgetreu)
                        </ImageCaption>{" "}
                        <List>
                            <ListItem>
                                <b>Dach 1</b>
                                <br />
                                Die Grundfläche vom Rechteck interessiert uns
                                nicht, da wir nur die Dachfläche benötigen.
                                Dafür brauchen wir die Höhe der Manteldreiecke.
                                Wir benutzen dazu den Satz des Pythagoras:
                                <BlockMath
                                    math="h_\triangle &= \sqrt{\left(\frac{10\,\text{m}}{2}\right)^2+(16\,\text{m})^2} \\ &= \sqrt{(5\,\text{m})^2 + 256\,\text{m}^2} \\ &\approx 16{,}76\,\text{m}"
                                />
                                Die Breite entspricht der Kantenlänge unserer
                                Grundfläche, also 10{thinsp}m. Damit können wir
                                die Mantelfläche berechnen:
                                <BlockMath
                                    math="M &= 4 \cdot \frac{1}{2}gh_\triangle \\ &= 4 \cdot \frac{1}{2}\cdot 10\,\text{m} \cdot 16{,}76\,\text{m} \\ &= 335{,}2\,\text{m}^2"
                                />
                                Unser erstes Dach hat also eine Fläche von
                                335,2{thinsp}m<sup>2</sup>.
                            </ListItem>
                            <ListItem>
                                Auch hier interessiert uns die Grundfläche des
                                Achtecks nicht. Um jedoch die Höhe der
                                Manteldreiecke zu bestimmen, brauchen wir den
                                Durchmesser des Achtecks. Schau dir das Bild
                                unten zur Erklärung an.
                                <Image
                                    fit="contain"
                                    src="/Pyramiden/AchteckBurg.png"
                                    width={900}
                                    height={600}
                                    alt="Ein Achteck, wo ein von 45 Grad eingezeichnet ist"
                                />
                                Fasst man eine Seite des Achtecks als
                                rechtwinkliges Dreieck auf, dann haben die
                                anderen beiden Winkel im Dreieck eine Größe von
                                45°, da nur so ein regelmäßiges Achteck
                                konstruiert werden kann. Das Dreieck ist also
                                gleichschenklig! Das hilft uns,{" "}
                                <InlineMath math="x"/> zu berechnen:
                                <MBlockMath
                                    mobile="x^2 + x^2 &= (2\,\text{m})^2 \\ 2x^2 &= 4\,\text{m}^2 \\ &\Downarrow \scriptsize{:2} \\ x^2 &= 2\,\text{m}^2 \\ &\Downarrow \scriptsize{\sqrt{}} \\ x &= \sqrt{2}\,\text{m} \\"
                                    desktop="x^2 + x^2 &= (2\,\text{m})^2 \\ 2x^2 &= 4\,\text{m}^2&&\lvert :2 \\ x^2 &= 2\,\text{m}^2 &&\lvert \sqrt{} \\ x &= \sqrt{2}\,\text{m} \\"
                                />
                                Der Durchmesser des Achtecks ist demnach{" "}
                                <InlineMath math="2 \cdot \sqrt{2}\,\text{m} + 2\,\text{m} \approx 4{,}83\,\text{m}"/>
                                . Jetzt können wir wie beim ersten Dach die Höhe
                                der Manteldreiecke ausrechnen:
                                <BlockMath
                                    math="h_\triangle &= \sqrt{\left(\frac{4,83\,\text{m}}{2}\right)^2+(5\,\text{m})^2} \\ &\approx \sqrt{30{,}82} \\ &\approx 5{,}55\,\text{m}"
                                />
                                Damit ergibt sich als Mantelfläche:
                                <BlockMath
                                    math="M &= 8 \cdot \frac{1}{2}gh_\triangle \\ &= 8 \cdot \frac{1}{2}\cdot 2\,\text{m} \cdot 5{,}55\,\text{m} \\ &= 44{,}4\,\text{m}^2"
                                />
                                Ein Dach hat also eine Fläche von 44,4{thinsp}m
                                <sup>2</sup>. Da wir 5 dieser Dächer haben,
                                ergibt das eine Gesamtfläche von 222{thinsp}m
                                <sup>2</sup>.
                            </ListItem>
                            <ListItem>
                                Kommen wir zum Gesamtpreis. Zusammengenommen
                                haben die zu restaurierenden Dächer eine Fläche
                                von{" "}
                                <InlineMath math="335{,}2\,\text{m}^2 + 222\,\text{m}^2 = 557,2\,\text{m}^2"/>
                                . Pro Quadratmeter werden 30 Schindeln benötigt
                                – da in einer Packung 6 Schindeln sind,
                                benötigen wir 5 Packungen pro Quadratmeter. Für
                                uns heißt das also:
                                <MBlockMath
                                    desktop="557{,}2\,\text{m}^2 \cdot 5\,\frac{\text{Packungen}}{\text{m}^2}= 2786\,\text{Packungen}"
                                    mobile="&557{,}2\,\text{m}^2 \cdot 5\,\frac{\text{Packungen}}{\text{m}^2} \\ &= 2786\,\text{Packungen}"
                                />
                                Da jede Packung 30€ kostet, sind das insgesamt
                                83580€. Die Dachdecker selber kosten 50€ pro
                                Quadratmeter, das sind nochmal zusätzliche
                                Kosten von:
                                <MBlockMath
                                    desktop="557{,}2\,\text{m}^2 \cdot 50\frac{\text{€}\vphantom{U}}{\text{m}^2} = 27860\,\text{€}"
                                    mobile="&557{,}2\,\text{m}^2 \cdot 50\frac{\text{€}\vphantom{U}}{\text{m}^2} \\ &= 27860\,\text{€}"
                                />
                                Heißt: Die Restauration aller Dächer kostet
                                insgesamt 111440€.
                            </ListItem>
                        </List>
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>
        </Fragment>
    );
}
