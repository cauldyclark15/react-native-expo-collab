import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Detail({ navigation }) {
  return (
    <View style={styles.container}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>THIS IS details</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
