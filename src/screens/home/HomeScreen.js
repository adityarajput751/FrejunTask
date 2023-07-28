import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPost} from '../../store/reducer/PostSlice';
import {getProduct} from '../../store/reducer/ProductSlice';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {dynamicSize, normalizeFont} from '../../utils/responsive';

const HomeScreen = () => {
  const navigation = useNavigation();
  const posts = useSelector(state => state?.getPosts);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(getPost());
    }, [dispatch]),
  );
  const handleTouchButton = item => {
    dispatch(getProduct(item?.item?.id));
    navigation.navigate('Product');
  };

  const renderItem = item => {
    return (
      <View>
        <TouchableOpacity onPress={() => handleTouchButton(item)}>
          <View style={styles.listContainer}>
            <Image
              style={styles.listImage}
              source={{uri: item?.item?.thumbnail}}
            />
            <Text style={styles.listTitle}>{item?.item?.title}</Text>
            <View style={styles.listPriceContainer}>
              <Text style={styles.priceText}>$ {item?.item?.price}</Text>
              <Text>Rating: {item?.item?.rating}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={posts?.data?.payload?.products}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', backgroundColor: 'white'},
  listContainer: {
    marginHorizontal: dynamicSize(5),
    borderWidth: dynamicSize(1),
    width: dynamicSize(175),
    padding: dynamicSize(12.5),
    marginTop: dynamicSize(10),
    height: dynamicSize(230),
    borderRadius: dynamicSize(5),
  },
  listImage: {height: dynamicSize(150), width: dynamicSize(150)},
  listTitle: {
    fontSize: normalizeFont(18),
    fontWeight: '600',
    color: 'black',
    width: dynamicSize(150),
  },
  listPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: dynamicSize(150),
  },
  priceText: {fontSize: normalizeFont(16), fontWeight: '500', color: 'green'},
});
