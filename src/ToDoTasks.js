import React, {Component} from 'react';
import Tasks from './Tasks';
export default class TaskInfo extends Component{
	constructor(props){
		super(props);
		this.state = {
			tasks : props.data,
			}
            this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
	}
	render(){
		return(
			<div>
				
				{this.state.tasks.map((item)=>
					<Tasks 
						number={item.number}
                        task={item.task}
                        done={item.done} />
                        )}

			</div>
		)		
	}

}