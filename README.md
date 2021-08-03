App Features

Users :
Create a user account
Login with user account

User Features:

The user can create individual flashcards
The user can flip the flashcard upon click of a button
Each flashcard can be updated and deleted

The user can create  flashcard sets
Each flashcard set can be updated and deleted. When user deletes a set, it deletes all flashcards within
The use can then enter into flashcard set and create flashcards within that set.
Flashcards within set can be updated and deleted.


Flashcard App Summary Front End

Sign-in, Sign- up and Browsing

-The app is divided into pages that have url endpoints. It uses react-router-dom to be able to browse through the pages. There is the sign-up, sign-in, the home page where you can choose to take you to the next page which is either to your create cards or create a set of flashcards. 

-The user can  sign up at the home page. The sign-up process requires an email and password which needs to be confirmed by user. Upon sign-up, the user is stored in the database and then a token is created that is used to authenticate and is unique to the user. Once signed in the user token remains until logout. Upon sign-in, the user will be directed to the dashboard where user interaction begins with the app and the user can begin creating flashcards by clicking ‘create’.

The sign-in process compares users that have previously sign-up. All this process takes place on the server side. It is all encrypted through bcryptjs. The session is checked through the validateSession portion of the backend.  Upon sign-in, the user is taken to the dashboard where he begins navigating the app.

The Cards:

Once the user reaches the cards, he sees the display to be able to create flash cards. The displays takes two inputs. One for word and the other for definition. Once the user fills the information, he can create the cards upon click of create button. The cards are then shown and they are able to flip between word and definition. The user also has the option to update or delete the cards. The update brings up values within the ‘Create Flashcard Display’ for editing of the card in real time.  All the changes of inputs are done through the user create, update, flashcard endpoints on the backend.

The user also has the option to create card decks. Most of the layout for this part is similar to the regular cards except that now you can create card decks with name and inside the deck, you can create your cards. Those cards will be called by the set endpoints where you can recall all the cards in your deckName by Id. 


   
