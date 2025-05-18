import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { authApi } from './auth-api';
import { useRouter } from 'next/navigation';

export default function useAuth() {
  const queryClient = useQueryClient();
  const router = useRouter();

  // Get current user query
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ['user'],
    queryFn: authApi.getCurrentUser,
  });

  // Sign up mutation
  const signUp = useMutation({
    mutationFn: authApi.signUp,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data);
      router.push('/');
    },
  });

  // Sign in mutation
  const signIn = useMutation({
    mutationFn: authApi.signIn,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data);
      router.push('/');  
    },
    onError: (error) => {
     return error.message
    }
  });

  // Sign out mutation
  const signOut = useMutation({
    mutationFn: authApi.signOut,
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
    },
  });

  // Reset password mutation
  const resetPassword = useMutation({
    mutationFn: authApi.resetPassword,
  });

  // Confirm password reset mutation
  const confirmReset = useMutation({
    mutationFn: authApi.confirmReset,
  });

  return {
    user,
    isLoadingUser,
    signUp,
    signIn,
    signOut,
    resetPassword,
    confirmReset,
    isAuthenticated: !!user,
  };
}