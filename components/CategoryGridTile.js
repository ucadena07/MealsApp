import { View, Pressable, Text, StyleSheet, Platform } from 'react-native'

function CategoryGridTile({ title, color,onPress }) {
    return (
        <View style={styles.gridItem}>
            <Pressable style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                android_ripple={{ color: '#ccc' }}
                onPress={onPress}>
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={[styles.title]}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile


const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: 'black', // IOS 4 props required to create shadow
        shadowOffset: {
            width: 1, height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.4,
        elevation: 1, //android,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: .5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})