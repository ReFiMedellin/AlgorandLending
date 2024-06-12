'use client'
import { useWallet } from '@txnlab/use-wallet-react'
import LandingPage from './landing-page'
import { Dashboard } from './dashboard'


export default function Home() {
  const { wallets, activeWallet, activeAccount } = useWallet()
  return (
    <>
      {!activeWallet && <LandingPage />}
      {activeAccount && <Dashboard />}
    </>

  );
}
