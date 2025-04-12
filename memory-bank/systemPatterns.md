# LMS System Patterns

## System Architecture

The LMS is structured as a single-page application (SPA) with three distinct but interconnected panels:

1. **Admin Panel**: Administrative control center for user and system management
2. **Teacher Panel**: Interface for educators to manage content and track students
3. **Student Panel**: Learning interface for students to access educational content

### Current Implementation Status

We have implemented the foundation of the Admin Panel UI, with significant progress in:
- Base layout structure with responsive sidebar, header, and footer
- Navigation system between admin sections
- Mobile-friendly adaptation of the interface
- Dashboard page structure (content in progress)
- Key admin pages: Users, Subjects, Classes, and Roles with different design approaches
- Data filtering and search functionality
- Role-based access control interface with permissions management

Other panels and backend systems are planned but not yet implemented.

## Key Technical Decisions

### Frontend Architecture

- **Component-Based Design**: UI is built from modular, reusable components
- **Layout Structure**: Each panel uses a consistent layout template with panel-specific components
- **Responsive Design**: Mobile-first approach with adaptive layouts for different screen sizes
- **Styling Approach**: Styled-components with ThemeProvider for consistent design system
- **Page Design Philosophy**: Different UI approaches for different data types (tables vs cards)
- **Modal Dialog Pattern**: Using modal overlays for focused data entry and detail views

### Current UI Implementation

- **Admin Layout**: Container for all admin pages with consistent structure
- **Navigation System**: Collapsible sidebar with icon and text modes
- **Mobile Navigation**: Overlay sidebar with backdrop for mobile devices
- **Theming**: Consistent color palette, spacing, and typography
- **Data Pages**: Implementation of Users, Subjects, Classes, and Roles management interfaces
- **View Modes**: Toggle between grid and list views for Classes page
- **Permissions Management**: Modal interface for managing role permissions
- **Form Components**: Reusable form components for data entry

## Design Patterns in Use

### Component Patterns

#### Layout Pattern
```
<AdminLayout>
  <Sidebar />
  <MainContent>
    <Header />
    <ContentWrapper>
      {/* Page content */}
    </ContentWrapper>
    <Footer />
  </MainContent>
</AdminLayout>
```

#### Responsive Sidebar Pattern
- Expanded mode with text labels on larger screens
- Collapsed mode with only icons on medium screens
- Overlay mode on mobile devices
- Toggle button for manual control

#### Conditional Rendering Pattern
```tsx
{isCollapsed ? 
  <CollapsedView /> : 
  <ExpandedView />
}
```

#### Animation Pattern
```tsx
<AnimatePresence>
  {!isCollapsed && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {content}
    </motion.div>
  )}
</AnimatePresence>
```

#### Table Data Pattern
```tsx
<TableHeader>
  <HeaderRow>
    <HeaderCell width="50px">
      <CheckboxContainer>
        <Checkbox 
          checked={selectedItems.length === items.length && items.length > 0}
          onChange={handleSelectAll}
        />
      </CheckboxContainer>
    </HeaderCell>
    <HeaderCell>Name</HeaderCell>
    <HeaderCell>Email</HeaderCell>
    <HeaderCell>Role</HeaderCell>
    <HeaderCell>Status</HeaderCell>
    <HeaderCell>Actions</HeaderCell>
  </HeaderRow>
</TableHeader>
<TableBody>
  {items.map(item => (
    <TableRow key={item.id}>
      <TableCell>
        <Checkbox 
          checked={selectedItems.includes(item.id)}
          onChange={() => handleSelectItem(item.id)}
        />
      </TableCell>
      <TableCell>{item.name}</TableCell>
      {/* Other cells */}
      <TableCell>
        <ActionButtons>
          <ActionButton onClick={() => handleEdit(item)}>
            <FiEdit />
          </ActionButton>
          <ActionButton onClick={() => handleDelete(item.id)}>
            <FiTrash2 />
          </ActionButton>
        </ActionButtons>
      </TableCell>
    </TableRow>
  ))}
</TableBody>
```

#### Card Grid Pattern
```tsx
<ClassesGrid>
  <AnimatePresence>
    {classes.map(cls => (
      <ClassCard 
        key={cls.id}
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
      >
        <CardHeader>
          <CardTitle>{cls.name}</CardTitle>
          <CardActions>
            <ActionButton />
          </CardActions>
        </CardHeader>
        <CardContent>
          {/* Card content */}
        </CardContent>
        <CardFooter>
          <StatusBadge status={cls.status} />
        </CardFooter>
      </ClassCard>
    ))}
  </AnimatePresence>
</ClassesGrid>
```

