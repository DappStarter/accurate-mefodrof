require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remember protect grid kite broken tenant'; 
let testAccounts = [
"0x537a005c7b21ac706efdbbdb0acf93d10f090c1410cdd169b775d0132cdeedc0",
"0x0b444fb6db8f08b116c9fe593e6e886e6fcd80d987eb66cabae8e71a89afd5cc",
"0x199a016ea1f1268bc942ed00fa970e964c23e1a2824907b3b7711e6a93315976",
"0x0bcd20d600902f50def7fd2f5d391fc5ddf86903e91f34ee93c3528681b9c9e7",
"0xc96d704463aace878c76c7a0ac02e2ab88a5125f9067924716f70cea6391bc4c",
"0x54b11b11a131fa7e9f43b1f32302484b1c87336d9d9c760779e8447724874b80",
"0x0b12f44c38565745582e1b4bc4f2b8b06b7fcb1e19a3876bd393a81445acaeba",
"0x2bb70878ea01cb0dba5d713c8ae9fb75f2f24ab476e74825af14dbe34cd1d74a",
"0x78bf3845e0b08100f4f613fba3ccc7a5485a55100a4d7a1e84b776f101244ad1",
"0x93b8ddb0d563b0b289e3a1b8fe980309ea954f899cdffea12b0b728946730f00"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
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
            version: '^0.5.11'
        }
    }
};
