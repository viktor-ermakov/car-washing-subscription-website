# ShineWash - Car Washing Subscription Website

> A modern subscription-based platform for car washing and detailing services.

---

## 🚀 Getting Started & Initialization

### 1. Setting Up the Python Virtual Environment (`venv`)

To isolate and manage Python-related dependencies, tooling, or background scripts, initialize and activate a Python virtual environment (`.venv`) at the root of the project:

#### Step 1.1: Create the Virtual Environment

Ensure you have **Python 3.10+** installed, then run:

```bash
# Windows / macOS / Linux
python -m venv .venv
```
*(On Linux/macOS, you can also run `python3 -m venv .venv`)*

#### Step 1.2: Activate the Virtual Environment

Choose the command matching your operating system and shell:

- **Windows (PowerShell):**
  ```powershell
  .venv\Scripts\Activate.ps1
  ```
  *(If execution policies block the script in PowerShell, run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` once)*

- **Windows (Command Prompt / CMD):**
  ```cmd
  .venv\Scripts\activate.bat
  ```

- **macOS / Linux (Bash / Zsh):**
  ```bash
  source .venv/bin/activate
  ```

Once activated, your terminal prompt will display `(.venv)`.

#### Step 1.3: Upgrading pip (Optional)

```bash
python -m pip install --upgrade pip
```

*(To deactivate the environment when you are done, simply run `deactivate`)*

---

### 2. Frontend Setup & Launch (Node.js & Vite)

The web client is built with React 19, TypeScript, and Vite.

#### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

#### Step 2.1: Install Dependencies

```bash
npm install
```

#### Step 2.2: Run Development Server

```bash
npm run dev
```

The application will start locally at `http://localhost:5173` (or the next available port). Open this URL in your web browser to view the application.

---

## 🛠 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles TypeScript types and builds production-ready static assets in `dist/`. |
| `npm run preview` | Runs a local web server to preview the production build from `dist/`. |
| `npm run lint` | Runs [Oxlint](https://oxc.rs/) to check code quality and detect lint errors quickly. |

---

## 📋 Features

- **Subscription Plans**:
  - **Básico**: 2 external washes per month, glass and mirror cleaning, tire shine.
  - **Plus (Popular)**: 4 external washes, 1 full wax wash, basic interior sanitization, priority booking.
  - **Premium**: Unlimited external washes, 2 deep detailing washes, deep upholstery sanitization, VIP express lane.
- **Service Catalog**: Complete breakdown of standalone and subscription services with pricing and details.
- **User Authentication**:
  - Sign in and account registration.
  - Client-side session and user persistence using `localStorage`.
- **User Account & Subscription Management**:
  - View subscription status, renewal date, and vehicle details.
  - Change or cancel active subscription plans.
  - Update user profile, contact information, and preferences in account settings.
- **Responsive Layout**: Designed for seamless viewing across mobile, tablet, and desktop viewports.

---

## 💻 Tech Stack

- **Frontend Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) & JSX
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter**: [Oxlint](https://oxc.rs/)
- **Python Environment**: `venv` (Python virtual environment management)

---

## 📂 Project Structure

```text
car-washing-subscription-website/
├── .venv/                  # Python virtual environment (git-ignored)
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and SVG icons (hero banner, logos)
│   ├── components/         # Reusable UI components (Header, Footer, Button, PlanCard, etc.)
│   ├── data/               # Mock data for subscription plans and services
│   │   ├── config/         # App configuration
│   │   ├── plans.js        # Plan tiers (Básico, Plus, Premium)
│   │   └── services.js     # Service descriptions and prices
│   ├── layouts/            # Page layouts (MainLayout, AccountLayout)
│   ├── pages/              # Application views & routes
│   │   ├── HomePage.jsx             # Landing page with hero, plans, and services
│   │   ├── LoginPage.jsx            # User login
│   │   ├── RegisterPage.jsx         # User registration
│   │   ├── SubscriptionPage.jsx     # Subscription management
│   │   ├── AccountPage.jsx          # User overview
│   │   ├── AccountSettingsPage.jsx  # Account profile and settings
│   │   └── NotFoundPage.jsx         # 404 fallback page
│   ├── styles/             # Global CSS and CSS variable definitions
│   ├── App.tsx             # Route declarations and root wrapper
│   └── main.tsx            # React application entry point
├── index.html              # HTML template
├── package.json            # Node.js dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This generates compiled JavaScript, CSS, and HTML assets in the `dist/` directory, ready to be deployed to any static hosting provider (e.g., Vercel, Netlify, Cloudflare Pages, Firebase Hosting, or Nginx).

---

### 2. Frontend Setup & Launch (Node.js & Vite)

The web client is built with React 19, TypeScript, and Vite.

#### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

#### Step 2.1: Install Dependencies

```bash
npm install
```

#### Step 2.2: Run Development Server

```bash
npm run dev
```

The application will start locally at `http://localhost:5173` (or the next available port). Open this URL in your web browser to view the application.

---

## 🛠 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles TypeScript types and builds production-ready static assets in `dist/`. |
| `npm run preview` | Runs a local web server to preview the production build from `dist/`. |
| `npm run lint` | Runs [Oxlint](https://oxc.rs/) to check code quality and detect lint errors quickly. |

---

## 📋 Features

- **Subscription Plans**:
  - **Básico**: 2 external washes per month, glass and mirror cleaning, tire shine.
  - **Plus (Popular)**: 4 external washes, 1 full wax wash, basic interior sanitization, priority booking.
  - **Premium**: Unlimited external washes, 2 deep detailing washes, deep upholstery sanitization, VIP express lane.
- **Service Catalog**: Complete breakdown of standalone and subscription services with pricing and details.
- **User Authentication**:
  - Sign in and account registration.
  - Client-side session and user persistence using `localStorage`.
- **User Account & Subscription Management**:
  - View subscription status, renewal date, and vehicle details.
  - Change or cancel active subscription plans.
  - Update user profile, contact information, and preferences in account settings.
- **Responsive Layout**: Designed for seamless viewing across mobile, tablet, and desktop viewports.

---

## 💻 Tech Stack

- **Frontend Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) & JSX
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter**: [Oxlint](https://oxc.rs/)
- **Python Environment**: `venv` (Python virtual environment management)

---

## 📂 Project Structure

```text
car-washing-subscription-website/
├── .venv/                  # Python virtual environment (git-ignored)
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and SVG icons (hero banner, logos)
│   ├── components/         # Reusable UI components (Header, Footer, Button, PlanCard, etc.)
│   ├── data/               # Mock data for subscription plans and services
│   │   ├── config/         # App configuration
│   │   ├── plans.js        # Plan tiers (Básico, Plus, Premium)
│   │   └── services.js     # Service descriptions and prices
│   ├── layouts/            # Page layouts (MainLayout, AccountLayout)
│   ├── pages/              # Application views & routes
│   │   ├── HomePage.jsx             # Landing page with hero, plans, and services
│   │   ├── LoginPage.jsx            # User login
│   │   ├── RegisterPage.jsx         # User registration
│   │   ├── SubscriptionPage.jsx     # Subscription management
│   │   ├── AccountPage.jsx          # User overview
│   │   ├── AccountSettingsPage.jsx  # Account profile and settings
│   │   └── NotFoundPage.jsx         # 404 fallback page
│   ├── styles/             # Global CSS and CSS variable definitions
│   ├── App.tsx             # Route declarations and root wrapper
│   └── main.tsx            # React application entry point
├── index.html              # HTML template
├── package.json            # Node.js dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This generates compiled JavaScript, CSS, and HTML assets in the `dist/` directory, ready to be deployed to any static hosting provider (e.g., Vercel, Netlify, Cloudflare Pages, Firebase Hosting, or Nginx).

