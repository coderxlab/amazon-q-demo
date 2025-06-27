# React Component Development Guidelines

## Core Component Principles

1. Use TypeScript for all React components with proper type definitions.
2. Follow functional components with hooks pattern over class components.
3. Use descriptive component names that clearly indicate their purpose.
4. Keep components small and focused on a single responsibility.
5. Prefer composition over inheritance for component reusability.
6. Use proper prop validation with TypeScript interfaces.
7. Implement proper error boundaries for error handling.
8. Follow consistent naming conventions throughout the codebase.

## File Structure and Naming

1. Component files must be placed in the `./client/src/components` directory with appropriate subdirectories.
2. UI component files must be placed in the `./client/src/components/ui` directory.
3. Component files must be named with kebab-case and `.tsx` extension.
4. Export components as named exports or default exports with consistent patterns.
5. Create index files for component directories to simplify imports.
6. Co-locate related files (styles, types, utils) with components when appropriate.

## Component Architecture

1. Define clear TypeScript interfaces for all props and state.
2. Use React.memo() for performance optimization when appropriate.
3. Implement proper loading and error states for async operations.
4. Use custom hooks to extract and reuse component logic.
5. Follow the single responsibility principle for component design.
6. Implement proper accessibility attributes and ARIA labels.
7. Use semantic HTML elements and proper heading hierarchy.

## State Management

1. Use useState for local component state management.
2. Use useReducer for complex state logic with multiple sub-values.
3. Lift state up to the nearest common ancestor when sharing between components.
4. Use context sparingly and only for truly global state.
5. Implement proper state initialization and cleanup.
6. Avoid direct state mutations - always create new state objects.

## Props and Data Flow

1. Define explicit TypeScript interfaces for all component props.
2. Use optional props with default values when appropriate.
3. Implement proper prop drilling prevention with context or state management.
4. Use callback props for parent-child communication.
5. Validate props at runtime in development mode when necessary.
6. Keep prop interfaces minimal and focused.

## Styling Guidelines

1. Use Tailwind CSS for component styling.
2. Use the `cn()` utility from `@/lib/utils` for conditional class merging.
3. Implement responsive design with mobile-first approach.
4. Use CSS variables for theming and consistent design tokens.
5. Avoid inline styles except for dynamic values.
6. Implement proper focus states and accessibility styling.
7. Use class-variance-authority (cva) for component variants.

## Performance Optimization

1. Use React.memo() to prevent unnecessary re-renders.
2. Implement proper dependency arrays in useEffect and useMemo.
3. Use useCallback for event handlers passed to child components.
4. Implement code splitting with React.lazy() for large components.
5. Optimize images and assets used in components.
6. Use proper key props for list rendering.

## Error Handling

1. Implement error boundaries for graceful error handling.
2. Use try-catch blocks in async operations within components.
3. Provide meaningful error messages and fallback UI.
4. Use toast notifications for error feedback.
5. Implement retry mechanisms for failed operations when appropriate.