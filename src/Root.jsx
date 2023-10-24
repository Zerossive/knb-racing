import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet, useNavigate } from 'react-router-dom'

function Root() {
	const navigate = useNavigate()

	const handleTitleClick = () => {
		// navigate('/')
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	return (
		<>
			<Navbar title='KNB Racing' titleClick={handleTitleClick} />
			<div className='min-h-screen'>
				<Outlet />
			</div>
			<Footer />
		</>
	)
}

export default Root
