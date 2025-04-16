# LMS Technical Context

## Technologies Used

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: styled-components for component-scoped CSS
- **Routing**: React Router v6 for application navigation
- **State Management**: React Context API and hooks
- **Animation**: Framer Motion for transitions and animations
- **Icons**: React-icons with Feather icon set
- **Package Manager**: npm
- **Linting**: ESLint with TypeScript rules

### Planned Backend (Not Implemented Yet)
- **Framework**: Node.js with Express
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **API**: RESTful endpoints

## Development Setup

### Frontend
- Vite-based React application with TypeScript
- ESLint configured for code quality
- Styled-components for styling with ThemeProvider
- React Router for navigation between pages and panels
- Directory structure organized by panel (admin, teacher, student)

### Environment Requirements
- Node.js 16+
- npm 7+
- Modern browser with ES6 support

## Technical Constraints

### Frontend
- Browser compatibility focuses on modern browsers
- Mobile responsiveness is required down to 320px width
- Accessible components following WCAG guidelines
- Component reusability across panels where appropriate
- Support for both light and dark themes with proper contrast

### Backend (Planned)
- Secure API endpoints with proper authentication
- Rate limiting for public endpoints
- Efficient database queries for performance
- File size limitations for uploads

## Dependencies

### Core Libraries
- `react` and `react-dom` - UI framework
- `react-router-dom` - Routing library
- `styled-components` - CSS-in-JS styling
- `framer-motion` - Animation library
- `react-icons` - Icon sets including Feather icons

### Development Tools
- `typescript` - Type checking
- `vite` - Development server and builder
- `eslint` - Code linting

## Tool Usage Patterns

### Component Structure
```
ComponentName/
  ├── index.tsx       // Main component
  ├── styles.ts       // Styled components
  ├── types.ts        // TypeScript interfaces
  └── utils.ts        // Helper functions
```

### Styling Patterns
- Themed components using the ThemeProvider
- Responsive styles using media queries
- Animation handled through Framer Motion
- Consistent spacing with theme variables
- Theme-aware styles that adapt to light/dark modes

### State Management
- Component state with useState hook
- Complex component state with useReducer
- Shared state with Context API
- Props for parent-child communication
- Theme context for managing application appearance

## Frontend Architecture

### Component Hierarchy
```
App
├── Routes
│   ├── AdminRoutes
│   │   ├── AdminLayout
│   │   │   ├── Sidebar
│   │   │   ├── Header
│   │   │   └── Footer
│   │   └── AdminPages
│   ├── TeacherRoutes
│   │   ├── TeacherLayout
│   │   │   ├── Sidebar
│   │   │   ├── Header
│   │   │   └── Footer
│   │   └── TeacherPages
│   │       ├── TeacherDashboard
│   │       ├── TeacherSchedule
│   │       ├── TeacherStudents
│   │       ├── TeacherAssignments
│   │       ├── TeacherGrades
│   │       ├── TeacherCourses
│   │       └── TeacherMessages
│   └── StudentRoutes
└── Shared Components
```

### Layout Structure
- `AdminLayout` - Container for all admin pages
  - `Sidebar` - Navigation menu with collapsible behavior
  - `Header` - Top bar with search and notifications
  - `ContentWrapper` - Main content area
  - `Footer` - Bottom section with copyright info

- `TeacherLayout` - Container for all teacher pages
  - `Sidebar` - Navigation menu for teacher functionality
  - `Header` - Top bar with search and user profile
  - `ContentWrapper` - Main content area
  - `Footer` - Bottom section with info

### Routing Structure
```tsx
// Admin Routes
<Route path="/admin" element={<ProtectedRoute requiredRole="admin"><AdminLayout /></ProtectedRoute>}>
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="users" element={<Users />} />
  <Route path="roles" element={<Roles />} />
  <Route path="subjects" element={<Subjects />} />
  <Route path="classes" element={<Classes />} />
  <Route path="timetables" element={<Timetables />} />
  <Route path="settings" element={<Settings />} />
  <Route path="profile" element={<ProfilePage />} />
</Route>

// Teacher Routes
<Route path="/teacher" element={<ProtectedRoute requiredRole="teacher"><TeacherLayout /></ProtectedRoute>}>
  <Route path="dashboard" element={<TeacherDashboard />} />
  <Route path="profile" element={<ProfilePage />} />
  <Route path="courses" element={<TeacherCourses />} />
  <Route path="courses/:courseId" element={<div>Course Details (Coming Soon)</div>} />
  <Route path="students" element={<TeacherStudents />} />
  <Route path="assignments" element={<TeacherAssignments />} />
  <Route path="grades" element={<TeacherGrades />} />
  <Route path="schedule" element={<TeacherSchedule />} />
  <Route path="messages" element={<TeacherMessages />} />
  <Route path="settings" element={<Settings />} />
</Route>

// Student Routes
<Route path="/student" element={<ProtectedRoute requiredRole="student"><div>Student Layout</div></ProtectedRoute>}>
  <Route path="dashboard" element={<div>Student Dashboard (Coming Soon)</div>} />
  <Route path="profile" element={<ProfilePage />} />
</Route>
```

### Responsive Strategy
- Mobile-first approach with breakpoints
- Sidebar collapses to icons-only on medium screens
- Sidebar converts to overlay on mobile devices
- Content adjusts to available screen space

## Authentication & Authorization

### Planned Authentication Flow
- JWT-based authentication
- Secure token storage in localStorage/cookies
- Automatic token refresh mechanism
- Protected routes with role-based access

