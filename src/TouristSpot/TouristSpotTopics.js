import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const TouristSpotTopics = () => {
  const route = useRoute();
  const { title } = route.params;

  // ダミーデータ: title に応じた観光スポット情報
  const spotData = {
    KANTO: [
      { name: '東京タワー', image: require('../../assets/sample.jpg') },
      { name: 'スカイツリー', image: require('../../assets/sample.jpg') },
    ],
    CHUGOKU: [
      { name: '原爆ドーム', image: require('../../assets/sample.jpg') },
      { name: '厳島神社', image: require('../../assets/sample.jpg') },
    ],
  };

  const selectedSpots = spotData[title] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title} の観光スポット</Text>
      <FlatList
        data={selectedSpots}
        renderItem={({ item }) => (
          <View style={styles.spotContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.spotName}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  spotContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  spotName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default TouristSpotTopics;
