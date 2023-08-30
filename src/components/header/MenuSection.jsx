/* eslint-disable react/prop-types */
import { useContext } from 'react';
import iconMenuClose from '../../assets/images/icon-menu-close.svg';
import { NavContext } from '../../context/NavContext';

export const MenuSection = () => {
	const { navButton, setNavButton } = useContext(NavContext);

	return (
		<div className='fixed z-50 right-0 top-0 w-2/3 h-screen bg-white drop-shadow-2xl animate__animated animate__fadeInRight animate__faster'>
			<article className='grid mt-14 mr-7'>
				<figure className='justify-self-end mr-2'>
					<img
						onClick={() => setNavButton(!navButton)}
						src={iconMenuClose}
						className='h-[3rem]'
						alt=''
					/>
				</figure>
				<nav className='grid mt-32'>
					<ul className='justify-self-start'>
						<li className='mt-10 ml-6 text-3xl font-medium cursor-default'>Home</li>
						<li className='mt-10 ml-6 text-3xl font-medium cursor-default'>New</li>
						<li className='mt-10 ml-6 text-3xl font-medium cursor-default'>Popular</li>
						<li className='mt-10 ml-6 text-3xl font-medium cursor-default'>Trending</li>
						<li className='mt-10 ml-6 text-3xl font-medium cursor-default'>Categories</li>
					</ul>
				</nav>
			</article>
		</div>
	);
};
