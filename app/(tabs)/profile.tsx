import { Button, StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import { supabase } from "../../util/supabase";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Button title="Sign out" onPress={() => supabase.auth.signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
