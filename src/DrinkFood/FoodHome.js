import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TouristSpotsHome = () => {
  const [selectedPrefecture, setSelectedPrefecture] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const images = [
    require('../../assets/sample2.jpg'),
    require('../../assets/sample.jpg'),
    require('../../assets/厳島神社.jpg'),
  ];

  const areasFood = [
    { area: 'KANTO', prefectures: 'Tokyo', image: require('../../assets/sample.jpg') },
    { area: 'CHUGOKU', prefectures: 'Okayama', image: require('../../assets/sample.jpg') },
    { area: 'CHUGOKU', prefectures: 'Hiroshima', image: require('../../assets/sample.jpg') },
    { area: 'CHUGOKU', prefectures: 'Yamaguchi', image: require('../../assets/sample.jpg') },
  ];

  const populaFood = [
    { foodName :'',area: 'KANTO', prefectures: 'Tokyo', image: require('../../assets/sample.jpg') },
    { area: 'CHUGOKU', prefectures: 'Okayama', image: require('../../assets/sample.jpg') },
    { area: 'CHUGOKU', prefectures: 'Hiroshima', image: require('../../assets/sample.jpg') },
    { area: 'CHUGOKU', prefectures: 'Yamaguchi', image: require('../../assets/sample.jpg') },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handlePrefectureSelect = (prefecture) => {
    setSelectedPrefecture(prefecture);
    navigation.navigate('FoodDetail', { prefecture });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const ereaFoodItem = ({ item }) => (
    <TouchableOpacity style={styles.ereaFoodContainer} onPress={() => handlePrefectureSelect(item.prefectures)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.prefectures}>{item.prefectures}</Text>
    </TouchableOpacity>
  );

  const populaFoodItem = ({ item }) => (
    <TouchableOpacity style={styles.populaFoodContainer} onPress={() => handlePrefectureSelect(item.prefectures)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.prefectures}>{item.prefectures}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>日本で何を食べたい？</Text>
      <View style={styles.slideshowContainer}>
        <TouchableOpacity style={styles.arrowButtonLeft} onPress={handlePrev}>
          <Text style={styles.arrowText}>◀</Text>
        </TouchableOpacity>
        <Image source={images[currentIndex]} style={styles.slideshowImage} />
        <TouchableOpacity style={styles.arrowButtonRight} onPress={handleNext}>
          <Text style={styles.arrowText}>▶</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>勧めのグルメ</Text>
      <FlatList
        data={areasFood}
        renderItem={ereaFoodItem}
        keyExtractor={(item) => item.prefectures}
        horizontal
        scrollEnabled
        contentContainerStyle={styles.listContainer}
      />
      <Text style={styles.title}>各地のおすすめグルメ</Text>
      <FlatList
        data={populaFood}
        renderItem={populaFoodItem}
        keyExtractor={(item) => item.prefectures}
        horizontal
        scrollEnabled
        contentContainerStyle={styles.listContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  slideshowContainer: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideshowImage: {
    width: '80%',
    height: '100%',
    borderRadius: 10,
  },
  arrowButtonLeft: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 20,
  },
  arrowButtonRight: {
    position: 'absolute',
    right: 10,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 20,
  },
  arrowText: {
    color: '#fff',
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  ereaContainer: {
    margin: 10,
    alignItems: 'center',
  },
  popularContainer: {
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  prefectures: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TouristSpotsHome;
