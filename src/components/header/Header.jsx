import logo from '../../assets/images/logo.svg';
import iconMenu from '../../assets/images/icon-menu.svg';
import { useContext } from 'react';
import { MenuSection } from './MenuSection';
import { NavContext } from '../../context/NavContext';

export const Header = () => {
	const { navButton, setNavButton } = useContext(NavContext);

	return (
		<header className='relative flex justify-between items-center mt-7 md:col-start-1 md:col-end-4 md:mb-10 xl:mb-20'>
			<section className=''>
				<figure className={`${navButton ? '' : 'opacity-20 brightness-50'}`}>
					<img
						className='w-20'
						src={logo}
						alt=''
					/>
				</figure>
			</section>

			<section className='hidden md:inline-block'>
				<nav className='inline-block'>
					<ul className='flex'>
						<li className='px-4 text-2xl xl:text-3xl font-medium cursor-default'>Home</li>
						<li className='px-4 text-2xl xl:text-3xl font-medium cursor-default'>New</li>
						<li className='px-4 text-2xl xl:text-3xl font-medium cursor-default'>Popular</li>
						<li className='px-4 text-2xl xl:text-3xl font-medium cursor-default'>Trending</li>
						<li className='pl-4 text-2xl xl:text-3xl font-medium cursor-default'>Categories</li>
					</ul>
				</nav>
			</section>

			<section className='absolute grid grid-cols-3 w-full md:hidden'>
				{navButton ? (
					<figure className='col-start-3 justify-self-end'>
						<img
							onClick={() => setNavButton(!navButton)}
							src={iconMenu}
							className='w-[4rem] mt-2'
							alt=''
						/>
					</figure>
				) : (
					<MenuSection />
				)}
			</section>
		</header>
	);
};
