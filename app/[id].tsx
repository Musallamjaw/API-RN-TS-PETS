import { deletePet, getPetById } from "@/api/pets";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";

import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PetDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const queryClient = useQueryClient();

  const { data: pet, isPending } = useQuery({
    queryKey: ["id"],
    queryFn: () => getPetById(id as string),
  });

  const { mutate } = useMutation({
    mutationKey: ["deletePet"],
    mutationFn: () => deletePet(id as string),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allPets"] });
      router.back();
    },
  });

  if (isPending) {
    return (
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <View style={styles.errorContainer}>
          <ActivityIndicator size="large" color="#6200EE" />
        </View>
      </SafeAreaView>
    );
  }

  if (!pet) {
    return (
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Pet not found!</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={{ uri: pet.image }} style={styles.petImage} />

        <View style={styles.header}>
          <Text style={styles.name}>{pet.name}</Text>
          <View
            style={[
              styles.statusBadge,
              pet.adopted === "Yes"
                ? styles.adoptedBadge
                : styles.availableBadge,
            ]}
          >
            <Text style={styles.statusText}>
              {pet.adopted === "Yes" ? "✓ Adopted" : "Available"}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Details</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>ID:</Text>
            <Text style={styles.detailValue}>#{pet.id}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Type:</Text>
            <Text style={styles.detailValue}>{pet.type}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Status:</Text>
            <Text style={styles.detailValue}>
              {pet.adopted === "Yes" ? "Adopted" : "Available for adoption"}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            mutate();
          }}
          style={{ backgroundColor: "red", margin: 20, borderRadius: 20 }}
        >
          <Text
            style={{
              textAlign: "center",
              padding: 20,
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Delete Pet
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    paddingBottom: 20,
  },
  petImage: {
    width: "100%",
    height: 300,
    backgroundColor: "#f0f0f0",
  },
  header: {
    padding: 20,
    paddingBottom: 12,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  adoptedBadge: {
    backgroundColor: "#4CAF50",
  },
  availableBadge: {
    backgroundColor: "#FF9800",
  },
  statusText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#999",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
  detailValue: {
    fontSize: 14,
    color: "#333",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "#666",
  },
});
