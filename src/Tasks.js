import React from 'react';

export default function Tasks(props){
	return(
		<li onClick={()=>props.changeStatus(props.done)}><input type="checkbox" checked={props.done}></input>{props.number} - {props.task}</li>
	)
}