export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string
          role: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          role?: string
          created_at?: string
          updated_at?: string
        }
      }
      consultations: {
        Row: {
          id: string
          user_id: string
          type: 'bodycam' | 'deepfake' | 'general'
          status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          urgency: 'emergency' | 'urgent' | 'normal' | 'low'
          details: string
          contact_info: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: 'bodycam' | 'deepfake' | 'general'
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          urgency: 'emergency' | 'urgent' | 'normal' | 'low'
          details: string
          contact_info?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: 'bodycam' | 'deepfake' | 'general'
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          urgency?: 'emergency' | 'urgent' | 'normal' | 'low'
          details?: string
          contact_info?: Json
          created_at?: string
          updated_at?: string
        }
      }
      case_studies: {
        Row: {
          id: string
          title: string
          excerpt: string
          content: string
          category: string
          author: string
          image_url: string
          published_at: string
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          excerpt: string
          content: string
          category: string
          author: string
          image_url: string
          published_at?: string
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          excerpt?: string
          content?: string
          category?: string
          author?: string
          image_url?: string
          published_at?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      consultation_type: 'bodycam' | 'deepfake' | 'general'
      consultation_status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
      urgency_level: 'emergency' | 'urgent' | 'normal' | 'low'
    }
  }
}