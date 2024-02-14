import React, { useState, useEffect, useRef } from 'react';

function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % totalItems); // Прокрутка на следующий элемент
        }, 3000); // Интервал в миллисекундах, настраиваемый по вашему усмотрению

        return () => clearInterval(interval);
    }, []); // Пустой массив зависимостей означает, что useEffect будет вызываться только один раз при монтировании компонента

    const scrollToElement = (index: number) => {
        setActiveIndex(index);
        const element = document.getElementById(`item-${index}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const totalItems = 5; // Общее количество элементов в слайдере

    return (
        <div className="slider-container" ref={sliderRef}>
            <div className="slider-items">
                {/* Ваши элементы слайдера */}
                {Array.from({ length: totalItems }, (_, index) => (
                    <div key={index} id={`item-${index}`} className={`slider-item ${index === activeIndex ? 'active' : ''}`}>
                        Item {index + 1}
                    </div>
                ))}
            </div>
            <div className="controls">
                {/* Кнопки для выбора элемента слайдера */}
                {Array.from({ length: totalItems }, (_, index) => (
                    <button key={index} onClick={() => scrollToElement(index)}>Item {index + 1}</button>
                ))}
            </div>
        </div>
    );
}

export default Slider;
