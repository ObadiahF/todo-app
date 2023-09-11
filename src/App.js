import {React, useState} from 'react'
import './App.css';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [toDosArr, setToDos] = useState([])
  const [done, setDone] = useState([]);

  const handleKeyPress = (event) =>{
    if (event.key === 'Enter') newTodo();
    return
  }


  const newTodo = () => {
    if (!inputValue) return
    setToDos([...toDosArr, inputValue]);
    setInputValue('');
  }

  const toggleDone = (index) => {
    const toDo = toDosArr[index];
    if (done.includes(toDo)) {
      const newDoneArr = [...done.slice(0, index), ...done.slice(index + 1)];
      setDone(newDoneArr);
    } else {
      setDone([...done, toDo]);
      console.log('doesnt')
    }
    
  }

  const deleteToDo = (index) => {
    const newTodoArr = [...toDosArr.slice(0, index), ...toDosArr.slice(index + 1)];
    setToDos(newTodoArr);
  }
 
  return (
    <div className="App">
      <div className='container'>
        <h1>ToDo's</h1>
          <div className='input-container'>
            <input 
            type='text'
            placeholder='Type toDo here...'
            onKeyDown={handleKeyPress}
            value={inputValue}
            onChange={((event) => setInputValue(event.target.value))}
            ></input>
          </div>
          <div className='todos-container'>
            {
              toDosArr.map((toDo, index) => (
                <div className={`toDo ${done.includes(toDo) ? 'done' : ''}`} key={index} >
                  <h4 className={done.includes(toDo) ? 'done-text' : ''}>{toDo}</h4>
                  <div>
                    <button
                    onClick={(() => toggleDone(index))}
                    >{done.includes(toDo) ? 'Undo' : 'Done'}</button>
                    <button
                      key={index}
                      onClick={(() => deleteToDo(index))}
                    >Delete</button>
                  </div>
                </div>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default App;
