import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

export default function OnsenHistory() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>温泉の歴史</Text>
        <Text style={styles.subtitle}>日本の湯治文化・温泉文化を知り温泉を楽しもう</Text>
        
        <Text style={styles.sectionTitle}>◆ 温泉の歴史</Text>
        <Text style={styles.description}>
          日本の温泉は「古事記」、「日本書紀」、「風土記」といった古史古伝にも記述が見られるくらい古い歴史を持っています。
          日本の温泉はいつから誕生し、どのような歴史を歩みながら温泉文化を形成してきたのでしょうか。
        </Text>
        
        <Text style={styles.sectionTitle}>◆ 「日本書紀」に記載された天皇の温泉行幸</Text>
        <Text style={styles.description}>
          「日本書紀」には舒明天皇、斉明天皇、天智天皇、天武天皇が温泉に行幸したことが書かれています。
          当時の天皇が温泉を利用した記録が数多く残っています。
        </Text>
        
        <Text style={styles.sectionTitle}>◆ 江戸時代、庶民にも広まる温泉</Text>
        <Text style={styles.description}>
          江戸時代になると、温泉は庶民にも広まり、湯治目的だけでなく、人々の交流の場としても利用されるようになりました。
        </Text>
        
        <Text style={styles.sectionTitle}>◆ 近代の温泉の発展</Text>
        <Text style={styles.description}>
          明治時代には日本で初めて全国規模の温泉調査が実施され、温泉医学の発展とともに、観光地としての温泉も成長しました。
        </Text>
        
        <Text style={styles.sectionTitle}>◆ 温泉に関する知識を深めて温泉を味わおう</Text>
        <Text style={styles.description}>
          日本の温泉地を巡ることで、より深い温泉文化を学び、癒しのひとときを楽しんでください。
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    marginBottom: 15,
  },
});
