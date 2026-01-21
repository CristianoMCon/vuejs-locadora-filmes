const info = {
    props: ['id'], //para route
    template: `
        <div class="d-flex justify-content-center align-item-center mt-3">
            <div class="movieInfo">
                <h1>{{ movieID }}</h1>   
                <div v-html="movieInfo">
                </div>                         
            </div>
        </div>
        `,
        data() {
            return {
                //usar diretiva v-html para renderizar tag html
                movieInfo:'',
                movieID: '',
                movieDetails: [
                {
                  ID: 'MV01',
                  Name: 'The Thing',
                  Category: 'Terror',
                  Protagonist: 'Snow',
                  Director: 'John C.',              
                  Poster: 'https://br.web.img3.acsta.net/medias/nmedia/18/96/76/33/20487876.jpg',
                  Rented: true,
                  Reserved: false
                },
                {
                    ID: 'MV02',
                    Name: 'The Shining',
                    Category: 'Comedia',
                    Protagonist: 'Jack N.',
                    Director: 'Stanley K.',                
                    Poster: 'https://i.ebayimg.com/images/g/7PUAAOSw3NlgpvWJ/s-l1200.webp',
                    Rented: false,
                    Reserved: false
                  }
              ]
            }
        },
        methods: {         
            verDetalhes(ID) {
               const showMovie = this.movieDetails[ID];                
               this.movieInfo = ` 
               <div class="movieInfoPoster"> 
                <img src=${showMovie.Poster} class="img-responsive" />  
               </div>
               <br>
               <ul>
                <li><b>Name:</b> ${showMovie.Name} </li>
                <li><b>Category:</b> ${showMovie.Category} </li>
                <li><b>Protagonist:</b> ${showMovie.Protagonist} </li>
                <li><b>Director:</b> ${showMovie.Director} </li>
                <li><b>Alugado:</b> ${showMovie.Rented} </li>
                <li><b>Reservado:</b> ${showMovie.Reserved} </li>
               </ul>
               ` ;            
               //reimprimo nome
               this.movieID = showMovie.Name;
           }
       },
        beforeMount() {

            //console.log(this.movieDetails);

            let newMoviesToUpdate = JSON.parse(localStorage.getItem('newMovies') || '[]')       
            if(newMoviesToUpdate.length){                                          
                //loop no array dos novos filmes para add elementos no array principal
                newMoviesToUpdate.forEach(element => {
                    //console.log(element)
                    //console.log(element.Category)
                    this.movieDetails.push(element);                
                });          
            }

           //console.log("Bingo!! parametro recebidoooo:"+this.$route.params.id)
           this.movieID = this.$route.params.id;
           this.verDetalhes(this.movieID);

           //console.log(this.movieID);
         },       
};
