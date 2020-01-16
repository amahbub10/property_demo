import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Search from './Search.js'
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './map.css'

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export const SearchAddress = React.createContext()  

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
	constructor(props) {
		super(props);
		this.state = { 
      address: '' 
    };
    this.handleChange.bind(this)
    this.handleSelect.bind(this)
    }
    
  static defaultProps = {
    center: {
      lat: 23.777176,
      lng: 90.399452
    },
    zoom: 13
  }

  componentDidMount() {
    const result =  localStorage.getItem('location')
    console.log("In map file:" , result)
    if(result != null){
      this.setState({
        address : result
      })
    }
  }

  handleChange = address => {
    this.setState({address });
    console.log(address)
  };
 
  handleSelect = address => {
    console.log("Selecting address:" , address)
	  this.setState({

		  address : address
    })
    localStorage.setItem('location', this.state.address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error Moga 2', error));
  };

  render() {
    return (
      <div class="d-flex flex-column bd-highlight">
      <div style={{ height: '50vh', width: '100%' }}  class="p-2">
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              value={this.state.address}
              {...getInputProps({
                placeholder: 'Search Places ...',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDWDEFGpbr7kLKEbB6JTSYboSrYMfN7iJ8'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={23.777176}
            lng={90.399452}
            text="My Marker"
          />
        </GoogleMapReact>

      </div>
      <div class="p-2 cardLower">
        <SearchAddress.Provider value = {this.state.address}>
          <Search />
        </SearchAddress.Provider>
      </div>
      </div>
    );
  }
}
 
export default Map;