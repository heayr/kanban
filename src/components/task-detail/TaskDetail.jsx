import { useRouteMatch, Link } from 'react-router-dom'
import { LIST_COPY, LIST_COLORS, LIST_TYPES } from '../../config'
import {formatDate} from '../../utils'
import css from './TaskDetail.module.css'



const TaskDetail = props => {
	const match = useRouteMatch()
	const {taskId} = match.params
	const {tasks, setTasks} = props

	const task = tasks.find(task => task.id === taskId) 

	console.log(task);
	console.log(task.title);


	const handleChange = (e) => {
		const updateTasks = tasks.map(task => {
			if (task.id === taskId){
				return {...task, status: e.target.value}
			}
			return task
		})
		setTasks(updateTasks)
	}
	return (
		<div className={css.wrapper}>
			<Link to='/' className={css.homeLink}>Back</Link>

		{task ? (
		<>
			<div className={css.header}>
				<h2 className={css.title}>{task.title}</h2>
				<div className={css.status} style={{background: LIST_COLORS[task.status]}} >{LIST_COPY[task.status]}</div>
			</div>
			<p className={css.createdAt}>{formatDate(task.created)}</p>
			<p>Description: {task.description || 'no description'}</p>
			<p className={css.label}>Change status</p>
			<select className={css.select} value={task.status} onChange={handleChange}>
				{Object.values(LIST_TYPES).map(type => {
					return (
						<option value={type}>{LIST_COPY[type]}</option>
					)
				})}
			</select >
		
			</>
		) : (
			<h2>Task with ID {taskId} not found</h2>
			
		)
		}
		</div>
		
	)
}

export default TaskDetail
