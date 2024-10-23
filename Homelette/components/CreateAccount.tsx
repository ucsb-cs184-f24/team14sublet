// components/CreateAccount.tsx
import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase"; // Import the auth instance

const CreateAccount: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully created the account
        const user = userCredential.user;
        Alert.alert("Success", "Account created successfully!");
      })
      .catch((error) => {
        // Handle account creation error
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Error", errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Create an Account</Title>
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        mode="outlined"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button
        mode="contained"
        onPress={handleSignUp}
        loading={loading}
        disabled={loading}
        style={styles.button}
        contentStyle={styles.buttonContent}
      >
        Sign Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
    color: "#333",
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 24,
  },
  buttonContent: {
    paddingVertical: 8,
  },
});

export default CreateAccount;
