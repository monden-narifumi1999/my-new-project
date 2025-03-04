import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function OnsenFun() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>How to Enjoy Onsens</Text>
      <Text style={styles.description}>温泉の楽しみ方についての情報をここに記載します。</Text>
      
      <Text style={styles.subtitle}>6 Tips for Enjoying an Onsen</Text>
      <Text style={styles.description}>
        Soaking in an onsen helps relax both the body and mind, bringing a sense of happiness. 
        And of course, a refreshing drink after bathing is essential!
      </Text>
      <Text style={styles.description}>Here are some tips to make the most of your onsen experience.</Text>

      {tips.map((tip, index) => (
        <View key={index} style={styles.tipContainer}>
          <Text style={styles.tipTitle}>{tip.title}</Text>
          <Text style={styles.description}>{tip.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const tips = [
  { title: 'Tip 1: Bathe Before Eating', content: 'It’s best to take a bath before having a meal. Bathing right after eating can slow blood circulation and put a strain on digestion. If you need to bathe after eating, wait at least 1 hour and 30 minutes before doing so.' },
  { title: 'Tip 2: Adjust Your Body to the Water in a Cooler Area', content: 'Before entering the hot water, gradually adjust your body temperature in a cooler area. Some onsens draw water directly from the source, which can be extremely hot. To avoid sudden heat exposure, start by entering from a spot farther from the hot water outlet.' },
  { title: 'Tip 3: Place a Wet Towel on Your Head', content: 'Placing a wet towel on your head helps prevent dizziness and overheating. Use a cold towel in hot weather and a warm towel in cold weather.' },
  { title: 'Tip 4: Alternate Between the Onsen and Cold Water', content: 'Alternating between hot and cold water enhances the benefits of the onsen. It improves blood circulation and helps flush out fatigue-related substances. However, those with health conditions should take it at their own pace.' },
  { title: 'Tip 5: Moisturize Immediately After Bathing', content: 'After a bath, your body is warm, making it easier for skincare products to be absorbed. Applying lotion and moisturizer while the onsen minerals are still on your skin will maximize their effects.' },
  { title: 'Tip 6: Stay Hydrated', content: 'Bathing causes you to sweat around 300–500 mL, which can lead to dehydration. Drinking water before and after your bath is essential. And of course, a cold drink after a bath is one of life’s greatest pleasures!' }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'left',
  },
  tipContainer: {
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
