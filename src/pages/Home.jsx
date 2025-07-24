import { useEffect, useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
// import Footer from './Footer'; // Footer component chaqirish

const Home = () => {
	const cursorRef = useRef(null)
	const [showCursor, setShowCursor] = useState(true)

	useEffect(() => {
		const handleResize = () => {
			setShowCursor(window.innerWidth >= 1024)
		}

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		const moveCursor = e => {
			const cursor = cursorRef.current
			if (cursor) {
				cursor.style.left = `${e.clientX}px`
				cursor.style.top = `${e.clientY}px`
			}
		}

		if (showCursor) {
			window.addEventListener('mousemove', moveCursor)
		} else {
			window.removeEventListener('mousemove', moveCursor)
		}

		return () => window.removeEventListener('mousemove', moveCursor)
	}, [showCursor])

	return (
		<>
			<section
				id='/home'
				className='relative min-h-screen flex flex-col justify-center items-center text-center bg-[#0f111a] overflow-hidden pt-24'
			>
				{/* Grid Lines Overlay */}
				<div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05) 1px,transparent 1px)] bg-[size:30px_30px]'></div>

				{/* Glowing Blobs */}
				<div className='absolute w-96 h-96 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 opacity-20 rounded-full blur-[120px] top-10 left-10 animate-blob'></div>
				<div className='absolute w-96 h-96 bg-gradient-to-tr from-green-500 via-cyan-500 to-teal-500 opacity-20 rounded-full blur-[120px] bottom-10 right-10 animate-blob delay-500'></div>

				{/* Custom Cursor */}
				{showCursor && (
					<div
						ref={cursorRef}
						className='fixed z-50 w-4 h-4 bg-white rounded-full pointer-events-none mix-blend-difference transition-transform duration-150'
					></div>
				)}

				{/* Fake Code Comment */}
				<h2 className='text-gray-400 text-left w-full max-w-3xl font-mono text-sm mb-4'>
					// Welcome to my Portfolio
				</h2>

				{/* Fake Terminal Intro */}
				<div className='relative z-10 w-full max-w-3xl bg-[#1e1e2f] text-left text-green-400 p-4 rounded-md shadow-lg font-mono text-sm md:text-base mb-10'>
					<p>
						<span className='text-blue-400'>bobomurod@portfolio</span>:~$ npm
						start
					</p>
					<p>Starting the development server...</p>
					<p>✔ Compiled successfully!</p>
					<p>
						Open <a href='localhost://3000'>localhost://3000</a> to view it in the browser.
					</p>
				</div>

				{/* Main Content */}
				<h1 className='text-5xl md:text-6xl font-extrabold mb-6 text-white animate-fade-in'>
					Kh Bobomurod
				</h1>
				<TypeAnimation
					sequence={[
						'Frontend Developer',
						2000,
						'Creative Coder',
						2000,
						'UI/UX Enthusiast',
						2000,
					]}
					wrapper='span'
					speed={50}
					repeat={Infinity}
					className='text-xl md:text-2xl max-w-2xl mb-10 text-green-300 animate-fade-in delay-200'
				/>
			</section>
		</>
	)
}

export default Home
