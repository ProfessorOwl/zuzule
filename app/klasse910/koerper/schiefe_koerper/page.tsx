import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { CheckableHeading } from "@/components/CheckableHeading";
import Image from "@/components/Image";
import { ImageCaption } from "@/components/ImageCaption";
import { Lösung } from "@/components/Lösung";
import MBlockMath from "@/components/MBlockMath";
import thinsp from "@/components/thinsp";
import { Flex, List, ListItem, Mark, Space } from "@mantine/core";
import { BlockMath } from "@/components/CustomMath";
import { InlineMath } from "react-katex";
import { Fragment } from "react/jsx-runtime";

export default function SchiefeKoerper() {
    return (
        <Fragment>
            <CheckableHeading title="Schiefe Körper">
                Vielleicht weißt du schon, dass das Volumen von geraden und schiefen Prismen identisch ist – solange sie die gleiche Grundfläche und Höhe haben. Das folgt aus dem <b>Prinzip des Cavalieri</b>. Das Prinzip können wir auch auf weitere Körper erweitern, wie z.{thinsp}B. Pyramiden oder Kegel. Aber wie lässt sich dieses „intuitive“ Prinzip beweisen?
                <CheckableBlockquote title="Das Prinzip des Cavalieri" titleOrder={2} icon="exkurs">
                    Das Prinzip besagt, dass zwei Körper das gleiche Volumen besitzen, wenn sie in jeder Höhe die gleiche Schnittfläche besitzen. Vergleichen wir z.{thinsp}B. einen geraden mit einem schiefen Quader, die beide die gleiche Grundflächen wie Höhen haben.
                    <Image width={6000} height={4000} src={"/SchiefeKoerper/Schachteile.webp"} alt="Ein gerader und ein schiefer Stapel aus quadratischen Teilen" />
                    Beide Stapel bestehen aus <InlineMath math="10" /> gleichgroßen Teilstücken. In dem Beispiel sind sie relativ groß, kann man die Scheiben noch gut voneinander unterscheiden. Aber stell dir vor, wir machen sie dünner:
                    <Flex>
                        <ImageCaption h={250} src="/SchiefeKoerper/PapierstapelGerade.webp" width={6000} height={4000} alt="Ein gerader Stapel Papier">
                            Der Papierstapel ist gerade.
                        </ImageCaption>
                        <ImageCaption h={250} width={6000} height={4000} src={"/SchiefeKoerper/PapierstapelSchief.webp"} alt="Ein schiefer Stapel Papier">
                            Der Papierstapel ist schief.
                        </ImageCaption>
                    </Flex>
                    Die einzelnen Seiten sind nur schwer voneinander zu unterscheiden – aber beide Stapel haben exakt gleich viele Blätter. Es gilt also auch hier: Beide Stapel haben in der gleichen Höhe den gleichen Flächeninhalt, deshalb haben sie auch das gleiche Volumen.
                </CheckableBlockquote>
            </CheckableHeading>
            <CheckableHeading title="Schiefe Pyramiden">
                Wie bei einem Prisma kann man auch eine Pyramide in ganz viele Scheiben zerteilen. Das könnte dann z.{thinsp}B. so aussehen:
                <Image width={6000} height={4000} src={"/SchiefeKoerper/GeradePyramide.webp"} alt="Eine gerade Pyramide aus vielen Schichten Pappe" />
                Verschiebt man nun jede Schicht, so bekommt man eine schiefe Pyramide. Es ist dabei egal, ob die Pyramide danach noch nach einer Pyramide aussieht oder nicht – solange man keine Scheibe herausnimmt, bleibt das Volumen gleich. Denn das Volumen jeder einzelnen Scheibe ändert sich nicht!
                <Flex>
                    <Image width={6000} height={4000} src={"/SchiefeKoerper/SchiefePyramide1.webp"} alt="Eine schiefe Pyramide aus vielen Schichten Pappe" flex={"1 1 300px"} />
                    <Image width={6000} height={4000} src={"/SchiefeKoerper/SchiefePyramide2.webp"} alt="Eine schiefe Pyramide aus vielen Schichten Pappe" flex={"1 1 300px"} />
                </Flex>
                Damit haben wir einen (visuellen) Beweis, dass der Satz des Cavalieri auch bei Pyramiden funktioniert.
                <CheckableBlockquote title="Aufgabe: Hält der Überhang?" titleOrder={2}>
                    Der <b>Preikestolen</b> ist eine Klippe in Norwegen, von der man eine spektakuläre Aussicht hat. Aus Sicherheitsgründen muss das Gewicht eines überhängenden Felsens berechnet werden.
                    <Image h={400} src="/SchiefeKoerper/preikestolen.webp" width={3131} height={4683} alt="Der Preikestolen von der Seite, der Felsvorsprung ist klar erkennbar" />
                    <List type="ordered">
                        <ListItem>
                            Der Felsvorsprung kann als rechteckige Pyramide angenähert werden. Berechne ihr Volumen anhand der Skizze.
                            <Image h={375} src="/SchiefeKoerper/PreikestolenSkizze.webp" width={1100} height={750} alt="Eine bemaßte Skizze des Vorsprunges" />
                        </ListItem>
                        <ListItem>
                            Der Felsen besteht überwiegend aus Granit, das eine Dichte <InlineMath math="\rho" /> von ca. <InlineMath math="2{,}7\frac{\text{g}}{\text{cm}^3}" /> hat. Berechne das gesamte Gewicht des Überhangs.
                        </ListItem>
                        <ListItem>
                            Ab einem Gewicht von <InlineMath math="13\,\text{t}" /> sollte der Felsen nicht mehr betreten werden, da er sonst Risse bekommen kann. Ist der Felsen sicher? Wie viele Personen können sicher darauf stehen, wenn eine Person im Schnitt <InlineMath math="80\,\text{kg}" /> wiegt?
                        </ListItem>
                    </List>
                    <Lösung title="Lösung" titleOrder={3} id="Lösung-Preikestolen">
                        <List type="ordered">
                            <ListItem>
                                Um das Volumen zu berechnen, benötigen wir neben der <Mark c={"teal.9"}>Höhe</Mark> von{" "}
                                <Mark c={"teal.9"}>
                                    <InlineMath math="12{,}6\,\text{m}" />
                                </Mark>{" "}
                                noch die Länge und Breite der Pyramide. In der Draufsicht ist das obere Dreieck gegeben, dessen <Mark c={"desred.9"}>Grundseite</Mark> wir mit dem Satz des Pythagoras berechnen können.
                                <MBlockMath
                                    desktop="g^2 &= (\textcolor{#B81E46}{2{,}8\,\text{m}})^2 + (\textcolor{#B81E46}{4{,}7\,\text{m}})^2 &&\lvert \sqrt{} \\
                            &= \sqrt{(\textcolor{#B81E46}{2{,}8\,\text{m}})^2 + (\textcolor{#B81E46}{4{,}7\,\text{m}})^2} \\
                            &\Rightarrow g \approx 5{,}52\,\text{m}"
                                    mobile="g^2 &= (\textcolor{#B81E46}{2{,}8\,\text{m}})^2 + (\textcolor{#B81E46}{4{,}7\,\text{m}})^2 \\
                            &\Downarrow \scriptsize{\sqrt{}} \\
                            &= \sqrt{(\textcolor{#B81E46}{2{,}8\,\text{m}})^2 + (\textcolor{#B81E46}{4{,}7\,\text{m}})^2} \\
                            &\Rightarrow g \approx 5{,}5\,\text{m}"
                                />
                                Die rechteckige Grundfläche der Pyramide hat damit die Maße{" "}
                                <Mark c={"teal.9"}>
                                    <InlineMath math="12{,}6\,\text{m}" />
                                </Mark>{" "}
                                mal{" "}
                                <Mark c={"desred.9"}>
                                    <InlineMath math="5{,}5\,\text{m}" />
                                </Mark>
                                . Um die <Mark c={"desblue.9"}>Höhe</Mark> zu berechnen, die auf diesem Rechteck steht, müssen wir erneut die Draufsicht verwenden.
                                <Space />
                                Die Grundseite nimmt bis zur <Mark c={"desblue.9"}>Höhe</Mark>{" "}
                                <Mark c={"desred.9"}>
                                    <InlineMath math="77\,\%" />
                                </Mark>{" "}
                                Platz ein. Die Länge bekommen wir so:
                                <BlockMath math="0{,}77 \cdot 5{,}5\,\text{m} = 4,3\,\text{m}" />
                                Wir verwenden erneut den Satz des Pythagoras:
                                <MBlockMath
                                    desktop="(4,3\,\text{m})^2 + h^2 &= \textcolor{#B81E46}{4,7\,\text{m}}^2 &&\lvert -(4,3\,\text{m})^2 \\
                            h^2 &= \textcolor{#B81E46}{4,7\,\text{m}}^2 -4,3\,\text{m})^2 &&\lvert \sqrt{} \\
                            h &= \sqrt{\textcolor{#B81E46}{4,7\,\text{m}}^2 -4,3\,\text{m})^2} \\
                            &\Rightarrow h \approx 1,9\,\text{m}"
                                    mobile="(4,3\,\text{m})^2 + h^2 &= \textcolor{#B81E46}{4,7\,\text{m}}^2 \\
                            &\Downarrow \scriptsize{-(4,3\,\text{m})^2} \\
                            h^2 &= \textcolor{#B81E46}{4,7\,\text{m}}^2 -4,3\,\text{m})^2 \\
                            &\Downarrow \scriptsize{\sqrt{}} \\
                            h &= \sqrt{\textcolor{#B81E46}{4,7\,\text{m}}^2 -4,3\,\text{m})^2} \\
                            &\Rightarrow h \approx 1,9\,\text{m}"
                                />
                                Damit haben wir alle Maße, um das Pyramidenvolumen zu berechnen:
                                <BlockMath
                                    math="V &= \frac{1}{3}Gh \\
                        &= \frac{1}{3} \cdot 12{,}6\,\text{m} \cdot 5{,}5\,\text{m}\cdot 1{,}9\,\text{m} \\
                        &\Rightarrow V \approx 43,89\,\text{m}^3"
                                />
                            </ListItem>
                            <ListItem>
                                Um das Gewicht des Vorsprungs auszurechnen, müssen wir die der Dichte und des Volumen aneinander anpassen, sodass beides entweder cm<sup>3</sup> oder m<sup>3</sup> verwendet.
                                <MBlockMath
                                    desktop="V &= 43,89\,\text{m}^3 &&\lvert 1\,\text{m} = 100\,\text{cm} \\
                            &= 43,89\cdot(100\,\text{cm})^3 \\
                            &= 43,89 \cdot 1.000.000\,\text{cm}^3 \\
                            &\Rightarrow V = 4.389.000\,\text{cm}^3"
                                    mobile="V &= 43,89\,\text{m}^3 \\
                            &\Downarrow \scriptsize{1\,\text{m} = 100\,\text{cm}} \\
                            &= 43,89\cdot(100\,\text{cm})^3 \\
                            &= 43,89 \cdot 1.000.000\,\text{cm}^3 \\
                            &\Rightarrow V = 4.389.000\,\text{cm}^3"
                                />
                                Die Masse bestimmen wir durch multiplizieren der Dichte mit dem Volumen:
                                <BlockMath
                                    math="m &= \rho \cdot V \\
                            &= 2{,}7\frac{\text{g}}{\cancel{\text{cm}^3}} \cdot 4.389.000\,\cancel{\text{cm}^3} \\
                            &= 11.850.300\,\text{g} \\
                            &= 11.850,3\,\text{kg} \\
                            &\approx 11{,}85\,\text{t}"
                                />
                                Der Felsvorsprung wiegt also <InlineMath math="11{,}85\,\text{t}" />!
                            </ListItem>
                            <ListItem>
                                Der Felsen wiegt weniger als <InlineMath math="13\,\text{t}" /> und ist damit erst einmal sicher. Es werden noch <InlineMath math="13\,\text{t} - 11{,}85\,\text{t} = 1{,}15\,\text{t}" /> benötigt, damit er instabil wird. Um dieses Gewicht zu erreichen sind <InlineMath math="1150\,\text{kg} : 80\,\frac{\text{kg}}{\text{Person}} \approx 15\,\text{Personen}" /> notwendig, die gleichzeitig auf dem Felsen stehen.
                            </ListItem>
                        </List>
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>

            <CheckableHeading title="Schiefe Kegel">
                Den Beweis für den Satz des Cavalieri können wir uns hier sparen – wir können uns nämlich zu Nutze machen, dass Kegel sehr nah mit den Pyramiden verwandt sind. Im Bild wird gezeigt, wie man durch Erhöhen der Eckenzahl von einer Pyramide zu einem Kegel kommt.
                <Image h={325} src="/Kegel/PyramidezuKegel.webp" width={1650} height={650} alt="Es sind vier Pyramiden nebeneinander dargestellt. Zuerst mit einer dreieckigen Grundfläche, dann mit einer sechseckigen, zwölfeckigen und vierundzwanzigeckigen. Die letzte Pyramide sieht fast aus wie ein Kegel" />
                Ein Kegel ist nichts anderes als eine regelmäßige Pyramide mit unendlich vielen Ecken!
            </CheckableHeading>
            <CheckableBlockquote title="Aufgabe: Fehlendes Maß bestimmen" titleOrder={1}>
                Bestimme von den drei Körpern jeweils das fehlende Maß.
                <Image h={500} src="/SchiefeKoerper/SchiefeKörperAufgabe.webp" width={1400} height={1000} alt="Eine bemaßte Skizze des Vorsprunges" />
                <Lösung title="Lösung" titleOrder={2} id="Lösung-FehlendesMaß">
                    <List type="ordered">
                        <ListItem>
                            Volumenformel einer Pyramide: <InlineMath math="V = \frac{1}{3}Gh" /> Umstellen nach <InlineMath math="h" /> und einsetzen liefert:
                            <MBlockMath
                                desktop="V &= \frac{1}{3}G\textcolor{#0D8762}{h} &&\lvert \cdot 3 \\
                        3V &= G\textcolor{#0D8762}{h} &&\lvert :G \\
                        \frac{3V}{G} &= \textcolor{#0D8762}{h} \\
                        &\Rightarrow \textcolor{#0D8762}{h} = \frac{3\cdot 84}{4\cdot 6} = 10{,}5"
                                mobile="V &= \frac{1}{3}G\textcolor{#0D8762}{h} \\
                        &\Downarrow \scriptsize{\cdot 3} \\
                        3V &= G\textcolor{#0D8762}{h} && \\
                        &\Downarrow \scriptsize{:G} \\
                        \frac{3V}{G} &= \textcolor{#0D8762}{h} \\
                        &\Rightarrow \textcolor{#0D8762}{h} = \frac{3\cdot 84}{4\cdot 6} = 10{,}5"
                            />
                        </ListItem>
                        <ListItem>
                            Volumenformel eines Zylinders ist identisch mit der von Pyramiden. Einsetzen liefert:
                            <BlockMath
                                math="\textcolor{#0D8762}{V} &= \frac{1}{3}Gh \\
                        &= \frac{1}{3} \cdot \pi \cdot \textcolor{#B81E46}{2{,}5}^2 \cdot \textcolor{#B81E46}{6} \\
                        &\approx 39,27"
                            />
                        </ListItem>
                        <ListItem>
                            Auch wenn das schiefe Prisma eine unregelmäßige Form hat, hat es in jeder Höhe die gleiche Schnittfläche, denn alle vier Kanten verlaufen identisch in die Höhe. Wir können also den Satz des Cavalieri anwenden! Die Formel für ein Prisma lautet <InlineMath math="V = Gh" />. Umstellen und einsetzen liefert:
                            <MBlockMath
                                desktop="V &= \textcolor{#0D8762}{G}h &&\lvert :h \\
                        \frac{V}{h} &= \textcolor{#0D8762}{G} \\
                        &\Rightarrow \textcolor{#0D8762}{G} = \frac{90}{\textcolor{#B81E46}{15}} = 6"
                                mobile="V &= \textcolor{#0D8762}{G}h \\
                        &\Downarrow \scriptsize{:h} \\
                        \frac{V}{h} &= \textcolor{#0D8762}{G} \\
                        &\Rightarrow \textcolor{#0D8762}{G} = \frac{90}{\textcolor{#B81E46}{15}} = 6"
                            />
                        </ListItem>
                    </List>
                </Lösung>
            </CheckableBlockquote>
        </Fragment>
    );
}
