import { FileUser, Github, Linkedin, Mails, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="px-16 pace-y-6 pt-12 ">

      <div className="space-y-5 dark:bg-white">
        <p className="font-mono font-semibold text-lg">
          Olá, sou o Thiago, tenho 21 anos de idade e estou em busca da
          primeira oportunidade de emprego na area de desenvolvimento. <br />
          Atualmente trabalho em uma transportadora (Jamef), no setor de logistica. <br />
          Curso tecnologo em analise e desenvolvimento de sistema na instituição
          Anhangueras. <br />
          Sou apaixonado por tecnologia e estou sempre conectado com as
          novidades do mercado, meu foco de tec é Node Js para a parte Back-end
          e para o Front-end React.
        </p>
        <p className="flex flex-col justify-center text-sm">
          Segue a baixo o meu curriculo e meus contatos ;<br />Bora se conectar 😉 </p>

        <button>
          <a href="https://drive.google.com/file/d/12s1WRV6uFF3wTM8s_UB__PZxw01Jiy_o/view?usp=sharing"
            className="flex items-center gap-3 bg-cyan-900 p-2 rounded-md animate-pulse" target="_black">
            <FileUser className="h-5 w-5" />
            <span className="font-semibold ">Curriculo</span>
          </a>
        </button>
      </div>
      <div className=" pt-12 lg:flex justify-between lg:p-12">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-3xl">Informações de Contato</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-xl ">Contato</span>
              <Phone className="h-4 w-4" />
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+5531994366704"
                target="_blank"
                className="font-mono font-semibold "
              >
                ( 31 ) 9 94336-6704
              </a>
              <span className="text-xs">Whatsapp e Ligações</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-xl ">Email</span>
              <Mails className="h-4 w-4" />
            </div>
            <a
              href="mailto:Thiago.lourencooliveira12@gmail.com"
              target="_blank"
              className="font-mono font-semibold"
            >
              thiago.lourencooliveira12@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-xl ">Localização</span>
              <MapPin className="h-4 w-4" />
            </div>
            <span className="font-mono font-semibold">
              Rua Maria Cecilia, 385, Alvorada{" "}
            </span>
          </div>
        </div>

        <div className="py-12 flex flex-col gap-4">
          <h3 className="font-semibold text-3xl">Redes Sociais</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-xl ">Linkedin</span>
              <Linkedin className="h-4 w-4" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs">Thiago Lourenço</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-xl ">GitHub</span>
              <Github className="h-4 w-4" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs">ThiagoLourenco286</span>
            </div>
          </div>

        </div>


      </div>
    </div >
  );
}
