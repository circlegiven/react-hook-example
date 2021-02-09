import PracticeUserReducer from "./examples/practice-userReducer";

const list = [
    { name: 'name', value: ''},
    { name: 'age', value: ''},
]

function App() {
  return (
    <div >
      <PracticeUserReducer initStates={list}/>
    </div>
  );
}

export default App;
