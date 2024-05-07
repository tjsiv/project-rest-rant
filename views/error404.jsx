const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="/images/er40.png" alt="error code 404" />
                
          </main>
      </Def>
    )
  }
  

module.exports = error404
