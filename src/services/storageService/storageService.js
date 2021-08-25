
function save(key,value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key,json);
}

function load(key) {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
}

function remove(key) {
    localStorage.removeItem(key);
}

export const StorageService = {
    save,
    load,
    remove
} 