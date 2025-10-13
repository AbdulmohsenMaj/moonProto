# daisyUI 5 LLM Reference Documentation

**Source:** https://daisyui.com/llms.txt <mcreference link="https://daisyui.com/llms.txt" index="4">4</mcreference>
**Version:** 5.2.x
**Last Updated:** Latest from official daisyUI documentation

---

## Overview

daisyUI 5 is a CSS library for Tailwind CSS 4 that provides class names for common UI components <mcreference link="https://daisyui.com/llms.txt" index="4">4</mcreference>

### Key Resources
- [daisyUI 5 docs](http://daisyui.com) <mcreference link="https://daisyui.com/llms.txt" index="4">4</mcreference>
- [Guide: How to use this file in LLMs and code editors](https://daisyui.com/docs/editor/) <mcreference link="https://daisyui.com/llms.txt" index="4">4</mcreference>
- [daisyUI 5 release notes](https://daisyui.com/docs/v5/) <mcreference link="https://daisyui.com/llms.txt" index="4">4</mcreference>
- [daisyUI 4 to 5 upgrade guide](https://daisyui.com/docs/upgrade/) <mcreference link="https://daisyui.com/llms.txt" index="4">4</mcreference>

---

## Installation Notes

### Requirements & Setup <mcreference link="https://daisyui.com/llms.txt" index="4">4</mcreference>

1. **daisyUI 5 requires Tailwind CSS 4**
2. **`tailwind.config.js` file is deprecated** in Tailwind CSS v4. Do not use `tailwind.config.js`. Tailwind CSS v4 only needs `@import "tailwindcss";` in the CSS file if it's a node dependency.
3. **Install daisyUI:** `npm i -D daisyui@latest` and then add `@plugin "daisyui";` to the CSS file
4. **CDN Option:** If you really want to use it from CDN:
```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

### CSS File Structure
A CSS file with Tailwind CSS and daisyUI looks like this (if it's a node dependency): <mcreference link="https://daisyui.com/llms.txt" index="4">4</mcreference>
```css
@import "tailwindcss";
@plugin "daisyui";
```

---

## Usage Rules

### Core Principles <mcreference link="https://daisyui.com/llms.txt" index="4">4</mcreference>

1. **Component Structure:** Give styles to HTML elements by adding daisyUI class names: component class name + part class names (if available) + modifier class names (if available)

2. **Customization with Tailwind:** Components can be customized using Tailwind CSS utility classes if customization is not possible using existing daisyUI classes. Example: `btn px-10` sets custom horizontal padding to a `btn`

3. **Force Override:** If customization using Tailwind CSS utility classes doesn't work due to CSS specificity issues, use `!` at the end of the Tailwind CSS utility class. Example: `btn bg-red-500!` forcefully sets custom background color. **Use sparingly as last resort.**

4. **Custom Components:** If a specific component doesn't exist in daisyUI, create your own using Tailwind CSS utility classes

5. **Responsive Design:** When using Tailwind CSS `flex` and `grid` for layout, it should be responsive using Tailwind CSS responsive utility prefixes

6. **Class Name Restrictions:** Only allowed class names are existing daisyUI class names or Tailwind CSS utility classes

7. **Minimal Custom CSS:** Ideally, you won't need to write any custom CSS. Using daisyUI class names or Tailwind CSS utility classes is preferred

### Design Guidelines <mcreference link="https://daisyui.com/llms.txt" index="4">4</mcreference>

8. **Placeholder Images:** If you need placeholder images, use https://picsum.photos/200/300 with the size you want
9. **Font Usage:** When designing, don't add a custom font unless it's necessary
10. **Body Styling:** Don't add `bg-base-100 text-base-content` to body unless it's necessary
11. **Design Decisions:** Use Refactoring UI book best practices

---

## Class Name Categories

daisyUI 5 class names fall into these categories (for reference only, not used in actual code): <mcreference link="https://daisyui.com/llms.txt" index="4">4</mcreference>

- **`component`:** The required component class
- **`part`:** A child part of a component
- **`style`:** Sets a specific style to component or part
- **`behavior`:** Changes the behavior of component or part
- **`color`:** Sets a specific color to component or part
- **`size`:** Sets a specific size to component or part
- **`placement`:** Sets a specific placement to component or part
- **`direction`:** Sets a specific direction to component or part
- **`modifier`:** Modifies the component or part in a specific way
- **`variant`:** Prefixes for utility classes that conditionally apply styles. Syntax: `variant:utility-class`

---

## Configuration

### Basic Configuration <mcreference link="https://daisyui.com/llms.txt" index="4">4</mcreference>

**daisyUI without config:**
```css
@plugin "daisyui";
```

**daisyUI config with `light` theme only:**
```css
@plugin "daisyui" {
  themes: light --default;
}
```

**daisyUI with all default configs:**
```css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
  root: ":root";
  include: ;
  exclude: ;
  prefix: ;
  logs: true;
}
```

### Advanced Configuration Example <mcreference link="https://daisyui.com/llms.txt" index="4">4</mcreference>

All built-in themes enabled with bumblebee as default theme and synthwave as prefersdark theme:
```css
@plugin "daisyui" {
  themes: light, dark, cupcake, bumblebee --default, emerald, corporate, synthwave --prefersdark, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter, dim, nord, sunset, caramellatte, abyss, silk;
  root: ":root";
  include: ;
  exclude: rootscrollgutter, checkbox;
  prefix: daisy-;
  logs: false;
}
```

**Theme Usage:** Add `data-theme="THEME_NAME"` to the `<html>` element to use different themes

---

## Colors

### daisyUI Color Names <mcreference link="https://daisyui.com/llms.txt" index="4">4</mcreference>

- **`primary`:** Primary brand color, the main color of your brand

---

## Best Practices for This Project

Based on your current setup:

1. **Current Configuration:** Your project uses `@plugin "daisyui" { themes: "light dark cupcake"; }` which is correct for daisyUI 5
2. **Theme Usage:** You're using `data-theme="light"` in your HTML, which follows daisyUI 5 conventions
3. **Integration:** daisyUI works well with your existing Tailwind CSS setup
4. **Component Usage:** Use daisyUI component classes like `btn`, `card`, `modal`, etc. instead of building from scratch
5. **Customization:** Combine daisyUI classes with Tailwind utilities for custom styling

---

## Migration Notes

- **From daisyUI 4:** Follow the [upgrade guide](https://daisyui.com/docs/upgrade/) <mcreference link="https://daisyui.com/llms.txt" index="4">4</mcreference>
- **Tailwind CSS 4:** No more `tailwind.config.js` - configuration is now in CSS
- **Plugin Syntax:** Use `@plugin "daisyui";` instead of adding to plugins array

---

*This documentation should be referenced for all daisyUI-related development decisions and implementations.*