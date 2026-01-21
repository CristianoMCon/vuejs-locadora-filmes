const customer = {
  template: `
        <div class="container-fluid mt-2">

            <div class="row mt-2">                            
              <div className="col-8 pr-0 text-center">
                  <h1>Novo filme</h1> 
                  {{ msg }}       
              </div>
              <div className="col-4">
                  <a href="javascript:" @click="clearLocalStorage" class="btn btn-sm btn-warning"> Limpar todos </a>
              </div>
            </div>

            <!-- Start customer form section -->
            <div className="col-12 d-flex justify-content-center align-item-center">
                <div className="col-6">
                    <form id="customerForm">
                        <div class="row">
                            <div class="col-lg col-sm-12 mb-2 mb-lg-0">
                            Name:
                                <input v-model="Name" type="text" class="form-control" placeholder="Name">
                            </div>
                        </div>
                        <div class="row mt-3">                            
                            <div class="col-lg col-sm-12">
                            Category:
                                <input v-model="Category" type="text" class="form-control" placeholder="Category">
                            </div>
                            <div class="col-lg col-sm-12 mb-2 mb-lg-0">
                            Protagonist: 
                                <input v-model="Protagonist" type="text" class="form-control" placeholder="Protagonist">
                            </div>
                            <div class="col-lg col-sm-12 mb-2 mb-lg-0">
                            Director: 
                                <input v-model="Director" type="text" class="form-control" placeholder="Director">
                            </div>                            
                        </div>
                        <div class="row mt-2">
                            <div class="col-lg col-sm-12">
                                <input class="btn btn-success col" value="Cadastrar" @click="submitForm">
                                <!--<input class="btn btn-info col" value="Criar avulso" @click="addLocalStorage">-->                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!-- End customer form section -->           
        </div>
    `,

  data() {    
    return {
      msg : '',      
      Name: 'Rambo',
      Category: 'Acao',
      Protagonist: 'Silvester S.',
      Director: 'AK47',
    };
  },
  methods: {
    //submit customer form
    submitForm() {
        //console.log(this.Name,this.Category,this.Protagonist,this.Director);
        this.addLocalStorage(this.Name,this.Category,this.Protagonist,this.Director);
    },        

    clearLocalStorage(){
      localStorage.setItem('newMovies',[]);
      this.msg = "localStorage limpo";
    },

    addLocalStorage(n,c,p,d){      

      let moviesAdd = JSON.parse(localStorage.getItem('newMovies') || '[]');
      let nseq      = 0;

      //Define proximo sequencial
      moviesAdd.forEach(element => {        
        nseq  = parseInt(element.ID.substr(2)) + 1;        
      });

      console.log(nseq);

      let newID = 'MV' + nseq; 
      console.log(newID);

      let newMovieAdd = {
        ID: newID,
        Name: n,
        Category: c,
        Protagonist: p,
        Director: d,
        Poster: 'https://i.ebayimg.com/images/g/7PUAAOSw3NlgpvWJ/s-l1200.webp',
        Rented: false,
        canDelete: true
        };

        //limpa tudo
      //localStorage.setItem('newMovies',[])

      moviesAdd.push(newMovieAdd);
      localStorage.setItem('newMovies', JSON.stringify(moviesAdd));
      this.msg = "localStorage atualizado: " + moviesAdd.length;

      this.generateFakes();
    },
    generateFakes(){
      this.Name        = 'The ' + this.generateString();
      this.Category    = this.generateString(3);
      this.Protagonist = this.generateString(5)+ ' '+this.generateString(1)+'.';
      this.Director    = this.generateString(15);
    },
    generateString(length=10){
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
  },  

  beforeMount(){        
    this.generateFakes();
    //condicao ternario
    //console.log(JSON.parse(localStorage.getItem('newMovies') || '[]'));
  },   
};
