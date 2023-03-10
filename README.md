# ink hntr dnvr

### Abstract - what I did
As a resident of Denver, I am well aware of the abundance of talent in the local tattoo scene. Whether you're new to the city, searching for a new artist, or getting your first tattoo, the process of finding the right artist can feel overwhelming. Even recommending an artist to someone can be daunting. That's where our app comes in. Using keywords, users can sort through top-tier tattoo artists in the Denver area, all of whom work at shops with over 4.5 star Google ratings. Users can click on an artist's name to access their shop information, Instagram link, and a small collection of their work directly on the site.

### Context:
This was a solo project where I successfully developed and deployed a fully functional application in just five days, including the implementation of a custom backend API. Achieved this despite having no prior experience with API development, through self-study and dedication to learning. Ensured an excellent user experience by creating a responsive design that works seamlessly on multiple devices, including tablets, phones, and computers.

### Deployment Site
1. Go to [API repo] (https://github.com/cieragrace/ink-hntr-api)
2. Click on 'code' and copy SSH key
3. In terminal go to desired directory and run git clone + ssh key
4. CD into the api directory and npm start and you have access to the API
5. Then open site at https://ink-hntr-dnvr.herokuapp.com/

### Preview of the App

![Preview](https://user-images.githubusercontent.com/113853138/222991761-f8a9eeec-c4ba-4956-b7df-76cfd4ee8439.png)


### Installation Instructions
1. Go to [this repo] ('https://github.com/cieragrace/ink-hntr-dnvr') on Github
2. Click "Fork", then 'Create New Fork'
3. Click 'Code' and copy the SSH url provided by Github
4. In your terminal, navigate to the new project repository
5. Go into desired parent folder and type 'git clone' and paste the ssh url you copied
6. Cd into the repo directory and open in text editor
7. In terminal when in correct repo run 'npm install', 'npm start', then go to "http://localhost:3000/" in your browser
8. You will also need to clone down the API server. Go to [API repo] (https://github.com/cieragrace/ink-hntr-api) 
9. Clone into project directory, do not nest
10. Once cloned, npm install and then npm start and you will be able to access the data set


 ### Learning Goals:
-Gain competency with React fundamentals
-Learn how to test React components & asynchronous JS
-Practice refactoring
-Create a multi-page UX using Router
-Self teach and implement express.js BE
-Implementing PropTypes
-Clean and clear error handling

### Technologies Used:
-JavaScript
-React.js
-CSS
-GitHub
-GitHub projects
-Cypress
-Router
-Express
-HTML
-PropTypes
-Heroku
-Postman

### Future Features
1. Add favoriting feature. Favorite button on artist page that will add artist card to favorites component
2. Update API to have profile photo for home page artist cards 
3. Update API to have shop address
4. Use google maps react API to link to shop address, create Links on address to take to map view
5. Beef up the data base, 30 artists was just for this MVP

### Wins

1. Scraping data and building my own API and seeing the data come through the browser and in Postman was so satisfying
2. In 5 days I feel like I was able to get 80% of my vision to come to life
3. One of the firs people I walked through my app actually used it and saved an artists data, I already have had a user

### Challenges

1. Hit a major time blocker pulling images from the BE data base due to saving img paths over URLs
2. Did not get all of the functionality I had planned in the 5 days
3. Not getting progile images to work was a big miss on my project. Did not plan out the API deep enough for that and they will not pull from the current images.
