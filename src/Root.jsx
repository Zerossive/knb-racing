import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Root() {
	const scrollUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	return (
		<>
			<Navbar title='KNB Racing' titleClick={scrollUp} />
			<div className='min-h-screen'>
				<Outlet />
			</div>
			<Footer />
		</>
	)
}

export default Root
