# ⚡ KITBASH — Neo-Brutalist Marketplace for Design & Dev Kits

> **Ready-made kits for makers who ship.** Skip the blank canvas. Buy, remix, and launch in a weekend with modular design kits, custom typography, and production code.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-FFD600?style=for-the-badge&logo=vercel&logoColor=111111)](https://kitbash-blond.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-111111?style=for-the-badge&logo=github&logoColor=FFFFFF)](https://github.com/himelahmed404/kitbash)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.2-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19.3.0-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4.0-38BDF8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Firebase](https://img.shields.io/badge/Firebase-v13.1-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com)

---

## 🌐 Live Demo

Explore the live production deployment hosted on Vercel:
🔗 **[https://kitbash-blond.vercel.app](https://kitbash-blond.vercel.app)**

---

## 📖 Project Overview

**Kitbash** is a high-performance, opinionated digital asset marketplace built for developers, indie hackers, and product designers. It breaks away from modern bland corporate aesthetics with a bold, retro-futuristic **Neo-Brutalist** design language: high-contrast monochrome ink typography, thick 3px brutalist borders, saturated primary accent colors, and tactile hard-drop shadows.

The platform provides a seamless end-to-end workflow: browse curated UI kits, icon libraries, fonts, and full-stack templates; inspect live design tokens and components; test interactive color themes; publish new kits using the real-time Seller Studio; and authenticate securely with Google or email.

---

## ✨ Key Features

### 🎨 Neo-Brutalist Visual Identity
* **Raw & Bold Aesthetic**: 3px solid ink borders (`border-3 border-ink`), hard offset drop shadows (`shadow-brutal`), 0px border-radius, and uppercase editorial headlines.
* **Punchy Color Palette**: High-energy brand accents: **Sun Yellow** (`#FFD600`), **Cyber Mint** (`#5EEAD4`), and **Bubblegum Pink** (`#FF5FA2`) on warm paper backgrounds (`#FFFFFF` and `#FFF9DB`).
* **Expressive Typography**: Dual-font architecture pairing **Space Grotesk** for display headlines with **JetBrains Mono** for code tokens, metadata badges, and pricing tags.

### 🕹️ Interactive Stages & Live Previews
* **Hero Kit Staging**: Interactive bundle card in the hero featuring **NEO MATRIX PRO** with live theme swatch switching (Sun, Mint, Pink) and mouse tilt parallax.
* **Sticky Centered Workflow**: Pinned multi-step pipeline (`Buy → Remix → Ship`) that centers in the viewport as you scroll, accompanied by dynamic interactive preview stages:
  * **Step 01 (Buy & Claim)**: Unpacked delivery manifest (`.fig`, `.tsx`, `.svg`) with lifetime commercial license verification.
  * **Step 02 (Remix Tokens)**: Real-time CSS token studio with clickable color swatches and live-rendered button feedback.
  * **Step 03 (Ship to Production)**: Live Turbopack terminal output (`✓ 24/24 routes generated in 520ms`) and production URL badge.

### 🛍️ Marketplace Catalog & Filtering
* **Category Filtering**: Instant sorting across UI Kits, Icon Packs, Fonts, and Templates.
* **Real-time Search & Filter**: Search by keywords, filter by price tier (Free vs. Premium), and sort by newest or highest rated.
* **Deep Kit Detail Views**: High-res preview galleries, format tags, included assets breakdown, author profiles, and direct license checkout CTAs.

### 🛠️ Seller Studio & Management
* **Interactive Kit Publisher (`/items/add`)**: Create and list design kits with title, description, category, pricing, version, and supported formats (Figma, React, Tailwind, Framer, Sketch, SVG).
* **Live Form Preview**: Instant side-by-side card preview updating in real time as the seller types.
* **Inventory Management (`/items/manage`)**: Dedicated seller dashboard to review, edit, or delete published products.

### 🔐 Authentication & Cloud Persistence
* **Firebase Auth Integration**: One-click Google Sign-In and secure Email/Password authentication with persistent session state.
* **Cloud Firestore Sync**: Real-time cloud storage for custom user-created kits combined with fallback seed data for instant zero-latency browsing.

### ⚡ Performance & Kinetic Motion
* **Native 120Hz Scrolling**: Hardware-accelerated smooth scrolling optimized for laptop trackpads, mobile touchscreens, and precision mice.
* **GSAP Kinetic Entrance**: Split-heading text reveals, magnetic button physics, and velocity-responsive marquee strips.
* **Static Prerendering (SSG + PPR)**: Powered by Next.js 16 App Router and Turbopack for near-instant page loads.

---

## 🗺️ Route Summary

| Route | Purpose | Description |
| :--- | :--- | :--- |
| **`/`** | **Landing Page** | Flagship hero showcase, featured drops grid, category navigator, sticky 3-step workflow, and maker testimonials. |
| **`/items`** | **Marketplace Catalog** | Browse all kits with search bar, category chips, price filters, and sorting controls. |
| **`/items/[id]`** | **Product Detail Page** | Full kit showcase with image gallery, license specifications, file manifests, author info, and purchase actions. |
| **`/items/add`** | **Seller Studio** | Form to create and publish new kits with real-time reactive live preview and validation. |
| **`/items/manage`** | **Seller Dashboard** | Manage and inspect your published products, view stats, or delete listings. |
| **`/about`** | **About / Manifesto** | Mission statement, the maker manifesto, and core neo-brutalist engineering values. |
| **`/contact`** | **Contact & Support** | Help desk, community channels (Discord/Twitter), FAQ accordion, and inquiry form. |
| **`/login`** | **Sign In** | Authenticate via Google OAuth or Email & Password. |
| **`/register`** | **Create Account** | New user registration with profile creation. |

---

## 🛠️ Tech Stack

* **Framework**: [Next.js 16.4.2](https://nextjs.org/) (App Router, Turbopack, Partial Prerendering)
* **Library**: [React 19.3.0](https://react.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Animations**: [GSAP 3.15](https://gsap.com/) & [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
* **Database & Auth**: [Firebase v13.1](https://firebase.google.com/) (Authentication & Cloud Firestore)
* **Form & Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod 4](https://zod.dev/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Setup & Installation Instructions

Follow these steps to run Kitbash locally on your machine:

### 1. Prerequisites
Ensure you have the following installed:
* **Node.js**: `v20.x` or higher (recommended: Node `v24.x`)
* **Package Manager**: `npm`, `pnpm`, or `yarn`
* **Git**: Installed and configured

### 2. Clone the Repository
```bash
git clone https://github.com/himelahmed404/kitbash.git
cd kitbash
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env.local` file in the root directory and add your Firebase project configuration:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

> [!TIP]
> You can copy `.env.example` as a starting template:
> ```bash
> cp .env.example .env.local
> ```

### 5. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with Hot Module Replacement (HMR).

### 6. Build for Production
To test the production build locally:
```bash
npm run build
npm run start
```

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<p align="center">
  <b>Built for makers who ship. ⚡</b><br/>
  <sub>© 2026 Kitbash. Designed with Neo-Brutalist passion.</sub>
</p>
