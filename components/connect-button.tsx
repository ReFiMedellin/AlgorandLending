'use client'
import React from 'react'
import { Link } from "@nextui-org/link";
import { useWallet } from '@txnlab/use-wallet-react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";
import { copyToClipboard } from './copy-to-clipboard';
import { ClipboardIcon } from '@heroicons/react/20/solid'

export default function ConnectButton({ position }: any) {
    const { wallets, activeWallet, activeAccount } = useWallet()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')

    const getWalletIcon = (wallet: any) => {
        return <img
            width={30}
            height={30}
            alt={`${wallet.name} icon`}
            src={wallet.icon}
        />
    }

    const walletPretier = (s: string, n: number) => {
        return `${s.slice(0, n)}...${s.slice(-n)}`
    }

    const handleOpen = () => {
        onOpen();
    }

    const handleDisconnect = () => {
        activeWallet.disconnect()
        onClose()
    }

    return (
        <>
            {!activeWallet &&
                <Dropdown backdrop="blur">
                    <DropdownTrigger>
                        <Button
                            isExternal
                            as={Link}
                            className="text-sm font-normal text-default-600 bg-default-100"
                            startContent={''}
                            variant={activeWallet ? "shadow" : 'bordered'}
                            color={activeWallet ? "primary" : 'secondary'}
                        >
                            {!activeWallet ? 'Connect Wallet' : `${walletPretier(activeAccount?.address, 4)}`}
                        </Button>
                    </DropdownTrigger>
                    {!activeWallet &&
                        <DropdownMenu variant="faded" aria-label="Static Actions">
                            {wallets.map((wallet:any) => (
                                <DropdownItem
                                    key={wallet.id}
                                    startContent={getWalletIcon(wallet.metadata)}
                                >
                                    <button onClick={() => wallet.connect()}>{wallet.metadata.name}</button>
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    }
                    {activeWallet &&
                        <DropdownMenu variant="faded" aria-label="Static Actions">
                            <DropdownItem key='1'>
                                <h2>Active Wallet</h2>
                                <p>{activeWallet.metadata.name}</p>
                                <h2>Active Account</h2>
                                <p>{walletPretier(activeAccount?.address, 8)}</p>
                                <button onClick={() => handleDisconnect()}>Disconnect</button>
                            </DropdownItem>
                        </DropdownMenu>
                    }
                </Dropdown>}

            {activeWallet && position == 'nav' &&
                <Button
                    isExternal
                    as={Link}
                    className="text-sm font-normal text-default-600 bg-default-100"
                    startContent={''}
                    variant='flat'
                    color='primary'
                    onClick={() => handleOpen()}
                >
                    {!activeWallet ? 'Connect Wallet' : `${walletPretier(activeAccount?.address, 4)}`}
                </Button>
            }
            {activeWallet && position == 'nav-menu' &&
                <Button
                    isExternal
                    as={Link}
                    className="text-sm font-normal text-default-600 bg-default-100"
                    startContent={''}
                    variant='faded'
                    color='primary'
                    onClick={() => handleOpen()}
                >
                    {!activeWallet ? 'Connect Wallet' : `${walletPretier(activeAccount?.address, 4)}`}
                </Button>
            }

            <Modal backdrop={'opaque'} isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <h2>Active Account</h2>
                                <Button
                                    data-clipboard-text={activeAccount.address}
                                    startContent={getWalletIcon(activeWallet.metadata)}
                                    data-clipboard-message="Address copied to clipboard"
                                    onClick={copyToClipboard}
                                    variant='flat'
                                    id="copy-address"
                                    data-tooltip-content="Copy address"
                                >
                                    <span className="">{walletPretier(activeAccount?.address, 8)}</span>
                                    <ClipboardIcon className="h-5 w-5" aria-hidden="true" />
                                </Button>
                                <Button
                                    color="danger" 
                                    variant="light"
                                    disableRipple
                                    onClick={() => handleDisconnect()}
                                >
                                    Disconnect
                                </Button>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
