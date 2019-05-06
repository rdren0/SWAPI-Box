import React from 'react';

const TextScroll = ({crawl}) => {
  return(
      <div id="titles">
        <div id="titlecontent">
        <h1>{crawl.title} </h1>
        <h3>{crawl.release_date} </h3>
        <p>{crawl.opening_crawl}</p>
        </div>
      </div>

    )

}

export default TextScroll;