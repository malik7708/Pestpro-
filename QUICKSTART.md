# IC PestControl Admin System - Quick Start Guide

## Overview

A professional pest control website with:

- 🔐 Secure admin authentication (JWT + bcrypt)
- 👥 User management system
- 💬 Contact message management
- 📱 Responsive dark-themed dashboard
- ⚡ Production-ready backend APIs

---

## Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database (Neon recommended)
- Git

---

## Installation (5 minutes)

### 1. Clone & Install

```bash
cd pestpro-website/pestpro
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env
```

Edit `.env` with your values:

```bash
# Database (create free account at neon.tech)
DATABASE_URL="postgresql://user:password@host:5432/peatdb"

# Generate new secret
JWT_SECRET="your-secret-key-here"

# Gmail app password (enable 2FA, create app password)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
EMAIL_FROM="your-email@gmail.com"
EMAIL_PASSWORD="your-app-password"
EMAIL_TO="admin@email.com"

# Development
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 3. Database Setup

```bash
# Run migrations
npx prisma migrate deploy

# Create admin user
npm run create-admin

# Or use Prisma Studio GUI
npx prisma studio
```

### 4. Start Development

```bash
npm run dev

# Open browser
open http://localhost:3000/admin
```

---

## Create Admin User

### Method 1: Interactive Script (Recommended)

```bash
npm run create-admin
# Follow prompts for email and password
```

### Method 2: Prisma Studio

```bash
npx prisma studio
# Navigate to User table
# Click "Add record"
# Email: your-email@example.com
# Password: Use hashed password (bcrypt)
# Role: admin
```

---

## Login to Admin Dashboard

**URL:** `http://localhost:3000/admin`

**Default Credentials:**

- Email: `islamabadpestcontrolservices9@gmail.com`
- Password: `admin786`

---

## Project Structure

```
pestpro/
├── app/
│   ├── api/                    # Backend API routes
│   │   ├── login/             # Authentication
│   │   ├── logout/
│   │   ├── contact/           # Public contact form
│   │   └── admin/             # Protected admin endpoints
│   │       ├── users/
│   │       └── messages/
│   └── admin/                 # Protected frontend pages
│       ├── login/            # Login page
│       ├── page.tsx          # Dashboard
│       ├── users/            # User management
│       └── messages/         # Message management
├── lib/
│   ├── auth.ts              # Backend auth utilities
│   ├── auth-client.ts       # Frontend API calls
│   └── prisma.ts           # Database client
├── hooks/
│   └── useAuth.ts          # Frontend auth hook
├── prisma/
│   ├── schema.prisma       # Database models
│   └── migrations/         # Database migrations
├── middleware.ts           # Route protection
└── scripts/
    ├── create-admin.js     # Create admin user
    ├── test-apis.sh        # Test all endpoints
    └── IC-PestControl-API-Collection.postman_collection.json
```

---

## Core Features

### Authentication System

- **Technology:** JWT + bcrypt + HttpOnly cookies
- **Token Expiry:** 7 days
- **File:** `lib/auth.ts`
- **Middleware Protection:** `middleware.ts`

### Database Models

```prisma
User {
  id        Int @id @default(autoincrement())
  email     String @unique
  password  String (hashed with bcrypt)
  role      String @default("user")
  createdAt DateTime @default(now())
}

ContactMessage {
  id        Int @id @default(autoincrement())
  name      String
  email     String
  phone     String
  message   String
  createdAt DateTime @default(now())
}
```

### API Endpoints

| Method | Endpoint              | Auth | Description         |
| ------ | --------------------- | ---- | ------------------- |
| POST   | `/api/login`          | No   | Admin login         |
| POST   | `/api/logout`         | Yes  | Logout              |
| GET    | `/api/admin/users`    | Yes  | List users          |
| POST   | `/api/admin/users`    | Yes  | Create user         |
| GET    | `/api/admin/messages` | Yes  | List messages       |
| DELETE | `/api/admin/messages` | Yes  | Delete message      |
| POST   | `/api/contact`        | No   | Public contact form |

---

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server

# Database
npx prisma studio   # Open database GUI
npm run create-admin # Create admin user

# Migrations
npx prisma migrate dev --name "description"  # Create migration
npx prisma migrate deploy                    # Apply migrations
npx prisma migrate reset                     # Reset database

# Testing
./scripts/test-apis.sh                       # Test all endpoints (requires bash)
# Import IC-PestControl-API-Collection.postman_collection.json to Postman
```

---

## Testing APIs

### Using Postman

1. Open Postman
2. Click "Import" → Select `scripts/IC-PestControl-API-Collection.postman_collection.json`
3. Set variable `BASE_URL` to `http://localhost:3000`
4. Login first to get auth token
5. Test admin endpoints with token

### Using cURL

```bash
# Login
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@example.com", "password": "password123"}'

# Get users (replace TOKEN)
curl -X GET "http://localhost:3000/api/admin/users?page=1&limit=10" \
  -H "Cookie: auth-token=TOKEN"

# Submit contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "email": "john@example.com",
    "phone": "+92-300-1234567",
    "message": "Help needed"
  }'
```

---

## Frontend Pages

### `/admin/login`

Professional login interface with error handling and demo credentials display.

