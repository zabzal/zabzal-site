# Style Guide

This document outlines the coding standards, design patterns, and best practices used in this project.

## Table of Contents
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Coding Standards](#coding-standards)
- [Component Structure](#component-structure)
- [Styling Guidelines](#styling-guidelines)
- [TypeScript Usage](#typescript-usage)
- [State Management](#state-management)
- [Performance Considerations](#performance-considerations)
- [Accessibility](#accessibility)

## Project Structure

```
zabzal-site/
├── src/                    # Source code
│   ├── lib/               # Reusable components and utilities
│   │   ├── components/    # Svelte components
│   │   └── stores/        # Svelte stores
│   ├── app.css           # Global styles
│   ├── app.html          # HTML template
│   ├── App.svelte        # Root component
│   └── main.ts           # Application entry point
├── public/               # Static assets
├── docs/                # Build output
└── vite.config.js       # Vite configuration
```

## Technologies

- **Framework**: Svelte 4.x with TypeScript
- **Build Tool**: Vite 4.x
- **CSS Framework**: Tailwind CSS 3.x
- **Typography**: Inter font family
- **Development Environment**: Containerized with Debian + Node.js

## Coding Standards

### General

- Use TypeScript for type safety
- Use 2 spaces for indentation
- End files with a newline
- Remove trailing whitespace
- Use semicolons at the end of statements

### Naming Conventions

- **Components**: PascalCase (e.g., `Header.svelte`, `Portfolio.svelte`)
- **Variables**: camelCase
- **Types/Interfaces**: PascalCase
- **CSS Classes**: kebab-case for custom classes
- **Store Names**: camelCase

### Component File Structure

```svelte
<!-- Component Description -->
<script lang="ts">
  // 1. Imports
  // 2. Props
  // 3. Local state
  // 4. Computed values
  // 5. Lifecycle hooks
  // 6. Methods
</script>

<!-- Template -->
<div>
  <!-- Content -->
</div>

<!-- Styles -->
<style>
  /* Component-specific styles */
</style>
```

## Component Structure

### Props

- Define prop types explicitly
- Use TypeScript interfaces for complex prop types
- Document required vs optional props

```typescript
interface Props {
  title: string;           // Required
  description?: string;    // Optional
}
```

### Event Handling

- Use event forwarding when needed
- Prefer custom events for component communication
- Use TypeScript for event types

```svelte
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher<{
    navigate: string;
  }>();
</script>
```

## Styling Guidelines

### CSS Architecture

1. **Global Styles** (`app.css`):
   - CSS Variables for theming
   - Base styles
   - Utility classes
   - Animations

2. **Component Styles**:
   - Use Tailwind CSS utilities
   - Follow mobile-first approach
   - Use CSS custom properties for theming

### Color Palette

```css
:root {
  --primary-purple: 147 51% 60%;      /* #8B5CF6 */
  --primary-purple-dark: 147 51% 50%;  /* #7C3AED */
  --primary-purple-light: 147 51% 70%; /* #A78BFA */
  --background: 210 11% 98%;          /* #F8FAFC */
  --foreground: 224 71% 4%;          /* #0F172A */
  --muted: 210 11% 96%;              /* #F1F5F9 */
  --border: 214 13% 91%;             /* #E2E8F0 */
}
```

### Responsive Design

- Use Tailwind's responsive prefixes
- Follow mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

### Animation Guidelines

- Use CSS transitions for simple state changes
- Use keyframe animations for complex animations
- Respect user preferences (`prefers-reduced-motion`)

## TypeScript Usage

### Type Definitions

- Define interfaces for component props
- Use type inference when possible
- Export shared types in separate files

```typescript
// Example type definition
interface SkillCategory {
  title: string;
  icon: string;
  skills: Array<{
    name: string;
    level: number;
  }>;
}
```

### Strict Mode

- Enable strict mode in `tsconfig.json`
- Use explicit type annotations for public APIs
- Avoid `any` type

## State Management

### Local State

- Use `let` for component-local state
- Use reactive statements (`$:`) for derived state
- Keep state as close to where it's used as possible

### Global State

- Use Svelte stores for global state
- Create custom stores when needed
- Example from `scroll.ts`:

```typescript
import { writable } from 'svelte/store';

export const scrollY = writable(0);

export function createScrollStore() {
  const { subscribe, set } = scrollY;
  // Store implementation...
}
```

## Performance Considerations

### Code Splitting

- Lazy load components when possible
- Use dynamic imports for expensive operations
- Optimize asset loading

### Image Optimization

- Use appropriate image formats
- Implement lazy loading for images
- Provide responsive images using srcset

### Render Optimization

- Use `bind:this` sparingly
- Implement proper cleanup in `onDestroy`
- Use Intersection Observer for scroll-based animations

## Accessibility

### General Guidelines

- Use semantic HTML elements
- Provide ARIA labels where needed
- Ensure keyboard navigation
- Support screen readers
- Maintain proper color contrast

### Focus Management

- Visible focus indicators
- Proper tab order
- Skip links for navigation

### Media

- Provide alt text for images
- Use aria-labels for interactive elements
- Support reduced motion preferences

## Testing Guidelines

- Unit tests for components
- Integration tests for user flows
- Accessibility testing
- Cross-browser testing

## Documentation

- Comment complex logic
- Document component APIs
- Maintain changelog
- Update README.md with setup instructions

## Version Control

- Use meaningful commit messages
- Follow conventional commits format
- Keep PRs focused and manageable
- Review code before merging
