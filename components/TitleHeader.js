import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ThemeContext } from '../App';

export default function TitleHeader() {

    const { colors } = useContext(ThemeContext);

    return (
        <View style={styles.titleHeader}>
            <Image
                source={require('../assets/biotypol.jpg')}
                style={styles.avatar} />
            <Text style={{ ...styles.titleHeaderText, color: colors.text1 }}> Biotypol Store </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 19,
        borderWidth: 12,
        width: 38,
        height: 38
    },
    titleHeaderText: {
        fontSize: 20,
        marginLeft: 10,
        fontFamily: 'Poppins',
        fontWeight: '700',
    }
});