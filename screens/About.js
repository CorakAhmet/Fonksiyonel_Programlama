import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

const About = () => {
    return (
        <ImageBackground 
            source={require('../assets/images/bookworm.gif')} 
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.contentContainer}>
                    <Image
                        source={require('../assets/images/booklogo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.title}>Kitap Uygulaması</Text>
                    <Text style={styles.subtitle}>Sizin İçin Okuma Dünyasını Keşfediyoruz</Text>
                    <Text style={styles.description}>
                        Kitap Uygulamasına hoş geldiniz! Burada, okuma tutkunları için özenle seçilmiş kitap bulabilir ve keşfedebilirsiniz.
                    </Text>
                    <Text style={styles.description}>
                        Biz, size en sevdiğiniz yazarların en yeni eserlerini ve klasiklerini sunmaya adanmak için buradayız. Kütüphanemizdeki her kitap, size unutulmaz bir okuma deneyimi yaşatmak için titizlikle seçilmiştir.
                    </Text>
                    <Text style={styles.description}>
                        Okuma yolculuğunuz boyunca size eşlik etmek için buradayız. Sizin için derinlikli incelemeler hazırlıyoruz, en son çıkan kitapları sizin için takip ediyoruz ve okuma listeleri oluşturuyoruz. Amacımız, size okuma zevkinizi artıracak ve yeni keşifler yapmanızı sağlayacak bir ortam sunmaktır.
                    </Text>
                    <Text style={styles.description}>
                        Kitaplarla dolu dünyamıza adım atın ve sizi bekleyen keşiflerle dolu bir yolculuğa çıkın. Okuma tutkunuysanız, doğru yerdesiniz!
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '80%',
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: SIZES.padding * 2,
    },
    contentContainer: {
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: SIZES.padding,
        borderRadius: SIZES.radius,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: SIZES.padding,
    },
    title: {
        ...FONTS.h1,
        color: COLORS.black,
        marginBottom: SIZES.base,
        textAlign: 'center',
    },
    subtitle: {
        ...FONTS.body3,
        color: COLORS.gray,
        marginBottom: SIZES.padding,
        textAlign: 'center',
    },
    description: {
        ...FONTS.body4,
        color: COLORS.black,
        marginBottom: SIZES.base,
        textAlign: 'center',
    },
});

export default About;
