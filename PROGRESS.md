### Project Journal
- new feature
  - DASHBOARD
    - add page 1 to XX in result
    - add view 50 / 100 result (DESKTOP ONLY)
    - add button to show 10 most search specific menu
  
  - FAVORITE
    - add delete from favorite
    - add button to display 10 favorite menu

  - ~PROFILE~
    - add delete account (Hard delete)

- bugs
  - LOGIN/SIGN UP
    - user cannot login automatically when user open two tabs, one tab already login but when user open url in second tab, system still requst user to login
    - user cant use enter button for altenative click login button
    - user open and login in two tab, if user log out in first tab, then when user logout in second tab, it will display error page
    - user open two tab, user login in first tab using username A1, when user login is second tab using username B2, then profile in first tab change to B2

  - DASHBOARD
    - user can not use enter after type "anything" in search bar
    - there is no waiting text for waiting menu api
    - there is no mark/button/text to show that this menu alreadt favorited
      - find a way to display it efficiently
    - there are html tag in detail in some pasta keyword detail modal
    - there are duplicate ingredient from API in detail modal
    - add text ingredient and instructions in detail modal
    - in text "result from ..., eventhough the result only show 1 menu, the text display 10 from 1,
    it also display 10 from 0 for 0 data result
    - add validation so user can not search "empty text" keyword in sarch bar
    - add margin/padding right to text result
    - there are some condition there is no instruction in modal detail in some menu

  - FAVORITE
    - there are some bugs in detail modal but it already in dashbaord bugs
    - add "are" after "there" in empty favorite
 
  - PROFILE
    - fix update button color
    - add "enter" action instead of click update when user what to update profile
    - add padding top

---
##### Day 13
- add login as guest in FE and update API BE to handle it

##### Day 12
- work on new feature
  - ~add delete account~
    - when user delete account, system automatically logout
  - dashbboard
    - add page 1 to XX in result
      - Make a custom or take from library?
        - because we use data from third library, it will be more simple if we just create a custom API from scratch, so we dont need to dig information how to implement library with this API
  - try to learn more about this https://www.educative.io/answers/how-to-implement-pagination-in-reactjs

##### Day 11
- work on new feature
 - add delete account
   - ~add modal~
   - ~add button delete~
   - ~add delete API in backend~
   - when user delete account, system automatically logout
   - ~add modal please wait, data is being deleted~

##### Day 10
- ~responsive dashboard~
  - update style menu
  - fix navbar on page mark
- ~responsive favorite page~
  - fix title favorite
  - fix card position
- analysis bugs and needed new feature

issue and solution
- 


##### Day 9
- ~login/sign page~
  - fix button style
  - make page responsive for desktop and phone
- ~fix style in general related to btn class~
- ~fix double favorite~
- ~add loading icon in pop up deatil recipe~
- ~fix when search keyword outside pasta~
- ~fix different modal content for detail pasta in favorite~
- ~add string do general resource~
- ~fix position card in dashboard to be like row~
- responsive dashboard
  - update style menu

issue and solution
- 

#### Day 8
- ~implement "click button favorite" in frontend~
  - update style favorite
  - when user click favorite, system automatically add recipre to favorite
  - when system succesfully add recipe to DB, a simple modal appear
   
#### Day 7
- ~check best way to implement detail recipe in frontend~
  - use modal
  - modal appear in home and favorite page
- ~add soma style to profile~
  - update position
  - add new title for profile
  - set color #e9ebe8
- check what things need update to implement favorite
  - when user click favorite then sistem write to DB if favorite already or not exist in DB. my planning to add remove favorite when clicked when the recipe already in favorite but this will be implemented later.
  - add modal that contain message "the recipe" got favorited.
  - update style of favorite page, when there are no any favorite then it show "there no favorite recipe yet"

issue and solution
- should make modal or new page when user click detail?
  - use modal because it only display data about ingredient and instruction. if maybe in the future I add some information in detail then it preferable to just make a new page

#### Day 6
- ~implement recipe detail in BACKEND~
  - create new API
  - using this https://api.spoonacular.com/recipes/1003464/information?apiKey= because this endpoint API contain ingredient and instruction in one response
- check best way to implement detail recipe in frontend

issue and solution
- how to make API that suited with simple ingredient response?
  - save API RECIPE as list then add it to DICT
- using recipe detail API, should backend process it to return simple JSON or just send it directly to frontend?
  - let backend process it first because in front that response will easily process than directly send API detail recipe to frontend and also only send data that needed by frontend
- should make modal or new page when user click detail?
  -  

#### Day 5
- ~create working dashboard~
  - add search bar
  - display search result
    - only display image with title and button LOVE (not working) "favorite"
- ~make a working profile~
  - make API for profile
  - make frontend to handle profile
- ~make backend favorite~
  - make table for this case
  - make API for get and set favorite
- ~make frontend to handle favorite~
  - display favorite recipe user using card style
  - check what api from recipe to this favorite case
    - this case using same API URL add url detail in home
  - check how to implement favorite case using API recipe
    - to avoid multiple request to same API, i add two additional colom so its just need request only when user need detail about recipe
- check how to implement recipe detail
  - backend : combine this API response:
    - https://api.spoonacular.com/recipes/654959/ingredientWidget.json
    - https://api.spoonacular.com/recipes/654959/analyzedInstructions
  - frontend : 

issue and solution:
- can not get value from usestate although there is value from that const?
  - simply i forget to implement that usestate
- can not serialize favorite without using data user_id in request
  - simply use "user":user_id instead of User:user
- error when get data from favorite
  - simple i use same name for class name and model name, when i change model name, its solved
- should i use multiple request recipe id data for each favorite or just save small data in system DB then display it to user?
  - to avoid multiple request to API RECIPE, i add title and image URL colom to model Favorite. So, when user open page favorite, system only request detail recipe to API RECIPE
- url field from image url for django model?
  - use URLField() in model

#### Day 4
- ~update dashboard style and update navbar~

issue and solution:
- 

#### Day 3
- ~create base frontend~
  - create pages with auth/autho 
  - create dummy modal detail recipe
  - create dummy profile page
  - create login page
  - create dummy dashboard/home page, the search bar is here
  - create save page, this will display all recipe that saved/favorited by user
- ~improve the appearance of the login/signUp page~
- ~add and fix issue when user incorrecty input username/password in login/sign up~

issue and solution:
- None

#### Day 2
- ~make dummy response API~
  - to make sure little unnesisary request when update code frontend
- ~learn doc API from spoonacular~
  - make sure how recipe data is from API
  - make sure what thing can be search through API

issue and solution:
- why using import X2, X3?
  - I use "from CC, import X2, X3" instead of "from CC import *" because I want to differentiate this variable from other imported variables

#### Day 1
- create base backend
  - ~create Token authe/autho~
  - create list of backend API
    - API get and set user profile
    - API search recipe
    - API save favorite and get favorite
  - ~test spoonacular API in backend~
  - ~create project and app django~
- learn doc API from spoonacular
- ~understand the project requirement~

issue and solution:
- 
