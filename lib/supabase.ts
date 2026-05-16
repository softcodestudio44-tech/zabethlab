import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nzhsqjpydvapejvugaai.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56aHNxanB5ZHZhcGVqdnVnYWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MjYxMjcsImV4cCI6MjA5MDIwMjEyN30.UCVHTbSiHRkT7egEKMtGsMyokfyS_SAzQjbMw2cqxZY';

export const supabase = createClient(supabaseUrl, supabaseKey);