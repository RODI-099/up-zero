# upoZero - Digital Security Platform

A comprehensive digital security platform built with Next.js and Supabase, focusing on protection against digital crimes like deepfake and sextortion.

## Features

- **Authentication System**: Secure user authentication with Supabase Auth
- **Consultation Services**: Specialized consultation for digital security threats
- **Case Studies**: Real-world case studies and educational content
- **Magazine**: Security awareness articles and guides
- **Company Information**: About pages, awards, and partnerships

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

4. Run the database migrations:
   - Go to your Supabase dashboard
   - Navigate to SQL Editor
   - Run the migration file: `supabase/migrations/fix_authentication_setup.sql`

5. Start the development server:
   ```bash
   npm run dev
   ```

## Database Setup

The project uses Supabase with the following main tables:

- **users**: User profiles and account information
- **consultations**: Consultation requests and status tracking
- **case_studies**: Educational case studies and articles

### Running Migrations

1. Copy the content from `supabase/migrations/fix_authentication_setup.sql`
2. Paste it into the Supabase SQL Editor
3. Execute the migration

This will create all necessary tables, enable Row Level Security (RLS), and insert sample data.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # Company information pages
│   ├── consultation/      # Consultation services
│   ├── magazine/          # Articles and case studies
│   ├── pr/               # Press releases and awards
│   └── services/         # Service pages
├── components/           # Reusable UI components
│   ├── auth/            # Authentication components
│   └── ui/              # Shadcn/ui components
├── lib/                 # Utility functions and API
│   ├── api/            # Database API functions
│   └── supabase.ts     # Supabase client configuration
└── supabase/           # Database migrations
```

## Key Features

### Authentication
- Email/password authentication via Supabase Auth
- User profile management
- Protected routes and user sessions

### Consultation System
- Specialized forms for different types of consultations
- Real-time form submission to Supabase
- Status tracking and management

### Content Management
- Dynamic case studies loaded from database
- Magazine articles with categorization
- Company information and awards

### Security
- Row Level Security (RLS) enabled on all tables
- User data protection and privacy
- Secure API endpoints

## Environment Variables

Required environment variables:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (for admin operations)

## Troubleshooting

### Authentication Issues
If you encounter login or signup issues:
1. Make sure you've run the database migration
2. Try signing up a new user first before logging in
3. Check the browser console for specific error messages

## License

This project is proprietary and confidential.