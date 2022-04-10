import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Header from '../../components/Header';

const NoBottomTab = props => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {display: 'none'},
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {display: 'flex'},
      });
    };
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>NoBottomTab</Text>
      </View>
    </SafeAreaView>
  );
};

export default NoBottomTab;
