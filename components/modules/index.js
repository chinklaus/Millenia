import dynamic from 'next/dynamic';
import React from 'react';

const Freeform = dynamic(() => import('./Freeform'));
const Marquee = dynamic(() => import('./Marquee'));
const AccordionList = dynamic(() => import('../AccordionList'));

export const Module = ({ index, module }) => {
	const type = module._type;

	switch (type) {
		case 'freeform':
			return <Freeform data={module} />;
		case 'marquee':
			return <Marquee data={module} />;
		case 'accordionList':
			return <AccordionList data={module} />;

		default:
			return null;
	}
};
