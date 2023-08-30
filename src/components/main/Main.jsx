import mobileImg from '../../assets/images/image-web-3-mobile.jpg';
import desktopImg from '../../assets/images/image-web-3-desktop.jpg';
import { useContext } from 'react';
import { NavContext } from '../../context/NavContext';

export const Main = () => {
	const { navButton } = useContext(NavContext);

	return (
		<main className={`mt-14 mb-20 ${navButton ? '' : 'opacity-20 brightness-50'} md:col-start-1 md:col-end-3 md:mt-0 xl:mr-10`}>
			<article className='md:grid'>
				<picture className=''>
					<source
						media='(min-width: 768px)'
						srcSet={desktopImg}
						alt=''
					/>
					<img
						className='w-[400px] m-auto md:w-screen'
						src={mobileImg}
						alt=''
					/>
				</picture>

				<div className='md:grid md:grid-cols-2'>
					<h1 className='text-7xl font-extrabold mt-10 md:mr-0 xl:pr-20'>The Bright Future of Web 3.0?</h1>
					<div className='h-min md:ml-4'>
						<p className='text-2xl mt-8 text-gray-600 leading-8 xl:'>
							We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it
							really fulfilling its promise?
						</p>
						<button className='px-16 py-5 mt-12 text-2xl font-bold text-white tracking-widest bg-red-500 md:col-start-2 md:mt-7'>READ MORE</button>
					</div>
				</div>
			</article>
		</main>
	);
};
