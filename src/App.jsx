import { useState } from 'react'
import ExplorerSidebar from './components/ExplorerSidebar'
import Footer from './components/Footer'
import Header from './components/Header'
import TerminalPanel from './components/TerminalPanel'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	return (
		<div className='flex h-screen overflow-hidden bg-[#0f111a] text-white font-mono'>
			{/* Sidebar */}
			<ExplorerSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

			{/* Main Content Wrapper */}
			<div
				className={`flex flex-col flex-1 transition-all duration-300 ${
					isSidebarOpen ? 'md:ml-64' : 'ml-0'
				}`}
			>
				{/* Header */}
				<Header
					isSidebarOpen={isSidebarOpen}
					setIsSidebarOpen={setIsSidebarOpen}
				/>

				{/* Main Scrollable Content */}
				<main
					id='scroll-container'
					className='flex-1 overflow-y-auto pt-20 px-4 sm:px-6 md:px-8'
				>
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

				{/* Terminal Panel under Sidebar */}
				<TerminalPanel />

				{/* Footer */}
				<Footer />
			</div>
		</div>
	)
}

export default App
