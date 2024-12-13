import React from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import AirDrop from "./AirDrop";
import "@solana/wallet-adapter-react-ui/styles.css";
import "./SolanaAdapter.css"; // Import the CSS file

function Solana_Adapter() {
  return (
    <div className="solana-background flex flex-col items-end justify-center p-8">
      <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/cHoM2bnzBlP2k9MAYnYPtBDAzaEjJqnK">
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="flex m-8 space-x-2 mb-8">
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            <AirDrop />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default Solana_Adapter;
