# 📝 ToLet Blog Platform (Frontend)

A modern blog platform built using **React**, **CSS**, and **Bootstrap**, focused on content creation, browsing, and role-based access.

---

## 🚀 Features

### ✅ Blog Listing
- Displays all blogs in a clean card layout (3 per row).
- Shows 6 blogs using pagination (3 per page).
- Includes **Trending** and **Latest** filters.
  - Trending → Blogs 1 to 6
  - Latest → Blogs 4 to 9

### ✅ Blog Details
- Clicking on a blog opens a dedicated blog page.
- Shows full blog content, image, author, date, and styling.

### ✅ Role-Based Access
- **General User** and **Content Creator** roles selectable during login (radio buttons).
- Only **Content Creators** can access the **"Add Blog"** page.
- If a General User tries to access it, they see a Bootstrap modal warning.

### ✅ Blog Creation
- Content Creators can:
  - Add blog title
  - Enter blog content
  - Upload an image
  - Select a category (optional)
- Neon-styled form with glowing UI (matches login page).
- On submit, shows a Bootstrap popup: “Details Submitted”.

### ✅ Authentication Simulation
- Role is saved using `localStorage`.
- No real backend or database — frontend logic only.

---

## 🛠 Tech Stack

| Frontend | UI/UX         | Routing        | Icons     |
|----------|---------------|----------------|-----------|
| React    | Bootstrap 5   | React Router   | react-icons |
| CSS3     | Neon Effects  | LocalStorage   | FontAwesome (via icons) |

---
