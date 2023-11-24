#!/bin/bash

# sudo apt  install jq

value=$(jq '.azle.local' config/backend_canister_ids.json)

echo "$value"

canisterId=$value
variable="NEXT_PUBLIC_CANISTER_ID_AZLE="$canisterId

icHost="NEXT_PUBLIC_IC_HOST=http://localhost:8080"

echo "$variable" > .env
echo $icHost >> .env

