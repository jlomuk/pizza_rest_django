import React, {Component} from 'react';
import axios from 'axios';
import PizzaDetail from './pizzeriasdetail';
import PizzaForm from './pizzeriaform';


class PizzaList extends Component {

    constructor(props){
      super(props);
      this.state = {
        pizzeriasData: [],
        pizzeria: " ",
        showComponent: false,
      };
      this.getPizzaDetail = this.getPizzaDetail.bind(this);
      this.showPizzeriaDetails = this.showPizzeriaDetails.bind(this);
    }

    componentDidMount(){
      axios.get('http://127.0.0.1:8000/stores')
      .then(response => {
        this.setState({pizzeriasData:response.data});
      })
      .catch(error =>{
        console.log(error);
      });
    }

    getPizzaDetail(item){
      axios.get('http://127.0.0.1:8000'.concat(item.absolute_url))
      .then(response => {
        this.setState({pizzeria:response.data})
      })
      .catch(error => console.log(error));
    }

    showPizzeriaDetails(item){
      this.getPizzaDetail(item);
      this.setState({showComponent: true})
    }

    render(){
        return (
            <div>
                <div>
                <PizzaForm/>
                </div>
                {this.state.pizzeriasData.map(item => {
                   return <h3 key={item.id} onClick={() => this.showPizzeriaDetails(item)}> 
                   {item.name}, {item.city}</h3>
                  })
                }

                {this.state.showComponent ? (<PizzaDetail pizzariaDetail={this.state.pizzeria} />
                  ) : null}
            </div>
        )
    }

    
}

  export default PizzaList;