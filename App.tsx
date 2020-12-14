import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Button   } from 'react-native';
import Routes from './routes/routes';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>

     <Routes/>
  
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:StatusBar.currentHeight
    
  },
});


