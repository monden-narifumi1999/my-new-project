import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MaintenanceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>メンテナンス中</Text>
      <Text style={styles.message}>現在メンテナンスを行っています。しばらくお待ちください。</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default MaintenanceScreen;
