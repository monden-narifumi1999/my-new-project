import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

export default function OnsenManners() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Onsen Manners</Text>
        <Text style={styles.description}>
          Japanese onsens have strict etiquette rules to ensure a pleasant experience for everyone.
        </Text>
        <Text style={styles.ruleTitle}>🚿 Wash Before Entering</Text>
        <Text style={styles.ruleText}>
          Before soaking in the onsen, thoroughly wash your body at the provided shower stations.
        </Text>
        <Text style={styles.ruleTitle}>🩳 No Swimwear</Text>
        <Text style={styles.ruleText}>
          Bathing suits are not allowed in traditional onsens. Most are enjoyed in the nude.
        </Text>
        <Text style={styles.ruleTitle}>📵 Keep Quiet</Text>
        <Text style={styles.ruleText}>
          Speak quietly and avoid splashing to maintain a relaxing atmosphere.
        </Text>
        <Text style={styles.ruleTitle}>💦 Towel Rules</Text>
        <Text style={styles.ruleText}>
          Do not place your towel in the water. Instead, fold it and place it on your head or on the side.
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
  ruleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ruleText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 24,
  },
});
