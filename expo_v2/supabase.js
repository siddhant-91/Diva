export async function loadConfig() {
    const res = await fetch("config.json");
    const config = await res.json();
    window.APP_CONFIG = config;

    window.supabase = window.supabase ||
        (await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm"))
            .createClient(config.SUPABASE_URL, config.SUPABASE_ANON_KEY);

    return config;
}
