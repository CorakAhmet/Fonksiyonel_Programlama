import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList
} from 'react-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';


const Home = ({ navigation }) => {

     const bookhayvanciftligi = {
        id: 1,
        bookName: "Hayvan Çiftliği",
        bookCover: images.hayvanciftligi,
        rating: "4 sa. 18 dk",
        yayintarihi: "1544",
        pageNo: 152,
        author: "George Orwell",
        genre: [
            "Romance", "Adventure", "Drama","Tarih"
        ],
        readed: "12k",
        description: "İngiliz yazar George Orwell (1903-1950), ülkemizde daha çok Bindokuzyüzseksendört adlı kitabıyla tanınır. Hayvan Çiftliği, onun çağdaş klasikler arasına girmiş ikinci ünlü yapıtıdır. 1940'lardaki 'reel sosyalizm'in eleştirisi olan bu roman, dünya edebiyatında 'yergi' türünün başyapıtlarından biridir. Hayvan Çiftliği'nin kişileri hayvanlardır. Bir çiftlikte yaşayan hayvanlar, kendilerini sömüren insanlara başkaldırıp çiftliğin yönetimini ele geçirirler. Amaçları daha eşitlikçi bir topluluk oluşturmaktır. Aralarında en akıllı olanlar domuzlar; kısa sürede önder bir takım oluştururlar, devrimi de onlar yolundan saptırırlar. Ne yazık ki insanlardan daha baskıcı, daha acımasız bir diktatörlük kurulmuştur artık. George Orwell, bu romanında tarihsel bir gerçeği eleştirmektedir. Romandaki önder domuzun, düpedüz Stalin'i simgelediği açıkça görülecektir. Öbür kişiler bire bir belli olmasalar da, bir diktatörlük ortamındna olabilecek kişilerdir. Romanın alt başlığı Bir Peri Masalı'dır. Küçükleri eğlendirecek bir peri masalı değildir; ama roman, bir masal anlatımıyla yazılmıştır.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    const bookuccisimproblemi = {
        id: 5,
        bookName: "Üç Cisim Prblemi",
        bookCover: images.uccisimproblemi,
        rating: "11 sa. 47 dk.",
        yayintarihi: "2020",
        pageNo: 416,
        author: "Cixin Liu",
        genre: [
            "Romance", "Adventure", "Drama"
        ],
        readed: "12k",
        description: "Bilim kurgu türünde bir roman olup, Çinli yazar Liu Cixin tarafından kaleme alınmıştır. Hikaye, bir bilim kadınının Çin'den günümüzdeki dünyaya geçiş yapmasını ve insanlığın, dünya dışı varlıklarla karşı karşıya gelmesini anlatır. İki farklı gezegen arasında kurulan bir iletişim köprüsü ve bu köprü üzerinden gelen mesajlarla başlayan olaylar, romanın temelini oluşturur. Roman, bilimsel kavramlarla dolu karmaşık bir kurguya sahiptir ve okuyuculara bilim kurgu macerasının yanı sıra insan doğası, teknolojinin etkileri ve evrensel sorunlar üzerine düşündürücü sorular da sunar.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    const bookustalik = {
        id: 2,
        bookName: "Ustalık",
        bookCover: images.ustalik,
        rating: "11 sa. 47 dk.",
        yayintarihi: "Eng",
        pageNo: 416,
        author: "Robert Greene",
        genre: [
            "Adventure", "Drama"
        ],
        readed: "13k",
        description: " Herkesin nasıl olduğuna bakmaksızın, sahip olduğu karaktere uygun bir yaşam sürmesine izin vermelisiniz ve değiştirmeye çabalamak ya da lanetlemek yerine bu karakterinden doğasının izin verdiği biçimde yararlanmalısınız. Yaşayın ve bırakın yaşasınlar atasözünün gerçek anlamı budur... İnsanların davranışlarına öfkelenmek, yolunuza yuvarlandığı için bir taşa kızmak kadar saçmadır. Çoğu insan açısından yapabileceğimiz en akılcı davranış, değiştiremeyeceklerinizden yararlanmaya karar vermek.",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000"
    }

    const bookdunyatarihi = {
        id: 3,
        bookName: "Dünya Tarihi 101-Bir Çırpıda Uygarlıklar Tarihi",
        bookCover: images.dunyatarihi,
        rating: "7 sa. 2 dk.",
        yayintarihi: "Eng",
        pageNo: 110,
        author: "Ana C Bouvier",
        genre: [
            "Drama", "Adventure", "Romance"
        ],
        readed: "13k",
        description: "Tarih şaşırtıcı olaylar, güçlü liderler, entrikalar ve ilginç keşiflerle dolu binlerce yıllık bir maceradır. Buna rağmen tarih kitapları çoğunlukla tekdüze, sıkıcı ve eğlenceli olmaktan alabildiğine uzaktır. Dünya Tarihi 101 ise bütün bu sıkıcı detayları bir kenara bırakıyor ve sizi uygarlık tarihine doğru büyüleyici bir yolculuğa çıkarıyor.",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const myBooksData = [
        {
            ...bookhayvanciftligi,
            completion: "75%",
            lastRead: "3d 5h",

        },
        {
            ...bookuccisimproblemi,
            completion: "75%",
            lastRead: "3d 5h",

        },
        {
            ...bookustalik,
            completion: "23%",
            lastRead: "10d 5h",

        },
        {
            ...bookdunyatarihi,
            completion: "10%",
            lastRead: "1d 2h",

        }
    ]

    const categoriesData = [
        {
            id: 1,
            categoryName: "En Çok Satanlar",
            books: [
                bookhayvanciftligi, bookustalik, bookuccisimproblemi, bookdunyatarihi
            ]
        },
        {
            id: 2,
            categoryName: "The Latest",
            books: [
                bookustalik
            ]
        },
        {
            id: 3,
            categoryName: "Coming Soon",
            books: [
                bookdunyatarihi
            ]
        },
        
    ]

    
    const [myBooks, setMyBooks] = React.useState(myBooksData);
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(1);

   

   

    function renderMyBookSection(myBooks) {

        const renderItem = ({ item, index }) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        marginLeft: index == 0 ? SIZES.padding : 0,
                        marginRight: SIZES.radius
                    }}
                    onPress={() => navigation.navigate("BookDetail", {
                        book: item
                    })}
                >
                    {/* Kitap Kapağı */}
                    <Image
                        source={item.bookCover}
                        resizeMode="cover"
                        style={{
                            width: 180,
                            height: 250,
                            borderRadius: 20
                        }}
                    />
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {/* Başlık */}
                <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>Kitaplar</Text>

                   
                </View>

                {/* Kitaplar */}
                <View style={{ flex: 2, marginTop: SIZES.padding }}>
                    <FlatList
                        data={myBooks}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }

    function renderCategoryHeader() {

        const renderItem = ({ item }) => {
             {/* Kitap kategorilerini görme */}
            return (
                <TouchableOpacity
                    style={{ flex: 1, marginRight: SIZES.padding }}
                    onPress={() => setSelectedCategory(item.id)}
                >
                    {
                        selectedCategory == item.id &&
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>{item.categoryName}</Text>
                    }
                    {
                        selectedCategory != item.id &&
                        <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>{item.categoryName}</Text>
                    }
                </TouchableOpacity>
            )
        }
       
        return (
            <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                />
            </View>
        )
    }

    function renderCategoryData() {
        var books = []

        let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory)

        if (selectedCategoryBooks.length > 0) {
            books = selectedCategoryBooks[0].books
        }

        const renderItem = ({ item }) => {
            return (
                <View style={{ marginVertical: SIZES.base }}>
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row' }}
                        onPress={() => navigation.navigate("BookDetail", {
                            book: item
                        })}
                    >
                        {/* Kitap Kapağı */}
                        <Image
                            source={item.bookCover}
                            resizeMode="cover"
                            style={{ width: 100, height: 150, borderRadius: 10 }}
                        />

                        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                            {/* Kitap ve yazar ismi */}
                            <View>
                                <Text style={{ paddingRight: SIZES.padding, ...FONTS.h2, color: COLORS.white }}>{item.bookName}</Text>
                                <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{item.author}</Text>
                            </View>

                            {/* Tür */}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                                {
                                    item.genre.includes("Adventure") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Macera</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("BilimKurgu") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Bilim Kurgu</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Tarih") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Tarih</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Romance") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>Roman</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("KisiselGelisim") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Kişisel Gelişim</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Drama") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Dram</Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </TouchableOpacity> 
                </View>
            )
        }

        return (
            <View style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={books}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.Bej }}>
           

            {/* Genel Bölüm */}
            <ScrollView style={{ marginTop: SIZES.radius }}>
                {/* Kitaplar bölümü */}
                <View>
                    {renderMyBookSection(myBooks)}
                </View>

                {/* Kategoriler bölümü */}
                <View style={{ marginTop: SIZES.padding }}>
                    <View>
                        {renderCategoryHeader()}
                    </View>
                    <View>
                        {renderCategoryData()}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;