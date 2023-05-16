import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5, Entypo, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';



const Desserts = () => {

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
                <MaterialIcons name="cake" size={64} color="#eda6d7" textAlign="center" />
                <Text style={styles.title}>TATLI YİYELİM TATLI ÇALIŞALIM!</Text>

                <View style={styles.recipeCard}>
                    <View style={styles.recipeCardHeader}>
                        <Image source={require('../assets/magnolia.jpg')} style={styles.recipeImage} />
                        <Text style={styles.recipeTitle}>Kupta Bisküvili Magnolia</Text>
                    </View>
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Malzemeler</Text>
                        <Text style={styles.recipeCardBodyText}>
                            3 su bardağı laktozsuz süt ( normal süt de kullanabilirsiniz.){"\n"}
                            2 yemek kaşığı buğday ya da mısır nişastası{"\n"}
                            1,5 yemek kaşığı pirinç unu{"\n"}
                            1 adet büyük, olgun muz (ezilmiş){"\n"}
                            1 yemek kaşığı bal{"\n\n"}
                            Ara Kat için;{"\n"}
                            2-3 adet bebe bisküvisi{"\n\n"}
                            Üzeri için;{"\n"}
                            Nar, cennet meyvesi, muz ve arzuya göre bebe bisküvisi.{"\n"}
                        </Text>
                        <Text style={styles.recipeCardSubtitle}>Hazırlanışı</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Orta boy bir tencerede tercihen laktozsuz sütü ezdiğiniz muzla karıştırın.
                            Sonrasında  nişastalarla beraber hepsini ocağın altını bileştirin.
                            Daha sonra ocağın altını açıp kısık ateşte pürüzsüz olana ve hafif katılaşana dek karıştırın.
                            Karışım ılıdığında 1 yemek kaşığı kadar bal ekleyin.
                            Gerekli detaylardan sonra kuplara paylaştırıp üzerine bebe bisküvileri paylaştırılıp bu işlemi 2 kez tekrarlayın.
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() =>
                                handleLikeButtonPress(
                                    'Kupta Bisküvili Magnolia',
                                    'Malzemeler:3 su bardağı laktozsuz süt ( normal süt de kullanabilirsiniz.), 2 yemek kaşığı buğday ya da mısır nişastası, 1,5 yemek kaşığı pirinç unu, 1 adet büyük, olgun muz (ezilmiş),1 yemek kaşığı bal, Ara Kat için; 2-3 adet bebe bisküvisi. Üzeri için;Nar, cennet meyvesi, muz ve arzuya göre bebe bisküvisi.',
                                    'Orta boy bir tencerede tercihen laktozsuz sütü ezdiğiniz muzla karıştırın. Sonrasında  nişastalarla beraber hepsini ocağın altını bileştirin. Daha sonra ocağın altını açıp kısık ateşte pürüzsüz olana ve hafif katılaşana dek karıştırın. Karışım ılıdığında 1 yemek kaşığı kadar bal ekleyin. Gerekli detaylardan sonra kuplara paylaştırıp üzerine bebe bisküvileri paylaştırılıp bu işlemi 2 kez tekrarlayın.'
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
                        <Image source={require('../assets/fitpuding.jpg')} style={styles.recipeImage} />
                        <Text style={styles.recipeTitle}>Cennet Meyveli Fit Puding</Text>
                    </View>
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Malzemeler</Text>
                        <Text style={styles.recipeCardBodyText}>
                            2 adet olgun cennet meyvesi{"\n"}
                            1 yemek kaşığı kakao{"\n"}
                            1 adet olgun muz{"\n"}
                            1-2 yemek kaşığı tahin (Dilerseniz sadece üstüne de koyabilirsiniz){"\n\n"}
                            Üzeri için;{"\n"}
                            2-3 adet Ceviz{"\n"}
                        </Text>
                        <Text style={styles.recipeCardSubtitle}>Hazırlanışı</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Sırasıyla tüm malzemeleri blendera atıp bızzlatın.
                            Sonrasında 2 adet büyük ya da tercihen 4 adet küçük kaseye paylaştırın.
                            Daha sonra soğuması için 1-2 saat buzdolabında bekletin.
                            Servis sırasında ceviz ve tahin ile süsleyin.
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() =>
                                handleLikeButtonPress(
                                    'Cennet Meyveli Fit Puding',
                                    'Malzemeler:2 adet olgun cennet meyvesi, 1 yemek kaşığı kakao, 1 adet olgun muz, 1-2 yemek kaşığı tahin (Dilerseniz sadece üstüne de koyabilirsiniz) Üzeri için;2-3 adet Ceviz',
                                    'Sırasıyla tüm malzemeleri blendera atıp bızzlatın. Sonrasında 2 adet büyük ya da tercihen 4 adet küçük kaseye paylaştırın. Daha sonra soğuması için 1-2 saat buzdolabında bekletin. Servis sırasında ceviz ve tahin ile süsleyin.'
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

export default Desserts;
