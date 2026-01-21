const home = {
  template: `  
          <div class="jumbotron">
            <h2>Catalogo contendo {{ oldMovies + newMovies }} filmes  </h2>   
            <i>(Originais: {{ oldMovies }} | Novos: {{ newMovies }})</i> 
            <span v-html="msg"> </span>
          </div>

          <!-- Start customer Table section -->
            <div className="col-12 d-flex justify-content-center align-item-center mt-3">
                <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Total Rented</th>                        
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(movie,index) in moviesUpdatedList" :key="index" :class="{'movieRented': movie.Rented}">
                        <th scope="row">{{movie.ID}}</th>
                        <td>
                        <router-link class="nav-link" :to="{name:'Info', params: {id:index}}"> {{movie.Name}} </router-link>
                        </td>
                        <td>{{movie.Category}}</td>
                        <td> {{ this.movieRentedCount.filter(a => a === movie.Name).length }} </td>     
                        <td>                        
                            <a href="javascript:" @click.prevent="toRent(index)" v-if="!movie.Rented" class="btn btn-sm btn-success" > Alugar </a> &nbsp;
                            <a href="javascript:" @click.prevent="returnRented(index)" v-if="movie.Rented"  class="btn btn-sm btn-warning"> Devolver </a> &nbsp;       
                            <a href="javascript:" @click.prevent="movieDelete(index)" v-if="movie.canDelete"  class="btn btn-sm btn-danger"> Excluir </a>        
                        </td>                   
                    </tr>
                </tbody>
            </table>
            </div>
      `,

      data() {

        return {     
            msg: '',
            oldMovies: 0,
            newMovies: 0,
            movieRentedCount: ['The Thing','The Shining'],
            movieDetails: [
            {
              ID: 'MV01',
              Name: 'The Thing',
              Category: 'Terror',
              Protagonist: 'Snow',
              Director: 'John C.',              
              Poster: 'https://br.web.img3.acsta.net/medias/nmedia/18/96/76/33/20487876.jpg',
              Rented: true, 
              canDelete: false             
            },
            {
                ID: 'MV02',
                Name: 'The Shining',
                Category: 'Comedia',
                Protagonist: 'Jack N.',
                Director: 'Stanley K.',                
                Poster: 'https://i.ebayimg.com/images/g/7PUAAOSw3NlgpvWJ/s-l1200.webp',
                Rented: true,
                canDelete: false                
              }            
          ]
        }
    },
    methods: {      
      toRent(index){
        this.movieDetails[index].Rented = true;                           
        this.movieRentedCount.push(this.movieDetails[index].Name);
        //console.log(this.movieRentedCount);
        //console.log(this.movieRentedCount.filter(a => a === 'The Thing').length);
      },
      returnRented(index){
        this.movieDetails[index].Rented = false;
      },
      movieDelete(index){      
        let movieNameDelete = this.movieDetails[index].Name;        
        let moviesUpdate = [];
        //loop no LS dos novos filmes, 
        JSON.parse(localStorage.getItem('newMovies')).forEach(element => {                               
            //Se filme for o excluido, pula para ele nao ser add no array principal
            if(movieNameDelete != element.Name){
              moviesUpdate.push(element)
            }
        });                  
        //atualiza LS
        localStorage.setItem('newMovies', JSON.stringify(moviesUpdate));               
        
        //remove do array principal
        this.movieDetails.splice(index); 
        
        this.msg = `<span class="label label-danger"> Filme excluido: ${movieNameDelete} </span>`;
      }
    },    
    computed: {
      moviesUpdatedList(){

        this.oldMovies = this.movieDetails.length;
        //console.log( Object.values(this.movieDetails) )

        let newMoviesToUpdate = JSON.parse(localStorage.getItem('newMovies') || '[]')       

        if(newMoviesToUpdate.length){                  

          this.newMovies = newMoviesToUpdate.length;
          
            //loop no array dos novos filmes para add elementos no array principal
            newMoviesToUpdate.forEach(element => {
                //console.log(element)
                //console.log(element.Category)
                this.movieDetails.push(element);                
            });          
        }

        this.msg = (this.newMovies > 0) ? ` Filmes novo adicionados: ${this.newMovies}` : '';

        return this.movieDetails;        
      }
    }
};