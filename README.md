# IC Azle Template

## Prerequisites

- dfx > 0.14.0
- Nodejs >= 18.16.0
- yarn
- jq (Command line based JSON processor).
- To install jq run:

    ```bash
    sudo apt update && sudo apt install -y jq
    ```

- Follwing are the steps to deploy your application locally

1. Install dependencies:

    ```bash
    yarn && cd/azle && yarn && cd..
    ```

2. Run below commands:

   ```bash
   dfx start --clean --background
   ```

   ```bash
   bash scripts/deploy_frontend_canister.sh  local
   ```

- To Stop Replica run:

   ```bash
   dfx stop
   ```

   ![Image](public/image.png)
