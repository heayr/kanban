import css from './Footer.module.css'
import { LIST_COPY_FOOTER, LIST_TYPES_FOOTER } from '../../config'
const Footer = props => {
	const {tasks} = props
	return (
		<footer className={css.footer}>
			<div className={css.counts}>
				{Object.values(LIST_TYPES_FOOTER).map(type => {
					const listCount = tasks.filter(task => task.status === type)
					if (!listCount.length) return null
					return (
						<div key={type} className={css.count}>{LIST_COPY_FOOTER[type]}: {listCount.length} </div>
					)
					})}
			</div>
			<div className={css.copy}>
				Created by <a href='https://github.com/heayr/kanban/tree/master/src' target='_blank' rel='noreferrer'>Yegor Myshinsky 2023</a>
			</div>
		</footer>
	)
}

export default Footer
