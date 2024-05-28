import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView, FlatList, Alert, StyleSheet } from 'react-native';

const App = () => {
  const [characters, setCharacters] = useState([
    { id: 1, name: 'RUAN MEI', tier: 'TIER S', image: { uri: 'https://i.pinimg.com/474x/ba/5f/9e/ba5f9e12df204501119e98a8d6b2c036.jpg' } },
    { id: 2, name: 'ACHERON', tier: 'TIER S', image: { uri: 'https://i.pinimg.com/474x/ae/2c/e3/ae2ce36e54c137d3d0f5ca80b27b0fe8.jpg' } },
    { id: 3, name: 'SILVER WOLF', tier: 'TIER S', image: { uri: 'https://i.pinimg.com/474x/6b/9f/86/6b9f86fc3dcc6c4b42433f63c46bc74e.jpg' } },
    { id: 4, name: 'HUO HUO', tier: 'TIER S', image: { uri: 'https://i.pinimg.com/474x/68/ac/71/68ac71a32770c9bcff71ae50a8415f47.jpg' } },
    { id: 5, name: 'HOTARU', tier: 'TIER S', image: { uri: 'https://i.pinimg.com/474x/a4/3f/a7/a43fa7b274db61f5d17d40a3be77196e.jpg' } },
    { id: 6, name: 'TOPAZ', tier: 'TIER S', image: { uri: 'https://i.pinimg.com/474x/65/aa/c6/65aac699e78c5b3efa1f0b4387603f10.jpg' } },
    { id: 7, name: 'KAFKA', tier: 'TIER S', image: { uri: 'https://i.pinimg.com/474x/2f/30/b8/2f30b889a58fd9dcb11ab8396ab46a8b.jpg' } },
    { id: 8, name: 'BRONYA RAND', tier: 'TIER S', image: { uri: 'https://i.pinimg.com/474x/5d/36/b0/5d36b03c91d59de2dadc07453ff9d29b.jpg' } },
    { id: 9, name: 'ROBIN', tier: 'TIER S', image: { uri: 'https://i.pinimg.com/474x/c8/1b/d4/c81bd40ddf4d715b16e5c4e0fa7e724f.jpg' } },
    { id: 10, name: 'LYNX', tier: 'TIER S', image: { uri: 'https://i.pinimg.com/474x/8b/8b/db/8b8bdb0441276140ce91bdddda43ba06.jpg' } },
    { id: 11, name: 'MARCH 7th', tier: 'TIER S', image: { uri: 'https://i.pinimg.com/474x/4e/c5/2c/4ec52c0d0e412867fe2befea7af174ce.jpg' } },
    { id: 12, name: 'SEELE', tier: 'TIER S', image: { uri: 'https://i.pinimg.com/474x/09/e4/62/09e4620b755b2e216c56d6ac48decf98.jpg' } },
  ]);

  const [search, setSearch] = useState('');

  const handleSearch = (text) => {
    setSearch(text);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAlert = (character) => {
    Alert.alert(
      `Detail Karakter ${character.name}`,
      `Tier: ${character.tier}\nNama: ${character.name}`,
      [
        { text: 'OK', onPress: () => console.log('OK button pressed') },
        { text: 'Batal', onPress: () => console.log('Batal button pressed') },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tier List Sakarepku</Text>
      <TextInput
        placeholder="Cari karakter..."
        onChangeText={handleSearch}
        value={search}
      />
      <ScrollView>
        <FlatList
          data={filteredCharacters}
          renderItem={({ item }) => (
            <View>
              <Image source={item.image} style={{ width: 200, height: 200 }} />
              <Text>{item.name}</Text>
              <Text>{item.tier}</Text>
              <Button title="Lihat Detail" onPress={() => handleAlert(item)} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;