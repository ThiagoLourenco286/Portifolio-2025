'use client'
/* eslint-disable @next/next/no-img-element */
import { NavItem } from "@/app/Components/nav-bar/NavItem";
import {
    BadgeCheck,
    Contact,
    FolderCheck,
    GithubIcon,
    Handshake,
    LinkedinIcon,
    Menu,
    ShieldCheck,
} from "lucide-react";
import * as Collapsible from '@radix-ui/react-collapsible'

export function NavBar() {
    return (
        <Collapsible.Root
            className="top-0 fixed left-0 right-0 z-20 flex flex-col gap-6 border-b p-4 
             border-zinc-200 bg-gradient-to-bl from-slate-950 from-30% to-roxo lg:px-5 
             lg:py-8 lg:right-auto lg:w-80 lg:border-r lg:data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0
             "
        >
            <div className="flex items-end justify-between">
                <h1 className=" text-3xl font-bold text-gray-100 ">Thiago Lourenço</h1>
                <Collapsible.Trigger asChild className="lg:hidden">
                    <button className="rounded-md px-2 hover:zinc-50 dark:hover:bg-zinc-800 shadow-none text-zinc-500 dark:text-zinc-400 ">
                        <Menu className="h-6 w-6" />
                    </button>
                </Collapsible.Trigger>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-2 lg:pt-12">
                <img
                    src="/assets/image/fotoPerfil.jpg"
                    alt=""
                    className="h-60 object-cover w-60 
                rounded-full border-4 border-gray-50 "
                />
                <button
                    type="button"
                    className="flex flex-row items-center gap-2 justify-center"
                >
                    <BadgeCheck className="h-4 w-4 text-zinc-100  " />
                    <span className="text-zinc-100 text-xs ">Desenvolvedor Junior</span>
                </button>
            </div>
            <Collapsible.Content forceMount className="flex flex-1 pt-6 justify-end flex-col gap-6
            data-[state=closed]:hidden lg:data-[state=closed]:flex">
                <div className="space-y-3">
                    <NavItem link="/" title="Home" icon={Contact} />
                    <NavItem link="/Projetos" title="Projects" icon={FolderCheck} />
                    <NavItem link="/Skils" title="Skils" icon={Handshake} />
                    <NavItem
                        link="/Certificados"
                        title="Certificates"
                        icon={ShieldCheck}
                    />
                </div>
                <div className="flex gap-4 ">
                    <NavItem
                        target="_blank"
                        link="https://github.com/ThiagoLourenco286"
                        icon={GithubIcon}
                    />
                    <NavItem
                        target="_blank"
                        link="https://www.linkedin.com/in/thiago-louren%C3%A7o-291b8b29b/"
                        icon={LinkedinIcon}
                    />
                </div>
            </Collapsible.Content>
        </Collapsible.Root>
    );
}
