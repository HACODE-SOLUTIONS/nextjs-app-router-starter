# SKILL: Next.js App Router Starter

**Agent Skill Document**  
**Version:** 1.0.0  
**For:** AI Coding Agents (Cursor, Claude, Copilot, Gemini, etc.)

## 🎯 When to Use This Skill

Use this starter when the user requests:

- "Create a new Next.js app"
- "Start a Next.js project with TypeScript and Tailwind"
- "Build a modern web app with Next.js App Router"
- "Set up a new React project"
- "Initialize a Next.js starter template"
- Any request for a new web application with modern stack

## 📋 Prerequisites Check

Before starting, verify:

1. **Node.js** >= 18.18.0 installed
2. **Package manager** (npm, yarn, or pnpm) available
3. **Git** initialized in project directory
4. User has confirmed stack preferences (or defaults are acceptable)

## 🚀 Quick Start Workflow

### Step 1: Initialize Project

```bash
# If cloning this template
git clone <repository-url>
cd nextjs-app-router-starter

# If using as template on GitHub
# User clicks "Use this template" button

# Install dependencies
npm install
```

### Step 2: Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Prompt user for required variables
echo "Environment variables ready in .env.local"
```

### Step 3: Verify Installation

```bash
# Start dev server
npm run dev

# Verify at http://localhost:3000
```

### Step 4: Confirm Structure

Read and understand:
- `DEVSPEC.md` — Complete project specifications
- `README.md` — User documentation
- Project structure and conventions

## 🔧 Development Workflow

### Adding New Features

Follow this sequence:

#### 1. Understand Requirements

```
Agent: "I'll help you add [feature]. Let me check DEVSPEC.md for architecture guidelines."
```

- Read `DEVSPEC.md` for architecture
- Check existing project structure
- Identify where new code should live

#### 2. Plan Structure

```typescript
// Determine component type
// ✅ Server Component (default) — for static content, data fetching
// ✅ Client Component — for interactivity, state, browser APIs

// Plan file locations
// app/[route]/page.tsx — Pages
// components/ui/ — UI components
// components/features/ — Feature-specific components
// lib/ — Utilities and helpers
// types/ — TypeScript types
```

#### 3. Implement Feature

**Example: Adding a Blog Page**

```typescript
// Step 1: Create route
// app/blog/page.tsx
export default async function BlogPage() {
  // Server Component — can fetch data directly
  const posts = await getPosts()
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}

// Step 2: Create types
// types/blog.ts
export interface Post {
  id: string
  title: string
  content: string
  createdAt: Date
}

// Step 3: Create component
// components/features/BlogCard.tsx
import { Post } from '@/types/blog'

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600">{post.content}</p>
    </article>
  )
}
```

#### 4. Style with Tailwind

```typescript
// Use utility classes
// ✅ Good: Utility-first approach
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">

// ❌ Bad: Custom CSS
<div style={{ display: 'flex', padding: '1rem' }}>

// Responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// Dark mode support
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
```

#### 5. Add TypeScript Types

```typescript
// ✅ Always define interfaces for props
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

// ✅ Use type-safe event handlers
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  // ...
}

