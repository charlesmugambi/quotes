# Charles' Quotes

## Description
An interactive application that allows users to create quotes. Other users can like or dislike a quote depending on whether the quote is terrible or inspirational.


## Features
A user should be able to;
1. Create a new quote.
2. dislike or like a quote.
3. Delete a quote
4. See the number of upvotes and number of downvotes for each quote.

## BDD
| BEHAVIOUR                            | INPUT EXAMPLE                           | OUTPUT EXAMPLES       |
|--------------------------------------|:------------------------------------:|--------------------------|
|A user leaves the text area empty | Nothing is inputted | Nothing is displayed |
| A user wants to add a new quote | Author name, quote, publish date and their name | The app saves the details and the number of quotes increases by 1|
|A user wants to delete a quote | Click the delete button | The number of quotes decreases by 1 |
|A user upvotes a quote | Click upvote button | Number of upvotes on that quote increase by 1 |
|A user downvotes a quote | Click downvote button | Number of downvotes on that quote increase by 1 |
|A user wants to view additional quote details | Click Quote Details button | Toggle effect kicks in and additional details are displayed |
    
## Setup instructions
    Install Nodejs and angular using npm in the terminal
    From Git Hub,clone this repository
    Change directory to quotes-IP by running the command $cd quotes-IP
    Open the application by running $ng serve --o
    Type and save your favorite quote(s)
    If opened on an editor, the app will automatically reload if you change any of the source files.

## Technologies 
`HTML5`, `CSS`, `JavaScript`, `Bootstrap`, `Typescript`, `Angular CLI`, 

## Known Bugs
No known bugs at the moment

### Author(s) information
Charles Mugambi Micheni
### License
MIT
Copyright (c)2020 **Charles Mugambi**