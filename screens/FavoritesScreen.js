import { useContext } from "react";
import MealsList from "../components/MealList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from 'react-native';

export default function FavoritesScreen() {
    const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You Have No Favorite Meals Yet!</Text>
            </View>
        );
    }

    return (
        <MealsList items={favoriteMeals} />
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});