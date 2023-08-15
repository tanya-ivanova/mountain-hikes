# mountain-hikes

This is educational application with Angular and it is deployed with firebase hosting here: 
https://mountain-hikes.web.app.

The App uses express.js server (github: https://github.com/tanya-ivanova/api-server) and online Atlas MongoDB database. The server is deployed on Render (https://api-express-server.onrender.com).

Please note that when you try to access the deployed App on https://mountain-hikes.web.app, it will take some time for the content to render because the server on Render needs some time to start working.

# Home page

The Home page is static, it does not contain dynamic content. It is accessible by both registered/logged in and not registered/logged in users. 

Here you can see the description of the App.

In the header there are links. Clicking on the site heading Our Summits will lead you to the Home page. Clicking on Register or Login, will let you register or login into the App. The link to All hikes will take you to a list of all posted hikes with brief information for every hike.

# Register page

The Register page is accessible only by not registered/logged in users. 

You can register in the App so you can use the full functionality of the site. You can register with valid email (example@gmail.com) and a password which is at least 5 characters long. You need to repeat the password and then the Register button becomes clickable. 

There is validation of the fields in the Register form and if you don't pass the validation you will receive error messages which will guide you what corrections are needed. If some validation is not passed the Register button will stay disabled and you will not be able to register. 

If you already have an account, you can go to the Login page via the link at the end of the Register form.

# Login page

The Login page is accessible only by not registered/logged in users. You can login with the e-mail and the password you used to register in the App. 

There is validation of the fields in the Login form and if you don't pass the validation you will receive error messages which will guide you what corrections are needed. If some validation is not passed the Login button will stay disabled and you will not be able to login. If all validation is passed, the Login button becomes clickable and you can go ahead and login. 

If you don't have an account, you can go to the Register page via the link at the end of the Login form.

# All hikes page

All hikes page is accessible by both registered/logged in and not registered/logged in users. 

The All hikes page contains a paginated list of all posted hikes sorted by the creation date. Each listed post is in the form of a card and contains brief information about the hike - image form the hike, summit name, mountain name, country, duration of the hike, who posted it, how long ago it was posted, the likes the post has. 

Clicking on the post card will lead you to the Details page for that hike. 

For the pagination - you can switch between the pages with the Prev and Next buttons; when you have reached the last page, the Next button will become disabled; when you have reached the first page, the Prev button will become disabled.

# Details page

Details page is accessible by both registered/logged in and not registered/logged in users but it's full functionality (like the post, edit, delete, add comment, view the picture gallery) is accessible only by logged in users. 

The Details page shows the weather in the region of the peak - the current weather and 3-day forecast is given. The weather data is taken from https://www.weatherapi.com/. In order to display the weather, latitude and longitude coordinates are needed and these are provided by the user when he/she creates the post. 

The Details page also contains detailed information about the hike. There is one image from the hike (the first image the user uploaded when creating the post). If you are a logged in user, under this image you will see a button View Gallery which will lead you to a page where you can view all the images for the given hike uploaded by the user who created the post. 

On the right side of the image you can see the details for the hike: summit name, mountain name, country, duration of the hike, coordinates, who posted it, how long ago it was posted, the likes the post has, description of the hike. 

If you are a logged in user, from the Details page you will be able to like the post (there is a Like button). Once you like the post you will get a message that you already liked the post and you will not be able to like the post again. 

Also if you are a logged in user, you will be able to add comments for the given post. The comments are listed below the details for the hike. 

If you are logged in user and you are the one who posted a certain hike (the owner), you will be able to view the gallery and to edit and delete this hike, but you will not be able to like it and add comments for it. When you click the Edit button you will be able to change the peak name, the mountain, the country, the duration, the coordinates (latitude and longitude) and the description. Then you can save your changes and you will be taken to the Details page again where you can view the changes you made. Or you have the option to Cancel and the changes will not be saved and again you will be taken to the Details page. When you click on the Delete button you will be asked if you are sure that you want to delete the given post. You can confirm or cancel.

# My hikes page

This page is accessible only for registered/logged in users and it contains a paginated list of the hikes that were posted by a given user.

# Post page

This page is accessible only for registered/logged in users. 

You can post a hike by providing the following information: peak name, mountain, country, duration, coordinates (latitude and longitude), description, at least one photo from the hike (the first image you upload will be used as a cover image for the post).

# Search page

This page is accessible only for registered/logged in users.

You can search by peak name and partial matches will also be returned in the search result. If there are no results from the search, you will get a message.

# Logout

Once you are logged in, you will be able to logout by clicking on the Logout button in the header. Also you will be automatically logout after a certain amount of time, therefore you will need to login again if you still want to use the App.
