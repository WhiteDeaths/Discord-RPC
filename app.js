const clientId = ''; //add your own applications clientID here
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc'});

DiscordRPC.register(clientId);

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `Studying`,
        state: `Looking at P&L`,
        startTimestamp: Date.now(),
        largeImageKey: 'sidwilson', //add own image ids here, replace sidwilson with whatever you name the image on dev portal
        largeImageText: `sidwilson`,
        smallImageKey: `sidwilson`,
        smallImageText: `sidwilson`,
        instance: false,
        
    });
}

RPC.on('ready', async () => {
    setActivity();

    setInterval(() => {
        setActivity();
    }, 15 * 1000);
});

RPC.login({ clientId }).catch(err => console.error(err));