import { createReducer, on } from '@ngrx/store';
import { loginSuccess, logout } from './auth.actions';

export interface AuthState {
  user: any | null;
  token: string | null;
  role: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  role: null
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user, token }) => {
    console.log('Login Success Reducer Called'); // ✅ Debugging
    return { ...state, user, token, role: user.role };
  }),
  on(logout, () => {
    console.log('Logout Reducer Called'); // ✅ Debugging
    return { ...initialState };
  })
);
