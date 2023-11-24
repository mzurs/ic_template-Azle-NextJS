"use client";
import { useState } from "react";
import { makeAzleActor } from "../service/actor";
import { Box, Button, Center } from "@chakra-ui/react";
import { _SERVICE as AZLE } from "@/config/declarations/dfx_generated/azle.did";

export default function Home() {
  const [message, setMessage] = useState<number>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const azle: AZLE = await makeAzleActor();
      const getRandomNumber = await azle.randomNumber();
      console.log("getRandomNumber ", getRandomNumber);
      setMessage(getRandomNumber);
      setLoading(false);
    } catch (error) {
      setMessage(error as unknown as any);
      setLoading(false);
    }
  };
  return (
    <>
      <Box></Box>
      <Box>
        <br />
        <br />
        <Box>
          <h1 className="flex items-center justify-center mt-10 italic mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">
            NextJS + Azle Canister Template
          </h1>
        </Box>
        <br />
        <br />
        <Box>
          <Center>
            <Button
              isLoading={isLoading}
              type="button"
              onClick={handleSubmit}
              className="bg-purple-600 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Random Number
            </Button>
          </Center>
        </Box>
        <Box>
          <h3 className="text-white flex items-center justify-center mt-10  text-2xl ">
            {message}
          </h3>
        </Box>{" "}
      </Box>
    </>
  );
}
