import React from 'react';
import {  View, Text, StyleSheet, SafeAreaView, FlatList, Image} from 'react-native';

export default function OnsenRanking() {
  const ranking = [
    {
      rank: 1,
      name: 'Kusatsu Onsen',
      location: 'Gunma Prefecture',
      description: 'Kusatsu Onsen is frequently ranked as the No.1 hot spring in Japan, especially in the Nippon Onsen 100 Selection.',
      highlights: [
        'Yubatake (Hot Water Field) - a picturesque area with steaming hot water flowing through wooden channels.',
        'Strongly acidic water known for its powerful antibacterial effects.',
        '100% natural, free-flowing hot spring water.',
      ],
      image: require('../../assets/草津温泉.jpg'),
    },
    {
      rank: 2,
      name: 'Kurokawa Onsen',
      location: 'Kumamoto Prefecture',
      description: 'A serene, nature-surrounded hot spring town, ideal for relaxation.',
      highlights: [
        'Old-fashioned, rustic atmosphere with traditional ryokan.',
        'Multiple open-air baths accessible via a special Nyūtō Tegata (Bath Pass).',
        'Scenic beauty and high-quality hot spring water.',
      ],
      image: require('../../assets/黒川温泉.jpg'),
    },
    {
      rank: 3,
      name: 'Ginzan Onsen',
      location: 'Yamagata Prefecture',
      description: 'Famous for its Taisho-era wooden buildings, creating a nostalgic and picturesque hot spring town.',
      highlights: [
        'Gas lamps illuminate the streets at night, creating a magical atmosphere.',
        'Sodium chloride and sulfate-rich hot spring water, known for its health benefits.',
        'Inspired the setting of the animated movie Spirited Away.',
      ],
      image: require('../../assets/銀山温泉.jpg'),
    },
    {
      rank: 4,
      name: 'Dogo Onsen',
      location: 'Ehime Prefecture',
      description: 'One of Japan’s oldest hot springs, with over 3,000 years of history.',
      highlights: [
        'Dogo Onsen Honkan, a beautifully preserved wooden bathhouse and Important Cultural Property.',
        'Mentioned in classic Japanese literature, including Botchan by Natsume Soseki.',
        'Alkaline thermal waters with gentle, skin-beautifying effects.',
      ],
      image: require('../../assets/道後温泉.jpg'),
    },
    {
      rank: 5,
      name: 'Beppu Onsen',
      location: 'Oita Prefecture',
      description: 'Japan’s top hot spring resort in terms of hot water volume and number of sources.',
      highlights: [
        'Wide variety of onsen types, including mud baths, sand baths, and steam baths.',
        'Jigoku Meguri (Hell Tour) showcasing unique boiling hot springs.',
        'Famous for onsen-steamed cuisine.',
      ],
      image: require('../../assets/別府温泉.jpg'),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.onsenContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.onsenName}>{item.name}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.highlightsTitle}>Highlights:</Text>
      {item.highlights.map((highlight, index) => (
        <Text key={index} style={styles.highlight}>
          - {highlight}
        </Text>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={ranking}
        renderItem={renderItem}
        keyExtractor={(item) => item.rank.toString()}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
  },
  onsenContainer: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  onsenName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  highlightsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  highlight: {
    fontSize: 14,
    marginLeft: 10,
  },
});