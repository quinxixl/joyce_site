import React, { useMemo, useState, useEffect } from "react";
import Fuse from "fuse.js";
import CardProduct from "../../components/cards/CardProduct";
import search from "../../icons/search.svg";
import closeBtn from "../../icons/close.png"

function Filter({addToCart, removeFromCart, cart}) {
    const [cardCatalogArray, setCardCatalogArray] = useState([]);
    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const API_URL = "http://localhost:1337/api/cards";

    useEffect(() => {
        const fetchCatalog = async () => {
            const response = await fetch(API_URL);
            const data = await response.json();

            const transformedData = data.data.map((item) => ({
                id: item.id.toString(),
                name: item.name,
                price: item.price.toString(),
                previewPicture: item.previewPicture,
                bgPicture: item.bgPicture,
                hashtag1: item.hashtag1,
                hashtag2: item.hashtag2,
                lists: item.lists || [],
                category: item.category || [],
            }));

            setCardCatalogArray(transformedData);
        };

        fetchCatalog();
    }, []);

    const resetFilter = () => {
        setSelectedCategory([]);
    }

    const uniqCategory = Array.from(
        new Set(cardCatalogArray.flatMap((item) => item.category))
    );

    const fuse = useMemo(() => {
        return new Fuse(cardCatalogArray, {
            keys: ["category", "name", "hashtag1", "hashtag2"],
            threshold: 0.3,
        });
    }, [cardCatalogArray]);

    const filterSearch = query
        ? fuse.search(query).map((res) => res.item)
        : cardCatalogArray;

    const checkboxCheck = (category) => {
        setSelectedCategory((prev) =>
            prev.includes(category)
                ? prev.filter((a) => a !== category)
                : [...prev, category]
        );
    };

    const filterCategory =
        selectedCategory.length === 0
            ? filterSearch
            : filterSearch.filter(
                (item) =>
                    Array.isArray(item.category) &&
                    item.category.some((cat) => selectedCategory.includes(cat))
            );

    const toggleSidebar = () => {
        setIsOpen((prev) => {
            const nextState = !prev;
            if (nextState) {
                document.body.classList.add("no-scroll");
            } else {
                document.body.classList.remove("no-scroll");
            }
            return nextState;
        });
    };

    return (
        <div className="filter-container">
            <div className={`filter__sideBar-wrapper ${isOpen ? "open" : ""}`}>
                <button className="filter__sideBar-close-button" onClick={toggleSidebar}>
                    <img src={closeBtn} alt="Закрыть"/>
                </button>
                {uniqCategory.map((category) => (
                    <label key={category} className="filter__category">
                        <input
                            type="checkbox"
                            checked={selectedCategory.includes(category)}
                            onChange={() => checkboxCheck(category)}
                            className="filter__category-checkbox"
                        />
                        <p className="filter__category-text">{category}</p>
                    </label>
                ))}

                <button
                    className="filter__sideBar-reset-button"
                    onClick={resetFilter}
                >
                    Сбросить
                </button>
            </div>

            <div class="filter__buttons-container">
                <div className="filter__sideBar-open-button">
                    <button className="filter__sideBar-button" onClick={toggleSidebar}>
                        <span className="filter__sideBar-text">Ингредиент</span>
                        <span className="filter__sideBar-icon">☰</span>
                    </button>
                </div>

                <div className="filter__hashtag-container">

                </div>

                <div className="filter__search-wrapper">
                    <input
                        className="filter__search-input"
                        type="search"
                        placeholder="Поиск"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <img src={search} alt="search" className="filter__search-icon"/>
                </div>
            </div>

            <div className="filter__card-wrapper">
                {filterCategory.map((item) => (
                    <CardProduct key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
                ))}

                {filterCategory.length === 0 && (
                    <p className="filter__card-nothing">
                        Ничего не найдено
                    </p>
                )}
            </div>
        </div>
    );
};

export default Filter;