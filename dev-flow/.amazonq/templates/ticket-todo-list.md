# [PROJ-1234] Ticket Title: Feature or Enhancement

---

## 🧠 Overview

Brief summary of the feature, its goal, and why it matters.

---

## 🎯 Current Scope

### ✅ Goals
- Enable users to upload a profile picture.
- Save and display the picture across sessions and pages.

### 🚫 Out of Scope
- No support for drag-and-drop.
- No client-side image cropping.

---

## ✅ TODO LIST: Implementation

> 📌 **Note**: All tasks below **must be completed** unless marked as `N/A` with a reason. Use `[x] DONE` to mark completed items. IMPLEMENT STEP BY STEP. DO NOT DO ALL AT ONCE.

### 📋 Phase 1 – UI Foundation
- [ ] Create upload button component
- [ ] Display image preview
- [ ] Add loading spinner for upload process

### 📁 Phase 2 – API Integration
- [ ] Create presigned URL endpoint
- [ ] Connect frontend to backend
- [ ] Handle error/success states with toast

### 🗄️ Phase 3 – Polish & QA
- [ ] Add Yup validation for file type and size
- [ ] Add unit tests (RTL)
- [ ] Add Playwright integration test for flow
- [ ] Document upload API in Confluence

---

## 🏗 Architecture Compliance

Ensure alignment with:
- [ ] Folder and component structure follows `feature-first` organization
- [ ] All API endpoints follow RESTful naming
- [ ] Reused hooks/components go in `shared/` or `lib/`

---

## 📊 Progress Tracking

> **Progress**: `6/9 tasks complete (66%)`  
Use this section to provide a high-level summary or use Jira subtasks with auto-calculation if supported.

---

## 🎉 Implementation Complete

### ✅ What Was Delivered
- Avatar uploader UI
- Image validation and S3 upload
- Persistent avatar shown across UI

### 🚀 Key Features Implemented
- Presigned URL upload
- Context-aware avatar display
- Upload feedback with toast

### 💡 Tech Decisions / Improvements
- Used `useReducer` for avatar state for better control
- Consolidated file upload logic into shared hook

---

## 🔄 Ready for Production?

- [ ] Feature tested on staging
- [ ] Verified with QA/Product
- [ ] Documentation updated
- [ ] Rollback plan defined (if needed)

---

## 🔗 Metadata

- **JIRA Issue**: [PROJ-1234](https://jira.company.com/browse/PROJ-1234)
- **Confluence**: [Link or N/A]
- **Figma**: [Figma Design](https://www.figma.com/file/...)
- **Status**: ✅ COMPLETED / 🚧 PENDING
- **Priority**: High / Medium / Low
- **Assignee**: @john-doe
- **Completion Date**: YYYY-MM-DD
