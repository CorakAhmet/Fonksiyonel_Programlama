
import AsyncStorage from '@react-native-async-storage/async-storage';

const addToLibrary = async (book) => {
    try {
        let library = await AsyncStorage.getItem('library');
        library = library ? JSON.parse(library) : [];
        library.push(book);
        await AsyncStorage.setItem('library', JSON.stringify(library));
        alert('Kitap kütüphanene eklendi!');
    } catch (error) {
        console.error('Kitap eklenirken bir hata oluştu:', error);
    }
};

export default addToLibrary;
