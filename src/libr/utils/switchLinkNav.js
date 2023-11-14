export const switchLinkNav = (state, action) => {
	switch (action.type) {
		case 'homeClick':
			return {
				home: true,
				startShips: false,
			};

		case 'startShipsClick':
			return {
				home: false,
				startShips: true,
			};

		default:
			return state;
	}
};
