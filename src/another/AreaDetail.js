import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AreaData from './AreaData.json';

// ローカル画像のマッピング
const imageMap = {
 "厳島神社.jpg": require('../../assets/厳島神社.jpg'),
};

const AreaDetail = () => {
  const [areaDetails, setAreaDetails] = useState([]);
  const route = useRoute();
  const { prefecture, city } = route.params;

  useEffect(() => {
    // 都道府県と都市でデータをフィルタリング
    const filteredData = AreaData
      .filter(area => area.prefecture === prefecture && area.city === city)
      .map(area => ({
        ...area,
        imagePath: imageMap[area.image] || { uri: area.image }
      }));

    setAreaDetails(filteredData);
  }, [prefecture, city]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{city} のおすすめスポット</Text>

      {areaDetails.length > 0 ? (
        areaDetails.map((area) => (
          <View key={area.city} style={styles.areaContainer}>
            {area.imagePath ? (
              <Image source={area.imagePath} style={styles.image} />
            ) : (
              <Text style={styles.noImageText}>画像がありません</Text>
            )}
            <Text style={styles.areaTitle}>{area.city}</Text>
            <Text style={styles.areaDescription}>{area.cityDescription}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(area.googleMap)}>
                <Text style={styles.googleMapLink}>📍 Googleマップで開く</Text>
              </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text style={styles.noDataText}>情報が見つかりません。</Text>
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
  areaContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
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
  areaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  areaDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
  },
  noDataText: {
    fontSize: 16,
    color: '#999',
  },
});

export default AreaDetail;
