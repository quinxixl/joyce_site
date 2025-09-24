import React, {useMemo, useState} from "react";
import Fuse from 'fuse.js'
import CardProduct from "../../components/cards/CardProduct";

const cardCatalogArray = [
    {
        id: '1',
        name: 'Ягодный бум',
        price: '150',
        previewPicture: 'http://localhost:8080/previewPicture.png',
        bgPicture: 'http://localhos:8080/bgPicture.png',
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
        bgPicture: 'http://localhos:8080/bgPicture.png',
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
        bgPicture: 'http://localhos:8080/bgPicture.png',
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
        bgPicture: 'http://localhos:8080/bgPicture.png',
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
        bgPicture: 'http://localhos:8080/bgPicture.png',
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
    const [selectedFruit, setSelectedFruit] = useState('all');

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
        return ['all', ...Array.from(fruitsSet).sort()];
    }, []);

    const filteredData = useMemo(() => {
        let results = [...cardCatalogArray];

        if (searchQuery.trim()) {
            const searchResults = fuse.search(searchQuery);
            results = searchResults.map(result => result.item);
        }

        if (selectedFruit !== 'all') {
            results = results.filter(item =>
                item.category && item.category.includes(selectedFruit)
            );
        }

        return results;
    }, [searchQuery, selectedFruit, fuse]);

    return (
        <div className="filter-main">
            <div className="filter__container">
                <div className="filter__category">
                    <select
                        className="filter__category-select"
                        value={selectedFruit}
                        onChange={(e) => setSelectedFruit(e.target.value)}
                    >
                        {allFruits.map(fruit => (
                            <option key={fruit} value={fruit} className="filter__category-option">
                                {fruit === 'all' ? 'Все категории' : fruit}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="filter__search">
                    <input
                        className="filter__search-input"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Поиск"
                    />
                </div>
            </div>
            <div className="filter__card-container">
                {filteredData.length === 0 ? (
                    <p class="filter__card-nothing">Ничего не найдено</p>
                ) : (
                    <div className="filter__card-item">
                        {filteredData.map((item, index) => (
                            <div key={index} >
                                <CardProduct item={item} />
                            </div>
                        ))}
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Filter;