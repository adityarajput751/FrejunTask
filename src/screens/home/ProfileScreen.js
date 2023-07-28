import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {dynamicSize, normalizeFont} from '../../utils/responsive';

const ProfileScreen = () => {
  const profileData = useSelector(state => state.login);
  const profile = profileData?.token;
  console.log(profile, 'Profile');
  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={{uri: profile?.image}} />
      <View style={styles.profileContainer}>
        <Text style={styles.text}>First Name - {profile?.firstName}</Text>
        <Text style={styles.text}>Last Name - {profile?.lastName}</Text>
        <Text style={styles.text}>UserName - {profile?.username}</Text>
        <Text style={styles.text}>Email - {profile?.email}</Text>
        <Text style={styles.text}>Gender - {profile?.gender}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    height: dynamicSize(50),
    width: dynamicSize(50),
    borderRadius: dynamicSize(25),
  },
  profileContainer: {
    height: dynamicSize(200),
    width: dynamicSize(220),
    marginTop: dynamicSize(25),
  },
  text: {
    fontSize: normalizeFont(18),
    color: 'black',
    marginTop: dynamicSize(5),
  },
});
