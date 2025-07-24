import { Folder, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import reactimg from '../assets/react.svg'

const ExplorerSidebar = ({ isOpen, setIsOpen }) => {
	const [activeSection, setActiveSection] = useState('home')

	const sections = [
		{ name: 'Home.jsx', id: 'home' },
		{ name: 'About.jsx', id: 'about' },
		{ name: 'Projects.jsx', id: 'projects' },
		{ name: 'Contact.jsx', id: 'contact' },
	]

	useEffect(() => {
		const handleScroll = () => {
			const scrollY =
				document.getElementById('scroll-container')?.scrollTop || 0
			const offsets = sections.map(section => {
				const el = document.getElementById(section.id)
				return {
					id: section.id,
					offsetTop: el ? el.offsetTop - 300 : 0,
				}
			})

			const current = offsets.reduce((prev, curr) =>
				scrollY >= curr.offsetTop ? curr : prev
			)

			setActiveSection(current.id)
		}

		const scrollContainer = document.getElementById('scroll-container')
		if (scrollContainer) {
			scrollContainer.addEventListener('scroll', handleScroll)
			handleScroll() // Initial check
		}

		return () => {
			if (scrollContainer) {
				scrollContainer.removeEventListener('scroll', handleScroll)
			}
		}
	}, [])

	return (
		<>
			{/* Mobile Menu Button */}
			{/* <button
				className='fixed top-4 left-4 z-50 bg-[#1e1e2f] p-2 rounded-md md:hidden text-white'
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? <X size={20} /> : <Menu size={20} />}
			</button> */}

			{/* Sidebar */}
			<aside
				className={`fixed top-0 left-0 h-full w-64 bg-[#1e1e2f] text-gray-300 font-mono text-sm transform transition-transform duration-300 z-40 ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} md:translate-x-0 md:block`}
			>
				<div className='p-4 border-b border-white/10 text-green-400 flex items-center gap-2'>
					<Folder size={18} />
					<span><a href="home" >Explorer</a></span>
				</div>
				<div className='p-4 space-y-2'>
					{sections.map(section => (
						<ScrollLink
							key={section.id}
							to={section.id}
							containerId='scroll-container' // 👈 Scroll container id
							smooth={true}
							duration={500}
							offset={-80} // Headerni yopmasligi uchun
							onClick={() => setIsOpen(false)}
							className={`flex items-center gap-2 cursor-pointer ${
								activeSection === section.id
									? 'text-yellow-300'
									: 'hover:text-white'
							}`}
						>
							<img src={reactimg} alt='' className='w-3' />
							<span>{section.name}</span>
							{activeSection === section.id && (
								<span className='ml-auto h-4 w-1 bg-yellow-300 rounded-sm'></span>
							)}
						</ScrollLink>
					))}
				</div>
			</aside>

			{/* Mobile Overlay */}
			{isOpen && (
				<div
					className='fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-30'
					onClick={() => setIsOpen(false)}
				></div>
			)}
		</>
	)
}

export default ExplorerSidebar
