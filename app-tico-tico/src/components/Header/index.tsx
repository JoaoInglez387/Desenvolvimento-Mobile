import React from "react";
import { styles } from './styles';
import { Button, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { Image, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
        source={require('../../../assets/Tico-Tico Logo.svg')} // coloque a extensão correta
        style={styles.logo}
        accessibilityLabel="Logo do Tico-Tico" // substitui o alt
      />
      </View>
    </View>
    )
}