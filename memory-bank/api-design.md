# LMS API Design

## API Overview

The LMS API will be structured around RESTful principles, with endpoints organized by resource type and secured using JWT authentication. The API will handle all data operations for the three main panels (Admin, Teacher, Student) and enforce role-based access control.

## Base URL Structure

```
/api/v1/{resource}
```

## Authentication Endpoints

```
POST /api/v1/auth/login
- Request: { email, password }
- Response: { token, refreshToken, user }
```

```
POST /api/v1/auth/refresh
- Request: { refreshToken }
- Response: { token, refreshToken }
```

```
POST /api/v1/auth/logout
- Request: { }
- Response: { message }
```

```
GET /api/v1/auth/me
- Response: { user }
```

## User Management Endpoints

```
GET /api/v1/users
- Query Parameters: role, page, limit, search
- Response: { users: [], total, page, limit }
```

```
GET /api/v1/users/:id
- Response: { user }
```

```
POST /api/v1/users
- Request: { email, password, firstName, lastName, role, ... }
- Response: { user }
```

```
PUT /api/v1/users/:id
- Request: { email, firstName, lastName, ... }
- Response: { user }
```

```
DELETE /api/v1/users/:id
- Response: { message }
```

```
PUT /api/v1/users/:id/activate
- Response: { user }
```

```
PUT /api/v1/users/:id/deactivate
- Response: { user }
```

```
POST /api/v1/users/:id/roles
- Request: { roleId }
- Response: { user }
```

```
DELETE /api/v1/users/:id/roles/:roleId
- Response: { user }
```

## Role and Permission Endpoints

```
GET /api/v1/roles
- Response: { roles: [] }
```

```
GET /api/v1/roles/:id
- Response: { role, permissions: [] }
```

```
POST /api/v1/roles
- Request: { name, description }
- Response: { role }
```

```
PUT /api/v1/roles/:id
- Request: { name, description }
- Response: { role }
```

```
DELETE /api/v1/roles/:id
- Response: { message }
```

```
POST /api/v1/roles/:id/permissions
- Request: { permissionId }
- Response: { role, permissions: [] }
```

```
DELETE /api/v1/roles/:id/permissions/:permissionId
- Response: { role, permissions: [] }
```

```
GET /api/v1/permissions
- Response: { permissions: [] }
```

## Class and Section Endpoints

```
GET /api/v1/classes
- Query Parameters: active, page, limit
- Response: { classes: [], total, page, limit }
```

```
GET /api/v1/classes/:id
- Response: { class, sections: [] }
```

```
POST /api/v1/classes
- Request: { name, description, academicYear, isActive }
- Response: { class }
```

```
PUT /api/v1/classes/:id
- Request: { name, description, academicYear, isActive }
- Response: { class }
```

```
DELETE /api/v1/classes/:id
- Response: { message }
```

```
GET /api/v1/classes/:id/sections
- Response: { sections: [] }
```

```
POST /api/v1/classes/:id/sections
- Request: { name, description, isActive }
- Response: { section }
```

```
PUT /api/v1/sections/:id
- Request: { name, description, isActive }
- Response: { section }
```

```
DELETE /api/v1/sections/:id
- Response: { message }
```

## Subject Endpoints

```
GET /api/v1/subjects
- Query Parameters: active, page, limit
- Response: { subjects: [], total, page, limit }
```

```
GET /api/v1/subjects/:id
- Response: { subject }
```

```
POST /api/v1/subjects
- Request: { name, description, isActive }
- Response: { subject }
```

```
PUT /api/v1/subjects/:id
- Request: { name, description, isActive }
- Response: { subject }
```

```
DELETE /api/v1/subjects/:id
- Response: { message }
```

```
GET /api/v1/classes/:id/subjects
- Response: { subjects: [] }
```

```
POST /api/v1/classes/:id/subjects
- Request: { subjectId, teacherId }
- Response: { classSubject }
```

```
PUT /api/v1/classes/:id/subjects/:subjectId
- Request: { teacherId, isActive }
- Response: { classSubject }
```

```
DELETE /api/v1/classes/:id/subjects/:subjectId
- Response: { message }
```

## Student Class Endpoints

```
GET /api/v1/students/:id/classes
- Response: { classes: [] }
```

```
POST /api/v1/students/:id/classes
- Request: { classId, sectionId }
- Response: { studentClass }
```

```
PUT /api/v1/students/:id/classes/:classId
- Request: { sectionId, isActive }
- Response: { studentClass }
```

```
DELETE /api/v1/students/:id/classes/:classId
- Response: { message }
```

## Lesson and Educational Content Endpoints

```
GET /api/v1/subjects/:id/lessons
- Query Parameters: published, page, limit
- Response: { lessons: [], total, page, limit }
```

```
GET /api/v1/lessons/:id
- Response: { lesson, materials: [], tests: [], flashcards: [] }
```

```
POST /api/v1/subjects/:id/lessons
- Request: { classId, title, description, sequenceNumber, isPublished }
- Response: { lesson }
```

```
PUT /api/v1/lessons/:id
- Request: { title, description, sequenceNumber, isPublished }
- Response: { lesson }
```

```
DELETE /api/v1/lessons/:id
- Response: { message }
```

```
GET /api/v1/lessons/:id/materials
- Response: { materials: [] }
```

```
POST /api/v1/lessons/:id/materials
- Request: multipart/form-data
  - title
  - description
  - file
  - isPublished
- Response: { material }
```

```
PUT /api/v1/materials/:id
- Request: { title, description, isPublished }
- Response: { material }
```

