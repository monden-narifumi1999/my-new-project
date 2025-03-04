import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const OnsenEfficacyDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { efficacyName } = route.params;

  const imageMap = {
    "厳島神社.jpg": require('../../assets/厳島神社.jpg'),
    "sample.jpg": require('../../assets/sample.jpg'),
    "銀山温泉.jpg": require('../../assets/銀山温泉.jpg'),
    "黒川温泉.jpg": require('../../assets/黒川温泉.jpg'),
    "草津温泉.jpg": require('../../assets/草津温泉.jpg'),
    "道後温泉.jpg": require('../../assets/道後温泉.jpg'),
    "別府温泉.jpg": require('../../assets/別府温泉.jpg')
  };

  const efficacy = [
    {
      efficacyName: 'SimpleOnsen', description: 'Simple hot springs are suitable for a wide range of people because they contain few minerals and are gentle on the skin. They have a strong relaxing effect and are said to be effective in recovering from fatigue, relieving stress, and improving insomnia. They are also effective in promoting blood circulation, easing neuralgia and muscle pain, and improving poor circulation. As they are less irritating, they are suitable for the elderly, children, and people with sensitive skin. They are also ideal for people who want to enjoy a long, relaxing bath, as they are less likely to cause hot spring fatigue.'
      , influence: 'influenceSimple hot springs are suitable for a wide range of people because they contain few minerals and are gentle on the skin. They have a strong relaxing effect and are said to be effective in recovering from fatigue, relieving stress, and improving insomnia. They are also effective in promoting blood circulation, easing neuralgia and muscle pain, and improving poor circulation. As they are less irritating, they are suitable for the elderly, children, and people with sensitive skin. They are also ideal for people who want to enjoy a long, relaxing bath, as they are less likely to cause hot spring fatigue.'
      , spotNames: ['AtamiOnsen', 'HakoneOnsen']
    }, { efficacyName: 'ChlorideOnsen', description: 'Containing salt, this onsen provides excellent heat retention and moisturizing effects. Perfect for dry skin and cold weather, it warms the body from the core and keeps you warm for a long time.' },
    { efficacyName: 'SulfateOnsen', description: 'This onsen promotes blood circulation and is great for improving skin beauty. It activates the skin and promotes metabolism, making it effective for cold sensitivity and fatigue recovery, while also maintaining beautiful skin.' },
    { efficacyName: 'BicarbonateOnsen', description: 'This onsen is known as the "beauty bath" because it helps remove excess oil from the skin, making it soft and moisturized. Ideal for dry or sensitive skin, it offers excellent skincare and beauty benefits.' },
    { efficacyName: 'SulfurOnsen', description: 'Known for its distinct sulfur smell, this onsen has strong antibacterial properties. It helps treat skin problems and is also beneficial for conditions like rheumatism and muscle pain. It’s great for refreshing both the body and mind.' },
    { efficacyName: 'RadioactiveOnsen', description: 'Containing trace amounts of radon, this onsen promotes metabolism and helps eliminate bodily waste. It strengthens the immune system and is highly recommended for health maintenance and rehabilitation purposes.' },
    { efficacyName: 'IronOnsen', description: 'This onsen contains iron, which gives the water a reddish-brown color. It is excellent for improving blood circulation and is particularly effective for anemia and cold sensitivity. It’s perfect for those seeking both iron supplementation and relaxation.' },
    { efficacyName: 'AcidicOnsen', description: 'This onsen has strong antibacterial properties and is effective for treating skin issues such as acne and eczema. However, it may be too harsh for sensitive skin, so caution is advised.' },
    { efficacyName: 'CarbonatedOnsen', description: 'Containing carbon dioxide, this onsen offers excellent blood circulation benefits. The bubbles envelop your body, improving blood flow and helping to relieve fatigue and muscle pain. It’s highly effective for relaxation and recovery.' },
    { efficacyName: 'IodineOnsen', description: 'This onsen contains iodine, offering strong moisturizing effects. It is excellent for treating dry skin and skin conditions such as eczema and atopic dermatitis, leaving the skin soft and hydrated.' },
  ];

  const onsenSpotDetail = [
    {
      onsenSpot: 'AtamiOnsen', prefectures: 'Shizuoka', description: 'Atami Onsen is a famous hot spring resort in Shizuoka Prefecture, known for its ocean views and relaxing atmosphere.',
      image: '道後温泉.jpg'
    },
    { onsenSpot: 'HakoneOnsen', prefectures: 'Kanagawa', description: 'Hakone Onsen is a well-known hot spring area near Tokyo, offering stunning views of Mt. Fuji and a variety of hot spring inns.' },
    { onsenSpot: 'KusatsuOnsen', prefectures: 'Gunma', description: 'Kusatsu Onsen is one of Japan’s top three hot springs, famous for its strong acidic waters and the Yubatake hot water field.' },
    { onsenSpot: 'GeroOnsen', prefectures: 'Gifu', description: 'Gero Onsen is considered one of Japan’s top three onsen, known for its smooth and skin-beautifying waters.' },
    { onsenSpot: 'BeppuOnsen', prefectures: 'Oita', description: 'Beppu Onsen is famous for its variety of hot spring baths and unique “Hell” hot spring attractions.' },
    { onsenSpot: 'YufuinOnsen', prefectures: 'Oita', description: 'Yufuin Onsen is a charming rural hot spring town with scenic views of Mt. Yufu and many boutique inns.' },
    { onsenSpot: 'ArimaOnsen', prefectures: 'Hyogo', description: 'Arima Onsen is one of Japan’s oldest hot spring resorts, known for its golden and silver mineral-rich waters.' },
    { onsenSpot: 'KinosakiOnsen', prefectures: 'Hyogo', description: 'Kinosaki Onsen is a traditional hot spring town with seven public bathhouses, perfect for an onsen-hopping experience.' },
    { onsenSpot: 'DogoOnsen', prefectures: 'Ehime', description: 'Dogo Onsen is one of Japan’s oldest hot springs, featuring a historic bathhouse that inspired Studio Ghibli’s Spirited Away.' },
    { onsenSpot: 'NoboribetsuOnsen', prefectures: 'Hokkaido', description: 'Noboribetsu Onsen is known for its geothermal activity, including sulfurous “Hell Valley” and diverse mineral-rich waters.' },
    { onsenSpot: 'ShirahamaOnsen', prefectures: 'Wakayama', description: 'Shirahama Onsen is a coastal hot spring resort famous for its white sand beach and ocean-view baths.' },
    { onsenSpot: 'IbusukiOnsen', prefectures: 'Kagoshima', description: 'Ibusuki Onsen is unique for its sand baths, where guests are buried in naturally heated volcanic sand for relaxation.' },
    { onsenSpot: 'TamatsukuriOnsen', prefectures: 'Shimane', description: 'Tamatsukuri Onsen is known as the “beauty onsen,” with waters that enhance skin health and softness.' },
    { onsenSpot: 'YunomineOnsen', prefectures: 'Wakayama', description: 'Yunomine Onsen is a historic hot spring tied to the Kumano pilgrimage, where visitors can enjoy a bath at Tsuboyu.' },
    { onsenSpot: 'GinzanOnsen', prefectures: 'Yamagata', description: 'Ginzan Onsen is a charming old-fashioned onsen town with nostalgic wooden ryokan and a snowy winter atmosphere.' },
    { onsenSpot: 'UnzenOnsen', prefectures: 'Nagasaki', description: 'Unzen Onsen is famous for its geothermal fields, sulfuric steam vents, and ties to Japan’s Christian history.' },
    { onsenSpot: 'ToyakoOnsen', prefectures: 'Hokkaido', description: 'Toyako Onsen offers hot spring baths with scenic views of Lake Toya and Mount Usu’s volcanic landscapes.' },
    { onsenSpot: 'MyobanOnsen', prefectures: 'Oita', description: 'Myoban Onsen is part of Beppu’s hot spring region, known for its milky white sulfur baths and unique mineral deposits.' },
    { onsenSpot: 'FujigokoOnsen', prefectures: 'Yamanashi', description: 'Fujigoko Onsen is a group of hot springs around Mount Fuji’s five lakes, offering spectacular views of Japan’s iconic peak.' }
  ];

  // efficacyName に一致する温泉の詳細を取得
  const selectedEfficacy = efficacy.find((item) => item.efficacyName === efficacyName);

  // efficacy の spotNames に一致する onsenSpotDetail をすべて取得
  const relatedOnsenList = selectedEfficacy?.spotNames
    ? onsenSpotDetail.filter((spot) => selectedEfficacy.spotNames.includes(spot.onsenSpot))
    : [];

      // 温泉スポット選択時の遷移処理
  const handleOnsenSpotSelect = (onsenSpot) => {
    navigation.navigate('OnsenSpotDetail', { onsenSpot }); // onsenSpotをパラメータとして渡して遷移
  };

  return (
       <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {selectedEfficacy ? (
          <>
            <Image source={require('../../assets/温泉home.png')} style={styles.image} />
            <Text style={styles.title}>{selectedEfficacy.efficacyName}について紹介をする</Text>
            <Text style={styles.title}>{selectedEfficacy.efficacyName}</Text>
            <Text style={styles.description}>{selectedEfficacy.description}</Text>
            {selectedEfficacy.influence && <Text style={styles.influence}>{selectedEfficacy.influence}</Text>}

            {relatedOnsenList.length > 0 ? (
              <>
                <Text style={styles.title}>{selectedEfficacy.efficacyName}の泉質を持つ温泉地を紹介</Text>
                {relatedOnsenList.map((onsen) => (
                  <TouchableOpacity key={onsen.onsenSpot} onPress={() => handleOnsenSpotSelect(onsen.onsenSpot)}>
                    <View style={styles.onsenContainer}>
                      <Text style={styles.subtitle}>温泉地名: {onsen.onsenSpot}</Text>
                      <Text style={styles.subtitle}>都道府県: {onsen.prefectures}</Text>
                      <Text style={styles.description}>{onsen.description}</Text>
                      {onsen.image && imageMap[onsen.image] ? (
                        <Image source={imageMap[onsen.image]} style={styles.onsenImage} />
                      ) : (
                        <Text style={styles.noticeText}>画像がありません</Text>
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </>
            ) : (
              <Text style={styles.noticeText}>この泉質に関連する温泉地は登録されていません。</Text>
            )}
          </>
        ) : (
          <Text style={styles.errorText}>メンテナンス中です</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    backgroundColor: '#FAF3E0', // 温泉の雰囲気を感じさせる暖かい色
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#5A3E36', // 落ち着いた茶系の色
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#7A4E43',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 24, // 読みやすさ向上
  },
  influence: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
    marginBottom: 12,
  },
  noticeText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 12,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  onsenContainer: {
    width: '90%',
    padding: 15,
    backgroundColor: '#F9E5D8',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  onsenImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 15,
  },
});


export default OnsenEfficacyDetail;