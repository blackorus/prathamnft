require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/1Rc8u7SyG7udLUDcT3gZ58QsEGFJTly8",
      accounts: [`0x${"46c28009ec29d6986d9037a69b53196776e476ae5a4fa71bc8434d891310fcde"}`],
    },
  },
};
