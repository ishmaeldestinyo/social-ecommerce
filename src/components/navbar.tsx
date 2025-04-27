import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
	return (
		<section className="flex flex-col mt-6 gap-5 pb-4">
			<div className="flex border items-center rounded-lg px-4 gap-3 md:rounded-xl">
				<FaSearch size={24} />
				<input
					type="text"
					className="p-2 w-full outline-none md:p-3 text-xs md:text-base"
					placeholder='Search Products'
				/>
			</div>
		</section>
	)
}

export default Navbar