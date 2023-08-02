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

## Docker Setup 

If you prefer running the application in a Docker container, follow these steps:

1. Build the Docker image: `docker build -t chrystalio/movie-api:1.0 .`
2. Run the Docker container: `docker run -p 3000:3000 --name movie-api-container chrystalio/movie-api:1.0`
3. Access the API at `http://localhost:3000/`

### Usage

Once the server is running, you can access the API by sending a GET request to the `/` endpoint:

```
http://localhost:3000/
```


By default, the API returns the first 10 movies. You can specify the number of movies to return and the page number using query parameters:
```
http://localhost:3000/?page=1&limit=2
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
    "limit": 3,
    "totalMovies": 174,
    "totalPages": 18
  }
}
```

Also you can filter the data by categories by sending a GET request to the `/category` endpoint:

```
http://localhost:3000/?category=Comedy&limit=3
```
### Example Response

```json
{
    "data": [
        {
            "title": "Pintar Pintar Bodoh",
            "casts": "Warkop",
            "category": "Comedy",
            "director": "Arizal",
            "notes": ""
        },
        {
            "title": "Dongkrak Antik",
            "casts": "Warkop",
            "category": "Comedy",
            "director": "Arizal",
            "notes": ""
        },
        {
            "title": "Maju Kena Mundur Kena",
            "casts": "Warkop",
            "category": "Comedy",
            "director": "Arizal",
            "notes": ""
        },
    ],
    "pagination": {
        "page": 1,
        "limit": 3,
        "totalMovies": 22,
        "totalPages": 3
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

