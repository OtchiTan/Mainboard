export function removeItem(item) {
    window.localStorage.removeItem(item);
}

export function getItem(itemName) {
    return window.localStorage.getItem(itemName);
}

export function addItem(itemName,item) {
    window.localStorage.setItem(itemName, item);
}
