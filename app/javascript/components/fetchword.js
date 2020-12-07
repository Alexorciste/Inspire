const synonymeScraping = () => {

  
  document.querySelector('#fetch-btn').addEventListener('click', (event) => {
        fetch(`http://localhost:3000/api/v1/synonymes?keyword=${keyWord}`)
        .then((response) => {
    // The API call was successful!
                    return response.json();
            }).then((data) => {
                  // This is the HTML from our response as a text string
                    console.log(data);
                  // Convert the HTML string into a document object
                  // var parser = new DOMParser();
                  // var doc = parser.parseFromString(html, 'text/html');

                  //   // Get the word
                  // var word = doc.querySelectorAll('.field-item');
                  // console.log(word);

            }).catch(function (err) {
                  // There was an error
                  console.warn('Something went wrong.', err);
      });
  })
//   
 

}

export{synonymeScraping}