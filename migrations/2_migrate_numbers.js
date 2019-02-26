/* global artifacts */
const Numbers = artifacts.require("./Numbers.sol");

module.exports = (deployer) => {
  deployer.deploy(Numbers);
};
