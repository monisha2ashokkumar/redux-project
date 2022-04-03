import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state=>state.counterR.counter)
  const toggle = useSelector(state=>state.toggleR.toggle)

  const onToggleHandler = ()=>{
    dispatch ({
      type:"IS_TOGGLED"
   })
  }

  const onIncrementHandler = ()=>{
    dispatch ({
       type:"INCREMENT"
    })
   }

   const onDecrementHandler = ()=>{
    dispatch ({
       type:"DECREMENT"
    })
   }
  return (
    <div >
     <h1>React and Redux</h1>
      <h2>Counter value: {counter}</h2>
      {toggle &&
      <div>
        <button onClick={onIncrementHandler}>Increment</button>
        <button onClick={onDecrementHandler}>Decrement</button>
      </div>}
      <div>
      <button onClick={onToggleHandler}>Toggle Counter</button>

      </div>
    </div>
  );
}

export default App;
