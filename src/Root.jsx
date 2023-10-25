import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Root() {
	const handleTitleClick = () => {
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
