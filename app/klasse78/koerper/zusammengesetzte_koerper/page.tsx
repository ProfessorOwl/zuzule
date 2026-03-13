import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { CheckableHeading } from "@/components/CheckableHeading";
import { BlockMath } from "@/components/CustomMath";
import Image from "@/components/Image";
import { Lösung } from "@/components/Lösung";
import MBlockMath from "@/components/MBlockMath";
import thinsp from "@/components/thinsp";
import { List, ListItem } from "@mantine/core";
import { InlineMath } from "react-katex";
import { Fragment } from "react/jsx-runtime";

export default function ZusammengesetzteKoerper() {
    return <Fragment>
        <CheckableHeading title="Zusammengesetzte Körper">In der Realität genügt es oft nicht, genau einen Körper zu betrachten – meistens sind die Formen komplexer. Auf dieser Seite gibt es einige Übungsaufgaben dazu, um dich mit solchen Körpern vertraut zu machen!</CheckableHeading>
        <CheckableBlockquote title="Aufgabe: Volumenübung" titleOrder={1} >
            Bestimme das Volumen der folgenden Körper.
            <Image src="/ZusammengesetzteKoerper/Zusammen78.webp" h={575} width={1350} height={1150} alt="Verschiedene zusammengesetzte Körper" />
            <Lösung title="Lösung" titleOrder={2} id="Lösung-Zusammen">
            <List type="ordered">
                <ListItem>
                    Wir müssen das Zylindervolumen vom Quader abziehen. Der quaderförmige Grundkörper berechnet sich folgendermaßen:
                    <BlockMath math="V_\text{Quader} &= 9 \cdot 7 \cdot 4 \\
                        &= 252"/>
                    Der Zylinder hat die gleiche Höhe:
                    <BlockMath math="V_\text{Zylinder} &= \pi r^2 h \\
                        &= \pi \cdot 2^2 \cdot 4 \\
                        &\approx 50{,}27"/>
                    Das korrekte Volumen bekommen wir durch subtrahieren der beiden Volumina:
                    <BlockMath math="V_\text{gesamt} = V_\text{Quader}-V_\text{Zylinder} \\
                        &= 252 - 50{,}27 \\
                        &= 201{,}73"/>
                </ListItem>
                <ListItem>
                    Es gibt mehrere Arten, das Volumen dieses Körpers zu berechnen. Eine Methode ist, zuerst die zu uns zeigende Fläche zu berechnen, und diese dann als Prisma in die Höhe zu ziehen. Die Fläche vorne ist ein Rechteck mit einem Dreieck.
                    Fläche des Rechtecks: 
                    <BlockMath math="A_\text{Rechteck} &= 3 \cdot 4 \\
                        &= 12"/>
                    Das Dreieck berechnet sich aus der Reststrecke und der Höhe:
                    <BlockMath math="A_\text{Dreieck} &= \frac{1}{2} \cdot 3 \cdot 6 \\
                        &= 9"/>
                    Damit ergibt sich die Gesamtfläche zu 
                    <BlockMath math="A &= A_\text{Dreieck} + A_\text{Rechteck} \\
                        &= 9 + 12 \\
                        &= 21"/>
                    Zum Volumen des Prismas gelangen wir nun mit der Formel <InlineMath math="V = Gh"/>
                    <BlockMath math="V &= 21 \cdot 2{,}5 \\ 
                        &= 52{,}5"/>
                    <b>Tipp:</b> Alternativ hätten wir die vordere Fläche als Trapez berechnen können, das wäre etwas kürzer gewesen. Kennst du davon noch die Formel?
                </ListItem>
                <ListItem>
                    In der Mitte des Körpers ist ein Quader, außen zwei halbe Zylinder. Da beide Zylinderhälften identisch sind, entspricht das Gesamtvolumen dem des Quaders und eines ganzen Zylinders.
                    Wir müssen zuerst den Radius des Zylinders bestimmen, um das Volumen des berechnen zu können.
                    <MBlockMath desktop="U &= 2\pi r &&\lvert :2\pi \\
                        \frac{U}{2\pi} &= r \\
                        &\Rightarrow r = \frac{6}{2\pi} = 0{,}95" 
                    mobile="U &= 2\pi r \\
                    &\Downarrow \scriptsize{:2\pi} \\
                        \frac{U}{2\pi} &= r \\
                        &\Rightarrow r = \frac{6}{2\pi} = 0{,}95"/>
                    Damit können wir direkt das Zylindervolumen berechnen:
                    <BlockMath math="V_\text{Zylinder} &= \pi r^2 h \\
                        &= \pi \cdot 0{,}95^2 \cdot 5{,}5 \\
                        &= 15{,}59"/>
                    Das Volumen des Quaders ergibt sich nun folgendermaßen: 
                    <BlockMath math="V_\text{Quader} &= 3 \cdot 5{,}5 \cdot (2\cdot 0{,}95) \\
                        &= 31{,}35"/>
                    Zusammen ergibt das:
                    <BlockMath math="V_\text{gesamt} &= V_\text{Zylinder} + V_\text{Quader} \\
                        &= 15{,}59 + 31{,}35 \\
                        &= 46{,}94"/>           
                </ListItem>
            </List>    
            </Lösung>
        </CheckableBlockquote>
        <CheckableBlockquote title="Aufgabe: Flaschenfabrik" titleOrder={1}>
            Die PET-Flasche einer Firma wiegt 30{thinsp}g. Die Firma möchte herausfinden, wie viel Material sie insgesamt benötigen, wenn sie 100.000 Flaschen inklusive der Deckel herstellen.
            <List type="ordered">
                <ListItem>
                    Der Deckel hat einen Durchmesser von 2,8{thinsp}cm, eine Höhe von 2{thinsp}cm und eine Wandstärke von 0,1{thinsp}cm. Bestimme das benötigte Volumen pro Deckel.
                </ListItem>
                <ListItem>
                    Bestimme nun die Materialmenge, die für 100.000 Flaschen insgesamt benötigt wird. 1{thinsp}mL PET wiegt 1,4{thinsp}g. Berücksichtige auch den Flaschenkörper!
                </ListItem>
                <ListItem>
                    Seit 2024 müssen Deckel bei Plastikflaschen mit der Flasche verbunden sein. Wie viel Prozent Plastik wird seitdem mehr recycelt, wenn man davon ausgeht, dass tatsächlich jede Flasche recycelt wird?
                </ListItem>
            </List>
            <Image src="/ZusammengesetzteKoerper/Flaschendeckel.webp" h={300} width={6000} height={4000} alt="Ein Flaschendeckel" /> 
            <Lösung title="Lösung" titleOrder={2} id="Lösung-Flasche">
                <List type="ordered">
                    <ListItem>
                        Der äußere Radius beträgt <InlineMath math="r = \frac{d}{2} = \frac{2{,}8\,\text{cm}}{2} = 1{,}4\,\text{cm}"/>. Damit lässt sich das Volumen berechnen:
                        <BlockMath math="V_\text{außen} &= \pi r^2 h \\
                            &=\pi \cdot (1{,}4\,\text{cm})^2 \cdot 2\,\text{cm} \\
                            &= 12{,}32\,\text{cm}^3"/>
                        Für den inneren Zylinder müssen wir die Wandstärke abziehen. Für jede Seite sind das 1{thinsp}mm, was einen inneren Radius von <InlineMath math="r_\text{innen} = 1{,}4\,\text{cm} - 2\cdot 0{,}1\,\text{cm} = 1{,}2\,\text{cm}"/>.
                        Von der Höhe müssen wir die Wandstärke lediglich einmal abziehen, da der Deckel auf einer Seite offen ist. Wir bekommen als innere Höhe somit <InlineMath math="1{,}9\,\text{cm}"/>.
                        Das Volumen des inneren Zylinders ist damit:
                        <BlockMath math="V_\text{innen} &= \pi \cdot (1{,}2\,\text{cm})^2 \cdot 1{,}9\,\text{cm} \\
                            &= 8{,}60\,\text{cm}^3"/>
                        Das Plastikvolumen des Deckels bekommen wir durch Substrahieren des inneren vom äußeren Zylinder:
                        <BlockMath math="V_\text{gesamt} &= V_\text{außen} - V_\text{innen} \\
                            &= 12{,}32\,\text{cm}^3 - 8{,}60\,\text{cm}^3 \\
                            &= 3{,}72\,\text{cm}^3"/>
                        Für einen Deckel benötigen wir also ein Plastikvolumen von <InlineMath math="8{,}60\,\text{cm}^2"/>.
                    </ListItem>
                    <ListItem>
                        Da 1{thinsp}mL PET 1,4{thinsp}g wiegt, müssen wir das Volumen eines Deckels mit diesem Gewicht multiplizieren.
                        <BlockMath math="m &= 3{,}72\,\text{cm}^3 \cdot 1{,}4\,\frac{\text{g}}{\text{cm}^3} \\
                            &\approx 5{,}2\,\text{g}"/>
                        Das Gewicht müssen wir nun mit 100.000 multiplizieren, um das Gewicht von 100.000 Flaschen zu bekommen:
                        <BlockMath math="5{,}2\,\text{g} \cdot 100.000 &= 520.000\,\text{g} \\
                            &= 520\,\text{kg}"/>
                        Der Flaschenkörper wiegt 30{thinsp}g, das macht auf 100.000 Flaschen:
                        <BlockMath math="30\,\text{g} \cdot 100.000 &= 3.000.000\,\text{g} \\
                            &= 3.000\,\text{kg}"/>
                        Somit sind wir insgesamt bei <InlineMath math="520\,\text{kg} + 3.000\,\text{kg} = 3.520\,\text{kg}"/>.
                    </ListItem>
                    <ListItem>
                        Wenn vorher 3.000{thinsp}kg Plastik recycled wurden, so sind es jetzt 3.520{thinsp}kg. Das ist eine Erhöhung um den Faktor <InlineMath math="\frac{3.520\,\text{kg}}{3.000\,\text{kg}} = 1{,}17"/>. Werden also wirklich alle Flaschendeckel recycled, so entspricht das einer Zunahme von 17%.
                    </ListItem>
                </List>
            </Lösung>
        </CheckableBlockquote>
    </Fragment>
    
}
