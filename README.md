# PANN CARBON

**Climate Insurtech Broker** - Transforming EV driving data into carbon credits and real insurance discounts.

PANN CARBON connects EV telematics, insurance partners, and carbon markets to reward drivers while helping insurers launch ESG-aligned products.

## 🌟 Features

- **Multi-language Support**: English and Thai (ไทย)
- **Research Pages**: 
  - Technology Research
  - Business & Market Research
  - ESG & Policy Research
- **Modern Stack**: React 19 + TypeScript + Vite
- **Responsive Design**: Tailwind CSS with mobile-first approach
- **Production Ready**: Optimized build and deployment configuration

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
pann-carbon/
├── src/
│   ├── components/      # React components
│   ├── pages/          # Page components (Technology, BusinessMarket, EsgPolicy)
│   ├── assets/         # Images and static assets
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   ├── i18n.ts         # Internationalization
│   └── index.css       # Global styles
├── public/             # Public assets
├── dist/               # Build output (gitignored)
├── Dockerfile          # Container configuration
├── DEPLOYMENT.md       # Deployment guide
└── GITHUB_SETUP.md     # GitHub setup instructions
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Technology Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Routing**: Client-side routing (SPA)

## 📦 Deployment

This project is configured for deployment on **Google Cloud Platform**:

- **Recommended**: Google Cloud Run (serverless, auto-scaling)
- **Alternative**: Google App Engine

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Cloud Run

```bash
# Build Docker image
docker build -t pann-carbon:latest .

# Deploy (after setting up GCP)
gcloud run deploy pann-carbon \
    --image gcr.io/YOUR_PROJECT_ID/pann-carbon:latest \
    --platform managed \
    --region asia-southeast1 \
    --allow-unauthenticated
```

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT.md) - Detailed deployment instructions
- [GitHub Setup](./GITHUB_SETUP.md) - Repository initialization and workflow

## 🌍 Internationalization

The application supports multiple languages:
- English (en) - Default
- Thai (ไทย) - th

Language switching is available in the navigation menu.

## 🎨 Design

- Modern, clean UI with emerald green accent colors
- Responsive design for all screen sizes
- Smooth animations and transitions
- Accessible components with proper ARIA labels

## 📄 License

All rights reserved. © 2024 PANN CARBON

## 👥 Team

- **Suppawit Ausawalaithong** - Electrical Engineering • IoT & Data Systems
- **Chanikant Sotthiwanichwong** - Computer Engineering • Product & Cybersecurity
- **Natcha Singthong** - Actuarial Science • Insurance Design

## 🔗 Links

- Website: (Add your deployed URL here)
- GitHub: (Add your repository URL here)

---

**Built with ❤️ for Thailand's climate and EV ecosystem**

