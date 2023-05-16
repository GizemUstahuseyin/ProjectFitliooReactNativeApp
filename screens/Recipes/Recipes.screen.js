import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();
import Schedule from "../Schedule/Schedule.screen"

const RecipesScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <Text style={styles.title}>Tarifler</Text>
                    <View style={styles.categories}>
                        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Kahvaltý')}>
                            <Image
                                source={require('../assets/foodkahvalti.jpg')}
                                style={styles.food}
                            />
                            <Text style={styles.categoryText}>Kahvaltý</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Sebze Yemekleri')}>
                            <Image
                                source={require('../assets/foodsebze.jpg')}
                                style={styles.food}
                            />
                            <Text style={styles.categoryText}>Sebze Yemekleri</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Et ve Tavuk Yemekleri')}>
                            <Image
                                source={require('../assets/foodet.jpg')}
                                style={styles.food}
                            />
                            <Text style={styles.categoryText}>Et Tavuk Yemekleri</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.categories}>
                        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Tatlýlar')}>
                            <Image
                                source={require('../assets/foodtatli.jpg')}
                                style={styles.food}
                            />
                            <Text style={styles.categoryText}>Tatlýlar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Atýþtýrmalýklar')}>
                            <Image
                                source={require('../assets/foodatistirmalik.jpg')}
                                style={styles.food}
                            />
                            <Text style={styles.categoryText}>Atýþtýrmalýklar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Ýçecekler')}>
                            <Image
                                source={require('../assets/foodicecek.jpg')}
                                style={styles.food}
                            />
                            <Text style={styles.categoryText}>Ýçecekler</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Schedule />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#gray',
    },
    body: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        color: "0090",
        textAlign: "center",
        fontFamily: 'Vacations in Paradise',
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    categoryButton: {
        width: 100,
        height: 100,
        borderRadius: 16,
        backgroundColor: 'darkgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    categoryText: {
        color: '#fff',
        position: 'absolute',
        textAlign: "center",
        fontSize: 15,
        fontWeight: 'bold',
    },
    food: {
        width: 100,
        height: 100,
        borderRadius: 16,
        margin: 10,
        opacity: 0.55,
    },
});
export default RecipesScreen;