const customer = {
  template: `
        <div class="container-fluid mt-2">
            <div className="col-12 pr-0 text-center">
                <h1>Novo filme</h1>                
            </div>

            <!-- Start customer form section -->
            <div className="col-12 d-flex justify-content-center align-item-center">
                <div className="col-6">
                    <form id="customerForm">
                        <div class="row">
                            <div class="col-lg col-sm-12 mb-2 mb-lg-0">
                                <input v-model="ID" type="text" class="form-control" placeholder="ID">
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-lg col-sm-12 mb-2 mb-lg-0">
                                <input v-model="Name" type="text" class="form-control" placeholder="Name">
                            </div>
                            <div class="col-lg col-sm-12">
                                <input v-model="Category" type="text" class="form-control" placeholder="Category">
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-lg col-sm-12 mb-2 mb-lg-0">
                                <input v-model="Protagonist" type="text" class="form-control" placeholder="Protagonist">
                            </div>
                            <div class="col-lg col-sm-12 mb-2 mb-lg-0">
                                <input v-model="Director" type="text" class="form-control" placeholder="Director">
                            </div>                            
                        </div>
                        <div class="row mt-2">
                            <div class="col-lg col-sm-12">
                                <input class="btn btn-success col" value="Salvar" @click="submitForm">
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

      ID: '',
      Name: '',
      Category: '',
      Protagonist: '',
      Director: '',
    };
  },
  methods: {
    //submit customer form
    submitForm() {
      //check if the customer click the edit button
      if (this.clickEditButton) {
        this.updateCustomer();
      } else {
        const customer = {
          customerID: this.customerID,
          firstName: this.firstName,
          lastName: this.lastName,
          mobileNumber: this.mobileNumber,
          address: this.address,
        };

        this.customerDetails.push(customer);
        this.clearCustomerForm();
      }
    },    

    //update customer
    updateCustomer() {
      const customer = {
        customerID: this.customerID,
        firstName: this.firstName,
        lastName: this.lastName,
        mobileNumber: this.mobileNumber,
        address: this.address,
      };

      this.customerDetails[this.selectedCustomerRowID] = customer;
      this.clearCustomerForm();
      this.clickEditButton = false;
    },

  },  
};
