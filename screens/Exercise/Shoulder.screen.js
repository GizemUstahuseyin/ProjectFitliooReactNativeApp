import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import omuzGif from '../assets/omuz.gif';
import omuzGif1 from '../assets/omuz1.gif';
import firebase from 'firebase';

const ShoulderScreen = () => {
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
                <Text style={styles.title}>OMUZ VE SIRT EGZERSİZLERİ</Text>

                <View style={styles.recipeCard}>
                    <View style={styles.recipeCardHeader}>
                        <Text style={styles.recipeTitle}>Omuz Hareketleri</Text>
                    </View>
                    <Image source={omuzGif} style={styles.recipeImage} />
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Overhead Press</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Ayaklarınızı omuz genişliğinde açın. İki elinizi de birer dumbbell alın. Kollarınızı dış yüzeyleri dışarı bakacak şekilde önünüzde 90 derecede tutun. Daha sonra kollarınızı başınızın üstünden yukarı doğru kaldırın. Kollarınızın iç yüzeyi karşıya baksın. Başlangıç pozisyonuna dönüp hareketi tekrar edin. 10-15 tekrar, 3 set şeklinde yapın.
                            Not: Bu egzersizi 8- 10 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.
                        </Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() => handleLikeButtonPress('Overhead Press', '', 'Ayaklarınızı omuz genişliğinde açın. İki elinizi de birer dumbbell alın. Kollarınızı dış yüzeyleri dışarı bakacak şekilde önünüzde 90 derecede tutun. Daha sonra kollarınızı başınızın üstünden yukarı doğru kaldırın. Kollarınızın iç yüzeyi karşıya baksın. Başlangıç pozisyonuna dönüp hareketi tekrar edin. 10-15 tekrar, 3 set şeklinde yapın. Not: Bu egzersizi 8- 10 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.')}
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
                        <Text style={styles.recipeTitle}>Sırt Hareketleri</Text>
                    </View>
                    <Image source={omuzGif1} style={styles.recipeImage} />
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Bent Over Row</Text>
                        <Text style={styles.recipeCardBodyText}>
                            İki adet dambıl ile ya da halter çubuğu ve ağırlıkları ile yapılabilir. Hareketi yaparken dizler hafif kırık ve sırt 45 dereceden biraz fazla açıyla öne doğru vaziyet alınır. Kollar aşağıda ağırlıkları tutacak şekilde bel ve dizler sabit kalacak şekilde ağırlıklar karın boşluğuna doğru çekilir. Hareket halter çubuğu ile yapıldığında daha etkili sonuçlar verecektir. Belinde ve sırtında sorun olanlar için sehpa açısı ayarlandıktan sonra yüzüstü uzanılarak yapılması mümkündür.
                            Not: Bu egzersizi 10-15 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.
                        </Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() => handleLikeButtonPress('Bent Over Row', '', 'İki adet dambıl ile ya da halter çubuğu ve ağırlıkları ile yapılabilir. Hareketi yaparken dizler hafif kırık ve sırt 45 dereceden biraz fazla açıyla öne doğru vaziyet alınır. Kollar aşağıda ağırlıkları tutacak şekilde bel ve dizler sabit kalacak şekilde ağırlıklar karın boşluğuna doğru çekilir. Hareket halter çubuğu ile yapıldığında daha etkili sonuçlar verecektir. Belinde ve sırtında sorun olanlar için sehpa açısı ayarlandıktan sonra yüzüstü uzanılarak yapılması mümkündür. Not: Bu egzersizi 10-15 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.')}
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
        height: 400,
    },
});

export default ShoulderScreen;