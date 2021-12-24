import { TouchableOpacity, Dimensions } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../App";

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';

export default function HomeScreenRightButton() {

    const { colors, setTheme, theme } = useContext(ThemeContext);

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : "light");
    }

    return (
        <TouchableOpacity onPress={toggleTheme}>
            {theme === 'dark'
                ? <IconEntypo
                    name='light-up' color={colors.text1} size={22} style={{
                        color: colors.text1,
                        backgroundColor: colors.background1,
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
    );
}