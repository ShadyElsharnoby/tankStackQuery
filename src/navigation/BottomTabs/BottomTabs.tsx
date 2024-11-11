// create bottom tabs with homeScreen and addProductScreen
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@/src/screens/HomeScreen/HomeScreen';
import { AddProductScreen } from '@/src/screens/AddProduct/AddProduct';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Add Product"
                component={AddProductScreen}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;
