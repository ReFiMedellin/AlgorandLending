import React from 'react'
import { Link } from "@nextui-org/link";
import { useTranslations } from "next-intl";

export const Footer = () => {
    const t = useTranslations("Index");
    return (
        <footer className="w-full flex items-center justify-center py-3">
            <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://refimedellin.org"
                title="nextui.org homepage"
            >
                <span className="text-default-600">{t("footer")}</span>
                <p className="text-primary">ReFiMedellín.org</p>
            </Link>
        </footer>
    )
}
