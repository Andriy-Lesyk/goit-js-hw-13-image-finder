

export default function apiService(search, page) {
   return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${page}&per_page=12&key=21707724-2b7deb0a4d70adf1ddfb2e956`)
.then(response=>{
      return response.json()
      })
   }
