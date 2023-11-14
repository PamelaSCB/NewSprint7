import styled from 'styled-components';

export const Container = styled.div`
	.start {
		font-size: 1.6rem;
		width: 120%;
		display: flex;
		justify-content: center;
		text-align: center;
		padding: 2rem 0;
		margin: 1.5rem 3rem;
		text-transform: uppercase;
		border-color: #f6f6f6;
	}
	.home {
		margin-right: 2rem;
		padding: 1rem;
		text-decoration: none;
	}
	.startShips {
		margin-right: 3rem;
		padding: 1rem;
		text-decoration: none;
	}

	.containerShips {
		background-size: 180rem;
		background-position: center 80%;
		margin: 1.5rem 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.shipContainer {
		background-color: #333;
		width: 70rem;
		margin: 0.8rem;
		padding: 1.2rem 1.5rem;

		&:hover {
			outline: 0.1rem solid #cede1e;
			border-radius: 0.5rem;
		}
	}
	.shipName {
		margin-bottom: 0.5rem;
		font-size: 1.4rem;
		text-transform: uppercase;
	}
`;
