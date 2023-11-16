const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
var methodOverride = require('method-override');
const route = require('./routes');
const db = require('./config/db');

db.connect();

const app = express();
const port = 3000;

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers: {
      inc: function (value, options) {
        return parseInt(value) + 1;
      },
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
