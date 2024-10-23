import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
    const CustomHeaderTitle = (title: string) => {
        return <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>{title}</Text>;
      };

  return (
    <Stack 
      screenOptions={{
        headerStyle: { backgroundColor: '#f5f5f5' },
        headerTintColor: 'black',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{
          title: 'Home',
          headerTitle: () => CustomHeaderTitle('Home'),
        }} 
      />
      <Stack.Screen 
        name="list" 
        options={{
          title: 'List',
          headerTitle: () => CustomHeaderTitle('List'),
        }} 
      />
      <Stack.Screen 
        name="user/[id]" 
        options={{
          title: 'User Details',
          headerTitle: () => CustomHeaderTitle('User Details'),
        }} 
      />
    </Stack>
  )
}

