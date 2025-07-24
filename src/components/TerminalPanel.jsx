import { useEffect, useRef, useState } from 'react'

const TerminalPanel = () => {
	const terminalRef = useRef(null)
	const [logs, setLogs] = useState([])

	const terminalLines = [
		'bobomurod@portfolio:~$ npm start',
		'Starting the development server...',
		'Compiled successfully!',
		'You can now view portfolio in the browser.',
		'Local: http://localhost:3000',
		'Note that the development build is not optimized.',
		'To create a production build, use npm run build.',
		'',
	]

	useEffect(() => {
		let lineIndex = 0
		let interval

		const addLine = () => {
			if (lineIndex < terminalLines.length) {
				setLogs(prev => [...prev, terminalLines[lineIndex]])
				lineIndex++
			} else {
				clearInterval(interval)
			}
		}

		interval = setInterval(addLine, 1500)
		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		if (terminalRef.current) {
			terminalRef.current.scrollTop = terminalRef.current.scrollHeight
		}
	}, [logs])

	return (
		<>
			{/* Desktop Fixed Panel */}
			<div className='fixed bottom-0 left-64 right-0 bg-[#1e1e2f] text-green-400 text-sm py-2 px-4 border-t border-white/10 hidden md:block z-40'>
				<div ref={terminalRef} className='space-y-2'>
					{logs.map((line, index) => (
						<p key={index} className='whitespace-pre-wrap'>
							{line}
						</p>
					))}
				</div>
			</div>

			{/* Mobile Static Panel (Above Footer) */}
			{/* <div className=' md:hidden bg-[#1e1e2f] text-green-400 text-sm py-4 px-4 border-t border-white/10 sticky bottom-0 z-30'>
				<div className='space-y-2 overflow-y-auto max-h-40'>
					{terminalLines.map((line, index) => (
						<p key={index} className='whitespace-pre-wrap'>
							{line}
						</p>
					))}
				</div>
			</div> */}
		</>
	)
}

export default TerminalPanel