```
DELETE /api/v1/materials/:id
- Response: { message }
```

## Test Endpoints

```
GET /api/v1/lessons/:id/tests
- Response: { tests: [] }
```

```
POST /api/v1/lessons/:id/tests
- Request: { title, description, timeLimitMinutes, passingScore, isPublished }
- Response: { test }
```

```
PUT /api/v1/tests/:id
- Request: { title, description, timeLimitMinutes, passingScore, isPublished }
- Response: { test }
```

```
DELETE /api/v1/tests/:id
- Response: { message }
```

```
GET /api/v1/tests/:id/questions
- Response: { questions: [] }
```

```
POST /api/v1/tests/:id/questions
- Request: { questionText, questionType, points, sequenceNumber, options: [] }
- Response: { question }
```

```
PUT /api/v1/questions/:id
- Request: { questionText, questionType, points, sequenceNumber }
- Response: { question }
```

```
DELETE /api/v1/questions/:id
- Response: { message }
```

```
POST /api/v1/questions/:id/options
- Request: { optionText, isCorrect, sequenceNumber }
- Response: { option }
```

```
PUT /api/v1/options/:id
- Request: { optionText, isCorrect, sequenceNumber }
- Response: { option }
```

```
DELETE /api/v1/options/:id
- Response: { message }
```

## Flashcard Endpoints

```
GET /api/v1/lessons/:id/flashcards
- Response: { flashcards: [] }
```

```
POST /api/v1/lessons/:id/flashcards
- Request: { frontContent, backContent }
- Response: { flashcard }
```

```
PUT /api/v1/flashcards/:id
- Request: { frontContent, backContent }
- Response: { flashcard }
```

```
DELETE /api/v1/flashcards/:id
- Response: { message }
```

## Attendance Endpoints

```
GET /api/v1/classes/:id/subjects/:subjectId/attendance
- Query Parameters: date, studentId
- Response: { attendance: [] }
```

```
POST /api/v1/classes/:id/subjects/:subjectId/attendance
- Request: { date, records: [{ studentId, status, remarks }] }
- Response: { message, records: [] }
```

```
PUT /api/v1/attendance/:id
- Request: { status, remarks }
- Response: { attendance }
```

## Test Submission Endpoints

```
GET /api/v1/tests/:id/submissions
- Query Parameters: studentId
- Response: { submissions: [] }
```

```
GET /api/v1/students/:id/test-submissions
- Response: { submissions: [] }
```

```
POST /api/v1/tests/:id/start
- Response: { submission }
```

```
PUT /api/v1/test-submissions/:id/complete
- Response: { submission }
```

```
POST /api/v1/test-submissions/:id/responses
- Request: { questionId, selectedOptionId, essayResponse }
- Response: { response }
```

```
PUT /api/v1/test-submissions/:id/grade
- Request: { responses: [{ responseId, isCorrect, pointsAwarded }] }
- Response: { submission }
```

## Student Progress Endpoints

```
GET /api/v1/students/:id/progress
- Query Parameters: materialId
- Response: { progress: [] }
```

```
POST /api/v1/students/:id/progress
- Request: { materialId, status, completionPercentage }
- Response: { progress }
```

```
PUT /api/v1/student-progress/:id
- Request: { status, completionPercentage }
- Response: { progress }
```

## Announcement Endpoints

```
GET /api/v1/announcements
- Query Parameters: active, audience, classId, page, limit
- Response: { announcements: [], total, page, limit }
```

```
GET /api/v1/announcements/:id
- Response: { announcement }
```

```
POST /api/v1/announcements
- Request: { title, content, targetAudience, targetClassId, publishedAt, expiresAt, isActive }
- Response: { announcement }
```

```
PUT /api/v1/announcements/:id
- Request: { title, content, targetAudience, targetClassId, publishedAt, expiresAt, isActive }
- Response: { announcement }
```

```
DELETE /api/v1/announcements/:id
- Response: { message }
```

## Family Connection Endpoints

```
GET /api/v1/students/:id/family-connections
- Response: { connections: [] }
```

```
POST /api/v1/students/:id/family-connections
- Request: { parentEmail, relationshipType }
- Response: { connection }
```

```
PUT /api/v1/family-connections/:id
- Request: { parentEmail, relationshipType, isActive }
- Response: { connection }
```

```
DELETE /api/v1/family-connections/:id
- Response: { message }
```

## Family Message Endpoints

```
GET /api/v1/students/:id/family-messages
- Response: { messages: [] }
```

```
GET /api/v1/teachers/:id/family-messages
- Response: { messages: [] }
```

```
POST /api/v1/students/:id/family-messages
- Request: { familyConnectionId, teacherId, subject, content }
- Response: { message }
```

```
PUT /api/v1/family-messages/:id/read
- Response: { message }
```

## AI Assistant Endpoints

```
POST /api/v1/lessons/:id/ai-assistant
- Request: { question }
- Response: { answer }
```

## API Error Handling

All endpoints will return standardized error responses:

```
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": { } // Optional additional information
  }
}
```

Common error codes:
- `UNAUTHORIZED`: Authentication required
- `FORBIDDEN`: Permission denied
- `NOT_FOUND`: Resource not found
- `VALIDATION_ERROR`: Invalid input data
- `INTERNAL_ERROR`: Server error

## API Security Patterns

1. **JWT Authentication**: All requests (except login) require a valid JWT token
2. **Role-Based Access Control**: Endpoints check user roles against required permissions
3. **Input Validation**: All request data validated before processing
4. **Rate Limiting**: Prevent abuse through request rate limiting
5. **CORS Configuration**: Restrict access to approved domains 