import { useState, useRouteMatch, Link } from 'react-router-dom'
import { LIST_COPY, LIST_TYPES } from '../../config'


const ListAddNewTask = props => {
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
        this.setState({value: e.target.value});
        
    <>
    <select className={css.select} value={task.title} onChange={handleChange}>
                    {Object.values(LIST_TYPES.BACKLOG).map(title => {
                        return (
                            <option value={title}>{LIST_COPY.BACKLOG[title]}</option>
                        )
                    })}
                </select >
            
    </>
    }
}






export default ListAddNewTask;