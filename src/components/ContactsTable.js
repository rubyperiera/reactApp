import React from "react";
import ContactDeals from "./ContactDeals";
import "./contactTable.css";

const ContactsTable = ({person}) => {
    

    
    return (
        <table className = "ctable">
            <thead className = "chead">
                
                <th>Contact </th>                
                <th>Total Value</th>
                <th>Location</th>
                <th>Deals</th>
                <th>Tags</th>
               
               
            </thead>
            <tbody className = "cbody">

                {(person.length > 0) ? (
                    person.map((person, index) => {
                        console.log(person.links.deals);
                        return (
                            <tr key={index} className = "ctr">
                                <td className="cdata">{person.firstName + " " + person.lastName }</td>
                                <td>{person.links.deals }</td>
                                <td>{ person.links.geoIps}</td>
                                <td>{person.links.contactDeals}</td>
                                <td>{ person.links.contactTags}</td>
                                                                
                                
                                
                            </tr>
                        );
                    })
                ) : (
                        <tr>
                            <td colSpan="5">Loading...</td>
                        </tr>
                    )}
            </tbody>
        </table>
    );
};

export default ContactsTable;