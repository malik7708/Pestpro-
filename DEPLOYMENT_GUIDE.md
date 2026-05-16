# ISB PestControl Production Deployment Guide

## Pre-Deployment Checklist

### Security

- [ ] Generate new `JWT_SECRET` (use: `openssl rand -base64 32`)
- [ ] Update all environment variables for production
- [ ] Enable HTTPS/SSL certificate
- [ ] Configure email service with production credentials
- [ ] Set `NODE_ENV=production`
- [ ] Update CORS if using separate frontend domain
- [ ] Review and update security headers

### Database

- [ ] Set up production PostgreSQL database (Neon, AWS RDS, etc.)
- [ ] Update `DATABASE_URL` to production database
- [ ] Run migrations: `npx prisma migrate deploy`
- [ ] Create production admin user using create-admin.js
- [ ] Verify database backups are configured
- [ ] Test database connectivity

### Frontend

- [ ] Update `NEXT_PUBLIC_SITE_URL` to production domain
- [ ] Build project: `npm run build`
- [ ] Test production build locally
- [ ] Verify all API endpoints are working
- [ ] Check environment variables are loaded

### Performance

- [ ] Enable caching headers
- [ ] Configure CDN if needed
- [ ] Set up monitoring and error tracking
- [ ] Configure logging and analytics
- [ ] Test under load

---

## Environment Variables for Production

Create `.env.production` or update `.env`:

```bash
# Database (Production)
DATABASE_URL="postgresql://user:password@host:5432/pestpro_prod"

# Authentication
JWT_SECRET="generate-new-secure-secret-here-min-32-chars"

# Email Service (Gmail, SendGrid, etc.)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
EMAIL_FROM="info@islamabadpestcontrolpk.com"
EMAIL_PASSWORD="your-production-app-password"
EMAIL_TO="info@islamabadpestcontrolpk.com"

# Site Configuration
NEXT_PUBLIC_SITE_URL="https://pestpro.com"
NODE_ENV="production"

# Optional: Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

---

## Database Migration for Production

```bash
# 1. Back up current database
# (Do this with your database provider)

# 2. Run migrations
npx prisma migrate deploy

# 3. Generate Prisma client for production
npx prisma generate

# 4. Verify migrations were successful
npx prisma migrate status
```

---

## Creating Production Admin User

```bash
# Option 1: Using the script
npm run create-admin

# Option 2: Direct database insert (using Prisma Studio)
npx prisma studio

# Then add user manually with admin role
```

---

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)

**Advantages:**

- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Edge functions
- Environment variables management

**Steps:**

```bash
# 1. Push code to GitHub
git push origin main

# 2. Connect to Vercel
# Go to vercel.com → New Project → Import Git Repo

# 3. Set environment variables in Vercel dashboard
# Database URL, JWT Secret, Email credentials, etc.

# 4. Deploy
# Vercel automatically builds and deploys

# 5. Run migrations after first deploy
# Use Vercel CLI or dashboard to run:
npx prisma migrate deploy
```

### Option 2: Docker + Cloud Run (Google Cloud)

**Dockerfile:**

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**Deploy:**

```bash
# Build and push to Cloud Registry
docker build -t gcr.io/PROJECT_ID/pestpro .
docker push gcr.io/PROJECT_ID/pestpro

# Deploy to Cloud Run
gcloud run deploy pestpro \
  --image gcr.io/PROJECT_ID/pestpro \
  --platform managed \
  --region us-central1 \
  --set-env-vars DATABASE_URL=...,JWT_SECRET=...,etc.
```

### Option 3: Traditional VPS (DigitalOcean, Linode, AWS EC2)

**Setup:**

```bash
# 1. SSH into VPS
ssh root@your-vps-ip

# 2. Install dependencies
apt update && apt install -y nodejs npm postgresql nginx

# 3. Clone repository
cd /var/www
git clone your-repo.git pestpro
cd pestpro

# 4. Install dependencies
npm install

# 5. Create .env file
nano .env
# Paste production environment variables

# 6. Build
npm run build

# 7. Run migrations
npx prisma migrate deploy

# 8. Start with PM2
npm install -g pm2
pm2 start npm --name "pestpro" -- start
pm2 startup
pm2 save

