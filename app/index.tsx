import { StyleSheet, View, Text, Button } from 'react-native'
import React from 'react'
import { Link, usePathname, useRouter } from 'expo-router'

export default function index() {
    const router = useRouter();

    const handleGoToLinks = () => {
        router.push("/list");
    };

  return (
    <View style={styles.container}>
        <Link href="/list">
            <Text>Link to list</Text>
        </Link>
        
        <Link href={`/user/${Math.floor(Math.random() * 100)}`}>
            <Text>Usuário</Text>
        </Link>

        <Button title='List' onPress={handleGoToLinks} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
})