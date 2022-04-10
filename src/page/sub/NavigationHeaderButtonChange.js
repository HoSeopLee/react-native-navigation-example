import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Header from '../../components/Header';

const NavigationHeaderButtonChange = props => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>NavigationHeaderButtonChange</Text>
      </View>
    </SafeAreaView>
  );
};

export default NavigationHeaderButtonChange;
