import {
	ConnectWallet,
	Wallet,
	WalletDropdown,
	WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { Address, Avatar, Name, Identity } from "@coinbase/onchainkit/identity";
import { color } from "@coinbase/onchainkit/theme";

export function WalletComponents() {
	return (
		<div className="flex justify-end ">
			<Wallet className="">
				<ConnectWallet>
					<Avatar className="h-6 w-6" />
					<Name />
				</ConnectWallet>
				<WalletDropdown className="bg-black">
					<Identity className="px-4 pt-3 pb-2 " hasCopyAddressOnClick>
						<Avatar className="shadow-sm mx-1 border-2 border-primary " />
						<Name className=" my-1" />
						<Address className={""} />
						<Address className={color.foregroundMuted} />
					</Identity>
					<WalletDropdownDisconnect className="bg-red-500 text-white  text-center w-full pl-10 pb-2 rounded  " />
				</WalletDropdown>
			</Wallet>
		</div>
	);
}
