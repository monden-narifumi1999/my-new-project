import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const [selectedPrefecture, setSelectedPrefecture] = useState(null); // ← 追加
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedHome, setSelectedHome] = useState(null);

  const bestHome = [
    {
      name: 'Kusatsu Onsen',
      location: 'Gunma Prefecture',
      description: 'Kusatsu Onsen is frequently ranked as the No.1 hot spring in Japan, especially in the Nippon Onsen 100 Selection.',
      image: require('../assets/厳島神社.jpg'),
    },
    {
      name: 'Hakone Onsen',
      location: 'Kanagawa Prefecture',
      description: 'Hakone Onsen is one of the most famous hot spring areas in Japan, known for its beautiful scenery and high-quality water.',
      image: require('../assets/草津温泉.jpg'),
    },
  ];
  const topic = [
    {
      name: 'Kusatsu Onsen',
      location: 'Gunma Prefecture',
      description: 'Kusatsu Onsen is frequently ranked as the No.1 hot spring in Japan, especially in the Nippon Onsen 100 Selection.',
      image: require('../assets/厳島神社.jpg'),
    },
    {
      name: 'Hakone Onsen',
      location: 'Kanagawa Prefecture',
      description: 'Hakone Onsen is one of the most famous hot spring areas in Japan, known for its beautiful scenery and high-quality water.',
      image: require('../assets/草津温泉.jpg'),
    },
  ];

  const images = [
    require('../assets/sample2.jpg'),
    require('../assets/sample.jpg'),
    require('../assets/厳島神社.jpg'),
  ];

  const popularareas = [
    { title: '原爆ドーム', prefecture: 'Hiroshima', image: require('../assets/sample.jpg') },
    { title: '厳島神社', prefecture: 'Hiroshima', image: require('../assets/sample.jpg') },
    { title: 'CHUGOKU', prefecture: 'Hiroshima', image: require('../assets/sample.jpg') },
    { title: '東京タワー', prefecture: 'Tokyo', image: require('../assets/sample.jpg') },
  ];

  const bestTravelSpot = [
    {
      name: '厳島神社',
      location: '広島県',
      description: 'A famous shrine with a floating torii gate.',
      image: require('../assets/sample.jpg'),
    },
    {
      name: '原爆ドーム',
      location: '広島県',
      description: 'A symbol of peace and a UNESCO World Heritage Site.',
      image: require('../assets/sample2.jpg'),
    },
  ];

  // HomeScrollの遷移
  const handleHomeSelect = (name) => {
    console.log(`観光スポットが選択されました: ${name}`);
    setSelectedHome(name);
    navigation.navigate('HomeScroll', { name });
  };

  const bestHomeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.popularContainer}
      onPress={() => handleHomeSelect(item.name)}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.prefectures}>{item.name}</Text>
    </TouchableOpacity>
  );

  // 観光地の遷移
  const handleTopicSelect = (name) => {
    console.log(`観光スポットが選択されました: ${name}`);
    setSelectedTitle(name);
    navigation.navigate('HomeTopic', { name });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.popularContainer}
      onPress={() => handleTopicSelect(item.name)}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.prefectures}>{item.name}</Text>
    </TouchableOpacity>
  );

  // 観光地の遷移
  const handleTitleSelect = (title, prefecture) => {
    console.log(`観光スポットが選択されました: ${title}, 都道府県: ${prefecture}`);
    setSelectedPrefecture(prefecture); // ← 修正
    navigation.navigate('TouristSpotsExplanation', { title, prefecture });
  };

  const populaItem = ({ item }) => (
    <TouchableOpacity
      style={styles.popularContainer}
      onPress={() => handleTitleSelect(item.title, item.prefecture)}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.prefectures}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.homeScreen}>
        <View style={styles.modalOverlay} />
        <ScrollView horizontal contentContainerStyle={styles.modalContent}>
          <TouchableOpacity onPress={() => navigation.navigate('TouristSpotsHome')}>
            <Text style={styles.menuItem}>Tourist Spot</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FoodHome')}>
            <Text style={styles.menuItem}>Drink & Food</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OnsenHome')}>
            <Text style={styles.menuItem}>Onsen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TravelPlanHome')}>
            <Text style={styles.menuItem}>Travel Plan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.menuItem}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PrefectureHome')}>
            <Text style={styles.menuItem}>Prefecture</Text>
          </TouchableOpacity>
        </ScrollView>
        <Text style={styles.title}>Welcme To japan</Text>
        <FlatList
          data={bestHome}
          renderItem={bestHomeItem}
          keyExtractor={(item) => item.name}
          horizontal
          scrollEnabled={true}
          contentContainerStyle={styles.listContainer}
        />
        <Text style={styles.title}>Topic</Text>
        <FlatList
          data={topic}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          numColumns={2}
          scrollEnabled={false}
          contentContainerStyle={styles.listContainer}
        />
        <Text style={styles.title}>Best Travel Spots</Text>
        <FlatList
          data={popularareas}
          renderItem={populaItem}
          keyExtractor={(item) => item.title}
          horizontal
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  homeScreen: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  onsenContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 10,
    flex: 1,
    maxWidth: '45%',
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  onsenName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  modalContent: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
  },
  menuItem: {
    fontSize: 18,
    marginHorizontal: 15,
  },
});
