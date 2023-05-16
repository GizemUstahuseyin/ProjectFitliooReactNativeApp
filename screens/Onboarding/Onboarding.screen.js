import React from 'react';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const slides = [
    {
        id: '1',
        image: require('../assets/images1.png'),
        title: 'En Etkili Egzersizler',
        subtitle: 'Herkese uygun etkili egzersizlere sende saðlýklý yaþama bir adým at!',
    },
    {
        id: '2',
        image: require('../assets/images2.png'),
        title: 'Saðlýklý Beslenme Planlarý',
        subtitle: 'Aç kalmadan saðlýklý öðünlerle kilo ver!',
    },
    {
        id: '3',
        image: require('../assets/images3.png'),
        title: 'Geliþimini Sürekli Takip Et',
        subtitle: 'Baþarýnýn sýrrý devamlýlýktýr. Baþarýlarýný takip et!',
    },
];

const Slide = ({ item }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={item?.image}
                style={{ height: '75%', width, resizeMode: 'contain' }}
            />
            <View>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.subtitle}>{item?.subtitle}</Text>
            </View>
        </View>
    );
};

const OnboardingScreen = ({ navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef();
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };

    const Footer = () => {
        return (
            <View
                style={{
                    height: height * 0.25,
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 20,
                    }}>
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: '#191796',
                                    width: 25,
                                },
                            ]}
                        />
                    ))}
                </View>

                <View style={{ marginBottom: 20 }}>
                    {currentSlideIndex == slides.length - 1 ? (
                        <View style={{ height: 50 }}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => navigation.replace('Signup')}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#fff' }}>
                                    HAYDÝ BAÞLAYALIM
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={[
                                    styles.btn,
                                    {
                                        borderColor: '#191796',
                                        borderWidth: 1,
                                        backgroundColor: 'transparent',
                                    },
                                ]}
                                onPress={skip}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        color: '#191796',
                                    }}>
                                    ATLA
                                </Text>
                            </TouchableOpacity>
                            <View style={{ width: 15 }} />
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={goToNextSlide}
                                style={styles.btn}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        color: '#fff'
                                    }}>
                                    SONRAKÝ
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar backgroundColor={'#fff'} />
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                contentContainerStyle={{ height: height * 0.75 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        color: '#191796',
        fontSize: 13,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
    },
    title: {
        color: '#191796',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 2,
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#191796',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default OnboardingScreen;
