# Admin User Creation Script

This directory contains utility scripts for the IC PestControl application.

## `create-admin.ts`

A secure CLI script to create admin users in the database.

### Features

- 🔒 Interactive password input (no hardcoding)
- 🔐 Bcrypt password hashing with 10 salt rounds
- ✅ Email validation and duplicate prevention
- 🛡️ Secure error handling
- 📝 Production-ready TypeScript code

### Prerequisites

Ensure the following packages are installed:

```bash
npm install bcrypt
npm install -D @types/bcrypt ts-node
```

All dependencies are already included in `package.json`.

### How to Run

**Option 1: Using npm script (Recommended)**

```bash
npm run create-admin
```

**Option 2: Direct ts-node execution**

```bash
npx ts-node scripts/create-admin.ts
```

### Usage Example

```
========================================
  IC PestControl Admin User Creation Script
========================================

Enter admin email: islamabadpestcontrolservices9@gmail.com
Enter admin password (min 8 characters): ••••••••
Confirm password: ••••••••

🔐 Hashing password...
📝 Creating admin user...

✅ Admin user created successfully!

========================================
  Admin User Details:
========================================
ID:        1
Email:     islamabadpestcontrolservices9@gmail.com
Role:      admin
Created:   4/19/2026, 4:15:30 PM
========================================
```

### Security Considerations

- ✅ Passwords are hashed using bcrypt (10 rounds)
- ✅ Passwords are never logged or displayed
- ✅ Emails are validated and checked for duplicates
- ✅ Error messages are user-friendly but don't reveal sensitive info
- ✅ Script disconnects from database immediately after execution

### What the Script Does

1. **Prompts for Email**
   - Validates email format
   - Checks for existing email in database
2. **Prompts for Password**
   - Requires minimum 8 characters
   - Asks for confirmation to prevent typos
   - Validates password match

3. **Creates User**
   - Hashes password with bcrypt
   - Stores in database with role "admin"
   - Displays confirmation with user details

4. **Cleanup**
   - Disconnects from Prisma
   - Exits cleanly

### Troubleshooting

**Error: Module not found 'ts-node'**

```bash
npm install --save-dev ts-node
```

**Error: Module not found 'bcrypt'**

```bash
npm install bcrypt
npm install -D @types/bcrypt
```

**Error: Database connection failed**

- Ensure `.env` file has `DATABASE_URL` set
- Verify database is running and accessible
- Check Neon connection string is correct

**Error: Email already exists**

- Use a different email address
- Or delete the existing user from the database

### Database Cleanup

To delete an admin user (if needed):

```bash
npx prisma studio
# Find the user and delete from UI
# OR use Prisma CLI commands
```

### Related Files

- `prisma/schema.prisma` - Database schema with User model
- `.env` - Environment variables (includes DATABASE_URL)
- `app/api/login/route.ts` - Admin login endpoint
