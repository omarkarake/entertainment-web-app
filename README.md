# EntertainmentWebApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

# hoseted link: https://entertainment-web-app-kappa-five.vercel.app/

## Project Objective

The objective of this project is to build a multi-page entertainment web application that closely matches the provided design. The application should be responsive, user-friendly, and provide a seamless experience across different devices.

## Customer Requirements

Users should be able to:

1. View the optimal layout for the app depending on their device's screen size.
2. See hover states for all interactive elements on the page.
3. Navigate between Home, Movies, TV Series, and Bookmarked Shows pages.
4. Add/Remove bookmarks from all movies and TV series.
5. Search for relevant shows on all pages.
6. Register with a valid email address and password.
7. Log in to their account after registration.

## User Story Acceptance Criteria

1. Responsive Design

   - The app should display a responsive design that adjusts the layout based on the user's screen size.
   - The app should display a mobile-friendly layout on smaller screens.
   - The navigation menu should be fixed to the left for larger screens.

2. Hover States

   - All interactive elements (such as buttons and links) should display a hover state when the user hovers over them with their mouse.

3. Navigation

   - Users should be able to navigate between Home, Movies, TV Series, and Bookmarked Shows pages by clicking on their respective links in the interface.
   - Home: The trending section should scroll sideways to reveal other trending shows. Any search input should search through all shows (i.e., all movies and TV series).
   - Movies: This page should only display shows with the "Movie" category. Any search input should search through all movies.
   - TV Series: This page should only display shows with the "TV Series" category. Any search input should search through all TV series.
   - Bookmarked Shows: This page should display all bookmarked shows from both categories. Any search input should search through all bookmarked shows.

4. Bookmarks

   - Users should be able to add a movie or TV series to their bookmarks by clicking on a "Bookmark" button associated with the respective show.
   - Users should be able to remove a movie or TV series from their bookmarks by clicking on a "Remove Bookmark" button associated with the respective show.

5. Search

   - Users should be able to search for relevant movies or TV series by entering a search query in a search bar provided in the interface.
   - The search results should include all movies or TV series that match the user's search query.

6. Registration

   - Users should be able to visit the app URL and access the registration page.
   - Users should be able to enter a valid email address and password in the registration form.
   - If the user tries to submit the registration form with invalid data, form validation should notify the user of the error.

7. Login
   - Users should be able to log in to their account after registering with a valid email address and password.
   - When a user enters a registered email address and their password used in registering, they should see a prompt which tells them that their login was successful.
   - If the user tries to log in with invalid credentials, they should receive an error message notifying them of the invalid login attempt.

## Tech Stack

- Frontend: TypeScript, Angular
- State Management: NgRx
- Styling: Tailwind CSS
- Testing: Jest
- Other Libraries: ngx-toastr, uuid

## Installation

1. Clone the repository:
   git clone https://github.com/omarkarake/entertainment-web-app
   cd entertainment-web-app

2. Install dependencies:
   npm install

3. Start the development server:
   npm start

## Scripts:

npm start: Start the development server.
npm build: Build the application for production.
npm test: Run unit tests using Jest.
npm test:watch: Run unit tests in watch mode.
npm test:coverage: Run unit tests and generate a coverage report.

## Folder structure:

entertainment-web-app/
├── src/
│ ├── app/
│ │ ├── components/
│ │ ├── models/
│ │ ├── services/
│ │ ├── store/
│ │ │ ├── actions/
│ │ │ ├── effects/
│ │ │ ├── reducers/
│ │ │ ├── selectors/
│ │ ├── app.module.ts
│ │ ├── app.component.ts
│ │ ├── app.component.html
│ │ ├── app.component.css
│ ├── assets/
│ ├── environments/
│ ├── index.html
│ ├── main.ts
│ ├── styles.css
├── [package.json]
├── [README.md]

## Automated Tests

The project includes automated unit and integration tests using Jest. To run the tests, use the following commands:

npm test: Run all tests.
npm test:watch: Run tests in watch mode.
npm test:coverage: Run tests and generate a coverage report.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please read the CONTRIBUTING guidelines before submitting a pull request.
