/* eslint-disable react-refresh/only-export-components */
'use client';
import { createContext, ReactNode, useContext } from 'react';
interface GitHubContextProps {
	githubUrl: string;
}
export const GitHubContext = createContext<GitHubContextProps | undefined>(undefined);

export const GitHubProvider = ({ children }: { children: ReactNode }) => {
	const githubUrl = 'https://github.com/enagtim';

	return <GitHubContext.Provider value={{ githubUrl }}>{children}</GitHubContext.Provider>;
};
export const useGitHub = () => {
	const context = useContext(GitHubContext);
	if (!context) {
		throw new Error('useGitHub must be used within a GitHubProvider');
	}
	return context;
};
