import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

// 画像のマップ
const imageMap = {
    "厳島神社.jpg": require('../../assets/厳島神社.jpg'),
};

// おすすめエリア
const Area = [
    { prefecture:'Hiroshima',city: 'Hiroshima' },
    { prefecture:'Hiroshima',city: 'Fukuyama' },
    { prefecture:'Hiroshima',city: 'Onomichi' }
];

// おすすめ観光地
const Spot = [
    { title: '原爆ドーム',prefecture:'Hiroshima' }
];

// おすすめ食べ物
const Food = [
    { foodName: 'ラーメン',prefecture:'Hiroshima' }
];

const HiroshimaPrefecture = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { prefecture } = route.params || { prefecture: 'Hiroshima' };

    // おすすめエリアリストを表示する
    const renderArea = () => (
        Area.map((item, index) => (
            <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => navigation.navigate('AreaDetail', { prefecture:item.prefecture, city: item.city })}>
                    <Image style={styles.titleImage} source={imageMap[`${item.city}.jpg`]} />
                <Text style={styles.buttonText}>{item.city}</Text>
            </TouchableOpacity>
        ))
    );

    // おすすめ観光地リストを表示する
    const renderSpot = () => (
        Spot.map((item, index) => (
            <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => {
                    
                    navigation.navigate('TouristSpotsExplanation', {
                        title: item.title,
                        prefecture: prefecture // Passing the prefecture data
                    });
                }}>
                    <Image style={styles.titleImage} source={imageMap[`${item.title}.jpg`]} />
                <Text style={styles.buttonText}>{item.title}</Text>
            </TouchableOpacity>
        ))
    );

    // おすすめグルメリストを表示する
    const renderFood = () => (
        Food.map((item, index) => (
            <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => navigation.navigate('DetailScreen', { type: 'Food', name: item.foodName })}>
               v<Image style={styles.titleImage} source={imageMap[`${item.foodName}.jpg`]} />
                <Text style={styles.buttonText}>{item.foodName}</Text>
            </TouchableOpacity>
        ))
    );

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>{prefecture}</Text>
                <Image style={styles.titleImage} source={imageMap["厳島神社.jpg"]} />
                <Text style={styles.description}>広島県の観光情報や歴史などを紹介します。</Text>
                <Text style={styles.link} onPress={() => Linking.openURL('https://maps.app.goo.gl/ABeT3DbdTBRc7K5P8?g_st=com.google.maps.preview.copy')}>
                    GoogleMapを開く
                </Text>

                <Text style={styles.subTitle}>広島県おすすめエリア</Text>
                {renderArea()}

                <Text style={styles.subTitle}>広島県おすすめ観光地</Text>
                {renderSpot()}

                {/*<Text style={styles.subTitle}>広島県おすすめグルメ</Text>
                {renderFood()}*/}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    titleImage: {
        width: 300,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
    },
    link: {
        fontSize: 16,
        color: 'blue',
        marginTop: 10,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default HiroshimaPrefecture;
