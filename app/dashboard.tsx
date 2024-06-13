'use client'
import React, { useEffect } from 'react'
import { useWallet } from '@txnlab/use-wallet-react'
import { CreatePoolCard } from '../components/create-pool-card';
import { PoolCard } from '@/components/pool-card';
import { ALGO_ADMIN } from '@/config/env';

export const Dashboard = () => {
    const { algodClient, activeAccount } = useWallet()
    const [createdApps, setCreatedApps] = React.useState([])

    useEffect(() => {
        const getAccountInfo = async () => {
            if (!activeAccount) throw new Error('No selected account.')
            const accountInfo = await algodClient.accountInformation(ALGO_ADMIN).do()
            setCreatedApps(accountInfo['created-apps'])
            return accountInfo
        }
        getAccountInfo()
    }, [activeAccount])

    return (
        <>
            {activeAccount && activeAccount.address == ALGO_ADMIN &&
                <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                    <CreatePoolCard />
                </section>
            }
            {activeAccount &&
                <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                    <h1>Available Lending Pools</h1>
                    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                        {createdApps && createdApps.map((app: any) => (
                            <PoolCard item={app} />
                        ))}
                    </div>
                </section >
            }
        </>
    )
}
