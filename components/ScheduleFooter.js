import { View, Text, StyleSheet } from 'react-native';

export default function ScheduleFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>good</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});
