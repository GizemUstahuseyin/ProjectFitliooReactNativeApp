import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';

const VegetableScreen = () => {
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
                <FontAwesome5 name="carrot" size={64} color="orange" textAlign="center" />
                <Text style={styles.title}>SAĞLIKLI SEBZELER FİT KARINLAR!</Text>

                <View style={styles.recipeCard}>
                    <View style={styles.recipeCardHeader}>
                        <Image source={require('../assets/korilikarnabahar.jpg')} style={styles.recipeImage} />
                        <Text style={styles.recipeTitle}>Körili Karnabahar</Text>
                    </View>
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Malzemeler</Text>
                        <Text style={styles.recipeCardBodyText}>
                            ½ karnabahar{"\n"}
                            1 çay kaşığı yenibahar{"\n"}
                            4 tane karanfil{"\n"}
                            1 soğan{"\n"}
                            2 su bardağı haşlanmış nohut{"\n"}
                            5 diş sarımsak{"\n"}
                            6 çorba kaşığı zeytinyağı{"\n"}
                            3 tatlı kaşığı köri{"\n"}
                            1 tatlı kaşığı zerdeçal{"\n"}
                            1 tatlı kaşığı toz acı biber{"\n"}
                            1 çay kaşığı kimyon{"\n"}
                            2 tatlı kaşığı tuz{"\n"}
                            4,5 çorba kaşığı krema{"\n"}
                            3 dal taze soğan{"\n"}
                            Çeyrek bağ kişniş{"\n"}
                        </Text>
                        <Text style={styles.recipeCardSubtitle}>Hazırlanışı</Text>
                        <Text style={styles.recipeCardBodyText}>
                            Yarım karnabaharı ortadan ikiye kesip elinizle küçük çiçeklerine ayırın. Kök kısımlarını da ince ince doğrayın.
                            Tavaya 4 çorba kaşığı zeytinyağı koyun. 1 çay kaşığı yenibahar ve 4 tane karanfili de ekleyip kısık ateşte baharatları kavurun. Bu sayede ısınan yağ ile baharatların lezzetleri daha iyi ortaya çıkacak.
                            1 orta boy soğanı yemeklik doğrayın ve tavaya ekleyip kavurun. Soğanlar kavrulduktan sonra ayrı bir tabağa koyun.
                            Aynı tavaya 2 çorba kaşığı zeytinyağı ekleyip karnabaharları ilave edin. Karnabaharlar kahverengileşmeye başladığında 2 su bardağı haşlanmış nohut ve uzunlamasına kesilmiş 5 diş sarımsağı tavaya ekleyip beş dakika kadar kavurun.
                            Kavrulmuş soğanları tavaya geri ekleyip üzerine 3 tatlı kaşığı köri, 1 tatlı kaşığı zerdeçal, 1 tatlı kaşığı toz acı biber, 1 çay kaşığı kimyon ve 2 tatlı kaşığı tuz ekleyin.
                            Baharatların güzelce karışması ve tavanın dibindeki lezzetleri kazımak için 1 su bardağı kadar sıcak su ilave edip karıştırın. Kapağını kapatıp 5-6 dakika kadar pişirin.
                            Çeyrek bağ kişnişi ve 3 dal taze soğanı çok ince olmayacak şekilde doğrayın.
                            Tavaya ilk olarak taze soğanları ardından 4,5 çorba kaşığı kremayı ekleyip karıştırın.
                            Son olarak kişnişleri de ekleyip karıştırınca körili karnabaharınız emrinize amade.
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() =>
                                handleLikeButtonPress(
                                    'Körili Karnabahar',
                                    'Malzemeler:½ karnabahar, 1 çay kaşığı yenibahar, 4 tane karanfil, 1 soğan, 2 su bardağı haşlanmış nohut, 5 diş sarımsak, 6 çorba kaşığı zeytinyağı, 3 tatlı kaşığı köri, 1 tatlı kaşığı zerdeçal, 1 tatlı kaşığı toz acı biber, 1 çay kaşığı kimyon, 2 tatlı kaşığı tuz, 4,5 çorba kaşığı krema, 3 dal taze soğan, Çeyrek bağ kişniş',
                                    'Yapılışı:  Yarım karnabaharı ortadan ikiye kesip elinizle küçük çiçeklerine ayırın. Kök kısımlarını da ince ince doğrayın. Tavaya 4 çorba kaşığı zeytinyağı koyun. 1 çay kaşığı yenibahar ve 4 tane karanfili de ekleyip kısık ateşte baharatları kavurun. Bu sayede ısınan yağ ile baharatların lezzetleri daha iyi ortaya çıkacak. 1 orta boy soğanı yemeklik doğrayın ve tavaya ekleyip kavurun. Soğanlar kavrulduktan sonra ayrı bir tabağa koyun. Aynı tavaya 2 çorba kaşığı zeytinyağı ekleyip karnabaharları ilave edin. Karnabaharlar kahverengileşmeye başladığında 2 su bardağı haşlanmış nohut ve uzunlamasına kesilmiş 5 diş sarımsağı tavaya ekleyip beş dakika kadar kavurun. Kavrulmuş soğanları tavaya geri ekleyip üzerine 3 tatlı kaşığı köri, 1 tatlı kaşığı zerdeçal, 1 tatlı kaşığı toz acı biber, 1 çay kaşığı kimyon ve 2 tatlı kaşığı tuz ekleyin. Baharatların güzelce karışması ve tavanın dibindeki lezzetleri kazımak için 1 su bardağı kadar sıcak su ilave edip karıştırın. Kapağını kapatıp 5-6 dakika kadar pişirin. Çeyrek bağ kişnişi ve 3 dal taze soğanı çok ince olmayacak şekilde doğrayın. Tavaya ilk olarak taze soğanları ardından 4,5 çorba kaşığı kremayı ekleyip karıştırın. Son olarak kişnişleri de ekleyip karıştırınca körili karnabaharınız emrinize amade.'
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
                        <Image source={require('../assets/sebzemakarna.jpg')} style={styles.recipeImage} />
                        <Text style={styles.recipeTitle}>Sebze Makarnası</Text>
                    </View>
                    <View style={styles.recipeCardBody}>
                        <Text style={styles.recipeCardSubtitle}>Malzemeler</Text>
                        <Text style={styles.recipeCardBodyText}>
                            1 adet kabak{"\n"}
                            1 adet domates{"\n"}
                            1 diş sarımsak{"\n"}
                            2 çorba kaşığı zeytinyağı{"\n"}
                            1 çay kaşığı kuru nane{"\n"}
                            1 büyük ceviz büyüklüğünde kaşar peyniri{"\n"}
                            1 tatlı kaşığı sirke{"\n"}
                            Tuz{"\n"}
                            Karabiber{"\n"}
                            Pul biber{"\n"}
                        </Text>
                        <Text style={styles.recipeCardSubtitle}>Hazırlanışı</Text>
                        <Text style={styles.recipeCardBodyText}>
                            1 adet kabağı fasulye soyacağı ile çubuk şeklinde dilimleyin.
                            Küçük bir tencereye 3-4 parmak yüksekliğinde kaynar su koyun.
                            Ardından bir tutam tuz ekleyin.
                            Doğradığınız kabakları ve 1 diş sarımsağı kaynayan suya atıp yaklaşık 1-2 dakika pişirin.
                            Bu esnada ayrı bir tavaya 2 çorba kaşığı zeytinyağı ekleyin ve ısıtın.
                            Yağınız ısınınca üzerine direk 1 adet domatesi rendeleyin ve 1 tatlı kaşığı sirke ilave edin.
                            Bu aşamada dilerseniz bir miktarda toz şeker koyabilirsiniz.
                            Ağız tadınıza göre tuz, karabiber ve pul biber ekleyin. Haşlanan kabakları maşayla sosun içine alın.
                            Kabağı sosun içine koyduktan sonra tavanızın altını kısın aksi takdirde kabaklarınız çok yumuşayıp ölebilirler.
                            Kabaklarla birlikte suya attığınız sarımsağı da çıkarıp dilimleyin ve tavaya ilave edin.
                            Son olarak üzerine 1 çay kaşığı kuru naneyi ekleyin.
                            Tabağa aldıktan sonra üzerine 1 büyük ceviz büyüklüğündeki kaşar peynirini kabakları soyarken kullandığınız fasulye soyacağı ile dilimleyip üzerine serpin.
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.likeButton]}
                            onPress={() =>
                                handleLikeButtonPress(
                                    'Sebze Makarnası',
                                    'Malzemeler:1 adet kabak, 1 adet domates, 1 diş sarımsak, 2 çorba kaşığı zeytinyağı, 1 çay kaşığı kuru nane, 1 büyük ceviz büyüklüğünde kaşar peyniri, 1 tatlı kaşığı sirke, Tuz, Karabiber, Pul biber',
                                    'Yapılışı:   1 adet kabağı fasulye soyacağı ile çubuk şeklinde dilimleyin. Küçük bir tencereye 3-4 parmak yüksekliğinde kaynar su koyun. Ardından bir tutam tuz ekleyin. Doğradığınız kabakları ve 1 diş sarımsağı kaynayan suya atıp yaklaşık 1-2 dakika pişirin. Bu esnada ayrı bir tavaya 2 çorba kaşığı zeytinyağı ekleyin ve ısıtın. Yağınız ısınınca üzerine direk 1 adet domatesi rendeleyin ve 1 tatlı kaşığı sirke ilave edin. Bu aşamada dilerseniz bir miktarda toz şeker koyabilirsiniz. Ağız tadınıza göre tuz, karabiber ve pul biber ekleyin. Haşlanan kabakları maşayla sosun içine alın. Kabağı sosun içine koyduktan sonra tavanızın altını kısın aksi takdirde kabaklarınız çok yumuşayıp ölebilirler. Kabaklarla birlikte suya attığınız sarımsağı da çıkarıp dilimleyin ve tavaya ilave edin. Son olarak üzerine 1 çay kaşığı kuru naneyi ekleyin. Tabağa aldıktan sonra üzerine 1 büyük ceviz büyüklüğündeki kaşar peynirini kabakları soyarken kullandığınız fasulye soyacağı ile dilimleyip üzerine serpin.'
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

export default VegetableScreen;
