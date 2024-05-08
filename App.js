import { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
const [goals, setGoals] = useState([])

function handleAddGoal(enteredGoalText){
  setGoals(() => [... goals, {text: enteredGoalText}])
}

function handleDeleteGoal(){
  console.log('DELETE')
}

  return (
    <View style={styles.container}>
        <GoalInput 
      onAddGoal={handleAddGoal}
        />
      <View style={styles.goalsContainer}>
        <FlatList
       data={goals}
       renderItem={ (itemData) => {
        return(
       <GoalItem
       itemData={itemData}
       onDeleteItem={handleDeleteGoal}
       />
        )
       }}
       keyExtractor={(item) => {
        return item.id
       }}
       />
       </View>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  goalsContainer:{
    flex: 5
  },
  goalsItem:{
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#8576FF',
    color: 'white'
  },
  goalText:{
    color: 'white'
  },
});
