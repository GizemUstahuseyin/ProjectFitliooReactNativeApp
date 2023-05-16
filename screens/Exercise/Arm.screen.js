import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import kolGif from '../assets/kol.gif';
import kolGif1 from '../assets/kol1.gif';
import firebase from 'firebase';

const ArmScreen = () => {
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
                <Text style={styles.title}>KOL EGZERSİZLERİ</Text>

                <View style={styles.recipeCard}>
                    <View style={styles.recipeCardHeader}>
                        <Text style={styles.recipeTitle}>Toparlayıcı Kol Hareketleri</Text>
                    </View>
                    <Image source={kolGif} style={styles.recipeImage} />
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Top Egzersizi</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Ayaklarınızı omuz genişliğinde açın.
                            Zemine paralel olacak şekilde kollarınızı her iki tarafa doğru açın.
                            Sanki bir top okşuyor gibi kollarınızı saat yönünde çevirin.
                            Bu hareketi 20 kere tekrarlayın.
                            Kollarınızı indirin ve 10-15 saniye dinlenin.
                            Not: Bu egzersizi 8- 10 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.
                        </Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() => handleLikeButtonPress('Top Egzersizi', '', 'Ayaklarınızı omuz genişliğinde açın. Zemine paralel olacak şekilde kollarınızı her iki tarafa doğru açın. Sanki bir top okşuyor gibi kollarınızı saat yönünde çevirin. Bu hareketi 20 kere tekrarlayın. Kollarınızı indirin ve 10-15 saniye dinlenin. Not: Bu egzersizi 8- 10 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.')}
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
                        <Text style={styles.recipeTitle}>Kas Kütlesi Arttıran Kol Hareketleri</Text>
                    </View>
                    <Image source={kolGif1} style={styles.recipeImage} />
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Dirsekten İtme ve Gerdirme Egzersizi</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Ayaklarınızı omuz genişliğinde açın.
                            Kollarınızı zemine paralel olacak şekilde her iki tarafa doğru açın ve ellerinizi yumruk yapın.
                            Yumruğunuzu yere paralel bir hale getirin yani kol içleriniz yere baksın.
                            Yukarıdaki görseldeki gibi dirsekten kollarınızı bükerek ğöğsünüzde yumruklarınızı birleştirin.
                            Bu hareketi 20 kere tekrarlayın.
                            Kollarınızı indirin ve 10-15 saniye dinlenin.
                            Not: Bu egzersizi 10-15 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.
                        </Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() => handleLikeButtonPress('Dirsekten İtme ve Gerdirme Egzersizi', '', 'Ayaklarınızı omuz genişliğinde açın. Kollarınızı zemine paralel olacak şekilde her iki tarafa doğru açın ve ellerinizi yumruk yapın. Yumruğunuzu yere paralel bir hale getirin yani kol içleriniz yere baksın. Yukarıdaki görseldeki gibi dirsekten kollarınızı bükerek ğöğsünüzde yumruklarınızı birleştirin. Bu hareketi 20 kere tekrarlayın. Kollarınızı indirin ve 10-15 saniye dinlenin. Not: Bu egzersizi 10-15 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.')}
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

export default ArmScreen;
