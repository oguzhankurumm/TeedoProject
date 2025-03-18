import { RootState } from '_redux/store';

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated; // BOOLEAN
