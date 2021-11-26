const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Goku", "Vegeta", "Gohan"], // Names
    [
      "https://i.imgur.com/ToBebz9b.jpg", // Images
      "https://i.imgur.com/aRy02l9b.jpg",
      "https://i.imgur.com/cmVNaT0b.jpg",
    ],
    [100, 500, 1337], // HP values
    [1337, 100, 50], // Attack damage values
    "Boo", // Boss name
    "https://i.imgur.com/eivj7SZb.jpg", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
