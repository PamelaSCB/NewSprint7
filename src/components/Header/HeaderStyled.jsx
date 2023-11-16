import styled from 'styled-components';

export const Container = styled.div`
	background-color: #111;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 0;

	div:nth-of-type(1) {
		width: 100%;
		display: block;
		text-align: center;
	}
	div:nth-of-type(2) {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		margin-left: -18rem;
		margin-right: 2rem;
	}

	img {
		max-height: 8rem;
		min-height: 5rem;
		max-width: 40%;
		height: auto;
	}

	.button {
		width: 8rem;
		background-color: #111;
		padding: 1rem;
		font-size: 1.3rem;
		border: none;
		text-decoration: none;
		color: #eef;
		text-transform: uppercase;
		cursor: pointer;
		&:hover {
			border-bottom: 0.1rem solid #cede1e;
		}
	}
	.logout {
		font-size: 1.5rem;
		background-color: #111;
		color: #eef;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		gap: 2rem;

		div:nth-of-type(2) {
			margin: 0;
		}
	}
	@media (max-width: 480px) {
		button {
			font-size: 1rem;
		}
	}
`;
