import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cgrqgisynruhcspvtobo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNncnFnaXN5bnJ1aGNzcHZ0b2JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQxMDA5MjUsImV4cCI6MTk3OTY3NjkyNX0.xqKpGLUKmCSivOgAwBrb7hGx1SxjFC85Wv_0K8Z2EnA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
