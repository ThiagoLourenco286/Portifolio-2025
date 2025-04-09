/* eslint-disable @next/next/no-img-element */

import { BadgeCheck } from "lucide-react";

export interface CertifcadosProps {
    description: string;
    image: string;
    name: string;
}

export function Certifcados({ image, description, name }: CertifcadosProps) {
    return (
        <div className="pt-10">
            <img src={image} alt={name} className="h-80 w-[460px] rounded-md object-cover 
            lg:tranform lg:transition-all lg:hover:scale-125 lg:duration-700"  />
            <div className="flex gap-4 items-center pt-4">
                <BadgeCheck className="h-4 w-4 text-zinc-100 " />
                <span className="font-mono text-sm items-center">{description}</span>
            </div>
        </div>
    );
}
