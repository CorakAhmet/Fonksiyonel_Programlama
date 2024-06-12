import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookmarksScreen = () => {
    const [library, setLibrary] = useState([]);

    useEffect(() => {
        // Kütüphane verilerini al
        const getLibrary = async () => {
            try {
                let libraryData = await AsyncStorage.getItem('library');
                libraryData = libraryData ? JSON.parse(libraryData) : [];
                setLibrary(libraryData);
            } catch (error) {
                console.error('Kütüphane alınırken bir hata oluştu:', error);
            }
        };

        getLibrary();
    }, []);

    const renderBookItem = ({ item }) => (
        <View style={{ padding: 10 }}>
            <Text>{item.bookName}</Text>
            <Text>{item.author}</Text>
            {/* Diğer kitap bilgileri buraya eklenebilir */}
        </View>
    );

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Kütüphanem</Text>
            <FlatList
                data={library}
                renderItem={renderBookItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default BookmarksScreen;
