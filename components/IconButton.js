import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IconButton({ icon, color, onPress }) {
    return (
        <Pressable
            onPressIn={onPress}  // Use onPressIn instead of onPress
            style={({ pressed }) => [
                styles.container,
                pressed && styles.pressed
            ]}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        minHeight: 40,
        minWidth: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressed: {
        opacity: 0.7,
        backgroundColor: 'rgba(0, 0, 0, 0.1)' // Visual feedback
    }
});