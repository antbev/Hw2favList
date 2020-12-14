import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
       this.state ={
           name: '',
           url: ''
       }
       this.handleChange = this.handleChange.bind(this);
       this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       const target = event.target;
       const value = target.value;
       const name = target.name;

       this.setState({
          [name]: value 
       });
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       this.setState({
           name: "",
           url: ""
       });

       this.props.handleSubmit(this.state);
    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label>Name</label>
                <input type="text"></input>
                <label>URL</label>
                <button>Submit</button>
            </form>
        )
    
    }
}

export default Form;
