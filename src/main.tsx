import React from 'react'
import ReactDOM from 'react-dom/client'

import '@/assets/styles/main.scss'

import App from '@/App'
import { AuthProvider } from '@/providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AuthProvider>
			<App />
		</AuthProvider>
	</React.StrictMode>
)
