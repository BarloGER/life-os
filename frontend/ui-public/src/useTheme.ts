const THEME_KEY: string = 'theme';

export function getSavedTheme(): 'dark' | 'light' | null {
  return localStorage.getItem(THEME_KEY) as 'dark' | 'light' | null;
}

export function getSystemTheme(): 'dark' | 'light' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: 'dark' | 'light') {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark-mode');
  } else {
    root.classList.remove('dark-mode');
  }
}

export const listenForSystemThemeChange = () => {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const newTheme = e.matches ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  });
};

export function initTheme() {
  const saved = getSavedTheme();
  const theme = saved || getSystemTheme();
  applyTheme(theme);
}

export function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark-mode');
  const newTheme = isDark ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, newTheme);
  applyTheme(newTheme);
}
