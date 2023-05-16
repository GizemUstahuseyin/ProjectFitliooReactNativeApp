import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [chest, setChest] = useState('');
    const [waist, setWaist] = useState('');
    const [hips, setHips] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
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
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
            }
        });
    }, []);

    const submitProfile = () => {
        firebase
            .firestore()
            .collection('FitliooProfile')
            .add({
                name: name,
                age: age,
                weight: weight,
                height: height,
                chest: chest,
                waist: waist,
                hips: hips,
                useruid: firebase.auth().currentUser.uid
            })
            .then(() => {
                Alert.alert("FITLIOO", "Tebrikler! Profiliniz kaydedildi 🥳");
                console.log('Profil kaydedildi!');
            })
            .catch((error) => {
                Alert.alert("FITLIOO", `Hata oluştu: ${error.message}`);
                console.error('Profil kaydedilirken hata: ', error);
            });
    };

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await firebase
                .firestore()
                .collection('FitliooProfile')
                .where('useruid', '==', firebase.auth().currentUser.uid)
                .get();
            const data = querySnapshot.docs.map((doc) => doc.data())[0];
            setProfileData(data);
        };
        if (authenticated) {
            fetchData();
        }
    }, [authenticated]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.baslik}>Kişisel Bilgiler</Text>
                <Text>Adınız Soyadınız:</Text>
                <TextInput
                    style={styles.input}
                    value={name || profileData?.name}
                    onChangeText={(text) => setName(text)}
                    placeholder={profileData?.name}
                />
                <Text>Yaşınız:</Text>
                <TextInput
                    style={styles.input}
                    value={age || profileData?.age}
                    onChangeText={(text) => setAge(text)}
                    placeholder={profileData?.age}
                />
                <Text>Kilonuz (kg):</Text>
                <TextInput
                    style={styles.input}
                    value={weight || profileData?.weight}
                    onChangeText={(text) => setWeight(text)}
                    placeholder={profileData?.weight}
                />
                <Text>Boyunuz (cm):</Text>
                <TextInput
                    style={styles.input}
                    value={height || profileData?.height}
                    onChangeText={(text) => setHeight(text)}
                    placeholder={profileData?.height}
                />
                <Text>Göğüs Ölçünüz (cm):</Text>
                <TextInput
                    style={styles.input}
                    value={chest || profileData?.chest}
                    onChangeText={(text) => setChest(text)}
                    placeholder={profileData?.chest}
                />
                <Text>Bel Ölçünüz (cm):</Text>
                <TextInput
                    style={styles.input}
                    value={waist || profileData?.waist}
                    onChangeText={(text) => setWaist(text)}
                    placeholder={profileData?.waist}
                />
                <Text>Kalça Ölçünüz (cm):</Text>
                <TextInput
                    style={styles.input}
                    value={hips || profileData?.hips}
                    onChangeText={(text) => setHips(text)}
                    placeholder={profileData?.hips}
                />
                <TouchableOpacity style={styles.button} onPress={submitProfile}>
                    <Text style={styles.buttonText}>Kaydet</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        width: '100%',
    },
    baslik: {
        textAlign: 'center',
        marginBottom: 15,
        fontSize: 24,
    },
    button: {
        height: 40,
        width: 90,
        borderRadius: 10,
        margin: 20,
        backgroundColor: '#8d8ff7',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
    },
});