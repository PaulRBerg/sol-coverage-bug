/* global after, artifacts, contract, describe, it: true */
const Numbers = artifacts.require("Numbers");

const mode = process.env.MODE;

contract("Numbers", async () => {
  let numbers;

  describe("Success state", async() => {
    it("should set a new number", async () => {
      numbers = await Numbers.deployed();
      await numbers.setFoo(144);
    });
  });

  after("write coverage/profiler output", async () => {
    if (mode === "coverage") {
      console.log("foo");
      await global.coverageSubprovider.writeCoverageAsync();
    }
  });
});
