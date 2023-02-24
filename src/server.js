const Hapi = require('hapi');
const axios = require('axios');
const cheerio = require('cheerio');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/movies',
    handler: async (request, h) => {
        const response = await axios.get('https://en.wikipedia.org/wiki/List_of_Indonesian_films');
        const $ = cheerio.load(response.data);
        const movies = [];

        $('table.wikitable tr').each((i, elem) => {
            const title = $(elem).find('td:nth-of-type(1)').text().trim();
            const casts = $(elem).find('td:nth-of-type(3)').text().trim();
            const category = $(elem).find('td:nth-of-type(4)').text().trim();
            const director = $(elem).find('td:nth-of-type(2)').text().trim();

            if (title && casts && category && director) {
                movies.push({ title, casts, category, director });
            }
        });

        return movies;
    }
});

async function startServer() {
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
}

startServer();
