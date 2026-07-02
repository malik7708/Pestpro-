# Islamabad PestControl Backend API Documentation

## Overview

Complete backend API system for Islamabad PestControl - Pest Control Management Website with:

- User authentication (JWT-based)
- Admin dashboard with user and message management
- Contact form with email integration
- Rate limiting and security features

## Base URL

```
http://localhost:3000  (Development)
https://pestpro.com   (Production - replace with your domain)
```

## Authentication

All admin endpoints require JWT authentication via HttpOnly cookies.

### Login Flow

1. User submits email and password to `/api/login`
2. Server validates credentials
3. Server returns JWT token in HttpOnly cookie
4. Client automatically sends cookie with subsequent requests
5. Middleware verifies token on protected routes

---

## API Endpoints

### 1. Authentication

#### POST /api/login

Login with admin credentials.

**Request:**

```json
{
  "email": "info@islamabadpestcontrolpk.com",
  "password": "securepassword"
}
```

**Response (200 OK):**

```json
{
  "user": {
    "id": 1,
    "email": "info@islamabadpestcontrolpk.com",
    "role": "admin"
  }
}
```

**Errors:**

- `401 Unauthorized`: Invalid credentials
- `400 Bad Request`: Missing email or password

**cURL:**

```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email": "info@islamabadpestcontrolpk.com", "password": "password123"}'
```

---

#### POST /api/logout

Logout and clear authentication cookie.

**Request:**

```bash
curl -X POST http://localhost:3000/api/logout
```

**Response (200 OK):**

```json
{
  "message": "Logged out successfully"
}
```

---

### 2. Admin - Users Management

#### GET /api/admin/users

Get paginated list of all users.

**Query Parameters:**

- `page` (default: 1) - Page number
- `limit` (default: 10) - Items per page

**Request:**

```bash
curl -X GET "http://localhost:3000/api/admin/users?page=1&limit=10" \
  -H "Cookie: auth-token=YOUR_TOKEN"
```

**Response (200 OK):**

```json
{
  "users": [
    {
      "id": 1,
      "email": "info@islamabadpestcontrolpk.com",
      "role": "admin",
      "createdAt": "2026-04-19T05:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 5,
    "pages": 1
  }
}
```

**Errors:**

- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: User is not admin

---

#### POST /api/admin/users

Create a new user (admin or regular).

**Request:**

```json
{
  "email": "newuser@example.com",
  "password": "securepassword123",
  "role": "user"
}
```

**Response (201 Created):**

```json
{
  "user": {
    "id": 2,
    "email": "newuser@example.com",
    "role": "user",
    "createdAt": "2026-04-19T06:00:00Z"
  }
}
```

**Errors:**

- `400 Bad Request`: Email already exists, invalid role, or missing fields
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: User is not admin

**cURL:**

```bash
curl -X POST http://localhost:3000/api/admin/users \
  -H "Content-Type: application/json" \
  -H "Cookie: auth-token=YOUR_TOKEN" \
  -d '{
    "email": "newuser@example.com",
    "password": "securepassword123",
    "role": "user"
  }'
```

---

### 3. Admin - Messages Management

#### GET /api/admin/messages

Get paginated list of contact form messages.

**Query Parameters:**

- `page` (default: 1) - Page number
- `limit` (default: 10) - Items per page

**Request:**

```bash
curl -X GET "http://localhost:3000/api/admin/messages?page=1&limit=10" \
  -H "Cookie: auth-token=YOUR_TOKEN"
```

**Response (200 OK):**

```json
{
  "messages": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+92-300-1234567",
      "message": "I need pest control services...",
      "createdAt": "2026-04-19T05:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 15,
    "pages": 2
  }
}
```

**Errors:**

- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: User is not admin

---

#### DELETE /api/admin/messages

Delete a contact message by ID.

**Query Parameters:**

- `id` (required) - Message ID to delete

**Request:**

```bash
curl -X DELETE "http://localhost:3000/api/admin/messages?id=1" \
  -H "Cookie: auth-token=YOUR_TOKEN"
```

**Response (200 OK):**

```json
{
  "message": "Message deleted successfully"
}
```

**Errors:**

- `400 Bad Request`: Missing message ID
- `404 Not Found`: Message not found
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: User is not admin

---

### 4. Public - Contact Form

#### POST /api/contact

Submit a contact form message (public, no auth required).

**Rate Limiting:** 3 requests per minute per IP address

**Request:**

```json
{
  "name": "Ahmed Ali",
  "email": "ahmed@example.com",
  "phone": "+92-300-9876543",
  "message": "I have a serious termite problem in my house. Please quote for treatment."
}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Thank you for your message. We'll get back to you soon!",
  "id": 5
}
```

**Errors:**

- `400 Bad Request`: Validation errors
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Server error (email may still have been sent)

**Validation Rules:**

- Name: minimum 2 characters
- Email: valid email format
- Phone: 7-15 characters with digits, spaces, +, -, ()
- Message: minimum 10 characters

