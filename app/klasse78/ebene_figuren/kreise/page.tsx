import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { CheckableHeading } from "@/components/CheckableHeading";
import { BlockMath } from "@/components/CustomMath";
import { Hinweis } from "@/components/Hinweis";
import Image from "@/components/Image";
import { Lösung } from "@/components/Lösung";
import MBlockMath from "@/components/MBlockMath";
import thinsp from "@/components/thinsp";
import { Divider, Flex, List, ListItem, Mark } from "@mantine/core";
import { Metadata } from "next";
import { InlineMath } from "react-katex";
import { Fragment } from "react/jsx-runtime";

export const metadata: Metadata = {
    title: "Kreise – zuzule",
};

export default function Kreise() {
    return (
        <Fragment>
            <CheckableHeading title="Der Kreis"> Kreise sind mathematisch schöne Formen: Man muss nur einen Mittelpunkt festlegen und einen Radius nennen, und heraus kommt ein ganzer Kreis! Auch im Alltag begleiten uns kreisförmige Sachen überall, sei es das Geld im Geldbeutel, Autoreifen oder runde Stifte. Auf der Seite wirst du mehr darüber erfahren, wie der Flächeninhalt und Umfang von Kreisen berechnet werden kann. Erstmal aber: Was macht einen Kreis überhaupt aus?</CheckableHeading>
            <CheckableHeading title="Definition" titleOrder={2}>
                Ein Kreis ist eine Figur, bei der alle Punkte den gleichen Abstand vom Mittelpunkt haben. Der Abstand wird allgemein <b>Radius</b> genannt. <br />
                Deshalb kannst du mit einem Zirkel einen Kreis zeichnen: Stelle einen Abstand zwischen Spitze und Mine ein, suche einen Mittelpunkt und führe die Mine dann in einer Umdrehung um den Mittelpunkt herum.
                <Image src={"/Kreise/kreiszirke.webp"} width={6000} height={4000} h={400} alt="Ein Kreis, der mit einem Zirkel gezeichnet wurde." />
            </CheckableHeading>
            <CheckableHeading title="Umfang">
                Im Gegensatz zu einem Rechteck oder Dreieck, wo die geraden Seiten einfach mit einem Zollstock gemessen werden können, ist das bei einem Kreis nicht so einfach. Am besten funktioniert es, wenn du einen festen Gegenstand hast, den du mit einem Faden oder einem Maßband umwickeln kannst und anschließend den <b>Durchmesser</b> <InlineMath math="d" />, also die Breite des Kreises misst.
                <Flex>
                    <Image src={"/Kreise/tasse.webp"} width={6000} height={4000} h={400} alt="Ein Geodreieck auf einer Tasse." flex={"1 1 400px"} />
                    <Image src={"/Kreise/tasseumfang.webp"} width={6000} height={4000} h={400} alt="Ein Maßband um eine Tasse." flex={"1 1 400px"} />
                </Flex>
                Die Tasse hier hat einen Durchmesser von 9,8{thinsp}cm und einen Umfang von 31{thinsp}cm. Wir können davon das Verhältnis berechnen!
                <BlockMath math="\frac{U}{d} = \frac{31\,\text{cm}}{9{,}8\,\text{cm}} \approx  3{,}16" />
                <CheckableBlockquote title="Aufgabe: Verhältnis zwischen Durchmesser und Umfang" titleOrder={2} icon="frage">
                    Jetzt bist du dran. Suche dir 4 weitere Gegenstände aus deinem Haushalt und bestimme deren Umfang und Durchmesser. Wie ändert sich das Verhältnis? <br />
                    Es ist kein Problem wenn du kein Maßband hast. Nimm eine Schnur oder etwas anderes biegsames und lege es um den runden Gegenstand. Mit einem Geodreieck oder Lineal kannst du dann ausmessen, wie weit es herumgepasst hat.
                    <Lösung id="lösung-durchmesserumfang" titleOrder={3}>
                        Du solltest immer ungefähr ein Verhältis von <InlineMath math="3,1"></InlineMath> herausbekommen haben, unabhängig von dem Gegenstand, den du gemessen hast.
                        <Divider />
                        Das ist natürlich kein Zufall. Tatsächlich steht der Durchmesser eines Kreises <b>immer</b> in diesem Verhältnis zu seinem Umfang. Damit ist es nicht mehr notwendig, Maßbänder an Gegenstände anzulegen! Stattdessen genügt es, den Durchmesser herauszufinden und von dort den Umfang zu berechnen. Deshalb hat das Verhältnis einen eigenen Namen bekommen: Die Zahl <InlineMath>\pi</InlineMath> (gesprochen: „Pi“).
                    </Lösung>
                </CheckableBlockquote>
                Die Zahl <InlineMath>\pi</InlineMath> ist auch deshalb besonders, weil sie unendlich viele Stellen hat. Die ersten 50 Stellen sehen so aus:
                <BlockMath math="3{,}14159265358979323846264338327950288419716939937510\dots" />
                Es gibt ganze Bücher, die du kaufen kannst, die tausende und tausende an weiteren Stellen abdrucken – aber egal, wie viele Bücher es gibt, sie werden die Zahl nie perfekt genau abbilden können. <InlineMath>\pi</InlineMath> ist unendlich lang und es wird immer eine weitere Ziffer hinter der „letzten“ geben. Das besondere ist, dass sich <InlineMath>\pi</InlineMath> nie wiederholt. Aus dem Grund kann man es auch nicht mit einem Bruch darstellen – außer er ist selber unendlich lang!
                <CheckableBlockquote icon="aha" title="Aha! Zahlenfolgen in π" titleOrder={2}>
                    Da sich <InlineMath>\pi</InlineMath> nie wiederholt, kannst du darin jede mögliche Zahlenfolge finden. Schau einmal auf{" "}
                    <a href="https://katiesteckles.co.uk/pisearch/" target="_blank">
                        dieser Seite
                    </a>{" "}
                    vorbei, um z.{thinsp}B. nach deinem Geburtsdatum oder deinem Namen zu suchen. Der Name dieser Seite, „zuzuLe“, steht an der 86.591.418.847-ten Stelle, wenn A=1, B=2, … gewählt wird.
                </CheckableBlockquote>
                Da das Verhältnis zwischen dem Umfang U und dem Durchmesser d der Zahl <InlineMath>\pi</InlineMath> entspricht, können wir das auch so festhalten:
                <BlockMath math="\frac{U}{d} &= \pi &&\lvert \cdot d \\ U &= d \cdot \pi" />. Oft wird dabei statt dem Durchmesser auch der Radius r benutzt, der genau der Hälfte des Durchmessers entspricht. Dann lautet die Formel:
                <BlockMath math="U = 2\pi r" />
                <CheckableBlockquote title="Aufgabe: Umfang" icon="frage" titleOrder={2}>
                    Berechne immer entweder r oder U und zeichne die Kreise in der richtigen Größe auf.
                    <List type="ordered">
                        <ListItem>
                            <InlineMath math="r = 3\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="r = 2\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="U = 10\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="U = 14\,\text{cm}" />
                        </ListItem>
                    </List>
                    <Hinweis id="hinweis-umfang" titleOrder={3}>
                        Stelle die Gleichung von oben entweder nach r oder nach U um!
                    </Hinweis>
                    <Lösung titleOrder={3} id="lösung-umfang">
                        Die Gleichung nach U umgestellt lautet: <InlineMath math="U = 2\pi r" />, nach r umgestellt: <BlockMath math="U &= 2\pi r &&\lvert : 2\pi \\ \frac{U}{2\pi} &= r" />. Dann müssen nur noch die richtigen Werte eingesetzt werden.
                        <List type="ordered">
                            <ListItem>
                                <BlockMath math="U &= 2\pi r \\ &\approx 2 \cdot 3{,}14 \cdot 3\,\text{cm} \\ &= 18{,}84\,\text{cm} " />
                            </ListItem>
                            <ListItem>
                                <BlockMath math="U &\approx 2 \cdot 3{,}14 \cdot 2\,\text{cm} \\ &= 12{,}56\,\text{cm} " />
                            </ListItem>
                            <ListItem>
                                <BlockMath math="r &= \frac{U}{2\pi}\\ &\approx \frac{10\,\text{cm}}{2\cdot 3{,}14} \\ &\approx 1{,}59\,\text{cm} " />
                            </ListItem>
                            <ListItem>
                                <BlockMath math="r &\approx \frac{14\,\text{cm}}{2\cdot 3{,}14} \\ &\approx 2{,}23\,\text{cm} " />
                            </ListItem>
                        </List>
                        <Image src={"/Kreise/aufgabe.webp"} width={1351} height={1250} h={625} alt="Kreise mit den passenden Durchmessern aus der Aufgabe" />
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>
            <CheckableHeading title="Flächeninhalt">
                Der Flächeninhalt eines Kreises ist nicht so schwer herzuleiten. Stelle dir eine Pizza vor, die bereits in acht Teile zerschnitten ist:
                <Image src={"/Kreise/kreis8tel.webp"} width={6000} height={4000} h={400} alt="Ein Kreis, der gleichmäßig in Achtel zerschnitten wurde." />
                Du kannst die Achtel abwechselnd nebeneinander anordnen, sodass du eine Art welliges Parallelogramm bekommst:
                <Image src={"/Kreise/kreis8telreihe.webp"} width={6000} height={4000} h={400} alt="Die Achtel wurden gleichmäßig in eine Reihe gelegt." />
                Du kannst sie aber noch weiter zerteilen! Wenn du sie als 16-tel nebeneinander legst, dann bekommst du fast ein normales Rechteck:
                <Image src={"/Kreise/kreis16telreihe.webp"} width={6000} height={4000} h={400} alt="Ein Kreis, der gleichmäßig in Sechzehntel zerschnitten wurde." />
                Wenn du das unendlich wiederholst, kommt ein perfektes Rechteck heraus. Hier entspricht nun die die{" "}
                <Mark c="desblue.9">
                    Höhe <InlineMath math="h" />{" "}
                </Mark>{" "}
                dem Radius des Kreises. Die Ober- und Unterseite beträgt jeweils die Hälfte des Umfangs, da sie komplett durch die Außenseiten der Kreisstücke gebildet werden. <br />
                Mit der Formel für ein Rechteck lässt sich nun die Fläche berechnen:
                <BlockMath math="A &= r \cdot \frac{U}{2} \\ &= r \cdot \frac{\cancel{2}\pi r}{\cancel{2}} \\ &\Rightarrow A = \pi r^2" />
                Damit haben wir die Flächenformel für einen Kreis hergeleitet!
                <CheckableBlockquote icon="frage" title="Aufgabe: Flächeninhalt" titleOrder={2}>
                    Berechne den Flächeninhalt der folgenden Kreise mit Radius r und Durchmesser d:
                    <List type="ordered">
                        <ListItem>
                            <InlineMath math="r = 2\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="d = 3,5\,\text{cm}" />
                        </ListItem>
                        <ListItem>
                            <InlineMath math="r = 5\,\text{cm}" />
                        </ListItem>
                    </List>
                    <Lösung id="lösung-flächeninhalte" titleOrder={3}>
                        Benutze die Formel von oben: <InlineMath math="A = \pi r^2" />. Den Durchmesser kannst du durch halbieren in den Radius umrechnen: <InlineMath math="r = \frac{d}{2}" />
                        <List type="ordered">
                            <ListItem>
                                <BlockMath
                                    math="A &= \pi r^2 \\ 
                            &\approx 3{,}14\cdot (2\,\text{cm})^2 \\
                            &= 12{,}56\,\text{cm}^2"
                                />
                            </ListItem>
                            <ListItem>
                                Hier musst du zuerst den Durchmesser in den Radius umrechnen:
                                <BlockMath
                                    math="r &= \frac{d}{2} \\
                                &= \frac{3{,}5\,\text{cm}}{2} \\
                                &= 1,75\,\text{cm}"
                                />
                                Jetzt kannst du die Fläche berechnen:
                                <BlockMath
                                    math="A &\approx 3{,}14\cdot (1{,}75\,\text{cm})^2 \\
                            &\approx 9{,}62\,\text{cm}^2"
                                />
                            </ListItem>
                            <ListItem>
                                <BlockMath
                                    math="A &\approx 3{,}14\cdot (5\,\text{cm})^2 \\
                            &= 78{,}5\,\text{cm}^2"
                                />
                            </ListItem>
                        </List>
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>
        </Fragment>
    );
}
