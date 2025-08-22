import { View, StyleSheet, Text, Pressable, Image } from 'react-native'

function List({ items }) {
    return (

        items.map((it) => (
            <View key={it} style={styles.listItem}>
                <Text style={styles.itemTextColor}>{it}</Text>
            </View>

        ))

    )
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#ebb296ff'
    },
    itemTextColor:{
        color: '#351401',
        textAlign: 'center'
    }
})