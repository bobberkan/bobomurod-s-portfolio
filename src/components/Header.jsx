import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
	const [activeSection, setActiveSection] = useState('home')

	const navItems = [
		{ name: 'Home', id: 'home' },
		{ name: 'About', id: 'about' },
		{ name: 'Projects', id: 'projects' },
		{ name: 'Contact', id: 'contact' },
	]

	useEffect(() => {
		const scrollContainer = document.getElementById('scroll-container')
		const handleScroll = () => {
			const scrollY = scrollContainer?.scrollTop || 0
			const offsets = navItems.map(item => {
				const el = document.getElementById(item.id)
				return {
					id: item.id,
					offsetTop: el ? el.offsetTop - 300 : 0,
				}
			})

			const current = offsets.reduce((prev, curr) =>
				scrollY >= curr.offsetTop ? curr : prev
			)

			setActiveSection(current.id)
		}

		if (scrollContainer) {
			scrollContainer.addEventListener('scroll', handleScroll)
			handleScroll()
		}

		return () => {
			if (scrollContainer) {
				scrollContainer.removeEventListener('scroll', handleScroll)
			}
		}
	}, [navItems])

	return (
		<header
			className={`fixed top-3 ${
				isSidebarOpen ? 'left-64' : 'left-1/2 -translate-x-1/2'
			} w-[95%] md:w-4/5 z-40 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg font-mono transition-all duration-300`}
		>
			<div className='flex items-center justify-between py-3 px-4 md:px-6'>
				<div className='flex items-center gap-3'>
					<div className='w-9 h-9 rounded bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center shadow-inner'>
						<span className='text-xs text-white'>JS</span>
					</div>
					<h1 className='text-sm md:text-lg font-bold text-white'>
						/Bobomurod's Portfolio
					</h1>
				</div>

				<nav className='hidden md:flex gap-6 text-white text-sm'>
					{navItems.map(item => (
						<ScrollLink
							key={item.id}
							to={item.id}
							containerId='scroll-container'
							smooth={true}
							duration={500}
							offset={-100}
							onClick={() => setActiveSection(item.id)} // <-- QO‘SHILGAN
							className={`relative group px-2 py-1 cursor-pointer ${
								activeSection === item.id
									? 'text-yellow-300'
									: 'hover:text-green-300'
							}`}
						>
							{item.name}
							<span
								className={`absolute left-0 -bottom-0.5 h-0.5 bg-yellow-300 transition-all duration-300 ${
									activeSection === item.id
										? 'w-full'
										: 'w-0 group-hover:w-full'
								}`}
							></span>
						</ScrollLink>
					))}
				</nav>

				<button
					className='md:hidden text-white right-4 focus:outline-none'
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				>
					{isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>
		</header>
	)
}

export default Header
