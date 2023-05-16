import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Alert,
    Image,
    TouchableOpacity,
} from 'react-native';
import { firebase } from '../../../config.js';
import signupBackground from '../assets/signup.png';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signupUser = async () => {

        try {

            await firebase.auth().createUserWithEmailAndPassword(email, password);
            Alert.alert('FITLIOO', 'Hesabýnýz oluþturuldu!');
            navigation.navigate("Giriþ Yap");
        } catch (error) {

            console.log(error.message);
            Alert.alert('FITLIOO', `Hata olustu: ${error.message} `);
        }

    };

    return (
        <View style={styles.container}>
            <Image source={signupBackground} style={styles.recipeImage} />

            <Text style={{ fontSize: 16, color: '#5f1796', textAlign: 'center', marginBottom: 10, fontWeight: 'bold' }}>Merhaba</Text>
            <Text style={styles.title}>Hadi Baþlayalým</Text>

            <View style={styles.inputContainer}>
                <View style={styles.icon}>
                    <Icon name="user" size={24} color="#5f1796" />
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
                    <Icon name="lock" size={24} color="#5f1796" />
                </View>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Þifreniz"
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={signupUser}>
                <Text style={styles.buttonText}>Kayýt Ol</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#5f1796' }} />
                <Text style={{ width: 50, textAlign: 'center', color: '#5f1796' }}>veya</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: '#5f1796' }} />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Giriþ Yap')}>
                <Text style={styles.buttonText}>Giriþ Yap</Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#d4b1fc',
    },
    title: {
        fontSize: 24,
        color: '#5f1796',
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
        color: '#5f1796',
    },
    button: {
        height: 60,
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 10,
        paddingLeft: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#5f1796',
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