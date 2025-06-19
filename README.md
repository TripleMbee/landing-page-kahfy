# Customizable Landing Page

A modern, responsive landing page template with a beautiful gradient design that can be easily customized for any business, product, or service.

## Features

- 🎨 **Beautiful Gradient Design** - Stunning linear gradient background with modern color scheme
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast & Lightweight** - Built with React and Tailwind CSS for optimal performance
- 🎯 **Customizable** - Easy to modify content, colors, and branding
- 🌟 **Modern UI/UX** - Glass morphism effects, smooth animations, and hover interactions
- 📧 **Contact Forms** - Newsletter subscription and contact information sections
- 🔗 **Social Media Integration** - Fixed social media sidebar with customizable links

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd customizable-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Customization Guide

### 1. Brand & Content

Update the following files to customize your brand:

- **`src/App.js`** - Change "Your Brand" and "Your tagline here"
- **`src/components/Hero.js`** - Update main headline, description, and feature cards
- **`src/components/Gallery.js`** - Modify features and services sections
- **`src/components/Footer.js`** - Update contact information and company details

### 2. Colors & Theme

The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  'primary': '#4907a8',      // Deep purple
  'secondary': '#005bd8',    // Blue
  'accent': '#00a1b4',       // Teal
  'success': '#00bb94',      // Green
  'highlight': '#00e46c',    // Bright green
  'light': '#00f4be',        // Light green
  'lighter': '#00fadf',      // Very light green
  'bright': '#00fffa',       // Cyan
}
```

### 3. Background Gradient

The main gradient is defined in `src/index.css`:

```css
background: linear-gradient(to left bottom, #4907a8, #005bd8, #0082d5, #00a1b4, #00bb94, #00c98c, #00d77f, #00e46c, #00ed98, #00f4be, #00fadf, #00fffa);
```

### 4. Images

Replace placeholder images in `src/components/Gallery.js` with your own:

```javascript
const services = [
  {
    title: "Your Service",
    description: "Your description",
    image: "your-image-url.jpg"
  }
];
```

### 5. Social Media Links

Update social media links in `src/components/Footer.js`:

```javascript
<a href="your-instagram-url" target="_blank" rel="noopener noreferrer">
  <FaInstagram className="text-3xl" />
</a>
```

## File Structure

```
src/
├── components/
│   ├── Hero.js          # Main hero section
│   ├── Gallery.js       # Features & services section
│   └── Footer.js        # Contact & footer section
├── App.js               # Main app component
├── index.css            # Global styles & gradient
└── index.js             # App entry point
```

## Built With

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **CSS Gradients** - Beautiful background effects

## Deployment

Build the project for production:

```bash
npm run build
```

The build folder contains your optimized production files ready for deployment.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue in the repository.

---

**Ready to customize?** Start by updating the content in the components and watch your landing page transform into a perfect representation of your brand!
