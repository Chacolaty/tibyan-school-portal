
const SUPABASE_URL = 'https://hozadtlnrihdpjpypyus.supabase.co';

const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_JlcnRjtGRz2n6ey21Q_EeA_9J0IHXeW';

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
