import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnsenHome = () => {
  const navigation = useNavigation();

  const onsenScroll = [
    { title: 'A', image: require('../../assets/sample.jpg') },
    { title: 'B', image: require('../../assets/sample.jpg') },
    { title: 'C', image: require('../../assets/sample.jpg') },
    { title: 'D', image: require('../../assets/sample.jpg') },
    { title: 'E', image: require('../../assets/sample.jpg') }];

  const bestOnsenSpot = [
    { name: 'KYUSHU', prefectures: 'Oita', onsenSpot: 'BeppuOnsen', image: require('../../assets/sample.jpg') },
    { name: 'KANTO', prefectures: 'Gunma', onsenSpot: 'KusatuOnsen', image: require('../../assets/sample.jpg') },
    { name: 'KANTO', prefectures: 'Kanagawa', onsenSpot: 'HakoneOnsen', image: require('../../assets/sample.jpg') },
    { name: 'KANSAI', prefectures: 'Hyogo', onsenSpot: 'ArimaOnsen', image: require('../../assets/sample.jpg') },
  ];

  const efficacy = [
    { efficacyName: 'SimpleOnsen', description: 'This onsen contains few ingredients and is gentle on the skin, making it ideal for those with sensitive skin. It offers high relaxation effects, helping to relieve both physical and mental fatigue while enjoying a peaceful time in pure water.' }, // Simple Onsen
    { efficacyName: 'ChlorideOnsen', description: 'Containing salt, this onsen provides excellent heat retention and moisturizing effects. Perfect for dry skin and cold weather, it warms the body from the core and keeps you warm for a long time.' }, // Chloride Onsen
    { efficacyName: 'SulfateOnsen', description: 'This onsen promotes blood circulation and is great for improving skin beauty. It activates the skin and promotes metabolism, making it effective for cold sensitivity and fatigue recovery, while also maintaining beautiful skin.' }, // Sulfate Onsen
    { efficacyName: 'BicarbonateOnsen', description: 'This onsen is known as the "beauty bath" because it helps remove excess oil from the skin, making it soft and moisturized. Ideal for dry or sensitive skin, it offers excellent skincare and beauty benefits.' }, // Bicarbonate Onsen
    { efficacyName: 'SulfurOnsen', description: 'Known for its distinct sulfur smell, this onsen has strong antibacterial properties. It helps treat skin problems and is also beneficial for conditions like rheumatism and muscle pain. It’s great for refreshing both the body and mind.' }, // Sulfur Onsen
    { efficacyName: 'RadioactiveOnsen', description: 'Containing trace amounts of radon, this onsen promotes metabolism and helps eliminate bodily waste. It strengthens the immune system and is highly recommended for health maintenance and rehabilitation purposes.' }, // Radioactive Onsen
    { efficacyName: 'IronOnsen', description: 'This onsen contains iron, which gives the water a reddish-brown color. It is excellent for improving blood circulation and is particularly effective for anemia and cold sensitivity. It’s perfect for those seeking both iron supplementation and relaxation.' }, // Iron Onsen
    { efficacyName: 'AcidicOnsen', description: 'This onsen has strong antibacterial properties and is effective for treating skin issues such as acne and eczema. However, it may be too harsh for sensitive skin, so caution is advised.' }, // Acidic Onsen
    { efficacyName: 'CarbonatedOnsen', description: 'Containing carbon dioxide, this onsen offers excellent blood circulation benefits. The bubbles envelop your body, improving blood flow and helping to relieve fatigue and muscle pain. It’s highly effective for relaxation and recovery.' }, // Carbonated Onsen
    { efficacyName: 'IodineOnsen', description: 'This onsen contains iodine, offering strong moisturizing effects. It is excellent for treating dry skin and skin conditions such as eczema and atopic dermatitis, leaving the skin soft and hydrated.' }, // Iodine Onsen
    { efficacyName: 'SodiumOnsen', description: 'This onsen has a pH value of 8.5 or higher, known for its excellent cleansing and beautifying effects. It removes dead skin cells, leaving the skin smooth and radiant. Ideal for those seeking skincare benefits and relaxation.' }, 
    { efficacyName: 'AlkalineSimpleOnsen', description: 'This onsen is rich in sodium ions, known for its strong moisturizing and heat-retaining properties. It helps alleviate joint pain, muscle fatigue, and improves blood circulation, making it ideal for those suffering from cold sensitivity or dry skin.' },
     
  
  ];



  // 温泉スポット選択時の遷移処理

  const handleOnsenScrollSelect = (onsenSpot) => {
    navigation.navigate('OnsenSpotDetail', { title }); // onsenSpotをパラメータとして渡して遷移
  };

  const handleOnsenSpotSelect = (onsenSpot) => {
    navigation.navigate('OnsenSpotDetail', { onsenSpot }); // onsenSpotをパラメータとして渡して遷移
  };

  const handleEfficacySelect = (efficacyName) => {
    navigation.navigate('OnsenEfficacyDetail', {efficacyName}); 
  };
  
  const onsenSpotScrollItem = ({ item }) => (
    <TouchableOpacity style={styles.bestOnsenSpotContainer} onPress={() => handleOnsenScrollSelect(item.title)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.prefectures}>{item.title}</Text>
  
    </TouchableOpacity>
  );

  const bestOnsenSpotItem = ({ item }) => (
    <TouchableOpacity style={styles.bestOnsenSpotContainer} onPress={() => handleOnsenSpotSelect(item.onsenSpot)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.prefectures}>{item.onsenSpot}</Text>
      <Text style={styles.prefectures}>{item.prefectures}</Text>
    </TouchableOpacity>
  );

  const efficacyItem = ({ item }) => (
    <TouchableOpacity style={styles.efficacyContainer} onPress={() => handleEfficacySelect(item.efficacyName)}>
      <Text style={styles.efficacyTitle}>{item.efficacyName}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Japan's Best Onsens Guide</Text>
      {/*変更したい*/}
      {/*<Image source={require('../../assets/温泉home.png')} style={styles.image} /> */}
      <View style={styles.bestOnsenSpot}>
        <FlatList
          data={onsenScroll}
          renderItem={onsenSpotScrollItem}
          keyExtractor={(item) => item.title}
          horizontal
          scrollEnabled
          contentContainerStyle={styles.listContainer}
        />
      </View>
      {/*変更したい*/}
      <Text style={styles.description}>Explore the most relaxing hot springs across Japan.</Text>

      <View style={styles.storyContainer}>
        <Text style={styles.heading}>Onsen</Text>
        <Text style={styles.text}>
          Japan is home to about 10% of the world's active volcanoes, with over 27,000 hot spring sources across all prefectures.

          Hot springs have been valued for their healing properties, and their natural benefits for relaxation and health are gaining attention. Discover the unique charms of different hot springs and rejuvenate your mind and body.
        </Text>
      </View>

      <View style={styles.selectContainer}>
        <Text style={styles.heading}>Learn About Japanese Onsens</Text>
        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('OnsenFun')}><Text style={styles.link}>FUN</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OnsenEfficacy')}><Text style={styles.link}>EFFICACY</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OnsenHistory')}><Text style={styles.link}>HISTORY</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OnsenRanking')}><Text style={styles.link}>RANKING</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OnsenManners')}><Text style={styles.link}>MANNERS</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.bestOnsenSpot}>
        <Text style={styles.title}>Best Onsen Spots</Text>
        <FlatList
          data={bestOnsenSpot}
          renderItem={bestOnsenSpotItem}
          keyExtractor={(item) => item.prefectures}
          horizontal
          scrollEnabled
          contentContainerStyle={styles.listContainer}
        />
      </View>


      <View style={styles.onsenEfficacy}>
        <Text style={styles.title}>Japanese Onsen Efficacy</Text>
        <FlatList
          data={efficacy}
          renderItem={efficacyItem}
          keyExtractor={(item) => item.description}
          scrollEnabled
        />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  image: { width: '100%', height: 200, resizeMode: 'cover', marginBottom: 10 },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  storyContainer: { padding: 10, backgroundColor: '#f9f9f9', borderRadius: 10, marginBottom: 20 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, lineHeight: 24 },
  selectContainer: { marginBottom: 20 },
  linksContainer: { flexDirection: 'row', justifyContent: 'space-around' },
  link: { fontSize: 16, color: 'blue', textDecorationLine: 'underline' },
  listContainer: { paddingVertical: 10 },
  bestOnsenSpotContainer: { marginRight: 10, alignItems: 'center' },
  prefectures: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  efficacyTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5, textAlign: 'center' },
  efficacyContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10
  },

});

export default OnsenHome;
