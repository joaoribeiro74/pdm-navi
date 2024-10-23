import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function links() {
  return (
    <View style={styles.container}>
      <Link href="/">
          <Text style={{color: "blue", fontSize: 20}}>Link to index</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})