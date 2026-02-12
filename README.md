# Digital Signage Dashboard

Fullscreen webdashboard voor een kantoortv-scherm dat een PowerPoint Online presentatie toont. Wijzigingen aan de PowerPoint worden automatisch opgepikt.

## Setup

### 1. PowerPoint Online presentatie maken

1. Ga naar [PowerPoint Online](https://www.office.com/launch/powerpoint) of [OneDrive](https://onedrive.live.com)
2. Maak een nieuwe presentatie aan
3. Stel per slide de gewenste **overgangen** en **timing** in:
   - Ga naar **Overgangen** (Transitions)
   - Kies een overgangseffect
   - Vink **Na** aan en stel de tijd in (bijv. 10 seconden)
   - Klik op **Toepassen op alle dia's** als je dezelfde timing wilt

### 2. Embed URL verkrijgen

**Vanuit OneDrive:**
1. Open de presentatie in PowerPoint Online
2. Ga naar **Bestand** > **Delen** > **Insluiten** (Embed)
3. Kopieer de embed URL uit de gegenereerde `<iframe>` code
   - Het is het stuk tussen `src="` en `"`
   - Voorbeeld: `https://onedrive.live.com/embed?resid=ABC123&authkey=XYZ789&em=2`

**Vanuit SharePoint:**
1. Open de presentatie
2. Klik op **Delen** > **Insluiten** (Embed)
3. Kopieer de embed URL

### 3. Auto-play instellen

Voeg `&wdAr=1.7777777777777777` toe aan de embed URL voor 16:9 aspect ratio. De URL ziet er dan zo uit:

```
https://onedrive.live.com/embed?resid=ABC123&authkey=XYZ789&em=2&wdAr=1.7777777777777777
```

> **Tip:** De slideshow-timing stel je in binnen PowerPoint zelf via **Overgangen > Na: X seconden**.

### 4. Configuratie

Open `config.js` en plak je embed URL:

```javascript
EMBED_URL: 'https://onedrive.live.com/embed?resid=ABC123&authkey=XYZ789&em=2&wdAr=1.7777777777777777',
```

### 5. Starten

Open `index.html` in een browser. Voor de beste resultaten op een tv-scherm:

- **Chrome kiosk mode:** `chrome --kiosk --start-fullscreen index.html`
- Of druk op **F11** voor fullscreen
- Geoptimaliseerd voor **1920x1080** schermen

## Wijzigingen doorvoeren

Pas de PowerPoint aan in de browser — de wijzigingen worden automatisch elke **30 minuten** opgepikt door het dashboard (configureerbaar in `config.js`).

## Projectstructuur

```
├── index.html   - Pagina met fullscreen iframe
├── styles.css   - Minimale fullscreen styling
├── app.js       - Laad- en refresh-logica
├── config.js    - Embed URL en refresh interval
└── README.md    - Deze documentatie
```
