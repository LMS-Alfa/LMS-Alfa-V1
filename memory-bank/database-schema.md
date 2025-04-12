# LMS Database Schema Design

## Database Overview

The LMS database will be structured to support the three main panels (Admin, Teacher, Student) and all the functionalities required by the different user roles. We'll be using PostgreSQL with a relational schema to manage the complex relationships between users, roles, content, and interactions.

## Core Entities

### Users and Authentication

```
Table: users
- id: UUID (PK)
- email: VARCHAR (unique)
- password_hash: VARCHAR
- first_name: VARCHAR
- last_name: VARCHAR
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
- last_login: TIMESTAMP
- is_active: BOOLEAN
- profile_image_url: VARCHAR (nullable)
```

```
Table: roles
- id: UUID (PK)
- name: VARCHAR (unique) - e.g., "SUPER_ADMIN", "TEACHER_ADMIN", "STUDENT_ADMIN", "RECTOR", "MODEL_LEADER", "TEACHER", "STUDENT"
- description: TEXT
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

```
Table: user_roles
- id: UUID (PK)
- user_id: UUID (FK to users.id)
- role_id: UUID (FK to roles.id)
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
- created_by: UUID (FK to users.id)
```

```
Table: permissions
- id: UUID (PK)
- name: VARCHAR (unique)
- description: TEXT
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

```
Table: role_permissions
- id: UUID (PK)
- role_id: UUID (FK to roles.id)
- permission_id: UUID (FK to permissions.id)
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

### Academic Structure

```
Table: classes
- id: UUID (PK)
- name: VARCHAR
- description: TEXT
- academic_year: VARCHAR
- is_active: BOOLEAN
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
- created_by: UUID (FK to users.id)
```

```
Table: sections
- id: UUID (PK)
- class_id: UUID (FK to classes.id)
- name: VARCHAR
- description: TEXT
- is_active: BOOLEAN
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
- created_by: UUID (FK to users.id)
```

```
Table: subjects
- id: UUID (PK)
- name: VARCHAR
- description: TEXT
- is_active: BOOLEAN
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
- created_by: UUID (FK to users.id)
```

```
Table: class_subjects
- id: UUID (PK)
- class_id: UUID (FK to classes.id)
- subject_id: UUID (FK to subjects.id)
- teacher_id: UUID (FK to users.id, where user has TEACHER role)
- is_active: BOOLEAN
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
- created_by: UUID (FK to users.id)
```

```
Table: student_classes
- id: UUID (PK)
- student_id: UUID (FK to users.id, where user has STUDENT role)
- class_id: UUID (FK to classes.id)
- section_id: UUID (FK to sections.id)
- enrollment_date: DATE
- is_active: BOOLEAN
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
- created_by: UUID (FK to users.id)
```

### Educational Content

```
Table: lessons
- id: UUID (PK)
- subject_id: UUID (FK to subjects.id)
- class_id: UUID (FK to classes.id)
- title: VARCHAR
- description: TEXT
- sequence_number: INTEGER
- is_published: BOOLEAN
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
- created_by: UUID (FK to users.id)
```

```
Table: materials
- id: UUID (PK)
- lesson_id: UUID (FK to lessons.id)
- title: VARCHAR
- description: TEXT
- file_type: VARCHAR (e.g., "VIDEO", "PDF", "DOC", "PPT")
- file_url: VARCHAR
- is_published: BOOLEAN
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
- created_by: UUID (FK to users.id)
```

```
Table: tests
- id: UUID (PK)
- lesson_id: UUID (FK to lessons.id)
- title: VARCHAR
- description: TEXT
- time_limit_minutes: INTEGER (nullable)
- passing_score: INTEGER (nullable)
- is_published: BOOLEAN
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
- created_by: UUID (FK to users.id)
```

```
Table: test_questions
- id: UUID (PK)
- test_id: UUID (FK to tests.id)
- question_text: TEXT
- question_type: VARCHAR (e.g., "MULTIPLE_CHOICE", "TRUE_FALSE", "ESSAY")
- points: INTEGER
- sequence_number: INTEGER
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

