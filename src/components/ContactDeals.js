import React , {Component} from "react";

class ContactDeals extends Component { 
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      deals: []
    };
  }
    
 
  async componentDidMount() {
    const url = "https://cors-anywhere.herokuapp.com/"+this.props.tags;
     console.log(url); 
     fetch(url, { 
      method: 'GET', 
      headers: {
          'Api-Token' : "bcd062dedabcd0f1ac8a568cdcf58660c44d7e79b91763cc1a5d0c03d52c522d851fceb0",
      }
    })
    .then(res => res.json())
    .then((data) => {
        this.setState({ deals: data,loading:false })
    })
      //this.setState({ deals: data.deals, loading: false });
        
  }

  render() {
   
    return (
        <div>
            {this.state.deals.currency}
        </div>
    )
  }
        
     

}

export default ContactDeals;