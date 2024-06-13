'use client'
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useWallet } from '@txnlab/use-wallet-react'
import { Breadcrumb } from "@/components/breadcrumb";

export default function LandingPage() {
  const { activeAccount } = useWallet()
  return (
    <>
      {!activeAccount && <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Make&nbsp;</h1>
          <h1 className={title({ color: "green" })}>Impact&nbsp;</h1>
          <br />
          <h1 className={title()}>
            in your local comunnities
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Lend and Borrow De-Colateralized trust in people.
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
      </section>}
    </>

  );
}
