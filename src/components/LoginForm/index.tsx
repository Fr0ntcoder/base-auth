import { ChangeEvent, FC, FormEvent, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

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
	const { authUser } = useAuth()
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await authUser(formData.email, formData.password, isRegister)

		setFormData({ email: '', password: '' })
	}

	return (
		<div className={styles.wrap}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<h3 className={styles.form__title}>Войти</h3>
				<label className={styles.form__label}>
					<span className={styles.form__text}>Email</span>
					<input
						type="email"
						name="email"
						value={formData.email}
						placeholder="Введите email"
						onChange={handleChange}
						required
					/>
				</label>
				<label className={styles.form__label}>
					<span className={styles.form__text}>Пароль</span>
					<input
						type="password"
						name="password"
						value={formData.password}
						placeholder="Введите пароль"
						onChange={handleChange}
						required
					/>
				</label>
				<button type="submit" className={styles.form__btn}>
					Войти
				</button>
				<button
					type="submit"
					className={styles.form__btn}
					onClick={() => setIsRegister(true)}
				>
					Регистрация
				</button>
			</form>
		</div>
	)
}

export default LoginForm
