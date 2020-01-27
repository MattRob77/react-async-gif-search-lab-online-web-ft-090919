import React, { Component } from 'react'

export default class GifSearch  extends Component {
  
  state = {
    term: ''
  }
  
  handleInput = e => {
    this.setState({term: e.target.value})
  }
  onSearch = e => {
    this.setState({term: e.target.term
      
    })
  }
}