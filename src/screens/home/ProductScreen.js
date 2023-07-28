import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {dynamicSize, normalizeFont} from '../../utils/responsive';

const ProductScreen = () => {
  const product = useSelector(state => state?.product?.data?.payload);

  const renderItem = ({item}) => {
    return (
      <View>
        <Image style={styles.listImage} source={{uri: item}} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {product?.brand} - {product?.title}
      </Text>
      <View style={styles.listHeight}>
        <FlatList
          data={product?.images}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.description}>{product?.description}</Text>
        <View style={styles.textRow}>
          <Text style={styles.textnormal}>Price - ${product?.price}</Text>
          <Text style={styles.textnormal}>
            {product?.discountPercentage} % Off
          </Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.textnormal}>Rating - {product?.rating}</Text>
          <Text style={styles.textnormal}>Available - {product?.rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: dynamicSize(15),
  },
  title: {
    fontSize: normalizeFont(24),
    fontWeight: '700',
    color: 'black',
    paddingHorizontal: dynamicSize(15),
    paddingBottom: dynamicSize(10),
  },
  description: {
    fontSize: normalizeFont(24),
    fontWeight: '600',
    color: 'black',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: dynamicSize(5),
  },
  textnormal: {
    fontSize: normalizeFont(20),
    fontWeight: '500',
    color: 'black',
  },
  listImage: {
    height: dynamicSize(350),
    width: dynamicSize(392),
    marginRight: dynamicSize(10),
  },
  listHeight: {height: dynamicSize(350)},
  textContainer: {paddingHorizontal: dynamicSize(15)},
});
