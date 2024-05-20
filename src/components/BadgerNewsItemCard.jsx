import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BadgerNewsItemCard = ({ item }) => {
    const navigation = useNavigation();
    console.log(`https://raw.githubusercontent.com/CS571-S24/hw8-api-static-content/main/${item.img}`)

        return (
        <Pressable style={styles.card}
            onPress={() => navigation.navigate('Article', {
                articleId: item.fullArticleId,
                title: item.title,
                img: `https://raw.githubusercontent.com/CS571-S24/hw8-api-static-content/main/${item.img}`
            })}
        >
            <Image
                style={styles.image}
                source={{ uri: `https://raw.githubusercontent.com/CS571-S24/hw8-api-static-content/main/${item.img}` }}
            />

            <Text style={styles.title}>{item.title}</Text>
        </Pressable >
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 6,
        overflow: 'hidden',
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 200,

    },
    title: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default BadgerNewsItemCard;
