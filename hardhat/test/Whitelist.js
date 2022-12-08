const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");

describe("Whitelist", function () {
  async function deploytWhitelistFixture() {
    const accounts = await ethers.getSigners();

    const owner = accounts[0];
    const Whitelist = await hre.ethers.getContractFactory("Whitelist");
    const whitelist = await Whitelist.deploy(10);
    console.log("\t", "🛰 Contract deployed on", whitelist.address);
    return { whitelist, owner, accounts };
  }

  describe("Deployment", function () {
    it("Should set the max whitelisted address", async function () {
      const { whitelist } = await loadFixture(deploytWhitelistFixture);

      expect(await whitelist.maxWhitelistedAddresses()).to.equal(10);
    });
    it("Should set the right onwer", async function () {
      const { whitelist, owner } = await loadFixture(deploytWhitelistFixture);

      expect(await whitelist.owner()).to.equal(owner.address);
    });
  });

  describe("addAddressToWhitelist()", function () {
    describe("Validations", function () {
      it("Should revert with right error if msg.sender is already whitelisted", async function () {
        const { whitelist } = await loadFixture(deploytWhitelistFixture);

        await whitelist.addAddressToWhitelist();

        await expect(whitelist.addAddressToWhitelist()).to.be.revertedWith(
          "Sender has already been whitelisted"
        );
      });
      it("Should revert with right error if number of address whitelisted be greater than max number of whitelisted", async function () {
        const { whitelist, accounts } = await loadFixture(
          deploytWhitelistFixture
        );

        for (let index = 1; index <= 10; index++) {
          /* let wallet = ethers.Wallet.createRandom();
          let wallet = wallet.connect(ethers.provider);

          await owner.sendTransaction({
            to: wallet.address,
            value: ethers.utils.parseEther("1"),
          }); */
          let wallet = accounts[index];

          await whitelist.connect(wallet).addAddressToWhitelist();
        }

        await expect(whitelist.addAddressToWhitelist()).to.be.revertedWith(
          "More addresses cant be added, limit reached"
        );
      });
      it("Shouldn't fail if sender is not listed and number of address is bellow than max address listed", async function () {
        const { whitelist } = await loadFixture(deploytWhitelistFixture);

        expect(await whitelist.addAddressToWhitelist()).not.to.be.reverted;
      })
    });

    describe("whitelist", function () {
      it("Should add the address to the whitelist", async function () {
        const { whitelist, owner } = await loadFixture(deploytWhitelistFixture);

        await whitelist.addAddressToWhitelist();

        expect(await whitelist.whitelistedAddress(owner.address)).to.equal(
          true
        );
      });

      it("Should number of address whitelisted go up", async function () {
        const { whitelist } = await loadFixture(deploytWhitelistFixture);

        await whitelist.addAddressToWhitelist();

        expect(await whitelist.numAddressesWhitelisted()).to.greaterThan(0);
      });
    });

    describe("Events", function () {
      it("Should emit an event when a address was added to whitelist", async function () {
        const { whitelist } = await loadFixture(deploytWhitelistFixture);

        expect(await whitelist.addAddressToWhitelist()).to.emit(
          whitelist,
          "AddAddress"
        );
      });
    });
  });
});
