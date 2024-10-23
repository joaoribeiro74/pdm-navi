import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { useGlobalSearchParams } from 'expo-router'

export default function Id() {
    const { id } = useGlobalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>Detalhes do Usuário</Text>
      <Text style={styles.text}>ID do Usuário: {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
});