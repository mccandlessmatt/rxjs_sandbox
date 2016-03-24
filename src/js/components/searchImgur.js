import React from 'react'
import Rx from 'rx'
import { connect } from 'react-redux'
import { searchImgur, updateResults } from '../actioncreators/imgur'
import { IMGUR_ID, IMGUR_BASE_URL} from '../constants/appConstants'
import axios from 'axios'

function search(searchTerm){
  let request = axios.get(`${IMGUR_BASE_URL}?q=title:${searchTerm}`,{
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

    this.search.subscribe(results => {
      let images = results.data.data
        .filter(result => !result.is_album)
        .map(result => ({
          id: result.id,
          title: result.title,
          url: result.link
        }));

      this.props.dispatch(updateResults(images));
    });
  },

  render(){
    return (
      <div>
        <input type="text"
          placeholder="search instagram"
          ref="search"
        />
        <ul>
          { this.props.results.map(result => <li key={result.id}>{result.title}<br /><img src={result.url} style={{maxWidth: '300px'}} /></li>)}
        </ul>
      </div>
    )
  }
});

const mapStateToProps = state => ({results: state.imgur.results})

SearchImgur = connect(mapStateToProps)(SearchImgur);

export default SearchImgur
