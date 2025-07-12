require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: ["0x3cc3dce8d6ed545986dbf3912f7ee9cbac40f69a22d67c5c0049367a734cd168"]
    }
  }
};
