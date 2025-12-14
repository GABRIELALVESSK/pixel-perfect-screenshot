# Regras do Editor AI e Diretrizes do Projeto

Este documento descreve a pilha tecnológica e as regras específicas para o desenvolvimento dentro deste projeto, garantindo consistência, manutenibilidade e adesão às melhores práticas.

## 1. Visão Geral da Pilha Tecnológica

*   **Framework Frontend:** React (TypeScript)
*   **Ferramenta de Build:** Vite
*   **Estilização:** Tailwind CSS, utilizando uma paleta de cores personalizada ("Surf School Design System").
*   **Biblioteca de UI:** shadcn/ui (construída sobre primitivos Radix UI).
*   **Roteamento:** React Router DOM.
*   **Gerenciamento de Dados:** React Query (`@tanstack/react-query`) para gerenciamento de estado do servidor.
*   **Formulários e Validação:** React Hook Form com Zod.
*   **Ícones:** Lucide React.
*   **SEO/Gerenciamento de Head:** React Helmet Async.

## 2. Regras de Uso de Bibliotecas

| Funcionalidade | Biblioteca/Ferramenta Recomendada | Notas |
| :--- | :--- | :--- |
| **Componentes de UI** | shadcn/ui | Utilize exclusivamente os componentes existentes em `@/components/ui/`. Se um componente necessário não existir, crie um novo arquivo de componente pequeno e focado em `src/components/`. |
| **Estilização** | Tailwind CSS | Toda a estilização deve ser feita usando classes utilitárias do Tailwind. Garanta que os designs sejam responsivos por padrão. |
| **Roteamento** | `react-router-dom` | Mantenha todas as rotas primárias definidas em `src/App.tsx`. |
| **Ícones** | `lucide-react` | Use apenas ícones deste pacote. |
| **Formulários** | `react-hook-form` & `zod` | Use estas bibliotecas para manipulação de formulários e validação de esquema. |
| **Notificações** | `sonner` (Toaster) | Use `sonner` para toasts simples e não intrusivos. O sistema de `Toast` padrão do shadcn/ui também está disponível para notificações mais complexas. |
| **Estrutura de Componentes** | Arquivos pequenos e focados | Cada novo componente ou hook deve residir em seu próprio arquivo (ex: `src/components/NovoComponente.tsx`). |
| **Caminhos de Arquivo** | Aliases | Use o alias `@/` para importações (ex: `@/components/Navbar`). |