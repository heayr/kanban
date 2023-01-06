import { useState } from 'react'
import clsx from 'clsx'
import css from './Forms.module.css'

const FormAddNewTask = props => {
	const {addNewTask, setFormVisible} = props
	const [values, setValues] = useState({
		title:'',
		description: '',
	})

const handleSubmit = (e) => {
		e.preventDefault()
		if (values.title) {
			addNewTask(values.title, values.description)
		}
		setFormVisible(false)
		
	}

const handleChange = (e) => {
	const fieldName = e.target.name
	setValues({...values, [fieldName]: e.target.value})
}

	return (
		<form className={css.form} onSubmit={handleSubmit} >
			<input
				className={css.input}
				id='taskTitle'
				name='title'
				type='text'
				placeholder='Enter task title'
				value={values.title}
				onChange={handleChange}
			/>
			{/*<textarea
				className={clsx(css.input, css.textarea)}
				id='taskDescription'
				name='description'
				placeholder='Enter task description'
				value={values.description}
				onChange={handleChange}

			/>*/}
			<button className={css.submit} type='submit'>Submit</button>
		</form>
	)
}

export default FormAddNewTask
