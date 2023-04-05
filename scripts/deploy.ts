import { ethers } from "hardhat";

async function main() {
  
  const YeeldToken = await ethers.getContractFactory("YeeldToken");
  const yeeldToken = await YeeldToken.deploy();

  await yeeldToken.deployed();

  console.log(
    `YeeldToken deployed to ${yeeldToken.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
