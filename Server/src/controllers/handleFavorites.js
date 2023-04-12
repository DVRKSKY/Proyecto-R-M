
let myFavorites = []
const postFav = (req, res) => {
   myFavorites.push(req.body)
   res.json(myFavorites)
}
// controllers/handleFavorites.js

// ...


function deleteFav(req, res) {
  const id = parseInt(req.params.id);
  myFavorites = myFavorites.filter((fav) => fav.id !== id);
  res.json(myFavorites);
}
module.exports = { postFav, deleteFav };


module.exports = {
    postFav,
    deleteFav
}