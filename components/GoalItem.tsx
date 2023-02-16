import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Goal } from '../types';

interface Props {
  item: Goal;
  onDelete: (id: string) => void;
}

const GoalItem = ({ item, onDelete }: Props) => {
  const deleteHandler = () => {
    onDelete(item.id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={deleteHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#5e0acc',
    borderRadius: 10,
    marginBottom: 12,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default GoalItem;
