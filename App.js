import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hey world ! I'm Yash Kumar Verma</Text>
      <br />
      <Button
        // onPress={onPressLearnMore}
        title="Read more about me"
        color="#841584"
        accessibilityLabel="Learn more about Yash"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
