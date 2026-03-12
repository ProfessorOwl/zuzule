import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { CheckableHeading } from "@/components/CheckableHeading";
import { BlockMath } from "@/components/CustomMath";
import Image from "@/components/Image";
import { Lösung } from "@/components/Lösung";
import thinsp from "@/components/thinsp";
import { Flex, List, ListItem } from "@mantine/core";
import { InlineMath } from "react-katex";
import { Fragment } from "react/jsx-runtime";

export default function ZusammengesetzteKoerper() {
    return <Fragment>
        <CheckableHeading title="Zusammengesetzte Körper">
            In der Realität genügt es oft nicht, genau einen Körper zu betrachten – meistens sind die Formen komplexer. Auf dieser Seite gibt es einige Übungsaufgaben dazu, um dich mit solchen Körpern vertraut zu machen!
        </CheckableHeading>
        <CheckableBlockquote title="Aufgabe: Knickpyramide" titleOrder={1}>
            Die Knickpyramide in Dashur ist 40{thinsp}km von Kairo entfernt und gehört zu den größten Pyramiden, die je gebaut wurden. Der Name stammt von ihrer eigenartigen Form, da der Bauwinkel ab der Hälfte der Höhe abgeflacht wurde. In dieser Aufgabe werden wir das Gewicht der quadratischen Pyramide berechnen.
            <Flex>
                <Image src={"/ZusammengesetzteKoerper/Knickpyramide.webp"} h={"auto"} width={1400} height={1050} alt="Ein Foto der Knickpyramide" flex={"0 0 400px"} my={0}/>
                <Image src={"/ZusammengesetzteKoerper/KnickpyramideSkizze.webp"} h={"auto"} width={1350} height={950} alt="Ein Foto der Knickpyramide" flex={"0 0 400px"} my={0}/>
            </Flex>
            Dafür werden wir die Pyramide in die <b>obere, flachere</b> und die <b>untere, steilere</b> Pyramide „zerteilen“
            <List type="ordered">
                <ListItem>
                    Berechne das Volumen der oberen Pyramide.
                </ListItem>
                <ListItem>
                    Die untere Pyramide ist ein sogenannter Kegelstumpf. Um davon das Volumen zu berechnen, benötigen wir das Volumen ihres nicht gebauten Teils. Bestimme das Volumen des oberen Teils, wenn er die gleiche Steigung wie der untere hätte.
                </ListItem>
                <ListItem>
                    Berechne nun mithilfe des steileren oberen Teils das Volumen des unteren Teils.
                </ListItem>
                <ListItem>
                    Füge nun beide Teile zusammen und berechne das Gesamtvolumen der Knickpyramide. Angenommen, die Pyramide wurde komplett aus Kalkstein gebaut und jeder Kubikmeter wiegt 2000{thinsp}kg – wie viele Tonnen Steine wurden für ihren Bau benötigt?
                </ListItem>
            </List>
            <Lösung title="Lösung" titleOrder={2} id="Lösung-Knickpyramide">
                <List type="ordered">
                    <ListItem>
                        Volumen der oberen Pyramide:
                            <BlockMath math="V_\text{oben} &= \frac{1}{3}Gh \\
                                &= \frac{1}{3}(123{,}58\,\text{m}^2)^2 \cdot 57{,}67\,\text{m} \\
                                &\approx 293.579\,\text{m}^3"/>
                    </ListItem>
                    <ListItem>
                        Die obere Pyramide hätte, wäre die Steigung nicht geändert worden, eine Höhe von <InlineMath math="57{,}67\,\text{m} + 25{,}02\,\text{m} = 82{,}69\,\text{m}"/> gehabt. 
                        Volumen dieses steileren, oberen Teils:
                        <BlockMath math="V_\text{oben, steil} &= \frac{1}{3}(123{,}58\,\text{m}^2)^2 \cdot 82{,}69\,\text{m} \\
                            &\approx 420.948\,\text{m}^3"/>
                    </ListItem>
                    <ListItem>
                        Auch hier müssen wir die zusätzliche Höhe addieren. Mit unveränderter Steigung wäre die Pyramide <InlineMath math="47{,}04\,\text{m} + 57{,}67\,\text{m} + 25{,}02\,\text{m} = 129{,}73\,\text{m}"/> hoch gewesen.
                        <BlockMath math="V_\text{gesamt, steil} &= \frac{1}{3}(189{,}43\,\text{m}^2)^2 \cdot 129{,}73\,\text{m} \\
                            &\approx 1.551.732\,\text{m}^3"/>
                        Um das Volumen des Kegelstumpfes zu erhalten, müssen wir den hypothetischen, steileren oberen Teil davon abziehen:
                        <BlockMath math="V_\text{unten} &= V_\text{oben, steil} - V_\text{gesamt, steil} \\
                            &= 1.551.732\,\text{m}^3 - 420.948\,\text{m}^3 \\
                            &= 1.130.784\,\text{m}^3"/>
                    </ListItem>
                    <ListItem>
                        Damit können wir nun das Gesamtvolumen berechnen:
                         <BlockMath math="V_\text{gesamt} &= V_\text{unten} - V_\text{oben} \\
                            &= 1.130.784\,\text{m}^3 + 293.579\,\text{m}^3 \\
                            &= 1.424.363\,\text{m}^3"/>
                        Die Knickpyramide hat demnach ein Volumen von <InlineMath math="1.424.363\,\text{m}^3"/>. Diese Zahl müssen wir nun mit dem Gewicht von 2.000{thinsp}lg pro m<sup>3</sup> Kalkstein multiplizieren.
                        <BlockMath math="m &= 1.424.363\,\cancel{\text{m}^3} \cdot 2.000\,\frac{\text{kg}}{\cancel{\text{m}^3}} \\
                            &=2.848.726.000\,\text{kg} \\
                            &= 2.848.726\,\text{t}"/>
                        Wenn wir annehmen, die Pyramide besteht komplett aus Kalkstein, dann mussten die Arbeiter insgesamt 2.848.726{thinsp}Tonnen Material befördern!
                    </ListItem>
                </List>    
            </Lösung>
        </CheckableBlockquote>
        </Fragment>
}
