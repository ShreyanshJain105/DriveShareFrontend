<div align="center">

<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />

<br /><br />

<h1>⚡ DriveShare</h1>

<p align="center">
  <strong>A modern, secure, and blazing-fast file storage & sharing platform.</strong><br />
  Upload, organize, manage, and share your files effortlessly — accessible anywhere, anytime.
</p>

<br />

[Features](#-features) · [Tech Stack](#-tech-stack) · [Project Structure](#-project-structure) · [Getting Started](#-getting-started) · [Pages](#-pages--routes) · [Contributing](#-contributing) · [License](#-license)

</div>

---

## ✨ Features

- 🔐 **Secure File Sharing** — Enterprise-grade security for all your files
- ☁️ **Cloud Storage** — Upload and store files reliably in the cloud
- 📁 **File Management** — Intuitive dashboard to organize your files
- 🔗 **Public File Sharing** — Generate shareable links for anyone
- 💳 **Subscription Plans** — Flexible pricing tiers for individuals and teams
- 📊 **Transaction History** — Full visibility into your billing and activity
- ⚡ **Blazing Fast** — Built on Vite with near-instant hot module replacement
- 📱 **Fully Responsive** — Seamless experience across all devices

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite 7](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **HTTP Client** | [Axios](https://axios-http.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Linting** | [ESLint 9](https://eslint.org/) |

---

## 📁 Project Structure

```
DriveShareApp/
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Images & static resources
│   │   ├── assets.js           # Asset registry
│   │   └── dashboard.png       # Dashboard preview image
│   ├── components/
│   │   └── landing/            # Landing page section components
│   │       ├── HeroSection.jsx
│   │       ├── FeaturesSection.jsx
│   │       ├── Pricing.jsx
│   │       ├── Testimonials.jsx
│   │       ├── CallToAction.jsx
│   │       └── Footer.jsx
│   ├── context/                # React context providers
│   ├── layout/                 # Shared layout components
│   ├── pages/                  # Route-level page components
│   │   ├── Landing.jsx
│   │   ├── DashBoard.jsx
│   │   ├── MyFiles.jsx
│   │   ├── PublicFileView.jsx
│   │   ├── Subscription.jsx
│   │   ├── Transactions.jsx
│   │   └── Upload.jsx
│   ├── App.jsx                 # Root component & route definitions
│   ├── main.jsx                # React DOM entry point
│   ├── index.css               # Global styles
│   └── App.css                 # App-level styles
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) `>= 18.x`
- [npm](https://www.npmjs.com/) `>= 9.x` or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ShreyanshJain105/DriveShareFrontend.git
   cd DriveShareFrontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## 🗺 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | `Landing` | Marketing homepage with Hero, Features, Pricing, Testimonials & CTA |
| `/dashboard` | `DashBoard` | User's main storage & activity overview |
| `/my-files` | `MyFiles` | File browser and management interface |
| `/public-file-view` | `PublicFileView` | Publicly accessible shared file viewer |
| `/upload` | `Upload` | File upload interface |
| `/subscription` | `Subscription` | Plans and billing management |
| `/transactions` | `Transactions` | Transaction and payment history |

---

## 🧩 Landing Page Sections

The landing page is composed of the following modular sections:

1. **HeroSection** — Bold headline, CTA buttons, and dashboard preview
2. **FeaturesSection** — Key product capabilities and value propositions
3. **Pricing** — Subscription tier comparison
4. **Testimonials** — Social proof from existing users
5. **CallToAction** — Final conversion prompt
6. **Footer** — Links, legal, and branding

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feat/your-feature-name`
5. Open a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ by <strong>Shreyansh Jain</strong></p>
  <p>
    <a href="https://github.com/ShreyanshJain105">GitHub</a>
  </p>
</div>
