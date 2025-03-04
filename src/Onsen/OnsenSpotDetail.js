import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import onsenData from './OnsenSpotDetail.json'; // JSONファイルのインポート

// ローカル画像のマッピング
const imageMap = {
  "厳島神社.jpg": require('../../assets/厳島神社.jpg'),
  "sample.jpg": require('../../assets/sample.jpg'),
  "銀山温泉.jpg": require('../../assets/銀山温泉.jpg'),
  "黒川温泉.jpg": require('../../assets/黒川温泉.jpg'),
  "草津温泉.jpg": require('../../assets/草津温泉.jpg'),
  "道後温泉.jpg": require('../../assets/道後温泉.jpg'),
  "別府温泉.jpg": require('../../assets/別府温泉.jpg')
};

const efficacydata = [
  { efficacyName: 'SimpleOnsen', description: 'Simple hot springs are suitable for a wide range of people because they contain few minerals and are gentle on the skin...' },
  { efficacyName: 'ChlorideOnsen', description: 'Containing salt, this onsen provides excellent heat retention and moisturizing effects...' },
  { efficacyName: 'SulfateOnsen', description: 'This onsen promotes blood circulation and is great for improving skin beauty...' },
  { efficacyName: 'BicarbonateOnsen', description: 'This onsen is known as the "beauty bath" because it helps remove excess oil from the skin...' },
  { efficacyName: 'SulfurOnsen', description: 'Known for its distinct sulfur smell, this onsen has strong antibacterial properties...' },
  { efficacyName: 'RadioactiveOnsen', description: 'Containing trace amounts of radon, this onsen promotes metabolism and helps eliminate bodily waste...' },
  { efficacyName: 'IronOnsen', description: 'This onsen contains iron, which gives the water a reddish-brown color...' },
  { efficacyName: 'AcidicOnsen', description: 'This onsen has strong antibacterial properties and is effective for treating skin issues...' },
  { efficacyName: 'CarbonatedOnsen', description: 'Containing carbon dioxide, this onsen offers excellent blood circulation benefits...' },
  { efficacyName: 'IodineOnsen', description: 'This onsen contains iodine, offering strong moisturizing effects...' }
];

const OnsenSpotDetail = () => {
  const route = useRoute();
  const navigation = useNavigation(); // 修正: useNavigationを追加
  const { onsenSpot } = route.params;
  const [onsen, setOnsen] = useState(null);

  useEffect(() => {
    const foundOnsen = onsenData[onsenSpot];
    if (foundOnsen) {
      setOnsen({
        ...foundOnsen,
        imagePath: foundOnsen.image
          ? foundOnsen.image.startsWith('http')
            ? { uri: foundOnsen.image }
            : imageMap[foundOnsen.image] || imageMap["sample.jpg"]
          : imageMap["sample.jpg"],
      });
    } else {
      setOnsen({
        onsenSpot: '温泉情報なし',
        description: '選択した温泉の詳細情報が見つかりません。',
        history: '',
        surroundingArea: '',
        efficacy: [],
        access: '',
        googleMap: '',
        imagePath: imageMap["sample.jpg"],
      });
    }
  }, [onsenSpot]);

  if (!onsen) {
    return <Text style={styles.loadingText}>読み込み中...</Text>;
  }

  // 修正: 効能をタップしたときに詳細ページへ遷移
  const handleEfficacySelect = (efficacyName) => {
    navigation.navigate('OnsenEfficacyDetail', { efficacyName });
  };

  const matchedEfficacies = efficacydata.filter(e => onsen.efficacy.includes(e.efficacyName));

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>{onsen.onsenSpot}</Text>
      <Image source={onsen.imagePath} style={styles.image} />
      <Text style={styles.description}>{onsen.description}</Text>
      <Text style={styles.detail}>{onsen.history}</Text>
      <Text style={styles.subTitle}>周辺地域</Text>
      <Text style={styles.detail}>{onsen.surroundingArea}</Text>
      
      <Text style={styles.subTitle}>効能</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.efficacyContainer}>
        {matchedEfficacies.map((efficacy, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => handleEfficacySelect(efficacy.efficacyName)} 
            style={styles.efficacyBox}
          >
            <View>
              <Text style={styles.efficacyName}>{efficacy.efficacyName}</Text>
              <Text style={styles.efficacyDescription}>{efficacy.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.subTitle}>アクセス</Text>
      <Text style={styles.detail}>{onsen.access}</Text>
      {onsen.googleMap && (
        <>
          <Text style={styles.subTitle}>Google Map</Text>
          <Text style={styles.link} onPress={() => Linking.openURL(onsen.googleMap)}>地図リンク</Text>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  detail: {
    fontSize: 16,
    textAlign: 'left',
    marginVertical: 5,
  },
  efficacyContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  efficacyBox: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    width: 250,
  },
  efficacyName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  efficacyDescription: {
    fontSize: 14,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default OnsenSpotDetail;
