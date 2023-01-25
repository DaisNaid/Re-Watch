export default function IsInViewport (element) {
    const rect = element.getBoundingClientRect();
    const isInViewport = rect.bottom > 0;
    return isInViewport;
}
