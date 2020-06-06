export type HomeStackNavigationParams = {
	Home: { title: string },
	Details: { title: string }
}

export type RootStackParams = {
	HomeStack: HomeStackNavigationParams;
	Settings: { title: string };
};

