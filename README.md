This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Images and Assets

The following image placeholders have been added to the website. Please provide the corresponding images and place them in the `public/` directory:

### Required Images:

- **our-aim-image.jpg** - Image for the "Our Aim" section on the homepage (HeroSection component)
- **contact-us-image.jpg** - Image for the "Get In Touch" section on the contact page
- **about-us-image.jpg** - Image for the "About IC PestControl" section on the about page
- **integrity-image.jpg** - Image for the "Integrity First" value card on the about page
- **family-safety-image.jpg** - Image for the "Family Safety" value card on the about page
- **excellence-image.jpg** - Image for the "Excellence" value card on the about page
- **community-image.jpg** - Image for the "Community" value card on the about page

### Image Specifications:

- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 800x800px or larger (square aspect ratio preferred)
- **Quality**: High resolution for best display
- **Content**: Professional pest control related imagery

To replace placeholders:

1. Add your images to the `public/` folder
2. Update the image paths in the respective components:
   - `components/home/HeroSection.tsx` (around line 220)
   - `app/contact/page.tsx` (around line 180)
   - `app/about/page.tsx` (around line 280)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
