import retroPc from '../../assets/images/image-retro-pcs.jpg';
import topLaptops from '../../assets/images/image-top-laptops.jpg';
import gaming from '../../assets/images/image-gaming-growth.jpg';
import { useContext } from 'react';
import { NavContext } from '../../context/NavContext';

export const TopNews = () => {
	const { navButton } = useContext(NavContext);

	return (
		<section
			className={`mt-24 ${
				navButton ? '' : 'opacity-20 brightness-50'
			} md:grid md:grid-cols-1 md:col-start-1 md:col-end-2 md:row-start-3 md:mt-0 md:mr-10 xl:grid-cols-3 xl:col-start-1 xl:col-end-4 xl:mr-0 xl:mt-28`}
		>
			<article className='flex mb-14'>
				<figure className='w-auto'>
					<img
						className='w-60 h-52 max-w-min'
						src={retroPc}
						alt=''
					/>
				</figure>
				<div className='ml-6'>
					<h2 className='text-5xl font-bold text-gray-400'>01</h2>
					<h3 className='mt-4 text-3xl font-bold'>Reviving Retro PCs</h3>
					<p className='mt-4 text-xl text-gray-600'>What happens when old PCs are given modern upgrades?</p>
				</div>
			</article>

			<article className='flex mb-14'>
				<figure className='w-auto'>
					<img
						className='w-48 h-52 max-w-min'
						src={topLaptops}
						alt=''
					/>
				</figure>
				<div className='ml-6'>
					<h2 className='text-5xl font-bold text-gray-400'>02</h2>
					<h3 className='mt-4 text-3xl font-bold'>Top 10 Laptops of 2023</h3>
					<p className='mt-4 text-xl text-gray-600'>Our best picks for various needs and budgets.</p>
				</div>
			</article>

			<article className='flex mb-14'>
				<figure className='w-auto'>
					<img
						className='w-[13.6rem] h-52 max-w-min'
						src={gaming}
						alt=''
					/>
				</figure>
				<div className='ml-6'>
					<h2 className='text-5xl font-bold text-gray-400'>03</h2>
					<h3 className='mt-4 text-3xl font-bold'>The Growth of Gaming</h3>
					<p className='mt-4 text-xl text-gray-600'>How the pandemic has sparked fresh opportunities.</p>
				</div>
			</article>
		</section>
	);
};
