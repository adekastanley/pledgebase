import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FundButton } from "@coinbase/onchainkit/fund";
import { Identity, Name, Badge } from "@coinbase/onchainkit/identity";

import { useAccount } from "wagmi";
const MyAccount = () => {
	const { address } = useAccount();
	console.log(address);
	return (
		<div className="min-h-[100vh] w-full flex justify-center items-center px-1">
			<div className="">
				<Tabs defaultValue="account" className=" w-full sm:w-[400px]">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="account">Fund account</TabsTrigger>
						<TabsTrigger value="password">Make withdrawal</TabsTrigger>
					</TabsList>

					<TabsContent value="account">
						<Card>
							<CardHeader>
								<CardTitle>Fund</CardTitle>
								<div>
									<Identity
										address={
											address || "0x0000000000000000000000000000000000000000"
										}
										schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
										className="w-[3rem] "
									>
										<Name>
											<Badge className="bg-red-900" />
										</Name>
									</Identity>
								</div>
								<CardDescription>
									Click the fund button to either buy or send eth to you account{" "}
									<br />
									we recommend using the base network for lower fees
								</CardDescription>
							</CardHeader>

							<CardFooter>
								<Button className="w-full flex justify-center">
									<FundButton />
								</Button>
							</CardFooter>
						</Card>
					</TabsContent>
					<TabsContent value="password">
						<Card>
							<CardHeader>
								<CardTitle>Withdraw</CardTitle>
								<CardDescription>
									this section is where you withdraw funds
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
								<p>Page for withdrawing funds</p>
							</CardContent>
							<CardFooter>
								<Button className="w-full">Withdraw</Button>
							</CardFooter>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};
export default MyAccount;
