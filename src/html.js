import React from 'react'

let styles
if (process.env.NODE_ENV === 'production') {
  try {
    styles = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

const Html = ({ headComponents, body, postBodyComponents }) => (
  <html>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no' />
      { headComponents }
      { process.env.NODE_ENV === 'production'
        ? <style
          id='gatsby-inlined-css'
          dangerouslySetInnerHTML={{ __html: styles }}
        />
        : null
      }
    </head>
    <body>
      <div id='___gatsby' dangerouslySetInnerHTML={{ __html: body }} />
      { postBodyComponents }
    </body>
  </html>
)

return Html