```
Table: test_options
- id: UUID (PK)
- question_id: UUID (FK to test_questions.id)
- option_text: TEXT
- is_correct: BOOLEAN
- sequence_number: INTEGER
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

```
Table: flashcards
- id: UUID (PK)
- lesson_id: UUID (FK to lessons.id)
- front_content: TEXT
- back_content: TEXT
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
- created_by: UUID (FK to users.id)
```

### Student Progress and Interaction

```
Table: attendance
- id: UUID (PK)
- class_subject_id: UUID (FK to class_subjects.id)
- student_id: UUID (FK to users.id, where user has STUDENT role)
- date: DATE
- status: VARCHAR (e.g., "PRESENT", "ABSENT", "LATE")
- remarks: TEXT (nullable)
- recorded_by: UUID (FK to users.id)
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

```
Table: test_submissions
- id: UUID (PK)
- test_id: UUID (FK to tests.id)
- student_id: UUID (FK to users.id, where user has STUDENT role)
- start_time: TIMESTAMP
- completion_time: TIMESTAMP (nullable)
- score: INTEGER (nullable)
- status: VARCHAR (e.g., "IN_PROGRESS", "COMPLETED", "GRADED")
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

```
Table: test_responses
- id: UUID (PK)
- submission_id: UUID (FK to test_submissions.id)
- question_id: UUID (FK to test_questions.id)
- selected_option_id: UUID (FK to test_options.id, nullable)
- essay_response: TEXT (nullable)
- is_correct: BOOLEAN (nullable)
- points_awarded: INTEGER (nullable)
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

```
Table: student_progress
- id: UUID (PK)
- student_id: UUID (FK to users.id, where user has STUDENT role)
- material_id: UUID (FK to materials.id)
- status: VARCHAR (e.g., "NOT_STARTED", "IN_PROGRESS", "COMPLETED")
- completion_percentage: INTEGER
- last_accessed: TIMESTAMP
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

### Communication

```
Table: announcements
- id: UUID (PK)
- title: VARCHAR
- content: TEXT
- target_audience: VARCHAR (e.g., "ALL", "TEACHERS", "STUDENTS", "CLASS_SPECIFIC")
- target_class_id: UUID (FK to classes.id, nullable)
- published_at: TIMESTAMP
- expires_at: TIMESTAMP (nullable)
- is_active: BOOLEAN
- created_by: UUID (FK to users.id)
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

```
Table: family_connections
- id: UUID (PK)
- student_id: UUID (FK to users.id, where user has STUDENT role)
- parent_email: VARCHAR
- relationship_type: VARCHAR (e.g., "PARENT", "GUARDIAN")
- is_active: BOOLEAN
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
- created_by: UUID (FK to users.id)
```

```
Table: family_messages
- id: UUID (PK)
- student_id: UUID (FK to users.id, where user has STUDENT role)
- family_connection_id: UUID (FK to family_connections.id)
- teacher_id: UUID (FK to users.id, where user has TEACHER role)
- subject: VARCHAR
- content: TEXT
- is_read: BOOLEAN
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

## Indexes

- users(email)
- user_roles(user_id, role_id)
- role_permissions(role_id, permission_id)
- class_subjects(class_id, subject_id)
- student_classes(student_id, class_id)
- materials(lesson_id)
- tests(lesson_id)
- attendance(class_subject_id, student_id, date)
- test_submissions(test_id, student_id)
- family_connections(student_id, parent_email)
- family_messages(student_id, family_connection_id)

## Relationships Diagram

```
users <--> user_roles <--> roles <--> role_permissions <--> permissions
   |         |
   |         v
   +----> classes <--> sections
   |         |
   |         v
   +----> subjects <--> class_subjects
   |         |
   |         v
   +----> student_classes
   |         |
   |         v
   +----> lessons <--> materials, tests, flashcards
   |         |
   |         v
   +----> attendance, test_submissions, student_progress
   |         |
   |         v
   +----> family_connections <--> family_messages
```

## Migration Strategy

1. Create base tables for users, roles, and permissions
2. Set up academic structure (classes, sections, subjects)
3. Establish educational content tables
4. Create student progress and interaction tables
5. Set up communication tables
6. Create indexes for performance optimization
7. Seed with initial demo data

## Demo Data Approach

The demo data will include:
- Admin accounts (1 Main Admin, 1 Teacher Account Admin, 1 Student Account Admin)
- Teacher accounts (1 Rector, 1 Model Leader, 10 Regular Teachers)
- Student accounts (20 students)
- Sample classes, sections, and subjects
- Example educational content (lessons, materials, tests, flashcards)
- Mock attendance and test submissions
- Sample announcements and family messages 