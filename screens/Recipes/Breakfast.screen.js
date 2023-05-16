import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';

const SportiveBreakfast = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDWk2EEgQu1WPIH52ox0donm0eOAdHGImE",
        authDomain: "fitlioo-359b4.firebaseapp.com",
        projectId: "fitlioo-359b4",
        storageBucket: "fitlioo-359b4.appspot.com",
        messagingSenderId: "1007142969875",
        appId: "1:1007142969875:web:ddf09736522031d17755e6",
        measurementId: "G-7HF9PB7SJT"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.firestore();
    const myCollection = db.collection('FitliooMyFits');

    const handleLikeButtonPress = async (recipeTitle, ingredients, steps) => {
        try {
            const user = firebase.auth().currentUser;
            if (user) {
                const useruid = user.uid;
                await db.collection('FitliooMyFits').doc().set({
                    useruid: useruid,
                    recipeTitle: recipeTitle,
                    ingredients: ingredients,
                    steps: steps,
                });
                Alert.alert('FITLIOO', 'Tarifi fitlediniz, Fitlediklerim sayfasından ulaşabilirsiniz. ❤ ');
            } else {
                Alert.alert('FITLIOO', 'Kullanıcı oturumu açık değil.');
            }
        } catch (error) {
            Alert.alert('FITLIOO', 'Tarif fitlerken hata: ' + error.message);
        }
    };


    return (
        <ScrollView>
            <View style={styles.container}>
                <Ionicons name="sunny" size={64} color="#FDB813" textAlign="center" />
                <Text style={styles.title}>FİT KAHVALTILAR İLE GÜNE MERHABA!</Text>

                <View style={styles.recipeCard}>
                    <View style={styles.recipeCardHeader}>
                        <Image source={require('../assets/yogurtluyulaf.jpg')} style={styles.recipeImage} />
                        <Text style={styles.recipeTitle}>Yoğurtlu Yulaf Ezmesi</Text>
                    </View>
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Malzemeler</Text>
                        <Text style={styles.recipeCardBodyText}>
                            3 yemek kaşığı yulaf ezmesi{"\n"}
                            3 yemek kaşığı yoğurt{"\n"}
                            7-8 adet badem ya da 2-3 adet bütün ceviz ya da 1 tatlı kaşığı fıstık ezmesi{"\n"}
                            1 adet küçük boy muz{"\n"}
                            1 yemek kaşığı chia tohumu{"\n"}
                            Tarçın ya da kakao{"\n\n"}
                        </Text>
                        <Text style={styles.recipeCardSubtitle}>Hazırlanışı</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Yoğurt ve yulafı ezmesini servis edeceğiniz kaseye alın.
                            Bademleri, chia tohumunu ve muzu ilave edin.
                            Son olarak tarçını ya da kakaoyu ekleyin ve servis yapın.
                            *Bu lezzetli kahvaltı alternatifi sadece 223 kalori.
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() =>
                                handleLikeButtonPress(
                                    'Yoğurtlu Yulaf Ezmesi',
                                    '3 yemek kaşığı yulaf ezmesi, 3 yemek kaşığı yoğurt, 7-8 adet badem ya da 2-3 adet bütün ceviz ya da 1 tatlı kaşığı fıstık ezmesi, 1 adet küçük boy muz, 1 yemek kaşığı chia tohumu, Tarçın ya da kakao',
                                    'Yoğurt ve yulafı ezmesini servis edeceğiniz kaseye alın. Bademleri, chia tohumunu ve muzu ilave edin. Son olarak tarçını ya da kakaoyu ekleyin ve servis yapın. *Bu lezzetli kahvaltı alternatifi sadece 223 kalori.'
                                )
                            }
                        >
                            <FontAwesome5 name="heart" size={20} color="#fff" />
                            <Text style={styles.buttonText}>Fitledim</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, styles.saveButton]}>
                            <Entypo name="save" size={20} color="#fff" />
                            <Text style={styles.buttonText}>Kaydet</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.recipeCard}>
                    <View style={styles.recipeCardHeader}>
                        <Image source={require('../assets/ispanakliomlet.jpg')} style={styles.recipeImage} />
                        <Text style={styles.recipeTitle}>Ispanaklı Omlet</Text>
                    </View>
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Malzemeler</Text>
                        <Text style={styles.recipeCardBodyText}>
                            1 adet yumurta{"\n"}
                            1 küçük kase ıspanak (kendi suyunda sotelenmiş){"\n"}
                            2 yemek kaşığı lor{"\n"}
                            1 adet domates{"\n"}
                            Pulbiber, karabiber, çok az tuz{"\n"}
                            1 tatlı kaşığı zeytinyağı (Kalıbı yağlamak için){"\n"}
                        </Text>
                        <Text style={styles.recipeCardSubtitle}>Hazırlanışı</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Isıya dayanıklı cam ya da porselen kaseyi yağlayın. Tüm malzemeyi başka bir kasede karıştırın ve yağladığınız kalıba yerleştirin. 180 derece ısıtılmış fırında pişirin. Bol yeşillik ile servis edin.{"\n"}
                            *Bu lezzetli kahvaltı alternatifi sadece 140 kalori.
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() =>
                                handleLikeButtonPress(
                                    'Ispanaklı Omlet',
                                    '1 adet yumurta, 1 küçük kase ıspanak (kendi suyunda sotelenmiş),2 yemek kaşığı lor,1 adet domates,Pulbiber, karabiber, çok az tuz,1 tatlı kaşığı zeytinyağı (Kalıbı yağlamak için)',
                                    'Isıya dayanıklı cam ya da porselen kaseyi yağlayın. Tüm malzemeyi başka bir kasede karıştırın ve yağladığınız kalıba yerleştirin. 180 derece ısıtılmış fırında pişirin. Bol yeşillik ile servis edin.'
                                )
                            }
                        >
                            <FontAwesome5 name="heart" size={20} color="#fff" />
                            <Text style={styles.buttonText}>Fitledim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.saveButton]}>
                            <Entypo name="save" size={20} color="#fff" />
                            <Text style={styles.buttonText}>Kaydet</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: 'center',
    },
    recipeTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    recipeCard: {
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 20,
        marginBottom: 10,
    },
    recipeCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    recipeImage: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 50,
    },
    recipeCardBody: {
        paddingHorizontal: 10,
        paddingBottom: 15,
    },
    recipeCardSubtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
    recipeCardBodyText: {
        fontSize: 16,
        lineHeight: 24,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginLeft: 'auto',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        marginLeft: 10,
        marginBottom: 10,
    },
    likeButton: {
        backgroundColor: '#FFB6C1',
    },
    saveButton: {
        backgroundColor: '#ADD8E6',
    },
    buttonText: {
        color: '#fff',
        marginLeft: 5,
        fontSize: 16,
    },
});

export default SportiveBreakfast;
