import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Input } from "@nextui-org/react";

export const Dashboard = () => {

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur aquat.";


    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">Create</p>
                        <p className="text-small text-default-500">Lending Pool</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <Accordion disabledKeys={["2"]}>
                        <AccordionItem key="1" aria-label="Pool Info" subtitle="Name, Initial Balance, Rate ..." title="Pool Info">
                            <Input
                                key='inside'
                                type="email"
                                label="Name"
                                labelPlacement='inside'
                                description='Pool Name'
                            />
                            <Input
                                label="Balance"
                                placeholder="100"
                                labelPlacement="inside"
                                startContent={
                                    <div className="pointer-events-none flex items-center">
                                        <span className="text-default-400 text-small">$</span>
                                    </div>
                                }
                                description='Initial Balance'
                                endContent={
                                    <div className="flex items-center">
                                        <label className="sr-only" htmlFor="currency">
                                            Currency
                                        </label>
                                        <select
                                            className="outline-none border-0 bg-transparent text-default-400 text-small"
                                            id="currency"
                                            name="currency"
                                        >
                                            <option>USDC</option>
                                            <option>ALGO</option>
                                        </select>
                                    </div>
                                }
                                type="number"
                            />
                            <Input
                                key='inside'
                                type="email"
                                label="Rate"
                                labelPlacement='inside'
                                description='Interes Rate'
                            />
                        </AccordionItem>
                    </Accordion>
                </CardBody>
                <Divider />
                <CardFooter className="justify-center">
                    <Button
                        isExternal
                        as={Link}
                        className="text-sm font-normal text-default-600 bg-default-100"
                        startContent={''}
                        variant='light'
                        color='primary'
                    >
                        Create
                    </Button>
                </CardFooter>
            </Card>
        </section>
    )
}
