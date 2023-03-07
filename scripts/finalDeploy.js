const hre = require("hardhat");

async function main() {
	const [owner, from1, from2, from3] = await hre.ethers.getSigners();
	const coffee = await hre.ethers.getContractFactory("Coffee");
	const contract = await coffee.deploy();

	await contract.deployed();
	console.log("Address of contracts: ", contract.address);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
