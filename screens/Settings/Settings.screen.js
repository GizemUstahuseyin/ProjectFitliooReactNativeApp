import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { firebase } from '../../../config';

const Settings = () => {
    const navigation = useNavigation();
    const handleLogoutPress = () => {
        Alert.alert('Çýkýþ Yap', 'Çýkýþ yapmak istediðinize emin misiniz?', [
            { text: 'Vazgeç', style: 'cancel' },
            {
                text: 'Evet',
                onPress: () => {
                    firebase.auth().signOut().then(() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Onboarding' }],
                        });
                    }).catch(error => console.log(error));
                },
            },
        ]);
    };

    const handleDeleteAccountPress = () => {
        Alert.alert('Hesap Sil', 'Hesabýnýzý silmek istediðinize emin misiniz?', [
            { text: 'Vazgeç', style: 'cancel' },
            { text: 'Evet', onPress: () => console.log('Kullanýcý hesabýný sildi.') },
        ]);
    };
    return (
        <View style={styles.container}>
            <View style={styles.buttonGroup}>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profil Ayarlarý')}>
                    <FontAwesome5 name="user-alt" style={{ color: "#fff", backgroundColor: "#c43939", fontSize: 15, borderRadius: 20, padding: 11, marginRight: 15 }} />
                    <Text style={styles.text}>Profilim</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Egzersiz Ayarlarý')}>
                    <MaterialIcons name="fitness-center" style={{ color: "#fff", backgroundColor: "#3942c4", fontSize: 15, borderRadius: 20, padding: 11, marginRight: 15 }} />
                    <Text style={styles.text}>Egzersiz Ayarlarý</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Genel Ayarlar')}>
                    <Ionicons name="settings-sharp" style={{ color: "#fff", backgroundColor: "#39c449", fontSize: 15, borderRadius: 20, padding: 11, marginRight: 15 }} />
                    <Text style={styles.text}>Genel Ayarlar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bizi Deðerlendirin')}>
                    <AntDesign name="star" style={{ color: "#fff", backgroundColor: "orange", fontSize: 15, borderRadius: 20, padding: 11, marginRight: 15 }} />
                    <Text style={styles.text}>Bize Oy Verin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Geri Bildirim')}>
                    <Entypo name="newsletter" style={{ color: "#fff", backgroundColor: "#9439c4", fontSize: 15, borderRadius: 20, padding: 11, marginRight: 15 }} />
                    <Text style={styles.text}>Geri Bildirim</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.reminderButton} onPress={handleLogoutPress}>
                    <Text style={styles.reminderButtonText}>Çýkýþ Yap</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dangerButton} onPress={handleDeleteAccountPress}>
                    <Text style={styles.dangerButtonText}>Hesap Sil</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonGroup: {
        marginTop: 40,
        backgroundColor: 'white',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e6e4e3',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    text: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
    },
    reminderButton: {
        backgroundColor: '#FFB347',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 60,
    },
    reminderButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    dangerButton: {
        backgroundColor: '#FF6347',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    dangerButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});

export default Settings;