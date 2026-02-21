# FleetFlow Frontend

FleetFlow is a modular fleet and logistics management system designed to replace manual fleet logbooks with a centralized, rule-driven digital platform.

This frontend is built using:

- React (Vite)
- Tailwind CSS
- Inter typography
- Structured SaaS layout system

---

##  Purpose

The frontend provides a clean, professional interface for managing:

- Vehicles
- Drivers
- Trip Dispatching
- Maintenance
- Operational Analytics

It is designed with:

- Clear visual hierarchy
- Dark enterprise theme
- Minimal, smooth transitions
- Scalable component architecture

---

##  Architecture


src/
│
├── components/
│ └── layout/
│ ├── Sidebar.jsx
│ ├── Topbar.jsx
│ └── Layout.jsx
│
├── pages/
│ └── Dashboard.jsx
│
├── App.jsx
└── main.jsx



### Layout System

- Sidebar → Primary navigation
- Topbar → Contextual header
- Layout → Main application wrapper
- Pages → Route-level views

---

##  Design System

### Color Palette

| Role | Hex |
|------|------|
| Primary 900 | #00002A |
| Primary 800 | #00005E |
| Primary 600 | #173DED |
| Primary 200 | #BDCDE2 |
| Primary 100 | #B4BCCD |

### Typography

- Inter
- DM Sans fallback
- Strict spacing and hierarchy
- 8px spacing grid system

---

##  Local Development

From the `frontend` directory:

```bash
npm install
npm run dev
