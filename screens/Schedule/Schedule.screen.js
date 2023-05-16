import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ScheduleScreen = () => {
    const [chocolate, setChocolate] = useState(true);
    const [sugar, setSugar] = useState(true);
    const [fastFood, setFastFood] = useState(true);
    const [alcohol, setAlcohol] = useState(true);

    const [started, setStarted] = useState(false);
    const [time, setTime] = useState(0);

    const startTimer = () => {
        setStarted(true);
    }

    useEffect(() => {
        let interval;
        if (started) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [started]);

    const resetTimer = () => {
        setStarted(false);
        setTime(0);
    }

    return (
        <>
            <Text style={styles.timer}>Zorlu Challenge</Text>
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.card, { backgroundColor: chocolate ? '#adadad' : '#636365' }]}
                    onPress={() => setChocolate(!chocolate)}
                >
                    <Text style={styles.text}>🍫</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.card, { backgroundColor: sugar ? '#adadad' : '#636365' }]}
                    onPress={() => setSugar(!sugar)}
                >
                    <Text style={styles.text}>🍭</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.card, { backgroundColor: fastFood ? '#adadad' : '#636365' }]}
                    onPress={() => setFastFood(!fastFood)}
                >
                    <Text style={styles.text}>🍔</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.card, { backgroundColor: alcohol ? '#adadad' : '#636365' }]}
                    onPress={() => setAlcohol(!alcohol)}
                >
                    <Text style={styles.text}>🍷</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={[styles.btn, { backgroundColor: started ? 'darkred' : '#636365', justifyContent: 'center' }]}
                onPress={started ? resetTimer : startTimer}
            >
                <Text style={styles.text}>{started ? 'PES ET' : 'MÜCADELEYE ŞİMDİ BAŞLA'}</Text>
            </TouchableOpacity>
            <Text style={styles.timer}>Mücadeleye başlayalı {time} saniye oldu!</Text>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        flexDirection: 'row',
    },
    card: {
        padding: 20,
        marginBottom: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,

    },
    btn: {
        padding: 10,
        width: 300,
        borderRadius: 25,
        marginLeft: 30,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
    },
    timer: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        textAlign: 'center',
        justifyContent: 'center',
    },
});

export default ScheduleScreen;