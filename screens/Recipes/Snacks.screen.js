import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';

const SnacksScreen = () => {
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
                <FontAwesome5 name="cookie-bite" size={64} color="#572f03" textAlign="center" />
                <Text style={styles.title}>LEZZETLİ ATIŞTIRMALIKLARLA KENDİNİZİ ŞIMARTIN!</Text>

                <View style={styles.recipeCard}>
                    <View style={styles.recipeCardHeader}>
                        <Image source={require('../assets/nohutcipsi.jpg')} style={styles.recipeImage} />
                        <Text style={styles.recipeTitle}>Baharatlı Nohut Cipsi </Text>
                    </View>
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Malzemeler</Text>
                        <Text style={styles.recipeCardBodyText}>
                            2 su bardağı haşlanmış nohut{"\n"}
                            1 yemek kaşığı zeytinyağı{"\n"}
                            Yarım yemek kaşığı galeta unu{"\n"}
                            Baharat{"\n"}
                            Yarım çay kaşığı tuz{"\n"}
                        </Text>
                        <Text style={styles.recipeCardSubtitle}>Hazırlanışı</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Tüm malzemeleri karıştırın ve fırın kağıdına yayın.
                            180 derecede 15-20 dakika kızartın.
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() =>
                                handleLikeButtonPress(
                                    'Baharatlı Nohut Cipsi',
                                    'Malzemeler:2 su bardağı haşlanmış nohut, 1 yemek kaşığı zeytinyağı, Yarım yemek kaşığı galeta unu, Baharat, Yarım çay kaşığı tuz',
                                    'Yapılışı:  Tüm malzemeleri karıştırın ve fırın kağıdına yayın. 180 derecede 15-20 dakika kızartın.'
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
                        <Image source={require('../assets/soslusalatalik.jpg')} style={styles.recipeImage} />
                        <Text style={styles.recipeTitle}>Soslu Salatalık</Text>
                    </View>
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Malzemeler</Text>
                        <Text style={styles.recipeCardBodyText}>
                            2 adet salatalık{"\n"}
                            1 adet havuç{"\n"}
                            40 gram lor peyniri{"\n"}
                            2 yemek kaşığı yoğurt{"\n"}
                            2-3 dal dereotu{"\n"}
                            1 çay kaşığı nane-kekik {"\n"}
                            1 çay kaşığı pul biber{"\n"}
                        </Text>
                        <Text style={styles.recipeCardSubtitle}>Hazırlanışı</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Kabuklarıyla birlikte uzun uzun salatalıkları kesin
                            Kabuğunu soyduğunuz havuçları da uzun şeritler halinde kesin.
                            Diğer tüm malzemeleri karıştırın.
                            Şeritler halindeki havuç ve salatalıkları bu sosa bandırarak yiyin.
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() =>
                                handleLikeButtonPress(
                                    'Soslu Salatalık',
                                    'Malzemeler:2 adet salatalık, 1 adet havuç, 40 gram lor peyniri, 2 yemek kaşığı yoğurt, 2-3 dal dereotu, 1 çay kaşığı nane-kekik , 1 çay kaşığı pul biber',
                                    'Yapılışı: Kabuklarıyla birlikte uzun uzun salatalıkları kesin. Kabuğunu soyduğunuz havuçları da uzun şeritler halinde kesin. Diğer tüm malzemeleri karıştırın. Şeritler halindeki havuç ve salatalıkları bu sosa bandırarak yiyin.'
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

export default SnacksScreen;