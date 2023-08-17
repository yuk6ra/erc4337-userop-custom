import fs from "fs/promises";
import path from "path";
import prettier from "prettier";
// import { ethers } from "ethers";

const INIT_CONFIG = {
    rpcUrl: "ex) https://api.stackup.sh/v1/node/API_KEY",
    signingKey: "Your private key",
    entryPoint: "",
    simpleAccountFactory: "",
    paymaster: {
        rpcUrl: "ex) https://api.stackup.sh/v1/node/API_KEY",
        context: {},
    },
};

const CONFIG_PATH = path.resolve(__dirname, "../config.json");

async function main() {
    return fs.writeFile(
        CONFIG_PATH,
        prettier.format(JSON.stringify(INIT_CONFIG, null, 4), { parser: "json" })
    );
}

main()
    .then(() => console.log(`Config written to ${CONFIG_PATH}`))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
