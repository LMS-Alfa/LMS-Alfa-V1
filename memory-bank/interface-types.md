# LMS Interface Types

This document records the TypeScript interfaces used throughout the LMS application. These interfaces provide consistent data type definitions across components and pages.

## User Management Interfaces

### User Interface

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
  createdAt: string;
}
```

### Role Interface

```typescript
interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  usersCount: number;
  createdAt: string;
}
```

### Permission Interface

```typescript
interface Permission {
  id: string;
  name: string;
  description: string;
}
```

## Academic Structure Interfaces

### Subject Interface

```typescript
interface Subject {
  id: string;
  name: string;
  description: string;
  category: string;
  color: string;
  classesCount: number;
  status: 'active' | 'inactive';
  createdAt: string;
}
```

### Class Interface

```typescript
interface Class {
  id: string;
  name: string;
  description: string;
  year: string;
  section: string;
  studentsCount: number;
  subjectsCount: number;
  teacher: string;
  status: 'active' | 'inactive';
  color: string;
  createdAt: string;
}
```

## Form Interfaces

### Role Form Props

```typescript
interface RoleFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (roleData: Omit<Role, 'id'>) => void;
  initialData?: Role;
  formTitle: string;
}
```

### Permissions Modal Props

```typescript
interface PermissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  role: Role;
  allPermissions: Permission[];
  onSave: (roleId: string, permissionIds: string[]) => void;
}
```

## Styled Component Props

### Active State Props

```typescript
interface ActiveProps {
  $isActive: boolean;
}
```

### Status Props

```typescript
interface StatusProps {
  $status: string;
}
```

### Header Cell Props

```typescript
interface HeaderCellProps {
  width?: string;
}
```

### Collapsible Props

```typescript
interface CollapsibleProps {
  $isCollapsed: boolean;
  $isMobile?: boolean;
}
```

### Input Props

```typescript
interface InputProps {
  $hasError?: boolean;
}
```

## Notes on Interface Usage

- Interfaces are defined in dedicated type files or at the top of component files when specific to that component
- The `$` prefix in prop names indicates transient props in styled-components (not passed to the DOM)
- Enums are used for fixed sets of values (like status types)
- Discriminated unions are used for complex state handling
- We use TypeScript's utility types (Omit, Pick, Partial) to create derived interface types