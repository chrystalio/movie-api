# Indonesian Movie Scraper API

A REST API that scrapes data from Wikipedia's list of Indonesian films and provides movie information such as title, cast, category, and director.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository: `git clone https://github.com/chrystalio/movie-api.git`
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`

### Usage

Once the server is running, you can access the API by sending a GET request to the `/movies` endpoint:

```
http://localhost:3000/movies
```


By default, the API returns the first 10 movies. You can specify the number of movies to return and the page number using query parameters:
```
http://localhost:3000/movies?page=2&limit=10
```


### Example Response

```json
{
  "data": [
    {
      "title": "Habibie & Ainun",
      "casts": "Reza Rahadian, Bunga Citra Lestari",
      "category": "Drama",
      "director": "Faozan Rizal"
    },
    {
      "title": "Cinta Brontosaurus",
      "casts": "Raditya Dika, Eriska Rein, Soleh Solihun",
      "category": "Comedy drama",
      "director": "Fajar Nugros"
    },
  ],
  "pagination": {
    "page": "1",
    "limit": 10,
    "totalMovies": 174,
    "totalPages": 18
  }
}
```

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request.


## Acknowledgments

This project is made possible with the help of the following libraries:

- [cheerio](https://github.com/cheeriojs/cheerio) - for scraping HTML content
- [axios](https://github.com/axios/axios) - for making HTTP requests
- [Hapi](https://github.com/hapijs/hapi) - for building the API server

