document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('langSelect');

    function canviarIdioma(idioma) {
        // Canvia l'atribut lang de l'etiqueta <html>
        document.documentElement.lang = idioma;

        // Selecciona tots els elements que tenen l'atribut 'i18n'
        const elements = document.querySelectorAll('[i18n]');
        
        elements.forEach(element => {
            // Busca la traducció dins dels data-attributes (ex: data-es, data-en)
            const text = element.dataset[idioma];
            if (text !== undefined) {
                element.textContent = text;
            }
        });
    }

    if (selector) {
        // 1. Recuperem l'idioma guardat (si n'hi ha cap)
        const idiomaGuardat = localStorage.getItem('idiomaSk8');

        if (idiomaGuardat) {
            // Si hi ha un idioma guardat prèviament, actualitzem el selector i apliquem l'idioma
            selector.value = idiomaGuardat;
            canviarIdioma(idiomaGuardat);
        } else {
            // Si és el primer cop que entra, apliquem el que hi ha per defecte al selector (ca)
            canviarIdioma(selector.value);
        }

        // 2. Escolta els canvis en el desplegable
        selector.addEventListener('change', function () {
            const nouIdioma = this.value;
            
            // Apliquem l'idioma
            canviarIdioma(nouIdioma);
            
            // Guardem la selecció a la memòria del navegador per a les altres pàgines
            localStorage.setItem('idiomaSk8', nouIdioma);
        });
    }
});