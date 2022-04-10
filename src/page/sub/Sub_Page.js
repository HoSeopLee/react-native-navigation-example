import React, {useEffect, useState} from 'react';
import {SafeAreaView, Pressable, Text} from 'react-native';

const Sub_Page = props => {
  const {navigation} = props;

  const list = [
    {
      index: 0,
      navigation: 'NavigationHeader',
      params: 'NavigationHeader_Title',
    },
    {
      index: 1,
      navigation: 'NavigationHeaderButtonChange',
      params: 'NavigationHeaderButtonChange_Title',
    },
    {
      index: 2,
      navigation: 'NavigationHeaderButtonChangeNoOptionTitle',
      params: 'NavigationHeaderButtonChangeNoOptionTitle_Title',
    },
    {
      index: 3,
      navigation: 'NoBottomTab',
      params: 'NoBottomTab_Title',
    },
    {
      index: 4,
      navigation: 'HomeMoveSubDetail',
      params: 'HomeMoveSubDetail_Title',
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {list.map((element, key) => {
        return (
          <Pressable
            key={element.index + key}
            onPress={async () => {
              navigation.navigate(element.navigation, {title: element.params});
            }}
            style={({pressed}) => [
              {
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                opacity: pressed ? 0.5 : 1,
                marginTop: 5,
              },
            ]}>
            {({pressed}) => <Text>{element.navigation}</Text>}
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
};

export default Sub_Page;
