import { GithubIcon, LinkIcon } from "lucide-react";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Projetos() {
    return (
        <div className="px-4 lg:px-16 pb-12 ">
            <h1 className="text-3xl font-bold mb-10">Projetos</h1>
            <div className="flex flex-wrap gap-16  justify-center">
                <div className=" w-[620px] h-[560px] border rounded-lg p-5 space-y-6 lg:h-[590px] lg:w-[670px]">
                    <div className="w-full h-72 lg:h-80 ">
                        <img
                            src="/assets/projects/estiloShoes.png"
                            alt=""
                            className="w-full h-full
                object-cover rounded-md lg:tranform lg:transition-all lg:hover:scale-125 lg:duration-700"
                        />
                    </div>
                    <div className=" flex  justify-between lg:pt-6">
                        <span className="font-semibold">Estilo Shoes</span>
                        <div className="flex gap-2">
                            <img
                                src="/assets/icons/icons8-react.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                            <img
                                src="/assets/icons/icons8-tailwind-css.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                            <img
                                src="/assets/icons/icons8-typescript.svg"
                                alt=""
                                className="w-7 h-6 "
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-mono">
                            Projeto se trata de uma landing page, para divulgação de tenis.
                            <br />
                            Projeto criado para ajudar um colega que tem uma loja de revenda
                            de tenis. Foi ultilizado react/next js para a criação dessa
                            landing page, também foi ultilizado tailwind css para a parte de
                            estilização e responsividade.
                        </p>
                    </div>

                    <div className="flex gap-3 justify-end">
                        <button
                            type="button"
                            className=" bg-cyan-900 p-2 hover:bg-cyan-950 rounded-lg animate-bounce"
                        >
                            <Link
                                href={
                                    "https://github.com/ThiagoLourenco286/Estilo-Shoes/tree/master"
                                }
                                target="_blank"
                                className="flex flex-row items-center gap-2"
                            >
                                <GithubIcon className="h-4 w-4" /> GitHub{" "}
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="w-[620px] h-[540px] border rounded-lg p-5 space-y-6 lg:h-[590px] lg:w-[670px]">
                    <div className="w-full h-72 lg:h-80 ">
                        <img
                            src="/assets/projects/memorygame.png"
                            alt=""
                            className="w-full h-full
                object-cover rounded-md lg:tranform lg:transition-all lg:hover:scale-125 lg:duration-700"
                        />
                    </div>
                    <div className=" flex  justify-between lg:pt-6">
                        <span className="font-semibold">Memory Game</span>
                        <div className="flex gap-2">
                            <img
                                src="/assets/icons/icons8-react.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                            <img
                                src="/assets/icons/icons8-javascript.svg"
                                alt=""
                                className="w-7 h-6 "
                            />
                            <img
                                src="/assets/icons/icons8-css3.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-mono">
                            Jogo da memoria , projeto criado no curso do Programador Br, no
                            curso ja tinhamos criado esse jogo utilizando HTML, CSS e
                            JavaScript, mas migramos ele para o React.
                            <br />
                            Jogo muito divertido para passar o tempo.
                        </p>
                    </div>

                    <div className="flex gap-3 justify-end">
                        <button
                            type="button"
                            className=" bg-cyan-900 p-2 hover:bg-cyan-950 rounded-lg animate-bounce"
                        >
                            <Link
                                href={
                                    "https://github.com/ThiagoLourenco286/MemoryGame-React/tree/master"
                                }
                                target="_blank"
                                className="flex flex-row items-center gap-2"
                            >
                                <GithubIcon className="h-4 w-4" /> GitHub{" "}
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="w-[620px] h-[560px] border rounded-lg p-5 space-y-6 lg:h-[590px] lg:w-[670px]">
                    <div className="w-full h-72 lg:h-80  ">
                        <img
                            src="/assets/projects/Tailwind.png"
                            alt=""
                            className="w-full h-full
                object-cover rounded-md lg:tranform lg:transition-all lg:hover:scale-125 lg:duration-700"
                        />
                    </div>
                    <div className=" flex  justify-between lg:pt-6">
                        <span className="font-semibold">Interface Dashboard</span>
                        <div className="flex gap-2">
                            <img
                                src="/assets/icons/icons8-react.svg"
                                alt=""
                                className="w-7 h-6 "
                            />
                            <img
                                src="/assets/icons/icons8-tailwind-css.svg"
                                alt=""
                                className="w-7 h-6 "
                            />
                            <img
                                src="/assets/icons/icons8-typescript.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-mono">
                            Essa interface foi criada no curso da rocketseat, com intuito de
                            aprender sobre o framework Tailwind css. Nessa interface foi
                            utilizada React, Tailwind e Typescript. Projeto muito completo
                            para aprender os conceitos do tailwind e alem disso treinar nas
                            demais ferramentas.
                        </p>
                    </div>

                    <div className="flex gap-3 justify-end">
                        <button
                            type="button"
                            className=" bg-cyan-900 p-2 hover:bg-cyan-950 rounded-lg animate-bounce"
                        >
                            <Link
                                href={
                                    "https://github.com/ThiagoLourenco286/Estudo-Tailwind/tree/master"
                                }
                                target="_blank"
                                className="flex flex-row items-center gap-2"
                            >
                                <GithubIcon className="h-4 w-4" /> GitHub{" "}
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="w-[640px] h-[540px] border rounded-lg p-5 space-y-6 lg:h-[590px] lg:w-[670px]">
                    <div className="w-full h-72 lg:h-80  ">
                        <img
                            src="/assets/projects/login.png"
                            alt=""
                            className="w-full h-full
                object-cover rounded-md lg:tranform lg:transition-all lg:hover:scale-125 lg:duration-700"
                        />
                    </div>
                    <div className=" flex  justify-between lg:pt-6">
                        <span className="font-semibold">Interface de Login</span>
                        <div className="flex gap-2">
                            <img
                                src="/assets/icons/icons8-nodejs.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                            <img
                                src="/assets/icons/icons8-javascript.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                            <img
                                src="/assets/icons/icons8-css3.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                            <img
                                src="/assets/icons/icons8-jwt.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                            <img
                                src="/assets/icons/icons8-ejs.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-mono">
                            Esse projeto foi feito no curso Programador Br, com intuido de
                            criar a parte de login de um usuario. Foi utilizado NodeJs para o
                            back-end, juntamente com a parte de autenticação com o JWT.
                            <br /> E na parte de tela dinamica foi utilizado ejs com css.
                        </p>
                    </div>

                    <div className="flex gap-3 justify-end">
                        <button
                            type="button"
                            className=" bg-cyan-900 p-2 hover:bg-cyan-950 rounded-lg animate-bounce"
                        >
                            <Link
                                href={
                                    "https://github.com/ThiagoLourenco286/Projeto-Login-/tree/master"
                                }
                                target="_blank"
                                className="flex flex-row items-center gap-2"
                            >
                                <GithubIcon className="h-4 w-4" /> GitHub{" "}
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="w-[620px] h-[540px] border rounded-lg p-5 space-y-6 lg:h-[590px] lg:w-[670px]">
                    <div className="w-full h-72 lg:h-80 ">
                        <img
                            src="/assets/projects/mural.png"
                            alt=""
                            className="w-full h-full
                object-cover rounded-md lg:tranform lg:transition-all lg:hover:scale-125 lg:duration-700"
                        />
                    </div>
                    <div className=" flex  justify-between lg:pt-6">
                        <span className="font-semibold">Mural de Avisos</span>
                        <div className="flex gap-2">
                            <img
                                src="/assets/icons/icons8-nodejs.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                            <img
                                src="/assets/icons/icons8-html-5.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                            <img
                                src="/assets/icons/icons8-css3.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                            <img
                                src="/assets/icons/icons8-javascript.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-mono">
                            Esse projeto foi feito no curso Programador Br, com intuido de
                            criar um mural de avisos. Nesse projeto foi utilizado o nodejs
                            para as requisições http, e na parte front-end foi utilizado HTML,
                            CSS e Javascript para interação com o usuario.
                        </p>
                    </div>

                    <div className="flex gap-3 justify-end">
                        <button
                            type="button"
                            className=" bg-cyan-900 p-2 hover:bg-cyan-950 rounded-lg animate-bounce"
                        >
                            <Link
                                href={
                                    "https://github.com/ThiagoLourenco286/Mural-de-Aviso/tree/master/Novo%20Projeto%2027-10"
                                }
                                target="_blank"
                                className="flex flex-row items-center gap-2"
                            >
                                <GithubIcon className="h-4 w-4" /> GitHub{" "}
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="w-[620px] h-[560px] border rounded-lg p-5 space-y-6 lg:h-[590px] lg:w-[670px]">
                    <div className="w-full h-72 lg:h-80 ">
                        <img
                            src="/assets/projects/Links.png"
                            alt=""
                            className="w-full h-full
                 rounded-md object-cover lg:tranform lg:transition-all lg:hover:scale-125 lg:duration-700"
                        />
                    </div>
                    <div className=" flex  justify-between lg:pt-6">
                        <span className="font-semibold">Monitoramento de Links</span>
                        <div className="flex gap-2">
                            <img
                                src="/assets/icons/icons8-nodejs.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                            <img
                                src="/assets/icons/icons8-javascript.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                            <img
                                src="/assets/icons/icons8-css3.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                            <img
                                src="/assets/icons/icons8-ejs.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-mono">
                            Esse projeto foi feito no curso Programador Br, com intuido de
                            criar um site que conseguimos adicionar links de diversas
                            plataformas e fazer um monitoramentos de quantos clicks teve certo
                            site. Utilizamos NodeJs com Javascript e no front-end Ejs com Css.
                        </p>
                    </div>

                    <div className="flex gap-3 justify-end">
                        <button
                            type="button"
                            className=" bg-cyan-900 p-2 hover:bg-cyan-950 rounded-lg animate-bounce"
                        >
                            <Link
                                href={
                                    "https://github.com/ThiagoLourenco286/Links/tree/master/Links"
                                }
                                target="_blank"
                                className="flex flex-row items-center gap-2"
                            >
                                <GithubIcon className="h-4 w-4" /> GitHub{" "}
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="w-[620px] h-[560px] border rounded-lg p-5 space-y-6 lg:h-[590px] lg:w-[670px]">
                    <div className="w-full h-72 lg:h-80  ">
                        <img
                            src="/assets/projects/Churrasco.png"
                            alt=""
                            className="w-full h-full
                object-cover rounded-md lg:tranform lg:transition-all lg:hover:scale-125 lg:duration-700"
                        />
                    </div>
                    <div className=" flex  justify-between lg:pt-6">
                        <span className="font-semibold">Churrascometro</span>
                        <div className="flex gap-2">
                            <img
                                src="/assets/icons/icons8-html-5.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                            <img
                                src="/assets/icons/icons8-css3.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                            <img
                                src="/assets/icons/icons8-javascript.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-mono">
                            Esse projeto foi um dos primeiros feitos no curso Programador Br,
                            com intuito de criar um simples site para calcular a quantidade
                            necessaria para um churrasco perfeito. Calculando por Homem,
                            Mulher, Criança e duração media. Utilizado HTML, CSS e
                            JavaScript.
                        </p>
                    </div>

                    <div className="flex gap-3 justify-end">
                        <button
                            type="button"
                            className=" bg-cyan-900 p-2 hover:bg-cyan-950 rounded-lg animate-bounce"
                        >
                            <Link
                                href={
                                    "https://github.com/ThiagoLourenco286/Churrascometro/tree/master/Churrascometro"
                                }
                                target="_blank"
                                className="flex flex-row items-center gap-2"
                            >
                                <GithubIcon className="h-4 w-4" /> GitHub{" "}
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="w-[620px] h-[540px] border rounded-lg p-5 space-y-6 lg:h-[590px] lg:w-[670px]">
                    <div className="w-full h-72 lg:h-80  ">
                        <img
                            src="/assets/projects/socialLinks.png"
                            alt=""
                            className="w-full h-full
                object-cover rounded-md lg:tranform lg:transition-all lg:hover:scale-125 lg:duration-700"
                        />
                    </div>
                    <div className=" flex  justify-between lg:pt-6">
                        <span className="font-semibold">Midia Social</span>
                        <div className="flex gap-2">
                            <img
                                src="/assets/icons/icons8-html-5.svg"
                                alt=""
                                className="w-7 h-6"
                            />
                            <img
                                src="/assets/icons/icons8-css3.svg"
                                alt=""
                                className="w-7 h-6 "
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-mono">
                            Esse projeto foi o primeiro feito no curso Programador Br, com
                            intuito de criar uma Midia Social. <br />
                            Colocando todas as redes para contato e divulgação. Foi utilizado
                            apenas HTML e CSS.
                        </p>
                    </div>

                    <div className="flex gap-3 justify-end">
                        <button
                            type="button"
                            className=" bg-cyan-900 p-2 hover:bg-cyan-950 rounded-lg animate-bounce"
                        >
                            <Link
                                href={
                                    "https://github.com/ThiagoLourenco286/Social-Links/tree/master/Social%20Links"
                                }
                                target="_blank"
                                className="flex flex-row items-center gap-2"
                            >
                                <GithubIcon className="h-4 w-4" /> GitHub{" "}
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <Link
                    href={"https://github.com/ThiagoLourenco286?tab=repositories"}
                    target="_blank"
                    className="text-sm font-bold text-slate-100 flex justify-center 
                    pt-12 text-decoration-line: underline gap-2 items-center"
                >
                    <LinkIcon className="h-4 w-4" /> Link para projetos sem interface,
                    apenas o back-end
                </Link>
            </div>
        </div>
    );
}
