import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MealDetails from './MealDetails'
function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation()

    function selectMealHandler() {
        navigation.navigate("MealDetails", {
            mealId: id
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable style={({ pressed }) => pressed ? styles.buttonPressed : null} onPress={selectMealHandler}>
                <View style={styles.innerContainer}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>
                        {title}
                    </Text>

                    <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
                </View>

            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
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
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
    buttonPressed: {
        opacity: .5
    },
})