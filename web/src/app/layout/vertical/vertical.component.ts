import { Component, DestroyRef, effect, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { LucideAngularModule, House, Dumbbell, ChefHat, User, LogOut } from "lucide-angular";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-vertical',
  standalone: true,
  imports: [RouterModule, CommonModule, LucideAngularModule],
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.scss'
})
export class VerticalComponent {
  readonly house = House;
  readonly dumbbell = Dumbbell;
  readonly chefHat = ChefHat;
  readonly user = User;
  readonly logOut = LogOut;

  theme: 'light' | 'dark' = 'dark';
  selectedRoute: string = '';

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly themeService = inject(ThemeService);
  
  constructor(private authService: AuthService) {
    effect(() => {
      this.theme = this.themeService.theme();
    });
  }

   ngOnInit(): void {
    this.updateSelectedRoute(this.router.url);

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((event) => {
        this.updateSelectedRoute(event.urlAfterRedirects);
      });
  }

  private updateSelectedRoute(url: string): void {
    const cleanUrl = (url ?? '').split('?')[0].split('#')[0];

    const segments = cleanUrl.split('/').filter(Boolean);

    let activeSegment = segments[0];

    if (activeSegment === 'admin' && segments.length > 1) {
      activeSegment = segments[1];
    }

    this.selectedRoute = activeSegment ? `/${activeSegment}` : '/';
  }

  logout() {
    localStorage.setItem('auth', 'false');
    this.authService.clearSession();
    this.router.navigate(['/login']);
  }

  
}
