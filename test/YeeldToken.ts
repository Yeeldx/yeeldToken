import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("YeeldToken", function () {
  async function deployYeeldToken() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const YeeldToken = await ethers.getContractFactory("YeeldToken");
    const yeeldToken = await YeeldToken.deploy();

    return { yeeldToken, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { yeeldToken, owner } = await loadFixture(deployYeeldToken);

      expect(await yeeldToken.owner()).to.equal(owner.address);
    });
  });
});
