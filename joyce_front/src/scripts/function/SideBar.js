import React from "react";

const SideBar = ({
    isOpen,
    onClose,
    categories = [],
    selectedCategories = [],
    onCategoryToggle
}) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="sidebar-overlay" onClick={onClose} />


        </>
    )
}