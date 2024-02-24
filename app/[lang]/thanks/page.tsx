import Image from "next/image";

interface thanksProps {

}

const thanks: React.FC<thanksProps> = () => {
    return (
        <>
            <section>
                <div className="custom-container flex items-center justify-between py-16">
                    <div className="">
                        <h2 className="mb-4">Ваша заявка принята!</h2>
                        <p className="text-2xl">
                            Мы работаем каждый день с 10:00 до 19:00 (кроме воскресений).
                        </p>
                        <p className="text-2xl">
                            Телефон для справок: +998 (90) 197-71-00
                        </p>
                    </div>
                    <div className="max-w-xs">
                        <Image
                            src={"/images/tick.svg"}
                            width={1000}
                            height={1000}
                            alt="tick"
                        />
                    </div>
                </div>
            </section>
            {/* <section>
                <iframe className="w-full min-h-[400px]" src="https://static.elfsight.com/platform/platform.js" data-use-service-core></iframe>
                <div className="elfsight-app-851dbf41-45e9-4c81-86ce-081fb250ce87" data-elfsight-app-lazy></div>
            </section> */}
        </>
    );
}

export default thanks;