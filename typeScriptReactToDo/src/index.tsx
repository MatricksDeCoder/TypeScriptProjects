import React, {Fragment, useState} from 'react';
import ReactDOM from 'react-dom';

type FormInputEvent = React.FormEventHandler<HTMLInputElement>;
type ButtonSubmitEvent = React.MouseEvent<HTMLButtonElement>;

interface IToDo {
	text: string,
	done: boolean
}

const App = (): JSX.Element => {
	
	const [toDo, setToDo] = useState<string>('Enter to do tasks!');
	const [toDos, setToDos] = useState<IToDo[]>([]);
	
	const addNewToDo = (text: string) => {
		const newToDos: IToDo[] = [...toDos,{text, complete:false}]
		setToDos(newToDos);
	}
	
	const handleClick = (event: ButtonSubmitEvent):void => {
		event.preventDefault();
		addNewToDo(toDo);
		setToDo('');
	}
	
	const handleChange = (event: FormInputEvent):void => setToDo(event.target.value);
	
	const renderToDos = (): React.ReactNode => toDos.map((item: IToDo,i:number) => <Fragment><li style = {{textDecoration: doneRender(item).styleItem}}key={i}>{item.text} {"-"} <button type="button" onClick = {() => toggleToDoDone(i)}>Click To Change Status: {doneRender(item).symbol} {doneRender(item).output}</button><span><button type="button" style = {{color:'red'}} onClick = {() => removeItem(i)}>x</button></span></li></Fragment>);
	
	const toggleToDoDone = (i: number): void => {
		const newToDos: IToDo[] = [...toDos];
		toDos[i].done = !toDos[i].done;
		setToDos(newToDos);
	}
	
	const removeItem = (i:number): void => {
		const newToDos: IToDo[] = [...toDos];
		newToDos.splice(i,1);
		setToDos(newToDos);
	}
	
	const doneRender = (task:IToDo):object =>  task.done? {output:'Completed', symbol:'✓', styleItem: 'line-through'}: {output:'Incomplete', symbol:'-', style:''};
	
	return (
		<Fragment>
		  <section>{toDo}</section>
		  <form>
			  <label for="task">Task:</label>		  
			  <input 
				  type="text" 
				  id="task" 
				  name="task" 
				  value={toDo} 
				  required
				  onChange = {handleChange}
			  />
			  <button onClick = {handleClick}>Submit</button>
		  </form>
		  <section>{renderToDos()}</section>
		</Fragment>
	)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);