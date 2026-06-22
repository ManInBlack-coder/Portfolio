const SUPPORTED_LANGS = ['en', 'et'];
const DEFAULT_LANG = 'en';
const STORAGE_KEY = 'portfolio-lang';

let currentDict = null;
let currentLang = DEFAULT_LANG;
const onChangeCallbacks = [];

function getStoredLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LANGS.includes(stored) ? stored : DEFAULT_LANG;
}

async function loadDictionary(lang) {
    const res = await fetch(`locales/${lang}.json`);
    if (!res.ok) throw new Error(`Failed to load locale: ${lang}`);
    return res.json();
}

function getByPath(dict, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, dict);
}

function applyTranslations(dict) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = getByPath(dict, el.getAttribute('data-i18n'));
        if (value === undefined) return;
        el.textContent = value;
        if (el.hasAttribute('data-i18n-optional')) {
            el.style.display = value ? '' : 'none';
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const value = getByPath(dict, el.getAttribute('data-i18n-alt'));
        if (value !== undefined) el.setAttribute('alt', value);
    });

    if (dict.meta && dict.meta.title) document.title = dict.meta.title;
    document.documentElement.lang = currentLang;
}

function otherLang(lang) {
    return lang === 'en' ? 'et' : 'en';
}

function updateSwitcherUI(lang) {
    document.querySelectorAll('.lang-switcher__toggle').forEach(btn => {
        btn.textContent = otherLang(lang).toUpperCase();
    });
}

async function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
    currentDict = await loadDictionary(lang);
    currentLang = lang;
    window.i18n = {
        lang: currentLang,
        dict: currentDict,
        t: (path) => getByPath(currentDict, path),
    };
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(currentDict);
    updateSwitcherUI(lang);
    onChangeCallbacks.forEach(cb => cb(currentDict, lang));
}

function onLanguageChange(callback) {
    onChangeCallbacks.push(callback);
}

window.i18nOnChange = onLanguageChange;

function wireSwitcherButtons() {
    document.querySelectorAll('.lang-switcher__toggle').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(otherLang(currentLang)));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    wireSwitcherButtons();
    setLanguage(getStoredLang()).catch(err => console.error('i18n load failed:', err));
});
