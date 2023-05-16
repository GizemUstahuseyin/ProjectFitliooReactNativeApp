import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RateUsSettings = () => {
    const handleRateApp = () => {
        Linking.openURL("https://play.google.com/store/apps/details?id=com.nintendo.zara&gl=TR");
    };

    return (
        <View style={styles.container}>
            <Ionicons name="md-star" size={100} color="#FFD64C" />
            <Text style={styles.heading}>Bizi De�erlendirin</Text>
            <Text style={styles.description}>
                Uygulamam�z� be�eniyorsan�z, l�tfen de�erlendirmek i�in bir dakikan�z� ay�r�n. Deste�iniz i�in te�ekk�r ederim!
            </Text>
            <TouchableOpacity onPress={handleRateApp} style={styles.button}>
                <Text style={styles.buttonText}>De�erlendir</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    heading: {
        fontSize: 32,
        fontWeight: "bold",
        marginTop: 20,
    },
    description: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 20,
    },
    button: {
        backgroundColor: "#4F4F4F",
        borderRadius: 10,
        marginTop: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
    },
});

export default RateUsSettings;