**cURL:**

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Ahmed Ali",
    "email": "ahmed@example.com",
    "phone": "+92-300-9876543",
    "message": "I need pest control services for termites."
  }'
```

---

## Database Models

### User Model

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String   // bcrypt hashed
  role      String   @default("user")
  createdAt DateTime @default(now())
}
```

### ContactMessage Model

```prisma
model ContactMessage {
  id        Int      @id @default(autoincrement())
  name      String
  email     String
  phone     String
  message   String
  createdAt DateTime @default(now())
}
```

---

## Testing APIs

### Using Postman (Recommended)

1. **Import Collection:**
   - Open Postman
   - Click "Import" → "Upload Files"
   - Select `scripts/IC-PestControl-API-Collection.postman_collection.json`

2. **Set Base URL:**
   - In the collection, set variable `BASE_URL` to your server URL
   - Default: `http://localhost:3000`

3. **Run Requests:**
   - Login first to get auth token
   - Use token for admin endpoints

### Using cURL

```bash
# 1. Login
curl -i -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email": "info@islamabadpestcontrolpk.com", "password": "admin786"}'

# 2. Extract token from Set-Cookie header
# Use it in subsequent requests:

curl -X GET http://localhost:3000/api/admin/users \
  -H "Cookie: auth-token=YOUR_TOKEN_HERE"
```

### Using Test Script

```bash
# Make script executable
chmod +x scripts/test-apis.sh

# Run tests
cd scripts
./test-apis.sh
```

---

## Security Features

### Authentication

- ✅ JWT tokens with 7-day expiry
- ✅ HttpOnly cookies (prevents XSS attacks)
- ✅ SameSite=strict protection (prevents CSRF)
- ✅ Secure flag enabled in production

### Input Validation

- ✅ Email format validation
- ✅ Phone number format validation
- ✅ Message length validation
- ✅ Password minimum 8 characters

### Rate Limiting

- ✅ Contact form: 3 requests per minute per IP
- ✅ Prevents spam submissions

### Passwords

- ✅ Bcrypt hashing with 10 salt rounds
- ✅ Never stored in plain text
- ✅ Never returned in API responses

### Error Handling

- ✅ No sensitive data in error messages
- ✅ Proper HTTP status codes
- ✅ Try-catch error boundaries

---

## Environment Variables

Add these to your `.env` file:

```bash
# Database
DATABASE_URL="postgresql://..."

# Authentication
JWT_SECRET="your-super-secret-key-min-32-chars"

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
EMAIL_FROM="your-email@gmail.com"
EMAIL_PASSWORD="your-app-password"
EMAIL_TO="info@islamabadpestcontrolpk.com"

# Site
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

---

## Troubleshooting

### "Invalid credentials" error

- Check email spelling
- Verify password is correct
- Ensure user exists in database

### "401 Unauthorized" on admin endpoints

- Login first to get token
- Check token is included in Cookie header
- Verify token hasn't expired (7 days)

### "403 Forbidden" on admin endpoints

- Verify user has "admin" role
- Check role in database if needed

### Contact form not sending email

- Verify SMTP credentials are correct
- Check EMAIL_TO environment variable is set
- Review server logs for errors
- Submission is still saved to database even if email fails

### Rate limit exceeded

- Contact form is limited to 3 requests per minute per IP
- Wait 1 minute and try again
- Limit resets automatically

---

## Frontend Integration

### Admin Login Page

- Endpoint: `/admin/login`
- Built with Next.js + React
- Automatic redirect to dashboard on success

### Admin Dashboard

- Endpoint: `/admin`
- Protected by middleware
- Shows stats and quick actions

### Users Management

- Endpoint: `/admin/users`
- Create, view, and list users
- Pagination support

### Messages Management

- Endpoint: `/admin/messages`
- View contact submissions
- Delete messages
- Full message details modal

---

## Production Deployment

### Before Deploying

1. **Update Environment Variables:**
   - Use strong JWT_SECRET
   - Update DATABASE_URL to production database
   - Configure production email service
   - Set NODE_ENV=production

2. **Security:**
   - Enable HTTPS/SSL
   - Update NEXT_PUBLIC_SITE_URL to production domain
   - Use secure email credentials
   - Enable CORS if needed

3. **Database:**
   - Run migrations: `npx prisma migrate deploy`
   - Create production admin user
   - Backup database regularly

4. **Monitoring:**
   - Set up error tracking (Sentry, etc.)
   - Monitor API response times
   - Log important events

### Deploy Commands

```bash
# Build
npm run build

# Start production server
npm start

# Or use PM2
pm2 start npm --name "pestpro" -- start
```

---

## Support & Documentation

- **API Tests:** `scripts/test-apis.sh`
- **Postman Collection:** `scripts/IC-PestControl-API-Collection.postman_collection.json`
- **Admin Script:** `scripts/create-admin.js`
- **Auth Library:** `lib/auth-client.ts`
- **Auth Hook:** `hooks/useAuth.ts`

---

**Last Updated:** April 19, 2026  
**Version:** 1.0.0

