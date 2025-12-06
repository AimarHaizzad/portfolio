# Aimar Haizzad - Portfolio Website

A modern, professional portfolio website for a software engineering student.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Sections Included**:
  - Home: Introduction and quick links
  - About Me: Personal background and highlights
  - Skills: Technical skills with progress bars and tags
  - Projects: Showcase of projects with descriptions
  - Internships: Work experience section
  - Education: Academic background
  - Contact: Contact form and information

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (Vanilla JS)
- Font Awesome Icons
- Google Fonts (Poppins)

## Getting Started

1. Open `index.html` in your web browser
2. No build process or dependencies required - it's ready to use!

## Customization

### Adding Your Resume PDF

To add an actual PDF resume:

1. Place your resume PDF file in the same directory as `index.html`
2. In `script.js`, find the `downloadResume` event listener
3. Replace the text file download code with:
   ```javascript
   window.open('your-resume.pdf', '_blank');
   ```

### Adding Project Images

To add project screenshots:

1. Create an `images` folder in your project directory
2. Add your project images
3. In `index.html`, replace the `.project-placeholder` div with:
   ```html
   <img src="images/project-name.jpg" alt="Project Name">
   ```

### Updating Social Media Links

In `index.html`, update the social media links in the home section and footer:
- Replace `https://github.com` with your GitHub profile URL
- Replace `https://linkedin.com` with your LinkedIn profile URL

### Adding More Projects

To add more projects, copy the `.project-card` structure in the projects section and update the content.

### Adding Internship Details

Update the internship card in the internships section with your actual internship information.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## File Structure

```
/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Contact Information

- **Email**: haizzadaimar@gmail.com
- **Phone**: 011-51120112
- **Location**: Malaysia

## License

This portfolio template is free to use and modify for personal use.

