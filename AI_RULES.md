# AI Editor Rules and Project Guidelines

This document outlines the technology stack and specific development rules for this project, ensuring consistency, maintainability, and adherence to best practices.

## 1. Technology Stack Overview

*   **Frontend Framework:** React (TypeScript)
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS, utilizing a custom color palette ("Surf School Design System").
*   **UI Library:** shadcn/ui (built on Radix UI primitives).
*   **Routing:** React Router DOM.
*   **State Management:** React Query (`@tanstack/react-query`) for server state management.
*   **Forms & Validation:** React Hook Form with Zod.
*   **Icons:** Lucide React.
*   **SEO/Head Management:** React Helmet Async.
*   **Notifications:** Sonner (Toaster).

## 2. Library Usage Rules

| Functionality | Recommended Library/Tool | Notes |
| :--- | :--- | :--- |
| **UI Components** | shadcn/ui | Use components exclusively from `@/components/ui/`. If a necessary component does not exist, create a new small, focused component file in `src/components/`. |
| **Styling** | Tailwind CSS | All styling must use Tailwind utility classes. Ensure designs are responsive by default. |
| **Routing** | `react-router-dom` | Keep all primary routes defined in `src/App.tsx`. |
| **Icons** | `lucide-react` | Only use icons from this package. |
| **Forms** | `react-hook-form` & `zod` | Use these libraries for form handling and schema validation. |
| **Notifications** | `sonner` (Toaster) | Use `sonner` for simple, non-intrusive toasts. The standard shadcn/ui `Toast` system is also available for more complex notifications. |
| **Component Structure** | Small, focused files | Every new component or hook must reside in its own file (e.g., `src/components/NewComponent.tsx`). |
| **File Paths** | Aliases | Use the `@/` alias for imports (e.g., `@/components/Navbar`). |