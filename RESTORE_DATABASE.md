# Database Restoration Guide

## Your New Supabase Project
- **URL**: https://soiadvgwwzoklfmoposn.supabase.co
- **Status**: Ready for migration

## Step 1: Run Migrations in Order

Go to your Supabase dashboard: https://soiadvgwwzoklfmoposn.supabase.co

### Option A: Use Supabase CLI (Recommended)

If you have the Supabase CLI installed, you can run all migrations at once:

```bash
cd /Users/a1/up-zero
supabase link --project-ref soiadvgwwzoklfmoposn
supabase db push
```

### Option B: Manual SQL Execution

1. Navigate to **SQL Editor** in your Supabase dashboard
2. Click **New Query**
3. Copy and paste each migration file in order:

#### Required Migrations (in order):
1. `supabase/migrations/20250611022409_orange_breeze.sql` - Initial schema
2. `supabase/migrations/20250611060438_precious_butterfly.sql`
3. `supabase/migrations/20250611074358_square_glitter.sql`
4. `supabase/migrations/20250613005108_morning_breeze.sql`
5. `supabase/migrations/20250624043322_floating_temple.sql`
6. `supabase/migrations/20250630005825_late_wind.sql`
7. `supabase/migrations/20250630010329_misty_flower.sql`
8. `supabase/migrations/20250630011632_delicate_fountain.sql`
9. `supabase/migrations/20250630012101_bright_cottage.sql`
10. `supabase/migrations/20250630012306_smooth_hall.sql`
11. `supabase/migrations/add_live_chat.sql` - Live chat functionality

4. Click **Run** for each migration
5. Wait for success confirmation before proceeding to the next

## Step 2: Get Service Role Key

1. Go to **Settings** → **API** in your Supabase dashboard
2. Copy the **service_role** key (keep it secret!)
3. Update `/Users/a1/up-zero/.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://soiadvgwwzoklfmoposn.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_MRYhjSx-ZdwW67AzVgLTPw_0iUzVRvi
SUPABASE_SERVICE_ROLE_KEY=<paste_your_service_role_key_here>
```

## Step 3: Restart Development Server

```bash
# Stop current server (Ctrl+C if running)
npm run dev
```

Open http://localhost:3001 (or 3000)

## Step 4: Test the Application

1. **Sign up** with a new account (create a test user)
2. Try logging in with the new credentials
3. Test consultation form submission
4. Check magazine/case studies page

## Verification Checklist

- [ ] All migrations ran without errors
- [ ] `.env.local` updated with new credentials
- [ ] Dev server starts without Supabase errors
- [ ] Can sign up new users
- [ ] Can log in successfully
- [ ] Case studies appear in magazine section
- [ ] Can submit consultation forms

## Troubleshooting

### If migrations fail:
- Check for syntax errors in the SQL output
- Ensure you're running them in the correct order
- Some migrations may depend on previous ones

### If auth doesn't work:
- Verify environment variables are correct
- Check Supabase dashboard → Authentication → Providers
- Ensure Email provider is enabled

### Need help?
Run: `supabase status` to check local setup
Or check logs in Supabase dashboard → Logs
