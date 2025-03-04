import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

// ローカル画像のマッピング（事前に手動で `require()` する）
const imageMap = {
  "厳島神社.jpg": require('../../assets/厳島神社.jpg'),
};

const TouristSpotsDetail = () => {
  const [spotDetails, setSpotDetails] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const { prefecture } = route.params;

  useEffect(() => {
    const allData = require('./TouristSpots.json');

    const filteredData = allData
      .filter((spot) => spot.prefecture === prefecture)
      .map((spot) => ({
        ...spot,
        imagePath: spot.image
          ? spot.image.startsWith('http')
            ? { uri: spot.image } // ネット画像なら `uri`
            : imageMap[spot.image] || null // ローカル画像なら `imageMap` を使用
          : null,
      }));

    setSpotDetails(filteredData);
  }, [prefecture]);

  const handleSpotSelect = (title) => {
    navigation.navigate('TouristSpotsExplanation', { title, prefecture });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>観光地スポットランキング</Text>
      <Text style={styles.title}>{prefecture} のおすすめの観光地を一覧で紹介！</Text>

      {spotDetails.length > 0 ? (
        spotDetails.map((spot, index) => (
          <TouchableOpacity key={spot.id} style={styles.spotWrapper} onPress={() => handleSpotSelect(spot.title)}>
            <View style={styles.spotContainer}>
              {spot.imagePath ? (
                <Image source={spot.imagePath} style={styles.image} />
              ) : (
                <Text style={styles.noImageText}>画像がありません</Text>
              )}
              <Text style={styles.spotName}>{spot.title}</Text>
              <Text style={styles.spotName}>city:{spot.city}</Text>
            </View>
            {index !== spotDetails.length - 1 && <View style={styles.separator} />}
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noDataText}>観光スポットが見つかりません。</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  spotWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  spotContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  noImageText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginBottom: 10,
  },
  spotName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  spotDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
  },
  noDataText: {
    fontSize: 16,
    color: '#999',
  },
  separator: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderStyle: 'dashed',
    marginVertical: 10,
  },
});

export default TouristSpotsDetail;
