import { Container } from './ShowPagesStyled';
export function ShowPages({ page, setPage, next }) {
	return (
		<Container>
			<button
				onClick={() => {
					setPage(prev => Math.max(prev - 1, 1));
				}}
				disabled={page === 1}
			>
				Previous page
			</button>
			<span>{page}</span>
			<button
				onClick={() => {
					if (next) setPage(prev => prev + 1);
				}}
				disabled={page === 4}
			>
				{' '}
				Next page
			</button>
		</Container>
	);
}
