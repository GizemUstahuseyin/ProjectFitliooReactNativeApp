import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import gogusGif from '../assets/gogus.gif';
import gogusGif1 from '../assets/gogus1.gif';
import firebase from 'firebase';

const ChestScreen = () => {
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
                <Text style={styles.title}>GÖĞÜS EGZERSİZLERİ</Text>

                <View style={styles.recipeCard}>
                    <View style={styles.recipeCardHeader}>
                        <Text style={styles.recipeTitle}>Göğüs Hareketleri</Text>
                    </View>
                    <Image source={gogusGif} style={styles.recipeImage} />
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Push Ups</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Üst vücut bölgesini tamamen çalıştıran ve son derece etkili olan bir egzersizdir. Evinizde rahatlıkla yapacağınız bu egzersiz, şu şekilde uygulanır:Göğsünüz yere bakacak şekilde uzanın.Ellerinizi omuz genişliğinde açın.Ayak parmaklarınızı içe kıvırıp üzerine basarak dizlerinizi yukarı kaldırın.Vücudunuzun düz bir şekilde olduğuna karar verdikten sonra kollar yardımıyla yere kendinizi indirip kaldırın. Ancak kesinlikle göğüs yere değmemeli.
                            Not: Bu egzersizi 8- 10 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.
                        </Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() => handleLikeButtonPress('Push Ups', '', ' Üst vücut bölgesini tamamen çalıştıran ve son derece etkili olan bir egzersizdir. Evinizde rahatlıkla yapacağınız bu egzersiz, şu şekilde uygulanır:Göğsünüz yere bakacak şekilde uzanın.Ellerinizi omuz genişliğinde açın.Ayak parmaklarınızı içe kıvırıp üzerine basarak dizlerinizi yukarı kaldırın.Vücudunuzun düz bir şekilde olduğuna karar verdikten sonra kollar yardımıyla yere kendinizi indirip kaldırın. Ancak kesinlikle göğüs yere değmemeli. Not: Bu egzersizi 8- 10 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.')}
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
                        <Text style={styles.recipeTitle}>Göğüs Hareketleri</Text>
                    </View>
                    <Image source={gogusGif1} style={styles.recipeImage} />
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Decline Press</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Alt göğüs kasları için yapılabilecek en etkili egzersizlerden tekidir. Bu egzersiz şu şekilde uygulanır:20-30 derecelik eğime sahip sehpaya uzanın.Ayaklarınızı sehpanın destekleyici kısımların takın.Başınız aşağı gelecek şekilde sırt üstü uzanın.Kollarınızı omuz genişliğinde biraz fazla açın.Nefesinizi alın.Barı yavaşça göğsünüzün alt kısmına doğru indirin.Nefes vererek barı kaldırın.
                            Not: Bu egzersizi 10-15 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.
                        </Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() => handleLikeButtonPress('Decline Press', '', 'Alt göğüs kasları için yapılabilecek en etkili egzersizlerden tekidir. Bu egzersiz şu şekilde uygulanır:20-30 derecelik eğime sahip sehpaya uzanın.Ayaklarınızı sehpanın destekleyici kısımların takın.Başınız aşağı gelecek şekilde sırt üstü uzanın.Kollarınızı omuz genişliğinde biraz fazla açın.Nefesinizi alın.Barı yavaşça göğsünüzün alt kısmına doğru indirin.Nefes vererek barı kaldırın. Not: Bu egzersizi 10-15 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.')}
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

export default ChestScreen;