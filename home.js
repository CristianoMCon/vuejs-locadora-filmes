const home = {
  template: `
          <div class="jumbotron">
              <h1>Nosso catalogo possui {{ movieDetails.length }} filmes </h1>   

                <div v-html="movieInfo">
                </div> 
                
          </div>

          <!-- Start customer Table section -->
            <div className="col-12 d-flex justify-content-center align-item-center mt-3">
                <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Protagonist</th>
                        <th scope="col">Director</th>                        
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(movie,index) in movieDetails" :key="index">
                        <th scope="row">{{movie.ID}}</th>
                        <td><a href="javascript:" @click.prevent="verDetalhes(index)">{{movie.Name}}</a>
                        <span v-if="!movie.Rented"> * </span></td>
                        <td>{{movie.Category}}</td>
                        <td>{{movie.Protagonist}}</td>
                        <td>{{movie.Director}}</td>     
                        <td>
                        
                        <a href="javascript:" @click.prevent="verDetalhes(index)" v-if="movie.Rented" > Alugar </a> 
                        <a href="javascript:" @click.prevent="verDetalhes(index)" v-if="!movie.Rented" > Devolver </a> 
                        </td>                   
                    </tr>
                </tbody>
            </table>
            </div>
      `,

      data() {

        return {
            //usar diretiva v-html para renderizar tag html
            movieInfo: '',
            movieDetails: [
            {
              ID: 'MV01',
              Name: 'The Thing',
              Category: 'Terror',
              Protagonist: 'Snow',
              Director: 'John C.',
              Rented: true,
              Poster: 'https://br.web.img3.acsta.net/medias/nmedia/18/96/76/33/20487876.jpg'
            },
            {
                ID: 'MV02',
                Name: 'The Shining',
                Category: 'Comedia',
                Protagonist: 'Jack N.',
                Director: 'Stanley K.',                
                Rented: false,
                Poster: 'https://i.ebayimg.com/images/g/7PUAAOSw3NlgpvWJ/s-l1200.webp'
              },
          ]
        }
    },
    methods: {         
         verDetalhes(ID) {
            const showMovie = this.movieDetails[ID];                
            this.movieInfo = ` 
            <div style="float:left; margin-right:10px"> <img src=${showMovie.Poster} />  </div>
            <ul>
            <li><b>Name:</b> ${showMovie.Name} </li>
            <li><b>Category:</b> ${showMovie.Category} </li>
            <li><b>Rented:</b> ${showMovie.Rented} </li>
            </ul>
            ` ;            
        }
    }
};
