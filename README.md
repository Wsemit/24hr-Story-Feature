[README.md](https://github.com/user-attachments/files/21534484/README.md)
#  24hr Story Feature — React + TypeScript + Vite

This project is a **Stories UI component** inspired by Instagram, where each story lasts for 24 hours. It supports **image upload**, story previews, and uses a mock **REST API** to store and retrieve stories using `json-server`.

##  Tech Stack:

-  **React** (Functional components & hooks)
-  **TypeScript**
-  **Vite** for fast development
-  **Tailwind CSS** for styling
-  **JSON Server** as a fake REST API backend
-  **ESLint** with support for React & TypeScript

---

##  Features

- Upload and view stories (images only)
- Each story expires after 24 hours
- Basic REST API integration using HTTP methods:
  - `GET` to fetch stories
  - `POST` to create new stories
- Image resizing for performance (via `<canvas>`)
- Clean and modern UI with responsive layout

---

##  Getting Started

### 1. Clone and install dependencies

```bash
git clone https://github.com/your-username/24hr-Story-Feature.git
cd 24hr-Story-Feature
npm install
```

### 2. Start the frontend

```bash
npm run dev
```

Runs the Vite dev server at:  
📍 `http://localhost:5173`

### 3. Start the mock API (json-server)

```bash
npm run api
```

Runs the fake REST API at:  
📍 `http://localhost:3000/stories`

---

##  REST API Endpoints

All stories are stored in `db.json` and served via `json-server`.

| Method | Endpoint                 | Description               |
|--------|--------------------------|---------------------------|
| GET    | `/stories`               | Fetch all stories         |
| POST   | `/stories`               | Create a new story        |

Example:

```ts
const res = await fetch("http://localhost:3000/stories");
const data = await res.json();
```

---

##  ESLint & Code Style

The project includes basic ESLint config. For production apps, extend it with:

```ts
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';
import { tseslint } from 'typescript-eslint';

export default tseslint.config([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

---

##  Experience with REST API / HTTP Methods

This project demonstrates hands-on experience working with:

- ✅ `fetch` API to perform `GET` and `POST` requests
- ✅ Using and managing async data via `useEffect`
- ✅ Integrating with RESTful endpoints
- ✅ Filtering and manipulating response data (e.g., 24-hour expiry logic)

---


## 📁 Folder Structure

```
src/
├── components/
│   ├── Stories.tsx
│   └── stories/...
├── hooks/
│   └── useImageUpload.ts
├── utils/
│   └── storyHelpers.ts
├── types/
│   └── index.ts
db.json
```

---