### Planned Role Structure
- Super Admin - Full system access
- School Admin - School-specific administration
- Teacher - Teaching and content management
- Student - Learning and content consumption
- Parent - Student monitoring and communication

## Data Management

### Planned Data Flow
- API service layer for data fetching
- Request/response interceptors for auth and errors
- Centralized error handling
- Data caching strategy

### Form Handling
- Controlled components for form inputs
- Form validation with error messaging
- Optimistic UI updates when appropriate

## Current Implementation Details

### Admin Panel
- Responsive layout with collapsible sidebar
- Navigation menu with active state indicators
- Header with search functionality
- Dashboard page structure
- Adaptive mobile navigation with overlay

### Component Features
- **Sidebar**:
  - Collapsible navigation
  - Active state highlighting
  - Mobile overlay mode
  - Category organization
  - User profile section

- **Header**:
  - Search functionality
  - Notification system
  - User avatar
  - Clean, minimal design

- **Footer**:
  - Copyright information
  - Policy links
  - Responsive layout

### Theme System
- Color palette with primary, secondary, and accent colors
- Consistent spacing scales
- Typography system with responsive sizes
- Shadow elevations
- Border radius consistency
- Transition timing
- Light and dark theme modes with distinct color palettes
- Text selection styling for proper visibility
- Proper contrast ratios for accessibility

### Theming Implementation
- Theme defined in `frontend/src/styles/theme.ts`
- Global styles in `frontend/src/styles/globalStyles.ts`
- Theme context in App component for global state
- `createTheme` function that generates themes based on mode (light/dark)
- Color palette preservation across themes
- Dark mode-specific adjustments for readability and contrast
- Component-specific theme adaptations

## Dark Theme Implementation Details

### Theme Structure
- Base theme with shared properties (spacing, borders, animations)
- Light theme extends base theme with light-specific colors
- Dark theme extends base theme with dark-specific colors
- Theme context allows toggling between modes

### Color Adaptation Strategy
- Background colors have multiple levels for layering (primary, secondary, tertiary)
- Text colors have different contrast levels (primary, secondary, tertiary)
- Border colors adapt to provide proper definition in both themes
- Shadow styles adjust for better visibility in dark mode
- Each component accesses theme via props from styled-components

### Accessibility Considerations
- Text selection is styled for visibility in both themes
- Input fields have proper contrast against backgrounds
- Interactive elements maintain distinction in both themes
- Focus indicators remain visible in dark mode
- Table row selection is clearly visible 
- Status indicators maintain their semantic meaning in both themes

## Planned Testing Strategy

### Unit Testing
- Component testing with React Testing Library
- Hook testing for custom hooks
- Utility function testing

### Integration Testing
- User flows across multiple components
- Form submission and validation
- API interaction
- Theme switching functionality

### Accessibility Testing
- Color contrast verification
- Keyboard navigation testing
- Screen reader compatibility
- Focus management 

## TypeScript Implementation

### Type Definitions
- Interfaces for all data models (User, Role, Permission, etc.)
- Props interfaces for all React components
- Props interfaces for styled components with custom props
- Enums for predefined sets of values (status types, etc.)
- Type assertions for narrowing types where needed
- Generics for reusable components and functions

### TypeScript Best Practices
- Explicit return types for functions
- Explicit type parameters for generic components
- Union types for variables that can have multiple types
- Type guards for runtime type checking
- Unused parameters prefixed with underscore
- Import aliases to resolve naming conflicts

### Common TypeScript Patterns
```tsx
// Props interface for a component
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  size: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
  onClick?: () => void;
}

// Props interface for a styled component
interface StyledButtonProps {
  $variant: 'primary' | 'secondary' | 'tertiary';
  $size: 'small' | 'medium' | 'large';
  $isFullWidth?: boolean;
}

// Data model interface
interface User {
  id: string;
  username: string;
  role: 'admin' | 'teacher' | 'student';
  fullName?: string;
  email?: string;
}

// Function with explicit return type
const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
}

// Unused parameter with underscore
const handleChange = (_event: React.ChangeEvent<HTMLInputElement>, value: string): void => {
  console.log(value);
}

// Import alias to resolve naming conflicts
import { User as UserType } from '../../types/User';
```

### Linter Configuration
- ESLint with TypeScript parser
- Rules enforcing consistent code style
- No unused variables rule (with underscore exception)
- Proper naming conventions
- Import sorting rules
- Accessibility rules for React components

## Dark Theme Implementation Details

### Theme Structure
- Base theme with shared properties (spacing, borders, animations)
- Light theme extends base theme with light-specific colors
- Dark theme extends base theme with dark-specific colors
- Theme context allows toggling between modes

### Color Adaptation Strategy
- Background colors have multiple levels for layering (primary, secondary, tertiary)
- Text colors have different contrast levels (primary, secondary, tertiary)
- Border colors adapt to provide proper definition in both themes
- Shadow styles adjust for better visibility in dark mode
- Each component accesses theme via props from styled-components

### Accessibility Considerations
- Text selection is styled for visibility in both themes
- Input fields have proper contrast against backgrounds
- Interactive elements maintain distinction in both themes
- Focus indicators remain visible in dark mode
- Table row selection is clearly visible 
- Status indicators maintain their semantic meaning in both themes

## Planned Testing Strategy

### Unit Testing
- Component testing with React Testing Library
- Hook testing for custom hooks
- Utility function testing

### Integration Testing
- User flows across multiple components
- Form submission and validation
- API interaction
- Theme switching functionality

### Accessibility Testing
- Color contrast verification
- Keyboard navigation testing
- Screen reader compatibility
- Focus management 