import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home_deseas from '../screens/home_deseas';
import Index from "../screens/profile/index"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Predict from '../screens/predict';
function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}



const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="rgba(31, 144, 237, 0.872)"
      labelStyle={{ fontSize: 12 }}
      style={{padding:10 }}
    >
      <Tab.Screen
        name="Feed"
        component={Home_deseas}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="predict"
        component={Predict}
        options={{
          tabBarLabel: 'predict',
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Index}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MyApp() {
  return (
    <>
      <MyTabs />
    </>
  );
}
