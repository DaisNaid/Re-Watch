export default function useRange (start: number, end: number): number[] {
    const range = [];
    let i;
    for (i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
};
