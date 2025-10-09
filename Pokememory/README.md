# 🎮 POKÉMEMORY

Un gioco di memoria interattivo a tema Pokémon costruito con React, Vite e PokeAPI. Metti alla prova la tua memoria catturando tutti i Pokémon senza cliccare due volte lo stesso!

![Pokémemory Banner](https://img.shields.io/badge/React-19.1.1-blue?logo=react) ![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.22-pink)

## 🌟 Funzionalità

- **9 Regioni Pokémon**: Scegli tra Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar/Hisui e Paldea
- **3 Livelli di Difficoltà**: 
  - Facile (8 Pokémon)
  - Medio (12 Pokémon)
  - Difficile (18 Pokémon)
- **Toggle Immagini**: Scegli tra artwork ufficiali e sprite del gioco
- **Animazioni Fluide**: Transizioni e effetti con Framer Motion
- **Design Pixel Art**: Estetica ispirata al Game Boy Advance
- **Responsive**: Ottimizzato per desktop e mobile con sidebar collassabile
- **Sistema di Punteggio**: Tracciamento del record personale
- **Modali Interattive**: Schermata di benvenuto con regole, modali di vittoria e sconfitta

## 🎯 Come Giocare

1. **Avvia il gioco** e leggi le regole nella modale di benvenuto
2. **Seleziona una regione** e un livello di difficoltà dalla sidebar
3. **Clicca su un Pokémon** per catturarlo
4. **Attenzione**: Ogni Pokémon può essere catturato una sola volta!
5. Dopo ogni cattura, le carte si **mescolano** automaticamente
6. **Obiettivo**: Cattura tutti i Pokémon senza cliccare due volte lo stesso
7. Se clicchi un Pokémon già catturato, **perdi** e la partita ricomincia

## 🚀 Demo Live

[Inserisci qui il link alla demo su Vercel/Netlify]

## 🛠️ Tecnologie Utilizzate

- **React 19.1.1**: Libreria UI con hooks (useState, useEffect)
- **Vite 7.1.7**: Build tool ultra-veloce
- **Framer Motion 12.23.22**: Animazioni e transizioni
- **PokeAPI**: Dati Pokémon in tempo reale
- **Lucide React**: Icone moderne e leggere
- **CSS3**: Custom properties, grid, flexbox, media queries

## 📦 Installazione

### Prerequisiti
- Node.js (v18 o superiore)
- npm o yarn

### Clona il repository
```bash
git clone https://github.com/lucaradio24/Memory-card.git
cd Memory-card/Pokememory
```

### Installa le dipendenze
```bash
npm install
```

### Avvia il server di sviluppo
```bash
npm run dev
```

Il gioco sarà disponibile su `http://localhost:5173`

## 🏗️ Build per Produzione

```bash
npm run build
```

I file di produzione saranno generati nella cartella `dist/`.

### Preview della build
```bash
npm run preview
```

## 📁 Struttura del Progetto

```
Pokememory/
├── public/
│   ├── assets/
│   │   ├── border.png
│   │   ├── OakLGPE.png
│   │   └── pokeball.svg
│   └── fonts/
│       └── PokemonClassic.ttf
├── src/
│   ├── App.jsx              # Componente principale con logica di gioco
│   ├── App.css              # Stili globali e layout
│   ├── Card.jsx             # Componente carta Pokémon
│   ├── Card.css
│   ├── CardGrid.jsx         # Griglia di carte
│   ├── CardGrid.css
│   ├── Header.jsx           # Intestazione con punteggio
│   ├── Header.css
│   ├── Sidebar.jsx          # Menu laterale con controlli
│   ├── Sidebar.css
│   ├── PokeDex.jsx          # Selettore regioni
│   ├── Pokedex.css
│   ├── DifficultyChanger.jsx # Selettore difficoltà
│   ├── ImagesToggle.jsx     # Toggle artwork/sprite
│   ├── ImagesToggle.css
│   ├── WelcomeModal.jsx     # Modale di benvenuto
│   ├── LoseModal.jsx        # Modale sconfitta
│   ├── WinModal.jsx         # Modale vittoria
│   ├── Modal.css            # Stili modali
│   └── main.jsx             # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Caratteristiche Tecniche

### Gestione dello Stato
- **useState**: Per stato locale (carte, punteggio, modali, difficoltà)
- **useEffect**: Per fetch asincrono da PokeAPI con dipendenze

### Fetch Dinamico
- Range di Pokémon basato sulla regione selezionata
- Gestione errori con fallback
- Shuffle automatico delle carte dopo ogni click

### Animazioni
- **Framer Motion**: Transizioni smooth tra stati
- **AnimatePresence**: Fade in/out per cambio immagini
- **Layout animations**: Shuffle animato della griglia
- Effetti hover e tap sulle carte

### Responsive Design
- **Desktop**: Layout a due colonne (sidebar + griglia)
- **Mobile**: Sidebar collassabile con hamburger menu
- Media queries a 975px di breakpoint
- Griglia adattiva (4/6 colonne desktop, 3 colonne mobile)

### Design System
- Variabili CSS per colori e spacing
- Palette ispirata a Pokémon (rosso, blu, giallo)
- Bordi "pixel art" con box-shadow
- Font personalizzati (Press Start 2P, VT323, Pokemon Classic)

## 🐛 Risoluzione Problemi

### Build fallisce su Vercel
Assicurati che `vite` sia in `dependencies` nel `package.json`, non solo in `devDependencies`. Se il tuo progetto è in una sottocartella, crea un file `vercel.json` nella root del repository:

```json
{
  "root": "Pokememory"
}
```

### Le animazioni non funzionano
Verifica che Framer Motion sia installato correttamente:
```bash
npm install framer-motion@^12.23.22
```

### Errori di fetch
PokeAPI ha rate limits. Se ottieni errori 429, attendi qualche secondo e riprova.

## 🤝 Contribuire

Le contribuzioni sono benvenute! Per contribuire:

1. Fai un fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Committa i tuoi cambiamenti (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📝 Idee per Futuri Miglioramenti

- [ ] Sistema di autenticazione con salvataggio punteggi online
- [ ] Modalità multiplayer
- [ ] Effetti sonori e musica
- [ ] Filtri avanzati (tipo, generazione)
- [ ] Temi personalizzabili
- [ ] Statistiche dettagliate (tempo medio, streak)
- [ ] Integrazione con Pokédex completo

## 📄 Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi il file `LICENSE` per maggiori informazioni.

## 🙏 Riconoscimenti

- [PokeAPI](https://pokeapi.co/) per i dati Pokémon
- [Framer Motion](https://www.framer.com/motion/) per le animazioni
- [Lucide](https://lucide.dev/) per le icone
- Nintendo/Game Freak per l'universo Pokémon
- Font [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) e [VT323](https://fonts.google.com/specimen/VT323)

## 👨‍💻 Autore

**Luca Radio**
- GitHub: [@lucaradio24](https://github.com/lucaradio24)

---

⭐ Se ti piace questo progetto, lascia una stella su GitHub!

*Gotta catch 'em all!* 🎯
