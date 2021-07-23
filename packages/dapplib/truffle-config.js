require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remember mistake kidney clinic sun ticket'; 
let testAccounts = [
"0xc423abe3b5679983ddf4293fc8f693919a7d9a122e7663e276947ca1fe16cbf4",
"0x5ba3d262dff1fdc24f917f23c3a959521664318829eee9c4888b71f71441fb42",
"0xc46c6b21fac951b9b62efc04a763a45f7a1b1e83d697b6b8368a5090c5191346",
"0xf6b582ebf9f0bcf050f4c6b2a6a134f2726c83ec07c96693187860c7783d0d51",
"0x37671843ca5322683f662e2634da8d9281060cdf981fef7a372b8da163f60afe",
"0xc162c3d876cb3e35ceaccf45ff3774f4cde13105f7495418492b4bc088757ca7",
"0x927f8c6844f16d11402831256894705f50a0b36b5393fc1cbe8e5d5a3afcd3b5",
"0x3bdb55f723515420ad82ddf4c4394aee32f98fe654f897374947be8e5119b0c7",
"0xbbd2470eb6a2e4887437a6077d86f027f3e4bc153861326abe495f6b64893f36",
"0xa5def88954a6f7d9c14b79205d46c93cac592bff189975298ce8f3b0c6299a5f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

