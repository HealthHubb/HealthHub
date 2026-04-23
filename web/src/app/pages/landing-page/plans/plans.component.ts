import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface PlanFeatureGroup {
  title: string;
  items: string[];
}

interface PlanCard {
  name: string;
  description: string;
  price: string;
  accent: 'green' | 'purple';
  featured?: boolean;
  buttonLabel: string;
  featureGroups: PlanFeatureGroup[];
}

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
})
export class PlansComponent {
  readonly plans: PlanCard[] = [
    {
      name: 'Gratis',
      description:
        'Ideal for starting your routine with guided recipes and simple training suggestions.',
      price: '0',
      accent: 'green',
      buttonLabel: 'choose!',
      featureGroups: [
        {
          title: 'Basic wellness tools',
          items: [
            'Access to introductory workouts',
            'Simple healthy recipe suggestions',
            'Weekly habit tracking',
          ],
        },
        {
          title: 'Get started support',
          items: [
            'Profile setup and onboarding',
            'Progress overview in one place',
            'Great for building consistency',
          ],
        },
      ],
    },
    {
      name: 'Pro',
      description:
        'Built for users who want deeper personalization and more control over progress.',
      price: '29,99',
      accent: 'purple',
      featured: true,
      buttonLabel: 'choose!',
      featureGroups: [
        {
          title: 'Smarter recommendations',
          items: [
            'Personalized workout planning',
            'Adaptive recipe suggestions',
            'Weekly goals based on your profile',
          ],
        },
        {
          title: 'More ways to improve',
          items: [
            'Track evolution with richer insights',
            'Save favorite plans and meals',
            'Priority access to new features',
          ],
        },
      ],
    },
    {
      name: 'Pro+',
      description:
        'For the most complete experience, with advanced guidance across fitness and nutrition.',
      price: '39,99',
      accent: 'green',
      buttonLabel: 'choose!',
      featureGroups: [
        {
          title: 'Advanced support',
          items: [
            'Premium workout and recipe flows',
            'Enhanced recommendations for your goals',
            'Expanded planning flexibility',
          ],
        },
        {
          title: 'Everything in one plan',
          items: [
            'Best feature access across the platform',
            'Improved long-term routine management',
            'Designed for committed users',
          ],
        },
      ],
    },
  ];
}
