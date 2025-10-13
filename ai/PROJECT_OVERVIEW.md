# Landing Page Project - AI Documentation

## Project Overview
This is a Next.js landing page project built with modern web technologies focusing on performance, accessibility, and maintainability.

## Tech Stack

### Core Framework
- **Next.js 14+** - React framework with App Router
- **React 18+** - Component-based UI library

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library built on Tailwind CSS
- **PostCSS** - CSS processing tool

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization

## Project Structure

```
landing/
├── app/                          # Next.js App Router directory
│   ├── components/              # Reusable React components
│   │   ├── contentComponents/   # Main content sections
│   │   │   └── section5.jsx    # Carousel component
│   │   ├── footerComponent/    # Footer components
│   │   ├── navbarBottom.jsx    # Bottom navigation
│   │   ├── navbarMiddle.jsx    # Middle navigation
│   │   └── navbarTop.jsx       # Top navigation
│   ├── globals.css             # Global styles and Tailwind imports
│   ├── layout.js               # Root layout component
│   └── page.js                 # Home page component
├── public/                     # Static assets
├── ai/                        # AI documentation and guidelines
└── config files               # Various configuration files
```

## Key Features

### Section5 Carousel
- **Row-based navigation** - Scrolls entire rows instead of individual items
- **Circular dot indicators** - Shows current row position
- **Responsive design** - Adapts to different screen sizes
- **Smooth scrolling** - Enhanced user experience

## Development Guidelines

### Component Architecture
- Use functional components with hooks
- Implement proper error handling
- Follow React best practices
- Maintain component reusability

### Styling Approach
- Prefer DaisyUI components over custom CSS
- Use Tailwind utilities for spacing, colors, and layout
- Minimize custom JavaScript for UI interactions
- Leverage CSS-only solutions when possible

### Performance Considerations
- Optimize images and assets
- Use Next.js built-in optimizations
- Implement proper loading states
- Minimize JavaScript bundle size