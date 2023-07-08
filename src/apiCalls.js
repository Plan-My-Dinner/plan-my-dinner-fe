const fetchSingleRandomRecipe = async () => {
    return await fetch (`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(response => response.json())
    .catch(error => console.log(error))
}

export { fetchSingleRandomRecipe }