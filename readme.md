# Artisan Brews Cafe Website

A beautifully designed website for a fictional artisan coffee shop built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Beautiful Animations**: Subtle, tasteful animations using Framer Motion
- **Multi-page Layout**: Home, About, Contact pages with smooth navigation
- **Contact Form**: Contact form connected to AWS API Gateway for email functionality
- **Scalable Architecture**: Modular component design for easy expansion

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- Lucide React for icons

## Development

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## AWS API Gateway Integration

To fully enable the contact form functionality:

1. Create an API Gateway endpoint in AWS
2. Update the endpoint URL in `src/lib/api.ts`
3. Set up the appropriate AWS Lambda function to handle the email sending

## Project Structure

```
src/
  ├── components/        # Reusable components
  ├── pages/             # Application pages
  ├── lib/               # Utility functions and API calls
  ├── types/             # TypeScript interfaces
  ├── App.tsx            # Main application component
  └── main.tsx           # Application entry point
```

## Customization

- Colors can be adjusted in `tailwind.config.js`
- Fonts can be changed in `index.css` and `tailwind.config.js`
- Images can be replaced with your own cafe photos

## License

MIT