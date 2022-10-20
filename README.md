# FEC-ProjectCatwalk

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)


## Motivation

This project was designed to grow our understanding of building, maintaining, and optimizing a full react application. While the project was completed as a group, each individual was fully responsible for their own component. This allowed each of us to utilize and strengthen our understanding of front end development.

## Demo

https://user-images.githubusercontent.com/98575125/177028027-c4da0f42-309d-4ff2-af6a-98684eaf10eb.mp4

## Component Details
### Main Product Overview
Product Overview displays a primary product with product information:
  - A gallery of product images
  - An assortment of styles to select for each product
  - Product descriptions, slogans, features, and pricing
  - Size and quantity available

### Related Products and Your Outfit
Related Products displays product cards of similar items that may interest the user. This component includes:
  - Scrollable list of product cards
  - A feature comparison table
  - Conditionally rendered scroll buttons

Your Outfit allows users to save and track individual products based on their interest.This component includes:
  - Add to Outfit card which adds the current product to Your Outfit list
  - A delete card icon that removes the product from the list

### Questions & Answers
The Questions & Answers module will allow asking and answering of questions for the product selected. The functionality contained within this module can be divided into several pieces:

 - View questions

 - Search for a question

 - Asking a question

 - Answering a question

This component will extend the ability to view and search questions, ask questions, answer questions and provide feedback on questions about the current product. 


### Ratings & Reviews
Ratings and Reviews displays dynamically rendered client reviews and their ratings meta data for the selected product.
  - Server side caching system to reduce number of API requests to two upon page load
  - Star filtration functionality to designed to retrieve reviews of specific star rating
  - Scrollable list of reviews with conditionally rendered subcomponents

Review submission form with validation for client to rate products
  - Validation on client side preventing faulty reviews from being sent to server
  - Dynamically rendered subcomponents specific to product being reviewed

### Built With

* [React](https://reactjs.org/)
* [Node](https://nodejs.dev/)
* [Express](https://expressjs.com/)
* [Babel, Webpack]()
* [Jest, Enzyme, Webpack]()
* [Styled Components](https://styled-components.com/)

## Installation


To get a local copy up and running follow these simple steps:
###### Pre-Installation Requirements
    Node v14.15.1
    NPM v6.14.11
###### Instructions
1. Clone the repo
   ```sh
   git clone https://github.com/lucky89nana/Verde.git
   ```
2. Acquire a github personal access token to acquire access to the API. Insert token into example.config.js and rename file to 
   ```sh
   config.js
   ```
3. Install NPM packages
   ```sh
   npm install
    ```
3. Compile Webpack
   ```sh
   npm run build
    ```
4. Start the server
   ```sh
   npm start
    ```
5. Navigate to 
   ```sh
   localhost:3000
   ```
