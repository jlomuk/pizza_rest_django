import React, {Component} from 'react';


class PizzaDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            showComponent: false
        };
    }

    updatePizzeriaDetails(){
        this.setState({showComponent: true});
    }

    render() {
        const p = this.props.pizzariaDetail
        return (
            <div style={{ color: "red", border: "1px solid yellow" }}>
                <h4>{p.name}</h4>
                <h6>Phone: {p.phone}</h6>
                <h6>Email: {p.email}</h6>
                <h5>{p.zip_code}</h5>
                <h5>{p.website}</h5>
                <button style={{backgroundColor: "white"}} onClick={()=> this.updatePizzeriaDetails()}>
                    Update
                </button>
                {this.state.showComponent ? <PizzaUpdate pizzariaUpdate={p}/> : null}
            </div>
        );
    }
}

export default PizzaDetail 