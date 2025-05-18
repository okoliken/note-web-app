import { Client, Account, ID } from 'appwrite';

// Initialize Appwrite
const client = new Client();
const account = new Account(client);

// Configure client
const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;
const project = process.env.NEXT_PUBLIC_PROJECT;

if (!endpoint || !project) {
  throw new Error('Missing required environment variables for Appwrite configuration');
}

client.setEndpoint(endpoint).setProject(project);

export { client, account, ID };