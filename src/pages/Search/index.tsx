import * as React from 'react';
import { MapComponent } from './components';

export interface SearchPageProps {}

type State = {
  lat: number;
  lng: number;
};

class SearchPage extends React.Component<SearchPageProps, State> {
  state = {
    lat: 0,
    lng: 0,
  };

  componentDidMount() {
    this.getCurrentLocation();
  }

  // FIXME: 動かないいいいい
  getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        error => console.error(error)
      );
    }
  };

  render() {
    return <MapComponent />;
  }
}

export default SearchPage;
