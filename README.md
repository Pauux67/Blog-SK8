# Blog-SK8

```text
  _____________  __. ______  
 /    _____/    |/ _|/  __  \ 
 \_____  \|      <  >      < 
 /        \    |  \/   --   \
/_______  /____|__ \______  /
        \/        \/      \/ 

 "Rolling through code, flipping through stories."

                 -'"".
                  \  |
                     :
                   |  \         ___
 ASCII Skateboarding:  '._       /   '.
                      \  / '._  /'    |
                       ''    '-.>   /
                          \      '--.\_
                     .'"'. |            '.
                    /    /\|              \
                   /    /  '.    ___   _   \_
          .-._   /  _.'     '._/   \ | '__  '._ __
          |    \.  / .        |    | /    "'._ " _|
          '    ._.'   '.     /    / ;        ""'
           \     |      \   /    :  |
    .-..___ \__.'      __'/_   .' .'
   (_)     ""--..__   /  \  '.'..-'
    \\            "":.__ \ /SK8
     \\            (_)   '''._
     (_)'-..___    \\        .
               ""-.__\\      |
                     (_).____.'
```

### 🛹 Descripció del projecte
Aquest blog és una recopilació dels principals trucs d'Skate i les persones més representatives d'aquest esport. 
Les principals funcionalitats són veure els principals trucs (ja sigui en vídeo o imatge), recopilar els millors skateparks (spots) de la zona, compartir la nostra passió per muntar taules amb apartats dedicats a recomanacions de components i builds complets, i oferir un espai per a la comunitat.

Estem fent aquest projecte per unir les nostres dues passions: picar codi i patinar. Serveix com a projecte de pràctica per millorar les nostres habilitats de desenvolupament web mentre creem una eina útil per a qualsevol rider que vulgui aprendre, descobrir més sobre la cultura de l'skateboarding i configurar el seu setup ideal.

---

### 📸 Demo i fragments de codi

Com a funcionalitat estrella, hem desenvolupat un **sistema multilingüe personalitzat (i18n)** utilitzant exclusivament Vanilla JavaScript i `localStorage`. L'usuari pot canviar l'idioma al vol i la seva preferència es guarda automàticament per a la resta de pàgines.

```javascript
// Fragment del nostre script de canvi d'idiomes (script.js)
selector.addEventListener('change', function () {
    const nouIdioma = this.value;
    canviarIdioma(nouIdioma); // Actualitza el DOM
    localStorage.setItem('idiomaSk8', nouIdioma); // Guarda la sessió
});
```

---

### 🛠️ Tecnologies utilitzades
Aquest és un projecte de *frontend* pur, creat sense dependències complexes per consolidar les bases del desenvolupament web:
* **HTML5:** Estructura semàntica i atributs personalitzats (`i18n`, `data-ca`, `data-es`, etc.) per a les traduccions.
* **CSS3:** Maquetació responsive amb Flexbox, variables globals de colors (`colors.css`), i animacions tipus *marquee* clàssiques.
* **JavaScript (Vanilla JS):** Manipulació del DOM per al sistema multidioma i emmagatzematge local de les preferències de l'usuari.

---

### ⚙️ Instal·lació i ús
Com que és una pàgina estàtica, no et cal cap servidor ni instal·lar mòduls d'NPM. Ho tenim així de fàcil:

1. Clona aquest repositori a la teva màquina local:
   ```bash
   git clone [https://github.com/teu-usuari/Blog-SK8.git](https://github.com/teu-usuari/Blog-SK8.git)
   ```
2. Obre la carpeta del projecte.
3. Fes doble clic al fitxer `index.html` per obrir-lo al teu navegador preferit. Llestos per rodar!

---

### 📂 Estructura del projecte

```text
Blog-SK8/
├── css/
│   ├── style.css       # Estils globals (header, footer, text)
│   ├── colors.css      # Variables de la paleta de colors
│   ├── index.css       # Estils específics de l'inici
│   ├── about.css       # Estils de la pàgina Sobre Nosaltres
│   ├── store.css       # Quadrícula de productes
│   └── login.css       # Formularis de login, registre i contacte
├── html/
│   ├── about.html      # Perfils dels fundadors
│   ├── contact.html    # Formulari de contacte
│   ├── login.html      # Inici de sessió
│   ├── posts.html      # Wiki de trucs amb GIFs
│   ├── register.html   # Creació de compte
│   └── store.html      # Catàleg de material dur
├── img/                # Logos, GIFs de trucs, fons i productes
├── js/
│   └── script.js       # Lògica d'i18n (canvi d'idiomes)
└── index.html          # Pàgina principal (Landing page)
```

---

### 🤝 Autors i contribucions
Projecte dissenyat i desenvolupat per **Pau & Marc productions**. 
De sk8ers, per a sk8ers.

* **Marc:** Desenvolupament, estructura i expert en bowls/rampes.
* **Pau:** Estils CSS, disseny responsive i *street skater* buscant espots.

Si vols col·laborar afegint trucs, millorant el disseny o corregint bugs, fes un *fork* del repositori i obre un *Pull Request*. Qualsevol ajuda és benvinguda!

---

### 📜 Llicència
Aquest projecte està sota la Llicència **MIT**. Ets lliure d'utilitzar-lo, modificar-lo i distribuir-lo per als teus propis projectes.

---

### 🚀 Roadmap o millores futures
* [ ] **Backend & Base de dades:** Connectar el login i el registre a una base de dades real (ex: Firebase o NodeJS/MongoDB).
* [ ] **Carret de la compra:** Fer que els botons "Comprar" a la botiga guardin els productes i calculin un total.
* [ ] **Mapa de Skateparks:** Integració amb una API de mapes per situar els millors spots i parcs on patinar.
* [ ] **Dark Mode:** Un interruptor per passar d'un tema clar a un tema fosc dissenyat pels que naveguen a la nit.

```text
              _._                                        _._
      _.----|   |--------------------------------------|   |----._
   .-'      |.-.|      |     ||   || | | | | | |     |.-.|      '-.
 .'        __| |__     |T|O|Y|/   \|M|A|C|H|I|N|E|    __| |__        '.
|         |o_| |_o|    |_|_|_|     |_|_|_|_|_|_|_|   |o_| |_o|         |
|         ||_ @ _||  _    _ ___ _  _  _  _  _  _   ||_ @ _||         |
|         |o_| |_o| |_ |/| | | |_ |_|| || ||_/| \|_  |o_| |_o|         |
 '.          | |    __||\|-| | |_ |_||_||-||/_|_/__|    | |          .'
   '-._     |'-'|                                      |'-'|     _.-'
       '----|_ _|--------------------------------------|_ _|----'
              ~                                          ~
```