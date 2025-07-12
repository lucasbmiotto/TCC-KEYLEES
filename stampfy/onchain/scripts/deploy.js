const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contract with address:", deployer.address);

  const Stampfy = await hre.ethers.getContractFactory("Stampfy");
  const contract = await Stampfy.deploy();
  await contract.waitForDeployment();

  console.log("Contract deployed at:", contract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
