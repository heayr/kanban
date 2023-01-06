import Logo from '../../assets/logo.svg'
import css from './Header.module.css'

const Header = () => {
	return (
		<header className={css.header}>
			<img className={css.logo} src={Logo} alt='' />
			<h1 className={css.title}>Simple Kanban Board</h1>
			<p className={css.sprint}>Sprint #2021.38</p>
		</header>
	)
}

export default Header
