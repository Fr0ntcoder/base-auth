import LoginForm from '@/components/LoginForm'

import { useAuth } from '@/hooks/useAuth'

function App() {
	const { user, logoutUser } = useAuth()

	return (
		<>
			{user ? (
				<div>
					<h2>Вы вошли в систему!</h2>
					<button onClick={() => logoutUser()}>Выйти</button>
				</div>
			) : (
				<LoginForm />
			)}
		</>
	)
}

export default App
