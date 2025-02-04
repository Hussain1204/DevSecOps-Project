const { Vault } = require('node-vault');
const vault = Vault({ endpoint: 'http://127.0.0.1:8200', token: 'your-token' });

async function getSecret() {
    const result = await vault.read('secret/myapp');
    console.log(result.data);
}
