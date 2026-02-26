import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { CheckableHeading } from "@/components/CheckableHeading";
import { ImageCaption } from "@/components/ImageCaption";
import { Lösung } from "@/components/Lösung";
import { SuspenseCheckableHeading } from "@/components/SuspenseCheckableHeading";
import { Flex, Grid, Image, List, ListItem, Mark, SimpleGrid, Space } from "@mantine/core";
import { BlockMath, InlineMath } from "react-katex";

export default function Pyramiden() {
    return (
        <div>
            <SuspenseCheckableHeading title="Die Pyramide">
                Pyramiden haben auf Menschen schon lange eine Anziehungskraft – so haben schon die Maya und Ägypter Pyramiden gebaut, die teilweise noch bis heute stehen. Deswegen ist es nicht verwunderlich, dass sich auch Mathematiker für Pyramiden interessieren. Wir schauen uns hier die Grundlagen an und gehen auf die Eigenschaften von Pyramiden ein: Wie „baut“ man Pyramiden aus Papier? Wie bestimmt man deren Oberflächeninhalt oder Volumen?
                <Flex>
                    <Image
                        src="/pyramideägypten.jpg"
                        width={3888}
                        height={2202}
                        alt="Mehrere ägyptische Pyramiden"
                        h={250}
                    />
                    <Image
                        src="/pyramidemaya.jpg"
                        width={6000}
                        height={3927}
                        alt="Eine Pyramide der Maya"
                        h={250}
                    />
                </Flex>
            </SuspenseCheckableHeading>
            <CheckableHeading title="Definition">
                Eine Pyramide hat eine eckige Grundfläche, z.B. ein Dreieck oder ein Quadrat. Allgemein nennt man eckige Flächen auch <b>n-Ecke</b>. Den Mittelpunkt dieser Fläche ziehen wir nach oben, sodass wir die Pyramidenspitze bekommen. Verbinden wir nun alle Eckpunkte unserer Grundfläche mit der Spitze, so erhalten wir eine <b>gerade Pyramide</b>! 
            </CheckableHeading>
            <CheckableBlockquote icon="frage" title="Alles Pyramiden?">
                Welche der folgenden Abbildungen sind Pyramiden und welche nicht? Wenn ja, gib die Maße und Form der Grundfläche sowie die Höhe in cm an (2 Kästchen = 1&thinsp;cm).
                    <Image
                        src="/IstPyramide.png"
                        width={1000}
                        height={1000}
                        alt="Eine Pyramide der Maya"
                        h={500}
                    />
                <CheckableHeading title="Lösung" titleOrder={3}>
                    <Lösung> 
                    <List type="ordered">
                        <ListItem>Ja, eine sechseckige, gerade Pyramide. Durchmesser = 3&thinsp;cm, Höhe = 3&thinsp;cm.</ListItem>
                        <ListItem>Nein, es hat eine runde Grundfläche, daher ist es ein Zylinder.</ListItem>
                        <ListItem>Ja, eine quadratische, gerade Pyramide. Kantenlänge = 2&thinsp;cm, Höhe = 2,5&thinsp;cm. </ListItem>
                        <ListItem>Nein, das ist keine normale geometrische Form.</ListItem>
                        <ListItem>Ja, das ist eine rechteckige, schiefe Pyramide. Kantenlängen = 2 und 3&thinsp;cm, Höhe = 4&thinsp;cm </ListItem>
                    </List>
                    </Lösung>
                </CheckableHeading>
            </CheckableBlockquote>
            <CheckableHeading title="Volumenberechnung">
                Das Volumen von einer quadratischen Pyramide lässt sich sowohl experimentell als auch mathematisch gut herleiten. Fangen wir erstmal experimentell an!
                <CheckableHeading titleOrder={2} title="Experimentell">
                    Für das Experiment falten wir eine quadratische Pyramide und füllen sie mit Zucker. Dadurch können wir wiegen, wie viel Zucker sie enthält. Ihre Höhe soll dabei ihrer Kantenlänge entsprechen. Dafür müssen wir zuerst das Netz aufzeichnen. Als Seitenlänge wählen wir z.B. 5&thinsp;cm.
                    <Image
                        h={300}
                        src="/VolumenPyramide/PyramideNetz.jpg"
                        width={1200}
                        height={600}
                        alt="Das Netz einer Pyramide auf einem Din A4 Blatt"
                   />
                    Das Netz einer quadratischen Pyramide sieht aus wie ein Quadrat mit einem Dreieck auf jeder Seite. Die Höhe der Dreiecke ist nicht gleich der Höhe der Pyramide! Überlege dir, wie man sie berechnen kann!
                    <CheckableBlockquote title="Höhe der Dreieckswände" titleOrder={3}>
                        <Lösung>
                        Du kannst den Satz des Pythagoras verwenden, um die Pyramidenhöhe zu bestimmen. In dem Beispiel hier ist es eine quadratische Pyramide mit Seitenlänge 3 und Höhe 3. Wenn du die <Mark c={"desblue"}>Höhe</Mark> in einer der Wände einzeichnest siehst du, dass sie zusammen mit der <Mark c={"green"}>Pyramidenhöhe</Mark> und der <Mark c={"desred"}>halben Seitenlänge</Mark> ein rechtwinkliges Dreieck bildet. Wir können also den <b>Satz des Pythagoras</b> verwenden, um die Länge von <Mark c={"desblue"}>h<sub>Dreieck</sub></Mark> zu berechnen.
                        <BlockMath>
                            {String.raw`
                            \textcolor{#3312B8}{h_\text{Dreieck}} = \sqrt{1{,}5^2 + 3^2} = \sqrt{11{,}25} \approx 3,35
                            `}
                        </BlockMath>
                        Damit unsere Pyramide also eine Höhe von 3&thinsp;cm hat, muss die Höhe einer Dreieckswand ca. 3,35&thinsp;cm betragen.
                             <Image
                        h={300}
                        src="/VolumenPyramide/PyramideHöhe.png"
                        width={6000}
                        height={4000}
                        alt="Das Netz einer Pyramide auf einem Din A4 Blatt"
                    />
                    </Lösung>
                    <Space my="xs"/>
                    </CheckableBlockquote>

                    <SimpleGrid cols={2} my={"md"}>  
                        <ImageCaption
                            h={250}
                            src="/VolumenPyramide/PyramideNetzausgeschnitten.jpg"
                            width={6000}
                            height={4000}
                            alt="Das ausgeschnittene Netz mit einem Loch in der Mitte"
                        >
                            Das Netz schneidest du nun aus und schneidest ein Loch in Mitte, sodass wir später Zucker hineingießen können
                        </ImageCaption>
                        <ImageCaption
                            h={250}
                            src="/VolumenPyramide/PyramidePapier.jpg"
                            width={6000}
                            height={4000}
                            alt="Die zusammengeklebte Pyramide"
                        >
                            Die Pyramide klebst du vorsichtig mit Klebeband zusammen, sodass alle Kanten dicht sind!
                        </ImageCaption>
                        <ImageCaption
                            h={250}
                            src="/VolumenPyramide/PyramideWaageZubehör.jpg"
                            width={6000}
                            height={4000}
                            alt="Die Pyramide kopfüber in einem Glas auf einer Waage. Daneben ein Papiertrichter und ein Glas mit Zucker"
                        >
                            Die Pyramide stellst du nun kopfüber in einem Glas auf eine Waage und tarierst sie auf 0&thinsp;g. Zum Iinfüllen ist ein Trichter praktisch – wenn du keinen hast, kannst du dir einen aus Papier rollen.
                        </ImageCaption>
                        <ImageCaption
                            h={250}
                            src="/VolumenPyramide/PyramideWaageVoll.jpg"
                            width={6000}
                            height={4000}
                            alt="Die nun gefüllte Pyramide im Glas auf der Waage. Die Waage zeigt 43 Gram an"
                        >
                            Die Waage zeigt an, dass unsere Pyramide ca. 45&thinsp;g Zucker enthält.
                        </ImageCaption>
                    </SimpleGrid>
                Um nun von dem Gewicht auf das Volumen zu kommen, benötigen wir die Dichte des Zuckers. Für Glukose, also Haushaltszucker, beträgt sie <InlineMath>{String.raw`1{,}56\,\tfrac{\text{g}}{\text{mL}}`}</InlineMath>. Probiere selber, daraus das Volumen zu bekommen!
                <Lösung id="LösungZuckerDichte" titleOrder={3}>
                    Die Dichte hat als Einheit <InlineMath>{String.raw`\frac{\text{Gewicht}}{\text{Volumen}}`}</InlineMath>, bzw. mathematisch: <InlineMath>{String.raw`\rho = \frac{m}{V}`}</InlineMath>, wobei <InlineMath>\rho</InlineMath> die Dichte ist, <InlineMath>m</InlineMath> die Masse und <InlineMath>V</InlineMath> das Volumen. Wir kennen Dichte und Masse, also stellen wir nach <InlineMath>V</InlineMath> um:
                    <BlockMath>
                        {String.raw`
                        \begin{aligned}
                        \rho &= \frac{m}{V} &&\lvert \cdot V  \\
                        \rho \cdot V &= m &&\lvert \: \rho \\
                        V &= \frac{m}{\rho} 
                        \end{aligned}
                        `}
                    </BlockMath>
                Setzen wir die Dichte von <InlineMath>{String.raw`1{,}56\,\tfrac{\text{g}}{\text{mL}}`}</InlineMath> und die Masse von <InlineMath>{String.raw`43\,\text{g}`}</InlineMath> ein, so erhalten wir:
                    <BlockMath>
                        {String.raw`
                        \begin{aligned}
                        V = \frac{m}{\rho} = \frac{43\,\text{g}}{1{,}56\,\tfrac{\text{g}}{\text{mL}}} \approx 27,56\,\text{mL}
                        \end{aligned}
                        `}
                    </BlockMath>               
                     </Lösung>
                </CheckableHeading>
            <CheckableBlockquote icon="aha" title="Volumenformel experimentell">
                Mit dem experimentell berechneten Volumen können wir eine Formel für Pyramiden aufstellen, sodass wir ohne Zuckerfüllung das Volumen berechnen können. Vergleichen wir sie dazu mit einem Würfel, der die Pyramide genau umschließt. Seine Seitenlängen entsprechen also der Höhe der Pyramide.
                        <Image
                            h={375}
                            src="/VolumenPyramide/PyramideWürfel.png"
                            width={750}
                            height={900}
                            alt="Eine Pyramide in einem Quader."
                        />
                Nehmen wir die Seitenlänge der Pyramide, die wir gebastelt haben, also 5&thinsp;cm. Dann hat der Würfel ein Volumen von <InlineMath>{String.raw`a^3 = 5\,\text{cm}\cdot 5\,\text{cm}\cdot 5\,\text{cm} = 125\,\text{cm}^3`}</InlineMath>. Für unsere Pyramide bekamen wir experimentell ein Volumen von 27,57&thinsp;mL. Setzen wir das ins Verhältnis mit dem Würfel, so bekommen wir:
                <BlockMath>
                    {String.raw`
                    \text{Anteil Pyramide} = \frac{27{,}57\,\text{cm}^3}{125\,\text{cm}^3} \approx 0,22 \approx \frac{1}{5}
                    `}
                </BlockMath>
                Wenn wir einen Quader mit der Formel <InlineMath>{String.raw`V_\text{Quader} = G \cdot h`}</InlineMath> berechnen, so nimmt eine Pyramide laut unserem Experiment nur ein Fünftel des Volumens ein, also:
                <BlockMath>
                    {String.raw`
                    V_\text{Pyramide} = \frac{1}{5}G\cdot h
                    `}
                </BlockMath>
                Aber stimmt das auch mit der theoretischen Herleitung überein? Mit ihr bekommen wir ein eindeutiges Ergebnis!
            </CheckableBlockquote>
            <CheckableHeading title="Theoretisch" titleOrder={2}>
                Wir konstruieren uns erneut eine quadratische Pyramide in einem Würfel. Dieser soll diesmal aber die doppelte Höhe unserer Pyramide haben.
                         <Image
                            h={525}
                            src="/VolumenPyramide/PyramideinWürfelEinzeln.png"
                            width={1050}
                            height={850}
                            alt="Eine Pyramide in einem Quader."
                        />
            In diesen Würfel können wir jedoch nicht nur eine Pyramide packen, sondern tatsächlich <b>6 Stück</b>! Denn unter jede Grundseite passt eine weitere Pyramide, ohne, dass sie einer anderen in die Quere kommt.
                         <Image
                            h={525}
                            src="/VolumenPyramide/PyramideinWürfel.png"
                            width={1050}
                            height={850}
                            alt="Sechs Pyramiden in einem Quader."
                        />
            Das ist etwas schlecht vorzustellen, deshalb ist hier einmal ein Bild von den Pyramiden „herausgezogen“:
                        <Image
                            h={825}
                            src="/VolumenPyramide/PyramideinWürfelExplosion.png"
                            width={1650}
                            height={1700}
                            alt="Eine Pyramide in einem Quader."
                        />
            Mathematisch können wir das so formulieren:
            <BlockMath>
                {String.raw`
                V_\text{Quader} = 6 \cdot V_\text{Pyramide}
                `}
            </BlockMath>
            Kannst du daraus selber eine Formel für das Pyramidenvolumen herleiten? Denke dran: Der Quader ist doppelt so hoch wie eine der Pyramiden!
            <CheckableBlockquote title="Herleitung" titleOrder={3} icon="frage">
            <Lösung>
            Wir können also über die Volumenformel für einen Quader auf das Volumen einer Pyramide schließen! Für einen Quader gilt:
            <BlockMath>
                {String.raw`
                V_\text{Quader} = G \cdot h_\text{Quader}
                `}
            </BlockMath>
            mit der Grundfläche <InlineMath>G</InlineMath> und der Höhe <InlineMath>{String.raw`h_\text{Quader}`}</InlineMath>. Das können wir in die vorige Gleichung einsetzen, also bekommen wir:
            <BlockMath>
                {String.raw`
                \begin{aligned}
                V_\text{Quader} &= 6 \cdot V_\text{Pyramide} &&\lvert \text{Einsetzen:}\; V_\text{Quader} = G \cdot h_\text{Quader} \\
                G \cdot h_\text{Quader} &=  6 \cdot V_\text{Pyramide} &&\lvert \text{Einsetzen:}\; h_\text{Quader} = 2\cdot h_\text{Pyramide} \\
                G \cdot 2 \cdot h_\text{Pyramide} &=  6 \cdot V_\text{Pyramide} &&\lvert :6 \\
                G \cdot \frac{2}{6} \cdot h_\text{Pyramide} &= \cdot V_\text{Pyramide} \\
                V_\text{Pyramide} &= \frac{1}{3} G \cdot h_\text{Pyramide}
                \end{aligned}
                `}
            </BlockMath>
            Eine Pyramide ist also immer ein Drittel so groß wie der sie umgebende Quader!
            </Lösung>
            <Space my="xs"/>
            </CheckableBlockquote>
            </CheckableHeading>
            <CheckableBlockquote title="Aufgabe: Pyramidenrätsel">
                Es sind mehrere Pyramiden gegeben. Bestimme den Wert der Unbekannten!
                 <Image
                    h={500}
                    src="/Pyramidenrätsel.png"
                    width={1400}
                    height={1000}
                    alt="Mehrere Pyramiden als Aufgabenstellungen."
                />
            <Lösung title="Lösung" id="Lösung-Pyramidenrätsel">
                <List type="ordered">
                    <ListItem>
                    Nach Höhe umstellen und einsetzen:
                    <BlockMath>{String.raw`
                    \begin{aligned}
                    V &= \frac{1}{3}Gh &&\lvert \cdot \frac{3}{G} \\
                    \frac{3V}{G} &= h \\
                    \Rightarrow h &= \frac{3 \cdot 32}{4 \cdot 4} = \frac{96}{16} = 6
                    \end{aligned}
                    `}</BlockMath></ListItem>
                    <ListItem>
                        Nach Grundfläche umstellen und einsetzen:
                        <BlockMath>{String.raw`
                    \begin{aligned}
                    V &= \frac{1}{3}Gh &&\lvert \cdot \frac{3}{h} \\
                    \frac{3V}{h} &= G \\
                    &\Rightarrow G = \frac{3 \cdot 18}{9} = \frac{54}{9} = 6
                    \end{aligned}
                    `}</BlockMath>
                    </ListItem>                    
                    <ListItem>
                        Zuerst nach Grundfläche umstellen:
                        <BlockMath>{String.raw`
                    \begin{aligned}
                    V &= \frac{1}{3}Gh &&\lvert \cdot \frac{3}{h} \\
                    G &= \frac{3V}{h}\\
                    &\Rightarrow G = \frac{3\cdot 18\sqrt{3}}{6} = 9\sqrt{3}
                    \end{aligned}
                    `}</BlockMath>
                    Formel für Dreiecksgrundfläche: <InlineMath>{String.raw`G = \frac{1}{2}xh_\triangle`}</InlineMath>. Da es ein gleichseitiges Dreieck ist, gilt mit dem Satz des Pythagoras:
                     <BlockMath>{String.raw`
                        \begin{aligned}
                        x^2 &= h_\triangle^2 + \left(\frac{1}{2}x^2\right)^2 &&\lvert -\left(\frac{1}{2}x^2\right)^2\\
                        x^2 - \left(\frac{1}{2}x^2\right)^2 &= h_\triangle^2 &&\lvert \sqrt{}\\
                        h_\triangle &= \sqrt{x^2 - \left(\frac{1}{2}x^2\right)^2} \\
                         &= \sqrt{x^2 - \frac{1}{4}x^2} \\
                         &= \sqrt{\frac{3}{4}x^2} \\
                         &= \frac{\sqrt{3}}{2}x
                        \end{aligned}
                    `}</BlockMath>
                    Das können wir in die Formel für die Dreiecksfläche einsetzen und bekommen:
                     <BlockMath>{String.raw`
                        \begin{aligned}
                        G &= \frac{1}{2}xh_\triangle \\
                        &= \frac{1}{2}x\cdot \frac{\sqrt{3}}{2}x \\
                        &= \frac{\sqrt{3}}{4}x^2 &&\lvert \cdot \frac{4}{\sqrt{3}} \\
                        \frac{4}{\sqrt{3}}G &= x^2 &&\lvert \sqrt{} \\
                        x &= \sqrt{\frac{4}{\sqrt{3}}G} 
                        \end{aligned}
                    `}</BlockMath>
                    Jetzt das Ergebnis für <InlineMath>G</InlineMath> einsetzen, dann bekommen wir <InlineMath>x</InlineMath> heraus:
                    <BlockMath>{String.raw`
                    \begin{aligned}
                        x &= \sqrt{\frac{4}{\sqrt{3}}G} \\
                            &= \sqrt{\frac{4}{\sqrt{3}}\cdot9\sqrt{3}} \\
                            &= \sqrt{4 \cdot 9} \\
                            &= 6
                    \end{aligned}
                    `}</BlockMath>                     </ListItem>         

                    <ListItem>                    
                    Wieder erst nach Grundfläche umstellen, x als unbekannte Höhe bleibt vorhanden:
                    <BlockMath>{String.raw`
                    \begin{aligned}
                    V &= \frac{1}{3}Gx
                    \end{aligned}
                    `}</BlockMath>   
                    Die rechteckige Grundfläche berechnet sich nach <InlineMath>{String.raw`G = 6 \cdot \frac{1}{2}x = 3x`}</InlineMath>, das wir einsetzen können:
                    <BlockMath>{String.raw`
                    \begin{aligned}
                    V &= \frac{1}{3}Gx \\
                     &= \frac{1}{3}\cdot 3x \cdot x \\
                     &= x^2 \lvert \sqrt{} \\
                    x &= \sqrt{V} \\
                        &\Rightarrow x = \sqrt{25} = 5
                    \end{aligned}
                    `}</BlockMath>                      
                    </ListItem>
                 </List>
            </Lösung>
            </CheckableBlockquote>
            </CheckableHeading>
        <CheckableHeading title="Oberfläche">
            Neben dem Volumen ist auch die Oberfläche von Pyramiden wichtig, z.B. um die Menge an Ziegeln für ein Dach zu berechnen. Hier gibt es jedoch keine allgemeine Formel, denn die Oberfläche ist abhängig von der Anzahl der Seiten.
            
        </CheckableHeading>
            
        </div>
    );
}