### `/admin`

Dashboard showing:

- Total users count
- Total messages count
- System status
- Quick action buttons

### `/admin/users`

User management with:

- Paginated user list
- Create new user modal
- Role assignment (admin/user)
- Email display with created date

### `/admin/messages`

Message management with:

- Paginated message grid
- Click to view full message details
- Delete with confirmation
- Message modal with all information

---

## Development Workflow

### 1. Start Development Server

```bash
npm run dev
```

### 2. Create New API Endpoint

```typescript
// app/api/new-endpoint/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Logic here
    return NextResponse.json({ data: [] });
  } catch (error) {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
```

### 3. Create New Admin Page

```typescript
// app/admin/new-page/page.tsx
'use client';

import { useAuth } from '@/hooks/useAuth';
import { useState, useEffect } from 'react';

export default function NewPage() {
  const { user } = useAuth();
  const [data, setData] = useState([]);

  return (
    <div>
      <h1>Page Title</h1>
      {/* Content */}
    </div>
  );
}
```

### 4. Run Migrations for DB Changes

```bash
# Edit prisma/schema.prisma
npx prisma migrate dev --name "add_new_field"
# Follow prompts to apply migration
```

### 5. Test Changes

- Visit affected pages in browser
- Use Postman to test APIs
- Check console for errors
- Verify database changes

---

## Environment Variables Reference

```bash
# Database Connection
DATABASE_URL="postgresql://user:pass@host/db"

# Authentication
JWT_SECRET="min-32-character-secret-key"
JWT_EXPIRY="7d"

# Email Service
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
EMAIL_FROM="noreply@example.com"
EMAIL_PASSWORD="gmail-app-password"
EMAIL_TO="admin@example.com"

# Site Configuration
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NODE_ENV="development"
```

---

## Troubleshooting

### Database Connection Error

```bash
# Check DATABASE_URL in .env
# Verify database is running
# Use Prisma Studio to test connection
npx prisma db push
npx prisma generate
```

### "Cannot find module" Errors

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Regenerate Prisma client
npx prisma generate
```

### Login Not Working

```bash
# Check .env has JWT_SECRET
# Verify user exists in database
npm run create-admin

# Check browser console for errors
# Look at server logs in terminal
```

### Migration Conflicts

```bash
# Reset database (DEV ONLY)
npx prisma migrate reset
npm run create-admin

# For production, never reset
npx prisma migrate resolve --rolled-back "20260419071634_migration_name"
```

### Email Not Sending

```bash
# Verify SMTP credentials
# Check EMAIL_TO is set
# Review server logs
# Test email manually in Prisma Studio
```

---

## Production Deployment

1. **Prepare Environment**

   ```bash
   # Create .env.production with production values
   # Generate new JWT_SECRET
   # Set up PostgreSQL database
   ```

2. **Build & Test**

   ```bash
   npm run build
   npm start
   ```

3. **Deploy**
   - Vercel: `vercel --prod`
   - Docker: `docker build . && docker run`
   - VPS: `git push && npm install && npm run build && npm start`

4. **Run Migrations**
   ```bash
   npx prisma migrate deploy
   npm run create-admin
   ```

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

---

## Documentation Files

- **API_DOCUMENTATION.md** - Complete API reference
- **DEPLOYMENT_GUIDE.md** - Production deployment steps
- **ENHANCEMENT_ROADMAP.md** - Planned features and improvements
- **README.md** - Project overview

---

## File Tree Overview

```
├── app/
│   ├── api/
│   │   ├── login/route.ts           (100 lines)
│   │   ├── logout/route.ts          (20 lines)
│   │   ├── contact/route.ts         (150 lines)
│   │   └── admin/
│   │       ├── users/route.ts       (120 lines)
│   │       └── messages/route.ts    (110 lines)
│   └── admin/
│       ├── layout.tsx               (180 lines)
│       ├── page.tsx                 (180 lines)
│       ├── login/page.tsx           (220 lines)
│       ├── users/page.tsx           (280 lines)
│       └── messages/page.tsx        (320 lines)
├── lib/
│   ├── auth.ts                      (100 lines)
│   ├── auth-client.ts               (100 lines)
│   └── prisma.ts                    (20 lines)
├── hooks/
│   └── useAuth.ts                   (80 lines)
├── middleware.ts                    (80 lines)
├── prisma/
│   └── schema.prisma                (60 lines)
└── scripts/
    ├── create-admin.js              (150 lines)
    ├── test-apis.sh                 (200 lines)
    └── IC-PestControl-API-Collection.postman_collection.json
```

**Total Code:** ~2,500 lines (production-ready)

---

## Next Steps

1. ✅ Review this Quick Start
2. ✅ Create admin user
3. ✅ Login to admin dashboard
4. ✅ Test all features
5. 📋 Check [ENHANCEMENT_ROADMAP.md](./ENHANCEMENT_ROADMAP.md) for improvements
6. 🚀 Deploy to production following [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

## Support & Resources

- **TypeScript:** https://www.typescriptlang.org/docs/
- **Next.js:** https://nextjs.org/docs
- **Prisma:** https://www.prisma.io/docs/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Lucide Icons:** https://lucide.dev/

---

**Happy developing! 🚀**
