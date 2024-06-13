'use client'
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Snippet, Code } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useWallet } from '@txnlab/use-wallet-react'
import { useTranslations } from "next-intl";

export default function LandingPage() {
  const { activeAccount } = useWallet()
  const t = useTranslations("Index");
  return (
    <>
      {!activeAccount && <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Make&nbsp;</h1>
          <h1 className={title({ color: "green" })}>Impact&nbsp;</h1>
          <br />
          <h1 className={title()}>
            in your local communities
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            {t("welcome")}
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="flat">
            <span>
              Consider Supporting Us &nbsp; 👉 &nbsp;
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
