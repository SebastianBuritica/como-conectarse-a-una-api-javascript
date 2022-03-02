const cargarPeliculas = async() => {
   try {		
	const respuesta = await fetch('https://api.themoviedb.org/3/movie/550?api_key=2e76e7188abbdd2c393393fb6b0eee9a')

  console.log(respuesta)

	// Si la respuesta es correcta
	if(respuesta.status === 200){
		const datos = await respuesta.json()
		console.log(datos)
	}

 } catch(error){
	console.log(error)
 }

}

cargarPeliculas();