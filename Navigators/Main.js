import React, { useEffect, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

// Stacks
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";
import UserNavigator from "./UserNavigator";
import CartIcon from '../Shared/CartIcon';
import AdminNavigator from './AdminNavigator';
import AuthGlobal from "../Context/store/AuthGlobal";
import * as Font from 'expo-font'


const Tab = createBottomTabNavigator();


const Main = () => {

  const context = useContext(AuthGlobal)

  useEffect(() => {
    (async () => await Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    Ionicons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
    FontAwesome: require("native-base/Fonts/FontAwesome.ttf")
    }))();
    }, [])
    
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" 
            style = {{position: "relative"}} 
            color={color} 
            size={30} 
            />
          )
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name="shopping-cart" 
              color={color} 
              size={30} 
              />
              <CartIcon />
            </View>
          )
        }}
      />

        {context.stateUser.user.isAdmin == true ? (
        <Tab.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cog" color={color} size={30} />
          ),
        }}
      />
      ): null }
      
      <Tab.Screen
        name="User"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" 
            color={color} 
            size={30}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;