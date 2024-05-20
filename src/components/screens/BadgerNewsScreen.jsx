import React, { useEffect, useState, useContext } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import BadgerNewsItemCard from '../BadgerNewsItemCard';
import CS571 from '@cs571/mobile-client';
import { useNavigation } from "@react-navigation/native";

import PreferencesContext from "../PreferencesContext";

function BadgerNewsScreen(props) {
    const [articles, setArticles] = useState([]);
    const navigation = useNavigation();
    const [prefs, setPrefs] = useContext(PreferencesContext);

    useEffect(() => {
        fetch('https://cs571.org/api/s24/hw8/articles', {
            headers: {
                'X-CS571-ID': CS571.getBadgerId()
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setArticles(data);
            })
            .catch(err => console.error('Cannot fetch articles', err));
    }, []);

    const handleOnPress = () => {
        navigation.navigate("BadgerNewsArticle");
    }

    // Filter articles based on preferences
    const filteredArticles = articles.filter(article =>
        article.tags.some(tag => prefs[tag] !== false)
    );

    return <ScrollView>
        {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
                <BadgerNewsItemCard
                    key={article.id}
                    {...article}
                    onPress={handleOnPress}>
                </BadgerNewsItemCard>
            ))
        ) : (
            <Text>There is no such article that satisfy all your preferences.</Text>
        )}
    </ScrollView>
}

export default BadgerNewsScreen;