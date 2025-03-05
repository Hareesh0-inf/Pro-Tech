export const login = (username: string, password: string): boolean => {
    // Perform login logic (e.g., call an API)
    // For now, we'll assume the login is always successful
    localStorage.setItem('isLoggedIn', 'true');
    return true;
};

export const logout = (): void => {
    localStorage.removeItem('isLoggedIn');
};

export const isLoggedIn = (): boolean => {
    return localStorage.getItem('isLoggedIn') === 'true';
};
