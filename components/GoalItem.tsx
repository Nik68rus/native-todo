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
    <Pressable onPress={deleteHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 5,
    backgroundColor: 'blue',
    borderRadius: 10,
    marginBottom: 12,
  },
  goalText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default GoalItem;
