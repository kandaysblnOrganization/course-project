import React from 'react';
import './Counter.scss';

export const Counter = () => {
	const [ count, setCount ] = React.useState( 0 );

	const handleChangeCount = ( count: number = 1, type: string = 'increment' ) => {
		setCount( ( prevState ) => type === 'increment' ? prevState + count : prevState - count );
	};

	return (
		<div>
			<div>{ count }</div>
			<button
				onClick={
					handleChangeCount.bind( this, 2, 'increment' )
				}
			>
				increment
			</button>
			<button
				onClick={
					handleChangeCount.bind( this, 1, 'decrement' )
				}
			>
				decrement
			</button>
		</div>
	);
};