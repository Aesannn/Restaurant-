# Restaurant App

This project is a simple web application for displaying a list of restaurants with their details. It is built using React for the frontend and Express for the backend. The restaurant data is served through a mock backend server.

## Features

1. Display a list of restaurants with details.
2. Implement a REST API to fetch restaurant data from the backend.
3. Google Map link mapped to the given coordinates.
4. Trending/recommended dishes displayed based on rating.
5. Images added for food (random images).
6. Filters for restaurants based on a minimum rating.
7. Additional features to enhance the website.

## Project Structure

```plaintext
restaurant-app/
|-- src/
|   |-- components/
|   |   |-- RestaurantList.js
|   |   |-- RestaurantCard.js
|   |   |-- Map.js
|   |   |-- Filter.js
|   |-- services/
|   |   |-- api.js
|   |-- App.js
|   |-- index.js
|-- public/
|-- package.json
|-- README.md
|-- server.js

Setup
Clone the repository:

bash
Copy code
git clone https://github.com/Aesannn/Restaurant-.git
cd restaurant-app
Install dependencies:

bash
Copy code
npm install
Run the mock backend server:

bash
Copy code
node public/mock-backend-server.js
Start the React app:

bash
Copy code
npm start
REST APIs
GET /api/restaurants: Get a list of restaurants.
Additional Information
The frontend is built with React, and the backend is a simple Express server serving the restaurant data.
The Filter component allows users to filter restaurants based on a minimum rating.
The Google Map link for each restaurant provides easy navigation to the restaurant's location.
Feel free to explore and customize the code based on your requirements. If you encounter any issues or have suggestions for improvement, please open an issue on the GitHub repository.
