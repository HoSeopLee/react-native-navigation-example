import React from 'react';
import {View, Text, StatusBar, Pressable, Animated, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Header = ({
  title = '',
  borderStyle = false,
  back = false,
  close_fuc = () => {},
}) => {
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar
        backgroundColor={'#fff'}
        barStyle="dark-content" // Here is where you change the font-color
      />

      <Animated.View
        style={{
          width: '100%',
          flexDirection: 'row',
          paddingHorizontal: 19,
          height: 50,
          alignItems: 'center',
          borderBottomWidth: borderStyle ? 1 : 0,
          borderColor: '#E9E9E9',
        }}>
        <View style={{width: 40, height: 40}}>
          {back && (
            <Pressable
              onPress={async () => {
                navigation.goBack();
              }}
              style={({pressed}) => [
                {
                  width: 40,
                  height: 40,
                  borderRadius: 16,
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  opacity: pressed ? 0.5 : 1,
                },
              ]}>
              {({pressed}) => (
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../assets/images/back.png')}
                />
              )}
            </Pressable>
          )}
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 17,
              color: '#222',
            }}>
            {title}
          </Text>
        </View>
        <View style={{width: 40, height: 40}} />
      </Animated.View>
    </View>
  );
};

export default Header;
