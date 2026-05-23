
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://lkwcgurcxxphirbtckvr.supabase.co';   // Ganti dengan URL proyek Anda
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrd2NndXJjeHhwaGlyYnRja3ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0OTc4MzUsImV4cCI6MjA5NTA3MzgzNX0.U3OFcZVJ1UdyJo2P56zmrTga9kFsrChpNWrHyR1-IPs';          // Ganti dengan publishable key Anda

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);