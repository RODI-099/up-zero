import { supabase } from '@/lib/supabase'

export async function checkAdminAccess(userId: string): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', userId)
      .single()

    if (error) {
      console.error('Error checking admin access:', error)
      return false
    }

    return data?.role === 'admin'
  } catch (error) {
    console.error('Error in checkAdminAccess:', error)
    return false
  }
}

export async function requireAdminAccess(userId: string): Promise<void> {
  const hasAccess = await checkAdminAccess(userId)
  
  if (!hasAccess) {
    throw new Error('Admin access required')
  }
}

// Helper function to get user role
export async function getUserRole(userId: string): Promise<string | null> {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', userId)
      .single()

    if (error) {
      console.error('Error getting user role:', error)
      return null
    }

    return data?.role || null
  } catch (error) {
    console.error('Error in getUserRole:', error)
    return null
  }
}