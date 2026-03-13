import { useEffect, useState } from 'react'

function Counter() {
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme === 'light' || savedTheme === 'dark') {
			return savedTheme
		}

		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'
	})
	const [count, setCount] = useState(0)

	const increment = () => setCount((prevCount) => prevCount + 1)
	const decrement = () => setCount((prevCount) => prevCount - 1)
	const reset = () => setCount(0)
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
	}

	useEffect(() => {
		document.body.classList.remove('theme-light', 'theme-dark')
		document.body.classList.add(`theme-${theme}`)
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<section id="center" className="counter-page">
			<div className="counter-header">
				<h1>Counter Component</h1>
				<div className="toggle-container">
					<label className="toggle-switch" htmlFor="themeToggle">
						<input
							type="checkbox"
							id="themeToggle"
							checked={theme === 'light'}
							onChange={toggleTheme}
						/>
						<span className="slider" />
					</label>
					<span>{theme === 'light' ? 'White Mode' : 'Dark Mode'}</span>
				</div>
			</div>
			<p className="counter-value">Current value: {count}</p>

			<div className="counter-actions">
				<button className="counter" onClick={decrement}>
					-1
				</button>
				<button className="counter" onClick={increment}>
					+1
				</button>
				<button className="counter" onClick={reset}>
					Reset
				</button>
			</div>
		</section>
	)
}

export default Counter
