import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FONTS, COLORS, SIZES } from "../constants";

const Library = ({ navigation }) => {

    const [library, setLibrary] = React.useState([]);

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            loadLibrary();
        });

        return unsubscribe;
    }, [navigation]);

    const loadLibrary = async () => {
        try {
            let library = await AsyncStorage.getItem('library');
            library = library ? JSON.parse(library) : [];
            setLibrary(library);
        } catch (error) {
            console.error(error);
        }
    }

    const removeFromLibrary = async (bookId) => {
        try {
            let library = await AsyncStorage.getItem('library');
            library = library ? JSON.parse(library) : [];
            library = library.filter(item => item.bookId !== bookId);
            await AsyncStorage.setItem('library', JSON.stringify(library));
            setLibrary(library);
        } catch (error) {
            console.error(error);
        }
    }

    const renderItem = ({ item }) => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: SIZES.base,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2,
                    padding: SIZES.radius,
                }}
            >
                <Image
                    source={item.bookCover}
                    resizeMode="cover"
                    style={{
                        width: 100,
                        height: 150,
                        borderRadius: SIZES.radius
                    }}
                />

                <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                    <TouchableOpacity onPress={() => navigation.navigate("BookDetail", { book: item })}>
                        <Text style={{ ...FONTS.h2 }}>{item.bookName}</Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.darkGray }}>{item.author}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.darkGray }}>{item.pageNo} sayfa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: SIZES.base }}
                        onPress={() => removeFromLibrary(item.bookId)}
                    >
                        <Text style={{ ...FONTS.body3, color: COLORS.primary }}>Kütüphaneden Kaldır</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, padding: SIZES.padding, backgroundColor: COLORS.white }}>
            <Text style={{ ...FONTS.h1, marginBottom: SIZES.padding }}>Kütüphanem</Text>
            <FlatList
                data={library}
                renderItem={renderItem}
                keyExtractor={item => `${item.bookId}`}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Library;
