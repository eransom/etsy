

function getData(data) {
      if (data.ok) {
          console.log("data")
        } else {
            alert(data.error);
      }
}


// function getListing (response) {
//   let results = response['data']
//   console.log('This list contains  ', results['month'], results['day'], ', ', results['year'])
