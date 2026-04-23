import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArrowRight, ChartNoAxesCombined, Dumbbell, Flame, Footprints, LucideAngularModule, LucideIconData, Utensils, Zap} from 'lucide-angular';

interface FeatureCard {
  title: string;
  description: string;
  accent: string;
  glow: string;
  progress: number;
  icon: LucideIconData;
}

interface ProfessionalCard {
  name: string;
  specialty: string;
  accent: string;
  imageUrl: string;
}

interface TestimonialCard {
  quote: string;
  author: string;
  role: string;
  accent: string;
  accentBg: string;
  imageUrl: string;
  badge: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly dumbbell = Dumbbell;
  readonly utensils = Utensils;
  readonly chart = ChartNoAxesCombined;
  readonly steps = Footprints;
  readonly flame = Flame;
  readonly zap = Zap;
  readonly arrow_right = ArrowRight;
  
  readonly featureCards: FeatureCard[] = [
    {
      title: 'Treinos Inteligentes',
      description:
        'Rotinas geradas por IA adaptadas ao seu nível de performance e objetivos específicos de hipertrofia ou resistência.',
      accent: '#8EFF71',
      glow: 'rgba(142,255,113,0.12)',
      progress: 78,
      icon: this.dumbbell,
    },
    {
      title: 'Nutrição Integrada',
      description:
        'Macros sincronizados com seus treinos. Cardápios otimizados para recuperação e explosão muscular.',
      accent: '#B785FF',
      glow: 'rgba(183,133,255,0.12)',
      progress: 68,
      icon: this.utensils,
    },
    {
      title: 'Acompanhamento de Metas',
      description:
        'Visualização de progresso em tempo real com anéis de performance e métricas vitais.',
      accent: '#88F6FF',
      glow: 'rgba(136,246,255,0.12)',
      progress: 84,
      icon: this.chart,
    },
  ];

  readonly professionals: ProfessionalCard[] = [
    {
      name: 'Dra. Silva',
      specialty: 'Nutricionista Esportiva',
      accent: '#B785FF',
      imageUrl:
        'https://www.figma.com/api/mcp/asset/384bda6a-b604-40c2-83eb-22aeb6b32ff9',
    },
    {
      name: 'Carlos M.',
      specialty: 'Personal Trainer',
      accent: '#8EFF71',
      imageUrl:
        'https://www.figma.com/api/mcp/asset/4e768cad-e292-458e-ad80-6cb317f94d48',
    },
    {
      name: 'Dra. Mendes',
      specialty: 'Medicina Esportiva',
      accent: '#88F6FF',
      imageUrl:
        'https://www.figma.com/api/mcp/asset/42324271-7725-46a2-af01-17f8cfe71690',
    },
    {
      name: 'Lucas T.',
      specialty: 'Recuperação e Yoga',
      accent: '#B785FF',
      imageUrl:
        'https://www.figma.com/api/mcp/asset/82d9902f-7f55-4d69-9081-0f429eed793c',
    },
  ];

  readonly testimonials: TestimonialCard[] = [
    {
      quote:
        'A integração de treinos e nutrição mudou meu jogo. Nunca estive tão focada e meus resultados dobraram em apenas 3 meses. A clareza das metas me manteve na linha!',
      author: 'Mariana V.',
      role: 'Atleta Amadora',
      accent: '#39FF14',
      accentBg: 'rgba(57,255,20,0.1)',
      imageUrl:
        'https://www.figma.com/api/mcp/asset/42324271-7725-46a2-af01-17f8cfe71690',
      badge: '+35% Resistência',
    },
    {
      quote:
        'Encontrar os profissionais certos na plataforma foi o diferencial. Meu personal ajustou meu treino e minha força subiu drasticamente.',
      author: 'João P.',
      role: 'Entusiasta Fitness',
      accent: '#7800E8',
      accentBg: 'rgba(120,0,232,0.1)',
      imageUrl:
        'https://www.figma.com/api/mcp/asset/4e768cad-e292-458e-ad80-6cb317f94d48',
      badge: '+20% Força',
    },
    {
      quote:
        'A funcionalidade de acompanhar macros integrados aos meus treinos diários economizou horas da minha semana. Agora eu apenas sigo o plano e vejo a mágica acontecer. O design escuro com toques neon me dá energia só de abrir o app.',
      author: 'Ricardo Alves',
      role: 'Maratonista',
      accent: '#39FF14',
      accentBg: 'rgba(57,255,20,0.1)',
      imageUrl:
        'https://www.figma.com/api/mcp/asset/82d9902f-7f55-4d69-9081-0f429eed793c',
      badge: '+45% Em 6 meses',
    },
  ];

  readonly dashboardBars = ['h-6', 'h-10', 'h-16', 'h-8', 'h-[4.5rem]'];
  readonly stars = Array.from({ length: 5 });
}
