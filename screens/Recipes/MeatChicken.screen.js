import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';

const MeatChickenScreen = () => {
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
                <MaterialCommunityIcons name="food-steak" size={64} color="red" textAlign="center" />
                <Text style={styles.title}>BOLCA PROTEİN BOLCA KAS!</Text>

                <View style={styles.recipeCard}>
                    <View style={styles.recipeCardHeader}>
                        <Image source={require('../assets/firindatavuk.jpg')} style={styles.recipeImage} />
                        <Text style={styles.recipeTitle}>Fırında Tavuk</Text>
                    </View>
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Malzemeler</Text>
                        <Text style={styles.recipeCardBodyText}>
                            400 Gram tavuk but{"\n"}
                            400 Gram tavuk kanat{"\n"}
                            2 adet orta boy domates{"\n"}
                            2 adet orta boy patates{"\n"}
                            4 adet acı biber{"\n"}
                            4 diş kabukları soyulmuş sarımsak{"\n"}
                            Ayrıca tavuğun terbiye edilmesi için bir çorba kaşığı salça, iki çorba kaşığı zeytinyağı ile tuz ve karabiber kullanılabilir.{"\n"}
                        </Text>
                        <Text style={styles.recipeCardSubtitle}>Hazırlanışı</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Tarifte yer alan domates, patates ve biberler küp küp doğranır. Burada dikkat edilmesi gereken nokta patateslerin en küçük, biberlerin orta ve domateslerin en büyük boyda doğranmasıdır. Bu şekilde aynı zamanda pişmeleri sağlanır.
                            But ve kanat iyice yıkanır, süzgece alınır. Sularının sızması için beklenir.
                            Terbiye için sosu hazırlayın. Sarımsakları bu sosun içerisine ezerek ilave edin ve sonrasında tavuklarla sosu harmanlayın.
                            Yağladığınız fırın tepsisine tavukları dizin. Üzerlerine ise doğradığınız sebzeleri ekleyin.
                            Tepsinin üzerini tamamen folyo ile kapatın.
                            200 derecelik fırında düzenli kontrol ederek yaklaşık otuz dakika pişirin. Eğer ihtiyaç olduğunu düşünürseniz fırına su ilavesi yapın.
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() =>
                                handleLikeButtonPress(
                                    'Fırında Tavuk',
                                    'Malzemeler: 400 Gram tavuk but, 400 Gram tavuk kanat, 2 adet orta boy domates, 2 adet orta boy patates, 4 adet acı biber, 4 diş kabukları soyulmuş sarımsak, Ayrıca tavuğun terbiye edilmesi için bir çorba kaşığı salça, iki çorba kaşığı zeytinyağı ile tuz ve karabiber kullanılabilir.',
                                    'Yapılışı: Tarifte yer alan domates, patates ve biberler küp küp doğranır. Burada dikkat edilmesi gereken nokta patateslerin en küçük, biberlerin orta ve domateslerin en büyük boyda doğranmasıdır. Bu şekilde aynı zamanda pişmeleri sağlanır. But ve kanat iyice yıkanır, süzgece alınır. Sularının sızması için beklenir. Terbiye için sosu hazırlayın. Sarımsakları bu sosun içerisine ezerek ilave edin ve sonrasında tavuklarla sosu harmanlayın. Yağladığınız fırın tepsisine tavukları dizin. Üzerlerine ise doğradığınız sebzeleri ekleyin. Tepsinin üzerini tamamen folyo ile kapatın. 200 derecelik fırında düzenli kontrol ederek yaklaşık otuz dakika pişirin. Eğer ihtiyaç olduğunu düşünürseniz fırına su ilavesi yapın.'
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
                        <Image source={require('../assets/danabiftekfajita.jpg')} style={styles.recipeImage} />
                        <Text style={styles.recipeTitle}>Dana Biftek Fajita</Text>
                    </View>
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Malzemeler</Text>
                        <Text style={styles.recipeCardBodyText}>
                            2 Adet dolmalık biber{"\n"}
                            Bir tutam acı biber{"\n"}
                            Acı biberin yarısı kadar kimyon{"\n"}
                            Kimyon kadar sarımsak tozu{"\n"}
                            Sarımsak tozu kadar soğan tozu{"\n"}
                            Tuz ve karabiber{"\n"}
                            300 Gram dana biftek{"\n"}
                        </Text>
                        <Text style={styles.recipeCardSubtitle}>Hazırlanışı</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Dolmalık biberleri iyice yıkayıp dik şekilde ince ince kesin. Sonrasında kızdırdığınız ve bir kaşık zeytinyağı eklediğiniz tavaya ince doğranmış dana biftekleri üst üste gelmeyecek şekilde yerleştirin. Yaklaşık üç dakika pişirdikten sonra biberleri ekleyin ve pişmesine yakın diğer baharatları da ekleyerek servise hazır hale getirin.
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() =>
                                handleLikeButtonPress(
                                    'Dana Biftek Fajita',
                                    'Malzemeler: 2 Adet dolmalık biber, Bir tutam acı biber, Acı biberin yarısı kadar kimyon, Kimyon kadar sarımsak tozu, Sarımsak tozu kadar soğan tozu, Tuz ve karabiber, 300 Gram dana biftek',
                                    'Yapılışı: Dolmalık biberleri iyice yıkayıp dik şekilde ince ince kesin. Sonrasında kızdırdığınız ve bir kaşık zeytinyağı eklediğiniz tavaya ince doğranmış dana biftekleri üst üste gelmeyecek şekilde yerleştirin. Yaklaşık üç dakika pişirdikten sonra biberleri ekleyin ve pişmesine yakın diğer baharatları da ekleyerek servise hazır hale getirin.'
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

export default MeatChickenScreen;
