"use client"
import React, { createContext, useState, useContext, ReactNode } from "react";

interface ProviderType {
	id: string;
	isOpen: boolean;
	openModal: (id: string) => void;
	closeModal: () => void;
}

// Step 1: Create the Context
export const ModalContext = createContext<ProviderType>({
	id: "",
	isOpen: false,
	openModal: () => {},
	closeModal: () => {},
});

// Step 2: Provider Component
export const ModalProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [id, setId] = useState("");

	const openModal = (courseId: string) => {
		setIsOpen(true);
		setId(courseId);
	};

	const closeModal = () => {
		setIsOpen(false);
		setId("");
	};
    console.log({isOpen});
    

	return (
		<ModalContext.Provider value={{ id, isOpen, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	);
};
