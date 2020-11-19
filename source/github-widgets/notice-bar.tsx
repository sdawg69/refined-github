import React from 'dom-chef';
import XIcon from 'octicon/x.svg';
import select from 'select-dom';

interface Options {
	showCloseButton?: boolean;
	type?: 'success' | 'notice' | 'warn' | 'error';
}

/** https://primer.style/css/components/alerts */
export default function addNotice(
	message: string | Node | Array<string | Node>,
	{
		showCloseButton = true,
		type = 'notice'
	}: Options = {}
): void {
	const closeButton = (
		<button className="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
			<XIcon/>
		</button>
	);
	select('#start-of-content')!.after(
		<div className={`flash flash-full flash-${type}`}>
			<div className="container-lg px-3">
				{showCloseButton && closeButton} {message}
			</div>
		</div>
	);
}
