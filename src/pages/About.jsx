const About = () => (
	<section
		id='/about'
		className='relative min-h-screen flex flex-col justify-center items-center text-left bg-[#0f111a] overflow-hidden pt-24 px-4'
	>
		{/* Grid Overlay */}
		<div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03) 1px,transparent 1px)] bg-[size:30px_30px]'></div>

		{/* Gradient Blobs */}
		<div className='absolute w-96 h-96 bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 opacity-20 rounded-full blur-[120px] top-20 left-10 animate-blob'></div>
		<div className='absolute w-96 h-96 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 opacity-20 rounded-full blur-[120px] bottom-20 right-10 animate-blob delay-500'></div>

		{/* Code Comment Title */}
		<h2 className='text-gray-400 font-mono text-sm mb-6 w-full max-w-3xl'>
			// About Me
		</h2>

		{/* Content Block like Code Editor */}
		<div className='relative z-10 w-full max-w-3xl bg-[#1e1e2f] text-gray-300 p-6 rounded-lg shadow-xl font-mono text-sm md:text-base leading-relaxed'>
			<p className='mb-4'>
				Hello! I'm a passionate web developer with experience in building
				modern, responsive websites and applications using React, JavaScript,
				and other web technologies.
			</p>
			<p className='mb-4'>
				I enjoy solving problems, learning new technologies, and collaborating
				with others to create impactful digital experiences. My portfolio
				showcases some of my recent projects and skills.
			</p>
			<p>
				Feel free to explore my work and reach out if you'd like to connect!
			</p>
		</div>
	</section>
)

export default About
