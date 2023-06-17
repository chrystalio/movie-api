const Hapi = require('hapi');
const axios = require('axios');
const cheerio = require('cheerio');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const DEFAULT_LIMIT = 10;
const DEFAULT_PAGE = 1;

server.route({
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
        const { page = DEFAULT_PAGE, limit = DEFAULT_LIMIT } = request.query;
        const response = await axios.get('https://en.wikipedia.org/wiki/List_of_Indonesian_films');
        const $ = cheerio.load(response.data);
        const movies = [];

        $('table.wikitable tr').each((i, elem) => {
            const title = $(elem).find('td:nth-of-type(1)').text().trim();
            const casts = $(elem).find('td:nth-of-type(3)').text().trim();
            const category = $(elem).find('td:nth-of-type(4)').text().trim();
            const director = $(elem).find('td:nth-of-type(2)').text().trim();
            const notes = $(elem).find('td:nth-of-type(5)').text().trim();


            if (title && casts && category && director) {
                movies.push({ title, casts, category, director, notes });
            }
        });

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedMovies = movies.slice(startIndex, endIndex);

        return {
            data: paginatedMovies,
            pagination: {
                page,
                limit,
                totalMovies: movies.length,
                totalPages: Math.ceil(movies.length / limit)
            }
        };
    }
});

// Add the catch-all route
server.route({
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
        return h.response('Not Found').code(404);
    }
});

async function startServer() {
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
}

startServer();