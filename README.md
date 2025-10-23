# LKC Consulting Landing Page

A modern, responsive landing page for LKC Consulting, a business consulting firm specializing in helping Japanese companies expand into Africa and Southeast Asia.

## Overview

This project has been converted from a React/TypeScript application to pure HTML, CSS, and JavaScript while maintaining the same structure, design, and functionality.

## Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Navigation** - Smooth scrolling navigation with mobile menu
- **Contact Form** - Functional contact form with validation and success notifications
- **Performance Optimized** - Fast loading with optimized assets and code
- **Accessibility** - Keyboard navigation and screen reader friendly
- **Cross-browser Compatible** - Works on all modern browsers

## File Structure

```
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS with responsive design
├── script.js           # JavaScript for interactions and animations
└── README.md           # This documentation file
```

## Sections

1. **Navigation** - Fixed header with logo and navigation links
2. **Hero** - Main banner with company tagline and call-to-action
3. **Empathy** - Pain points section addressing client challenges
4. **Solution** - Services and value proposition
5. **Producer Explainer** - Comparison between consultants and business producers
6. **Process** - 6-step methodology with visual timeline
7. **Case Studies** - Success stories and client testimonials
8. **Team** - Company highlights and philosophy
9. **Contact** - Contact form and company information
10. **Footer** - Links and company details

## Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox and Grid
- **Vanilla JavaScript** - No external dependencies
- **Font Awesome** - Icons (loaded via CDN)
- **CSS Variables** - For consistent theming
- **CSS Animations** - Smooth transitions and effects

## Key Features Implemented

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 1024px
- Flexible grid layouts
- Optimized typography scaling

### Interactive Elements
- Smooth scrolling navigation
- Mobile menu toggle
- Form validation and submission
- Toast notifications
- Scroll-triggered animations
- Parallax effects

### Performance
- Optimized CSS with minimal redundancy
- Efficient JavaScript with debouncing
- Lazy loading for animations
- Minimal external dependencies

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Focus management
- Screen reader friendly
- High contrast ratios

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with polyfills)

## Getting Started

### Quick Start
1. Open `index.html` in any modern web browser
2. No build process or dependencies required
3. All assets are self-contained or loaded via CDN

### Development Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open http://localhost:3000 in your browser

### Available Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with live reload
- `npm run lint` - Run linting on all files
- `npm run validate` - Validate HTML structure

## Customization

### Colors
Update the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1E2D56;
    --accent-color: #F9A03F;
    --accent-hover: #e8913a;
    /* ... other variables */
}
```

### Content
Edit the HTML content directly in `index.html` to update:
- Company information
- Contact details
- Case studies
- Team information

### Styling
Modify `styles.css` to adjust:
- Layout and spacing
- Typography
- Colors and themes
- Animations and transitions

## Form Integration

The contact form is currently set up with client-side validation and a simulated submission. To integrate with a real backend:

1. Update the form action in `index.html`
2. Modify the `handleFormSubmit` function in `script.js`
3. Add your preferred form handling service (e.g., Formspree, Netlify Forms, custom API)

## Performance Notes

- All animations use CSS transforms for optimal performance
- JavaScript is optimized with debouncing and efficient event handling
- Images are optimized and use appropriate formats
- CSS is minified and organized for fast loading

## Deployment

### Netlify
1. Connect your repository to Netlify
2. Deploy automatically using the included `netlify.toml` configuration
3. Custom domain can be configured in Netlify dashboard

### Vercel
1. Connect your repository to Vercel
2. Deploy automatically using the included `vercel.json` configuration
3. Custom domain can be configured in Vercel dashboard

### Docker
1. Build the image: `docker build -t lkc-consulting .`
2. Run the container: `docker run -p 80:80 lkc-consulting`
3. Access at http://localhost

### Traditional Web Hosting
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. Configure your web server to serve `index.html` for all routes

## Security Features

- Content Security Policy headers
- XSS protection
- Clickjacking protection
- Form validation and sanitization
- No inline JavaScript (except for critical functionality)
- Secure external resource loading

## Performance Features

- Optimized CSS and JavaScript
- Gzip compression
- Browser caching
- Lazy loading for animations
- Minimal external dependencies
- Responsive images

## License

This project is proprietary to LKC Consulting. All rights reserved.

## Support

For technical support or questions about this implementation, please contact the development team.