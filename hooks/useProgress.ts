export default function useProgress (current: number, total: number): number {
    return Math.round((current * 100) / total);
}
