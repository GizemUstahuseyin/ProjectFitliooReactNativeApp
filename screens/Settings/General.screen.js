import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const SettingsItem = ({ label, value, onValueChange }) => (
    <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>{label}</Text>
        {label === 'Karanlýk Mod' || label === 'Otomatik Video Oynat' ? (
            <Switch style={styles.switch} value={value} onValueChange={onValueChange} />
        ) : (
            <TouchableOpacity onPress={onValueChange}>
                <Text style={styles.reminderText}>
                    {value === 0 ? 'Ayarlanmadý' : `${value} dakika`}
                </Text>
            </TouchableOpacity>
        )}
    </View>
);

const GeneralSettingsScreen = () => {
    const [enableDarkMode, setEnableDarkMode] = useState(false);
    const [autoPlayVideos, setAutoPlayVideos] = useState(true);

    const handleDarkModeSwitch = (newValue) => setEnableDarkMode(newValue);
    const handleAutoPlayVideosSwitch = (newValue) => setAutoPlayVideos(newValue);

    return (
        <View style={styles.container}>
            <SettingsItem
                label="Karanlýk Mod"
                value={enableDarkMode}
                onValueChange={handleDarkModeSwitch}
            />
            <SettingsItem
                label="Otomatik Video Oynat"
                value={autoPlayVideos}
                onValueChange={handleAutoPlayVideosSwitch}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: '#F6F6F6'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12
    },
    itemLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1C1C1C'
    },
});




export default GeneralSettingsScreen;
