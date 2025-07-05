import hardhat, { ethers } from "hardhat";
const decimals = 1000000;

async function main() {

  const factory = "0x1097053Fd2ea711dad45caCcc45EfF7548fCB362"
  const router = "0xEfF92A263d31888d860bD50809A8D171709b7b1c" 
  const owner = "0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503"

  const SwapRouter = await ethers.getContractFactory('SwapRouter'); 
  const swapRouter = await SwapRouter.deploy(factory, router, owner);

  console.log(`SwapRouter deployed to ${swapRouter.target}`);

  console.log("Waiting for 5 confirmations");
  await swapRouter.deploymentTransaction().wait(10);
  console.log("Confirmed!");

  try {
    console.log("Verifying contract...");
    await hardhat.run("verify:verify", {
      address: swapRouter.target,
      constructorArguments: [factory, router, owner],
    });
  } catch (err) {
    if (err.message.includes("Reason: Already Verified")) {
      console.log("Contract is already verified!");
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
