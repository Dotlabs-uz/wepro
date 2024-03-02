"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "./Modal";

interface HeroCourseProps {
    data: any
    course: any
}

const HeroCourse: React.FC<HeroCourseProps> = ({ data, course }) => {
    const [isOpened, setIsOpened] = useState(false);
    let price = `${data?.price.toString().slice(0, 3)},${data?.price.toString().slice(3)}`;

    const onOpen = () => {
        setIsOpened(true);
    };
    const onClose = () => {
        setIsOpened(false);
    };

    useEffect(() => {
        if (isOpened) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "scroll";
        }
    }, [isOpened]);

    return (
        <>
            <Modal
                isOpened={isOpened}
                onClose={onClose}
                select={false}
                title={"Записаться на курс"}
                type={"classic"}
                admissionId={""}
                courseId={data?._id}
                dcr={"Оставьте заявку и получите возможность попасть на открытый урок абсолютно бесплатно."}
            />
            <section className="hero-gradient">
                <div className="flex gap-16 max-3xl:gap-10">
                    <div className="w-1/2 relative max-lg:hidden">
                        {
                            data?.preview ?
                                <img
                                    className="w-full h-full object-cover bg-no-repeat"
                                    src={data?.preview}
                                    alt="photo"
                                />
                                :
                                <div className="w-full h-full flex items-center justify-center animate-pulse bg-gray-300">

                                </div>
                        }
                        <div className="h-full w-full absolute z-10 left-0 bottom-0 hero-img-gradient"></div>
                    </div>

                    <div className="max-w-[655px] max-xl:max-w-xl max-lg:max-w-full py-12 max-lg:py-8 max-3xl:pr-16 max-lg:px-5 max-sm:px-4">
                        <div className="flex max-md:flex-col gap-5 mb-14 max-2xl:mb-10">
                            <div className="w-2/5 max-md:w-full max-md:h-[250px] max-lg:block hidden">
                                <Image
                                    className="w-full h-full object-cover bg-no-repeat rounded-xl"
                                    src={"/images/hero-2.jpg"}
                                    width={1000}
                                    height={1000}
                                    alt="photo"
                                />
                            </div>
                            <div className="max-lg:w-3/5 max-md:w-full">
                                <h1 className="text-5xl max-3xl:text-4xl max-xl:text-3xl font-bold leading-normal mb-7 max-2xl:mb-5 max-sm:mb-3 text-white">
                                    {
                                        data?.title ?
                                            data?.title
                                            :
                                            (
                                                <span className="block w-[400px] h-12 rounded-xl animate-pulse bg-gray-300"></span>
                                            )
                                    }
                                </h1>

                                <h3 className="text-2xl max-2xl:text-xl max-lg:text-lg leading-normal max-sm:leading-snug mb-5 text-white">
                                    {
                                        data?.textAboutCourse ?
                                            data?.textAboutCourse
                                            :
                                            (
                                                <span className="flex flex-col">
                                                    <span className="block w-full h-5 mb-2 rounded-xl animate-pulse bg-gray-300"></span>
                                                    <span className="block w-full h-5 mb-2 rounded-xl animate-pulse bg-gray-300"></span>
                                                    <span className="block w-full h-5 mb-2 rounded-xl animate-pulse bg-gray-300"></span>
                                                    <span className="block w-1/2 h-5 rounded-xl animate-pulse bg-gray-300"></span>
                                                </span>
                                            )
                                    }
                                </h3>

                                {
                                    data?.apps ?
                                        <ul className="max-w-[420px] max-2xl:max-w-lg w-full flex flex-wrap items-center gap-x-3 gap-y-2 text-white">
                                            {
                                                data?.apps.map((app: string, idx: number) => {
                                                    return (
                                                        <li
                                                            key={idx}
                                                            className="text-sm py-2 px-5 rounded-lg border border-[#ffffff30]"
                                                        >
                                                            {app}
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                        :
                                        (
                                            <ul className="flex flex-wrap gap-3">
                                                {
                                                    [0, 1, 2, 3, 4, 5, 6].map((item: number) => {
                                                        return (
                                                            <li key={item} className="w-28 h-9 animate-pulse rounded-xl bg-gray-300"></li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        )
                                }
                            </div>
                        </div>

                        <div className="bg-white py-4 max-xs:py-3 px-7 max-xl:px-5 max-xs:px-3 rounded-3xl max-md:rounded-2xl">
                            <div className="sm:flex max-sm:flex-wrap sm:items-center sm:justify-between max-sm:grid grid-cols-2  max-md:gap-y-4 mb-5">
                                <div className="">
                                    <p className="flex gap-1 font-bold leading-normal">
                                        {
                                            data?.month ?
                                                (
                                                    <span className="">
                                                        {data?.month} {course.hero.months}
                                                    </span>
                                                )
                                                :
                                                (
                                                    <span className="w-24 h-4 animate-pulse rounded-xl bg-gray-300"></span>
                                                )
                                        }
                                    </p>
                                    <p className="text-sm max-xs:text-xs font-medium text-[#00000099]">
                                        {course.hero.duration}
                                    </p>
                                </div>
                                <div className="">
                                    <p className="font-bold leading-normal">
                                        {
                                            data?.price ?
                                                (
                                                    <span className="">
                                                        {price} {course.hero.sum}
                                                    </span>
                                                )
                                                :
                                                (
                                                    <span className="block w-24 h-4 animate-pulse rounded-xl bg-gray-300"></span>
                                                )
                                        }
                                    </p>
                                    <p className="text-sm max-xs:text-xs font-medium text-[#00000099]">
                                        {course.hero.price}
                                    </p>
                                </div>
                                <div className="">
                                    <p className="font-bold leading-normal">
                                        {
                                            data?.lessons ?
                                                (
                                                    <span className="">
                                                        {data?.lessons.length} {course.hero.lessons},
                                                        {Math.ceil(data?.lessons.length * 1.5)} {course.hero.hours}
                                                    </span>
                                                )
                                                :
                                                (
                                                    <span className="block w-24 h-4 animate-pulse rounded-xl bg-gray-300"></span>
                                                )
                                        }
                                    </p>

                                    <p className="text-sm max-xs:text-xs font-medium text-[#00000099]">
                                        {course.hero.number}
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <button
                                    onClick={onOpen}
                                    className="bg-black text-white w-full text-xl max-lg:text-lg font-bold py-4 rounded-lg"
                                >
                                    {course.hero.button}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="custom-container py-16 max-2xl:py-12 max-lg:py-8 max-md:hidden">
                    <div className="mb-5 ">
                        <h3 className="text-3xl max-xl:text-2xl font-bold text-center text-white">
                            Зачем становиться дизайнером?
                        </h3>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-5">
                        <div className="bg-[#F4F4F4] w-fit flex items-center gap-4 py-2 pl-3 pr-7 rounded-3xl">
                            <div className="bg-white p-3 rounded-2xl">
                                <Image
                                    src={"/icons/vacancies.svg"}
                                    width={33}
                                    height={33}
                                    alt="icon"
                                />
                            </div>
                            <div className="">
                                <p className="font-bold">10,000 вакансий</p>
                                <p className="text-[#00000066] text-sm font-medium">
                                    На площадках по поиску работ
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#F4F4F4] w-fit flex items-center gap-4 py-2 pl-3 pr-7 rounded-3xl">
                            <div className="bg-white p-3 rounded-2xl">
                                <Image
                                    src={"/icons/dollar.svg"}
                                    width={33}
                                    height={33}
                                    alt="icon"
                                />
                            </div>
                            <div className="">
                                <p className="font-bold">${data?.earning}</p>
                                <p className="text-[#00000066] text-sm font-medium">
                                    Диапазон зарплат
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#F4F4F4] w-fit flex items-center gap-4 py-2 pl-3 pr-7 rounded-3xl">
                            <div className="bg-white p-3 rounded-2xl">
                                <Image
                                    src={"/icons/chart.svg"}
                                    width={33}
                                    height={33}
                                    alt="icon"
                                />
                            </div>
                            <div className="">
                                <p className="font-bold">Топ 3</p>
                                <p className="text-[#00000066] text-sm font-medium">
                                    Востребованная профессия
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroCourse;