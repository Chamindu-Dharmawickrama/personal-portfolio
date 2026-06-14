# Chamindu Dharmawickrama - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my journey as a Software Engineering undergraduate and full-stack developer.

## 🌟 Features

### ✨ Interactive Elements

-   **Animated Loading Screen**: Custom typewriter animation with loading bar
-   **Dynamic Typing Effect**: Animated hero text with smooth transitions
-   **Scroll Animations**: Reveal-on-scroll animations for enhanced user experience
-   **Responsive Design**: Fully optimized for all device sizes

### 🎨 Modern UI/UX

-   **Dark Theme**: Professional dark color scheme with blue/cyan accents
-   **Gradient Effects**: Smooth gradient text and hover animations
-   **Glass Morphism**: Backdrop blur effects and translucent elements
-   **Mobile-First**: Responsive navigation with hamburger menu

### 📧 Contact Integration

-   **EmailJS Integration**: Direct email functionality through contact form
-   **Form Validation**: Real-time form validation with loading states
-   **Success Feedback**: Animated success messages for user confirmation

### 📱 Responsive Features

-   **Mobile Pagination**: Project pagination on smaller screens
-   **Adaptive Layouts**: Dynamic content arrangement based on screen size
-   **Touch-Friendly**: Optimized for mobile interactions

## 🛠️ Tech Stack

### Frontend

-   **React 19.1.0**: Modern React with hooks and functional components
-   **Vite 6.3.5**: Fast build tool and development server
-   **Tailwind CSS 4.1.5**: Utility-first CSS framework for styling

### Additional Libraries

-   **React Icons 5.5.0**: Icon library for consistent iconography
-   **EmailJS 3.2.0**: Client-side email service integration
-   **React GA4 2.1.0**: Google Analytics 4 integration for tracking

### Development Tools

-   **ESLint**: Code linting and formatting
-   **Vite Plugin React**: React support for Vite

## 🏗️ Project Structure

```text
portfolio/
├── public/                          # Static assets
│   ├── certificates/                # Certificate images
│   │   ├── AI Engineering.webp
│   │   ├── HULT PRIZE.webp
│   │   └── Java OOP.webp
│   ├── Chamindu Dharmawickrama.pdf  # Resume/CV
│   ├── chamindu.jpg                 # Profile images
│   ├── chaminduNew.jpg
│   ├── logo/                        # Technology icons
│   │   ├── css.png
│   │   ├── django.png
│   │   ├── express.png
│   │   ├── fastapi.png
│   │   ├── flutter.png
│   │   ├── git.png
│   │   ├── html.png
│   │   ├── java.png
│   │   ├── javascript.png
│   │   ├── langchain.png
│   │   ├── langgraph.png
│   │   ├── mongodb.png
│   │   ├── mysql.png
│   │   ├── next.png
│   │   ├── node.png
│   │   ├── postgresql.png
│   │   ├── python.png
│   │   ├── react.png
│   │   ├── tailwind.png
│   │   └── typescript.png
│   └── projects/                    # Project screenshots (Optimized WebP)
│       ├── askyourdocs.webp
│       ├── booking.webp
│       ├── chroma.webp
│       ├── coffee.webp
│       ├── evergreen.webp
│       ├── portfolio.webp
│       ├── progression.webp
│       ├── shutr.webp
│       └── sms.webp
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── common/                  # Reusable UI components
│   │   │   ├── CursorBackground.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── LoadingScreen.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── RevealOnScroll.jsx
│   │   └── sections/                # Main page sections
│   │       ├── about/               # About, skills, education, etc.
│   │       │   ├── About.jsx
│   │       │   ├── Certification.jsx
│   │       │   ├── Education.jsx
│   │       │   ├── Skills.jsx
│   │       │   └── WorkExperience.jsx
│   │       ├── contact/             # Contact form section
│   │       │   └── Contact.jsx
│   │       ├── home/                # Hero section components
│   │       │   └── Home.jsx
│   │       └── projects/            # Project showcase section
│   │           ├── Projects.css
│   │           └── Projects.jsx
│   ├── App.css                      # Component-specific styles
│   ├── App.jsx                      # Main application component
│   ├── index.css                    # Global styles and animations
│   └── main.jsx                     # Application entry point
├── .env                             # Environment variables
├── .gitignore
├── eslint.config.js                 # ESLint configuration
├── index.html                       # Entry HTML file
├── package-lock.json
├── package.json                     # Project dependencies and scripts
├── vercel.json                      # Vercel deployment configuration
├── vite.config.js                   # Vite configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn package manager

### Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd portfolio
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with your EmailJS credentials:

    ```env
    VITE_SERVICE_ID=your_emailjs_service_id
    VITE_TEMPLATE_ID=your_emailjs_template_id
    VITE_PUBLIC_KEY=your_emailjs_public_key
    ```

4. **Start development server**

    ```bash
    npm run dev
    ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📧 EmailJS Setup

This portfolio uses EmailJS for the contact form functionality. To set up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file


## 🔧 Key Components

### Home Section (`Home.jsx`)

-   Typewriter animation effect
-   Dynamic text display
-   Profile image with hover effects
-   Call-to-action buttons

### About Section (`About.jsx`)

-   Tabbed interface (Skills, Education, Certifications)
-   Technology stack icons
-   Interactive skill cards
-   Educational timeline

### Projects Section (`Projects.jsx`)

-   Project cards with hover effects
-   Technology badges
-   External links to live demos and repositories
-   Mobile pagination system

### Contact Section (`Contact.jsx`)

-   EmailJS integration
-   Form validation
-   Loading states and success feedback
-   Responsive form design

### Loading Screen (`LoadingScreen.jsx`)

-   Typewriter animation
-   Progress bar animation
-   Smooth transition to main content

### RevealOnScroll (`RevealOnScroll.jsx`)

-   Intersection Observer API
-   Smooth reveal animations
-   Configurable delay and threshold

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:

-   **Mobile (< 640px)**: Single column layout, hamburger menu, project pagination
-   **Tablet (640px - 1024px)**: Two-column layouts, expanded navigation
-   **Desktop (> 1024px)**: Full multi-column layouts, all projects visible

## 🔍 SEO and Performance

-   **Image Optimization**: All heavy project and certificate images are converted to WebP format, reducing the total image payload by over 95%.
-   **React Code Splitting**: Heavy components are dynamically loaded using `React.lazy` and `Suspense`, vastly improving initial load times.
-   **Vercel Caching**: Implemented a custom `vercel.json` to leverage Vercel's Edge Network for aggressive caching (1 year) of static assets.
-   **Fast Loading**: Vite build optimization with minimal asset sizes.
-   **Semantic HTML**: Proper heading structure and landmarks.
-   **Analytics**: Google Analytics 4 integration.
-   **Meta Tags**: Proper page titles and descriptions.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Chamindu Dharmawickrama**

-   🌐 Portfolio: [Live Demo](https://chamindudharmawickrema.netlify.app/)
-   📧 Email: [Contact Form](mailto:chamindudharmawickrema@gmail.com)
-   💼 LinkedIn: [Connect with me](https://www.linkedin.com/in/chamindu-dharmawickrama-066295312/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2PUynfIeR12XtnPlCw1RNw%3D%3D)
-   🐙 GitHub: [View my repositories](https://github.com/Chamindu-Dharmawickrama)

---