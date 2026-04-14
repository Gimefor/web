// Detectar el idioma del navegador
const userLang = navigator.language || navigator.userLanguage;
const defaultLang = userLang.startsWith('es') ? 'es' : 'en';

// Cargar el archivo JSON correspondiente al idioma
async function loadTranslations(lang) {
  const response = await fetch(`./languages/${lang}.json`);
  return response.json();
}

// Aplicar las traducciones al DOM
function applyTranslations(translations) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const keys = key.split('.');
    let text = translations;

    // Navegar por las claves anidadas en el JSON
    keys.forEach(k => {
      text = text[k];
    });

    if (text) {
      if (element.tagName === 'INPUT') {
        element.placeholder = text;
      } else {
        element.textContent = text;
      }
    }
  });
}

// Cambiar el idioma
function changeLanguage(lang) {
  loadTranslations(lang).then(translations => {
    applyTranslations(translations);
  });
}

// Inicializar el idioma predeterminado
document.addEventListener('DOMContentLoaded', () => {
  changeLanguage(defaultLang);

  // Agregar botones de cambio de idioma
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
});