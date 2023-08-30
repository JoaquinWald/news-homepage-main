/* eslint-disable react/prop-types */
import { useState } from 'react';
import { NavContext } from './NavContext';

export const NavProvider = ({ children }) => {
	const [navButton, setNavButton] = useState(true);

	return (
		<>
			<NavContext.Provider value={{ navButton, setNavButton }}>{children}</NavContext.Provider>
		</>
	);
};
