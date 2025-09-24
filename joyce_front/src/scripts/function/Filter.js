import React, {useMemo} from "react";
import Fuse from 'fuse.js'

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
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedCategory, setSelectedCategory] = React.useState('all');

    const fuse = useMemo(() => new Fuse( cardCatalogArray,{
        keys: ['name', 'title', 'category'],
        threshold: 0.5,
        minMatchCharLength: 2,
    }), []);

    const categories = useMemo(() => {
        const uniqueCards = [...new Set(cardCatalogArray.map(el => el.category))];
        return ['all', ...uniqueCats];
    })
    const filteredData = useMemo(() => {
        if (!searchQuery && selectedCategory === 'all') {
            return cardCatalogArray;
        }

        let results = [...cardCatalogArray];

        if (searchQuery) {
            const searchResults = fuse.search(searchQuery);
            results = searchResults.map(result => result.item);
        }

        if (selectedCategory !== 'all') {
            results = results.filter(item => item.category === selectedCategory);
        }

        return results;
    }, [searchQuery, selectedCategory, fuse]);

    return (
        <div className="filter__container">
            <div className="filter__category">
                <select
                className="filter__category-input"
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                >
                    {categories.map(category => (
                        <option key={category} value={category}></option>
                    ))}
                </select>
            </div>
        </div>
    )
}
