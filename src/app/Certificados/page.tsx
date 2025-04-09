import { Certifcados } from "./CertificadosItem";

export default function Certificados() {
    return (
        <div className=" px-16 pb-12 ">
            < h1 className="text-3xl font-bold" > Certificados</h1 >

            <div className="flex flex-col items-center justify-center pt-12 lg:pt-2">
                <h3 className="text-2xl font-semibold">RocketSeat</h3>
                <div className="lg:grid lg:grid-cols-2 gap-x-8 lg:gap-x-28">
                    <Certifcados image="assets/image/cleanCode.png" name="cleanCode"
                        description="Certificado clean code" />
                    <Certifcados image="assets/image/nlwBackEnd.png" name="nlwBackEnd"
                        description="Certificado de participação nlw Back-End" />
                    <Certifcados image="assets/image/tailwind.png" name="tailwind"
                        description="Certificado Tailwind Css" />
                    <Certifcados image="assets/image/nlwMobile.png" name="nlwMobile"
                        description="Certificado de participação nlw Mobile" />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center pt-8">
                <h3 className="text-2xl font-semibold">Programador Br</h3>
                <div className="lg:grid lg:grid-cols-2 gap-x-8 lg:gap-x-28">
                    <Certifcados image="assets/image/basico.png" name="Basico Programação"
                        description="Certificado HTML , CSS , JavaScript" />
                    <Certifcados image="assets/image/Firebase.png" name="Intermediario"
                        description="Certificado Firebase , JQuery , Booststrap" />
                    <Certifcados image="assets/image/node.png" name="Avançado"
                        description="Certificado Node e MongoDb" />
                    <Certifcados image="assets/image/react.png" name="React"
                        description="Certificado React" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-8">
                <h3 className="text-2xl font-semibold">Expert Cusros</h3>
                <div className="lg:grid lg:grid-cols-2 gap-x-28">
                    <Certifcados image="assets/image/excel.png" name="execel"
                        description="Certificado excel avançado" />
                    <Certifcados image="assets/image/poweBi.png" name="PoweBi"
                        description="Certificado power bi avançado" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-8">
                <h3 className="text-2xl font-semibold">Udemy</h3>
                <div className="lg:grid lg:grid-cols-2 gap-x-28">
                    <Certifcados image="assets/image/sql.png" name="sql"
                        description="Certificado SQL" />
                    <Certifcados image="assets/image/figma.png" name="figma"
                        description="Certificado Figma - UX / UI" />
                </div>
            </div>
        </div >
    )
}