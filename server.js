const express = require('express');
const path = require('path');
const app = express();
const sequelize = require('./config/connection.js');
const routes = require('./controllers/index.js');
const exphbs = require('express-handlebars');
const session = require('express-session');
require ("dotenv").config();

const PORT = process.env.PORT || 3001;

// setting up express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create();

// express session config
const sess = {
  secret: process.env.SC_KEY,
  cookie: {},
  resave: false,
  saveUninitialized: true
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
});
