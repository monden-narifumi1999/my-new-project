import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView,Image,Linking, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import touristSpotsData from './TouristSpotsExplanations.json'; // JSONファイルをインポート

const TouristSpotsExplanation = () => {
  const route = useRoute();
  const { title = '', prefecture = '' } = route.params || {};
  const [spotDetail, setSpotDetail] = useState(null);
  const [error, setError] = useState(null);

  // 画像のマップ
const imageMap = {
  "厳島神社.jpg": require('../../assets/厳島神社.jpg'),
};

  useEffect(() => {
   console.log("画面遷移時のパラメータ:", { title, prefecture });
    try {
      // JSONデータから対象の観光スポットを検索
      const selectedSpot = touristSpotsData.find(
        (spot) => spot.title?.trim() === title?.trim() && spot.prefecture?.trim() === prefecture?.trim()
      );

      if (selectedSpot) {
        setSpotDetail(selectedSpot);
      } else {
        setError('データが見つかりません。');
      }
    } catch (err) {
      console.error('データの読み込みエラー:', err);
      setError('データの読み込み中にエラーが発生しました。');
    }
  }, [title, prefecture]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : spotDetail ? (
        <>
          <Text style={styles.title}>{spotDetail.title}</Text>
                   {/* 画像を表示（画像が存在する場合） */}
                   {spotDetail.image && imageMap[spotDetail.image] ? (
            <Image source={imageMap[spotDetail.image]} style={styles.image} />
          ) : (
            <Text style={styles.noImageText}>画像が見つかりません</Text>
          )}
          <Text style={styles.subtitle}>{spotDetail.prefecture} の観光スポット</Text>
          <Text style={styles.description}>{spotDetail.description}</Text>
                    {/* Googleマップのリンク表示 */}
                    {spotDetail.googleMap && (
            <TouchableOpacity onPress={() => Linking.openURL(spotDetail.googleMap)}>
              <Text style={styles.link}>Googleマップで開く</Text>
            </TouchableOpacity>
          )}

          {/* アクセス情報の表示 */}
          {spotDetail.access && (
            <Text style={styles.access}>アクセス: {spotDetail.access}</Text>
          )}
        </>
      ) : (
        <Text style={styles.loading}>読み込み中...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#555',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 24,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  noImageText: {
    fontSize: 16,
    color: '#777',
  },
  link: {
    fontSize: 16,
    color: 'blue',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  access: {
    fontSize: 16,
    color: '#444',
    marginTop: 10,
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  loading: {
    fontSize: 16,
    color: '#777',
  },
});

export default TouristSpotsExplanation;
