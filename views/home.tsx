import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';

import { DATA } from '.././component/Data';

  const Item = ({ title }) => (
    <List.Item
    title={title}
    description="Item description"
    />
  );

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <Item title={item.title} />
        </TouchableOpacity>
  );


  
export default function Home({ navigation }) {
  return (
    <View style={{flex:1}}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
