import React from "react";
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    Animated
} from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

// İnce bir çizgi oluşturan bileşen
const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 5 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1 }}></View>
        </View>
    )
}

// Kitap detaylarını gösteren bileşen
const BookDetail = ({ route, navigation }) => {

    const [book, setBook] = React.useState(null);
    const [isBookAdded, setIsBookAdded] = React.useState(false);

    const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
    const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = React.useState(0);

    const indicator = new Animated.Value(0);

    React.useEffect(() => {
        let { book } = route.params;
        setBook(book);
        checkIfBookIsInLibrary(book);
    }, [book]);

    // Kütüphanede olup olmadığını kontrol eden fonksiyon
    const checkIfBookIsInLibrary = async (book) => {
        try {
            let library = await AsyncStorage.getItem('library');
            library = library ? JSON.parse(library) : [];
            const isAdded = library.some(item => item.bookId === book.bookId);
            setIsBookAdded(isAdded);
        } catch (error) {
            console.error(error);
        }
    }

    // Kitabı kütüphaneye ekleyen fonksiyon
    const addToLibrary = async (book) => {
        try {
            let library = await AsyncStorage.getItem('library');
            library = library ? JSON.parse(library) : [];
            library.push(book);
            await AsyncStorage.setItem('library', JSON.stringify(library));
            setIsBookAdded(true);
            console.log("Kitap kütüphaneye eklendi");
        } catch (error) {
            console.error(error);
        }
    }

    // Kitabı kütüphaneden çıkaran fonksiyon
    const removeFromLibrary = async (book) => {
        try {
            let library = await AsyncStorage.getItem('library');
            library = library ? JSON.parse(library) : [];
            library = library.filter(item => item.bookId !== book.bookId);
            await AsyncStorage.setItem('library', JSON.stringify(library));
            setIsBookAdded(false);
            console.log("Kitap kütüphaneden çıkarıldı");
        } catch (error) {
            console.error(error);
        }
    }

    // Kitap bilgileri bölümünü render eden fonksiyon
    function renderBookInfoSection() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={book.bookCover}
                    resizeMode="cover"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }}
                />

                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        backgroundColor: book.backgroundColor
                    }}
                >
                </View>

                <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 80, alignItems: 'flex-end' }}>
                    <TouchableOpacity
                        style={{ marginLeft: SIZES.base }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.back_arrow_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: book.navTintColor
                            }}
                        />
                    </TouchableOpacity>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ ...FONTS.h2, color: book.navTintColor }}>Kitap Detayları</Text>
                    </View>
                </View>

                <View style={{ flex: 8, paddingTop: SIZES.padding2, alignItems: 'center' }}>
                    <Image
                        source={book.bookCover}
                        resizeMode="contain"
                        style={{
                            flex: 1,
                            width: 150,
                            height: "auto"
                        }}
                    />
                </View>

                <View style={{ flex: 1.8, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ ...FONTS.h2, color: book.navTintColor }}>{book.bookName}</Text>
                    <Text style={{ ...FONTS.body3, color: book.navTintColor }}>{book.author}</Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 15,
                        margin: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: "rgba(0,0,0,0.3)"
                    }}
                >
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.rating}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Puan</Text>
                    </View>

                    <LineDivider />

                    <View style={{ flex: 1, paddingHorizontal: SIZES.radius, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.pageNo}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Sayfa</Text>
                    </View>

                    <LineDivider />

                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.language}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.white }}>Çevirilen Dil</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderBookDescription() {

        const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ? scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight : scrollViewVisibleHeight

        const difference = scrollViewVisibleHeight > indicatorSize ? scrollViewVisibleHeight - indicatorSize : 1

        return (
            <View style={{ flex: 1, flexDirection: 'row', padding: SIZES.padding }}>
                <View style={{ width: 4, height: "100%", backgroundColor: COLORS.white }}>
                    <Animated.View
                        style={{
                            width: 4,
                            height: indicatorSize,
                            backgroundColor: COLORS.lightGray4,
                            transform: [{
                                translateY: Animated.multiply(indicator, scrollViewVisibleHeight / scrollViewWholeHeight).interpolate({
                                    inputRange: [0, difference],
                                    outputRange: [0, difference]
                                })
                            }]
                        }}
                    />
                </View>

                <ScrollView
                    contentContainerStyle={{ paddingLeft: SIZES.padding2 }}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onContentSizeChange={(width, height) => {
                        setScrollViewWholeHeight(height)
                    }}
                    onLayout={({ nativeEvent: { layout: { x, y, width, height } } }) => {
                        setScrollViewVisibleHeight(height)
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: indicator } } }],
                        { useNativeDriver: false }
                    )}
                >
                    <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding }}>Genel Bilgi</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.DarkGray }}>{book.description}</Text>
                </ScrollView>
            </View>
        )
    }

    function renderBottomButton() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        backgroundColor: isBookAdded ? COLORS.gray : COLORS.primary,
                        marginHorizontal: SIZES.base,
                        marginVertical: SIZES.base,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => {
                        if (isBookAdded) {
                            removeFromLibrary(book);
                        } else {
                            addToLibrary(book);
                        }
                    }}
                >
                    <Image
                        source={icons.bookmark_icon}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.white
                        }}
                    />
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>{isBookAdded ? "Eklendi" : "Kütüphaneme Ekle"}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    if (book) {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.black }}>
                <View style={{ flex: 4 }}>
                    {renderBookInfoSection()}
                </View>
                <View style={{ flex: 2 }}>
                    {renderBookDescription()}
                </View>
                <View style={{ height: 70, marginBottom: 30 }}>
                    {renderBottomButton()}
                </View>
            </View>
        )
    } else {
        return (<></>)
    }
}

export default BookDetail;
