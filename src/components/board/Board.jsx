import {LIST_TYPES, LIST_COPY, LIST_COLORS} from '../../config'
import List from '../list/List'
import uniqid from 'uniqid';


import css from './Board.module.css'

const Board = props => {
	const {tasks, setTasks} = props

	const addNewTask = (title, description) => {
		const newTask = { 
			id: uniqid(),
			title: title,
			description: description,
			created: new Date().toISOString(),
			status: LIST_TYPES.BACKLOG,
		}
		setTasks([...tasks, newTask])
	}

	return (
		<div className={css.board}>
			{Object.values(LIST_TYPES).map(type => {
				const listTasks = tasks.filter(task => task.status === type)
				const previousTaskList = 
				tasks.filter(task => task.status === Object.values(LIST_TYPES)[(Object.values(LIST_TYPES).indexOf(type) - 1)]);
				const previousColumnName = Object.values(LIST_TYPES)[(Object.values(LIST_TYPES).indexOf(type)-1)]

				return (
				<List 
					key={type} 
					type={type}
					title={LIST_COPY[type]} 
					tasks={listTasks} 
					addNewTask={addNewTask}
					setTasks={setTasks}
					previousColumnName={previousColumnName}
					previousTaskList={previousTaskList} 
				/>
				)
			})}
		</div>
	)
}

export default Board