#### View Toggle Pattern
```tsx
<ViewToggle>
  <ViewButton 
    $isActive={viewMode === 'grid'} 
    onClick={() => setViewMode('grid')}
  >
    <FiGrid />
  </ViewButton>
  <ViewButton 
    $isActive={viewMode === 'list'} 
    onClick={() => setViewMode('list')}
  >
    <FiList />
  </ViewButton>
</ViewToggle>

{viewMode === 'grid' ? (
  <GridView items={items} />
) : (
  <ListView items={items} />
)}
```

### State Management Patterns

#### Component State
```tsx
const [isCollapsed, setIsCollapsed] = useState(false);

const toggleSidebar = () => {
  setIsCollapsed(!isCollapsed);
};
```

#### Filter State Management
```tsx
const [searchTerm, setSearchTerm] = useState('');
const [filterCategory, setFilterCategory] = useState('');
const [filterStatus, setFilterStatus] = useState('');

const filteredItems = items.filter(item => {
  const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesCategory = filterCategory ? item.category === filterCategory : true;
  const matchesStatus = filterStatus ? item.status === filterStatus : true;
  
  return matchesSearch && matchesCategory && matchesStatus;
});
```

#### Selection State Pattern
```tsx
const [selectedItems, setSelectedItems] = useState<string[]>([]);

const handleSelectItem = (itemId: string) => {
  if (selectedItems.includes(itemId)) {
    setSelectedItems(selectedItems.filter(id => id !== itemId));
  } else {
    setSelectedItems([...selectedItems, itemId]);
  }
};

const handleSelectAll = () => {
  if (selectedItems.length === items.length) {
    setSelectedItems([]);
  } else {
    setSelectedItems(items.map(item => item.id));
  }
};
```

#### Modal Form Pattern
```tsx
const [isFormOpen, setIsFormOpen] = useState(false);
const [currentItem, setCurrentItem] = useState<Item | null>(null);

// Open form to add a new item
const handleAddItem = () => {
  setCurrentItem(null);
  setIsFormOpen(true);
};

// Open form to edit an existing item
const handleEditItem = (item: Item) => {
  setCurrentItem(item);
  setIsFormOpen(true);
};

// Handle form submission
const handleFormSubmit = (itemData: Omit<Item, 'id'>) => {
  if (currentItem) {
    // Update existing item
    console.log('Updating item:', { id: currentItem.id, ...itemData });
  } else {
    // Create new item
    console.log('Creating new item:', itemData);
  }
  setIsFormOpen(false);
};

// Handle form close
const handleFormClose = () => {
  setIsFormOpen(false);
  setCurrentItem(null);
};

// In render:
<ItemForm
  isOpen={isFormOpen}
  onClose={handleFormClose}
  onSubmit={handleFormSubmit}
  initialData={currentItem || undefined}
  formTitle={currentItem ? 'Edit Item' : 'Add New Item'}
/>
```

#### Permissions Management Pattern
```tsx
const [isPermissionsModalOpen, setIsPermissionsModalOpen] = useState(false);
const [currentRole, setCurrentRole] = useState<Role | null>(null);

// Open permissions modal for a role
const handleManagePermissions = (role: Role) => {
  setCurrentRole(role);
  setIsPermissionsModalOpen(true);
};

// Handle permissions update
const handlePermissionsUpdate = (roleId: string, permissionIds: string[]) => {
  // Update role's permissions
  setRoles(roles.map(role => 
    role.id === roleId 
      ? { 
          ...role, 
          permissions: allPermissions.filter(p => permissionIds.includes(p.id))
        } 
      : role
  ));
};

// In render:
{currentRole && (
  <PermissionsModal
    isOpen={isPermissionsModalOpen}
    onClose={handlePermissionsModalClose}
    role={currentRole}
    allPermissions={allPermissions}
    onSave={handlePermissionsUpdate}
  />
)}
```

#### Grouped Content Pattern
```tsx
// Group permissions by category
const groupedPermissions = permissions.reduce((groups, permission) => {
  const category = permission.name.split(':')[0];
  if (!groups[category]) {
    groups[category] = [];
  }
  groups[category].push(permission);
  return groups;
}, {} as Record<string, Permission[]>);

// In render:
{Object.entries(groupedPermissions).map(([category, permissions]) => (
  <CategorySection key={category}>
    <CategoryHeader>
      <CategoryName>{category}</CategoryName>
      <CategoryActions>
        <SelectAllButton onClick={() => handleSelectCategory(category)}>
          Select All
        </SelectAllButton>
      </CategoryActions>
    </CategoryHeader>
    <ItemsList>
      {permissions.map(permission => (
        <PermissionItem key={permission.id}>
          {/* Permission details */}
        </PermissionItem>
      ))}
    </ItemsList>
  </CategorySection>
))}
```

