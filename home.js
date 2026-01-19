const home = {
  template: `
          <div class="jumbotron">
            <h2>Catalogo de filmes ({{ movieDetails.length }})</h2>            
          </div>

          <!-- Start customer Table section -->
            <div className="col-12 d-flex justify-content-center align-item-center mt-3">
                <table class="table table-hover">
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
                        <td>
                        
                        <!--
                        <a href="javascript:" @click.prevent="verDetalhes(index)">{{movie.Name}}</a>
                        <span v-if="!movie.Rented"> * </span>
                        <br>
                        -->                      

                        <router-link class="nav-link" :to="{name:'Info', params: {id:index}}"> {{movie.Name}} </router-link>

                        </td>
                        <td>{{movie.Category}}</td>
                        <td>{{movie.Protagonist}}</td>
                        <td>{{movie.Director}}</td>     
                        <td>                        
                            <a href="javascript:" @click.prevent="verDetalhes(index)" v-if="!movie.Rented" > Alugar </a> 
                            <a href="javascript:" @click.prevent="verDetalhes(index)" v-if="movie.Rented"> Devolver </a> 
                            <a href="javascript:" @click.prevent="verDetalhes(index)" v-if="!movie.Reserved"> Reservar </a>                             
                        </td>                   
                    </tr>
                </tbody>
            </table>
            </div>
      `,

      data() {

        return {                       
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
              },
            {
                ID: 'MV03',
                Name: 'The Shining 2 - The return',
                Category: 'Comedia',
                Protagonist: 'Jack N.',
                Director: 'Stanley K.',                
                Poster: 'https://i.ebayimg.com/images/g/7PUAAOSw3NlgpvWJ/s-l1200.webp',
                Rented: true,
                Reserved: true
              },
          ]
        }
    }
};