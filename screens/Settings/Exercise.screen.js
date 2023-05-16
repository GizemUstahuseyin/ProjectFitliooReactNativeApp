import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const ExerciseSettings = () => {
    const [isRunningNotificationsEnabled, setIsRunningNotificationsEnabled] = useState(false);
    const [isWorkoutTrackingEnabled, setIsWorkoutTrackingEnabled] = useState(false);
    const [restTime, setRestTime] = useState(5); // varsayýlan olarak 5 saniye seçili

    const toggleRunningNotificationsSwitch = () =>
        setIsRunningNotificationsEnabled((previousState) => !previousState);

    const toggleWorkoutTrackingSwitch = () =>
        setIsWorkoutTrackingEnabled((previousState) => !previousState);

    const resetAllSettings = () => {
        setIsRunningNotificationsEnabled(false);
        setIsWorkoutTrackingEnabled(false);
        setRestTime(5);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Egzersiz Ayarlarý</Text>
            <View style={styles.settingContainer}>
                <Text style={styles.settingTitle}>Bildirimleri Etkinleþtir</Text>
                <Switch
                    trackColor={{ false: '#b193cc', true: '#3f2359' }}
                    thumbColor={isRunningNotificationsEnabled ? '#b193cc' : '#f4f3f4'}
                    onValueChange={toggleRunningNotificationsSwitch}
                    value={isRunningNotificationsEnabled}
                />
            </View>
            <View style={styles.settingContainer}>
                <Text style={styles.settingTitle}>Antreman Takbini Etkinleþtir</Text>
                <Switch
                    trackColor={{ false: '#829bba', true: '#233a59' }}
                    thumbColor={isWorkoutTrackingEnabled ? '#829bba' : '#f4f3f4'}
                    onValueChange={toggleWorkoutTrackingSwitch}
                    value={isWorkoutTrackingEnabled}
                />
            </View>
            <View style={styles.settingContainer}>
                <Text style={styles.settingTitle}>Dinlenme Süresi</Text>
                <View style={styles.restTimeContainer}>
                    <TouchableOpacity
                        style={restTime === 5 ? styles.restTimeSelectedButton : styles.restTimeButton}
                        onPress={() => setRestTime(5)}
                    >
                        <Text style={styles.restTimeButtonText}>Standart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={restTime === 10 ? styles.restTimeSelectedButton : styles.restTimeButton}
                        onPress={() => setRestTime(10)}
                    >
                        <Text style={styles.restTimeButtonText}>10sn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={restTime === 15 ? styles.restTimeSelectedButton : styles.restTimeButton}
                        onPress={() => setRestTime(15)}
                    >
                        <Text style={styles.restTimeButtonText}>15sn</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.resetButton} onPress={resetAllSettings}>
                <Text style={styles.resetButtonText}>TÜM AYARLARI SIFIRLA</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    settingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    settingTitle: {
        fontSize: 18,
        marginRight: 10,
    },
    restTimeContainer: {
        flexDirection: 'row',
    },
    restTimeButton: {
        backgroundColor: '#ddd',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        marginRight: 8,
    },
    restTimeSelectedButton: {
        backgroundColor: '#615d5d',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        marginRight: 8,
    },
    resetButton: {
        backgroundColor: '#ddd',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        marginRight: 8,
        marginTop: 40,
        width: 350,
        fontSize: 56,
        alignItems: 'center',
        fontWeight: 'bold',
    },
});

export default ExerciseSettings;