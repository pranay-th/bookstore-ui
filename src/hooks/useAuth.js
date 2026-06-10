import { useDispatch, useSelector } from 'react-redux';
import {
  signupThunk,
  loginThunk,
  verifyOTPThunk,
  verifyEmailThunk,
  resendVerificationThunk,
  logout,
  clearAuthError,
  clearSuccessMsg,
  selectIsAuthenticated,
  selectCurrentUser,
  selectAuthLoading,
  selectAuthError,
  selectSuccessMsg,
  selectPendingEmail,
} from '../store/slices/authSlice';

/**
 * useAuth — single hook for all authentication actions and state.
 *
 * Usage:
 *   const { user, isAuthenticated, signup, login, ... } = useAuth();
 */
export function useAuth() {
  const dispatch = useDispatch();

  return {
    // State
    isAuthenticated: useSelector(selectIsAuthenticated),
    user:            useSelector(selectCurrentUser),
    loading:         useSelector(selectAuthLoading),
    error:           useSelector(selectAuthError),
    successMsg:      useSelector(selectSuccessMsg),
    pendingEmail:    useSelector(selectPendingEmail),

    // Actions
    signup:               (data)    => dispatch(signupThunk(data)),
    login:                (data)    => dispatch(loginThunk(data)),
    verifyOTP:            (data)    => dispatch(verifyOTPThunk(data)),
    verifyEmail:          (data)    => dispatch(verifyEmailThunk(data)),
    resendVerification:   (email)   => dispatch(resendVerificationThunk(email)),
    logout:               ()        => dispatch(logout()),
    clearError:           ()        => dispatch(clearAuthError()),
    clearSuccessMsg:      ()        => dispatch(clearSuccessMsg()),
  };
}
