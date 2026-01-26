import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';
import { AboutComponent } from './pages/landing-page/about/about.component';
import { RecipesComponent } from './pages/landing-page/receips/recipes.component';
import { WorkoutComponent } from './pages/landing-page/workout/workout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    {
        path: 'landing',
        component: LandingPageComponent,
        children: [
            { path: '', redirectTo: 'about', pathMatch: 'full' },
            { path: 'about', component: AboutComponent },
            { path: 'recipes', component: RecipesComponent },
            { path: 'workout', component: WorkoutComponent },
        ],
    },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'admin', component: AdminComponent,
        canActivate: [authGuard],
        children: [
            {path: 'dashboard', component: DashboardComponent},
        ]
    }
];
