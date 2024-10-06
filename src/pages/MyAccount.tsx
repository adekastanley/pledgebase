import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FundButton } from "@coinbase/onchainkit/fund";

const MyAccount = () => {
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
								<CardTitle>Password</CardTitle>
								<CardDescription>
									Change your password here. After saving, you'll be logged out.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
								<div className="space-y-1">
									<Label htmlFor="current">Current password</Label>
									<Input id="current" type="password" />
								</div>
								<div className="space-y-1">
									<Label htmlFor="new">New password</Label>
									<Input id="new" type="password" />
								</div>
							</CardContent>
							{/* <CardFooter>
								<Button>Save password</Button>
							</CardFooter> */}
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};
export default MyAccount;
