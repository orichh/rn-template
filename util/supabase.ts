import AsyncStorage from "@react-native-async-storage/async-storage";
import { SupabaseClientOptions, createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = process.env.EXPO_PUBLIC_NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env
  .EXPO_PUBLIC_NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

const supabaseOptions: SupabaseClientOptions<"public"> = {
  auth: {
    // storage: AsyncStorage,
    // autoRefreshToken: true,
    // persistSession: true,
    // detectSessionInUrl: false,
  },
};
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  supabaseOptions
);
