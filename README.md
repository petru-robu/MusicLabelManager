# MusicLabelManager
Website for managing labels, producers, artists and music.

## Project Requirements
- [X] The project will use a MySQL database and will be programmed in PHP. 
- [ ] Through the application, deletion, adding, reading operations will be performed on the database.
- [ ] There will be a user login/registration page.
- [ ] There will be several categories of users. Each category will have certain specific actions.
- [ ] The app will contain several dynamic pages with links to each other. 
- [ ] There will be the possibility of generating and viewing reports (not just HTML/PHP/CSV).
- [ ] Website analytics: visitors, hits, etc. 
- [ ] Contact form with the possibility to send emails.
- [ ] Integration of information (not just pages, elements of them – parsing content) from external sources.
- [ ] End of the session.

## Development
- For dev build with:
`sudo docker compose up -d --build`

- For production build with:
`sudo docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build`