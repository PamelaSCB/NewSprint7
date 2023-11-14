import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	max-width: 40rem;
	margin: 3rem auto;
    background-color: #111;
    display: flex;
	flex-direction: column;
	align-items: center;


	h2 {
		font-size: 2.5rem;
		text-transform: uppercase;
		text-align: center;
		margin-bottom: 1rem;
	}

	button {
		width: 12rem;
		background-color: #111;
		margin-top: 1rem;
		padding: 1rem;
		font-size: 1.3rem;
		color: #eef;
		border: 0.1rem solid #cede1e;
		border-radius: 2.5rem;
		text-transform: uppercase;
		cursor: pointer;
	}
	button:hover {
		border-color: #eef;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		label {
			display: flex;
			flex-direction: column;
            gap: 0.5rem;
			font-size: 1.2rem;
			text-transform: uppercase;
			letter-spacing: 0.15rem;
		}

		input {
			width: 25rem;
			margin-top: 0.5rem;
			background-color: #111;
			padding: 1rem;
			font-size: 1.1rem;
			color: #eef;
			border: 0.1rem solid #cede1e;
			border-radius: 2.5rem;
		}

		input:hover {
			border-color: #ccc;
		}

		p{
			font-size: 1.5rem;
		}
		
	}
	

		
`;
