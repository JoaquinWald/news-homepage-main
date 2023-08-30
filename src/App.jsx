import { Aside } from './components/aside';
import { Header } from './components/header';
import { Main } from './components/main';
import { TopNews } from './components/top-news';

function App() {
	return (
		<div className='p-6 md:p-24 md:grid md:grid-cols-2 lg:px-52 xl:px-[190px] xl:grid-cols-3 animate__animated animate__fadeIn animate__faster'>
			<Header />

			<Main />

			<Aside />

			<TopNews />
		</div>
	);
}

export default App;
