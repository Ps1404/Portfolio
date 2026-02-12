import IMAGES from "../images/Images";

export const PROJECTDATA = [
  {
    imageurl: IMAGES.projectChatlify || "/images/chatlify-preview.jpg", 
    projectname: "CHATlify - Real-Time Chat Application",
    link: [
      {
        name: "GitHub",
        url: "https://github.com/Ps1404/CHATlifyy", 
      },
      {
        name: "Live Demo",
        url: "https://chatlifyy.onrender.com", 
      },
    ],
    projectdetails:
      "Built a full-featured real-time messaging platform using MERN stack (MongoDB, Express, React, Node.js) + Socket.io. Supports 100+ concurrent users with JWT authentication, end-to-end message encryption, typing indicators, read receipts, file sharing (images/PDFs), and achieved 1.2s average message delivery latency through WebSocket optimization.",
    skillsUsed: [
      "MERN Stack",
      "Socket.io",
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "JWT",
      "TailwindCSS",
      "Zustand",
    ],
  },
  {
    imageurl: IMAGES.projectUrlShortner || "/images/url-shortner-preview.jpg",
    projectname: "URL Shortner",
    link: [
      {
        name: "GitHub",
        url: "https://github.com/Ps1404/BackendP42213", // ← replace
      },
      // Add live if you have one
    ],
    projectdetails:
      "High-performance URL shortening service built with Node.js, Express, and MongoDB. Handles 50+ daily requests with 99.8% uptime. Implemented custom analytics tracking click-through rates, geographic data, and referral sources. Optimized MongoDB queries to achieve 200ms response times for redirection.",
    skillsUsed: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
  },
  {
    imageurl: IMAGES.projectNftBuildspace || "/images/nft-buildspace-preview.jpg", // update with your actual image path or screenshot
    projectname: "NftBuildspace - Web3 NFT Minting App",
    link: [
      {
        name: "GitHub",
        url: "https://github.com/Ps1404/NftBuildspace",
      },
      {
        name: "Live Demo",
        url: "https://nft-starter-repo-final.emtr0.repl.co/", // from repo details
      },
    ],
    projectdetails:
      "A web3 application built as part of BuildSpace to learn programmatic NFT collection generation. Allows users to connect MetaMask wallet and mint NFTs on the go. Features Solidity smart contracts for ERC-1155/721 NFTs, Hardhat for deployment/testing, and React dApp for frontend wallet interaction.",
    skillsUsed: [
      "Solidity",
      "JavaScript",
      "Hardhat",
      "React.js",
      "MetaMask",
      "Web3.js",
      "Node.js",
      "Express.js",
    ],
  },
  {
    imageurl: IMAGES.projectEthereumWave || "/images/ethereumwave-preview.jpg", // add your screenshot or placeholder
    projectname: "EthereumWave - Web3 Greeting dApp",
    link: [
      {
        name: "GitHub",
        url: "https://github.com/Ps1404/EthereumWave",
      },
      // No live demo in repo, add if you deploy it (e.g. Repl.it or Vercel)
      // {
      //   name: "Live Demo",
      //   url: "https://ethereumwave-yourusername.vercel.app",
      // },
    ],
    projectdetails:
      "A beginner-friendly Web3 dApp where users connect their MetaMask wallet and send a 'Hi 👋' message stored on-chain via Solidity smart contract. Built as part of Buildspace learning journey to understand programmatic NFT/smart contract interaction, wallet connection, and Ethereum frontend integration. Uses Hardhat for contract deployment/testing and Quicknode for node provider.",
    skillsUsed: [
      "Solidity",
      "Hardhat",
      "React.js",
      "JavaScript",
      "Web3.js / Ethers.js",
      "MetaMask",
      "Ethereum",
      "Quicknode",
    ],
  },
];
