// app/home/secondPage.tsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const SecondPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Second Page</Text>
      <Text style={styles.content}>Here is some different information!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default SecondPage;
