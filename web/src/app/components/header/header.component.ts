import { CommonModule } from '@angular/common';
import { Component, OnInit, effect, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TuiButton } from '@taiga-ui/core';
import { LucideAngularModule, Sun, Moon } from 'lucide-angular';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TuiButton, LucideAngularModule, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  readonly Sun = Sun;
  readonly Moon = Moon;

  theme: 'light' | 'dark' = 'dark';
  url: string = '';
  hasBg: boolean = false;

  private readonly themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  constructor(private router: Router) {
    effect(() => {
      this.theme = this.themeService.theme();
    });
  }

  ngOnInit(): void {
    this.url = this.getUrl();
    this.updateHeaderBg(this.url);
    this.router.events.subscribe(() => {
      const current = this.getUrl();
      this.updateHeaderBg(current);
    });
  }

  getUrl(): string {
    return window.location.href;
  }

  updateHeaderBg(url: string): void {
    const lower = url.toLowerCase();
    this.hasBg =
      lower.includes('/landing/workout') || lower.includes('/landing/recipes');
  }

  isActive(path: string): boolean {
    const current = (this.router.url || this.getUrl()).toLowerCase();
    const target = path.toLowerCase();
    return (
      current === target ||
      current.startsWith(target + '/') ||
      current.startsWith(target + '?') ||
      current.startsWith(target + '#')
    );
  }
}
