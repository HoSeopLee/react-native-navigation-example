import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const NavigationHeader = props => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>NavigationHeader</Text>
      </View>
    </SafeAreaView>
  );
};

export default NavigationHeader;
