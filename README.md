# Cartzilla

A modern, responsive authentication system built with React, featuring Sign Up and Sign In pages with complete form validation and seamless navigation.

**Project successfully deployed on Vercel!**  
Live URL: https://cartzilla-phi.vercel.app/ 

## 🚀 Tech Stack

### Core Technologies
- **React 18** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS v3** - Utility-first CSS framework for styling
- **ShadCN UI** - High-quality React component library
- **Lucide React** - Beautiful icon library

### Key Libraries
```json
{
  "react": "^18.x",
  "tailwindcss": "^3.x",
  "@/components/ui/*": "shadcn components",
  "lucide-react": "^0.263.1"
}
```

## 📁 Project Structure

```
cartzilla/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.jsx
│   │       ├── input.jsx
│   │       ├── label.jsx
│   │       ├── checkbox.jsx
│   │       └── card.jsx
│   ├── App.jsx          # Main application with routing
│   ├── main.jsx         # Application entry point
│   └── index.css        # Tailwind CSS imports
├── public/
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Install Tailwind CSS v3
```bash
npm install -D tailwindcss@^3 postcss autoprefixer
```

### 3. Configure Tailwind CSS

**tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**postcss.config.js:**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 4. Setup Tailwind in CSS

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Run Development Server
```bash
npm run dev
```

## 🎯 Features

### 1. **Sign Up Page**
- Email validation (regex pattern)
- Password validation (minimum 8 characters)
- Privacy policy acceptance checkbox
- Social login options (Google, Facebook, Apple)
- Benefits showcase with animated cards
- Form error handling with user-friendly messages

### 2. **Sign In Page**
- Email validation
- Password validation
- "Remember me" checkbox
- Forgot password link
- Social login options
- Clean, centered layout

### 3. **Navigation System**
- Hash-based routing (no external router needed)
- Seamless page transitions
- Click "Sign in" → navigates to `/signin`
- Click "Sign up" → navigates to `/`
- Browser back/forward button support

### 4. **Responsive Design**
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px (single column)
  - Tablet/Desktop: ≥ 768px (two columns on Sign Up)
- Fluid typography and spacing
- Touch-friendly buttons and inputs

**Why Hash Routing?**
- No external dependencies (React Router not needed)
- Works without server configuration
- Lightweight and simple
- Perfect for small projects

## 🎨 Design System

### Color Palette
- **Primary:** Rose (500-600) - `#f43f5e` → `#e11d48`
- **Secondary:** Blue (500-600) - `#3b82f6` → `#2563eb`
- **Background:** Gradient from Slate to Blue
- **Text:** Gray scale (400-900)

### Typography
- **Headings:** Bold, tight tracking
- **Body:** 0.95rem, comfortable line-height
- **Labels:** Semibold, clear hierarchy

### Spacing
- Consistent gap system (4, 6, 8, 10)
- Generous padding on mobile (8) and desktop (12-14)

### Animations
- Smooth transitions (0.2-0.3s)
- Hover effects on cards and buttons
- Focus rings on inputs

## 📱 Responsive Breakpoints

```css
/* Mobile First */
default: mobile styles

/* Tablet & Desktop */
md: min-width: 768px
lg: min-width: 1024px
```

### Layout Changes
- **Sign Up Page:**
  - Mobile: Single column (form stacked)
  - Desktop: Two columns (form + benefits)
  
- **Sign In Page:**
  - All screens: Centered single column (max-width: 28rem)

## ✅ Form Validation Rules

| Field | Rule | Error Message |
|-------|------|---------------|
| Email | Valid email format | "Invalid email address" |
| Password | Min 8 characters | "Password must be at least 8 characters" |
| Privacy | Must be checked | "You must accept the Privacy Policy" |
| Remember Me | Optional | N/A |

## 🔐 Security Considerations

1. **Client-side validation only** - This is a frontend demo
2. **No actual authentication** - Would need backend integration
3. **Passwords not encrypted** - Display only, not stored
4. **Social login placeholders** - UI only, no OAuth implementation

## 🚧 Future Enhancements

- [ ] Backend API integration
- [ ] JWT token authentication
- [ ] Password strength meter
- [ ] Email verification flow
- [ ] OAuth integration (Google, Facebook, Apple)
- [ ] Forgot password functionality
- [ ] Account dashboard after login
- [ ] Form input debouncing
- [ ] Loading states
- [ ] Success notifications

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment.

## 🌐 Deployment

Compatible with:
- **Vercel** - `vercel deploy`
- **Netlify** - `netlify deploy`
- **GitHub Pages** - Push to `gh-pages` branch
- **Any static hosting**

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 👨‍💻 Developer Notes

### Component Structure
- **Router** - Handles routing logic
- **SignUp** - Registration page with benefits
- **SignIn** - Login page (simplified layout)
- Both pages share similar styling and validation patterns


## 📞 Support

For questions or issues:
- Check this README first
- Review the inline code comments
- Test in different browsers
- Clear browser cache if styles don't update

## 📝 License

This project is for educational/assignment purposes.

---

**Built with ❤️ for the Cartzilla Assignment**

*Submitted by: Venkateswarlu Thondamalla*  
*Date: December 4, 2025*
