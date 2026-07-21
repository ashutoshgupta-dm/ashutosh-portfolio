# Ashutosh Gupta - Professional Digital Marketing Portfolio

A premium, fast-loading, and production-ready portfolio website for **Ashutosh Gupta**, Digital Marketing Executive based in New Delhi, India. 

Designed with a modern, high-contrast creative-tech aesthetic (Deep Indigo/Dark Slate canvas, neon blue and cyan accents), this portfolio is fully optimized to present agency track records, SEO capabilities, WordPress management, and creative graphic design skills to recruiters and potential freelance clients.

---

## 📂 Project Structure

This project has been built in **two distinct formats** so you can choose the workflow that best fits your needs:

1. **Vite + React 19 Application (Production Grade)**
   * **Location:** `src/App.tsx` (layout), `src/data.ts` (content data), `src/types.ts` (TypeScript types), `src/index.css` (Tailwind configuration).
   * **Why use it:** Real-time components, declarative state management, modern Lucide icons, and layout-preserving `motion` animations. Great if you deploy to Cloud Run, Netlify, Vercel, or GitHub Pages with React.
   
2. **Standalone Plain HTML/CSS/JS (Zero-Dependency)**
   * **Location:** `/static_portfolio/`
   * **Files:** `index.html`, `styles.css`, `script.js`
   * **Why use it:** Super lightweight, offline-first. You can open `index.html` directly in any web browser without running a local server or compiling any files.

---

## 🛠️ Step-by-Step Customization Guide

Both versions are filled with detailed developer comments (`<!-- COMMENT -->` in HTML, `/* COMMENT */` in CSS/JS, and standard JS comments in React). Follow these steps to put your final personal touches:

### 1. Add Your Portrait Photograph
* **Vite + React:** Put your image in `/public/avatar.jpg` and update the `imageUrl` or initials placeholder in `src/App.tsx` inside the profile card element.
* **Plain HTML:** Save your headshot as `avatar.jpg` in the `/static_portfolio/` directory. Open `index.html` and search for:
  ```html
  <!-- EDIT HERE: Replace the AG placeholder below with your real photograph image tag -->
  <div class="initials-avatar">AG</div>
  ```
  And replace it with:
  ```html
  <img src="avatar.jpg" alt="Ashutosh Gupta" class="profile-image" />
  ```

### 2. Connect Your Resume PDF
* Place your latest resume as a PDF file (e.g., `Ashutosh_Gupta_Resume.pdf`) in your static folder.
* Update the download link elements. Search for the text `Request Resume` or `Download Resume` and replace the href:
  ```html
  <!-- EDIT HERE: Change href to your actual PDF file path -->
  <a href="Ashutosh_Gupta_Resume.pdf" download class="btn-primary">Download Resume</a>
  ```

### 3. Update Your LinkedIn & Social Links
* Open `src/data.ts` (for React) or `index.html` / `script.js` (for Plain HTML).
* Search for the URL `https://www.linkedin.com/in/ashutosh-gupta` and replace it with your exact LinkedIn profile link.
* Double-check your phone number (`+91 96678 67633`) and email (`ratangup386@gmail.com`).

### 4. Add Live Project Images & Links
* Inside `src/data.ts` or `/static_portfolio/index.html`, you will find cases for:
  * **Anand Plastics**
  * **Kovark**
  * **SignXpress India**
  * **Satnam Overseas**
  * **VOTEC Consulting**
* Replace the Unsplash placeholder images with real screenshots of your social graphics or website designs.

### 5. Hook Up the Contact Form Backend
Currently, submitting the form performs full client-side validation, displays a successful checkmark banner, and opens the user's default mail client (via `mailto:`) with all parameters pre-populated. 

To turn this into a silent, server-side automated contact form, you can use a free form handler like **Formspree**, **Web3Forms**, or **Netlify Forms**:

#### Using Formspree:
1. Register for a free account at [formspree.io](https://formspree.io) and create a new form.
2. Copy your unique Form ID endpoint URL (looks like `https://formspree.io/f/xoq...`).
3. Replace the form submission action or JS fetch url:
   * **Plain HTML:** Update the `<form>` tag in `index.html`:
     ```html
     <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
     ```
   * **React App:** Update the `handleFormSubmit` fetch handler in `src/App.tsx` to POST the state object directly to Formspree:
     ```javascript
     const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(formData)
     });
     ```

---

## 🚀 Deployment Instructions

### Option A: Deploy the Plain HTML Version (Fastest & Free)
1. Drag and drop the `/static_portfolio/` folder onto **[Netlify Drop](https://app.netlify.com/drop)** or **[Vercel](https://vercel.com)**.
2. Your portfolio will be live on a secure, public HTTPS URL in under 10 seconds.
3. Configure a custom domain name (e.g., `www.ashutoshgupta.in`) via your provider settings.

### Option B: Deploy the React App
To compile the production bundles:
```bash
# Install dependencies
npm install

# Run the build command
npm run build
```
This outputs compiled, super-minified static assets inside the `/dist` directory. Upload `/dist` to any host of your choice.

---

*Designed for Ashutosh Gupta — Digital Marketing Executive*
