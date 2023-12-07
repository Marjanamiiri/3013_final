import React, { useState } from 'react';
import Highlight from './Highlight';
import { foods } from './foods';
import './FoodList.css';

const FoodList: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(search.toLowerCase()) || food.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="food-list-container">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
      />
      <ul className="food-ul">
        {filteredFoods.map(food => (
          <li key={food.id} className="food-li">
            <span className="food-name">
              <Highlight text={food.name} search={search} />
            </span>
            {' - '}
            <span className="food-description">
              <Highlight text={food.description} search={search} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
