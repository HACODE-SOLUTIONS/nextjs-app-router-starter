# DEVSPEC: Next.js App Router Starter

**Version:** 1.0.0  
**Last Updated:** September 2026  
**Maintained by:** HACODE SOLUTIONS  
**License:** MIT

## 📋 Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Setup Instructions](#setup-instructions)
6. [Development Workflow](#development-workflow)
7. [Feature Development Guide](#feature-development-guide)
8. [AI Agent Prompts](#ai-agent-prompts)
9. [Acceptance Tests](#acceptance-tests)
10. [Environment Variables](#environment-variables)
11. [Deployment](#deployment)
12. [Best Practices](#best-practices)

---

## Overview

### Purpose

This is a production-ready Next.js App Router starter template optimized for AI-assisted development. It provides a solid foundation for building modern web applications with AI coding agents like Cursor, Claude, GitHub Copilot, and Google Gemini.

### Goals

- **Rapid Development:** Enable fast feature development with AI agents
- **Best Practices:** Follow Next.js and React best practices
- **Type Safety:** Full TypeScript support throughout
- **Modern Styling:** Tailwind CSS for utility-first styling
- **AI-Friendly:** Clear documentation for AI agent comprehension
- **Production-Ready:** Configured for immediate deployment

### Target Audience

- Full-stack developers using AI assistants
- Teams adopting AI-assisted development
- Founders building MVPs
- Anyone wanting to leverage AI agents effectively

---

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────┐
│                   Browser                        │
└────────────────────┬────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────┐
│              Next.js App Router                  │
│  ┌──────────────────────────────────────────┐  │
│  │  Server Components (RSC)                 │  │
│  │  - Default rendering mode                │  │
│  │  - Server-side data fetching             │  │
│  └──────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────┐  │
│  │  Client Components                       │  │
│  │  - Interactive UI elements               │  │
│  │  - State management                      │  │
│  └──────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────┐
│              External Services                   │
│  - APIs, Databases, Authentication, etc.        │
└─────────────────────────────────────────────────┘
```

### Key Architectural Decisions

1. **App Router over Pages Router**
   - Modern routing with React Server Components
   - Improved performance and developer experience
   - Better code organization with colocation

2. **TypeScript by Default**
   - Catch errors at compile time
   - Better IDE support and autocomplete
   - Self-documenting code

3. **Tailwind CSS for Styling**
   - Utility-first approach
   - Consistent design system
   - Smaller bundle sizes
   - Easy to customize

4. **Server Components First**
   - Default to server components
   - Use client components only when needed
   - Better performance and SEO

---

## Technology Stack

### Core Dependencies

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.x | React framework with App Router |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Utility-first CSS framework |

### Development Dependencies

| Technology | Version | Purpose |
|------------|---------|---------|
| ESLint | 9.x | Code linting |
| PostCSS | 8.x | CSS processing |
| Autoprefixer | 10.x | CSS vendor prefixing |

### Runtime Requirements

- **Node.js:** >= 18.18.0
- **Package Manager:** npm, yarn, or pnpm

---

## Project Structure

```
nextjs-app-router-starter/
│
├── app/                        # Next.js App Router directory
│   ├── layout.tsx             # Root layout (wraps all pages)
│   ├── page.tsx               # Home page (route: /)
│   └── globals.css            # Global styles with Tailwind directives
│
├── components/                 # React components (create as needed)
│   ├── ui/                    # UI components (buttons, inputs, etc.)
│   └── features/              # Feature-specific components
│
├── lib/                       # Utility functions and helpers
│   ├── utils.ts              # General utilities
│   └── api.ts                # API client functions
│
├── types/                     # TypeScript type definitions
│   └── index.ts              # Shared types
│
├── public/                    # Static assets
│   ├── images/               # Images
│   └── fonts/                # Custom fonts
│
├── .env.example              # Environment variable template
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore rules
├── DEVSPEC.md               # This file
├── LICENSE                  # MIT License
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── README.md                # Project documentation
├── SKILL.md                 # AI agent instructions
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

### Directory Conventions

- **`app/`** — All routes and layouts (App Router)
- **`components/`** — Reusable React components
- **`lib/`** — Utility functions and business logic
- **`types/`** — TypeScript type definitions
- **`public/`** — Static files served from root

---

## Setup Instructions

### Prerequisites

1. **Node.js** >= 18.18.0
2. **Git** for version control
3. **Code editor** (VS Code recommended)
4. **AI coding assistant** (Cursor, Copilot, etc.)

### Initial Setup

```bash
# 1. Clone or create from template
git clone <repository-url>
cd nextjs-app-router-starter

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 4. Start development server
npm run dev

# 5. Open browser
# Navigate to http://localhost:3000
```

### Verification

After setup, verify:

- ✅ Development server runs on http://localhost:3000
- ✅ Home page loads successfully
- ✅ Hot reload works when editing files
- ✅ No TypeScript errors
- ✅ No console errors in browser

---

## Development Workflow

### Daily Development

```bash
# Start development server
npm run dev

# In another terminal, run linting (optional)
npm run lint

# Build for production (to test)
npm run build

# Start production server
npm run start
```

### Adding New Features

1. **Plan** — Define the feature clearly
2. **Structure** — Create necessary directories/files
3. **Implement** — Write code with TypeScript
4. **Style** — Add Tailwind classes
5. **Test** — Verify functionality
6. **Commit** — Commit changes with clear message

### Code Organization

```typescript
// ✅ Good: Server Component (default)
export default async function Page() {
  const data = await fetchData()
  return <div>{data}</div>
}

// ✅ Good: Client Component (when needed)
'use client'
export function InteractiveButton() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

// ❌ Bad: Client component for static content
'use client'
export default function StaticPage() {
  return <div>Static content</div>
}
```

---

## Feature Development Guide

### Adding a New Page

```typescript
// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-gray-600">About content here</p>
    </main>
  )
}
```

### Creating a Component

```typescript
// components/ui/Button.tsx
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-colors"
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900"
  }
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  )
}
```

### Adding API Routes

```typescript
// app/api/hello/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Hello, World!' })
}

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({ received: body })
}
```

### Server Actions

```typescript
// app/actions.ts
'use server'

export async function submitForm(formData: FormData) {
  const name = formData.get('name')
  // Process form data
  return { success: true }
}
```

### Adding Environment Variables

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://user:pass@localhost:5432/db
```

```typescript
// Usage in code
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

---

## AI Agent Prompts

Use these prompts with your AI coding assistant:

### General Prompts

```
"Following DEVSPEC.md, add a new page for [feature]"

"Create a component for [component name] following the project structure"

"Add an API route for [endpoint] with TypeScript types"

"Style this component using Tailwind CSS following the project's design"
```

### Specific Feature Prompts

```
"Add user authentication:
1. Read DEVSPEC.md architecture section
2. Create auth components in components/auth/
3. Add login/signup pages in app/auth/
4. Implement middleware for protected routes
5. Follow TypeScript conventions
6. Style with Tailwind CSS"

"Create a blog feature:
1. Add app/blog/ directory
2. Create dynamic route app/blog/[slug]/page.tsx
3. Add blog listing page
4. Create BlogPost component
5. Add types in types/blog.ts
6. Style with Tailwind utilities"
```

### Code Review Prompts

```
"Review this code for:
- Next.js App Router best practices
- TypeScript type safety
- Proper use of Server vs Client Components
- Tailwind CSS optimization
- Accessibility (a11y)
- Performance considerations"
```

---

## Acceptance Tests

### Functional Tests

#### Home Page

- [ ] Page loads without errors
- [ ] Title displays correctly
- [ ] Links to HACODE SOLUTIONS work
- [ ] Links to demo site work
- [ ] Responsive design works on mobile
- [ ] Dark mode works correctly

#### Build Tests

- [ ] `npm run build` completes successfully
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Production build starts with `npm start`
- [ ] All routes accessible in production

#### Performance Tests

- [ ] Lighthouse score > 90 (Performance)
- [ ] Lighthouse score > 90 (Accessibility)
- [ ] Lighthouse score > 90 (Best Practices)
- [ ] Lighthouse score > 90 (SEO)
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.0s

### Code Quality Tests

- [ ] All components have TypeScript types
- [ ] No `any` types used
- [ ] ESLint passes without warnings
- [ ] Consistent code formatting
- [ ] No unused imports
- [ ] No console.logs in production code

### Integration Tests

- [ ] All links work correctly
- [ ] Navigation functions properly
- [ ] Environment variables load correctly
- [ ] API routes respond correctly
- [ ] Forms submit successfully

---

## Environment Variables

### Public Variables

These are exposed to the browser (prefix with `NEXT_PUBLIC_`):

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://example.com
```

### Server-Only Variables

These are only available server-side:

```bash
DATABASE_URL=postgresql://user:pass@host:5432/db
API_SECRET_KEY=your-secret-key
NEXTAUTH_SECRET=your-nextauth-secret
```

### Environment Files

- `.env.local` — Local development (not committed)
- `.env.development` — Development environment
- `.env.production` — Production environment
- `.env.example` — Template (committed to Git)

### Adding New Variables

1. Add to `.env.example` with placeholder
2. Add to `.env.local` with real value
3. Update DEVSPEC.md documentation
4. Add to deployment platform (Vercel, etc.)

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

Or use the Vercel dashboard:
1. Import Git repository
2. Configure environment variables
3. Deploy

### Other Platforms

#### Netlify

```bash
npm run build
# Upload .next folder
```

#### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### Self-Hosted

```bash
npm run build
npm start
# Use PM2 or similar for process management
```

---

## Best Practices

### Next.js App Router

1. **Default to Server Components**
   - Only use `'use client'` when necessary
   - Benefits: Better performance, smaller bundles

2. **Colocation**
   - Keep related files together
   - Use loading.tsx, error.tsx, layout.tsx

3. **Data Fetching**
   - Use async/await in Server Components
   - Cache requests appropriately

### TypeScript

1. **Type Everything**
   - Define interfaces for props
   - Avoid `any` type
   - Use strict mode

2. **Type Organization**
   - Store types in `types/` directory
   - Export and reuse common types

### Tailwind CSS

1. **Use Utility Classes**
   - Prefer utilities over custom CSS
   - Use `@apply` sparingly

2. **Responsive Design**
   - Mobile-first approach
   - Use responsive modifiers (sm:, md:, lg:)

3. **Dark Mode**
   - Use `dark:` variant for dark mode styles

### Performance

1. **Image Optimization**
   - Use next/image component
   - Specify width and height

2. **Code Splitting**
   - Use dynamic imports for large components
   - Lazy load when appropriate

3. **Caching**
   - Configure appropriate cache headers
   - Use Next.js caching strategies

### Accessibility

1. **Semantic HTML**
   - Use proper HTML elements
   - Add ARIA labels when needed

2. **Keyboard Navigation**
   - Ensure all interactive elements are keyboard accessible
   - Test with keyboard only

3. **Color Contrast**
   - Maintain WCAG AA contrast ratios
   - Test with accessibility tools

---

## AI Agent Guidelines

### When Working with AI Agents

1. **Start with DEVSPEC.md**
   - AI should read this first
   - Understand architecture and conventions

2. **Reference SKILL.md**
   - Follow specific workflows
   - Use provided prompts

3. **Ask Specific Questions**
   - "Add a blog feature following DEVSPEC.md"
   - "Create a Button component in components/ui/"

4. **Iterate Incrementally**
   - Build features step by step
   - Test after each step

5. **Review AI Output**
   - Verify TypeScript types
   - Check Tailwind usage
   - Test functionality

---

## Support and Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Community

- [HACODE SOLUTIONS](https://hacode.solutions)
- [Live Demo](https://hacode-solutions-site.vercel.app)
- [GitHub Issues](https://github.com/hacodesolutions/nextjs-app-router-starter/issues)

---

**Maintained by [HACODE SOLUTIONS](https://hacode.solutions)**  
**Version 1.0.0 • September 2026**
