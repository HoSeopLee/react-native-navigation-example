import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Header from '../../components/Header';

const ForFadeFromBottomAndroid = props => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <Header back borderStyle title={props?.route?.params?.title} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>ForFadeFromBottomAndroid</Text>
      </View>
    </SafeAreaView>
  );
};

export default ForFadeFromBottomAndroid;
