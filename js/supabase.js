const SUPABASE_URL = "https://wbtlkjrcynjorxweqkig.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "sb_publishable_oHs7jUdsBiXFdx2JQPIfzw_7HilAwi-";

window.sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);