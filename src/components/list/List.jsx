import { useState } from 'react';
import {LIST_TYPES, LIST_COLORS} from '../../config';
import FormAddNewTask from '../forms/FormAddNewTask';
import { Link } from 'react-router-dom';
import css from './List.module.css';

const List = props => {
	const {title, type, tasks, addNewTask, setTasks, previousTaskList} = props;
	// для того чтобы отобразить инпуты под кнопкой, прирутим к юзСтейту дополнительный хук с значением false,
	// как только его поменяем на true с помощью нажатия кнопки, форма будет отображена
	const [isFormVisible, setFormVisible] = useState(false);

const handleClick = () => {
	setFormVisible(!isFormVisible)
}

const changeStatus = (event, status) => {
	const taskList = JSON.parse(window.localStorage.getItem('tasks'));
	const tasksCopy = taskList.map((t) => {
		if(t.id === event.target.value) {t.status = status}
		return t
	});
	setTasks(tasksCopy);
	setAddCard(!addCard);
	setFormVisible(!isFormVisible);
}

const DropdownList = props => {
	const {title, type, tasks, addNewTask, setTasks, previousTaskList} = props;
	const [isListVisible, setListVisible] = useState(false);
	const handleClick = () => {
		setListVisible(!isListVisible)
	}
}



	return (
		
		<div className={css.list}>
			<h2 className={css.listTitle} >{title}</h2>
			{tasks.map(task => {
				return(
			<Link 
			key={task.id} 
			to={`/tasks/${task.id}`} 
			className={css.taskLink}>
				<div 
				key={task.id} 
				className={css.task} 
				style={{background: LIST_COLORS[type]}} >
					{task.title}
					</div>
			</Link>
				)
				
			})} 
			
			{/* здесь проверяем type на соответствие типу backlog и рендерим кнопку с функцией onClick  */}
			{type === LIST_TYPES.BACKLOG && (
				<button className={css.addButton} onClick={handleClick} >{isFormVisible ? '- Cancel Form Submition' : '+ Add new card'}</button>
			)}
			{/* здесь проверяем type на соответствие типу backlog 
			и с помощью логического && добавляем хук isFormVisible(по дефолту - false) 
			Выше обработчик кнопки, который изменит false на true, 
			после смены useState на true получаем отображение "выпадающий список" */}
			{type === LIST_TYPES.BACKLOG && isFormVisible && (
				<FormAddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible}/>
			)}
			{type !== LIST_TYPES.BACKLOG && (
				<button className={css.addButton} onClick={handleClick} >{isFormVisible ? '- Cancel Form Submition' : '+ Add new card'}</button>
			)
		
		}
			{type !== LIST_TYPES.BACKLOG &&  isFormVisible && (
				<form>
					<select defaultValue={'default'}
					onChange={(e) => changeStatus(e, type) }
					name="" id="">
						<option  value={'default'}
						/*
					для того чтобы отрисовать список дел в дропдаун листе, делаем из первого массива, массив - previousTaskList,
					из него вычитаем -1 - таким образом, получаем новый массив для рендеринга его в дроплисте.
					*/
						>Select</option>
						{
							previousTaskList.map(task => {
								return <option
								className=''
								key={task.id}
								value={task.id}
								>{task.title}</option>
							})
						}
					</select>
				</form>

			)}
			
			
		</div> 

	)
}

export default List
