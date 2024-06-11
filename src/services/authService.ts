import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface LoginResponse {
  token: string;
}

export const authService = {
  async login(username: string, password: string): Promise<string> {
    try {
      const response = await axios.post<LoginResponse>(`${API_BASE_URL}/auth/login`, {
        username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      return token;
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed');
    }
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  },

  logout() {
    localStorage.removeItem('authToken');
  },
};
