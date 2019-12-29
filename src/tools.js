export function createArrayWithElements(length, element) {
    const hasElement = typeof element != 'undefined';
    return Array.apply(null, {length: length}).map(hasElement ? () => element : Number.call, Number);
}