import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { firebase } from '../../../config';
import { Fontisto } from '@expo/vector-icons';

const db = firebase.firestore();

const FitleFavorites = () => {
    const [MyFits, setMyFits] = useState([]);

    useEffect(() => {
        const currentUser = firebase.auth().currentUser;
        const fetchData = async () => {
            try {
                const snapshot = await db
                    .collection('FitliooMyFits')
                    .where('useruid', '==', currentUser.uid)
                    .get();
                const data = snapshot.docs.map((doc) => doc.data());
                setMyFits(data);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const removeFit = async (useruid) => {
        try {
            const currentUser = firebase.auth().currentUser;
            const snapshot = await db
                .collection('FitliooMyFits')
                .where('useruid', '==', currentUser.uid)
                .get();
            const docId = snapshot.docs[0].id;
            await db.collection('FitliooMyFits').doc(docId).delete();
            console.log('veri silindi');

            setMyFits((prevState) =>
                prevState.filter((fit) => fit.useruid !== useruid)
            );
        } catch (error) {
            console.log('Error removing data:', error);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Fitlediklerim</Text>
                    <Text style={styles.headerSubtitle}>Senin kalbin neyden hoþlanýyor?</Text>
                </View>
                <View style={styles.content}>
                    {MyFits.length === 0 ? (
                        <Text style={styles.myfits}>Henüz hiçbirþeyi fitlememiþsiniz.</Text>
                    ) : (
                        MyFits.map((fit, index) => (
                            <View style={styles.likecard} key={index}>
                                <Text style={styles.recipe}>{fit.recipeTitle}</Text>
                                <Text>{fit.ingredients}</Text>
                                <Text>{fit.steps}</Text>
                                <TouchableOpacity onPress={() => removeFit(index)} style={[styles.button, styles.likeButton]}>
                                    <Fontisto name="heart" size={20} color="#ff0597" />
                                    <Text style={styles.buttonText}>Fitlemekten Vazgeç</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    )}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F7F9",
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    header: {
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1C1C1E",
        textAlign: 'center',
    },
    headerSubtitle: {
        fontSize: 16,
        color: "#8E8E93",
        textAlign: 'center',
    },
    content: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 16,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    myfits: {
        marginTop: 250,
        textAlign: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        marginBottom: 10,
        width: 200,
    },
    likecard: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    likeButton: {
        marginTop: 10,
        backgroundColor: '#FFB6C1',
        marginLeft: 40,
    },
    buttonText: {
        color: '#ff0597',
        marginLeft: 5,
        fontSize: 16,
    },
    recipe: {
        color: '#000',
        textAlign: "center",
        fontSize: 15,
        fontWeight: 'bold',
    },
});
export default FitleFavorites;