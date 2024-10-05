import { OnchainKitProvider } from "@coinbase/onchainkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { base } from "wagmi/chains";
import { type ReactNode, useState } from "react";
import { type State, WagmiProvider } from "wagmi";

import { getConfig } from "@/services/wagmi";

export function Providers(props: {
	children: ReactNode;
	initialState?: State;
}) {
	const [config] = useState(() => getConfig());
	const [queryClient] = useState(() => new QueryClient());

	const apiKey = import.meta.env.VITE_ONCHAINKIT_API_KEY || ""; // Update here
	const chain = base;

	return (
		<WagmiProvider config={config} initialState={props.initialState}>
			<QueryClientProvider client={queryClient}>
				<OnchainKitProvider apiKey={apiKey} chain={chain}>
					{props.children}
				</OnchainKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}
