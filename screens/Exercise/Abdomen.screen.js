import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import altKarınGif from '../assets/altkarin.gif';
import altKarınGif1 from '../assets/altkarin1.gif';
import firebase from 'firebase';

const AbdomenScreen = () => {
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
                Alert.alert('FITLIOO', 'Egzersizi fitlediniz, Fitlediklerim sayfasından ulaşabilirsiniz. ❤ ');
            } else {
                Alert.alert('FITLIOO', 'Kullanıcı oturumu açık değil.');
            }
        } catch (error) {
            Alert.alert('FITLIOO', 'Egzersiz fitlerken hata: ' + error.message);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>KARIN EGZERSİZLERİ</Text>

                <View style={styles.recipeCard}>
                    <View style={styles.recipeCardHeader}>
                        <Text style={styles.recipeTitle}>Alt Karın Hareketleri</Text>
                    </View>
                    <Image source={altKarınGif} style={styles.recipeImage} />
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Heel Taps</Text>
                        <Text style={styles.recipeCardBodyText}>En iyi alt karın egzersizlerinden biri olan heel taps hareketi için, yere sırt üstü uzanın ve ellerinizi kafanızın arkasın yerleştirin. Dirsekleriniz geniş olsun, ayaklarınızı yerden yukarıya kaldırın ve dizlerini 90 derece açı olacak şekilde bükün.Bir bacağınızı aşağıya doğru indirin, ancak bunu yaparken dizinizdeki bükülme halini koruyun ve topuğunuzla zemine dokunun. Sonrasında başlangıç pozisyonuna geri dönün ve hareketi diğer bacağınızla tekrarlayın. Bacaklarınızı değiştirmeye devam edin.
                        </Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() => handleLikeButtonPress('Heel Taps', '', 'En iyi alt karın egzersizlerinden biri olan heel taps hareketi için, yere sırt üstü uzanın ve ellerinizi kafanızın arkasın yerleştirin. Dirsekleriniz geniş olsun, ayaklarınızı yerden yukarıya kaldırın ve dizlerini 90 derece açı olacak şekilde bükün.Bir bacağınızı aşağıya doğru indirin, ancak bunu yaparken dizinizdeki bükülme halini koruyun ve topuğunuzla zemine dokunun. Sonrasında başlangıç pozisyonuna geri dönün ve hareketi diğer bacağınızla tekrarlayın. Bacaklarınızı değiştirmeye devam edin.')}
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
                        <Text style={styles.recipeTitle}>Üst Karın Hareketleri</Text>
                    </View>
                    <Image source={altKarınGif1} style={styles.recipeImage} />
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Butterfly Sit-Ups</Text>
                        <Text style={styles.recipeCardBodyText}>Butterfly sit-ups hareketi için, yere ayak tabanlarınız bibirine dokunacak ve dizleriniz yanlara doğru eğilmiş vaziyette olacak şekilde sırt üstü uzanın. Kendinizi oturur pozisyona getirerek, kollarınızı ayaklarınızın ötesine getirin ve zemine dokunun.Omurganızı korumak için zamanında bir omurunuzu aşağı doğru indirin. Sonrasında başlangıç pozisyonuna geri dönün ve hareketi tekrarlayın.
                        </Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() => handleLikeButtonPress('Butterfly Sit-Ups', '', 'Yapılışı:Butterfly sit-ups hareketi için, yere ayak tabanlarınız bibirine dokunacak ve dizleriniz yanlara doğru eğilmiş vaziyette olacak şekilde sırt üstü uzanın. Kendinizi oturur pozisyona getirerek, kollarınızı ayaklarınızın ötesine getirin ve zemine dokunun.Omurganızı korumak için zamanında bir omurunuzu aşağı doğru indirin. Sonrasında başlangıç pozisyonuna geri dönün ve hareketi tekrarlayın.')}
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
    recipeImage: {
        width: 350,
        height: 250,
    },
});

export default AbdomenScreen;
