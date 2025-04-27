import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

export default function MealsList({ items }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => {
                    const item = itemData.item;
                    const mealItemProps = {
                        id: item.id,
                        title: item.title,
                        imageUrl: item.imageUrl,
                        affordability: item.affordability,
                        complexity: item.complexity,
                        duration: item.duration
                    }

                    return (
                        <MealItem {...mealItemProps} />
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});