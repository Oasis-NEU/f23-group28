import { createClient } from "@supabase/supabase-js"

//const supabaseURL = process.env.REACT_APP_SUPABASE_URL
//const supabaseKey = process.env.REACT_APP_SUPABASE_KEY

const supabaseURL = "https://ezdtafuxexzktfjciawo.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6ZHRhZnV4ZXh6a3RmamNpYXdvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzM4NjQ0OSwiZXhwIjoyMDEyOTYyNDQ5fQ.rfPrGoopsQ8pB8ahLf0WvnufDB0YurjiVkMmVHvT4Ik"

export const supabase = createClient(supabaseURL, supabaseKey);