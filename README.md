# **Derp-Cues**

_A single page web app_<br><br>

## **Description**
Derp- Cues is a React web app built to make role play combat and sparring easier for members of The Divine Conclave guild active in The Elder Scrolls Online.

Users can enter values for their character stats and abilities, choose a target and an attack skill, and easily copy a properly formatted line of text to their clipboard which can be pasted into the in-game chat window during RP battle.

<img width="1439" alt="Screen Shot 2022-11-10 at 9 04 49 PM" src="https://user-images.githubusercontent.com/51179862/201249384-1bac0944-6697-429c-a2f0-df5c031c4a9c.png">

## **Table of Contents**

- <a href='#user-story'>User Story</a>
- <a href="#installation">Installation</a>
- <a href="#usage">Usage</a>
- <a href="#deployed-application">Deployed Application</a>
- <a href="#contributors">Contributors</a>
- <a href="#future-work">Future Work</a>

## **User Story**

As a player engaged in RP battle
I want to be able to quickly enter my chracter's stats, skills, and abilities as properly formatted text into the Elder Scrolls Online chat window
so less time is spent configuring my text entry and I can focus on my strategy and RP.

## **Installation**

- Clone the GitHub repository to your computer
- In terminal navigate to the cloned directory
- Type "npm i" in the command line to install dependencies
- Type "npm start" in the command line to launch the application
- If a web browser does not automatically open with the app, open a web browser of your choice and navigate to http://localhost:3000/

### **Tools and Required Packages**

- React
- Styled-Components
- React-Icons

## **Usage**

- Use the number entry, drop down, text entry fields, and check boxes to build your text string. You can view your text at the bottom of the application.
- Click the 'Copy to Clipboard' button in the lower right hand corner of the app to copy your text to your computer's clipboard.
- Paste your text into the chat window in your active Elder Scrolls Online session

## **Deployed Application**

https://mlmcgeenc.github.io/derp-cues/

## **Contributors**

Grab a ticket and become this project's first contributor!

### **Authors**

<a href="https://github.com/mlmcgeenc" target="_blank">Matt McGee | GitHub Profile</a><br>

## **Future Work**
- Move current state and event handlers to useContext or Redux for global state management
- Add the ability for users to modify the drop down lists for Mundus Effect, Attacks, and Holy Items
- Add the ability for users to modify the Passive Abilities list
- Automatically calculate attack and defense values from a base stat and user selections
- Make user changes persistent 
- Convert app to PWA that can be downloaded locally
