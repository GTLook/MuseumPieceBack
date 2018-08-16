# Museum Piece (Backend)

This is the backend of the project.
The front ends can be found at:
* https://github.com/GTLook/MuseumPiece

Museum Piece is a mobile first react applicaiton. It is designed to enhance user experince at museums! It uses image recognition and audio tours to let the users pick their own path through the museum. Users can view art information and listen to the cusomized audio tour. Current gallery is seeded for Van Gouh museum - permenant collection for testing.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```shell
* fork and clone this repository
```

### Installing

A step by step series of examples that tell you how to get a development env running to utilize the postgress db

Install the Node dependencies:

```shell
* run npm install
```

Create the development database:

```shell
* createdb museum_base
```

and run migrations and seeds:

```shell
* npm run knex migrate:latest
* npm run knex seed:run
```

Finally, start the server in developement mode:

```shell
* npm run dev
```

Check that you can GET the `/api/customer/shops` endpoint.  If you receive a 200 from the server your up and running.


## Deployment

This project has been deployed on Heroku at the address: https://dashboard.heroku.com/apps/coffee-base

## Built With

* [JavaScript](https://www.javascript.com/) - The language
* [Materialize](https://materializecss.com/) - The css framework used
* [React](https://reactjs.org/) - Frontend library
* [Redux](https://redux.js.org/) - State container
* [postgreSQL](https://www.postgresql.org/) - database
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [Node](https://nodejs.org/en/) - Package ecosystem


## Contributing

Please send either of the developers a message for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Gavin Look** - *Initial work* - [GTLook](https://github.com/GTLook/)

## License

This project is licensed under the MIT License

## Acknowledgments

* Inspiration
* etc
