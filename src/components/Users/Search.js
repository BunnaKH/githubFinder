import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Search extends Component {

    state = {
        text:''
    }
    static propType = {
        searchUsers : PropTypes.func.isRequired,
        clearSearch : PropTypes.func.isRequired,
        showClear : PropTypes.bool.isRequired,
        setAlert : PropTypes.func.isRequired

    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === '') {
            this.props.setAlert ('Please enter something', 'light')
        } else {
        this.props.searchUsers(this.state.text);
        this.setState({text:''}); 
        }
 
    }

    onChange = (e) => {
      this.setState({[e.target.name]:e.target.value})
    }

    render() {
        return (
            <div>
              <form className='form' onSubmit={this.onSubmit}>
              
                  <input 
                  type='text' 
                  name='text' 
                  placeholder='Search Users..'
                  value={this.state.text}
                  onChange={this.onChange}
                  />
                  <input 
                     type='submit'
                     value='Search'
                     className='btn btn-dark btn-block'
                     />
                  </form>  
                  {this.props.showClear && 
                 <button onClick={this.props.clearUsers} className="btn btn-light btn-block tc">Clear</button>
                }
                 
            </div>
        )
    }
}

export default Search
