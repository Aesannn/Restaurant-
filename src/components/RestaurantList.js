import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantCard from './RestaurantCard';

const RestaurantList = () => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/restaurants');
        setRestaurantData(response.data.restaurant);
      } catch (error) {
        console.error('Error fetching restaurant data', error);
      }
    };

    fetchRestaurantData();
  }, []);

  return (
    <div>
      <h1>Restaurant Finder</h1>
      {restaurantData ? (
        <RestaurantCard restaurant={restaurantData} />
      ) : (
        <p>Loading restaurant data...</p>
      )}
    </div>
  );
};

export default RestaurantList;