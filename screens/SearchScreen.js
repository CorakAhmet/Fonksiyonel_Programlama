import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    StyleSheet
} from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const SearchScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);

    // Kitap verileri (Home sayfasından alınan kitaplar)
    const allBooks = [
         // Kitap detayları
        {
            id: 1,
            bookName: "Hayvan Çiftliği",
            bookCover: images.hayvanciftligi,
            rating: "4.4",
            language: "1544",
            pageNo: 152,
            author: "George Orwell",
            genre: ["Roman", "Bilim", "Macera"],
            description: "İngiliz yazar George Orwell (1903-1950), ülkemizde daha çok Bindokuzyüzseksendört adlı kitabıyla tanınır. Hayvan Çiftliği, onun çağdaş klasikler arasına girmiş ikinci ünlü yapıtıdır. 1940'lardaki 'reel sosyalizm'in eleştirisi olan bu roman, dünya edebiyatında 'yergi' türünün başyapıtlarından biridir. Hayvan Çiftliği'nin kişileri hayvanlardır. Bir çiftlikte yaşayan hayvanlar, kendilerini sömüren insanlara başkaldırıp çiftliğin yönetimini ele geçirirler. Amaçları daha eşitlikçi bir topluluk oluşturmaktır. Aralarında en akıllı olanlar domuzlar; kısa sürede önder bir takım oluştururlar, devrimi de onlar yolundan saptırırlar. Ne yazık ki insanlardan daha baskıcı, daha acımasız bir diktatörlük kurulmuştur artık. George Orwell, bu romanında tarihsel bir gerçeği eleştirmektedir. Romandaki önder domuzun, düpedüz Stalin'i simgelediği açıkça görülecektir. Öbür kişiler bire bir belli olmasalar da, bir diktatörlük ortamındna olabilecek kişilerdir. Romanın alt başlığı Bir Peri Masalı'dır. Küçükleri eğlendirecek bir peri masalı değildir; ama roman, bir masal anlatımıyla yazılmıştır.",
            backgroundColor: "rgba(240,240,232,0.9)",
            navTintColor: "#000"
        },
        {
            id: 2,
            bookName: "Üç Cisim Prblemi",
            bookCover: images.uccisimproblemi,
            rating: "3.5",
            language: "Eng",
            pageNo: 416,
            author: "Cixin Liu",
            genre: ["Bilim", "Macera", "Roman"],
            description: "Bilim kurgu türünde bir roman olup, Çinli yazar Liu Cixin tarafından kaleme alınmıştır. Hikaye, bir bilim kadınının Çin'den günümüzdeki dünyaya geçiş yapmasını ve insanlığın, dünya dışı varlıklarla karşı karşıya gelmesini anlatır. İki farklı gezegen arasında kurulan bir iletişim köprüsü ve bu köprü üzerinden gelen mesajlarla başlayan olaylar, romanın temelini oluşturur. Roman, bilimsel kavramlarla dolu karmaşık bir kurguya sahiptir ve okuyuculara bilim kurgu macerasının yanı sıra insan doğası, teknolojinin etkileri ve evrensel sorunlar üzerine düşündürücü sorular da sunar.",
            backgroundColor: "rgba(240,240,232,0.9)",
            navTintColor: "#000"
        },
        {
            id: 3,
            bookName: "Ustalık",
            bookCover: images.ustalik,
            rating: "4.7",
            language: "Eng",
            pageNo: 416,
            author: "Robert Greene",
            genre: ["Kişisel Gelişim", "Eğitim"],
            description: "Herkesin nasıl olduğuna bakmaksızın, sahip olduğu karaktere uygun bir yaşam sürmesine izin vermelisiniz ve değiştirmeye çabalamak ya da lanetlemek yerine bu karakterinden doğasının izin verdiği biçimde yararlanmalısınız. Yaşayın ve bırakın yaşasınlar atasözünün gerçek anlamı budur... İnsanların davranışlarına öfkelenmek, yolunuza yuvarlandığı için bir taşa kızmak kadar saçmadır. Çoğu insan açısından yapabileceğimiz en akılcı davranış, değiştiremeyeceklerinizden yararlanmaya karar vermek.",
            backgroundColor: "rgba(247,239,219,0.9)",
            navTintColor: "#000"
        },
        {
            id: 4,
            bookName: "Dünya Tarihi 101-Bir Çırpıda Uygarlıklar Tarihi",
            bookCover: images.dunyatarihi,
            rating: "7.2",
            language: "Eng",
            pageNo: 248,
            author: "Tom Head",
            genre: ["Tarih", "Bilim"],
            description: "Tarih şaşırtıcı olaylar, güçlü liderler, entrikalar ve ilginç keşiflerle dolu binlerce yıllık bir maceradır. Buna rağmen tarih kitapları çoğunlukla tekdüze, sıkıcı ve eğlenceli olmaktan alabildiğine uzaktır. Dünya Tarihi 101 ise bütün bu sıkıcı detayları bir kenara bırakıyor ve sizi uygarlık tarihine doğru büyüleyici bir yolculuğa çıkarıyor.",
            backgroundColor: "rgba(119,77,143,0.9)",
            navTintColor: "#FFF"
        },
        {
            id: 5,
            bookName: "Momo",
            bookCover: images.momo,
            rating: 8.4,
            language: "Eng",
            pageNo: 304,
            author: "Michael Ende",
            genre: ["Roman", "Macera", "Drama"],
            description: "Bir gün hayaletimsi topluluk “duman adamlar” ortaya çıkar. İnce hesaplı planlar kurup insanların zamanını çalarlar. Onları durduracak tek kişiyse Momo’dur. Momo elinde bir çiçek, koltuğunun altında bir kaplumbağa ve gizemli Hora Usta’nın da yardımıyla koskoca duman adamlar ordusunun karşısında tek başına durur. Acaba Momo, zamanı çalan adamları tek başına alt edebilecek midir?Toplumumuz ve günümüz insanının zaman algısı ve zamanı okuması üzerine bir masal olan Momo’yla Michael Ende, Alman Gençlik Edebiyatı Ödülü’ne layık görülmüştür. Pek çok kez sinemaya uyarlanan Momo, kırktan fazla dile çevrilmiş, tüm dünyada 7 milyonun üzerinde satılmıştır.",
            backgroundColor: "rgba(240,240,232,0.9)",
            navTintColor: "#000"
        },
        {
            id: 6,
            bookName: "Ikigai",
            bookCover: images.ikigai,
            rating: 7.6,
            language: "Eng",
            pageNo: 176,
            author: "Francesc Miralles",
            genre: ["Kişisel Gelişim"],
            description: "Uluslararası çoksatan bir rehber olan Ikigai’yle her gününüz bir anlam kazansın. Japonlar herkesin bir ikigaisi olduğuna inanır, her sabah yataktan kalkmaları için bir sebepleri vardır. İlham verici ve rahatlatıcı bu kitap sizlere kendi ikigainizi keşfetmeniz için gerekli tüm bilgileri veriyor. Aceleci davranmamanızı, hayat gayenizi keşfetmenizi, ilişkilerinizi canlandırmanızı ve kendinizi tutkularınıza adamanızı sağlıyor.",
            backgroundColor: "rgba(247,239,219,0.9)",
            navTintColor: "#000"
        },
        {
            id: 7,
            bookName: "Beden Dili",
            bookCover: images.bedendili,
            rating: 8.2,
            language: "Eng",
            pageNo: 300,
            author: "Jeo Navarr0",
            genre: ["Kişisel Gelişim", "Eğitim"],
            description: "İnsanları 'okuma'nın en hızlı yöntemi bu kitapta...Karşınızdakinin bedenine bakarak aklından geçenleri okumanız mümkün. Duygu ve düşünceleri çözümlemek, insanları doğru tanımak, tuzağa düşmemek, yalanı ortaya çıkarmak için beden dilini bilmeniz yeterli. Ayrıca beden dilinizi kullanarak patronunuz, aileniz, arkadaşlarınız ve diğer insanların sizinle ilgili düşüncelerini de değiştirebilirsiniz. Gerçek hisler yüzde gizlidir. Başparmaklar, ayaklar ve gözbebekleri ruh halimizi ortaya koyar. Yanınızdakine dokunmanız ne anlama gelir? Beden dilinizle terfi edebilir misiniz? Güvenle parmak uçlarımızın ne ilgisi var? Kadınlar beden dilini kullanarak neleri gizler?",
            backgroundColor: "rgba(119,77,143,0.9)",
            navTintColor: "#FFF"
        },
    ];

     // Arama metnine göre kitapları filtreleyen fonksiyon
    const handleSearch = (text) => {
        setSearchText(text);
        if (text) {
             // Arama metniyle başlayan kitapları
            const filtered = allBooks.filter((book) =>
                book.bookName.toLowerCase().startsWith(text.toLowerCase())
            );
            setFilteredBooks(filtered);
        } else {
            setFilteredBooks([]);
        }
    };

    // Her bir kitabı render eden fonksiyon
    const renderBookItem = ({ item }) => (
        <TouchableOpacity
            style={styles.bookContainer}
            onPress={() => navigation.navigate("BookDetail", { book: item })}
        >
            <Image
                source={item.bookCover}
                resizeMode="cover"
                style={styles.bookCover}
            />
            <View style={styles.bookInfo}>
                <Text style={styles.bookName}>{item.bookName}</Text>
                <Text style={styles.bookAuthor}>Yazar : {item.author}</Text>
                <Text style={styles.bookRating}>Puan: {item.rating}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Hangi Kitabı Arıyorsunuz?"
                    value={searchText}
                    onChangeText={handleSearch}
                />
            </View>
            <FlatList
                data={filteredBooks}
                renderItem={renderBookItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.bookList}
            />
        </SafeAreaView>
    );
};

// Stil tanımlamaları
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    searchContainer: {
        margin: SIZES.padding,
    },
    searchInput: {
        height: 50,
        borderColor: COLORS.gray,
        borderWidth: 3,
        borderRadius: SIZES.radius,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
    },
    bookList: {
        padding: SIZES.padding,
    },
    bookContainer: {
        flexDirection: 'row',
        marginBottom: SIZES.padding,
        borderColor: COLORS.gray,
        borderWidth: 3,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.Azure,
    },
    bookCover: {
        width: 100,
        height: 150,
        borderTopLeftRadius: SIZES.radius,
        borderBottomLeftRadius: SIZES.radius,
    },
    bookInfo: {
        flex: 1,
        padding: SIZES.padding,
    },
    bookName: {
        ...FONTS.h3,
        color: COLORS.black,
    },
    bookAuthor: {
        ...FONTS.body4,
        color: COLORS.black,
        marginTop: SIZES.base,
    },
    bookRating: {
        ...FONTS.body4,
        color: COLORS.black,
        marginTop: SIZES.base,
    },
});

export default SearchScreen;
