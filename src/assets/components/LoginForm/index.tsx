import { ChangeEvent, FC, FormEvent, useState } from 'react'
import styles from './LoginForm.module.scss'

type TFormData = {
	email: string
	password: string
}
const LoginForm: FC = () => {
	const [formData, setFormData] = useState<TFormData>({
		email: '',
		password: '',
	})

	const [isRegister, setIsRegister] = useState(false)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}
	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<div className={styles.root}>
			<form onSubmit={onSubmit}>
				<label>
					<input type="email" value={formData.email} name="email" onChange={handleChange} />
				</label>
				<input type="email" value={formData.email} name="email" onChange={handleChange} />
				<input type="password" value={formData.password} name="password" onChange={handleChange} />
			</form>
		</div>
	)
}

export default LoginForm
