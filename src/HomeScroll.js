import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function HomeScroll({ route }) {
  const { name } = route.params;

  const spotDetails = {
    'Kusatsu Onsen': {
      location: 'Gunma Prefecture',
      description: 'Kusatsu Onsen is frequently ranked as the No.1 hot spring in Japan, especially in the Nippon Onsen 100 Selection.',
      image: require('../assets/厳島神社.jpg'),
    },
    'Hakone Onsen': {
      location: 'Kanagawa Prefecture',
      description: 'Hakone Onsen is one of the most famous hot spring areas in Japan, known for its beautiful scenery and high-quality water.',
      image: require('../assets/草津温泉.jpg'),
    },
  };

  const selectedSpot = spotDetails[name];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={selectedSpot.image} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.location}>{selectedSpot.location}</Text>
      <Text style={styles.description}>{selectedSpot.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
