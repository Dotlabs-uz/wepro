"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "../Modal";

interface GroupProps {
    item: any
}

const Group: React.FC<GroupProps> = ({ item }) => {
    const [isOpened, setIsOpened] = useState(false);

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
                type={"admission"}
                admissionId={item._id}
                courseId={item.courseId._id}
                title={"Записать на набор"}
                dcr={"Успейте получить место в новой группе! Группы в среднем открываются за 10 дней."}
            />
            <div className="w-[450px] max-2xl:w-[400px] max-lg:w-[310px] flex flex-col rounded-[20px] shadow-[0px_4px_5px_0px_#00000026] hover:shadow-[0px_5px_15px_3px_#00000026] duration-150 ease-in">
                <div className="p-2">
                    <Image
                        src={"/images/course-img.webp"}
                        width={1000}
                        height={1000}
                        alt="course"
                    />
                </div>
                <div className="px-7 max-2xl:px-4 pb-6 max-sm:p-5 flex flex-col flex-grow">
                    <h3 className="text-3xl max-2xl:text-2xl max-xl:text-xl leading-normal font-bold mb-4 max-2xl:mb-3">
                        {item.courseId.title}
                    </h3>
                    <p className="max-xl:text-sm mb-0.5">
                        {
                            item.days === 1 ? "Понедельник-среда-пятница" : "Вторник-четверг-суббота"
                        }
                    </p>
                    <p className="max-xl:text-sm mb-0.5">
                        Вечер, {item.time}
                    </p>
                    <p className="max-xl:text-sm mb-5 max-xl:mb-4">
                        {item.courseId.price} сум/месяц
                    </p>
                    <div className="mt-auto">
                        <button onClick={onOpen} className="max-md:w-full px-7 max-xl:px-5 py-3 max-xl:py-2 max-sm:p-3 max-lg:text-sm font-bold rounded-lg duration-100 ease-in border-2 border-transparent hover:bg-transparent bg-[#151FE1] hover:border-black text-white hover:text-black">
                            Хочу в эту группу!
                        </button>
                    </div>
                </div>
            </div></>
    );
}

export default Group;