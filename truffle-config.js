const ProviderEngine = require("web3-provider-engine");
const { TruffleArtifactAdapter } = require("@0x/sol-trace");
const { GanacheSubprovider } = require("@0x/subproviders");
const { CoverageSubprovider } = require("@0x/sol-coverage");
const { RevertTraceSubprovider } = require("@0x/sol-trace");

const mode = process.env.MODE;

const projectRoot = "";
const solcVersion = "0.5.1";
const defaultFromAddress = "0x98c0047400dA37d278E76e78c6F60A7882Ae064d";
const isVerbose = true;
const artifactAdapter = new TruffleArtifactAdapter(projectRoot, solcVersion);
const provider = new ProviderEngine();

if (mode === "coverage") {
  global.coverageSubprovider = new CoverageSubprovider(
    artifactAdapter,
    defaultFromAddress,
    isVerbose
  );
  provider.addProvider(global.coverageSubprovider);
} else if (mode === "trace") {
  const revertTraceSubprovider = new RevertTraceSubprovider(
    artifactAdapter,
    defaultFromAddress,
    isVerbose
  );
  provider.addProvider(revertTraceSubprovider);
}
const ganacheSubprovider = new GanacheSubprovider();
provider.addProvider(ganacheSubprovider);

provider.start(err => {
  if (err !== undefined) {
    console.log(err);
    process.exit(1);
  }
});

/**
 * HACK: Truffle providers should have `send` function, while `ProviderEngine` creates providers with `sendAsync`,
 * but it can be easily fixed by assigning `sendAsync` to `send`.
 */
provider.send = provider.sendAsync.bind(provider);

module.exports = {
  compilers: {
    solc: {
      version: "0.5.1",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  networks: {
    development: {
      provider,
      network_id: "*"
    }
  }
};