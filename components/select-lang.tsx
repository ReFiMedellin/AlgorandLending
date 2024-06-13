'use client'
import React, { useEffect } from 'react'
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { useRouter } from 'next/navigation'

export const SelectLang = () => {
    const router = useRouter()

    const [value, setValue] = React.useState("");
    const locales = [
        { key: "en", flag: "https://flagcdn.com/us.svg" },
        { key: "es", flag: "https://flagcdn.com/es.svg" },
        { key: "fr", flag: "https://flagcdn.com/fr.svg" },
    ];

    const handleSelectionChange = (e:any) => {
        setValue(e.target.value);
    };


    React.useEffect(() => {
        console.log(value)
        router.push(`/${value}`)
    }, [value])


    return (
        <Select
            className="max-w-xs"
            defaultSelectedKeys={["en"]}
            selectedKeys={[value]}
            placeholder={value}
            startContent={<Avatar alt="Spain" className="w-3 h-3" src={`https://flagcdn.com/${value == 'en' ? 'us' : value}.svg`} />}
            //@ts-ignore
            onChange={handleSelectionChange}
        >
            {locales.map((item) => (
                <SelectItem
                    key={item.key}
                    startContent={<Avatar alt="Spain" className="w-3 h-3" src={item.flag} />}
                >
                    {item.key}
                </SelectItem>
            ))}

        </Select>
    )
}
