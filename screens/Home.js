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




// Ana Ekran Bileşeni
const Home = ({ navigation }) => {


    // Kitap verileri (örnek kitaplar)
    const bookhayvanciftligi = {
        id: 1,
        bookName: "Hayvan Çiftliği",
        bookCover: images.hayvanciftligi,
        rating: "4.4",
        language: "1544",
        pageNo: 152,
        author: "George Orwell",
        genre: [
            "Roman", "Bilim","Macera"
        ],
        description: "İngiliz yazar George Orwell (1903-1950), ülkemizde daha çok Bindokuzyüzseksendört adlı kitabıyla tanınır. Hayvan Çiftliği, onun çağdaş klasikler arasına girmiş ikinci ünlü yapıtıdır. 1940'lardaki 'reel sosyalizm'in eleştirisi olan bu roman, dünya edebiyatında 'yergi' türünün başyapıtlarından biridir. Hayvan Çiftliği'nin kişileri hayvanlardır. Bir çiftlikte yaşayan hayvanlar, kendilerini sömüren insanlara başkaldırıp çiftliğin yönetimini ele geçirirler. Amaçları daha eşitlikçi bir topluluk oluşturmaktır. Aralarında en akıllı olanlar domuzlar; kısa sürede önder bir takım oluştururlar, devrimi de onlar yolundan saptırırlar. Ne yazık ki insanlardan daha baskıcı, daha acımasız bir diktatörlük kurulmuştur artık. George Orwell, bu romanında tarihsel bir gerçeği eleştirmektedir. Romandaki önder domuzun, düpedüz Stalin'i simgelediği açıkça görülecektir. Öbür kişiler bire bir belli olmasalar da, bir diktatörlük ortamındna olabilecek kişilerdir. Romanın alt başlığı Bir Peri Masalı'dır. Küçükleri eğlendirecek bir peri masalı değildir; ama roman, bir masal anlatımıyla yazılmıştır.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    const bookuccisimproblemi = {
        id: 2,
        bookName: "Üç Cisim Prblemi",
        bookCover: images.uccisimproblemi,
        rating: "3.5",
        language: "Eng",
        pageNo: 416,
        author: "Cixin Liu",
        genre: [
            "Bilim", "Macera", "Roman"
        ],
        description: "Bilim kurgu türünde bir roman olup, Çinli yazar Liu Cixin tarafından kaleme alınmıştır. Hikaye, bir bilim kadınının Çin'den günümüzdeki dünyaya geçiş yapmasını ve insanlığın, dünya dışı varlıklarla karşı karşıya gelmesini anlatır. İki farklı gezegen arasında kurulan bir iletişim köprüsü ve bu köprü üzerinden gelen mesajlarla başlayan olaylar, romanın temelini oluşturur. Roman, bilimsel kavramlarla dolu karmaşık bir kurguya sahiptir ve okuyuculara bilim kurgu macerasının yanı sıra insan doğası, teknolojinin etkileri ve evrensel sorunlar üzerine düşündürücü sorular da sunar.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    const bookustalik = {
        id:3,
        bookName: "Ustalık",
        bookCover: images.ustalik,
        rating: "4.7",
        language: "Eng",
        pageNo: 416,
        author: "Robert Greene",
        genre: [
            "Kişisel Gelişim", "Eğitim"
        ],
        description: " Herkesin nasıl olduğuna bakmaksızın, sahip olduğu karaktere uygun bir yaşam sürmesine izin vermelisiniz ve değiştirmeye çabalamak ya da lanetlemek yerine bu karakterinden doğasının izin verdiği biçimde yararlanmalısınız. Yaşayın ve bırakın yaşasınlar atasözünün gerçek anlamı budur... İnsanların davranışlarına öfkelenmek, yolunuza yuvarlandığı için bir taşa kızmak kadar saçmadır. Çoğu insan açısından yapabileceğimiz en akılcı davranış, değiştiremeyeceklerinizden yararlanmaya karar vermek.",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000"
    }

    const bookdunyatarihi = {
        id: 4,
        bookName: "Dünya Tarihi 101-Bir Çırpıda Uygarlıklar Tarihi",
        bookCover: images.dunyatarihi,
        rating: "7.2",
        language: "Eng",
        pageNo: 248,
        author: "Tom Head",
        genre: [
            "Tarih", "Bilim"
        ],
        description: "Tarih şaşırtıcı olaylar, güçlü liderler, entrikalar ve ilginç keşiflerle dolu binlerce yıllık bir maceradır. Buna rağmen tarih kitapları çoğunlukla tekdüze, sıkıcı ve eğlenceli olmaktan alabildiğine uzaktır. Dünya Tarihi 101 ise bütün bu sıkıcı detayları bir kenara bırakıyor ve sizi uygarlık tarihine doğru büyüleyici bir yolculuğa çıkarıyor.",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const bookmomo = {
        id: 5,
        bookName: "Momo",
        bookCover: images.momo,
        rating: 8.4,
        language: "Eng",
        pageNo: 304,
        author: "Michael Ende",
        genre: [
            "Roman", "Macera", "Drama"
        ],
        description: "Bir gün hayaletimsi topluluk “duman adamlar” ortaya çıkar. İnce hesaplı planlar kurup insanların zamanını çalarlar. Onları durduracak tek kişiyse Momo’dur. Momo elinde bir çiçek, koltuğunun altında bir kaplumbağa ve gizemli Hora Usta’nın da yardımıyla koskoca duman adamlar ordusunun karşısında tek başına durur. Acaba Momo, zamanı çalan adamları tek başına alt edebilecek midir?Toplumumuz ve günümüz insanının zaman algısı ve zamanı okuması üzerine bir masal olan Momo’yla Michael Ende, Alman Gençlik Edebiyatı Ödülü’ne layık görülmüştür. Pek çok kez sinemaya uyarlanan Momo, kırktan fazla dile çevrilmiş, tüm dünyada 7 milyonun üzerinde satılmıştır.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    const bookikigai = {
        id: 6,
        bookName: "Ikigai",
        bookCover: images.ikigai,
        rating: 7.6,
        language: "Eng",
        pageNo: 176,
        author: "Francesc Miralles",
        genre: [
            "Kişisel Gelişim"
        ],
        description: "Uluslararası çoksatan bir rehber olan Ikigai’yle her gününüz bir anlam kazansın. Japonlar herkesin bir ikigaisi olduğuna inanır, her sabah yataktan kalkmaları için bir sebepleri vardır. İlham verici ve rahatlatıcı bu kitap sizlere kendi ikigainizi keşfetmeniz için gerekli tüm bilgileri veriyor. Aceleci davranmamanızı, hayat gayenizi keşfetmenizi, ilişkilerinizi canlandırmanızı ve kendinizi tutkularınıza adamanızı sağlıyor.",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000"
    }

    const bookbedendili = {
        id: 7,
        bookName: "Beden Dili",
        bookCover: images.bedendili,
        rating: 8.2,
        language: "Eng",
        pageNo: 300,
        author: "Jeo Navarr0",
        genre: [
            "Kişisel Gelişim", "Eğitim"
        ],
        description: "İnsanları 'okuma'nın en hızlı yöntemi bu kitapta...Karşınızdakinin bedenine bakarak aklından geçenleri okumanız mümkün. Duygu ve düşünceleri çözümlemek, insanları doğru tanımak, tuzağa düşmemek, yalanı ortaya çıkarmak için beden dilini bilmeniz yeterli. Ayrıca beden dilinizi kullanarak patronunuz, aileniz, arkadaşlarınız ve diğer insanların sizinle ilgili düşüncelerini de değiştirebilirsiniz. Gerçek hisler yüzde gizlidir. Başparmaklar, ayaklar ve gözbebekleri ruh halimizi ortaya koyar. Kendimize duyduğumuz güveni konuşmalarımızdan önce bedenimiz yansıtır. Etkili bir el sıkışma birçok kapıyı açar. Karşımızdakini ikna etmenin en etkili yöntemi beden dilini kullanmaktır. İnsanlara güven vermek göründüğü kadar zor değildir. Otoriteyi hem kurmak hem de yıkmak beden dili ile mümkündür. Eski FBI ajanı Navarro'nun profesyonel deneyimleri ile Princeton Üniversitesinde psikoloji eğitimi alan Marvin Karlins'in bilimsel çalışmalarını birleştiren bu kitap, beden dilini öğrenip kullanarak dünyanızı nasıl kontrol altında tutacağınızı anlatıyor.",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
        
    }

    // Kullanıcının kitap verileri
    const myBooksData = [
        { ...bookmomo, completion: "75%", lastRead: "3d 5h" },
        { ...bookbedendili, completion: "23%", lastRead: "10d 5h" },
        { ...bookikigai, completion: "10%", lastRead: "1d 2h" },
        { ...bookdunyatarihi, completion: "75%", lastRead: "3d 5h" },
        { ...bookhayvanciftligi, completion: "75%", lastRead: "3d 5h" },
        { ...bookuccisimproblemi, completion: "75%", lastRead: "3d 5h" },
        { ...bookustalik, completion: "10%", lastRead: "1d 2h" }
    ]

    // Kategori verileri
    const categoriesData = [
        {
            id: 1,
            categoryName: "En Çok Okunanlar",
            books: [
                bookmomo, bookhayvanciftligi, bookdunyatarihi,bookustalik,bookbedendili
            ]
        },
        {
            id: 2,
            categoryName: "Yeni Gelenler",
            books: [
                bookuccisimproblemi,bookikigai
            ]
        },
        {
            id: 3,
            categoryName: "En Çok Satanlar",
            books: [
                bookustalik
            ]
        },
    ]

    //State Tanımlamaları
   
    const [myBooks, setMyBooks] = React.useState(myBooksData);
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    
   

    
    

    // Kitaplarım bölümü render fonksiyonu
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
                    {/* Kitap Kapak Görselir */}
                    <Image
                        source={item.bookCover}
                        resizeMode="cover"
                        style={{
                            width: 110,
                            height: 155,
                            borderRadius: 20
                        }}
                    />                    
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {/* Bölüm Başlığı*/}
                <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>Mevcut Kitaplar</Text>
                </View>

                {/* Kitap Listesi */}
                <View style={{ flex: 1, marginTop: SIZES.padding }}>
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
    
    // Kategoriler bölümü render fonksiyonu
    function renderCategoryHeader() {

        const renderItem = ({ item }) => {
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
    // Kitap Kategorisi Bölümü render fonksiyonu
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
                        {/* Kitap Kapak Görseli */}
                        <Image
                            source={item.bookCover}
                            resizeMode="cover"
                            style={{ width: 100, height: 150, borderRadius: 10 }}
                        />

                        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                            {/* Kitap adı ve yazar */}
                            <View>
                                <Text style={{ paddingRight: SIZES.padding, ...FONTS.h2, color: COLORS.black }}>{item.bookName}</Text>
                                <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{item.author}</Text>
                            </View>

                           

                            {/* Türü*/}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                                {
                                    item.genre.includes("Macera") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.DarkSeaGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.white }}>Macera</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Tarih") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.Azure, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.black }}>Tarih</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Eğitim") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.Yellow }}>Eğitim</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Felsefe") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Felsefe</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Şiir") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Şiir</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Kişisel Gelişim") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor:"#ffe4b5", height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Kişisel Gelişim</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Bilim") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Bilim</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Roman") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>Roman</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Drama") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Drama</Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </TouchableOpacity>

                    
                </View>
            )
        }

        {/* Kategorilerdeki kitapları gösterme */}
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
        <SafeAreaView style={{ flex: 1, backgroundColor: "#B0D4E0" }}>
            {/* Uygulama Logosu ve Kitaplar Bölümü */}
            <ScrollView style={{ marginTop: SIZES.radius }}>
                {/* Uygulama Logosu */}
                <View style={{ height: 100, flexDirection: 'row', alignItems: 'center', paddingHorizontal: SIZES.padding }}>
                <Image
                    source={images.pirtuk}
                    resizeMode="contain"
                    style={{
                        width: 50,
                        height: 50,
                        marginRight: SIZES.base
                    }}
                />
                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Kütüphanem</Text>
            </View>
                {/* Kitaplarım */}
                <View>
                    {renderMyBookSection(myBooks)}
                </View>
                {/* Kategoriler */}
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