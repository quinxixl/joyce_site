import React, {useMemo, useState, useRef, useEffect} from "react";
import Fuse from 'fuse.js'
import CardProduct from "../../components/cards/CardProduct";
import search from "../../icons/search.svg";

const cardCatalogArray = [
    {
        id: '1',
        name: 'Ягодный бум',
        price: '150',
        previewPicture: 'http://localhost:8080/previewPicture.png',
        bgPicture: 'http://localhost:8080/bgPicture.png',
        hashtag1: '#Для энергии',
        hashtag2: '#Детокс',
        lists: [
            'Банан заряжает энергией.',
            'Банан заряжает энергией.',
            'Банан заряжает энергией.',
            'Банан заряжает энергией.',
            'Банан заряжает энергией.',
            'Персик поддерживает кожу и иммунитет.',
        ],
        category:[
            'Яблоко',
            'Банан',
            'Персик',
            'Клубника',
        ]
    },
    {
        id: '2',
        name: 'Цитрусовый бум',
        price: '150',
        previewPicture: 'http://localhost:8080/previewPicture.png',
        bgPicture: 'http://localhost:8080/bgPicture.png',
        hashtag1: '#Для энергии',
        hashtag2: '#Детокс',
        lists: [
            'Персик поддерживает кожу и иммунитет.',
        ],
        category:[
            'Яблоко',
            'Банан',
            'Персик',
        ]
    },
    {
        id: '3',
        name: 'Кислый джони',
        price: '150',
        previewPicture: 'http://localhost:8080/previewPicture.png',
        bgPicture: 'http://localhost:8080/bgPicture.png',
        hashtag1: '#Для энергии',
        hashtag2: '#Детокс',
        lists: [
            'Банан заряжает энергией.',
            'Персик поддерживает кожу и иммунитет.',
        ],
        category:[
            'Яблоко',
            'Банан',
        ]
    },
    {
        id: '4',
        name: 'Яблочный грут',
        price: '150',
        previewPicture: 'http://localhost:8080/previewPicture.png',
        bgPicture: 'http://localhost:8080/bgPicture.png',
        hashtag1: '#Для энергии',
        hashtag2: '#Детокс',
        lists: [
            'Банан заряжает энергией.',
            'Банан заряжает энергией.',
            'Персик поддерживает кожу и иммунитет.',
        ],
        category:[
            'Банан',
            'Персик',
            'Клубника',
        ]
    },
    {
        id: '5',
        name: 'Крутой поц',
        price: '150',
        previewPicture: 'http://localhost:8080/previewPicture.png',
        bgPicture: 'http://localhost:8080/bgPicture.png',
        hashtag1: '#Для энергии',
        hashtag2: '#Детокс',
        lists: [
            'Банан заряжает энергией.',
            'Банан заряжает энергией.',
            'Банан заряжает энергией.',
            'Персик поддерживает кожу и иммунитет.',
        ],
        category:[
            'Яблоко',
            'Персик',
            'Клубника',
        ]
    }
]

const Filter = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFruits, setSelectedFruits] = useState(['all']); // Массив выбранных
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const fuse = useMemo(() => new Fuse( cardCatalogArray,{
        keys: ['name', 'title', 'category'],
        threshold: 0.3,
        minMatchCharLength: 2,
    }), []);

    const allFruits = useMemo(() => {
        const fruitsSet = new Set();
        cardCatalogArray.forEach(item => {
            if (item.category && Array.isArray(item.category)) {
                item.category.forEach(fruit => fruitsSet.add(fruit));
            }
        });
        return Array.from(fruitsSet).sort();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleFruitToggle = (fruit) => {
        setSelectedFruits(prev => {
            if (fruit === 'all') {
                return ['all'];
            }

            let newSelection = prev.includes('all')
                ? prev.filter(f => f !== 'all')
                : [...prev];

            if (newSelection.includes(fruit)) {
                newSelection = newSelection.filter(f => f !== fruit);
                if (newSelection.length === 0) {
                    newSelection = ['all'];
                }
            } else {
                newSelection.push(fruit);
            }

            return newSelection;
        });
    };



    const filteredData = useMemo(() => {
        let results = [...cardCatalogArray];

        if (searchQuery.trim()) {
            const searchResults = fuse.search(searchQuery);
            results = searchResults.map(result => result.item);
        }

        if (!selectedFruits.includes('all') && selectedFruits.length > 0) {
            results = results.filter(item =>
                    item.category && selectedFruits.some(fruit =>
                        item.category.includes(fruit)
                    )
            );
        }

        return results;
    }, [searchQuery, selectedFruits, fuse]);

    return (
        <div className="filter-main">
            <div className="filter__container">
                <div className="filter__category" ref={dropdownRef}>
                    <button
                        className="filter__dropdown-button"
                        onClick={toggleDropdown}
                    >
                        <span className="filter__dropdown-title">
                           Ингредиенты
                        </span>
                        <span className={`filter__dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
                            ▼
                        </span>
                    </button>

                    {isDropdownOpen && (
                        <div className="filter__dropdown-menu">
                            <label className="filter__dropdown-option">
                                <input
                                    type="checkbox"
                                    checked={selectedFruits.includes('all')}
                                    onChange={() => handleFruitToggle('all')}
                                    className="filter__dropdown-input"
                                />
                                <span className="filter__dropdown-custom"></span>
                                <span className="filter__dropdown-label">
                                    Все ингредиенты
                                </span>
                            </label>

                            <div className="filter__dropdown-divider"></div>

                            {allFruits.map(fruit => (
                                <label key={fruit} className="filter__dropdown-option">
                                    <input
                                        type="checkbox"
                                        checked={selectedFruits.includes(fruit)}
                                        onChange={() => handleFruitToggle(fruit)}
                                        className="filter__dropdown-input"
                                    />
                                    <span className="filter__dropdown-custom"></span>
                                    <span className="filter__dropdown-label">
                                        {fruit}
                                    </span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                <div className="filter__search">
                    <input
                        className="filter__search-input"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Поиск"
                    />
                    <img src={search} className="filter__search-icon" />
                </div>
            </div>

            <div className="filter__card-container">
                {filteredData.length === 0 ? (
                    <p className="filter__card-nothing">Ничего не найдено</p>
                ) : (
                    <div className="filter__card-items">
                        {filteredData.map((item) => (
                            <div key={item.id}>
                                <CardProduct item={item} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Filter;