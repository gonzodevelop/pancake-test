import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { ethers } from 'hardhat';
import { expect } from 'chai';


describe('SwapRouter', function () {
  async function deploy() {
    const 
      [ owner ] = await ethers.getSigners();

    const factory = "0x1097053Fd2ea711dad45caCcc45EfF7548fCB362"
    const router = "0xEfF92A263d31888d860bD50809A8D171709b7b1c" 

    const SwapRouter = await ethers.getContractFactory('SwapRouter');
    const swapRouter = await SwapRouter.deploy(factory, router, owner.address);

    return { owner, swapRouter};
  }

  it('swapAndAddLiquidity', async function () {
    const { swapRouter } = await loadFixture(deploy);  
    
    const tokenOut = "0xdac17f958d2ee523a2206206994597c13d831ec7" // usdt
    const exactTokensOut =  ethers.parseUnits('1000', 6) // 1000 usdt
    const deadline = Math.floor(Date.now() / 1000) + 3600

    await expect(swapRouter.swapAndAddLiquidity(tokenOut, exactTokensOut, deadline, {value: ethers.parseEther('1')})).to.not.be.reverted;

  });

});
