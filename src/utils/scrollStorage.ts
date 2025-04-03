export const saveScrollPosition = (key: string) => {
  sessionStorage.setItem(key, String(window.scrollY));
};

export const restoreScrollPosition = (key: string): number | null => {
  const saved = sessionStorage.getItem(key);
  if (saved !== null) {
    const y = Number(saved);
    sessionStorage.removeItem(key);
    return y;
  }
  return null;
};
