import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const imageMap = {
  "厳島神社.jpg": require('../../assets/厳島神社.jpg'),
};



const prefectures = [
  { id: '1', prefecture: 'Tokyo' },
  { id: '2', prefecture: 'Kanagawa' },
  { id: '3', prefecture: 'Okayama' },
  { id: '4', prefecture: 'Hiroshima' }
];

const PrefectureHome = () => {
  const navigation = useNavigation();

  const handlePress = (prefecture) => {
    navigation.navigate(`${prefecture}Prefecture`, { prefecture });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>都道府県一覧</Text>
      <FlatList
        data={prefectures}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePress(item.prefecture)}>
            <Text style={styles.itemText}>{item.prefecture}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
  },
});

export default PrefectureHome;
