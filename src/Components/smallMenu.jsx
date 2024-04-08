import React, { useState, useEffect } from 'react';

export default function SmallMenu({ onclick1, onclick2 }) {
    const [activeItem, setActiveItem] = useState('التجريف الالي');

    const handleClick = (item) => {
        setActiveItem(item);
    };

    useEffect(() => {
        // Appeler la fonction associée au bouton "التجريف الالي" lors du rendu initial
        onclick1();
    }, []); // Le tableau vide signifie que cette fonction est exécutée uniquement lors du premier rendu

    return (
        <div className="bg-light_Blue py-2 mb-8 bg-opacity-20">
            <div className="max-w-3xl mx-auto flex justify-between">
                <button
                    className={`py-2 px-4 font-semibold focus:outline-none ${
                        activeItem === 'التجريف العادي' ? 'border-b-2 border-Deep_Blue text-Deep_Blue' : ''
                    }`}
                    onClick={() => {
                        onclick2();
                        handleClick('التجريف العادي');
                    }}
                >
                    التجريف العادي
                </button>
                <button
                    className={`mr-4 py-2 px-4 font-semibold focus:outline-none  ${
                        activeItem === 'التجريف الالي' ? 'border-b-2 border-Deep_Blue text-Deep_Blue' : ''
                    }`}
                    onClick={() => {
                        onclick1();
                        handleClick('التجريف الالي');
                    }}
                >
                    التجريف الالي
                </button>
            </div>
        </div>
    );
}
