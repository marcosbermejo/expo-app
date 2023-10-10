import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TournamentsScreen from './src/screens/Tournaments';
import ClubsScreen from './src/screens/Clubs';
import { FontAwesome5 } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();
const tournamentsTabName = "Tournaments"
const clubsTabName = "Clubs"

export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = route.name === tournamentsTabName ? 'trophy' : 'volleyball-ball' ;
            const iconColor = focused ? '#2196f3' :  'gray'
            return <FontAwesome5 name={iconName} size={24} color={iconColor} />
          },
          tabBarActiveTintColor: '#2196f3',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name={clubsTabName} component={ClubsScreen} />
        <Tab.Screen name={tournamentsTabName} component={TournamentsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}