const postHandler = {}

postHandler.getAllPost = (req,res) => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    fetch(apiUrl)
    .then(response =>{
        if (!response) {
            throw new Error(`http error! status : ${response.status}`)
        }
        return response.json();
    })
    .then(data => {
        res.end(JSON.stringify(data));
    });
}


module.exports = postHandler