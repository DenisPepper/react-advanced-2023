export const buildNames = (names: string[] = [], mods?: Record<string, boolean | string>): string =>
    [
        ...names.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
