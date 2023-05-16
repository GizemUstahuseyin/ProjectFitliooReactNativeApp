import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Alert,
    Image,
    TouchableOpacity
} from 'react-native';
import { firebase } from '../../../config';
import loginBackground from '../assets/login.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            Alert.alert("FITLIOO", "Giriş yapıldı.Hoşgeldiniz ❤️😊");
            navigation.navigate("DashboardScreen");
        } catch (error) {
            console.log(error.message);
            Alert.alert("FITLIOO", `Hata oluştu: ${error.message}`);
        }
    };

    return (
        <>
            <View style={styles.container}>
                <Image source={loginBackground} style={styles.recipeImage} />

                <Text style={{ fontSize: 16, color: '#191796', textAlign: 'center', marginBottom: 10, fontWeight: 'bold' }}>Tekrar  Hoşgeldiniz</Text>
                <Text style={styles.title}>Lütfen Giriş Yapınız</Text>

                <View style={styles.inputContainer}>
                    <View style={styles.icon}>
                        <Icon name="user" size={24} color="#191796" />
                    </View>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Mail Adresiniz"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.icon}>
                        <Icon name="lock" size={24} color="#191796" />
                    </View>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Şifreniz"
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={signIn}>
                    <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#191796' }} />
                    <Text style={{ width: 50, textAlign: 'center', color: '#191796' }}>veya</Text>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#191796' }} />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.buttonText}>Kayıt Ol</Text>
                </TouchableOpacity>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#b1d4fc',
    },
    title: {
        fontSize: 24,
        color: '#191796',
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 10,
        paddingLeft: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    input: {
        flex: 1,
        height: 20,
        marginLeft: 10,
        color: '#191796',
    },
    button: {
        height: 60,
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 10,
        paddingLeft: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#191796',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
    },
    recipeImage: {
        marginLeft: 40,
        width: 300,
        height: 250,
    },
});