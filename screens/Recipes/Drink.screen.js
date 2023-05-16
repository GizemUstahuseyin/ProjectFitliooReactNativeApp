import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';

const DrinkScreen = () => {
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
                <MaterialIcons name="local-drink" size={64} color="#13a8e8" textAlign="center" />
                <Text style={styles.title}>BİZE ENERJİYİ İÇECEKLER VERSİN!</Text>

                <View style={styles.recipeCard}>
                    <View style={styles.recipeCardHeader}>
                        <Image source={require('../assets/coldbrew.jpg')} style={styles.recipeImage} />
                        <Text style={styles.recipeTitle}>Cold Brew</Text>
                    </View>
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Malzemeler</Text>
                        <Text style={styles.recipeCardBodyText}>
                            6 tatlı kaşığı çekilmiş kahve (45 gram){"\n"}
                            750 mililitre su{"\n"}
                        </Text>
                        <Text style={styles.recipeCardSubtitle}>Hazırlanışı</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Kahveyi cam şişeye koyuyoruz. Üzerine oda sıcaklığındaki suyu yavaş yavaş ekliyoruz. Şişenin üzerine havlu, bez, tülbent, kağıt havlu gibi bir şey örterek güneş görmeyen bir yerde veya buzdolabında demlenmeye bırakıyoruz. 21-24 saat kadar demlendikten sonra kahvemizi süzüyoruz. Süzme işlemini kahve filtresi veya tülbent kullanarak yapabilirsiniz. İşte bayılarak tüketeceğiniz kahveniz hazır! Üstelik 1 ay kadar buzdolabında saklayabilirsiniz.
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() =>
                                handleLikeButtonPress(
                                    'Cold Brew',
                                    'Malzemeler: 6 tatlı kaşığı çekilmiş kahve (45 gram), 750 mililitre su',
                                    'Yapılışı: Kahveyi cam şişeye koyuyoruz. Üzerine oda sıcaklığındaki suyu yavaş yavaş ekliyoruz. Şişenin üzerine havlu, bez, tülbent, kağıt havlu gibi bir şey örterek güneş görmeyen bir yerde veya buzdolabında demlenmeye bırakıyoruz. 21-24 saat kadar demlendikten sonra kahvemizi süzüyoruz. Süzme işlemini kahve filtresi veya tülbent kullanarak yapabilirsiniz. İşte bayılarak tüketeceğiniz kahveniz hazır! Üstelik 1 ay kadar buzdolabında saklayabilirsiniz.'
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
                        <Image source={require('../assets/yesildetoks.jpg')} style={styles.recipeImage} />
                        <Text style={styles.recipeTitle}>Yeşil Detoks</Text>
                    </View>
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Malzemeler</Text>
                        <Text style={styles.recipeCardBodyText}>
                            1 avuç ıspanak{"\n"}
                            1 avuç maydanoz{"\n"}
                            2 adet küçük boy salatalık{"\n"}
                            Yarım limon{"\n"}
                            Birkaç yaprak nane{"\n"}
                        </Text>
                        <Text style={styles.recipeCardSubtitle}>Hazırlanışı</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Ispanak, maydanoz ve salatalıkları iyice yıkadıktan sonra blenderdan geçirin. Üzerine su ekleyerek tekrar blenderdan geçirin. Yarım limonu dilimleyerek nane yapraklarıyla birlikte içeceğin içine atın. Birkaç saat beklettinten sonra yanınızda taşıyarak gün boyunca içebilirsiniz.Afiyet olsun!
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() =>
                                handleLikeButtonPress(
                                    'Yeşil Detoks',
                                    'Malzemeler:  1 avuç ıspanak, 1 avuç maydanoz, 2 adet küçük boy salatalık, Yarım limon, Birkaç yaprak nane',
                                    'Yapılışı: Ispanak, maydanoz ve salatalıkları iyice yıkadıktan sonra blenderdan geçirin. Üzerine su ekleyerek tekrar blenderdan geçirin. Yarım limonu dilimleyerek nane yapraklarıyla birlikte içeceğin içine atın. Birkaç saat beklettinten sonra yanınızda taşıyarak gün boyunca içebilirsiniz.Afiyet olsun!'
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

export default DrinkScreen;