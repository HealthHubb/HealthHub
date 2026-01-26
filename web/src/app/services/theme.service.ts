import { Injectable, signal } from '@angular/core';

export type AppTheme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'theme';

  readonly theme = signal<AppTheme>('dark');

  init(): void {
    const stored = this.readStoredTheme();

    if (stored) {
      this.setTheme(stored);
      return;
    }

    const prefersDark =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    this.setTheme(prefersDark ? 'dark' : 'light');
  }

  toggleTheme(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: AppTheme): void {
    this.theme.set(theme);
    const isDark = theme === 'dark';

    const body = document.body;
    if (isDark) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }

    try {
      localStorage.setItem(this.storageKey, theme);
    } catch {}
  }

  private readStoredTheme(): AppTheme | null {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw === 'light' || raw === 'dark') return raw;
      return null;
    } catch {
      return null;
    }
  }
}
