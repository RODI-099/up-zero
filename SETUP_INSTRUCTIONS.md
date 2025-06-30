# 🚨 CRITICAL: Database Setup Required

## The Problem
Your login errors are occurring because the Supabase database hasn't been set up with the required tables and security policies.

## ✅ Quick Fix - Follow These Steps:

### Step 1: Access Supabase Dashboard
1. Go to: **https://zuplyqfhioctteilbsfy.supabase.co**
2. Log in to your Supabase account

### Step 2: Run the Migration
1. Click **"SQL Editor"** in the left sidebar
2. Click **"New Query"**
3. Copy the ENTIRE content from `supabase/migrations/fix_authentication_setup.sql`
4. Paste it into the SQL Editor
5. Click **"Run"** (or press Ctrl+Enter)
6. Wait for it to complete successfully

### Step 3: Test the Application
**IMPORTANT**: After running the migration:

1. **Sign up a NEW user first** - Don't try to log in with existing credentials
2. Go to your application and click "Sign Up" (회원가입)
3. Create a new account with email and password
4. After successful signup, try logging in with those same credentials

## Why This Fixes the Login Error

The "Invalid login credentials" error occurs because:
- The `users` table doesn't exist or lacks proper Row Level Security policies
- Users can't create profiles during signup due to missing INSERT policies
- The database structure isn't properly initialized

## What the Migration Does

✅ Creates all required tables (`users`, `consultations`, `case_studies`)  
✅ Sets up Row Level Security (RLS) policies  
✅ **Crucially**: Adds the INSERT policy that allows new users to create profiles  
✅ Adds sample case studies for the magazine section  
✅ Creates proper triggers and functions  

## After Migration Success

Your application will be fully functional with:
- ✅ User registration and login working
- ✅ Consultation form submissions
- ✅ Case studies in magazine section
- ✅ Complete database integration

## ⚠️ Important Notes

- **Always sign up first** before trying to log in
- The migration is safe to run multiple times
- If you have existing users, they may need to sign up again
- Make sure to use the exact migration file provided

## Need Help?

If you encounter any issues:
1. Check the Supabase dashboard for error messages
2. Verify all tables were created successfully
3. Ensure RLS policies are enabled
4. Try the signup process with a new email address