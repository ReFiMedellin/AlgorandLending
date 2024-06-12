'use client'
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { WalletProvider, useInitializeProviders, PROVIDER_ID } from '@txnlab/use-wallet'
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useWallet } from '@txnlab/use-wallet-react'
import  LandingPage  from './landing-page'
import algosdk from 'algosdk';
import * as algokit from '@algorandfoundation/algokit-utils';
import ContractMethods from "@/lib/contractMethods";

export default function Home() {
  const { wallets, activeWallet, activeAccount } = useWallet()
  return (
    <>
      {!activeWallet && <LandingPage />}
      {activeAccount &&
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <ContractMethods/>
        </section>
      }
    </>

  );
}
