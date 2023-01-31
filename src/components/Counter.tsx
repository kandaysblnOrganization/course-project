import React from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
	const [ count, setCount ] = React.useState( 0 );

	const handleChangeCount = ( count: number = 1, type: string = 'increment' ) => {
		setCount( ( prevState ) => type === 'increment' ? prevState + count : prevState - count );
	};

	return (
		<div>
			<div>{ count }</div>
			<button
				className={ classes.button }
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