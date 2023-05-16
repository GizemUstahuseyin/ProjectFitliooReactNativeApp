import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import bacakGif from '../assets/bacak.gif';
import bacakGif1 from '../assets/bacak1.gif';
import firebase from 'firebase';

const LegScreen = () => {
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
                <Text style={styles.title}>BACAK EGZERSİZLERİ</Text>

                <View style={styles.recipeCard}>
                    <View style={styles.recipeCardHeader}>
                        <Text style={styles.recipeTitle}>Bacak Hareketleri</Text>
                    </View>
                    <Image source={bacakGif} style={styles.recipeImage} />
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>One Leg Circle (Tek Bacakla Daire Çizme)</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Bu pilates hareketi, bedenin merkez (core) bölgesini güçlendirmeyi amaçlayan bir tekniktir. Kurallarına dikkat edilerek yapılırsa, bacak kaslarınızın uzayarak, abdominal kaslarla birlikte daha da güçlendiğini rahatlıkla hissedebilirsiniz.
                            Not: Bu egzersizi 8- 10 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.
                        </Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() => handleLikeButtonPress('One Leg Circle(Tek Bacakla Daire Çizme)', '', 'Bu pilates hareketi, bedenin merkez (core) bölgesini güçlendirmeyi amaçlayan bir tekniktir. Kurallarına dikkat edilerek yapılırsa, bacak kaslarınızın uzayarak, abdominal kaslarla birlikte daha da güçlendiğini rahatlıkla hissedebilirsiniz. Not: Bu egzersizi 8- 10 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.')}
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
                        <Text style={styles.recipeTitle}>Bacak Hareketleri</Text>
                    </View>
                    <Image source={bacakGif1} style={styles.recipeImage} />
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Shoulder Bridge (Köprü)</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Köprü hareketi, omurgayı esnetir, gluteus kasının (kalça kası) yanında hamstring kasını da (üst arka bacak kası) etkili bir şekilde çalıştırır. Bu çalışma omurlar arası bağlantıyı çalıştırır, omurgayı hareketlendirir ve pelvisin çalışmasını sağlar. Bel fıtığı rahatsızlığında da önerilen hareketlerdendir.
                            Not: Bu egzersizi 10-15 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.
                        </Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() => handleLikeButtonPress('Shoulder Bridge(Köprü)', '', 'Köprü hareketi, omurgayı esnetir, gluteus kasının (kalça kası) yanında hamstring kasını da (üst arka bacak kası) etkili bir şekilde çalıştırır. Bu çalışma omurlar arası bağlantıyı çalıştırır, omurgayı hareketlendirir ve pelvisin çalışmasını sağlar. Bel fıtığı rahatsızlığında da önerilen hareketlerdendir. Not: Bu egzersizi 10-15 kez (1 set 20 tekrar olacak şekilde) tekrarlayabilirsiniz.')}
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

export default LegScreen;