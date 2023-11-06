import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 6rem;
	background-color: #000;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
	text-align: center;
	font-size: 1.4rem;
	padding: 4rem 4rem 3rem;

	a {
		text-decoration: none;
		font-size: 1.7rem;
		color: #eef;
	}

	p:nth-of-type(1) {
		margin-bottom: 1.5rem;
	}

	ul {
		list-style: none;
		display: flex;
		flex-flow: wrap;
		align-items: center;
		justify-content: center;
	}

	ul:nth-of-type(1) {
		gap: 3rem;
		margin-bottom: 4rem;

		li:nth-child(6) {
			padding-left: 2rem;
			border-left: 0.1rem solid #444;
		}
	}

	ul:nth-of-type(2) {
		gap: 2rem;

		li {
			padding-right: 2rem;
			border-right: 0.1rem solid #444;
		}

		li:last-child {
			border-right: none;
		}

		a {
			height: 100%;
			font-size: 1.1rem;
			padding-bottom: 0.15rem;
			border-bottom: 0.1rem solid #ccc;
		}

		a:hover {
			border-bottom: none;
		}
	}

	@media (max-width: 768px) {
		ul:nth-of-type(2) {
			width: 40rem;
			margin-top: 0.75rem;

			li:nth-child(3) {
				border-right: none;
			}
		}
	}

	@media (max-width: 480px) {
		ul:nth-of-type(1) {
			gap: 2rem;
			margin-bottom: 3rem;
		}

		ul:nth-of-type(2) {
			flex-direction: column;
			gap: 1rem;
			margin-top: 1rem;

			li {
				border-right: none;
			}
		}
	}
`;
