# Sohail Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS. Features dark/light mode toggle, video previews for projects, and a professional design.

## Features

- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- 🎥 Video previews for projects
- ⚡ Fast and modern UI
- 🎨 Beautiful animations and transitions
- 📧 Contact form
- 🚀 Built with React and Tailwind CSS

## Technologies Used

- React 19
- Tailwind CSS
- JavaScript (ES6+)
- Vite
- HTML5
- CSS3

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects showcase
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── contexts/           # React contexts
│   └── ThemeContext.jsx # Dark/light mode context
├── App.jsx             # Main app component
├── index.css           # Global styles
└── main.jsx           # App entry point
```

## Customization

To customize the portfolio with your own information:

1. Update the dummy data in each component
2. Replace placeholder images with your own
3. Update contact information
4. Add your own project videos and descriptions
5. Modify the color scheme in `tailwind.config.js`

## Build for Production

```bash
npm run build
```

## License

MIT License