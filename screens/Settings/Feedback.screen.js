import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

const FeedbackScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);
    const navigation = useNavigation();



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
    const myCollection = db.collection('FitliooFeedback');

    const handleSubmit = async () => {
        try {
            const user = firebase.auth().currentUser;
            const userFeedbacks = db.collection('FitliooFeedback');

            await userFeedbacks.add({
                name,
                email,
                subject,
                feedback,
                rating,
                createdAt: new Date(),
            });
            Alert.alert('FITLIOO', 'Geri bildiriminiz gönderildi, teşekkür ederiz ❤ ');
            setName('');
            setEmail('');
            setSubject('');
            setFeedback('');
            setRating(0);
        } catch (error) {
            Alert.alert('FITLIOO', 'Geri bildirim gönderilirken hata: ' + error.message);
        }
    };

    const handleRating = (value) => {
        setRating(value);
    };

    const renderStar = (index) => {
        return (
            <TouchableOpacity key={index} onPress={() => handleRating(index + 1)}>
                <Ionicons name={rating >= index + 1 ? 'md-star' : 'md-star-outline'} size={65} color="#FFD64C" />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Geri Bildirim</Text>
            <Text style={styles.titlee}>Sizlere daha iyi hizmet verebilmek adına geri bildirimleriniz bizim için çok önemlidir. Bu amaçla şikayet ve önerilerinizi lütfen iletiniz.</Text>

            <TextInput
                style={styles.input}
                placeholder="Adınız"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="E-posta adresiniz"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Konu"
                value={subject}
                onChangeText={(text) => setSubject(text)}
            />
            <TextInput
                style={[styles.input, styles.feedbackInput]}
                multiline
                placeholder="Geri bildiriminiz"
                value={feedback}
                onChangeText={(text) => setFeedback(text)}
            />
            <View style={styles.ratingContainer}>
                <View style={styles.starContainer}>
                    {[...Array(5)].map((_, index) => renderStar(index))}
                </View>
            </View>
            <Button title="Gönder" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',

    },
    titlee: {
        fontSize: 18,
        fontWeight: 'italic',
        marginTop: 5,
        textAlign: 'center',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
    },
    feedbackInput: {
        height: 150,
    },
    ratingContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginRight: 10,
        size: 200,
    },
    starContainer: {
        flexDirection: 'row',
        margin: 10,
    },
});

export default FeedbackScreen;