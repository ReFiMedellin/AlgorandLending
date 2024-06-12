import React from 'react'
import { CreatePoolCard } from '../components/create-pool-card';

export const Dashboard = () => {

    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <CreatePoolCard />
        </section>
    )
}
