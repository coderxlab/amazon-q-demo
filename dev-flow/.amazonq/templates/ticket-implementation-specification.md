# [PROJ-1234] Add User Profile Picture Upload

---

## 📄 Document Metadata

- **JIRA Issue**: [PROJ-1234](https://your-jira-url.com/browse/PROJ-1234)
- **Feature**: User Profile Customization
- **User Story**: As a user, I want to upload a profile picture to personalize my account.
- **Confluence Doc**: N/A
- **Figma Link**: [Figma Design](https://www.figma.com/file/...)
- **Priority**: High
- **Assignee**: @john-doe
- **Status**: In Progress

---

## 1. 📌 Overview

### 1.1 Business Context

This feature allows users to upload a profile picture, enhancing personalization and improving user engagement. It supports our Q3 OKR: "Increase user retention by 10% via improved user experience and profile customization."

**Implementation Scope:**
- Frontend: File upload UI, image preview, error handling
- Backend: Image upload endpoint, validation, S3 storage
- Profile avatar display in header and profile page

---

### 1.2 Technical Context

- The frontend is built using React with TypeScript.
- Backend is a Fastify server.
- AWS S3 is used for file storage.
- Presigned URL method will be used to upload files directly to S3.
- Authenticated users only.

---

### 1.3 Success Criteria

- Profile picture is displayed immediately after upload.
- Supported formats: `.jpeg`, `.png`, `.webp`
- Max file size: 5MB
- Errors handled gracefully with toast feedback
- All tests pass in CI

---

## 2. 🧩 Functional Requirements

### 2.1 User Stories & Acceptance Criteria

#### 🧑‍🎤 User Story 1: Upload Profile Picture

> As a logged-in user, I want to upload a profile picture from my device.

- [ ] Only image files can be selected
- [ ] Show file preview before upload
- [ ] Show toast on upload success/failure
- [ ] Save avatar to backend and S3
- [ ] Display updated avatar in header/profile immediately

#### ⚠️ User Story 2: Handle Upload Errors

> As a user, I want to be informed if something goes wrong during upload.

- [ ] Upload fails gracefully with proper error message (toast)
- [ ] Invalid file types or sizes are rejected with feedback

### 2.2 Requirements

#### 2.2.1 Core Functionality (Must-Have)

- File input with image preview
- Validation (type and size)
- Backend endpoint to generate presigned URL
- Avatar updated globally via context/store
- Toast notifications

#### 2.2.2 Nice-to-Have Features

- Drag-and-drop support
- Image cropping before upload
- Avatar fallback (initials, Gravatar)

---

## 3. 🏗️ Technical Architecture

### 3.1 Module Structure

```

/components
└── ProfileAvatarUploader.tsx
/pages/api
└── upload-avatar.ts
/lib
└── s3-utils.ts

```
### 3.2 UI Component & API Architecture

**Component**: `ProfileAvatarUploader`

**Endpoint**: `POST /api/upload-avatar`

- **Request**:
  ```json
  {
    "fileName": "user123.png",
    "fileType": "image/png"
  }
  ```

- **Response**:

  ```json
  {
    "uploadUrl": "https://s3.amazonaws.com/...",
    "avatarUrl": "https://cdn.yourapp.com/user123.png"
  }
  ```

### 3.3 Data Models

```typescript
interface AvatarUploadRequest {
  fileName: string;
  fileType: string;
}

interface AvatarUploadResponse {
  uploadUrl: string;
  avatarUrl: string;
}
```

### 3.4 Implementation Patterns

* **Presigned Upload Flow** for security and performance
* **Toast-based notifications** for UX feedback
* **Avatar context** to propagate changes across UI
* **Schema validation** using `Yup`
---
## 4 Testing Strategy

### ✅ Unit Tests (Jest / RTL)

* Component renders correctly
* Validation fails on wrong input
* Calls upload handler on submit

### 🔄 Integration Tests (Playwright / Cypress)

* End-to-end upload flow (UI → backend → S3)
* Avatar displays after upload
* Test error scenarios: invalid file type/size, network failure

---

## 5. 🎯 Definition of Done

* [ ] All core acceptance criteria are met
* [ ] Feature is covered by unit & integration tests
* [ ] Deployed to staging and verified
* [ ] Documentation updated (README, Confluence)