#### Prop Drilling (for current implementation)
```tsx
<Sidebar 
  isCollapsed={isSidebarCollapsed} 
  toggleSidebar={toggleSidebar} 
/>
```

### Styling Patterns

#### Styled Components with Props
```tsx
const SidebarContainer = styled.div<{ $isCollapsed: boolean }>`
  width: ${({ $isCollapsed }) => ($isCollapsed ? '80px' : '280px')};
  transition: width 0.3s ease;
`;
```

#### Theme-Based Styling
```tsx
const Button = styled.button`
  background-color: ${props => props.theme.colors.primary[600]};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
`;
```

#### Status-Based Styling
```tsx
interface StatusBadgeProps {
  $status: string;
}

const StatusBadge = styled.div<StatusBadgeProps>`
  background-color: ${props => props.$status === 'active' 
    ? 'rgba(16, 185, 129, 0.1)' 
    : 'rgba(107, 114, 128, 0.1)'};
  color: ${props => props.$status === 'active' 
    ? 'rgb(16, 185, 129)' 
    : 'rgb(107, 114, 128)'};
`;
```

#### Color Indicator Pattern
```tsx
interface ColorProps {
  $color: string;
}

const ColorIndicator = styled.div<ColorProps>`
  background-color: ${props => props.$color};
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;
```

## Component Relationships

### Admin Panel Component Tree
```
AdminLayout
├── Sidebar
│   ├── LogoContainer
│   ├── MenuContainer
│   │   ├── MenuItem (Dashboard)
│   │   ├── MenuItem (User Management)
│   │   ├── MenuItem (Subjects)
│   │   ├── MenuItem (Classes)
│   │   ├── MenuItem (Timetables)
│   │   └── MenuItem (Settings)
│   └── ProfileSection
├── MainContent
│   ├── Header
│   │   ├── SearchContainer
│   │   └── HeaderActions
│   ├── ContentWrapper
│   │   └── [Page Content]
│   └── Footer
└── MobileOverlay (when in mobile view)
```

### Data Page Component Structure
```
DataPage (Users/Subjects/Classes)
├── PageHeader
│   ├── TitleSection
│   └── ActionButton (Add New)
├── ControlPanel
│   ├── SearchAndFilters
│   │   ├── SearchInput
│   │   └── FilterDropdowns
│   └── ViewToggle (Classes only)
├── DataDisplay
│   ├── Table View
│   │   ├── TableHeader
│   │   └── TableRows
│   └── OR Grid View (Classes)
│       └── Cards
└── Pagination
```

### Component Communication
- **Parent to Child**: Props passed down the component tree
- **Callbacks**: Functions passed from parent to child for state updates
- **Conditional Rendering**: Based on props or local state
- **Selection State**: Managing selected items for bulk actions

## Critical Implementation Paths

### Admin Panel Navigation Flow
1. User accesses the admin panel
2. AdminLayout renders with Sidebar and MainContent
3. Sidebar displays navigation options
4. User selects a menu item
5. React Router updates the URL
6. Corresponding page component renders in the ContentWrapper

### Responsive Adaptation Flow
1. Application loads and checks screen size
2. Sidebar adapts based on screen size (expanded, collapsed, or overlay)
3. User can manually toggle sidebar state
4. Layout adjusts content positioning based on sidebar state
5. Mobile view shows overlay with backdrop when sidebar is open

### Data Filtering Flow
1. User enters search term or selects filters
2. State updates with filter criteria
3. Filtered data is computed based on criteria
4. UI updates to show filtered results
5. Empty state is shown if no results match

### View Mode Switching Flow (Classes)
1. User selects grid or list view
2. View mode state updates
3. Conditional rendering shows appropriate view
4. Animations provide smooth transition between views
5. Layout adapts to the selected view mode

## User Interface Elements

#### Dashboard Elements (Work in Progress)
- Statistics cards for key metrics
- Recent activity feed
- Quick action buttons
- System status indicators

#### Admin Page Elements
- Page headers with title and primary action button
- Search and filter controls
- Data tables with sortable columns
- Card grids with visual indicators
- Status badges with color coding
- Action buttons for item management
- Empty states for no data/results
- Pagination controls

#### Navigation Elements
- Sidebar with hierarchical navigation
- Active state highlighting for current page
- Category grouping for related items
- Collapsible sections for better organization

## Planned Implementation Details

### Authentication System
- Login page with form validation
- JWT token management
- Protected routes with role-based access
- Session persistence with secure storage

### Data Management
- API service layer for data fetching
- State management for application data
- Caching strategy for performance optimization
- Error handling and retry mechanisms

### Form Management
- Reusable form components
- Validation patterns
- Error messaging system
- Modal dialogs for data entry 