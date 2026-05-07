import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { CheckableHeading } from "@/components/CheckableHeading";
import { Hinweis } from "@/components/Hinweis";
import Image from "@/components/Image";
import { Lösung } from "@/components/Lösung";
import thinsp from "@/components/thinsp";
import { Divider, List, ListItem, Mark } from "@mantine/core";
import { Metadata } from "next";
import { BlockMath } from "@/components/CustomMath";
import { Fragment } from "react/jsx-runtime";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
    title: "Vierecke – zuzule",
};

export default function Vierecke() {
    return (
        <Fragment>
            <CheckableHeading title="Das Viereck" titleOrder={1}>
                Die meisten Vierecke sind – obwohl sie eine Ecke mehr haben als Dreiecke – meistens einfacher zu handhaben. Sie kommen auch viel häufiger in unserem Alltag vor: Fenster sind meistens viereckig, Kartons haben eine viereckige Grundfläche, Postkarten, Schulhefte und -bücher sind rechteckig. „Das“ Viereck gibt es so natürlich nicht, denn im Laufe dieser Seite wirst du viele verschiedene Arten von Vierecken kennenlernen und wiederentdecken!
                <Image src="/Vierecke/schilder.webp" width={4462} height={3035} h={400} alt="Eine Sammlung von Schildern vor einer Wand." />
                Wenn du ein Viereck aus dem Kopf zeichnen würdest, dann hätte es vermutlich eine dieser beiden Formen:
                <Image src="/Vierecke/rechteck+quadrat.webp" width={1501} height={550} h={275} alt="Links ein Rechteck, rechts ein Quadrat." />
                Das ist zwar richtig, aber schränkt unsere Definition eines Vierecks ganz schön ein.
                <CheckableHeading title="Definition" titleOrder={2}>
                    Tatsächlich ist ein Viereck eine beliebige Fläche mit 4 Eckpunkten. Zeichnest du also vier Punkte auf ein Blatt und verbindest sie in einer kontinuierlichen Linie, die sich nicht schneidet, dann bekommst du ein <b>allgemeines Viereck</b>:
                    <Image src="/Vierecke/viereckkonstruktion.webp" width={1351} height={750} h={375} alt="Links sind zwei mal vier Punkte gezeichnet, welche auf der rechten Seite mit Linien so verbunden werden, dass zwei allgemeine Vierecke entstehen." />
                    <CheckableBlockquote title="Aufgabe: Ist das noch ein Viereck?" icon="frage" titleOrder={3}>
                        Findest du eine Möglichkeit, die Punkte eines Vierecks so zu verbinden, dass du das Viereck in der Mitte „verdrehst“? Was denkst du, ist das noch ein Viereck?
                        <Lösung id="lösung-verdreht" titleOrder={4}>
                            Du kannst die Eckpunkte über Kreuz verbinden, um ein verdrehtes (oder auch: überschlagenes) Viereck zu zeichnen:
                            <Image src="/Vierecke/verdrehtesviereck.webp" width={730} height={500} h={250} alt="Ein verdrehtes Viereck. Es hat 4 Eckpunkte, die über Kreuz miteinander verbunden sind." />
                            Es ist zwar ungewöhnlich, aber der „Punkt“ in der Mitte wird nicht als Eckpunkt angesehen, sondern einfach als Überkreuzung der Kanten. Damit ist die Form also immer noch ein Viereck. Trotzdem wird die Form meistens nur genannt, um wirklich <b>alle</b> Variationen von Vierecken abzudecken. Eine Rolle spielt sie im Alltag nämlich eher nicht.
                        </Lösung>
                    </CheckableBlockquote>
                </CheckableHeading>
            </CheckableHeading>
            <CheckableHeading title="Besondere Vierecke" titleOrder={1}>
                Aus der Unterstufe sollte dir das Quadrat, das Rechteck, die Raute und das Parallelogramm bereits bekannt vorkommen. Der Vollständigkeit halber siehst du alle unten im Bild.
                <Image src="/Vierecke/rechteckquadratrauteparallelogramm.webp" width={1501} height={950} h={475} alt="Oben links ein Rechteck, oben rechts ein Quadrat, unten links ein Parallelogramm, unten rechts eine Raute." />
                Weiß du noch, was jedes der Vierecke besonders macht?
                <Hinweis title="Hinweis: Eigenschaften von Quadrat, Rechteck, Raute, Parallelogramm" id="hinweis-qrrp" titleOrder={2}>
                    <List type="ordered">
                        <ListItem>
                            <b>Quadrat:</b> Alle vier Seiten sind gleich lang, wobei entgegengesetzte Seiten parallel zueinander sind und alle Winkel rechte Winkel sind.(
                        </ListItem>
                        <ListItem>
                            <b>Rechteck:</b> Entgegengesetzte Seiten sind gleich lang und parallel zueinander. Auch hier gibt es nur rechte Winkel
                        </ListItem>
                        <ListItem>
                            <b>Raute:</b> Entgegengesetzte Seiten sind gleich lang und parallel zueinander.
                        </ListItem>
                        <ListItem>
                            <b>Parallelogramm:</b> Entgegengesetzte Seiten sind gleich lang.
                        </ListItem>
                    </List>
                </Hinweis>
                <CheckableHeading title="Drachenviereck" titleOrder={2}>
                    Das <b>Drachenviereck</b> kennst du eventuell, wenn du schon einmal einen Drachen in der Luft steigen gelassen hast.
                    <Image src="/Vierecke/drachensteigen.webp" width={6000} height={4000} alt="Ein Drachen, der vor dem Himmel fliegt." />
                    Es sieht ähnlich aus wie eine Raute – hier sind jedoch nicht mehr alle Seiten gleich lang. Stattdessen hat es zwei Paare benachbarter Seiten, die gleich lang sind. Schau ins Bild unten, dann sollte es dir klar werden.
                    <Image src="/Vierecke/drachenviereck.webp" width={698} height={597} alt="Ein Drachenviereck." />
                </CheckableHeading>
                <CheckableHeading title="Trapez" titleOrder={2}>
                    Bei einem <b>Trapez</b> gibt es nur als Beschränkung, dass mindestens zwei Seiten parallel sein müssen.
                    <Image src="/Vierecke/trapez.webp" width={698} height={597} alt="Ein Trapez." />
                </CheckableHeading>
                <CheckableHeading title="Haus der Vierecke" titleOrder={2}>
                    Ein Viereck entspricht oft nicht nur einer einzigen Definition, sondern meist noch weiteren: Ein Parallelogramm ist z.{thinsp}B. auch ein Trapez, weil es gegenüberliegende, parallele Seiten hat. Und natürlich ist es auch ein allgemeines Viereck, da hier die einzige Bedingung ist, dass es vier Ecken hat.
                    <CheckableBlockquote title="Aufgabe: Haus der Vierecke" titleOrder={3} icon="frage">
                        Sortiere die folgenden Figuren ins Haus der Vierecke ein. Zeichne es dafür in dein Heft ab. Unten ist die allgemeinste Figur, nämlich das allgemeine Viereck, mit jedem weiteren Stockwerk wird die Definition enger, also die Figur genauer beschrieben.
                        <Image src="/Vierecke/hdvleer.webp" width={1550} height={1992} h={1000} alt="Ein „Haus der Vierecke“ mit 5 Etagen. Auf der untersten ist ein allgemeines Viereck eingezeichnet, auf der vorletzten rechts ein Rechteck." />
                        <Lösung titleOrder={4} id="lösung-hdv">
                            Das <b>allgemeine Viereck</b> im untersten Stockwerk hat keinerlei Restriktion, außer, dass es vier Ecken haben muss. Nun gibt es zwei Definitionen, die etwas lockerer sind als diese: Das <b>Drachenviereck</b> mit zwei gleichlangen, benachbarten Seiten oder das <b>Trapez</b> mit mindestens zwei gegenüberliegend parallelen Seiten. <br />
                            Das Dach kann auch bereits ausgefüllt werden mit einem <b>Quadrat</b>, da es keine engere Definition eines Vierecks gibt: Alle Seiten gleich lang und nur <InlineMath math="90°" />
                            -Winkel. <br />
                            Übrig sind dann noch das Rechteck, die Raute und das Parallelogramm. Über dem Drachenviereck kann weder das Parallelogramm noch das Rechteck stehen, da beide keine gleich langen benachbarten Seiten haben müssen. Also wohnt im 4. Stock links die <b>Raute</b>, wo alle Seiten gleich lang sein müssen.
                            <br /> Daneben muss dann das <b>Rechteck</b> wohnen, da hier alle gegenüberliegenden Seiten gleich lang und parallel sein müssen und alle Winkel 90° sein müssen. Übrig bleibt in Etage 3 das <b>Parallelogramm</b> mit parallelen und gleich langen gegenüberliegenden Seiten.
                            <Image src="/Vierecke/hdv.webp" width={1550} height={1992} h={1000} alt="Ein „Haus der Vierecke“ mit 5 Etagen, das komplett ausgefüllt ist. Auf der untersten ist ein allgemeines Viereck eingezeichnet, links darüber ein Drachenviereck. Rechts über dem allgemeinen ist ein Trapez, darüber ein Parallelogramm. In der Etage darüber ist links eine Raute, rechts ein Rechteck. Das Dach bildet ein Quadrat." />
                        </Lösung>
                    </CheckableBlockquote>
                </CheckableHeading>
                <CheckableHeading title="Beziehungen zwischen Vierecken" titleOrder={2}>
                    Das Haus der Vierecke kannst du vielleicht bereits ganz gut nach Bauchgefühl bestücken. Tatsächlich können wir es jedoch auch nach verschiedenen Kriterien aufbauen, indem wir die Vierecke über ihre Winkel oder ihre Symmetrien klassifizieren.
                    <CheckableHeading title="Vererben von Eigenschaften" titleOrder={3}>
                        Eigenschaften werden im Haus der Vierecke von unten nach oben vererbt. Schauen wir uns das bei einem Parallelogramm an. Hier müssen gegenüberliegende Seiten parallel sein. Also müssen auch die Figuren darüber – nämlich die Raute, das Rechteck und das Quadrat – parallele, gegenüberliegende Seiten haben. Ein Blick ins Haus zeigt, dass das tatsächlich stimmt. Man sagt auch, dass Rauten, Rechtecke oder Quadrate eine <b>Teilmenge</b> der Parallelogramme sind.
                        <CheckableBlockquote title="Aufgabe: Vererbeketten" icon="frage" titleOrder={4}>
                            Um ein Viereck zu beschreiben kann man eine Art „Vererbekette“ machen, aus der ersichtlich wird, welche Eigenschaften durch welche Form dazukommt. Ein Beispiel:
                            <BlockMath
                                center
                                math="\text{allgemeines Viereck} \\
                                \Downarrow \\ 
                                \underset{\text{mind. 2 gegenüberliegende, parallele Seiten}}{\text{Trapez}}\\
                                \Downarrow\\ 
                                \underset{\text{alle gegenüberliegenden Seiten sind parallel}}{\text{Parallelogramm}}"
                            />
                            Schreibe für die folgenden Formen eine Vererbekette auf:
                            <List type="ordered">
                                <ListItem>Rechteck</ListItem>
                                <ListItem>Raute</ListItem>
                            </List>
                            <Lösung id="lösung-vererbeketten1" titleOrder={5}>
                                <List type="ordered">
                                    <ListItem>
                                        <b>Rechteck:</b>
                                        <BlockMath
                                            center
                                            math="\text{allgemeines Viereck} \\
                                            \Downarrow \\ 
                                            \underset{\text{mind. 2 gegenüberliegende, parallele Seiten}}{\text{Trapez}}\\
                                            \Downarrow\\ 
                                            \underset{\substack{\text{alle gegenüberliegenden Seiten}\\ \text{sind parallel und gleich groß}}}{\text{Parallelogramm}} \\
                                            \Downarrow \\
                                            \underset{\text{alle Winkel betragen 90°}}{\text{Rechteck}}"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <b>Raute:</b> Entweder über das Drachenvierck:
                                        <BlockMath
                                            center
                                            math="\text{allgemeines Viereck} \\
                                            \Downarrow \\ 
                                            \underset{\text{mind. 2 gegenüberliegende, parallele Seiten}}{\text{Trapez}}\\
                                            \Downarrow\\ 
                                            \underset{\text{benachbarte Seiten sind gleich lang}}{\text{Drachenviereck}} \\
                                            \Downarrow \\
                                            \underset{\text{alle Seiten sind gleich lang}}{\text{Raute}}"
                                        />
                                        <br />
                                        Oder über das Parallelogramm:
                                        <BlockMath
                                            center
                                            math="\text{allgemeines Viereck} \\
                                            \Downarrow \\ 
                                            \underset{\text{mind. 2 gegenüberliegende, parallele Seiten}}{\text{Trapez}}\\
                                            \Downarrow\\ 
                                            \underset{\substack{\text{alle gegenüberliegenden Seiten}\\ \text{sind parallel und gleich groß}}}{\text{Parallelogramm}} \\
                                            \Downarrow \\
                                            \underset{\text{alle Seiten sind gleich lang}}{\text{Raute}}"
                                        />
                                    </ListItem>
                                </List>
                            </Lösung>
                        </CheckableBlockquote>
                    </CheckableHeading>
                    <CheckableHeading title="Betrachtung über Symmetrien" titleOrder={3}>
                        Die Vierecke können auch über ihre Symmetrien definiert werden, auch wenn diese nicht ganz eindeutig sind. Hier schauen wir also darauf, ob die Figuren irgendwo punkt- oder achsensymmetrisch sind. Schau dir z.{thinsp}B. das Rechteck an:
                        <Image src="/Vierecke/rechtecksymmetrien.webp" width={751} height={550} h={275} alt="Ein Rechteck mit seiner horizontalen und vertikalen Spiegelachse, sowie dem Drehzentrum in der Mitte" />
                        Ein Rechteck kann sowohl vertikal als auch horizontal gespiegelt werden. Zusätzlich hat es noch ein Drehzentrum in der Mitte, denn wenn es um 180° rotiert wird, liegt es wieder in sich selber.
                        <CheckableBlockquote icon="frage" title="Aufgabe: Symmetrien finden" titleOrder={4}>
                            Finde in den restlichen Vierecken Symmetrien und zeichne sie ein. Schreibe dabei auch den Winkel auf, um den es rotiert werden kann.
                            <Hinweis id="hinweis-symmetrien" titleOrder={5}>
                                Denke daran, dass Eigenschaften vererbt werden. Wenn also z.{thinsp}B. beim Rechteck eine vertikale und horizontale Spiegelachse existiert und eine <InlineMath math="180°" />
                                -Drehung möglich ist, dann muss das bei allen untergeordneten Figuren auch so sein.
                            </Hinweis>
                            <Lösung titleOrder={5} id="lösung-symmetrien">
                                <List>
                                    <ListItem>
                                        Das <b>allgemeine Viereck</b> und das <b>Trapez</b> haben keine Symmetrien.
                                    </ListItem>
                                    <ListItem>
                                        Das <b>Drachenviereck</b> kann nur vertikal gespiegelt werden, die Spiegelachse geht also von oben nach unten.
                                    </ListItem>
                                    <ListItem>
                                        Das <b>Parallelogramm</b> hat keine Spiegelachse. Wenn du es aber um <InlineMath math="180°" /> drehst, liegt es wieder in sich selber. Es hat also ein Drehzentrum.
                                    </ListItem>
                                    <ListItem>
                                        Die <b>Raute</b> und das <b>Rechteck</b> haben die gleichen Symmetrien: Sie haben beide eine horizontale und vertikale Spiegelachse und zusätzlich ein Drehzentrum mit 180°.
                                    </ListItem>
                                    <ListItem>
                                        Das <b>Quadrat</b> hat die meisten Symmetrien. Es hat ganze <InlineMath math="4" /> Spiegelachsen, da es auch diagonal gespiegelt werden kann! Außerdem genügt hier eine Drehung um <InlineMath math="90°" />, um es wieder in sich selbst zu legen.
                                    </ListItem>
                                </List>
                                <Image src="/Vierecke/hdvsymmetrie.webp" width={1551} height={1992} h={1000} alt="Das Haus der Vierecke, in jedem Viereck sind die entsprechenden Symmetrien eingezeichnet." />
                            </Lösung>
                        </CheckableBlockquote>
                    </CheckableHeading>
                    <CheckableHeading title="Betrachtung über Winkel" titleOrder={3}>
                        Vierecke können zusätzlich noch über ihre Winkel definiert werden. Wenn wir zusätzlich die Diagonalen mancher Vierecke hinzunehmen, ist die Definition eindeutig. Vergleichen wir z.{thinsp}B. die Raute mit dem Paralleloramm, so unterscheiden sie sich durch ihre Diagonalen, die senkrecht aufeinander stehen:
                        <Image src="/Vierecke/rauteparallelogrammwinkel.webp" width={1526} height={550} h={275} alt="Ein Rechteck und eine Raute mit wichtigen Winkeln." />
                        Bei beiden sind die gegenüberliegenden Winkel gleich groß, was hier durch die Farbe und deren bezeichnen gekennzeichnet wird. Bei der Raute stehen jedoch zusätzlich die Diagonalen senkrecht aufeinander, sie schließen also einen Winkel von <InlineMath math="90°" /> ein.
                        <CheckableBlockquote title="Aufgabe: Winkel finden" titleOrder={4} icon="frage">
                            Finde in den restlichen Vierecken gleich große Winkel und zeichne sie ein. Beachte dabei auch die Diagonalen!
                            <Hinweis id="hinweis-winkel" titleOrder={5}>
                                Denke daran, dass Eigenschaften vererbt werden. Wenn also z.{thinsp}B. beim Parallelogramm gegenüberliegende Winkel gleich groß sein müssen, so muss das bei allen untergeordneten Vierecken auch so sein.
                            </Hinweis>
                            <Lösung id="lösung-winkel" titleOrder={5}>
                                <List>
                                    <ListItem>
                                        Das <b>allgemeine Viereck</b> und das <b>Trapez</b> haben keine Winkel, die gleich groß sind. Auch die Diagonalen schneiden sich nicht im rechten Winkel.
                                    </ListItem>
                                    <ListItem>
                                        Im <b>Drachenviereck</b> muss zwei gegenüberliegende Winkel geben, die gleich groß sind. Außerdem schneiden sich die Diagonalen immer im rechten Winkel.
                                    </ListItem>
                                    <ListItem>
                                        Im <b>Parallelogramm</b> sind alle gegenüberliegenden Winkel immer gleich groß.
                                    </ListItem>

                                    <ListItem>
                                        In der <b>Raute</b> sind alle gegenüberliegenden Winkel gleich groß und die Diagonalen schneiden sich im rechten Winkel.
                                    </ListItem>
                                    <ListItem>
                                        Im <b>Rechteck</b> sind alle Winkel gleich groß und <InlineMath math="90°" />.
                                    </ListItem>
                                    <ListItem>
                                        Im <b>Quadrat</b> sind alle Winkel gleich groß und <InlineMath math="90°" />, außerdem schneiden sich die Diagonalen im <InlineMath math="90°" />
                                        -Winkel.
                                    </ListItem>
                                </List>
                                <Image src="/Vierecke/hdvwinkel.webp" width={1551} height={1992} h={1000} alt="Das Haus der Vierecke, in jedem Viereck sind gleich große Winkel eingezeichnet." />
                            </Lösung>
                        </CheckableBlockquote>
                    </CheckableHeading>
                </CheckableHeading>
            </CheckableHeading>
            <CheckableHeading title="Flächeninhalte">
                Du weißt vermutlich bereits, wie man die Fläche eines Quadrats oder eines Rechtecks berechnet: Ein Quadrat mit der Seitenlänge <InlineMath>a</InlineMath> hat einen Flächeninhalt <InlineMath>A</InlineMath> von <InlineMath>A = a\cdot a</InlineMath>. Der Flächeninhalt eines Rechtecks ist kaum anders: Er ist <InlineMath>A = a \cdot b</InlineMath>.
                <Image src="/Prismen/RechteckFläche.webp" width={698} height={450} h={225} alt="Ein Rechteck mit der Fläche A und den Seiten a und b." />
                Jetzt ist aber die Frage, wie sich die Flächeninhalte von etwas komplizierteren Rechtecken berechnen lassen, nämlich Trapezen oder Parallelogrammen?
                <CheckableHeading title="Flächeninhalt eines Parallelogramms" titleOrder={2}>
                    Die Fläche eines Parallelogramms ist nicht direkt anhand der Seitenlängen ersichtlich, da diese schief sind. Daher kannst du nicht die gleiche Formel wie bei einem Rechteck anwenden und die Seitenlängen miteinander multiplizieren. Es gibt aber eine praktische Möglichkeit, ein Parallelogramm in ein Rechteck umzuwandeln!
                    <CheckableBlockquote icon="frage" title="Aufgabe: Zerschneiden und Zusammenfügen" titleOrder={3}>
                        Wir können in ein Parallelogramm die Höhe einzeichnen:
                        <Image src="/Vierecke/parallelogrammhöhe.webp" width={651} height={350} h={175} alt="Ein Parallelogramm mit den Seitenlängen a und b und der Höhe h." />
                        Zeichne das Parallelogramm auf ein Stück Papier und zerschneide es so, dass du ein Rechteck mit den Seitenlängen a und <Mark c={"teal.9"}>h</Mark> herausbekommst. Berechne die Fläche folgender Parallelogramme durch zeichnen und messen:
                        <List type="ordered">
                            <ListItem>
                                <InlineMath math="4\,\text{cm}, \quad b = 1{,}5\,\text{cm}, \quad \alpha = 135°" />{" "}
                            </ListItem>
                            <ListItem>
                                <InlineMath math="7\,\text{cm}, \quad b = 3\,\text{cm}, \quad \alpha = 115°" />{" "}
                            </ListItem>
                            <ListItem>
                                <InlineMath math="5{,}4\,\text{cm}, \quad b = 2{,}3\,\text{cm}, \quad \alpha=102°" />{" "}
                            </ListItem>
                        </List>
                        <Lösung title="Teillösung: Zusammensetzen zum Rechteck" titleOrder={4}>
                            Du kannst das Parallelogramm entlang der Höhe zerschneiden.
                            <Image src="/Vierecke/parallelogrammverschiebung.webp" width={698} height={850} h={425} alt="Ein Parallelogramm wird entlang der Höhe zerschnitten und zu einem Rechteck zusammengesetzt." />
                            Dadurch bekommst du ein Rechteck mit den Seitenlängen a und h heraus. Der Flächeninhalt davon ist bekannt!
                        </Lösung>
                        <Lösung id="Teillösung: Flächeninhalte" titleOrder={4}>
                            Unten sind die optimalen Ergebnisse präsentiert. Wenn dein Ergebnis leicht davon abweicht, ist das kein Problem – wenn du etwas zeichnest und misst wird es immer etwas unterschiedlich sein zur Musterlösung.
                            <Divider />
                            Deine Parallelogramme sollten so aussehen:
                            <Image src="/Vierecke/parallelogrammegezeichnet.webp" width={1401} height={750} h={375} alt="Drei Parallelogramme, die nach der Aufgabenbeschreibung gezeichnet wurden." />
                            <List type="ordered">
                                <ListItem>
                                    Die Höhe des Parallelogrammst ist ca. <InlineMath math="1{,}1\,\text{cm}" />. Mit der Rechteckformel ergibt sich damit ein Flächeninhalt von: <BlockMath math="1{,}1\,\text{cm} \cdot 4\,\text{cm} = 4{,}4\,\text{cm}^2" />
                                </ListItem>
                                <ListItem>
                                    Die Höhe des Parallelogrammst ist ca. <InlineMath math="2{,}7\,\text{cm}" />. Damit ergibt sich ein Flächeninhalt von: <BlockMath math="2{,}7\,\text{cm} \cdot 7\,\text{cm} = 18{,}9\,\text{cm}^2" />
                                </ListItem>
                                <ListItem>
                                    Die Höhe des Parallelogrammst ist ca. <InlineMath math="2{,}3\,\text{cm}" />. Der Flächeninhalt ist hier: <BlockMath math="2{,}3\,\text{cm} \cdot 5{,}4\,\text{cm} = 12{,}4\,\text{cm}^2" />
                                </ListItem>
                            </List>
                        </Lösung>
                    </CheckableBlockquote>
                </CheckableHeading>
                <CheckableHeading title="Flächeninhalt eines Trapezes" titleOrder={2}>
                    Wenn du den Flächeninhalt eines Parallelogramms berechnen kannst, ist der eines Trapezes ein Klacks.
                    <CheckableBlockquote icon="frage" title="Aufgabe: Verdoppeln und halbieren" titleOrder={3}>
                        <List type="ordered">
                            <ListItem>Zeichne zwei identische Trapeze auf ein Blatt Papier und schneide sie aus. Lege sie so zusammen, dass du ein Parallelogramm herausbekommst.</ListItem>
                            <ListItem>Stelle eine Formel für den Flächeninhalt des ursprünglichen Trapezes auf.</ListItem>
                        </List>
                        <Lösung title="Teillösung: Zusammensetzen zum Parallelogramm" titleOrder={4}>
                            Wenn du das Trapez verdoppelst und auf den Kopf stellst, dann kannst du die beiden Seiten zusammenschieben und erhältst damit ein Parallelogramm:
                            <Image src="/Vierecke/trapezverschiebung.webp" width={951} height={900} h={450} alt="Ein Trapez wird verdoppelt und zusammengeschoben, um ein Parallelogramm mit doppeltem Flächeninhalt zu bekommen." />
                            Aber Achtung: Das erhaltene Parallelogramm hat den doppelten Flächeninhalt, da es ja aus <b>zwei</b> der ursprünglichen Trapeze besteht.
                        </Lösung>
                        <Lösung title="Teillösung: Herleiten der Formel" titleOrder={4}>
                            Für die Formel ziehst du die Flächenformel des Parallelogramms herbei, also <InlineMath math="A_\text{Parallelogramm}=\textcolor{#0D8762}{h} \cdot g" /> mit{" "}
                            <Mark c={"teal.9"}>
                                Höhe <InlineMath>h</InlineMath>
                            </Mark>{" "}
                            und Grundseite <InlineMath>g</InlineMath>.
                            <Image src="/Vierecke/trapezformel.webp" width={951} height={400} h={200} alt="Ein Parallelogramm bestehend aus zwei Trapezen. Die ursprünglichen Grundseiten der Trapeze sind eingetragen." />
                            Da das Parallelogramm hier aus zwei Trapezen besteht, entspricht die Fläche eines Trapezes der Hälfte der Fläche des Parallelogrammes:
                            <BlockMath
                                math="
                            A_\text{Trapez} = \frac{1}{2}A_\text{Parallelogramm}"
                            />
                            Außerdem besteht die Grundseite des Parallelogramms aus der Summe der Ober- und Unterseite des Trapezes, also:
                            <BlockMath
                                math="
                            g = a + b"
                            />
                            Damit ergibt sich als Flächenformel für ein einzelnes Trapez:
                            <BlockMath
                                math="
                            A_\text{Trapez} &= \frac{1}{2}A_\text{Parallelogramm} \\
                                &= \frac{1}{2}g \textcolor{#0D8762}{h} \\
                                &= \frac{1}{2}(a+b)\textcolor{#0D8762}{h} "
                            />
                        </Lösung>
                    </CheckableBlockquote>
                </CheckableHeading>
            </CheckableHeading>
            <CheckableHeading title="Winkelsumme">
                Vom Dreieck weißt du schon, dass die Winkelsumme insgesamt <InlineMath math="180°" /> beträgt. Außerdem weißt du, dass jedes Vieleck in Dreiecke unterteilbar ist. Diese zwei Dinge kannst du nun nutzen, um herauszufinden, wie groß die Winkelsumme in Vierecken sein muss!
                <CheckableBlockquote icon="aha" titleOrder={2} title="Aha! Die Winkelsumme">
                    Wie groß ist die Winkelsumme eines Vierecks? Zerteile dafür ein allgemeines Viereck so in zwei Dreiecke und nutze aus, dass deren Winkelsumme 180° beträgt.
                    <Lösung id="lösung-winkelsumme" titleOrder={3}>
                        Wenn wir eine Diagonale ins allgemeine Viereck zeichnen, so erhalten wir zwei Dreiecke:
                        <Image src="/Vierecke/viereckdurchzwei.webp" width={651} height={550} h={275} alt="Ein allgemeines Viereck mit einer Diagonalen, sodass es in zwei Dreiecke zerteilt wird." />
                        Dort können wir nun alle Winkel einzeichnen:
                        <Image src="/Vierecke/viereckdurchzweiwinkel.webp" width={651} height={550} h={275} alt="Ein allgemeines Viereck mit einer Diagonalen, sodass es in zwei Dreiecke zerteilt wird. Die Winkel sind markiert." />
                        Sie sind hier alle in unterschiedlichen Farben dargestellt, weil sie unterschiedlich groß sind. Wir wissen aber, dass die Winkelsumme eines Dreiecks 180° betragen muss. Die Winkel der Dreiecke ergeben zusammen 1:1 die Winkel des Vierecks. Deshalb muss die gesamte Winkelsumme <InlineMath math="2 \cdot 180° = 360°" /> entsprechen.
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>
        </Fragment>
    );
}
