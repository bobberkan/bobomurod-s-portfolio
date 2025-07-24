import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
	return (
		<div className='App'>
			<Header />
			<main>
				<section id='home'>
					<Home />
				</section>
				<section id='about'>
					<About />
				</section>
				<section id='projects'>
					<Projects />
				</section>
				<section id='contact'>
					<Contact />
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default App
