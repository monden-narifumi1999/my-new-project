import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import HomeScreen from './src/HomeScreen';
import HomeTopic from './src/HomeTopic';
import HomeScroll from './src/HomeScroll';
import Mentenance from './src/メンテナンス';
import Header from './components/Header';
import Footer from './components/Footer';
import TouristSpotsHome from './src/TouristSpot/TouristSpotsHome';
import TouristSpotsDetail from './src/TouristSpot/TouristSpotsDetail';
import TouristSpotsExplanation from './src/TouristSpot/TouristSpotsExplanation';
import TouristSpotTopics from './src/TouristSpot/TouristSpotTopics';
import FoodHome from './src/DrinkFood/FoodHome';
import OnsenHome from './src/Onsen/onsenHome';
import OnsenFun from './src/Onsen/Fun';
import OnsenEfficacy from './src/Onsen/onsenEfficacy';
import OnsenEfficacyDetail from './src/Onsen/OnsenEfficacyDetail';
import OnsenHistory from './src/Onsen/onsenHistory';
import OnsenManners from './src/Onsen/onsenManners';
import OnsenRanking from './src/Onsen/onsenRanking';
import FoodDetail from './src/DrinkFood/FoodDetail';
import OnsenSpotDetail from './src/Onsen/OnsenSpotDetail';
import PrefectureHome from './src/Prefecture/PrefectureHome';
import HiroshimaPrefecture from './src/Prefecture/HiroshimaPrefecture';
import AreaDetail from './src/another/AreaDetail';
import scheduleHome from './src/Schedule/scheduleHome';





const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.mainContent}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }} // ヘッダーを非表示
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="HomeTopic" component={HomeTopic} />
            <Stack.Screen name="HomeScroll" component={HomeScroll} />
            <Stack.Screen name="TouristSpotsHome" component={TouristSpotsHome} />
            <Stack.Screen name="TouristSpotsDetail" component={TouristSpotsDetail} />
            <Stack.Screen name="TouristSpotsExplanation" component={TouristSpotsExplanation} />
            <Stack.Screen name="TouristSpotTopics" component={TouristSpotTopics} />
            <Stack.Screen name="FoodHome" component={FoodHome} />
            <Stack.Screen name="FoodDetail" component={FoodDetail} />
            <Stack.Screen name="OnsenHome" component={OnsenHome} />
            <Stack.Screen name="OnsenSpotDetail" component={OnsenSpotDetail} />
            <Stack.Screen name="TravelPlanHome" component={Mentenance} />
            <Stack.Screen name="Contact" component={Mentenance} />
            <Stack.Screen name="PrefectureHome" component={PrefectureHome} />
            <Stack.Screen name="HiroshimaPrefecture" component={HiroshimaPrefecture} />
            <Stack.Screen name="OnsenFun" component={OnsenFun} />
            <Stack.Screen name="OnsenEfficacy" component={OnsenEfficacy} />
            <Stack.Screen name="OnsenEfficacyDetail" component={OnsenEfficacyDetail} />
            <Stack.Screen name="OnsenHistory" component={OnsenHistory} />
            <Stack.Screen name="OnsenManners" component={OnsenManners} />
            <Stack.Screen name="OnsenRanking" component={OnsenRanking} />
            <Stack.Screen name="AreaDetail" component={AreaDetail} />
            <Stack.Screen name="scheduleHome" component={scheduleHome} />
          </Stack.Navigator>
        </View>
          <Footer />
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
});
