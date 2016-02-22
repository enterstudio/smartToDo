import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RoutingContext} from 'react-router';
import createLocation from 'history/lib/createLocation';

module.exports = function(app) {

  const routes = {
    path: '/',
    component: require('./../../app/components/core/Template'),
    indexRoute: {
      component: require('./../../app/components/core/Home')
    },
    childRoutes: [
      {
       path: '/hello',
       component: require('./../../app/components/core/HelloWorld')
     }
    ]
  };

  app.use((req, res, next) => {
    const location = createLocation(req.path);

    // Note that req.url here should be the full URL path from
    // the original request, including the query string.
    match({
      routes,
      location
    }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        // renderWithData(req,res, renderProps);
        var generated = renderToString(< RoutingContext {
          ...renderProps
        } />);
        res.render('./../app/index.ejs', {reactOutput: generated});

      } else {
        next();
      }
    })
  })
}
