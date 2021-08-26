import React, {Component} from 'react';
import axios from 'axios';


class PizzaForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            zip_code: "",
            website: "", 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post(process.env.REACT_APP_URL.concat('/stores/create/'), {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            zip_code: this.state.zip_code,
            website: this.state.website,
         })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }

    render(){

        const {
            name,
            phone, 
            email, 
            zip_code,
            website,
        } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    Name:
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}/>
                </div>
                <div>
                    Phone:
                    <input 
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={this.handleChange}/>
                </div>
                <div>
                    Email:
                    <input 
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}/>
                </div>
                <div>
                    Zip code:
                    <input 
                        type="text"
                        name="zip_code"
                        value={zip_code}
                        onChange={this.handleChange}/>
                </div>
                <div>
                    Website:
                    <input 
                        type="text"
                        name="website"
                        value={website}
                        onChange={this.handleChange}/>
                </div>
                 <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default PizzaForm;