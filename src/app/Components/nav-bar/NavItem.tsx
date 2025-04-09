import Link from "next/link";
import type { ElementType } from "react";

export interface NavItemProps {
    link: string;
    title?: string;
    target?: string;
    icon: ElementType;
}

export function NavItem({ title, link, target, icon: Icon }: NavItemProps) {
    return (
        <Link
            href={link}
            target={target}
            className="flex justify-between items-center
         text-gray-100  hover:text-violet-500 "
        >
            {title}
            <Icon className="h-4 w-4 hover:text-violet-500 animate-pulse duration-1000" />
        </Link>
    );
}
