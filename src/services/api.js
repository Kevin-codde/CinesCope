//Mostrar catalogo populares en menu principal
const dataMovie = async function (){
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Yzc3Y2RmYzRiZTUxZjk0YzBjZmI1MTg5MDk3ODNmZSIsIm5iZiI6MTcxNjI0NDkzNC42OTkwMDAxLCJzdWIiOiI2NjRiZDFjNjIzMTk2NjlkOWM5MmJiYjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WkKeFw98BjBjBvRB1iajRjX1nzZl0owAFxeyp_JLqSM'
  }
};
  try{
    const peticion = await fetch('https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1', options)
    const data = await peticion.json();
    return data.results;
  }
  catch(e){
      console.log('Error',e)
  }

  

}


const search = async function(movie){
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Yzc3Y2RmYzRiZTUxZjk0YzBjZmI1MTg5MDk3ODNmZSIsIm5iZiI6MTcxNjI0NDkzNC42OTkwMDAxLCJzdWIiOiI2NjRiZDFjNjIzMTk2NjlkOWM5MmJiYjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WkKeFw98BjBjBvRB1iajRjX1nzZl0owAFxeyp_JLqSM'
    }
  };

  try{
    const peticion = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=es-ES&page=1`, options)
    const result = await peticion.json();
    return result.results;
    
  }catch(e){
    console.log('Error encontrado: ',e)
  }

  
  
}



export { dataMovie,search};