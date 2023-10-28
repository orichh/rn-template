import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { useGlobalContext } from "../../components/GlobalContext";
import { GoogleButton } from "../../components/GoogleSignInButton";
import { Text, View } from "../../components/Themed";

export default function TabsIndex() {
  const { session } = useGlobalContext();

  return (
    <View style={styles.container}>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
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
