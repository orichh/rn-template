import { Button, Pressable, View } from "react-native";
import { supabase } from "../util/supabase";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const redirectUrl = __DEV__
  ? "http://localhost:8081"
  : "https://shame-wins.vercel.app";

export function GoogleButton(props: any) {
  const handleClick = () => {
    void (async () => {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: redirectUrl,
        },
      });

      if (error) {
        alert("error signing in");
      }
    })();
  };

  return (
    <View>
      <FontAwesome.Button
        name="google"
        backgroundColor="#3b5998"
        onPress={handleClick}
      >
        Continue with Google
      </FontAwesome.Button>
    </View>
  );
}
