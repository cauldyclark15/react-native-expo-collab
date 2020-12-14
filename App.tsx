import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { StyleSheet, Text, View } from "react-native";
import { client } from "./lib/apollo";

function App() {
  return (
    <View style={styles.container}>
      <Text>hey</Text>
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
