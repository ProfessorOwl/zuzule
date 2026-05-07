import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { CheckableHeading } from "@/components/CheckableHeading";
import { BlockMath } from "@/components/CustomMath";
import Image from "@/components/Image";
import { Lösung } from "@/components/Lösung";
import MBlockMath from "@/components/MBlockMath";
import thinsp from "@/components/thinsp";
import { Flex, List, ListItem } from "@mantine/core";
import { InlineMath } from "react-katex";
import { Fragment } from "react/jsx-runtime";

export default function ZusammengesetzteKoerper() {
    return (
        <Fragment>
            <CheckableHeading title="Zusammengesetzte Körper">In der Realität genügt es oft nicht, genau einen Körper zu betrachten – meistens sind die Formen komplexer. Auf dieser Seite gibt es einige Übungsaufgaben dazu, um dich mit solchen Körpern vertraut zu machen!</CheckableHeading>
            <CheckableBlockquote title="Aufgabe: Oberflächen- und Volumenübung" titleOrder={1}>
                Berechne von den folgenden Körpern den Oberflächeninhalt und das Volumen.
                <List type="ordered">
                    <ListItem>Ein Zylinder, aus dem ein Kegel herausgeschnitten ist.</ListItem>
                    <ListItem>Eine Pyramide, aus der ein Kegel herausgeschnitten ist.</ListItem>
                    <ListItem>Eine Kugel, die auf einem Zylinder sitzt.</ListItem>
                </List>
                <Image src={"/ZusammengesetzteKoerper/Zusammen910.webp"} h={675} width={1650} height={1350} alt="Mehrere zusammengesetzte Körper" />
                <Lösung title="Lösung" titleOrder={2} id="Lösung-zusammen">
                    <List type="ordered">
                        <ListItem>
                            <b>Volumen: </b> Zuerst benötigen wir das Volumen des Zylinders. Dafür müssen wir vom Umfang auf den Radius schließen.
                            <MBlockMath
                                desktop="U &= 2\pi r &&\lvert :2\pi \\
                        \frac{U}{2\pi} &= r \\
                        &\Rightarrow r &= \frac{11}{2\pi} &\approx 1{,}75"
                                mobile="U &= 2\pi r \\
                        &\Downarrow \scriptsize{:2\pi} \\
                        \frac{U}{2\pi} &= r \\
                        &\Rightarrow r &= \frac{11}{2\pi} &\approx 1{,}75"
                            />
                            So ergibt sich das Volumen:
                            <BlockMath
                                math="V_\text{Zylinder} &= \pi r^2 h_2 \\
                        &= \pi \cdot 1{,}75^2 \cdot 7 \\
                        &\approx 67{,}35"
                            />
                            Davon müssen wir das Kegelvolumen abziehen. Dieser hat den gleichen Radius wie der Zylinder, aber eine Höhe von <InlineMath math="h_\text{Kegel} = 7 - 3 = 4" />
                            <BlockMath
                                math="V_\text{Kegel} &= \frac{1}{3}\pi r^2 h_\text{Kegel} \\
                        &= \frac{1}{3}\cdot \pi \cdot1{,}75^2 \cdot 4 \\
                        &\approx 12{,}83"
                            />
                            Jetzt können wir das Gesamtvolumen berechnen:
                            <BlockMath
                                math="V_\text{gesamt} &= V_\text{Zylinder}-V_\text{Kegel} \\
                        &= 67{,}35 - 12{,}83 \\
                        &= 54,52"
                            />
                            <b>Oberflächeninhalt: </b> Der Zylinder ist oben geöffnet, daher entspricht die Gesamtoberfläche der Grundseite und der Mantelfläche des Zylinders plus der Mantelfläche des Kegels. Grundfläche des Zylinders:
                            <BlockMath
                                math="G_\text{Zylinder} &= \pi r^2 \\
                        &= \pi \cdot 1{,}75^2 \\
                        &\approx 9{,}62"
                            />
                            Die Mantelfläche lässt sich mit der Höhe und dem Umfang berechnen:
                            <BlockMath
                                math="M_\text{Zylinder} &= U \cdot h \\
                        &= 11 \cdot 7 \\
                        &= 77"
                            />
                            Für die Mantelfläche des Kegels müssen wir darauf achten, die Mantellinie als Höhe zu benutzen.
                            <BlockMath
                                math="h_\text{Mantel} &= \sqrt{r^2 + h_\text{Kegel}^2} \\
                        &= \sqrt{1{,}75^2 + 4^2} \\
                        &\approx 4{,}37"
                            />
                            Die Mantelfäche können wir dann so berechnen:
                            <BlockMath
                                math="M_\text{Kegel} &= \frac{U}{2} \cdot h_\text{Mantel} \\
                        &= \frac{11}{2}\cdot 4{,}37 \\
                        &\approx 24,04"
                            />
                            Für die Gesamtoberfläche können wir alles zusammenaddieren:
                            <BlockMath
                                math="O_\text{gesamt} &= G_\text{Zylinder} + M_\text{Zylinder} + M_\text{Kegel} \\
                        &= 9{,}62 + 77 + 24,04 \\
                        &= 110,66"
                            />
                        </ListItem>
                        <ListItem>
                            <b>Volumen: </b> Wir müssen zuerst das Volumen der Pyramide berechnen.
                            <BlockMath
                                math="V_\text{Pyramide} &= \frac{1}{3}Gh_2 \\
                        &= 4\cdot 5 \cdot 6{,}5 \\
                        &= 130"
                            />
                            Für den Kegel müssen wir, wie in Aufgabe 1), den Umfang zum Radius umrechnen, bevor wir das Volumen berechnen können.
                            <BlockMath
                                math="r &= \frac{U}{2\pi} \\
                        &= \frac{10}{2\pi} \\
                        &\approx 1{,}59"
                            />
                            Das Volumen ergibt sich dann so:
                            <BlockMath
                                math="V_\text{Kegel} &= \frac{1}{3}\cdot \pi \cdot 1{,}59^2 \cdot 5 \\
                        &\approx 13{,}24"
                            />
                            Für das Gesamtvolumen müssen wir das Kegelvolumen vom Pyramidenvolumen abziehen:
                            <BlockMath
                                math="V_\text{gesamt} &= V_\text{Pyramide} - V_\text{Kegel} \\
                        &= 130 - 13{,}24 \\
                        &= 116{,}76"
                            />
                            <b>Oberfläche: </b> Die Pyramide ist unten durch den Kegel geöffnet. Die Gesamtoberfläche ist also die Mantelfläche des Kegels und der Pyramide. Dazu kommt die Grundfläche der Pyramide, aus der wir die Grundfläche des Kegels herausschneiden. Für die Mantelfläche der Pyramide müssen wir die Länge der Mantellinie berechnen. Da die Pyramide rechteckig ist, ist sie für beide Seiten unterschiedlich.
                            <BlockMath
                                math="h_\text{Mantel, lange Seite} &= \sqrt{\left(\frac{5}{2}\right)^2 + h_2^2} \\
                        &= \sqrt{6{,}25 + 6{,}5^2} \\
                        &\approx 6{,}96"
                            />
                            Die Mantellinie auf der kurzen Seite berechnet sich so:
                            <BlockMath
                                math="h_\text{Mantel, kurze Seite} &= \sqrt{\left(\frac{4}{2}\right)^2 + h_2^2} \\
                        &= \sqrt{4 + 6{,}5^2} \\
                        &\approx 6{,}80"
                            />
                            Die gesamte Mantelfläche der Pyramide entspricht dann der Summe aller vier Dreiecke:
                            <BlockMath
                                math="M_\text{Pyramide} &= 2\cdot \frac{1}{2}\cdot 5 \cdot 6{,}96 + 2 \cdot \frac{1}{2} \cdot 4 \cdot 6{,}80 \\
                        &= 61{,}5"
                            />
                            Für die Mantelfläche des Kegels benötigen wir erneut zuerst die Mantellinie:
                            <BlockMath
                                math="h_\text{Mantel} &= \sqrt{\left(\frac{1{,}59}{2}\right)^2 + h_1^2} \\
                        &= \sqrt{0{,}63 + 5^2} \\
                        &\approx 5{,}06"
                            />
                            Zur Mantelfläche geht es dann mit:
                            <BlockMath
                                math="M_\text{Kegel} &= \frac{U}{2} \cdot  h_\text{Mantel} \\
                        &= \frac{10}{2} \cdot 5{,}06 \\
                        &= 25{,}3"
                            />
                            Bleibt nur noch die Grundfläche der Pyramide mit dem Loch über.
                            <BlockMath
                                math="G_\text{mit Loch} &= G_\text{Pyramide} - G_\text{Kegel} \\
                        &= 4 \cdot 5 - \pi \cdot 1{,}59^2 \\
                        &= 12{,}06"
                            />
                            Damit haben wir alle Flächen parat. Die gesamte Oberfläche ergibt sich dann so:
                            <BlockMath
                                math="O_\text{gesamt} &= M_\text{Pyramide} + M_\text{Kegel} + G_\text{mit Loch} \\
                        &= 61{,}5 +  25{,}3 + 12{,}06 \\
                        &= 98{,}86"
                            />
                        </ListItem>
                        <ListItem>
                            <b>Volumen: </b> Es handelt sich um eine Halbkugel, die auf einem Zylinder sitzt. Durch den Radius ist bereits alles gegeben, was wir für das Volumen brauchen:
                            <BlockMath
                                math="V_\text{Halbkugel} &= \frac{1}{2}\cdot \frac{4}{3}\pi r_1^3 \\
                                &= \frac{4}{6} \cdot \pi \cdot 2{,}5^3 \\
                                &\approx 32{,}72"
                            />
                            Auch beim Zylinder ist alles gegeben:
                            <BlockMath
                                math="V_\text{Zylinder} &= \pi r_2^2 h \\
                                &= \pi \cdot 0{,}5^2 \cdot 4 \\
                                &\approx 3{,}14"
                            />
                            Das Gesamtvolumen bekommen wir dann durch addieren beider Teilvolumina:
                            <BlockMath
                                math="V_\text{gesamt} &= V_\text{Halbkugel} + V_\text{Zylinder} \\
                                &= 32{,}72 + 3{,}14 \\
                                &\approx 35{,}86"
                            />
                            <b>Oberflächeninhalt: </b> Hierfür müssen wir die Mantelfläche der Halbkugel und des Zylinders mit der Grundlfäche des Zylinders addieren. Die Grundfläche der Halbkugel zählt ebenso dazu, aber wir müssen einmal die Grundfläche des Zylinders abziehen, da die Halbkugel direkt darauf sitzt. Mantelfläche der Kugel:
                            <BlockMath
                                math="M_\text{Halbkugel} &= \frac{1}{2}\cdot 4 \pi r_1^2 \\
                                &= 2 \cdot \pi \cdot 2{,}5^2 \\
                                &\approx 39{,}27"
                            />
                            Und die Mantelfläche des Zylinders:
                            <BlockMath
                                math="M_\text{Zylinder} &= U\cdot h_1 \\
                                &= 2 \pi \cdot 0{,}5 \cdot 4 \\
                                &\approx 12{,}57"
                            />
                            Fehlt nur noch die Grundfläche der Halbkugel und die des Zylinders:
                            <BlockMath
                                math="G_\text{Halbkugel} &= \pi r_1^2 \\
                                &= \pi \cdot 2{,}5^2 \\
                                &\approx 19{,}63 \\
                            G_\text{Zylinder} &= \pi r_2^2 \\
                                &= \pi \cdot 0{,}5^2 \\
                                &\approx 0{,}79"
                            />
                            Jetzt berechnen wir, durch korrektes addieren und subtrahieren den gesamten Oberflächeninhalt:
                            <BlockMath
                                math="O_\text{gesamt} &= M_\text{Halbkugel} + M_\text{Zylinder} + G_\text{Halbkugel} - \cancel{G_\text{Zylinder}} + \cancel{G_\text{Zylinder}} \\
                                &= 39{,}27 + 12{,}57 + 19{,}63 \\
                                &= 71{,}47"
                            />
                        </ListItem>
                    </List>
                </Lösung>
            </CheckableBlockquote>
            <CheckableBlockquote title="Aufgabe: Würfelfabrik" titleOrder={1}>
                Ein Brettspielverlag bestellt neue Spielwürfel für ihr neues Brettspiel. Diese sollen scharfe Kanten und für jede Zahl die entsprechende Anzahl an Einkerbungen auf der Seite haben. Die Firma möchte nun wissen, wie viel Holz und Farbe sie bestellen müssen, wenn sie <InlineMath math="50.000" /> Würfel produzieren.
                <Image src={"/ZusammengesetzteKoerper/würfel.webp"} width={1024} height={1024} alt="Ein Foto der Knickpyramide" />
                <List type="ordered">
                    <ListItem>
                        Die Würfel haben eine Kantenlänge von <InlineMath math="16\,\text{mm}" />. Die Einkerbungen haben einen Radius von <InlineMath math="1{,}5\,\text{mm}" />. Berechne das Volumen eines Würfels und daraus die Menge Holz, die bestellt werden muss.
                    </ListItem>
                    <ListItem>
                        Berechne die Menge an weißer und schwarzer Farbe, die bestellt werden muss. <InlineMath math="1\,\text{L}" /> Farbe reicht für <InlineMath math="5\,\text{m}^2" /> Oberfläche.
                    </ListItem>
                </List>
                <Lösung title="Lösung" titleOrder={2} id="Lösung-würfel">
                    <List type="ordered">
                        <ListItem>
                            Das Volumen des Würfels ohne Einkerbungen ist leicht zu berechnen:
                            <BlockMath
                                math="V_\text{Würfel, keine Einkerbungen} &= 16\,\text{mm}^3 \\
                                &= 4096\,\text{mm}^3 \\
                                &= 4096 \cdot (0,1\,\text{cm})^3 \\
                                &\approx 4,1\,\text{cm}^3"
                            />
                            Nun müssen wir die Einkerbungen zählen. Jede Zahl von <InlineMath math="1" /> bis <InlineMath math="6" /> ist einmal auf dem Würfel, also sind es <InlineMath math="1+2+3+4+5+6 = 21" /> Einkerbungen. Da das alles Halbkugeln sind, entspricht das <InlineMath math="10{,}5" /> Vollkugeln. Deren Volumen ist:
                            <BlockMath
                                math="V_\text{Einkerbungen} &= 10{,}5 \cdot \frac{4}{3}\pi r^3 \\
                                    &= 14 \cdot \pi \cdot (1{,}5\,\text{mm})^3 \\
                                    &\approx 148{,}44\,\text{mm}^3 \\
                                    &\approx 0{,}148\,\text{cm}^3"
                            />
                            Damit bekommen wir nun das Volumen des Würfels <b>mit</b> den Einkerbungen heraus:
                            <BlockMath
                                math="V_\text{Würfel, mit Einkerbungen} &= V_\text{Würfel, keine Einkerbungen} - V_\text{Einkerbungen} \\
                                    &= 4,1\,\text{cm}^3 - 0{,}148\,\text{cm}^3 \\
                                    &\approx 3{,}95\,\text{cm}^3"
                            />
                            Um die Menge an verbrauchtem Holz für 50.000 Würfel zu berechnen, müssen wir uns jedoch an das Volumen <b>ohne</b> die Einkerbungen halten. Denn diese liegen ja im Würfel drin, daher „sparen“ wir dadurch kein Holz.
                            <BlockMath
                                math="V_\text{Holz} &= 50.000 \cdot 4,1\,\text{cm}^3 \\
                                    &= 205.000\,\text{cm}^3 \\
                                    &= 205.000 \cdot (0,01\,\text{m})^3 \\
                                    &= 0{,}205\,\text{m}^3"
                            />
                            Insgesamt benötigen wir also nicht mal einen Kubikmeter Holz für <InlineMath math="50.000" /> Würfel!
                        </ListItem>
                        <ListItem>
                            Für den Farbverbrauch müssen wir die einzelnen Oberflächen richtig miteinander verrechnen. Die weiße Farbe liegt nur auf dem Würfel, nicht in den Einkerbungen, also müssen wir von seiner Oberfläche die Grundflächen der Einkerbungen abziehen.
                            <BlockMath
                                math="O_\text{Würfel, keine Einkerbungen} &= 6 \cdot (1{,}6\,\text{cm})^2 \\
                                    &= 15{,}36\,\text{cm}^2"
                            />
                            Die Grundflächen der Einkerbungen sind so zu berechnen:
                            <BlockMath
                                math="G_\text{Einkerbungen} &= 21 \cdot \pi r^2 \\
                                    &= 21 \cdot \pi \cdot (0,15\,\text{cm})^2 \\
                                    &\approx 1{,}48\,\text{cm}^2"
                            />
                            Damit bekommen wir die gesamte weiße Fläche heraus:
                            <BlockMath
                                math="O_\text{weiß} &=O_\text{Würfel, keine Einkerbungen} -G_\text{Einkerbungen} \\
                                    &= 15{,}36\,\text{cm}^2 - 1{,}48\,\text{cm}^2 \\
                                    &= 13{,}88\,\text{cm}^2"
                            />
                            Die schwarze Farbe liegt nur in den Einkerbungen. Wir benötigen demnach ihre Mantelfläche – die entspricht 21 Halbkugeln bzw. 10,5 Vollkugeln:
                            <BlockMath
                                math="O_\text{schwarz} &= 10{,}5 \cdot 4 \cdot \pi r^2 \\
                                    &= 42 \cdot \pi \cdot (0,15\,\text{cm})^2 \\
                                    &\approx 2{,}97\,\text{cm}^2"
                            />
                            Das sind die Werte pro Würfel. Für die 50.000 Würfel werden insgesamt benötigt:
                            <BlockMath
                                math="O_\text{weiß, gesamt} &= 50.000 \cdot 13{,}88\,\text{cm}^2 \\
                                    &= 694.000\,\text{cm}^2 \\
                                    &= 694.000 \cdot (0,01\,\text{m})^2 \\
                                    &= 69{,}4\,\text{m}^2"
                            />
                            <BlockMath
                                math="O_\text{schwarz, gesamt} &= 50.000 \cdot 2{,}97\,\text{cm}^2 \\
                                    &= 148.500\,\text{cm}^2 \\
                                    &= 14{,}85\,\text{m}^2"
                            />
                            Das bedeutet: An weißer Farbe müssen insgesamt <InlineMath math="69{,}4\,\cancel{\text{m}^2} : 5\,\frac{\cancel{\text{m}^2}}{\text{L}^2} = 13{,}88\,\text{L}" /> Farbe bestellt werden, an schwarzer Farbe <InlineMath math="14{,}85\,\cancel{\text{m}^2} : 5\,\frac{\cancel{\text{m}^2}}{\text{L}^2} = 2{,}97\,\text{L}" />.
                        </ListItem>
                    </List>
                </Lösung>
            </CheckableBlockquote>
            <CheckableBlockquote title="Aufgabe: Knickpyramide" titleOrder={1}>
                Die Knickpyramide in Dashur ist <InlineMath math="40\,\text{km}" /> von Kairo entfernt und gehört zu den größten Pyramiden, die je gebaut wurden. Der Name stammt von ihrer eigenartigen Form, da der Bauwinkel ab der Hälfte der Höhe abgeflacht wurde. In dieser Aufgabe werden wir das Gewicht der quadratischen Pyramide berechnen.
                <Flex>
                    <Image src={"/ZusammengesetzteKoerper/Knickpyramide.webp"} h={"auto"} width={1400} height={1050} alt="Ein Foto der Knickpyramide" flex={"0 0 400px"} my={0} />
                    <Image src={"/ZusammengesetzteKoerper/KnickpyramideSkizze.webp"} h={"auto"} width={1350} height={950} alt="Ein Foto der Knickpyramide" flex={"0 0 400px"} my={0} />
                </Flex>
                Dafür werden wir die Pyramide in die <b>obere, flachere</b> und die <b>untere, steilere</b> Pyramide „zerteilen“
                <List type="ordered">
                    <ListItem>Berechne das Volumen der oberen Pyramide.</ListItem>
                    <ListItem>Die untere Pyramide ist ein sogenannter Kegelstumpf. Um davon das Volumen zu berechnen, benötigen wir das Volumen ihres nicht gebauten Teils. Bestimme das Volumen des oberen Teils, wenn er die gleiche Steigung wie der untere hätte.</ListItem>
                    <ListItem>Berechne nun mithilfe des steileren oberen Teils das Volumen des unteren Teils.</ListItem>
                    <ListItem>
                        Füge nun beide Teile zusammen und berechne das Gesamtvolumen der Knickpyramide. Angenommen, die Pyramide wurde komplett aus Kalkstein gebaut und jeder Kubikmeter wiegt <InlineMath math="2000\,\text{kg}" /> – wie viele Tonnen Steine wurden für ihren Bau benötigt?
                    </ListItem>
                </List>
                <Lösung title="Lösung" titleOrder={2} id="Lösung-Knickpyramide">
                    <List type="ordered">
                        <ListItem>
                            Volumen der oberen Pyramide:
                            <BlockMath
                                math="V_\text{oben} &= \frac{1}{3}Gh \\
                                &= \frac{1}{3}(123{,}58\,\text{m}^2)^2 \cdot 57{,}67\,\text{m} \\
                                &\approx 293.579\,\text{m}^3"
                            />
                        </ListItem>
                        <ListItem>
                            Die obere Pyramide hätte, wäre die Steigung nicht geändert worden, eine Höhe von <InlineMath math="57{,}67\,\text{m} + 25{,}02\,\text{m} = 82{,}69\,\text{m}" /> gehabt. Volumen dieses steileren, oberen Teils:
                            <BlockMath
                                math="V_\text{oben, steil} &= \frac{1}{3}(123{,}58\,\text{m}^2)^2 \cdot 82{,}69\,\text{m} \\
                            &\approx 420.948\,\text{m}^3"
                            />
                        </ListItem>
                        <ListItem>
                            Auch hier müssen wir die zusätzliche Höhe addieren. Mit unveränderter Steigung wäre die Pyramide <InlineMath math="47{,}04\,\text{m} + 57{,}67\,\text{m} + 25{,}02\,\text{m} = 129{,}73\,\text{m}" /> hoch gewesen.
                            <BlockMath
                                math="V_\text{gesamt, steil} &= \frac{1}{3}(189{,}43\,\text{m}^2)^2 \cdot 129{,}73\,\text{m} \\
                            &\approx 1.551.732\,\text{m}^3"
                            />
                            Um das Volumen des Kegelstumpfes zu erhalten, müssen wir den hypothetischen, steileren oberen Teil davon abziehen:
                            <BlockMath
                                math="V_\text{unten} &= V_\text{oben, steil} - V_\text{gesamt, steil} \\
                            &= 1.551.732\,\text{m}^3 - 420.948\,\text{m}^3 \\
                            &= 1.130.784\,\text{m}^3"
                            />
                        </ListItem>
                        <ListItem>
                            Damit können wir nun das Gesamtvolumen berechnen:
                            <BlockMath
                                math="V_\text{gesamt} &= V_\text{unten} - V_\text{oben} \\
                            &= 1.130.784\,\text{m}^3 + 293.579\,\text{m}^3 \\
                            &= 1.424.363\,\text{m}^3"
                            />
                            Die Knickpyramide hat demnach ein Volumen von <InlineMath math="1.424.363\,\text{m}^3" />. Diese Zahl müssen wir nun mit dem Gewicht von <InlineMath math="2.000\,\text{kg}" /> pro m<sup>3</sup> Kalkstein multiplizieren.
                            <BlockMath
                                math="m &= 1.424.363\,\cancel{\text{m}^3} \cdot 2.000\,\frac{\text{kg}}{\cancel{\text{m}^3}} \\
                            &=2.848.726.000\,\text{kg} \\
                            &= 2.848.726\,\text{t}"
                            />
                            Wenn wir annehmen, die Pyramide besteht komplett aus Kalkstein, dann mussten die Arbeiter insgesamt <InlineMath math="2.848.726\,\text{Tonnen}" /> Material befördern!
                        </ListItem>
                    </List>
                </Lösung>
            </CheckableBlockquote>
        </Fragment>
    );
}
