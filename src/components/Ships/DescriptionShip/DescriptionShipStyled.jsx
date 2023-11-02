import styled from 'styled-components';

export const Container = styled.div`
	/* width: 60rem;
	margin: 1.5rem auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;
	background-color: #333;
	color: #fff; */
	
	margin: 3rem 3rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap:2rem; 
	background-color: #333;

	div:nth-child(1) {
		position: relative;
		border-right: 0.3rem solid #582e37;
		
	
		img {
			min-width: 100%;
			height: 40rem;
			object-fit: auto;
		}
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		font-size: 1.3rem;

		h2 {
			font-size: 1.8rem;
			font-weight: bold;
			text-transform: uppercase;
		}

		div {
			display: flex;
			flex-flow: column wrap;
			height: 13.45rem;
			gap: 0.5rem 2rem;
			margin-right: 1.5rem;
		}

		li {
			list-style: none;
			max-width: 50%;
			display: flex;
			justify-content: space-between;
			

			span:nth-child(1) {
				flex: 1;
				font-size: 1.25rem;
				font-weight: 600;
			}

			span:nth-child(2) {
				text-align: right;
			}
		}
	}
	div:nth-child(3) {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;

		button {
			width: 8rem;
			background-color: #111;
			padding: 1rem;
			font-size: 1.2rem;
			border: none;
			color: #898888;
			text-transform: uppercase;
			border-radius: 0.7rem;
			cursor: pointer;
			&:hover {
				outline: 0.1rem solid #ccc;
			}
		}
	}
	@media (max-width:768px) {
    ul {
      align-items: center;
    }

    div:nth-child(2) {
      width: 100%;
      height: auto;
      align-items: center;
      flex-wrap: nowrap;

      li {
        width: 60%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
 
`;
