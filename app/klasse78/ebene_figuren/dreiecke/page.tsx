import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { CheckableHeading } from "@/components/CheckableHeading";
import { BlockMath } from "@/components/CustomMath";
import { Hinweis } from "@/components/Hinweis";
import Image from "@/components/Image";
import { ImageCaption } from "@/components/ImageCaption";
import { Lösung } from "@/components/Lösung";
import thinsp from "@/components/thinsp";
import { Divider, Flex, List, ListItem, Mark, Space } from "@mantine/core";
import { Metadata } from "next";
import { InlineMath } from "react-katex";
import { Fragment } from "react/jsx-runtime";

export const metadata: Metadata = {
    title: "Dreiecke – zuzule",
};

export default function Dreiecke() {
    return (
        <Fragment>
            <CheckableHeading title="Das Dreieck">
                Dreiecke sind die einfachsten Figuren, die du in der Ebene zeichnen kannst. Eine Figur mit zwei Punkten gibt es nicht mehr, da dann nur noch eine Linie übrig bleibt.
                <CheckableHeading title="Definition" titleOrder={2}>
                    Ein Dreieck ist eine Figur, die 3 Eckpunkte hat. Du kannst also ein beliebiges Dreieck zeichnen, wenn du zuerst drei Punkte aufzeichnest und diese dann mit Linien verbindest.
                    <Image src="/Dreiecke/DreieckKonstruktion.webp" width={1350} height={750} h={450} alt="Links sind zweimal drei Punkte zu sehen, die die Eckpunkte von zwei Dreiecken bilden. Rechts sind sie dann mit Linien zu vollständigen Dreiecken verbunden." />
                </CheckableHeading>
                Die zwei Seiten, die bei einem Dreieck einen Winkel einschließen, haben einen besonderen Namen: <b>Schenkel</b>. Der Name erinnert nicht umsonst an Ober- und Unterschenkel. Wenn du dich mit gespreizten Beinen auf den Boden setzt, dann schließen deine Oberschenkel genau so einen Winkel ein, wie es die Schenkel bei einem Dreieck tun.
                <Image src="/Dreiecke/WinkelSchenkel.webp" width={1350} height={750} h={375} alt="Zwei Kinder, die hochspringen. In dem Schatten des linken Kindes ist ein Dreieck angedeutet, in dem ein Winkel zwischen zwei Schenkeln eingeschlossen ist." />
                Welche Seiten du in einem Dreieck als <Mark c={"teal.9"}>Schenkel</Mark> bezeichnest, hängt dabei immer von deiner Perspektive ab, also über welchen Winkel du sprichst.
                <Image src="/Dreiecke/Schenkel2.webp" width={1350} height={750} h={375} alt="Dreimal das gleiche Dreieck. In jedem ist ein anderer Winkel und seine beiden Schenkel hervorgehoben." />
                Die dritte Seite wird dann immer <b>Basis</b> genannt.
            </CheckableHeading>
            <CheckableBlockquote icon="frage" title="Aufgabe: Dreiecke finden" titleOrder={2}>
                Finde möglichst viele Dreiecke in der Konstruktion unten. Jede Möglichkeit ist erlaubt!
                <Image src="/Dreiecke/DreieckeFinden.webp" width={800} height={800} h={400} alt="Ein Quadrat vor einem karierten Hintergrund. Die Diagonalen sind eingezeichnet sowie die horizontale Mittellinie." />
                <Lösung title="Lösung" id="lösungdreieckefinden" titleOrder={3}>
                    Unten sind bereits einige – aber nicht alle! – Dreiecke angegeben. Findest du noch mehr?
                    <Flex>
                        <Image src="/Dreiecke/DreieckeFinden_Lösung1.webp" width={800} height={800} h={400} alt="Ein Lösungsvorschlag" flex={"1 1 300px"} />
                        <Image src="/Dreiecke/DreieckeFinden_Lösung2.webp" width={800} height={800} h={400} alt="Ein Lösungsvorschlag" flex={"1 1 300px"} />
                        <Image src="/Dreiecke/DreieckeFinden_Lösung3.webp" width={800} height={800} h={400} alt="Ein Lösungsvorschlag" flex={"1 1 300px"} />
                        <Image src="/Dreiecke/DreieckeFinden_Lösung4.webp" width={800} height={800} h={400} alt="Ein Lösungsvorschlag" flex={"1 1 300px"} />
                    </Flex>
                </Lösung>
            </CheckableBlockquote>
            <CheckableHeading title="Besondere Dreiecke">
                Wie bei allen geometrischen Formen gibt es auch bei den Dreiecken ein paar besondere Exemplare, die wir genauer unter die Lupe nehmen sollten.
                <CheckableHeading title="Gleichseitiges Dreieck" titleOrder={2}>
                    Hier handelt es sich um den einfachsten dieser Kandidaten. Wie der Name schon sagt, hat es <b>drei gleiche Seiten</b>.
                    <Flex>
                        <Image src="/Dreiecke/dreieckestäbchen/dreieckGleichseitig1.webp" width={6000} height={4000} alt="Ein gleichseitiges Dreieck aus Stäbchen." flex={"1 1 300px"} />
                        <Image src="/Dreiecke/dreieckestäbchen/dreieckGleichseitig2.webp" width={6000} height={4000} alt="Ein gleichseitiges Dreieck aus Zahnstochern." flex={"1 1 300px"} />
                    </Flex>
                    <CheckableBlockquote icon="frage" titleOrder={3} title="Aufgabe: Gleichseitige Dreiecke bauen">
                        <List type="ordered">
                            <ListItem>Bilde 3 gleichseitige Dreiecke mit Gegenständen aus deinem Haushalt.</ListItem>
                            <ListItem>Messe bei jedem Dreieck mit einem Geodreieck die Winkel. Schreibe deine Beobachtungen auf.</ListItem>
                            <ListItem>
                                Beantworte damit die Frage, ob es auch gleich<b>winklige</b> Dreiecke gibt.
                            </ListItem>
                        </List>
                        <Hinweis title="Hinweis zu 1)" titleOrder={4} id="hinweis-gleichseitigeDreiecke">
                            Schau dir die beiden Beispiele vor der Aufgabe an: Wenn du drei gleiche Gegenstände findest, kannst du daraus deine eigenen Dreiecke legen.
                        </Hinweis>
                        <Lösung title="Lösung" titleOrder={4} id="lösung-gleichseitigeDreiecke">
                            <List type="ordered">
                                <ListItem>Schau dir die beiden Beispiele oben an.</ListItem>
                                <ListItem>
                                    Wenn du mit einem Geodreieck die Winkel in deinen Dreiecken misst, solltest du bei jedem Winkel ungefähr <InlineMath math="60°" /> messen können.
                                </ListItem>
                                <Flex>
                                    <ImageCaption src="/Dreiecke/dreieckestäbchen/gleichseitiglinks.webp" width={2573} height={2573} alt="Ein gleichseitiges Dreieck. an dem linken Winkel ist ein Geodreieck angelegt und zeigt 60° an.." flex={"1 1 300px"}>
                                        Ein Winkel von ca. <InlineMath math="60°" />
                                    </ImageCaption>
                                    <ImageCaption src="/Dreiecke/dreieckestäbchen/gleichseitigrechts.webp" width={2472} height={2472} alt="Ein gleichseitiges Dreieck. an dem rechten Winkel ist ein Geodreieck angelegt und zeigt." flex={"1 1 300px"}>
                                        Ein Winkel von ca. <InlineMath math="60°" />.
                                    </ImageCaption>
                                    <ImageCaption src="/Dreiecke/dreieckestäbchen/gleichseitigoben.webp" width={2727} height={2728} alt="Ein gleichseitiges Dreieck. an dem oberen Winkel ist ein Geodreieck angelegt und zeigt." flex={"1 1 300px"}>
                                        Ein Winkel von ca. <InlineMath math="60°" />.
                                    </ImageCaption>
                                </Flex>
                                <ListItem>
                                    Ja, es gibt auch gleichwinklige Dreiecke. Tatsächlich ist jedes gleich<b>seitige</b> Dreieck auch gleich<b>winklig</b>, da dort jeder Winkel genau <InlineMath math="60°" /> beträgt. Umgekehrt ist jedes gleichwinklige Dreieck auch gleichseitig.
                                    <Divider />
                                    Mathematisch kann man dazu auch schreiben:
                                    <BlockMath math="\text{Ein Dreieck ist gleichwinklig} \Leftrightarrow \text{Ein Dreieck ist gleichseitig}"></BlockMath>
                                    Die Aussagen sind also <b>äquivalent</b> zueinander
                                </ListItem>
                            </List>
                        </Lösung>
                    </CheckableBlockquote>
                </CheckableHeading>
                <CheckableHeading title="Gleichschenkliges Dreieck" titleOrder={2}>
                    Im Gegensatz zum gleichseitigen Dreieck sind hier nur zwei der drei Seiten gleich lang. Da zwei von drei Seiten in einem Dreieck immer benachbart sind und damit einen Winkel einschließen, ist es gleich<b>schenklig</b>.
                    <Flex>
                        <Image src="/Dreiecke/dreieckestäbchen/dreieckGleichschenklig1.webp" width={6000} height={4000} alt="Ein gleichschenkliges Dreieck aus zwei Stäbchen und einem Zahnstocher." flex={"1 1 300px"} />
                        <Image src="/Dreiecke/dreieckestäbchen/dreieckGleichschenklig2.webp" width={6000} height={4000} alt="Ein gleichseitiges Dreieck aus zwei Spießen und einem Zahnstocher." flex={"1 1 300px"} />
                    </Flex>
                    <CheckableBlockquote icon="frage" title={"Aufgabe: Gleichschenkliges Dreieck"} titleOrder={3}>
                        <List type="ordered">
                            <ListItem>Bilde 3 gleichschenklige Dreiecke mit Gegenständen aus deinem Haushalt.</ListItem>
                            <ListItem>Messe bei jedem Dreieck mit einem Geodreieck die Winkel. Schreibe deine Beobachtungen auf. Fällt dir etwas auf?</ListItem>
                        </List>
                        <Hinweis title="Hinweis zu 2)" titleOrder={4} id="hinweis-gleichschenkligeDreiecke">
                            Lege deine Dreiecke so genau wie möglich und messe dann die Winkel: Zwei der Winkel sollten dir ins Auge stechen!
                        </Hinweis>
                        <Lösung title="Lösung" titleOrder={4} id="lösung-gleichschenkligeDreiecke">
                            <List type="ordered">
                                <ListItem>Schau dir die beiden Beispiele oben an.</ListItem>
                                <ListItem>
                                    Wenn du die Winkel misst, wirst du feststellen, dass zwei Winkel besonders sind: Die Winkel zwischen der Basisseite und den Schenkeln sind nämlich gleich groß. Das ändert sich auch nicht, wenn du die Längen veränderst.
                                    <Flex>
                                        <ImageCaption src="/Dreiecke/dreieckestäbchen/gleichschenkliglinks.webp" width={2757} height={2757} alt="Ein gleichseitiges Dreieck, an dem linken Winkel ist ein Geodreieck angelegt und zeigt." flex={"1 1 300px"}>
                                            Ein Winkel von ca. <InlineMath math="80°" />.
                                        </ImageCaption>
                                        <ImageCaption src="/Dreiecke/dreieckestäbchen/gleichschenkligrechts.webp" width={3010} height={3010} alt="Ein gleichseitiges Dreieck, an dem rechten Winkel ist ein Geodreieck angelegt und zeigt." flex={"1 1 300px"}>
                                            Ein Winkel von ca. <InlineMath math="80°" />.
                                        </ImageCaption>
                                        <ImageCaption src="/Dreiecke/dreieckestäbchen/gleichschenkligoben.webp" width={2850} height={2850} alt="Ein gleichseitiges Dreieck, an dem oberen Winkel ist ein Geodreieck angelegt und zeigt." flex={"1 1 300px"}>
                                            Ein Winkel von ca. <InlineMath math="25°" />.
                                        </ImageCaption>
                                    </Flex>
                                    In dem Beispiel hier beträgt der Winkel zwischen den Schenkeln ca. <InlineMath math="25°" />, die beiden anderen Winkel betragen ca. <InlineMath math="80°" />.
                                </ListItem>
                            </List>
                        </Lösung>
                    </CheckableBlockquote>
                </CheckableHeading>
                <CheckableHeading title="Rechtwinkliges Dreieck" titleOrder={2}>
                    Vieleicht erinnerst du dich noch an den rechten Winkel, also einen Winkel mit <InlineMath math="90°" />. Dreiecke, die einen rechten Winkel enthalten, haben einige besondere Eigenschaften, die du insbesondere in der 9. und 10. Klasse kennenlernen wirst (Satz des Pythagoras). Die Länge der Seiten ist dabei egal, entscheidend ist nur, dass ein rechter Winkel vorkommt.
                    <Image src="/Dreiecke/rechtwinklig.webp" width={900} height={400} h={200} alt="Ein gleichseitiges Dreieck, an dem linken Winkel ist ein Geodreieck angelegt und zeigt." />
                </CheckableHeading>
                Du kennst nun also vier Arten von Dreiecken: Das allgemeine Dreieck, das gleichseitige, das gleichwinklige und das rechtwinklige. Ein Dreieck kann jedoch auch mehreren dieser Dreiecke entsprechen, also z.{thinsp}B. ein rechtwinkliges, gleichschenkliges Dreieck sein. Die Grafik unten zeigt, wie die Dreiecke zusammenhängen können.
                <Image src="/Dreiecke/Teilmengen.webp" width={1600} height={1000} h={500} alt="Ein Diagramm, welches zeigt, wie die verschiedenen Dreiecke zusammenhängen." />
                <CheckableBlockquote icon="frage" title="Aufgabe: Was ist es?" titleOrder={2}>
                    Um was für eine Art von Dreieck handelt es sich? Schätze nach Augenmaß oder benutze ein Geodreieck am Bildschirm.
                    <Image src="/Dreiecke/zuordnen.webp" width={1450} height={550} h={275} alt="Verschiedene Arten von Dreiecken." />
                    <Lösung id="lösung-zuordnen" titleOrder={3}>
                        <List type="ordered">
                            <ListItem>Das Dreieck hat unten links einen rechten Winkel, die Schenkel sind jedoch unterschiedlich lang. Daher ist es rechtwinklig.</ListItem>
                            <ListItem>Das Dreieck hat oben rechts einen rechten Winkel, die Schenkel sind gleich lang. Daher ist es sowohl ein rechtwinkliges, als auch gleichschenkliges Dreieck.</ListItem>
                            <ListItem>Auch wenn es wie ein gleichschenkliges Dreieck aussieht, ist die linke Seite etwas länger als die rechte. Daher ist das hier ein allgemeines Dreieck.</ListItem>
                            <ListItem>Alle Seiten sind gleich lang und alle Winkel gleich groß. Das ist ein gleichseitiges Dreieck.</ListItem>
                            <ListItem>Die beiden Schenkel, die den rechten Winkel einschließen, sind gleich lang. Daher ist es ein gleichschenkliges Dreieck.</ListItem>
                            <ListItem>Das Dreieck ist so verzerrt, dass es offensichtlich kein besonderer Fall ist. Es ist ein allgemeines Dreieck.</ListItem>
                        </List>
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>
            <CheckableHeading title="Winkelsumme im Dreieck">
                Vielleicht ist dir beim Messen der gleichseitigen und gleichschenkligen Dreiecke bereits die Summe der Winkel aufgefallen.
                <CheckableBlockquote title="Aha! Die Winkelsumme" icon="aha" titleOrder={2}>
                    Zeichne auf ein Blatt Papier ein beliebiges Dreieck. Schneide es aus und schneide dann jede Ecke so ab, dass sie möglichst groß ist. Lege die Ecken dann aneinander. Kannst du etwas feststellen?
                    <Lösung title="Lösung anzeigen" titleOrder={3} id="lösung-winkelsumme">
                        Es ist egal, wie das Dreieck aussieht, dass du gezeichnet und ausgeschnitten hast! Die Ecken werden zusammen immer unten eine gerade Kante haben. Das bedeutet, dass der eingeschlossene Winkel <InlineMath math="180°" /> beträgt.
                        <Image src="/Dreiecke/Winkelsumme.webp" width={1250} height={600} alt="Die Spitzen eines Dreiecks werden abgeschnitten und zusammengelegt, sodass sich ein Winkel von 180° ergibt." />
                        Das ganze gilt auch oben für die Beispiele des gleichseitigen und gleichschenkligen Dreiecks: In einem gleichseitigen Dreieck beträgt jeder Winkel <InlineMath math="60°" />. Da es drei Winkel gibt, ist die Winkelsumme <InlineMath math="3\cdot60° = 180°" />. <br />
                        Bei dem gleichschenkligen Dreieck oben sind zwei Winkel <InlineMath math="80°" />, der andere <InlineMath math="25°" /> – selbst mit der Messungenauigkeit und den etwas ungeraden Spießen ergibt sich hier (fast) ein Gesamtwinkel von <InlineMath math="180°" />.
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>
            <CheckableHeading title="Dreiecksungleichung">
                Vielleicht ist dir beim Konstruieren eines Dreiecks mit den Haushaltsgegenständen bereits aufgefallen, dass es dir nicht immer gelingt, aus drei gegebenen Seiten ein Dreieck zu machen. Das liegt nicht daran, dass du etwas falsch machst. Es gibt nämlich eine bestimmte Eigenschaft, die von einem Dreieck immer erfüllt sein muss: die <b>Dreiecksungleichung</b>! <br />
                <CheckableBlockquote title="Aufgabe: Dreiecksungleichung" icon="frage" titleOrder={2}>
                    Nehme dir ein paar Zahnstocher und eine Schere. Versuche nun, verschiedene Dreiecke zu legen, wobei du verschiedene Längen bei den Zahnstochern austestest. Erkennst du ein Muster?
                    <Lösung titleOrder={3} id="lösung-ungleichung">
                        Du wirst feststellen, dass sich manche Dreiecke legen lassen und andere nicht. Vielleicht ist dir aufgefallen, dass es nur funktioniert, ein Dreieck zu legen, wenn zwei der drei Seiten länger sind als die dritte.
                        <Flex>
                            <Image src="/Dreiecke/ungleichung/Zahnstocher_nebeneinander.webp" width={3000} height={3000} alt="Drei Zahnstocher. Der erste ist in der Mitte durchtrennt, der zweite ungefähr gedrittelt, der dritte ist ganz." flex={"1 1 300px"} />
                            <Image src="/Dreiecke/ungleichung/Zahnstocher_Dreieck.webp" width={3000} height={3000} alt="Ein Dreieck aus den Zahnstochern. Dabei wurde der ganze Zahnstocher, ein halber und der größere Teil des zertrennten verwendet." flex={"1 1 300px"} />
                            <Image src="/Dreiecke/ungleichung/Zahnstocher_kurz.webp" width={3469} height={3469} alt="Unten liegt der ganze Zahnstocher. Es konnte kein Dreieck gebildet werden, weil die Zahnstocherteile in Summe kürzer sind als der Zahnstocher darunter." flex={"1 1 300px"} />
                            <Image src="/Dreiecke/ungleichung/Zahnstocher_gleichlang.webp" width={3000} height={3000} alt="Unten liegt der ganze Zahnstocher. Es konnte kein Dreieck gebildet werden, weil die Zahnstocherteile in Summe genauso lang sind wie der Zahnstocher darunter." flex={"1 1 300px"} />
                        </Flex>
                        Auf dem ersten Bild kannst du sehen, wie die Zahnstocher zertrennt wurden: Der erste ist genau mittig zerteilt, der zweite etwas neben der Mitte, wodurch seine Teile unterschiedlich lang sind. <br />
                        Aus der Hälfte des ersten und dem längeren Teil des zweiten lässt sich ein Dreieck mit dem ganzen Zahnstocher legen. Sind die zertrennten Teile jedoch kürzer oder gleich lang wie der Zahnstocher darunter, dann ist es unmöglich, daraus ein Dreieck zu konstruieren.
                        <Divider />
                        Das können wir in einer Gleichung festhalten: Die Seiten <InlineMath>a</InlineMath>, <InlineMath>b</InlineMath> und <InlineMath>c</InlineMath> eines Dreiecks müssen die Dreiecksungleichung erfüllen. Es muss also gelten
                        <BlockMath math="a + b &> c \\ a + c &> b \\ b + c &> a" />
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>
            <CheckableHeading title="Flächeninhalt" titleOrder={1}>
                In vielen Fällen interessiert uns der Flächeninhalt von Dreiecken, insbesondere, da ein Dreieck eine sehr einfache Figur ist.
                <CheckableBlockquote title="Aha! Vieleck in Dreiecke zerteilen" icon="aha" titleOrder={2}>
                    Dreiecke sind so besonders, da sie die eine der einfachsten Formen sin. Ein Anwendungsgebiet von Dreiecken ist beim Modellieren an Computern: Hier werden beliebige Flächen oft in unzählige Dreiecke zerteilt. Der englische Begriff dazu ist <b>triangulate</b>.
                    <Flex>
                        <Image src="/Dreiecke/vieleckzudreieck.webp" width={1250} height={500} h={250} alt="Ein Vieleck wird in viele Dreiecke unterteilt" flex={"1 1 500px"} />
                        <Image src="/Dreiecke/triangulate.webp" width={1587} height={525} h={262} alt="Eine Kugel wird in viele Dreiecke unterteilt." flex={"1 1 500px"} />
                    </Flex>
                </CheckableBlockquote>
                Eine Form, die du vermutlich schon kennst, ist das Quadrat bzw. das Rechteck. Deren Flächen sind sehr einfach zu berechnen: Ein Quadrat mit der Seitenlänge <InlineMath>a</InlineMath> hat einen Flächeninhalt <InlineMath>A</InlineMath> von <InlineMath>A = a\cdot a</InlineMath>. Der Flächeninhalt eines Rechtecks ist kaum anders: Er ist <InlineMath>A = a \cdot b</InlineMath>.
                <Image src="/Prismen/RechteckFläche.webp" width={698} height={450} h={225} alt="Ein Rechteck mit der Fläche A und den Seiten a und b." />
                <Divider />
                Die Formel für ein Rechteck können wir nun nutzen, um den Flächeninhalt von Dreiecken zu berechnen. <br />
                Schau dir dazu das Bild unten an. Du nimmst ein beliebiges Dreieck mit und zerteilst es in der Mitte, indem du die Höhe <InlineMath>h</InlineMath> zu einer der Spitzen einzeichnest. <b>Wichtig:</b> Die Höhe steht immer senkrecht, also im 90°-Winkel, auf einer der Seiten. Wenn du das Dreieck verdoppelst und entlang der Höhe zerschneidest, dann bekommst du ein Rechteck heraus!
                <Image src="/Prismen/DreieckFläche.webp" width={1200} height={600} alt="Ein Dreieck mit der Höhe h und der Grundseite g. Die Höhe zerteilt es in zwei weitere Dreiecke mit den Flächen A1 und A2." />
                Den Flächeninhalt davon kannst du nun mit der Formel <InlineMath math="A_\text{Rechteck} = \textcolor{#3012B8}{g} \cdot \textcolor{#B81E46}{h}" /> berechnen. Da wir, um zum Rechteck zu gelangen, das Dreieck verdoppeln mussten, müssen wir den Flächeninhalt nun wieder halbieren, um zum Flächeninhalt vom Dreieck zu kommen, also:
                <BlockMath math="A_\text{Dreieck} = \frac{1}{2} \textcolor{#3012B8}{g}\cdot \textcolor{#B81E46}{h}" />
                <CheckableBlockquote title="Aufgabe: Flächeninhalt" icon="frage" titleOrder={2}>
                    Zeichne die folgenden Dreiecke ab und messe sie aus. Bestimme den Flächeninhalt.
                    <Image src="/Dreiecke/flächeninhaltDreieck.webp" width={950} height={600} alt="Drei Dreiecke mit verschiedenen Flächeninhalten." />
                    <Hinweis titleOrder={3}>In jedem Dreieck kannst du drei verschiedene Höhen einzeichnen – je nachdem, welche Seite du als Grundseite ansiehst. Welche Formel musst du benutzen, sobald du die Höhe eingezeichnet hast?</Hinweis>
                    <Lösung>
                        Unten ist ein Vorschlag gezeigt, wie die Höhe und die Grundseite gewählt werden kann.
                        <Image src="/Dreiecke/flächeninhaltDreieckLösung.webp" width={1500} height={600} alt="Die Drei Dreiecke mit einer gemessenen Grundfläche und der entsprechenden Höhe." />
                        <List type="ordered">
                            <ListItem>
                                Die Grundseite ist <InlineMath math="4{,}5\,\text{cm}" /> lang, die Höhe <InlineMath math="\textcolor{#B81E46}{3{,}5\,\text{cm}}" />. Daher beträgt die Fläche:
                                <BlockMath
                                    math="
                                    A &= 4{,}5\,\text{cm} \cdot \textcolor{#B81E46}{3{,}5\,\text{cm}} \\
                                        &= 15{,}75\,\text{cm}^2"
                                />
                            </ListItem>
                            <ListItem>
                                Die Grundseite ist <InlineMath math="4{,}5\,\text{cm}" /> lang, die Höhe <InlineMath math="\textcolor{#B81E46}{2{,}5\,\text{cm}}" />. Daher beträgt die Fläche:
                                <BlockMath
                                    math="
                                    A &= 4{,}5\,\text{cm} \cdot \textcolor{#B81E46}{2{,}5\,\text{cm}} \\
                                        &= 11{,}75\,\text{cm}^2"
                                />
                            </ListItem>
                            <ListItem>
                                Die Grundseite ist <InlineMath math="4{,}5\,\text{cm}" /> lang, die Höhe <InlineMath math="\textcolor{#B81E46}{3\,\text{cm}}" />. Daher beträgt die Fläche:
                                <BlockMath
                                    math="
                                    A &= 2{,}5\,\text{cm} \cdot \textcolor{#B81E46}{3\,\text{cm}} \\
                                        &= 7{,}5\,\text{cm}^2"
                                />
                            </ListItem>
                        </List>
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>
        </Fragment>
    );
}

// TODO - Textaufgabe hinzufügen als Transfer
//
