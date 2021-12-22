import React, { useContext, useEffect, useState } from "react";

import { StyleSheet, View, TextInput, Text, FlatList } from "react-native";
import { ThemeContext } from "../App";
import TitleHeader from "../components/TitleHeader";

import Items from "../assets/data/items";

export default function HomeScreen() {

    const { colors } = useContext(ThemeContext);
    const [searchValue, setSearchValue] = useState('');
    const [items, setItems] = useState(Items);

    useEffect(() => {
        const copy = Items.filter(({ key }) => key.toLowerCase().includes(searchValue.toLowerCase()));
        copy.sort((item1, item2) => search(item2.key) - search(item1.key));
        setItems(copy);
    }, [searchValue]);

    function search(name) {
        name = name.trim().toUpperCase();
        let searchTerm = searchValue.trim().toUpperCase();
        if (name.startsWith(searchTerm)) return 1;
        if (name.includes(searchTerm)) return 0;
        return -1;
    }

    return (
        <View style={{ ...styles.container, backgroundColor: colors.background1 }}>
            <TitleHeader />
            <TextInput
                placeholderTextColor={colors.placeholderColor}
                placeholder="Type item keywords to search"
                style={{ ...styles.searchInput, backgroundColor: colors.background2, color: colors.text1 }}
                onChangeText={setSearchValue}
                value={searchValue} />

            {items.length > 0
                ? <View style={styles.itemListContainer}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ ...styles.itemsTableLabel, color: colors.text1 }}> Item </Text>
                        <Text style={{ ...styles.itemsTableLabel, color: colors.text1 }}> Price </Text>
                    </View>

                    <FlatList
                        data={items}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ ...styles.items, color: colors.text1 }}> {item.key} </Text>
                                <Text style={{ ...styles.items, color: colors.text1 }}> {item.price} </Text>
                            </View>
                        )}
                    />
                </View>
                : <View style={styles.notFound}>
                    <Text style={{ color: colors.text1 }}> Unknown item </Text>
                </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchInput: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 50,
        marginHorizontal: 14,
    },
    itemsContainer: {
        marginTop: 12
    },
    itemsTableLabel: {
        fontSize: 18,
        fontWeight: '500',
        paddingHorizontal: 14,
        paddingVertical: 18
    },
    items: {
        marginVertical: 8,
        fontSize: 16,
        paddingHorizontal: 14
    },
    notFound: {
        marginTop: 24,
        alignItems: 'center'
    },
    itemListContainer: {
        flex: 1,
    }
});