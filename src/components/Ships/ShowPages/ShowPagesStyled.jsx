import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	margin-top: 1rem;
	margin-bottom: 1rem;

	button {
		width: 14rem;
		background-color: '#111';
		padding: 1rem;
		font-size: 1.3rem;
		color: '#eef';
		border: 0.1rem solid transparent;
		border-radius: 0.5rem;
		text-transform: uppercase;
		cursor: pointer;
	}

	button:hover {
		border-color: '#ccc';
	}

	span {
		font-size: 1.5rem;
		width: 1rem;
	}

	button[disabled] {
		color: '#777';
	}

	button[disabled]:hover {
		pointer-events: none;
	}
`;
