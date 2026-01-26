# ⚡ HealthHub

> **Seu ecossistema completo de saúde, performance e bem-estar.**
> *Conectando treinos, nutrição e metas em uma experiência multiplataforma unificada.*

![HealthHub Banner](https://github.com/user-attachments/assets/d455ad8d-baf8-49b7-8bab-d1e41aae430b)

## 📖 Sobre o Projeto

O **HealthHub** é uma aplicação "Super-App" de saúde projetada para resolver a fragmentação do mercado fitness. Em vez de usar um app para treinos, outro para dietas e um terceiro para métricas, o HealthHub centraliza tudo.

O diferencial do projeto é sua arquitetura orientada a dados: uma **API Central** alimenta tanto a versão **Web (para planejamento e visualização detalhada)** quanto a versão **Mobile (para uso na academia e dia a dia)**, garantindo sincronia em tempo real.

## 📱 Telas e Funcionalidades

### Dashboard & Metas Diárias
Visão geral do dia com monitoramento de sono, água, calorias e passos. Gamificação através de "streaks" (dias seguidos).

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/user-attachments/assets/e3e4d4e8-681b-455c-bb5a-37040a028678" alt="Dashboard Mobile" width="30%" />
  <img src="https://github.com/user-attachments/assets/3f1bed86-4310-4911-9ef7-f394fa037aae" alt="Dashboard Web" width="60%" />
</div>

### 🏋️ Workouts (Treinos)
* **Biblioteca de Vídeos:** Treinos guiados com filtros (Casa, Academia, HIIT).
* **Log Manual:** Registro detalhado de séries, repetições e cargas para usuários avançados.
* **Progressão de Carga:** Gráficos de evolução de força (PRs).

### 🥗 Recipes (Nutrição)
* **Smart Search:** Filtros por dieta (Keto, Vegan) e tempo de preparo.
* **Macros:** Visualização rápida de Proteínas, Carbos e Gorduras.
* **Integração:** Adicionar uma receita soma automaticamente as calorias ao dia.

### 👤 Profile & Analytics
* Acompanhamento de medidas corporais.
* Estatísticas semanais de balanço energético (Ingestão vs. Gasto).

---

## 🛠️ Tech Stack (Arquitetura)

Este projeto utiliza uma arquitetura moderna com um Backend servindo múltiplos Frontends.

### 📱 Mobile (App)
* **Framework:** React Native (Expo)
* **Estilização:** Styled Components / NativeWind
* **Navegação:** React Navigation
* **Destaque:** Focado em performance e UX nativa.

### 💻 Web (Client)
* **Framework:** Angular 17+
* **Estilização:** Tailwind CSS (ou SCSS)
* **Componentes:** RxJS para gerenciamento de estado reativo.
* **Destaque:** Painéis administrativos e visualização de dados complexos.

### 🧠 Backend (API)
* **Runtime:** Node.js
* **Banco de Dados:** PostgreSQL (Relacional)
* **ORM:** Prisma / TypeORM
* **Autenticação:** JWT (JSON Web Tokens)

---

## 📂 Estrutura do Projeto

O repositório está organizado como um *Monorepo* (ou estrutura multi-pasta):

```bash
HealthHub/
├── 📁 mobile/       # Aplicação React Native
├── 📁 web/          # Aplicação Angular
├── 📁 server/       # API Node.js
└── 📄 README.md
