/** eslint-disable */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import Logo from '../../assets/Logo.svg';

const API_KEY = '74240d0d45984f26a208276b1614598a';

function listItem({item, index}: {item: any; index: number}) {
  const isLeft = index % 2 === 1;
  return (
    <View style={[styles.newsBox, isLeft && {flexDirection: 'row-reverse'}]}>
      <Text style={styles.text}>{item.description}</Text>
      {item.urlToImage ? (
        <Image source={{uri: item.urlToImage}} style={styles.image} />
      ) : (
        <Logo width={40} height={40} />
      )}
    </View>
  );
}

export default function HomeScreen(): React.JSX.Element {
  const [news, setNews] = useState([] as any);
  const [_loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      const formattedDate = yesterday.toISOString().split('T')[0];
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=apple&from=${formattedDate}&to=${formattedDate}&sortBy=popularity&apiKey=${API_KEY}`,
      );
      const json = await response.json();
      console.log(json, 'json');
      setNews(json.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.box}>
      <FlatList
        data={news}
        renderItem={({item, index}) => listItem({item, index})}
        keyExtractor={item => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    marginTop: 120,
  },
  logoBox: {
    marginTop: 20,
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  newsBox: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    flexDirection: 'row',
    height: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '70%',
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 5,
    marginRight: 5,
  },
});
