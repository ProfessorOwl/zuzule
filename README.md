# zuzuLe - Masterarbeit-Website

Eine auf Next.js basierende Lernwebsite, die die Kontrolle zurück zum Lehrer gibt.

## Voraussetzungen

- **Node.js** (Version 18 oder höher)
- **npm** oder **yarn** 
- **Python 3** (für das Bildkomprimierungsskript)

## Einrichtungsanweisungen

### 1. Repository klonen

```bash
git clone https://github.com/ProfessorOwl/zuzule.git
cd Masterarbeit-Website
```

### 2. Node.js-Abhängigkeiten installieren

```bash
npm install
```

Das installiert unter anderem
- Next.js 16.2.4
- React 19.2.5
- Mantine UI-Komponenten
- Tailwind CSS
- KaTeX für mathematische Ausdrücke
- next-video für Videoverarbeitung
- Sharp für Bildoptimierung

### 3. Python-Umgebung einrichten

Das Projekt enthält ein Bildkomprimierungsskript, das Python und die Pillow-Bibliothek erfordert.

```bash
# Virtuelle Umgebung erstellen
python3 -m venv .venv

# Virtuelle Umgebung aktivieren
source .venv/bin/activate  # Auf macOS/Linux
# oder auf Windows: .venv\Scripts\activate

# Erforderliche Python-Pakete installieren
pip install Pillow
```

### 4. Umgebungsvariablen

Kopiere die Umgebungsvariablendatei:

```bash
cp .env.local.example .env.local  # Falls du eine Beispieldatei hast
```

Oder erstelle `.env.local` mit den notwendigen Variablen (z. B. MUX-Tokens für Videoverarbeitung, falls du den MUX-Provider verwendest).

### 5. Anwendung erstellen und ausführen

#### Entwicklungsmodus

```bash
npm run dev
```

Dieser Befehl:
- Startet den Next.js-Entwicklungsserver
- Führt `next-video sync` im Hintergrund aus, um Videos zu verarbeiten

Die Anwendung ist unter `http://localhost:3000` verfügbar.

#### Produktionsbuild

```bash
npm run build
npm start
```

### 6. Bildkomprimierung (Optional)
Das Skript zum Komprimieren der Bilder ist image-compressor.py. Es sucht nach allen Bildern im Ordner `public` und konvertiert alle mit dem Präfix `orig_`. Dabei wird automatisch eine Log-Datei `.image-compressor-mtimes.json`, die die Änderungsdaten der Originale loggt. Nach dem ersten Komprimiervorgang werden also nur noch veränderte oder neue Bilder erneut komprimiert.

### 7. Videoverarbeitung

Videos werden mit next-video verarbeitet und auf `https://www.mux.com/` hochgeladen. Du benötigst dafür ein Konto. Die Konfiguration befindet sich in `video.config.js`

Platziere Videos im `videos/`-Verzeichnis. Der Build-Prozess übernimmt die Konvertierung und Optimierung.

## Lizenz

Das Projekt unterliegt der CreativeCommons BY-NC-SA 4.0-Lizenz.