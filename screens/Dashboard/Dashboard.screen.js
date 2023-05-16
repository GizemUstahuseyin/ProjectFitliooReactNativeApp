import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
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
                </View>

                <View style={styles.body}>
                    <Text style={styles.title}>Egzersizler</Text>
                    <View style={styles.categories}>
                        <TouchableOpacity style={styles.categoryButtons} onPress={() => navigation.navigate('Karýn Egzersizleri')}>
                            <Image source={require('../assets/sporkarin.jpg')} style={styles.sports} />
                            <Text style={styles.categoryText}>Karýn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryButtons} onPress={() => navigation.navigate('Göðüs Egzersizleri')}>
                            <Image source={require('../assets/sporgogus.jpg')} style={styles.sports} />
                            <Text style={styles.categoryText}>Göðüs</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.categories}>
                        <TouchableOpacity style={styles.categoryButtons} onPress={() => navigation.navigate('Kol Egzersizleri')}>
                            <Image source={require('../assets/sporkol.jpg')} style={styles.sports} />
                            <Text style={styles.categoryText}>Kol</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryButtons} onPress={() => navigation.navigate('Bacak Egzersizleri')}>
                            <Image source={require('../assets/sporbacak.jpg')} style={styles.sports} />
                            <Text style={styles.categoryText}>Bacak</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.categories}>
                        <TouchableOpacity style={styles.categoryButtons} onPress={() => navigation.navigate('Omuz ve Sýrt Egzersizleri')}>
                            <Image source={require('../assets/sporsirt.jpg')} style={styles.sports} />
                            <Text style={styles.categoryText}>Omuz Ve Sýrt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryButtons} onPress={() => navigation.navigate('Kalça Egzersizleri')}>
                            <Image source={require('../assets/sporkalca.jpg')} style={styles.sports} />
                            <Text style={styles.categoryText}>Kalça</Text>
                        </TouchableOpacity>
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
    categoryButtons: {
        width: 160,
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
    sports: {
        width: 160,
        height: 100,
        borderRadius: 16,
        margin: 10,
        opacity: 0.55,
    },
});
export default DashboardScreen;
