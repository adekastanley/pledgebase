const clickContractAddress = "0x67c97D1FB8184F038592b2109F854dfb09C77C75";

const clickContractAbi = [
	{
		type: "function",
		name: "click",
		inputs: [],
		outputs: [],
		stateMutability: "nonpayable",
	},
] as const;

export const contracts = [
	{
		address: clickContractAddress,
		abi: clickContractAbi,
		functionName: "click",
		chainId: 11155111, // Add the chainId to specify Sepolia Testnet
		args: [], // Arguments for the function, empty since click() has no inputs
	},
];
