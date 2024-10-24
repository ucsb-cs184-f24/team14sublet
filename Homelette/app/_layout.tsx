// app/_layout.tsx
import React from "react";
import { Slot } from "expo-router";
import { AuthProvider } from "../contexts/AuthContext";
import { Provider as PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <AuthProvider>
      <PaperProvider>
        <Slot />
      </PaperProvider>
    </AuthProvider>
  );
}
