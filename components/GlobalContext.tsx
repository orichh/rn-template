import { Session } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../util/supabase";
import { useRouter } from "expo-router";

type TGlobalContext = {
  session: Session | null;
};

export const GlobalContext = createContext<TGlobalContext>({
  session: null,
});

export const GlobalContextProvider = ({ children }: { children: any }) => {
  const [session, setSession] = useState<Session | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace("/(tabs)");
    } else {
      router.replace("/");
    }
  }, [session]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ session: session }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }

  return context;
};
