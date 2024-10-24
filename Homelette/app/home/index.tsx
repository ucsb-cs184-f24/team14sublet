// app/home/index.tsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const Home = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // On success, AuthContext will handle the redirection
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.email}>Email: {auth.currentUser?.email}</Text>
      <Button mode="outlined" onPress={handleSignOut} style={styles.button}>
        Sign Out
      </Button>
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
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    width: "50%",
  },
});

export default Home;
