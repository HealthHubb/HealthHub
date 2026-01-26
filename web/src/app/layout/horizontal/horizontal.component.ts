import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  effect,
  EventEmitter,
  inject,
  Output,
  signal,
} from '@angular/core';
import {
  CircleUserRound,
  LucideAngularModule,
  Menu,
  Moon,
  Sun,
} from 'lucide-angular';
import { User } from '../../models/user';
import { TuiButton, TuiPopup, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiBadge, TuiDrawer } from '@taiga-ui/kit';
import { ThemeService } from '../../services/theme.service';
import { InitialsPipe } from "../../pipes/initials.pipe";

@Component({
  selector: 'app-horizontal',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    TuiButton,
    TuiDrawer,
    TuiPopup,
    TuiTitle,
    TuiBadge,
    TuiAvatar,
    InitialsPipe
],
  templateUrl: './horizontal.component.html',
  styleUrl: './horizontal.component.scss',
})
export class HorizontalComponent {
  readonly menu = Menu;
  readonly Sun = Sun;
  readonly Moon = Moon;
  readonly user = CircleUserRound;

  protected readonly open = signal(false);

  currentUser: User | null = null;

  @Output() toggleSidenav = new EventEmitter<void>();

  private readonly themeService = inject(ThemeService);

  constructor(private cdr: ChangeDetectorRef) {}

  get theme(): 'light' | 'dark' {
    return this.themeService.theme();
  }

  ngOnInit(): void {
    this.getUser();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  getUser() {
    this.currentUser = this.readUserFromStorage();
  }

  private readUserFromStorage(): User | null {
    try {
      const raw = localStorage.getItem('currentUser');
      if (!raw) return null;

      const parsed = JSON.parse(raw);
      const user = parsed?.user || parsed?.updatedUser || parsed;
      return user ?? null;
    } catch {
      return null;
    }
  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }
}
