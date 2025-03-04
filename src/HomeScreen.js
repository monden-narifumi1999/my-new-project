import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const bestHome = [
    {
      name: 'Ousatsu Onsen',
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

  const bestHomeItem = ({ item }) => (
    <View style={styles.onsenContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.onsenName}>{item.name}</Text>
      <Text style={styles.location}>{item.location}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.onsenContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.onsenName}>{item.name}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.homeScreen}>
        <View style={styles.modalOverlay} />
        <ScrollView
          horizontal
          contentContainerStyle={styles.modalContent}
        >
          <TouchableOpacity onPress={() => navigation.navigate('TouristSpotsHome')} >
            <Text style={styles.menuItem}>Tourist Spot</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FoodHome')} >
            <Text style={styles.menuItem}>Drink & Food</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OnsenHome')} >
            <Text style={styles.menuItem}>Onsen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TravelPlanHome')} >
            <Text style={styles.menuItem}>Travel Plan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')} >
            <Text style={styles.menuItem}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PrefectureHome')} >
            <Text style={styles.menuItem}>Prefecture</Text>
          </TouchableOpacity>
        </ScrollView>
        <Text style={styles.title}>Welcme To japan</Text>
        <FlatList
          data={bestHome}
          renderItem={bestHomeItem}
          keyExtractor={(item) => item.name}
          horizontal // これを追加して横スクロールを有効にする
          scrollEnabled={true} // 横スクロールを有効にする
          contentContainerStyle={styles.listContainer}
        />
        <Text style={styles.title}>Topic</Text>
        <FlatList
          data={topic}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          numColumns={2}
          scrollEnabled={false} // FlatList のスクロールを無効化
          contentContainerStyle={styles.listContainer}
        />
        <FlatList
          data={topic}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          numColumns={2}
          scrollEnabled={false} // FlatList のスクロールを無効化
          contentContainerStyle={styles.listContainer}
        />
        <Text style={styles.title}>Best Travel Spots</Text>
        <FlatList
          data={bestTravelSpot}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          scrollEnabled={false} // FlatList のスクロールを無効化
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
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  closeText: {
    fontSize: 30,
    color: 'black',
  },
  menuItem: {
    fontSize: 18,
    marginHorizontal: 15,
  },
});
