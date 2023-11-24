# Azle + NextJS Template

![Image](public/image.png)

### Prerequisites

- dfx > 0.15.1
- Nodejs > 18.16.0
- jq (Command line based JSON processor).
- To install jq run:

    ```bash
    sudo apt update && sudo apt install -y jq
    ```

- Follwing are the steps to deploy your application locally

1. Install dependencies:

    ```bash
    yarn install:all
    ```

2. Run below commands:

   ```bash
   yarn start_replica
   ```

   ```bash
   yarn deploy
   ```

- To Stop Replica run:

   ```bash
   dfx stop
   ```
