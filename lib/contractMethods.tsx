import algosdk from 'algosdk';
import * as algokit from '@algorandfoundation/algokit-utils';
import { SimpleClient } from '../artifacts/SimpleClient';
import { useWallet } from '@txnlab/use-wallet-react'

import React from 'react'

export default async function ContractMethods() {
  const { algodClient, activeWallet, activeAccount } = useWallet()


  const simple = new SimpleClient(
    {
      sender: activeAccount,
      resolveBy: 'id',
      id: 0,
    },
    algodClient
  );

  //const { transaction } = await simple.create.createApp({});

  /* const { appId, appAddress } = await simple.appClient.getAppReference();
  console.log(`Created app ${appId} with address ${appAddress} in tx ${transaction.txID()}`); */

  /* await simple.incr({ i: 1n });
  await simple.incr({ i: 1n });
  await simple.incr({ i: 1n });
  const state = await simple.appClient.getGlobalState();

  const counter = state.counter.value;
  console.log(`counter == 3?: ${counter === 3}`);

  const addResult = await simple.add({ a: 123n, b: 456n });
  console.log(`add worked?: ${addResult.return?.valueOf() === 123n + 456n}`);

  const subResult = await simple.sub({ a: 5n, b: 3n });
  console.log(`sub worked?: ${subResult.return?.valueOf() === 5n - 3n}`);

  // TODO: Make this actual test
  if (counter !== 3 || addResult.return?.valueOf() !== 123n + 456n || subResult.return?.valueOf() !== 5n - 3n)
    process.exit(1); */
  return (
    <div>contractMethods create</div>
  )
}

