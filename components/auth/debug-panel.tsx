"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { supabase } from "@/lib/supabase"
import { CheckCircle, XCircle, AlertTriangle, Database, Key, Wifi } from "lucide-react"

export function DebugPanel() {
  const [testResults, setTestResults] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const runDiagnostics = async () => {
    setIsLoading(true)
    const results: any = {
      environment: {},
      connection: {},
      database: {},
      auth: {}
    }

    console.log('🔍 RUNNING COMPREHENSIVE DIAGNOSTICS...')

    // Test 1: Environment Variables
    console.log('1️⃣ Testing Environment Variables...')
    results.environment = {
      supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseUrlValue: process.env.NEXT_PUBLIC_SUPABASE_URL || 'MISSING',
      anonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      anonKeyLength: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length || 0,
      serviceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    }

    // Test 2: Supabase Connection
    console.log('2️⃣ Testing Supabase Connection...')
    try {
      const { data, error } = await supabase.auth.getSession()
      results.connection = {
        success: !error,
        error: error?.message,
        hasSession: !!data.session,
        sessionUser: data.session?.user?.id
      }
    } catch (error: any) {
      results.connection = {
        success: false,
        error: error.message,
        hasSession: false
      }
    }

    // Test 3: Database Tables
    console.log('3️⃣ Testing Database Tables...')
    try {
      // Test users table
      const { data: usersData, error: usersError } = await supabase
        .from('users')
        .select('count')
        .limit(1)

      // Test consultations table  
      const { data: consultationsData, error: consultationsError } = await supabase
        .from('consultations')
        .select('count')
        .limit(1)

      // Test case_studies table
      const { data: caseStudiesData, error: caseStudiesError } = await supabase
        .from('case_studies')
        .select('count')
        .limit(1)

      results.database = {
        usersTable: !usersError,
        usersError: usersError?.message,
        consultationsTable: !consultationsError,
        consultationsError: consultationsError?.message,
        caseStudiesTable: !caseStudiesError,
        caseStudiesError: caseStudiesError?.message,
      }
    } catch (error: any) {
      results.database = {
        error: error.message,
        usersTable: false,
        consultationsTable: false,
        caseStudiesTable: false
      }
    }

    // Test 4: Auth System
    console.log('4️⃣ Testing Auth System...')
    try {
      // Test if we can check for existing users (this tests RLS policies)
      const { data, error } = await supabase
        .from('users')
        .select('email')
        .eq('email', 'test@nonexistent.com')
        .single()

      results.auth = {
        canQueryUsers: !error || error.code === 'PGRST116', // PGRST116 = no rows returned (which is expected)
        authError: error?.message,
        authCode: error?.code
      }
    } catch (error: any) {
      results.auth = {
        canQueryUsers: false,
        authError: error.message
      }
    }

    console.log('📊 DIAGNOSTIC RESULTS:', results)
    setTestResults(results)
    setIsLoading(false)
  }

  const testSignup = async () => {
    console.log('🧪 TESTING SIGNUP PROCESS...')
    
    try {
      const testEmail = `test-${Date.now()}@example.com`
      const testPassword = 'testpassword123'
      const testName = 'Test User'

      console.log('📧 Test credentials:', { testEmail, testName, passwordLength: testPassword.length })

      // Step 1: Test auth signup
      console.log('1️⃣ Testing Supabase Auth signup...')
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: testEmail,
        password: testPassword,
        options: {
          data: { name: testName }
        }
      })

      if (authError) {
        console.error('❌ Auth signup failed:', authError)
        return
      }

      console.log('✅ Auth signup successful:', authData.user?.id)

      // Step 2: Test profile creation
      if (authData.user) {
        console.log('2️⃣ Testing profile creation...')
        const { data: profileData, error: profileError } = await supabase
          .from('users')
          .insert([{
            id: authData.user.id,
            email: testEmail,
            name: testName
          }])
          .select()
          .single()

        if (profileError) {
          console.error('❌ Profile creation failed:', profileError)
        } else {
          console.log('✅ Profile created successfully:', profileData)
        }

        // Cleanup: Delete test user
        console.log('🧹 Cleaning up test user...')
        await supabase.from('users').delete().eq('id', authData.user.id)
      }

    } catch (error) {
      console.error('💥 Test signup exception:', error)
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          Signup Debug Panel
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-4">
          <Button onClick={runDiagnostics} disabled={isLoading}>
            {isLoading ? 'Running Diagnostics...' : 'Run Diagnostics'}
          </Button>
          <Button onClick={testSignup} variant="outline">
            Test Signup Process
          </Button>
        </div>

        {testResults && (
          <div className="space-y-4">
            {/* Environment Variables */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Key className="h-4 w-4" />
                  Environment Variables
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    {testResults.environment.supabaseUrl ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600" />
                    )}
                    <span>Supabase URL</span>
                    <Badge variant={testResults.environment.supabaseUrl ? "default" : "destructive"}>
                      {testResults.environment.supabaseUrl ? "Present" : "Missing"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    {testResults.environment.anonKey ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600" />
                    )}
                    <span>Anon Key</span>
                    <Badge variant={testResults.environment.anonKey ? "default" : "destructive"}>
                      {testResults.environment.anonKeyLength} chars
                    </Badge>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
                  <strong>URL:</strong> {testResults.environment.supabaseUrlValue}
                </div>
              </CardContent>
            </Card>

            {/* Connection Test */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Wifi className="h-4 w-4" />
                  Supabase Connection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  {testResults.connection.success ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600" />
                  )}
                  <span>Connection Status</span>
                  <Badge variant={testResults.connection.success ? "default" : "destructive"}>
                    {testResults.connection.success ? "Connected" : "Failed"}
                  </Badge>
                </div>
                {testResults.connection.error && (
                  <div className="mt-2 p-3 bg-red-50 rounded text-sm text-red-700">
                    <strong>Error:</strong> {testResults.connection.error}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Database Tables */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Database Tables
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {testResults.database.usersTable ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600" />
                    )}
                    <span>Users Table</span>
                    <Badge variant={testResults.database.usersTable ? "default" : "destructive"}>
                      {testResults.database.usersTable ? "Exists" : "Missing"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    {testResults.database.consultationsTable ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600" />
                    )}
                    <span>Consultations Table</span>
                    <Badge variant={testResults.database.consultationsTable ? "default" : "destructive"}>
                      {testResults.database.consultationsTable ? "Exists" : "Missing"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    {testResults.database.caseStudiesTable ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600" />
                    )}
                    <span>Case Studies Table</span>
                    <Badge variant={testResults.database.caseStudiesTable ? "default" : "destructive"}>
                      {testResults.database.caseStudiesTable ? "Exists" : "Missing"}
                    </Badge>
                  </div>
                </div>
                {(testResults.database.usersError || testResults.database.consultationsError || testResults.database.caseStudiesError) && (
                  <div className="mt-4 space-y-2">
                    {testResults.database.usersError && (
                      <div className="p-3 bg-red-50 rounded text-sm text-red-700">
                        <strong>Users Error:</strong> {testResults.database.usersError}
                      </div>
                    )}
                    {testResults.database.consultationsError && (
                      <div className="p-3 bg-red-50 rounded text-sm text-red-700">
                        <strong>Consultations Error:</strong> {testResults.database.consultationsError}
                      </div>
                    )}
                    {testResults.database.caseStudiesError && (
                      <div className="p-3 bg-red-50 rounded text-sm text-red-700">
                        <strong>Case Studies Error:</strong> {testResults.database.caseStudiesError}
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Auth System */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Key className="h-4 w-4" />
                  Authentication System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  {testResults.auth.canQueryUsers ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600" />
                  )}
                  <span>Auth System</span>
                  <Badge variant={testResults.auth.canQueryUsers ? "default" : "destructive"}>
                    {testResults.auth.canQueryUsers ? "Working" : "Failed"}
                  </Badge>
                </div>
                {testResults.auth.authError && (
                  <div className="mt-2 p-3 bg-red-50 rounded text-sm text-red-700">
                    <strong>Error:</strong> {testResults.auth.authError}
                    {testResults.auth.authCode && (
                      <div><strong>Code:</strong> {testResults.auth.authCode}</div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  )
}