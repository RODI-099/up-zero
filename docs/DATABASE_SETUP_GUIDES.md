# Database Setup Guides

## Quick Setup for Popular Alternatives

### 1. Firebase Setup
```bash
npm install firebase
```

Environment variables needed:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
```

### 2. PlanetScale Setup
```bash
npm install @planetscale/database
```

Environment variables needed:
```env
DATABASE_URL=mysql://username:password@host/database?sslaccept=strict
```

### 3. Neon Setup
```bash
npm install @neondatabase/serverless
```

Environment variables needed:
```env
DATABASE_URL=postgresql://username:password@host/database?sslmode=require
```

### 4. Turso Setup
```bash
npm install @libsql/client
```

Environment variables needed:
```env
TURSO_DATABASE_URL=libsql://your-database.turso.io
TURSO_AUTH_TOKEN=your_auth_token
```

### 5. MongoDB Setup
```bash
npm install mongodb
```

Environment variables needed:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
```

## Migration Checklist

- [ ] Choose new database
- [ ] Set up database instance
- [ ] Install required packages
- [ ] Update environment variables
- [ ] Create database client
- [ ] Update API functions
- [ ] Test authentication (if changed)
- [ ] Migrate existing data
- [ ] Update deployment configuration
- [ ] Test all functionality

## Need Help?

Each database has its own setup process. Let me know which database you'd like to use and I can provide specific implementation details!
</parameter>