// ❌ Avoid 'any'
const handleData = (data: any) => { // Bad!
```

#### 6. Test Implementation

```bash
# Run dev server
npm run dev

# Check for errors
npm run lint

# Build test
npm run build
```

## 🎨 Code Patterns

### Server Components (Default)

```typescript
// app/posts/page.tsx
// No 'use client' needed — this is a Server Component

export default async function PostsPage() {
  // Can directly fetch data
  const posts = await fetch('https://api.example.com/posts').then(r => r.json())
  
  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
```

### Client Components

```typescript
// components/ui/Counter.tsx
'use client' // Mark as Client Component

import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

### Layouts

```typescript
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100">
        {/* Sidebar */}
      </aside>
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
```

### Loading States

```typescript
// app/posts/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  )
}
```

### Error Handling

```typescript
// app/posts/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button onClick={reset} className="px-4 py-2 bg-blue-600 text-white rounded">
        Try again
      </button>
    </div>
  )
}
```

### API Routes

```typescript
// app/api/posts/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = await fetchPosts()
  return NextResponse.json(posts)
}

export async function POST(request: Request) {
  const body = await request.json()
  const newPost = await createPost(body)
  return NextResponse.json(newPost, { status: 201 })
}
```

### Server Actions

```typescript
// app/actions.ts
'use server'

export async function submitForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  
  // Process data
  await saveToDatabase({ name, email })
  
  return { success: true }
}

// Usage in form
// app/contact/page.tsx
import { submitForm } from '@/app/actions'

export default function ContactPage() {
  return (
    <form action={submitForm}>
      <input name="name" required />
      <input name="email" type="email" required />
      <button type="submit">Submit</button>
    </form>
  )
}
```

## 🔍 Common Tasks

### Task: Add a New Page

```bash
# 1. Create page file
# app/about/page.tsx

# 2. Implement component
# 3. Style with Tailwind
# 4. Test route at /about
```

### Task: Create a Reusable Component

```bash
# 1. Determine if Server or Client Component
# 2. Create in components/ui/ or components/features/
# 3. Define TypeScript interface for props
# 4. Implement component
# 5. Export from component file
# 6. Import and use in pages
```

### Task: Add API Endpoint

```bash
# 1. Create route handler
# app/api/[endpoint]/route.ts

# 2. Implement HTTP methods (GET, POST, etc.)
# 3. Add types for request/response
# 4. Test endpoint
```

### Task: Add Authentication

```bash
# 1. Choose auth solution (NextAuth.js, Clerk, Auth0)
# 2. Install dependencies
# 3. Configure environment variables
# 4. Create auth pages (login, signup)
# 5. Add middleware for protected routes
# 6. Update layout with auth state
```

### Task: Connect to Database

```bash
# 1. Choose database (PostgreSQL, MongoDB, etc.)
# 2. Install client library
# 3. Add DATABASE_URL to .env.local
# 4. Create lib/db.ts for connection
# 5. Create data fetching functions
# 6. Use in Server Components
```

## ✅ Validation Checklist

Before considering a feature complete:

- [ ] TypeScript compiles without errors
- [ ] ESLint passes without warnings
- [ ] Page loads without console errors
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Dark mode works correctly (if applicable)
- [ ] Links and navigation work
- [ ] Forms submit correctly (if applicable)
- [ ] Data fetching works (if applicable)
- [ ] Loading states display properly
- [ ] Error states handled gracefully
- [ ] Accessibility: keyboard navigation works
- [ ] Accessibility: proper ARIA labels
- [ ] Build succeeds: `npm run build`

## 🐛 Troubleshooting

### "Module not found" Error

```bash
# Check import paths
# Use @ alias for root imports
import { Component } from '@/components/Component'

# Verify file exists
# Check tsconfig.json paths configuration
```

### TypeScript Errors

```bash
# Run type check
npx tsc --noEmit

# Check for missing types
npm install --save-dev @types/[package]
```

### Styling Not Applied

```bash
# Verify Tailwind config
# Check globals.css has Tailwind directives
# Restart dev server

npm run dev
```

### Build Fails

```bash
# Check for TypeScript errors
# Check for ESLint errors
# Clear cache and rebuild

rm -rf .next
npm run build
```

## 📚 Agent Response Templates

### When Starting a New Feature

```
I'll help you add [feature] to your Next.js app.

Based on DEVSPEC.md, I'll:
1. Create [files needed]
2. Add TypeScript types in types/
3. Implement the component/page
4. Style with Tailwind CSS
5. Test the implementation

Let me start by [first step]...
```

### When Code Review is Requested

```
I'll review this code against Next.js App Router best practices:

✅ Correct use of Server Component
✅ TypeScript types defined
✅ Tailwind utilities used properly
⚠️ Suggestion: [improvement]

Would you like me to implement the suggestion?
```

### When User is Stuck

```
I see you're working on [feature]. Let me check DEVSPEC.md and SKILL.md for the recommended approach.

Based on the project structure, here's what I suggest:
[specific guidance]

Would you like me to implement this?
```

## 🎯 Success Metrics

A successful implementation should:

1. **Follow conventions** in DEVSPEC.md
2. **Use proper component types** (Server vs Client)
3. **Have complete TypeScript types** (no `any`)
4. **Use Tailwind utilities** for styling
5. **Pass build** (`npm run build` succeeds)
6. **Be accessible** (keyboard navigation, ARIA labels)
7. **Be responsive** (works on all screen sizes)
8. **Be performant** (lighthouse score > 90)

## 🔗 Resources

- **DEVSPEC.md** — Complete project specifications
- **README.md** — User documentation
- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Built by [HACODE SOLUTIONS](https://hacode.solutions)**  
**For AI Coding Agents • Version 1.0.0**
