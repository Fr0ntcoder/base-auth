import { Account, Client } from 'appwrite'

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID || ''

export const client = new Client()
	.setEndpoint(API_ENDPOINT)
	.setProject(PROJECT_ID)

export const account = new Account(client)

export default client
