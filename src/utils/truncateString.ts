export const truncateString = (s: string, w: number) => (s.length > w ? s.slice(0, w) + '...' : s)
