import React, {Component} from 'react';
import TaskInfo from './ToDoTasks';

import './App.css';

export default class WrapperToDos extends Component{
	constructor(props){
		super(props);
		this.state={
			tasks:[{number:1, task:'Sacar la basura', done: true},
				  {number:2, task:'Comprar bananas', done: false}, 
				  {number:3, task:'Hacer la tarea', done: true}, 
				  {number:4, task:'Cortar el pasto', done: false}, 
				  {number:5, task:'Lavar los platos', done: false} ]
    }
		
	}

	render(){
		return(
			<div>
        <ul>
				<TaskInfo						
					data={this.state.tasks}
					/>
          </ul>
			</div>
		)
	}

}