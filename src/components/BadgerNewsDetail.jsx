import React, { useState, useEffect, useRef } from 'react';
import { Text, ScrollView, Animated, StyleSheet, Image, Pressable, Linking } from 'react-native';

export default function BadgerNewsDetail(props) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const { articleId, title, img } = props.route.params;

  useEffect(() => {
    fetch(`https://cs571.org/api/s24/hw8/article?id=${articleId}`, {
      headers: {
        "X-CS571-ID": "bid_e5c17fa842e9e34246e0da9d18c22b2ea6fe5d66d8ed25f597bd150ed148f8b6"
      }
    })
      .then(res => res.json())
      .then(data => {
        setArticle(data);
        setLoading(false);
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      })
      .catch(error => console.error(error));
  }, [articleId, opacityAnim]);

  if (loading) {
    return <Text style={{ marginTop: 20, textAlign: 'center' }}>The content is loading!</Text>;
  }

  const handlePress = () => {
    Linking.openURL(article?.url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <Animated.View style={{ opacity: opacityAnim }}>
      <ScrollView style={styles.container}>
        <Image style={styles.img} source={{ uri: img }} />
        <Text style={styles.title}>{title}</Text>
        <Text>By {article?.author} on {article?.posted}</Text>
        
        <Pressable onPress={handlePress}>
          <Text style={styles.linking}>Read full article here.</Text>
        </Pressable>
        <Text> </Text>
        {article.body.map((paragraph, index) => (
          <Text key={index} style={styles.bodyText}>{paragraph}</Text>
        ))}

      </ScrollView>
    </Animated.View>
  );
}


const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  bodyText: {
    fontSize: 16,
    marginBottom: 10,
  },
  linking: {
    color: 'blue',
  },
});
