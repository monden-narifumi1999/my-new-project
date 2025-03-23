import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={styles.header}>
      {/* ロゴ部分 */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.logo}>Welcome Japan</Text>
      </TouchableOpacity>

      {/* メニューボタン（モバイル用） */}
      <TouchableOpacity onPress={() => setMenuOpen(true)} style={styles.menuButton}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>

      {/* モバイルメニュー（Modal） */}
      <Modal visible={menuOpen} transparent animationType="slide">
        <View style={styles.modalOverlay} />
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => setMenuOpen(false)} style={styles.closeButton}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setMenuOpen(false); navigation.navigate('TouristSpotsHome'); }}>
            <Text style={styles.menuItem}>Tourist Spot</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setMenuOpen(false); navigation.navigate('FoodHome'); }}>
            <Text style={styles.menuItem}>Drink & Food</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setMenuOpen(false); navigation.navigate('OnsenHome'); }}>
            <Text style={styles.menuItem}>Onsen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setMenuOpen(false); navigation.navigate('TravelPlanHome'); }}>
            <Text style={styles.menuItem}>Travel Plan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setMenuOpen(false); navigation.navigate('Contact'); }}>
            <Text style={styles.menuItem}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setMenuOpen(false); navigation.navigate('PrefectureHome'); }}>
            <Text style={styles.menuItem}>Prefecture</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setMenuOpen(false); navigation.navigate('scheduleHome'); }}>
            <Text style={styles.menuItem}>My Schedule</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  menuButton: {
    padding: 10,
  },
  menuText: {
    fontSize: 24,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    position: 'absolute',
    top: 60,
    right: 0,
    width: 200,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  closeText: {
    fontSize: 24,
    color: '#333',
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
