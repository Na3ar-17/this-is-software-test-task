Test task

OVERVIEW
The application should be created as following:

- the application is supposed to view and save user information.
- use React or Next.js for the FE
- data should be fetched from an API (details provided below). Moreover, according to the fetched data (user location), the current weather for the user should be shown.

SPECIFICATIONS
You should build an application that fetches user data and shows the weather according to user location.
First route must show the fetched random users in a card view:

1. User details

- Name
- Gender
- Profile image
- Location
- Email

2. Weather

- Icon (Sunny, Cloudy, etc.)
- Temperature (Current, Lowest and Highest for the current date)

3. Each user card should have a Save and Weather buttons:

- save - saves details to the browser localStorage
- weather - shows weather details for the user location in a modal

4. should be a way to load more users

Users API - https://randomuser.me/api/
Weather API:

- example API call - https://api.open-meteo.com/v1/forecast?latitude=-19.7962&longitude=178.2180&current_weather=true&hourly=temperature_2m
- documentation - https://open-meteo.com/en/docs

Second route - a list of saved users information. Cards should look and feel similar as at the first route (w/o Save button).

REQUIREMENTS

- Should look good on desktop/tablet/mobile devices, design is up to you;
- You can use for styling anything you like (TailwindCSS, MUI, Ant etc);
- No authentication is needed;
- Code should be production ready, clean and readable;
- The app has to work and look nice. One of two is not enough to consider the task as done.

BONUS POINTS

- Update current temperature periodically (every 5 minutes);
- Show user location on a map;
- Show user profile image on the map;
- Show hourly weather.

DELIVER

- GitHub repo link;
- A link to the deployed application;
- Please let me know if you implemented any bonus points so that I checked that as well.

IMPORTANT NOTE
Please be reasonable about your time. First implement ”happy flow” and only then Bonus Points.
