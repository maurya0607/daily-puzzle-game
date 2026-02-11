 # 🎮 Daily Puzzle Game

A high-performance, fully responsive Daily Puzzle Game built using **Next.js, Tailwind CSS, and Firebase Authentication**.  
Designed with client-side optimization, offline support, and scalable architecture in mind.

🔗 **Live Demo:**  
https://daily-puzzle-game-two.vercel.app

---

## 📌 Project Overview

Daily Puzzle Game is a browser-based interactive puzzle platform that generates a unique puzzle daily using a date-based seed algorithm.  

The application emphasizes:
- ⚡ Fast client-side performance
- 🔐 Secure authentication
- 📱 Mobile-first responsive design
- 💾 Offline functionality
- 🧠 Optimized puzzle generation engine

---

## 🚀 Core Features

### 🔐 Authentication
- Google Sign-In using Firebase
- Authorized domain configuration
- Secure logout flow

### 🧠 Puzzle Engine
- 5 Dynamic Puzzle Types
- Date-based deterministic puzzle generator
- Client-side solution validation engine
- Attempts tracking system
- Game-over state management
- Refresh puzzle functionality

### 💾 Storage & Offline Support
- Local progress persistence
- Offline-ready gameplay
- No unnecessary API calls

### 🎨 UI/UX
- Glassmorphism-inspired modern UI
- Fully responsive (Mobile + Tablet + Desktop)
- Smooth transitions & animations
- Tailwind CSS utility-based styling

---

## 🏗 Architecture


Architecture follows:
- Modular puzzle framework
- Separation of logic & UI
- Stateless validation engine
- Deterministic daily seed strategy

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| Next.js (App Router) | Framework |
| React | UI Components |
| Tailwind CSS | Styling |
| Firebase Auth | Authentication |
| Vercel | Deployment |
| IndexedDB / LocalStorage | Client Persistence |

---

## ⚡ Performance Optimization

- <100ms puzzle generation
- Optimized client bundle
- Lazy rendering approach
- Minimal re-renders using React state control
- No redundant API calls
- Offline-first design

---

## 🔒 Security Considerations

- Firebase domain authorization configured
- No sensitive logic exposed
- Controlled authentication flow
- Client input validation

---

## 📦 Local Development

Clone the repository:

```bash
git clone https://github.com/maurya0607/daily-puzzle-game.git
cd daily-puzzle-game
