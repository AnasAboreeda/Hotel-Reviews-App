import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import Reviews from './modules/Reviews';
import Averages from './modules/Averages';

const app = express();

app.set('port', (process.env.PORT || 4567));

app.use('/', express.static(path.join(__dirname, 'docs/')));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next();
});

app.use(morgan('dev'));
app.use(cors());

/**
 * Title : Get Reviews.
 * URL : /api/reviews
 * Method : GET
 * URL Params :  Optional: page:[number], traveledWith:[string], sort: [string]
 * Response Codes: Success (200 OK), Server Error (500)
 * */
app.get('/api/reviews', (req, res) => {
  const params = req.query;
  const sort = params && params.sort ? params.sort : undefined;
  const traveledWith = params && params.traveledWith ? params.traveledWith : undefined;
  const page = params && params.page ? params.page : 1;
  const reviews = new Reviews(sort, traveledWith);
  const { pageReviews, lastPage, currentPage } = reviews.getPage(page);

  res.setHeader('Cache-Control', 'no-cache');
  res.json({
    currentPage, lastPage, reviews: pageReviews, sort, traveledWith,
  });
});

/**
 * Title : Get Averages.
 * URL : /api/averages
 * Method : GET
 * URL Params :  Optional: traveledWith:[string]
 * Response Codes: Success (200 OK), Server Error (500)
 * */
app.get('/api/averages', (req, res) => {
  const params = req.query;
  const travelledWith = params && params.traveledWith ? params.traveledWith : undefined;

  const { reviews } = new Reviews();
  const average = new Averages(reviews, travelledWith).averages;
  res.setHeader('Cache-Control', 'no-cache');
  res.json(average);
});

app.listen(app.get('port'), () => {
  console.log(`Server started: http://localhost:${app.get('port')}/`);
});
