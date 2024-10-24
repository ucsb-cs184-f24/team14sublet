// app/index.tsx
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "../contexts/AuthContext";
import { ActivityIndicator, View, StyleSheet } from "react-native";

export default function Index() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace("/home");
      } else {
        router.replace("/auth/signIn");
      }
    }
  }, [user, loading]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
