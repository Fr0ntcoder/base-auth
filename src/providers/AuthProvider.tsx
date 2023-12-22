import { ID } from 'appwrite'
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState,
} from 'react'

import { account } from '@/api/api.config'

type TUser = {
	email: string
	name: string
	$id: string
}

type TAuthUser = (
	email: string,
	password: string,
	isRegister: boolean
) => Promise<void>

type TAuthContext = {
	user: TUser | null
	authUser: TAuthUser
	logoutUser: () => Promise<void>
}
export const AuthContext = createContext<TAuthContext>({
	authUser: async () => {},
	logoutUser: async () => {},
	user: null,
})

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [user, setUser] = useState<TUser | null>(null)

	useEffect(() => {
		checkUserStatus()
	}, [])

	const authUser: TAuthUser = async (email, password, isRegister) => {
		try {
			if (isRegister) {
				await account.create(ID.unique(), email, password)
			}
			await account.createEmailSession(email, password)
			setUser(await account.get())
		} catch (error) {
			setUser(null)
		} finally {
			setIsLoading(false)
		}
	}

	const checkUserStatus = async () => {
		try {
			setUser(await account.get())
		} catch (error) {
			setUser(null)
		} finally {
			setIsLoading(false)
		}
	}

	const logoutUser = async () => {
		await account.deleteSession('current')
		setUser(null)
		setIsLoading(false)
	}
	const contextData: TAuthContext = {
		user,
		authUser,
		logoutUser,
	}
	return (
		<AuthContext.Provider value={contextData}>
			{isLoading ? <span>Идет загрузка...</span> : children}
		</AuthContext.Provider>
	)
}
