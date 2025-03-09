import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import SlideShow from '../../components/slide'; // SlideShowコンポーネントをインポート

const TouristSpotsHome = () => {
  const [selectedPrefecture, setSelectedPrefecture] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const images = [
    require('../../assets/sample2.jpg'),
    require('../../assets/sample.jpg'),
    require('../../assets/厳島神社.jpg'),
  ];

  const topics = [
    { title: 'KANTO', image: require('../../assets/sample.jpg') },
  ];

  const areas = [
    { name: 'KANTO', prefectures: 'Tokyo', image: require('../../assets/sample.jpg') },
    { name: 'CHUGOKU', prefectures: 'Okayama', image: require('../../assets/sample.jpg') },
    { name: 'CHUGOKU', prefectures: 'Hiroshima', image: require('../../assets/sample.jpg') },
    { name: 'CHUGOKU', prefectures: 'Yamaguchi', image: require('../../assets/sample.jpg') },
  ];

  const popularareas = [
    { title: '原爆ドーム', prefecture: 'Hiroshima', image: require('../../assets/sample.jpg') },
    { title: '厳島神社', prefecture: 'Hiroshima', image: require('../../assets/sample.jpg') }, // 統一
    { title: 'CHUGOKU', prefecture: 'Hiroshima', image: require('../../assets/sample.jpg') },
    { title: '東京タワー', prefecture: 'Tokyo', image: require('../../assets/sample.jpg') },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleTopicsSelect = (title) => {
    setSelectedTitle(title);
    navigation.navigate('TouristSpotTopics', { title });
  };

  const handlePrefectureSelect = (prefecture) => {
    setSelectedPrefecture(prefecture);
    navigation.navigate('TouristSpotsDetail', { prefecture });
  };

  const handleTitleSelect = (title, prefecture) => {
    console.log(`観光スポットが選択されました: ${title}, 都道府県: ${prefecture}`);
    setSelectedPrefecture(title);
    navigation.navigate('TouristSpotsExplanation', { title, prefecture });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const titleItem = ({ item }) => (
    <TouchableOpacity style={styles.topicsContainer} onPress={() => handleTopicsSelect(item.title)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  const ereaItem = ({ item }) => (
    <TouchableOpacity style={styles.ereaContainer} onPress={() => handlePrefectureSelect(item.prefectures)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.prefectures}>{item.prefectures}</Text>
    </TouchableOpacity>
  );

  const populaItem = ({ item }) => (
    <TouchableOpacity
      style={styles.popularContainer}
      onPress={() => handleTitleSelect(item.title, item.prefecture)} // prefecture に修正
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.prefectures}>{item.title}</Text>
    </TouchableOpacity>
  );


  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>日本のどこに行きたい？</Text>
      <View style={styles.slideshowContainer}>
        <TouchableOpacity style={styles.arrowButtonLeft} onPress={handlePrev}>
          <Text style={styles.arrowText}>◀</Text>
        </TouchableOpacity>
        { /*<Image source={images[currentIndex]} style={styles.slideshowImage} />*/}
        <FlatList data={topics} renderItem={titleItem} keyExtractor={(item) => item.title} horizontal contentContainerStyle={styles.listContainer} />
        <TouchableOpacity style={styles.arrowButtonRight} onPress={handleNext}>
          <Text style={styles.arrowText}>▶</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>エリアから選択をする</Text>
      <FlatList data={areas} renderItem={ereaItem} keyExtractor={(item) => item.prefectures} horizontal contentContainerStyle={styles.listContainer} />
      <Text style={styles.title}>人気のスポット</Text>
      <FlatList data={popularareas} renderItem={populaItem} keyExtractor={(item) => item.title} horizontal contentContainerStyle={styles.listContainer} />
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
