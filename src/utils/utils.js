export function postponeFor (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}