import { account, ID } from "@/lib/appwrite";

export interface UserAccount {
    $id: string;
    email: string;
    name: string;
  }
  
  export interface SignUpParams {
    email: string;
    password: string;
    name: string;
  }
  
  export interface SignInParams {
    email: string;
    password: string;
  }
  
  export interface ResetPasswordParams {
    email: string;
  }
  
  export interface ConfirmResetParams {
    userId: string;
    secret: string;
    password: string;
  }
  
  export const authApi = {
    // Create a new user account
    async signUp({ email, password, name }: SignUpParams): Promise<UserAccount> {
      await account.create(ID.unique(), email, password, name);
      await account.createEmailPasswordSession(email, password);
      return account.get();
    },
  
    // Create a new session using email and password
    async signIn({ email, password }: SignInParams): Promise<UserAccount> {
      await account.createEmailPasswordSession(email, password);
      return account.get();
    },
  
    // Delete the current session
    async signOut(): Promise<void> {
      await account.deleteSession('current');
    },
  
    // Create a password recovery request
    async resetPassword({ email }: ResetPasswordParams): Promise<void> {
      await account.createRecovery(
        email,
        `${window.location.origin}/reset-password`
      );
    },
  
    // Complete the password recovery process
    async confirmReset({
      userId,
      secret,
      password
    }: ConfirmResetParams): Promise<void> {
      await account.updateRecovery(userId, secret, password);
    },
  
    // Get the currently logged-in user
    async getCurrentUser(): Promise<UserAccount | null> {
      try {
        return await account.get();
      } catch (error) {
        return null;
      }
    }
  };
  