import { useState, useEffect } from "react";

function Testone(){

  const [task, settask] = useState([]);
  const [newtask, setnewtask] = useState('');

  useEffect(() => {
    const listnames = JSON.parse(localStorage.getItem('tasks')) || [] ;
    settask(listnames);
  },[]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task));
  }, [task]);


  function handleinputchange(event){
    setnewtask(event.target.value);
    //setnewtask(() => event.target.value);
    // console.log(newtask);
  }


  function addbtn(){
      if(newtask.trim() !== "" ){
        settask([...task, newtask]);
        setnewtask('');
        
      }
  }

  function editTask(index){
    const editname = task.filter((element, i) => i == index );
    setnewtask(editname);
    deletetask(index);
  }

  function deletetask(index){
    const updatelist = task.filter((element, i) => i !== index );
    settask(updatelist);
    // console.log(updatelist);
  }
  
  return (
    <div>
      <input type="text" placeholder="Enter the task name" value={newtask} onChange={handleinputchange}/>
      <button className="add-btn" onClick={addbtn}>Add</button>

      <ol>
        {task?.map((tasks, index) => 
          <li key={index}>
            <span>{tasks}</span>
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deletetask(index)}>delete</button>
          </li>
        )}
      </ol>
    </div>
  );
}
export default Testone;


