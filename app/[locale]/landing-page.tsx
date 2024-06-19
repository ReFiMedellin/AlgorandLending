'use client'
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Snippet, Code } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useWallet } from '@txnlab/use-wallet-react'
import { useTranslations } from "next-intl";



const styles = {
  display: 'flex',
  height: '100vh',
  zIndex: '-99'

}

export default function LandingPage() {
  const { activeAccount } = useWallet()
  const t = useTranslations("Index");
  return (
    <>
     
      {!activeAccount && <section style={styles} className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        
        <div className="inline-block max-w-lg text-center justify-center"> 
        
          <h1 className={title()}>{t("hello-1")}&nbsp;</h1>
          <h1 className={title({ color: "green" })}>{t("hello-2")}&nbsp;</h1>
          <br />
          <h1 className={title()}>
           {t("hello-3")}
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            {t("welcome")}
          </h2>
        </div>

        <div className="flex gap-3" >
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            {t("btn-1")}
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            {t("btn-2")}
          </Link>
        </div>
        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="flat">
            <span>
            {t("span-1")} &nbsp; 👉 &nbsp;
              <Link
                isExternal
                href='https://giveth.io/project/refi-medellin'
              >
                <Code color="primary">giveth.io/refi-medellin</Code>
              </Link>
            </span>
          </Snippet>
        </div>
      </section>}
    </>

  );
}
