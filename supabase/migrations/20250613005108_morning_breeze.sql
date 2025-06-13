/*
  # Fix RLS policies for users table

  1. Security Updates
    - Drop and recreate RLS policies for users table to ensure proper permissions
    - Allow authenticated users to insert their own profile data
    - Allow authenticated users to read and update their own data
    - Fix policy conditions to properly check auth.uid()

  2. Changes
    - Drop existing policies that may be incorrectly configured
    - Recreate policies with proper conditions
    - Ensure users can create, read, and update their own profiles
*/

-- Drop existing policies for users table
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can create own data" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;

-- Recreate policies with proper conditions
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own data"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);