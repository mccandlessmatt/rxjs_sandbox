import React from 'react'
import Rx from 'rx'
import { connect } from 'react-redux'
import { searchImgur } from '../actioncreators/imgur'
import { IMGUR_ID, IMGUR_BASE_URL} from '../constants/appConstants'
import axios from 'axios'

function search(searchTerm){
  console.log('the search term:', searchTerm)
  let request = axios.get(`${IMGUR_BASE_URL}?q=tag:${searchTerm}`,{
    headers:{Authorization: `Client-ID ${IMGUR_ID}`}
  });
  return Rx.Observable.fromPromise(request);
}

let SearchImgur = React.createClass({

  componentDidMount(){
    this.search = Rx.Observable.fromEvent(this.refs.search, 'keydown')
      .map(e => e.target.value)
      .filter(text => text.length > 3)
      .debounce(250)
      .distinctUntilChanged()
      .flatMapLatest(search)

    this.search.subscribe(text => console.log(text));
  },

  render(){
    return (
      <input type="text"
        placeholder="search instagram"
        ref="search"
      />
    )
  }
});
/*
const mapStateToProps = state => ({value: state.imgur.searchText})

SearchInstagram = connect(mapStateToProps)(SearchImgur);
*/
export default SearchImgur
