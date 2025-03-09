import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function HomeTopic() {
  const route = useRoute();
  const { name } = route.params;

  // サンプルデータ（本来はデータベースやAPIから取得する）
  const topicDetails = {
    'Kusatsu Onsen': {
      location: 'Gunma Prefecture',
      description: 'Kusatsu Onsen is frequently ranked as the No.1 hot spring in Japan.',
      image: require('../assets/草津温泉.jpg'),
    },
    'Hakone Onsen': {
      location: 'Kanagawa Prefecture',
      description: 'Hakone Onsen is one of the most famous hot spring areas in Japan.',
      image: require('../assets/sample.jpg'),
    },
  };

  const selectedTopic = topicDetails[name] || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      {selectedTopic.image && (
        <Image source={selectedTopic.image} style={styles.image} />
      )}
      <Text style={styles.location}>{selectedTopic.location}</Text>
      <Text style={styles.description}>{selectedTopic.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  location: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});
