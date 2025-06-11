import { supabase } from '@/lib/supabase'
import type { Database } from '@/lib/database.types'

type CaseStudy = Database['public']['Tables']['case_studies']['Row']

export async function getCaseStudies() {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .order('published_at', { ascending: false })

  if (error) throw error
  return data
}

export async function getCaseStudyById(id: string) {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function getCaseStudiesByCategory(category: string) {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .eq('category', category)
    .order('published_at', { ascending: false })

  if (error) throw error
  return data
}