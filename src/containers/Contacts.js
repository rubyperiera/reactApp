import React, { Component } from "react";
import ContactsTable from "../components/ContactsTable";

class Contacts extends Component {
  constructor(props){
    super(props)
      this.state = {
        loading : true,
        person: []
      };
    
  }
    
// This part of code is for running the Promise.all for nested Apis in a single API call. Please read the readMe.txt

  //   async componentDidMount() {
      
  //     const url = "https://cors-anywhere.herokuapp.com/https://sahmed93846.api-us1.com/api/3/contacts/";
  //     const header = { method: 'GET', 
  //                 headers: {
  //                   'Api-Token' : "bcd062dedabcd0f1ac8a568cdcf58660c44d7e79b91763cc1a5d0c03d52c522d851fceb0"
  //   }};
  //     const contacts = await fetch(url,header).then(response => response.json());
  //     this.contacts = contacts;
  //     const contact = this.contacts.contacts;
  //     const deals = contact.map(contact => contact.links.deals);
  //     const requests = deals.map(deals => fetch("https://cors-anywhere.herokuapp.com/"+deals,header));
  //     const dataObj={}

  //     Promise.all(requests)
  //     .then(responses => {
  //       // all responses are resolved successfully
  //       for(let response of responses) {
  //         console.log(`${response.url}: ${response.status}`); // shows 200 for every url
  //       }

  //       return responses;
  //     })
  //     // map array of responses into an array of response.json() to read their content
  //     .then(responses => Promise.all(responses.map(r => r.json())))
  //     // all JSON answers are parsed: "data" is the array of them
  //     .then(data => data.forEach(data => console.log(data.deals)))

      





  //     // const deal = await deals.map(deals => fetch("https://cors-anywhere.herokuapp.com/"+deals,header)
  //     // .then(response => response.json())
  //     // .then((user) => {return user}))
  //     // console.log(deal);
  // }
  



  async componentDidMount() {
    const url =
      "https://cors-anywhere.herokuapp.com/https://sahmed93846.api-us1.com/api/3/contacts/";

    const response = await fetch(url, {
      method: "get",
      headers: {
        "Api-Token":
          "bcd062dedabcd0f1ac8a568cdcf58660c44d7e79b91763cc1a5d0c03d52c522d851fceb0"
      }
    });
    const data = await response.json();
    this.setState({ person: data.contacts, loading: false });
    console.log(data);
  }

  render() {
    return (
        <div>
        <ContactsTable person={this.state.person}/>
        </div>
    )
  }
        
     

}

export default Contacts;
