import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { CheckableHeading } from "@/components/CheckableHeading";
import { Lösung } from "@/components/Lösung";
import { Flex, Image, List, ListItem, Mark } from "@mantine/core";
import { BlockMath, InlineMath } from "react-katex";

export default function Kegel() {
    return (
        <div>
            <CheckableHeading title="Der Kegel">
                Kegel begegnen uns besonders im Sommer in Form von Eiswaffeln,
                ansonsten sieht man sie oft am Straßenrand in Form von
                Verkehrskegeln stehen oder im Meer als gewundene Muscheln.
                <Flex>
                    <Image
                        src="/Kegel/Eiswaffel.jpg"
                        width={2700}
                        height={3375}
                        alt="Eine Eiswaffel"
                    />
                    <Image
                        src="/Kegel/VerkehrskegelWellington.jpg"
                        width={1250}
                        height={1590}
                        alt="Sir Wellington mit einem Verkehrskegel auf dem Kopf"
                    />
                    <Image
                        src="/Kegel/Muschel.jpg"
                        width={3321}
                        height={4981}
                        alt="Eine kegelförmige Muschel"
                    />
                </Flex>
                Im Mathematikunterricht sind wir jedoch weniger am Vorkommen von
                Kegeln in unserer Umwelt interessiert, als vielmehr an der
                mathematischen Beschreibung: Was ist überhaupt ein Kegel und wie
                können wir das Volumen oder den Oberflächeninhalt von ihnen
                berechnen?
            </CheckableHeading>
            <CheckableHeading title="Definition">
                Ein Kegel hat einen Kreis als Grundfläche. Ziehen wir seinen
                Mittelpunkt senkrecht in die Höhe, so bekommen wir die
                Kegelspitze. Die verbinden wir nun mit jedem Punkt aus dem
                Kreis, sodass sich die Oberfläche bildet. Et voilà: Ein{" "}
                <b>gerader Kegel</b>!
            </CheckableHeading>
            <CheckableHeading title="Netz eines Kegels">
                Man könnte denken, dass es sehr schwer ist, das Netz eines
                Kegels aufzuzeichnen, weil er neben dem Kreis keine Kante hat.
                Genau das erleichtert uns aber die Arbeit, denn so können wir
                den Kegel <b>abrollen</b>. Schau dir das Video dazu an! (Video)
                {/* //TODO - Video von einem Kegel und seinem korresepondieren Kreis darunter. Kegel wird darauf gelegt und abgerollt. Dann markieren, wie weit Kegel 1x rollt, Netz ausschneiden und zusammenkleben => Zweimal der Gleiche Kegel */}
                
            </CheckableHeading>
            <CheckableBlockquote title="Aufgabe: Netze">
´
            </CheckableBlockquote>
            <CheckableHeading title="Oberfläche">    
                Die Grundfläche des Kegels können wir mit einem Zirkel einfach
                ausmessen, da sie ein Kreis ist. Ihre Fläche entspricht also:
                <BlockMath>G = \pi \cdot r_G^2</BlockMath>
                <Mark c={"desred"}>
                    <InlineMath>r_G</InlineMath>
                </Mark>{" "}
                meint dabei den Radius der Grundfläche. Durch das Abrollen des
                Kegels haben wir aber noch einen Kreis bekommen! Wir markieren
                uns, wie weit der Kegel mit genau einer Umdrehung kommt. Genau
                diese Fläche entspricht der <b>Mantelfläche</b> des Kegels. Der
                Radius des „Abrollkreises“ entspricht der Höhe{" "}
                <Mark c={"desblue"}>
                    <InlineMath>{String.raw`h_\text{Wand}`}</InlineMath>{" "}
                </Mark>
                unserer Kegelwand (aufpassen:{" "}
                <InlineMath>{String.raw`\textcolor{#3312B8}{h_\text{Wand}} \neq \textcolor{#12B886}{h}`}</InlineMath>
                ). Hier nochmal ein Bild zur Illustration:
                <Image
                    src="/Kegel/Kegel.png"
                    width={1200}
                    height={600}
                    alt="Ein Kegel mit seiner Mantelfläche"
                />
                Um die Mantelfläche zu berechnen, benötigen wir neben der
                Wandhöhe noch die Länge des Kreisbogens (im Bild schwarz). Diese
                entspricht aber gerade dem Umfang unserer Grundfläche, da der
                Mantel mit ihr bündig schließen muss. Deshalb können wir uns
                jetzt einen Trick zu nutze machen:
                <Flex>
                    <Image
                        src="/Kegel/Mantel1mod.png"
                        width={6000}
                        height={4000}
                        alt="Der Mantel eines Kegels"
                    />
                    <Image
                        src="/Kegel/Mantel2mod.png"
                        width={1250}
                        height={1590}
                        alt="Der Mantel eines Kegels zweimal zerteilt und nebeneinander gelegt"
                    />
                    <Image
                        src="/Kegel/Mantel4.jpg"
                        width={3321}
                        height={4981}
                        alt="Der Mantel eines Kegels viermal zerteilt und nebeneinander gelegt"
                    />
                    <Image
                        src="/Kegel/Mantel8.jpg"
                        width={3321}
                        height={4981}
                        alt="Der Mantel eines Kegels achtmal zerteilt und nebeneinander gelegt"
                    />
                    <Image
                        src="/Kegel/Mantel16mod.png"
                        width={3321}
                        height={4981}
                        alt="Der Mantel eines Kegels sechzehnmal zerteilt und nebeneinander gelegt"
                    />
                </Flex>
                Durch mehrfaches halbieren und aneinanderlegen der Mantelfläche
                entsteht ein <b>Rechteck</b>! Im letzten Bild sieht es zwar aus,
                als wäre es ein Parallelogramm, aber stell dir vor, wir würden
                es nochmal, nochmal, nochmal… zerteilen. Irgendwann ist die
                Strecke{" "}
                <Mark c="desblue">
                    <InlineMath>{String.raw`h_\text{Wand}`}</InlineMath>
                </Mark>{" "}
                dann senkrecht zur Strecke{" "}
                <InlineMath>{String.raw`\frac{U}{2}`}</InlineMath>. Die
                Mantelfläche <InlineMath>M</InlineMath> lässt sich also mit der
                Formel
                <BlockMath>
                    {String.raw`
                M = \frac{U}{2}\cdot \textcolor{#3312B8}{h_\text{Wand}}
                `}
                </BlockMath>
                berechnen!
                <CheckableBlockquote
                    titleOrder={2}
                    title="Kannst du es beweisen?"
                    icon="frage"
                >
                    Was geometrisch geht, geht auch mit Formeln. Kannst du die
                    Formel{" "}
                    <InlineMath>{String.raw`M = \frac{U}{2}\cdot \textcolor{#3312B8}{h_\text{Wand}}`}</InlineMath>{" "}
                    herleiten? Benutze dafür den Umfang der Grundfläche und das
                    „Tortenstück“, das der Mantel darstellt.
                    <Lösung titleOrder={3} title="Lösung" id="Lösung-Beweis">
                        Wir schreiben erstmal die Formeln für den Umfang der
                        Grundfläche auf.
                        <BlockMath>
                            {String.raw`
                    U = 2\pi r_G 
                    `}
                        </BlockMath>
                        Der Mantel bildet ein Kreissegment (das „Tortenstück“),
                        wenn man ihn abrollt. Dieses Segment hat einen
                        bestimmten Anteil an der Gesamtfläche des Kreises. Schau
                        dir das untere Bild dafür an!
                        <Image
                            src="/Kegel/MantelflächeGanz.png"
                            width={750}
                            height={750}
                            alt="Das Netz einer Mantelfläche als Anteil im ganzen Kreis"
                            h={{base: "auto", md: 375}}
                        />
                        Die Fläche des kompletten Kreises ist:
                        <BlockMath>
                            {String.raw`
                    A = \pi \cdot \textcolor{#3312B8}{h_\text{Wand}}^2 
                    `}
                        </BlockMath>
                        Den Anteil der Mantelfläche daran können wir aus den
                        Umfängen ableiten. Angenommen, das Netz des Mantels
                        entspricht exakt einem Viertelkreis. Dann hat es einen
                        Anteil von{" "}
                        <InlineMath>{String.raw`\frac{1}{4}`}</InlineMath> an
                        der Fläche und dem Umfang des kompletten Kreises.
                        Allgemein ausgedrückt:
                        <BlockMath>
                            {String.raw`
                    \begin{aligned}
                    M &= \frac{U}{U_\text{Gesamt}}\cdot A \quad \lvert \textsf{Einsetzen} \\ 
                        &= \frac{U}{2\cancel{\pi\textcolor{#3312B8}{h_\text{Wand}}}} \cdot \cancel{\pi} \textcolor{#3312B8}{h_\text{Wand}}^{\cancel{2}}\\ 
                        &= \frac{U}{2} \cdot \textcolor{#3312B8}{h_\text{Wand}}
                    \end{aligned}
                    `}
                        </BlockMath>
                        Damit haben wir die Formel hergeleitet!
                    </Lösung>
                </CheckableBlockquote>
                <CheckableBlockquote
                    titleOrder={2}
                    title="Aufgabe: Oberflächeninhalt"
                    icon="frage"
                >
                    Skizziere folgende Kegel und berechne ihren
                    Oberflächeninhalt.
                    <List type="ordered">
                        <ListItem>r = 3&thinsp;cm; h = 4&thinsp;cm</ListItem>
                        <ListItem>r = 1,5&thinsp;cm; h = 3&thinsp;cm</ListItem>
                        <ListItem>r = 10&thinsp;mm; h = 3,7&thinsp;cm</ListItem>
                    </List>
                    <Lösung
                        titleOrder={3}
                        title="Lösung"
                        id="Lösung-Oberfläche"
                    >
                        <Image
                            src="/Kegel/KegelOberflächen.png"
                            width={1400}
                            height={1000}
                            alt="Das Netz einer Mantelfläche als Anteil im ganzen Kreis"
                            h={500}
                        />
                    <List type="ordered">
                        <ListItem>
                            Grundfläche:
                            <BlockMath>
                                {String.raw`
                                \begin{aligned}
                                G &= \pi r_G^2 \\
                                    &= \pi \cdot (3\,\text{cm})^2 \\
                                    &\Rightarrow G \approx 28{,}27\,\text{cm}^2
                                \end{aligned}
                                `}
                            </BlockMath>
                            Für die Mantelfläche benötigen wir den Umfang der Grundfläche und die Höhe <InlineMath>{String.raw`h_\text{Wand}`}</InlineMath>
                            <BlockMath>
                                {String.raw`
                                \begin{aligned}
                                U &= 2\pi r_G  \\
                                    &= 2\pi \cdot  3\,\text{cm} \\
                                    &\Rightarrow U \approx 18{,}85\,\text{cm}
                                \end{aligned}
                                `}
                            </BlockMath>
                            <BlockMath>
                                {String.raw`
                                \begin{aligned}
                                h_\text{Wand} &= \sqrt{r_G^2 + h^2}  \\
                                    &= \sqrt{(3\,\text{cm})^2 + (4\,\text{cm})^2} \\
                                    &\Rightarrow h_\text{Wand} = 5\,\text{cm}
                                \end{aligned}
                                `}
                            </BlockMath>
                            Damit können wir die Mantelfläche <InlineMath>M</InlineMath> berechnen:
                            <BlockMath>
                                {String.raw`
                                \begin{aligned}
                                M &= \frac{U}{2} \cdot h_\text{Wand}  \\
                                    &= \frac{18{,}25\,\text{cm}}{2} \cdot 5\,\text{cm} \\
                                    &\Rightarrow M = 45{,}63\,\text{cm}^2
                                \end{aligned}
                                `}
                            </BlockMath>
                            Insgesamt ergibt das eine Oberfläche von 
                            <BlockMath>
                                {String.raw`
                                O = G + M = 28{,}27\,\text{cm}^2+ 45{,}63\,\text{cm}^2 = 73{,}9\,\text{cm}^2
                                `}
                                </BlockMath>
                            </ListItem>
                        <ListItem>
                            Grundfläche:
                            <BlockMath>
                                {String.raw`
                                \begin{aligned}
                                G &= \pi \cdot (1{,}5\,\text{cm})^2 \\
                                    &\Rightarrow G \approx 7{,}07\,\text{cm}^2
                                \end{aligned}
                                `}
                            </BlockMath>
                          Berechnen von Umfang und <InlineMath>{String.raw`h_\text{Wand}`}</InlineMath> für die Mantelfläche:
                            <BlockMath>
                                {String.raw`
                                \begin{aligned}
                                U &= 2\pi \cdot  1{,}5\,\text{cm} \\
                                    &\Rightarrow U \approx 9{,}42\,\text{cm}
                                \end{aligned}
                                `}
                            </BlockMath>
                            <BlockMath>
                                {String.raw`
                                \begin{aligned}
                                h_\text{Wand} &= \sqrt{(1{,}5\,\text{cm})^2 + (3\,\text{cm})^2} \\
                                    &\Rightarrow h_\text{Wand} \approx 3{,}35\,\text{cm}
                                \end{aligned}
                                `}
                            </BlockMath>
                            Berechnen der Mantelfläche <InlineMath>M</InlineMath>:
                            <BlockMath>
                                {String.raw`
                                \begin{aligned}
                                M &= \frac{9{,}42\,\text{cm}}{2} \cdot 3{,}35\,\text{cm} \\
                                    &\Rightarrow M = 15{,}78\,\text{cm}^2
                                \end{aligned}
                                `}
                            </BlockMath>
                            Insgesamt ergibt das eine Oberfläche von 
                            <BlockMath>
                                {String.raw`
                                O = 7{,}07\,\text{cm}^2+ 15{,}78\,\text{cm}^2 = 22{,}85\,\text{cm}^2
                                `}
                                </BlockMath>
                            </ListItem>
                        <ListItem>
                            Grundfläche:
                            <BlockMath>
                                {String.raw`
                                \begin{aligned}
                                G &= \pi \cdot (1\,\text{cm})^2 \\
                                    &\Rightarrow G \approx 3{,}14\,\text{cm}^2
                                \end{aligned}
                                `}
                            </BlockMath>
                          Berechnen von Umfang und <InlineMath>{String.raw`h_\text{Wand}`}</InlineMath> für die Mantelfläche:
                            <BlockMath>
                                {String.raw`
                                \begin{aligned}
                                U &= 2\pi \cdot  1\,\text{cm} \\
                                    &\Rightarrow U \approx 6{,}28\,\text{cm}
                                \end{aligned}
                                `}
                            </BlockMath>
                            <BlockMath>
                                {String.raw`
                                \begin{aligned}
                                h_\text{Wand} &= \sqrt{(1\,\text{cm})^2 + (3{,}7\,\text{cm})^2} \\
                                    &\Rightarrow h_\text{Wand} \approx 3{,}83\,\text{cm}
                                \end{aligned}
                                `}
                            </BlockMath>
                            Berechnen der Mantelfläche <InlineMath>M</InlineMath>:
                            <BlockMath>
                                {String.raw`
                                \begin{aligned}
                                M &= \frac{6{,}28\,\text{cm}}{2} \cdot 3{,}83\,\text{cm} \\
                                    &\Rightarrow M = 12{,}03\,\text{cm}^2
                                \end{aligned}
                                `}
                            </BlockMath>
                            Insgesamt ergibt das eine Oberfläche von 
                            <BlockMath>
                                {String.raw`
                                O = 3{,}14\,\text{cm}^2+ 12{,}03\,\text{cm}^2 = 15{,}17\,\text{cm}^2
                                `}
                                </BlockMath>
                            </ListItem>
                            </List>                    
                    </Lösung>
                </CheckableBlockquote>
            </CheckableHeading>
        </div>
    );
}
