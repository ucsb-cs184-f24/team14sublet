// app/home/_layout.tsx
import React, { useEffect } from "react";
import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "expo-router";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const HomeLayout = () => {
  const theme = useTheme();
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/signIn");
    }
  }, [user, loading]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => {
          let iconName = "";

          if (route.name === "index") {
            iconName = "home";
          } else if (route.name === "secondPage") {
            iconName = "info";
          }

          return (
            <MaterialIcons name={iconName as any} size={size} color={color} />
          );
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="secondPage" options={{ title: "Second Page" }} />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeLayout;
