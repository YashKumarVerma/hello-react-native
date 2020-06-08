import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Linking,
  Alert,
} from "react-native";

const handlePress = async () => {
  const url = "https://github.com/yashkumarverma";
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{`I'm Yash Kumar Verma \n`}</Text>
      <Image
        source={{ uri: "https://avatars0.githubusercontent.com/u/14032427" }}
        style={{ width: 200, height: 200 }}
      />
      <Text>{`\n`}</Text>
      <Button
        onPress={handlePress}
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
