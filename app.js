const cargarPeliculas = async() => {
   try {		
	const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=2e76e7188abbdd2c393393fb6b0eee9a')

    console.log(respuesta)

	// Si la respuesta es correcta
	if(respuesta.status === 200){
		const datos = await respuesta.json()
		console.log(datos)
	} else if(respuesta.status === 401){
		console.log('Wrong key')
	} else if(respuesta.status === 404){
		console.log('The movie does not exist')
	} else {
		console.log('Unknown error')
	}

 } catch(error){
	console.log(error)
 }

}

cargarPeliculas();