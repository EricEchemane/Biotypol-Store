import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ThemeContext } from '../App';

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';

export default function TitleHeader() {

    const { colors, setTheme, theme } = useContext(ThemeContext);

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : "light");
    }

    return (
        <View style={styles.titleHeader}>
            <Image
                source={require('../assets/biotypol.jpg')}
                style={styles.avatar} />
            <Text style={{ ...styles.titleHeaderText, color: colors.text1 }}> Biotypol Store </Text>

            <View style={{ flex: 1 }} />

            <TouchableOpacity onPress={toggleTheme}>
                {theme === 'dark'
                    ? <IconEntypo
                        name='light-up' color={colors.text1} size={22} style={{
                            color: colors.text1,
                            backgroundColor: colors.background2,
                            padding: 8,
                            borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                        }} />
                    : <IconFeather
                        name='moon' color={colors.text1} size={22} style={{
                            color: colors.text1,
                            backgroundColor: colors.background2,
                            padding: 8,
                            borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                        }} />}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    titleHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14
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