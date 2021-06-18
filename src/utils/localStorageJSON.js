export default function initiateLocalStorageJSON(computed, defaultForComputed) {
  return {
    get [computed]() {
      return localStorage[computed] ? JSON.parse(localStorage[computed]) : defaultForComputed;
    },
    set [computed](newValue) {
      return localStorage[computed] = JSON.stringify(newValue);
    }
  };
}