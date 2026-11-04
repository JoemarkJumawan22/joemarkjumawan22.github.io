/** Resolve a file in /public/images regardless of the deploy sub-path. */
export const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;
