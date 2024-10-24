// app/auth/_layout.tsx
import React, { useEffect } from "react";
import { Slot } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "expo-router";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const AuthLayout = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/home");
    }
  }, [user, loading]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return <Slot />;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AuthLayout;
