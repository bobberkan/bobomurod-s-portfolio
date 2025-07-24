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
			<div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl bg-[#1f1f2d] text-gray-400 text-xs flex justify-between items-center px-4 py-2 font-mono z-50 border-t border-white/10'>
				<div className='flex items-center gap-4'>
					<span className='text-green-400'>●</span>
					<span>
						<a
							href='https://ru.wikipedia.org/wiki/UTF-8'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-white transition'
						>
							UTF-8
						</a>
					</span>
					<span>|</span>
					<span>
						<a
							href='https://developer.mozilla.org/en-US/docs/Glossary/CRLF'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-white transition'
						>
							CRLF
						</a>
					</span>
					<span>|</span>
					<span> 1.0.0 </span>
					<span>|</span>
					<span>
						<a
							href='https://react.dev/'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-white transition'
						>
							React v19.1.0
						</a>
					</span>
					<span>|</span>
					<span>
						<a
							href='https://tailwindcss.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-white transition'
						>
							Tailwind CSS v3.2.4
						</a>
					</span>
					<span>|</span>
					<span>
						<a
							href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-white transition'
						>
							JavaScript
						</a>
					</span>
				</div>
				<div className='flex items-center gap-4'>
					<a
						href='https://github.com/xbobomrod'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-white transition'
					>
						GitHub
					</a>
					<a
						href='https://linkedin.com/in/XBobomrod'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-white transition'
					>
						LinkedIn
					</a>
					<a
						href='xbobomurod50@gmail.com'
						className='hover:text-white transition'
					>
						Email
					</a>
					<span>| Ln 1, Col 1</span>
				</div>
			</div>
		</>
	)
}

export default Footer
