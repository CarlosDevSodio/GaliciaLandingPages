

let language = localStorage.getItem('language') || "EN";

const setLanguage = (lang) => {
    language = lang;
    localStorage.setItem('language', lang);
}

const getLanguage = () => {
    return language;};

export { setLanguage, getLanguage };