import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import popoGif from '../assets/popo.gif';
import popoGif1 from '../assets/popo1.gif';
import firebase from 'firebase';

const HipScreen = () => {
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
                <Text style={styles.title}>POPO EGZERSİZLERİ</Text>

                <View style={styles.recipeCard}>
                    <View style={styles.recipeCardHeader}>
                        <Text style={styles.recipeTitle}>Popo Hareketleri</Text>
                    </View>
                    <Image source={popoGif} style={styles.recipeImage} />
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Squat Palse</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Ayaklarınız kalça genişliğinde ayakta durun ve elleriniz göğsünüzün önünde kenetli olsun. Kalçalarınızı geriye ittirin ve dizlerinizi squat pozisyonuna doğru bükün. Bedeninizi bir kaç santimetre kaldırın ve sonra tekrar aşağı inin. Bu bir tekrardı. 15 tekrar yapın.
                            Not: Bu egzersizi 8- 10 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.
                        </Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() => handleLikeButtonPress('Squat Palse', '', 'Ayaklarınız kalça genişliğinde ayakta durun ve elleriniz göğsünüzün önünde kenetli olsun. Kalçalarınızı geriye ittirin ve dizlerinizi squat pozisyonuna doğru bükün. Bedeninizi bir kaç santimetre kaldırın ve sonra tekrar aşağı inin. Bu bir tekrardı. 15 tekrar yapın. Not: Bu egzersizi 8- 10 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.')}
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
                        <Text style={styles.recipeTitle}>Popo Hareketleri</Text>
                    </View>
                    <Image source={popoGif1} style={styles.recipeImage} />
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Squat ve Hücum</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Ayakta durun ve elleriniz kalçanızda olsun. Squat pozisyonuna inin ancak dizlerinizin ayak uçlarınızın hizasını geçtiğinden emin olun. Başlangıca dönün. Sol ayağınızla büyük bir adım atın ve sol topuğunuz üzerine indikten sonra yere doğru çömelin. Her iki bacağın da 90 derece kadar büküldüğünden emin olun. Bu bir tekrardı. Her iki yana da 15 tekrar yapın.
                            Not: Bu egzersizi 10-15 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.
                        </Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() => handleLikeButtonPress('Squat ve Hücum', '', 'Ayakta durun ve elleriniz kalçanızda olsun. Squat pozisyonuna inin ancak dizlerinizin ayak uçlarınızın hizasını geçtiğinden emin olun. Başlangıca dönün. Sol ayağınızla büyük bir adım atın ve sol topuğunuz üzerine indikten sonra yere doğru çömelin. Her iki bacağın da 90 derece kadar büküldüğünden emin olun. Bu bir tekrardı. Her iki yana da 15 tekrar yapın. Not: Bu egzersizi 10-15 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.')}
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
        height: 450,
    },
});

export default HipScreen;