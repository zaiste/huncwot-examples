const Huncwot = require('huncwot');
const nunjucks = require('nunjucks');

const app = new Huncwot();

nunjucks.configure('views', { autoescape: true });

app.get('/bim', context => {
  return nunjucks.render('index.html', { username: 'Zaiste' })
})

app.listen(3000);