# 9. Configure Nginx as reverse proxy
nano /etc/nginx/sites-available/pestpro
```

**Nginx Config:**

```nginx
server {
    listen 80;
    server_name pestpro.com www.pestpro.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Enable HTTPS with Let's Encrypt:**

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d pestpro.com -d www.pestpro.com
```

---

## Monitoring & Maintenance

### Monitor Application Health

```bash
# Check if app is running
pm2 status

# View logs
pm2 logs pestpro

# Monitor real-time
pm2 monit

# Restart if needed
pm2 restart pestpro

# Update code and restart
git pull origin main
npm install
npm run build
pm2 restart pestpro
```

### Database Maintenance

```bash
# Backup database regularly
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql

# Restore from backup
psql $DATABASE_URL < backup-20260419.sql

# Check database size
psql $DATABASE_URL -c "SELECT pg_size_pretty(pg_database_size(current_database()));"
```

### Error Tracking Setup (Sentry)

```bash
# Install Sentry
npm install @sentry/nextjs

# Configure in next.config.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
```

### Performance Monitoring

- Use Vercel Analytics for real user monitoring
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Monitor database query performance
- Track API response times
- Set up alerts for errors and downtime

---

## SSL/TLS Certificate

### Automatic (Recommended)

If using Vercel or Netlify:

- HTTPS is automatic and free
- Certificate renews automatically

### Manual (Self-Managed)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot certonly --webroot -w /var/www/html -d pestpro.com

# Auto-renewal
sudo systemctl enable certbot.timer
```

---

## Backup Strategy

### Database Backups

**Daily Automated Backup:**

```bash
# Create backup script
cat > /usr/local/bin/backup-pestpro.sh << 'EOF'
#!/bin/bash
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="/backups/pestpro"
mkdir -p $BACKUP_DIR

# Backup PostgreSQL
pg_dump $DATABASE_URL | gzip > $BACKUP_DIR/db_$TIMESTAMP.sql.gz

# Keep only last 30 days
find $BACKUP_DIR -name "db_*.sql.gz" -mtime +30 -delete
EOF

chmod +x /usr/local/bin/backup-pestpro.sh

# Schedule with cron
(crontab -l 2>/dev/null; echo "0 2 * * * /usr/local/bin/backup-pestpro.sh") | crontab -
```

### Code Repository Backup

- Use GitHub/GitLab for version control
- Set up branch protection rules
- Require code review before merge to main
- Tag releases

---

## Security Hardening

### Application Security

```typescript
// Add security headers in next.config.ts
module.exports = {
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains",
        },
      ],
    },
  ],
};
```

### Environment Variable Encryption

```bash
# For sensitive data, use environment variable encryption
# Most cloud providers offer built-in encryption

# Verify secrets are never committed
git-secrets --install
git-secrets --register-aws
```

### Rate Limiting for Production

```typescript
// Consider adding Redis-based rate limiting
// for production deployments
npm install redis ioredis

// Update middleware.ts
// Implement per-user, per-IP rate limiting
```

---

## Scaling for Production

### Horizontal Scaling (Multiple Instances)

```bash
# Use PM2 cluster mode
pm2 start npm --name "pestpro" -i max -- start

# Or use Kubernetes/Docker Compose
docker-compose up -d
```

### Database Optimization

```sql
-- Create indexes for faster queries
CREATE INDEX idx_user_email ON "User"(email);
CREATE INDEX idx_contact_created ON "ContactMessage"(createdAt);
CREATE INDEX idx_contact_email ON "ContactMessage"(email);
```

### Caching Strategy

```typescript
// Add caching headers for static content
// Configure CDN for media files
// Use Next.js ISR (Incremental Static Regeneration)
```

---

## Post-Deployment Testing

### Smoke Tests

```bash
# Test critical endpoints
curl -H "Content-Type: application/json" \
  -d '{"email":"info@islamabadpestcontrolpk.com","password":"admin786"}' \
  https://pestpro.com/api/login

# Verify contact form
curl -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"+92-300-1234567","message":"Test message"}' \
  https://pestpro.com/api/contact
```

### Health Check Endpoint

```typescript
// app/api/health/route.ts
export async function GET() {
  return Response.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
}
```

---

## Rollback Procedure

```bash
# If something breaks:

# 1. Check current deployment
git log --oneline | head -5

# 2. Rollback to previous version
git revert HEAD
git push origin main

# 3. Redeploy (automatic on Vercel)
# OR manual restart on VPS

pm2 restart pestpro

# 4. Monitor logs
pm2 logs pestpro

# 5. If needed, restore from database backup
psql $DATABASE_URL < backup.sql
```

---

## Contact & Support

For issues or questions:

- Check API Documentation: `API_DOCUMENTATION.md`
- Review application logs
- Check database integrity
- Contact hosting provider for infrastructure issues

---

**Deployment Complete!** 🎉

Your ISB PestControl admin system is now live and secure.
