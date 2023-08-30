import { useContext } from 'react';
import { NavContext } from '../../context/NavContext';

export const Aside = () => {
	const { navButton } = useContext(NavContext);

	return (
		<aside
			className={`bg-[#00001A] ${
				navButton ? '' : 'opacity-20 brightness-50'
			} md:col-start-2 md:col-end-3 md:h-min xl:col-start-3 xl:col-end-4 xl:row-start-2 xl:row-end-4 xl:mb-20`}
		>
			<article className='p-8'>
				<h2 className='text-5xl font-bold mb-10 text-orange-300'>New</h2>

				<div className='mt-10 mb-10'>
					<h3 className='text-3xl font-bold text-gray-100'>Hydrogen VS Electric Cars</h3>
					<p className='text-2xl mt-4 leading-10 text-gray-400'>Will hydrogen-fueled cars ever catch up to EVs?</p>
				</div>
				<hr />

				<div className='mt-10 mb-10'>
					<h3 className='text-3xl font-bold text-gray-100'>The Downsides of AI Artistry</h3>
					<p className='text-2xl mt-4 leading-10 text-gray-400'>What are the possible adverse effects of on-demand Al image generation?</p>
				</div>
				<hr />

				<div className='mt-10'>
					<h3 className='text-3xl font-bold text-gray-100'>Is VC Funding Drying Up?</h3>
					<p className='text-2xl mt-4 leading-10 text-gray-400'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
				</div>
			</article>
		</aside>
	);
};
