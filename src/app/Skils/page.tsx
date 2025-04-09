/* eslint-disable @next/next/no-img-element */
export default function Skils() {
    return (
        <div className="px-16 pb-12">
            <h1 className="text-3xl font-bold">Skils</h1>

            <div className="space-y-5" >
                <h2 className="text-2xl pb-8 flex items-center justify-center">
                    Soft Skils
                </h2>
                <div className="flex flex-wrap gap-16 justify-center items-center">
                    <div className="max-w-60 space-y-2 lg:tranform lg:transition-all lg:hover:scale-125 lg:duration-700">
                        <h3 className="font-semibold">Trabalho em Equipe</h3>
                        <p className="font-mono text-sm">
                            {" "}
                            Habilidade de trabalhar de forma colaborativa em equipe,
                            contribuindo com suas habilidades e ideias para alcançar objetivos
                            comuns.
                        </p>
                    </div>
                    <div className="max-w-60 space-y-2 lg:tranform lg:transition-all lg:hover:scale-125 lg:duration-700">
                        <h3 className="font-semibold">Otima Comunicação</h3>
                        <p className="font-mono text-sm">
                            {" "}
                            Capacidade de expressar ideias de forma clara e concisa,
                            facilitando a colaboração com colegas de equipe e clientes.
                        </p>
                    </div>
                    <div className="max-w-60 space-y-2 lg:tranform lg:transition-all lg:hover:scale-125 lg:duration-700">
                        <h3 className="font-semibold">Resolução de Problema</h3>
                        <p className="font-mono text-sm">
                            {" "}
                            Capacidade de identificar, analisar e resolver problemas de forma
                            eficaz, buscando soluções criativas e inovadoras.
                        </p>
                    </div>
                    <div className="max-w-60 space-y-2 lg:tranform lg:transition-all lg:hover:scale-125 lg:duration-700">
                        <h3 className="font-semibold">Adaptabilidade</h3>
                        <p className="font-mono text-sm">
                            {" "}
                            Sou uma pessoa altamente adaptável e flexível no ambiente de
                            trabalho. Tenho facilidade em aprender novas habilidades e me
                            ajustar a diferentes situações
                        </p>
                    </div>
                    <div className="max-w-60 space-y-2 lg:tranform lg:transition-all lg:hover:scale-125 lg:duration-700">
                        <h3 className="font-semibold">Organização</h3>
                        <p className="font-mono text-sm">
                            {" "}
                            Sou um profissional altamente competente em gestão do tempo. Minha
                            habilidade em planejar e organizar tarefas me permite ser
                            extremamente produtivo e eficiente no ambiente de trabalho.
                        </p>
                    </div>
                </div>
            </div>
            <h2 className="text-2xl font-semibold pt-16">Hard Skils</h2>
            <div className="flex flex-col justify-between space-y-6 pt-12 lg:space-y-0 lg:flex lg:flex-row ">
                {/* <h2 className="text-2xl font-semibold">Hard Skils</h2> */}
                <div className="space-y-5">
                    <p className="font-mono">Hard Skils mais utilizadas por mim :</p>
                    <div className="flex items-center gap-4">
                        <img src="/assets/icons/react.png" className="h-20" alt="react" />
                        <img src="/assets/icons/node-js.png" className="h-20" alt="node" />
                        <img
                            src="/assets/icons/javascript.png"
                            className="h-20"
                            alt="javascript"
                        />
                    </div>
                </div>

                <div className="space-y-5 pt-8 lg:pt-0">
                    <p className="font-mono">
                        Outras hards skils que tenho conhecimento :
                    </p>
                    <div className="flex flex-wrap  items-center gap-8 lg:gap-4">
                        <img src="/assets/icons/figma.png" className="h-20 " alt="figma" />
                        <img
                            src="/assets/icons/bootstrap.png"
                            className="h-20"
                            alt="figma"
                        />
                        <img src="/assets/icons/mongo.png" className="h-20" alt="mongo" />
                        <img
                            src="/assets/icons/firebase.png"
                            className="h-16"
                            alt="firebase"
                        />
                        <img
                            src="/assets/icons/Docker-Emblem.png"
                            className="h-16"
                            alt="docker"
                        />
                        <img
                            src="/assets/icons/tailwind.png"
                            className="h-12"
                            alt="tailwind"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
