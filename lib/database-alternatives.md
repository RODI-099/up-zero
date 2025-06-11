# Database Connection Alternatives for upoZero

## Current Setup
- **Supabase** (PostgreSQL with built-in auth, real-time, and APIs)

## Alternative Database Options

### 1. Traditional SQL Databases

#### PostgreSQL (Direct Connection)
```typescript
// lib/postgres.ts
import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
})

export { pool }
```

#### MySQL
```typescript
// lib/mysql.ts
import mysql from 'mysql2/promise'

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

export { connection }
```

#### SQLite (Browser-compatible)
```typescript
// lib/sqlite.ts
import Database from 'better-sqlite3'

const db = new Database('database.db')
export { db }
```

### 2. NoSQL Databases

#### MongoDB
```typescript
// lib/mongodb.ts
import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGODB_URI!)
export { client }
```

#### Firebase Firestore
```typescript
// lib/firebase.ts
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
})

export const db = getFirestore(app)
```

### 3. Cloud Database Services

#### PlanetScale (MySQL)
```typescript
// lib/planetscale.ts
import { connect } from '@planetscale/database'

const connection = connect({
  url: process.env.DATABASE_URL
})

export { connection }
```

#### Neon (PostgreSQL)
```typescript
// lib/neon.ts
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)
export { sql }
```

#### Turso (SQLite)
```typescript
// lib/turso.ts
import { createClient } from '@libsql/client'

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
})

export { client }
```

### 4. ORM/Query Builder Options

#### Prisma (Works with multiple databases)
```typescript
// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export { prisma }
```

#### Drizzle ORM
```typescript
// lib/drizzle.ts
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const client = postgres(process.env.DATABASE_URL!)
const db = drizzle(client)

export { db }
```

## Migration Strategy

### Option 1: Keep Supabase Auth + Different Database
- Keep Supabase for authentication
- Use another database for application data
- Best of both worlds approach

### Option 2: Complete Migration
- Replace both auth and database
- Implement custom authentication
- Full control over the stack

### Option 3: Hybrid Approach
- Use multiple databases for different purposes
- Example: Supabase for user data, MongoDB for content

## Recommended Alternatives by Use Case

### For High Performance
- **Neon** or **PlanetScale** for serverless PostgreSQL/MySQL
- **Turso** for edge SQLite

### For Real-time Features
- **Firebase** for real-time updates
- **Supabase** (current choice)

### For Complex Queries
- **PostgreSQL** with Prisma
- **MySQL** with Drizzle

### For Document Storage
- **MongoDB** for flexible schemas
- **Firebase Firestore** for real-time documents

### For Edge Computing
- **Turso** (SQLite at the edge)
- **Cloudflare D1** (SQLite)

## Implementation Steps

1. **Choose your database**
2. **Update environment variables**
3. **Install required packages**
4. **Create new database client**
5. **Update API functions**
6. **Migrate existing data**
7. **Update authentication (if needed)**

## WebContainer Compatibility

Since you're running in WebContainer, these databases work well:
- ✅ **Supabase** (current)
- ✅ **Firebase**
- ✅ **PlanetScale**
- ✅ **Neon**
- ✅ **Turso**
- ✅ **SQLite** (browser-compatible versions)
- ⚠️ **MongoDB** (cloud only, not local)
- ❌ **Local PostgreSQL/MySQL** (not available in browser)
</parameter>