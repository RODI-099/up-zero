import { supabase } from '@/lib/supabase'
import type { Database } from '@/lib/database.types'

type Consultation = Database['public']['Tables']['consultations']['Row']
type ConsultationInsert = Database['public']['Tables']['consultations']['Insert']

export async function createConsultation(consultation: Omit<ConsultationInsert, 'user_id'>) {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error('User not authenticated')
  }

  const { data, error } = await supabase
    .from('consultations')
    .insert([
      {
        ...consultation,
        user_id: user.id,
      }
    ])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getUserConsultations() {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error('User not authenticated')
  }

  const { data, error } = await supabase
    .from('consultations')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function updateConsultationStatus(id: string, status: Consultation['status']) {
  const { data, error } = await supabase
    .from('consultations')
    .update({ status })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}