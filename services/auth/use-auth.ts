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
    mutationFn: authApi.signUp
  });

  // Sign in mutation
  const signIn = useMutation({
    mutationFn: authApi.signIn,
  });

  // Sign out mutation
  const signOut = useMutation({
    mutationFn: authApi.signOut,
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
      router.push('/sign-in')
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