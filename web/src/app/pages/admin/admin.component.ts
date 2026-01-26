import { Component, DestroyRef, inject, signal } from '@angular/core';
import { VerticalComponent } from "../../layout/vertical/vertical.component";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { HorizontalComponent } from "../../layout/horizontal/horizontal.component";
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [VerticalComponent, RouterOutlet, HorizontalComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  readonly isCompact = signal(false);

  // Desktop (>=1200px): sidebar ocupa espaço no layout
  readonly sidenavPinnedOpen = signal(true);

  // Mobile/tablet (<1200px): sidebar abre por cima (overlay)
  readonly sidenavOverlayOpen = signal(false);

  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 1199px)'])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ matches }) => {
        this.isCompact.set(matches);

        // Ao entrar em modo compacto, sempre fecha overlay por padrão
        if (matches) {
          this.sidenavOverlayOpen.set(false);
        }
      });

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        if (this.isCompact() && this.sidenavOverlayOpen()) {
          this.sidenavOverlayOpen.set(false);
        }
      });
  }

  toggleSidenav(): void {
    if (this.isCompact()) {
      this.sidenavOverlayOpen.update((v) => !v);
      return;
    }

    this.sidenavPinnedOpen.update((v) => !v);
  }

  closeOverlaySidenav(): void {
    this.sidenavOverlayOpen.set(false);
  }
}
