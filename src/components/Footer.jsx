import { Github, Linkedin, Mail, RotateCw } from 'lucide-react'
import { useEffect, useState } from 'react'

const Footer = () => {
	const [scrollProgress, setScrollProgress] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight
			const progress = (scrollTop / docHeight) * 100
			setScrollProgress(progress)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			{/* Scroll Progress Bar */}
			<div className='fixed top-0 left-0 w-full h-1 z-50'>
				<div
					className='bg-green-400 h-full transition-all duration-150'
					style={{ width: `${scrollProgress}%` }}
				></div>
			</div>

			{/* Status Bar */}
			<div className='fixed bottom-0 left-0 w-full bg-[#00abee] text-black-400 text-sm flex justify-between items-center px-4 py-2 font-mono z-50 border-t border-white/10'>
				{/* Left Section */}
				<div className='flex items-center gap-2 md:gap-4'>
					<span className='text-green-400'>●</span>
					<a
						href='https://en.wikipedia.org/wiki/UTF-8'
						target='_blank'
						rel='noopener noreferrer'
						className='hidden sm:inline hover:text-white transition'
					>
						UTF-8
					</a>
					<span className='hidden sm:inline'>|</span>
					<a
						href='https://developer.mozilla.org/en-US/docs/Glossary/CRLF'
						target='_blank'
						rel='noopener noreferrer'
						className='hidden sm:inline hover:text-white transition'
					>
						CRLF
					</a>
					<span className='hidden sm:inline'>|</span>
					<a
						href='https://react.dev/'
						target='_blank'
						rel='noopener noreferrer'
						className='hidden sm:inline hover:text-white transition'
					>
						React v19.1.0
					</a>
					<span className='hidden sm:inline'>|</span>
					<a
						href='https://tailwindcss.com/'
						target='_blank'
						rel='noopener noreferrer'
						className='hidden sm:inline hover:text-white transition'
					>
						Tailwind v3.2.4
					</a>
					<span className='hidden sm:inline'>|</span>
					<a
						href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
						target='_blank'
						rel='noopener noreferrer'
						className='hidden sm:inline hover:text-white transition'
					>
						JavaScript
					</a>
					<span className='hidden sm:inline'>|</span>
				</div>

				{/* Right Section */}
				<div className='flex items-center gap-4'>
					<a
						href=''
						rel='noopener noreferrer'
						className='hidden sm:inline hover:text-white transition '
					>
						<RotateCw />
					</a>
					<a
						href='https://github.com/xbobomrod'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-white transition'
					>
						<Github size={16} className='sm:hidden' />
						<span className='hidden sm:inline'>GitHub</span>
					</a>
					<a
						href='https://linkedin.com/in/bobomurod-xudayberganov'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-white transition'
					>
						<Linkedin size={16} className='sm:hidden' />
						<span className='hidden sm:inline'>LinkedIn</span>
					</a>
					<a
						href='mailto:xbobomurod50@gmail.com'
						className='hover:text-white transition'
					>
						<Mail size={16} className='sm:hidden' />
						<span className='hidden sm:inline'>Email</span>
					</a>
					<span>| Ln 1, Col 1</span>
				</div>
			</div>
		</>
	)
}

export default Footer
