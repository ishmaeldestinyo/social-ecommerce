import '@solana/wallet-adapter-react-ui/styles.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Navbar from './navbar'

type card = {
	imgURL?: string
	name : string
	walletAddress?: string
	post:string
}

const DashBoard = () => {
	return (
		<main className="flex flex-col relative min-h-screen md:ml-[288px] md:px-8">
			<div className="sticky top-[56px] bg-[#0E0E0D] px-4 md:pt-10 md:top-0 md:px-0">
				<div className="flex justify-end">
					<WalletMultiButton />
				</div>
				<Navbar />
			</div>
			<section
				className={`my-18 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-4 px-4 md:gap-10 md:my-6 md:px-0`}
			>
				{token.map(
					({
						name,
						walletAddress,
						imgURL,
						post
					}: card) => (
						<div
							key={name}
							className='whale-card'
						>
							<div
								className={'flex gap-4 items-center'}
							>
								<img
									src={imgURL || '/globe.svg'}
									className='size-12 rounded-full'
								/>
								<div>
									<h3 className="font-semibold capitalize text-base">
										{name}
									</h3>
									<p className="font-medium text-xs text-[#ffffff80]">
                                        {walletAddress}
                                    </p>
								</div>
							</div>
							<p className="font-semibold text-xs text-[#fff]">{post}</p>
						</div>
					)
				)}
			</section>
		</main>
	)
}

export default DashBoard

const token = [
	{
		imgURL:
			'https://tse2.mm.bing.net/th/id/OIP.snGQVKaMS-otJyoj8RqWFgHaEm?rs=1&pid=ImgDetMain',
		name: 'superteam Nigeria',
		walletAddress: '0xsuperteam.nigeria',
		post :'Reeko is undoudtly the best entry in this hackerthon'
	},
	{
		imgURL:
			'https://tse2.mm.bing.net/th/id/OIP.snGQVKaMS-otJyoj8RqWFgHaEm?rs=1&pid=ImgDetMain',
		name: 'superteam Poland',
		walletAddress: '0xsuperteam.poland',
		post:'Rooting for reeko. merch still on sale at 50% discount'
	},
	{
		imgURL:
			'https://tse2.mm.bing.net/th/id/OIP.snGQVKaMS-otJyoj8RqWFgHaEm?rs=1&pid=ImgDetMain',
		name: 'superteam India',
		walletAddress: '0xsuperteam.india',
		post:'nice merch on sale at the super team india store'
	}
]