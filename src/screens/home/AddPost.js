import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../components/InputBox';
import {dynamicSize, normalizeFont} from '../../utils/responsive';
import {useDispatch, useSelector} from 'react-redux';
import {AddProduct} from '../../store/reducer/AddProductSlice';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const dispatch = useDispatch();
  const postProduct = useSelector(state => state?.addProductdata);
  console.log(postProduct, 'postProduct');

  if (postProduct?.data?.id) {
    Alert.alert('Your Product is added');
  }

  const handleButtonPress = () => {
    const payload = {
      title: title,
      brand: brand,
    };
    dispatch(AddProduct(payload));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add Your Product</Text>
      <InputBox
        onChangeText={text => setTitle(text)}
        value={title}
        placeholder="Title"
      />
      <InputBox
        onChangeText={text => setBrand(text)}
        value={brand}
        placeholder="Brand"
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'},
  headerText: {
    fontSize: normalizeFont(28), 
    color: 'blue',
    fontWeight: '700'
  },
  button: {
    width: dynamicSize(330),
    marginHorizontal: dynamicSize(20),
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingVertical: dynamicSize(7),
    borderRadius: dynamicSize(5),
    marginTop: dynamicSize(20),
  },
  buttonText: {color: 'white', fontSize: normalizeFont(20)},
});
