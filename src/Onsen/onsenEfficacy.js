import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const efficacyList = [
  { id: '1', name: 'SimpleOnsen', description: 'Minimal mineral content, clear, colorless water. Suitable for everyone.', places: 'Hakone Yumoto Onsen (Kanagawa), Kusatsu Onsen (Gunma)' },
  { id: '2', name: 'ChlorideOnsen', description: 'Rich in salt, these hot springs are known for their warming properties.', places: 'Atami Onsen (Shizuoka), Arima Onsen (Hyogo)' },
  { id: '3', name: 'CarbonateOnsen', description: 'Famous for their beautifying effects, often called "beauty baths."', places: 'Yufuin Onsen (Oita), Shirahama Onsen (Wakayama)' },
  { id: '4', name: 'SulfateOnsen', description: 'Believed to be effective for skin diseases and gynecological conditions.', places: 'Beppu Onsen (Oita), Yugawara Onsen (Kanagawa)' },
];

const OnsenEfficacy = ({ navigation }) => {
  const handleEfficacySelect = (efficacyName) => {
    navigation.navigate('OnsenEfficacyDetail', { efficacyName });
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Benefits of Hot Springs</Text>
      <Text style={styles.paragraph}>
        Japanese hot springs offer numerous benefits, and the effects on the body and mind vary depending on the spring’s composition.
      </Text>

      <Text style={styles.subHeader}>10 Types of Hot Springs</Text>

      {efficacyList.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => handleEfficacySelect(item.name)} style={styles.listItem}>
          <Text style={styles.listHeader}>{item.name}</Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Characteristics:</Text> {item.description}</Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Representative Hot Springs:</Text> {item.places}</Text>
        </TouchableOpacity>
      ))}

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backButtonText}>戻る</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // スクロールできるようにする
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  listItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  listHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default OnsenEfficacy;
