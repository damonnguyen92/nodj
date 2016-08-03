import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './createStore.js';
import Banner from "./components/banner_component";
import SearchBar from './components/search_bar';
import JobList from './containers/job_list';
import JobDetail from './containers/job_detail';

class App extends Component {
  jobSearch(term) { 
    console.log(term);
  }

  render() {
    return (
      <div>
        <Banner />
        <SearchBar className="twelve columns" onSearchTermChange={term => this.jobSearch(term)} />
        <JobList />
        <JobDetail />
      </div>
    );
  }
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
);
<<<<<<< HEAD
=======

>>>>>>> f613d4fab7e609f442ebb3861c52f33b8c274b62

export default App;
