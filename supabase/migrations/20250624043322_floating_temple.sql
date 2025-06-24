/*
  # Add User Roles for RBAC

  1. Schema Changes
    - Add `role` column to `users` table
    - Set default role as 'user'
    - Update existing users to have 'user' role

  2. Security
    - Maintain existing RLS policies
    - Role column is included in user data access
*/

-- Add role column to users table
ALTER TABLE users
ADD COLUMN role text DEFAULT 'user' NOT NULL;

-- Update existing users to have the 'user' role if they don't already have one
UPDATE users
SET role = 'user'
WHERE role IS NULL;

-- Add a check constraint to ensure only valid roles are used
ALTER TABLE users
ADD CONSTRAINT users_role_check 
CHECK (role IN ('user', 'admin', 'moderator'));

-- Create an index on the role column for better query performance
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);