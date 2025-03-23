import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScheduleHome = () => {
  const navigation = useNavigation();

  const handleCreateSchedule = () => {
    navigation.navigate('MakeSchedule');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>スケジュールページ</Text>
      <Text style={styles.description}>
        ここではスケジュールの管理ができます。
      </Text>
      <Button title="作成する" onPress={handleCreateSchedule} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
});

export default ScheduleHome;
