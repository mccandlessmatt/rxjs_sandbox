import React from 'react'
import Rx from 'rx'
import { connect } from 'react-redux'
import { searchAction } from '../actioncreators/instagram'

let SearchInstagram = React.createClass({
  componentDidMount(){
    let searchStream = Rx.Observable.fromEvent(this.refs.search, 'keydown')
      .map(e => e.target.value)
      .throttle(500)
      .distinctUntilChanged()

      searchStream.subscribe(text => {
        this.props.dispatch(searchAction(text))
      });
  },
  render(){
    return (
      <input type="text" placeholder="search instagram" ref="search" value={this.props.value}/>
    )
  }
});

const mapStateToProps = state => ({value: state.instagram.searchText})

SearchInstagram = connect(mapStateToProps)(SearchInstagram);

export default SearchInstagram
