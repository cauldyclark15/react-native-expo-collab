import React from "react";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { StyleSheet, Text, View } from "react-native";
import { client } from "./lib/apollo";
import { VIEWER } from "./queries/queries";

function App() {
  const { data, error, loading } = useQuery(VIEWER);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
      </View>
    );
  }

  const name = data?.viewer?.name || "No name fetched";
  const repos: any[] = data?.viewer?.repositories?.nodes || [];

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>{name}</Text>
      {repos.map((item) => (
        <Text key={item.name}>{item.name}</Text>
      ))}
    </View>
  );
}

export default function ClientApp() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
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
