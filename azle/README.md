# azle

Welcome to your first Azle project! This example project will help you to deploy your first canister (application) to the Internet Computer (IC) decentralized cloud. It is a simple getter/setter canister. You can always refer to [The Azle Book](https://demergent-labs.github.io/azle/) for more in-depth documentation.

`dfx` is the tool you will use to interact with the IC locally and on mainnet. If you don't already have it installed:

```bash
npm run dfx_install
```

Next you will want to start a replica, which is a local instance of the IC that you can deploy your canisters to:

```bash
npm run replica_start
```

If you ever want to stop the replica:

```bash
npm run replica_stop
```

Now you can deploy your canister locally:

```bash
npm install
npm run canister_deploy_local
```

To call the methods on your canister:

```bash
npm run canister_call_get_message
npm run canister_call_set_message
```

If you run the above commands and then call `npm run canister_call_get_message` you should see:

```bash
("Hello world!")
```

Assuming you have [created a cycles wallet](https://internetcomputer.org/docs/current/developer-docs/quickstart/network-quickstart) and funded it with cycles, you can deploy to mainnet like this:

```bash
npm run canister_deploy_mainnet
```
