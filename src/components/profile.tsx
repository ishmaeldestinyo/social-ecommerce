import '@solana/wallet-adapter-react-ui/styles.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { LiaUserNinjaSolid } from 'react-icons/lia'
import { GiCancel } from "react-icons/gi"
import { FaRegUserCircle } from "react-icons/fa"
import { useState } from 'react'

const Profile = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<>
			<div className="fixed top-0 left-0 w-full flex items-center justify-between bg-[#0E0E0D] px-4 py-3 md:hidden z-40">
				<h2 className="font-tradewinds text-2xl md:text-4xl">Reeko</h2>
				<button onClick={() => setIsOpen(!isOpen)}>
					{(!isOpen) ? <FaRegUserCircle size={24} /> : <GiCancel size={24}/> }
				</button>
			</div>
			<aside
				className={`flex flex-col py-10 justify-between border-none fixed z-30 bg-[#0E0E0D] w-full items-center h-screen ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} ${!isOpen && 'hidden'}md:border-solid border-r-[2] border-[#808080] md:w-2xs md:left-0 md:top-0 md:translate-x-0`}
			>
				<div className="flex flex-col items-center">
					<h2 className="hidden md:block font-tradewinds text-4xl fixed">
						Reeko
					</h2>
					<LiaUserNinjaSolid
						size={160}
						className="border-10 rounded-full mt-[60px]"
					/>
				</div>
				<div className="flex flex-col items-center gap-16">
					<WalletMultiButton />
					<p>mode switch</p>
				</div>
			</aside>
		</>
	)
}

export default Profile