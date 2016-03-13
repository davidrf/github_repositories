import 'whatwg-fetch';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: []
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/pro-react/repos')
    .then(response => response.json())
    .then(responseData => {
      this.setState({ repositories: responseData });
    })
    .catch(error => {
      const { router } = this.context;
      router.push('/error');
    });
  }


  render() {
    const { children } = this.props;
    const { repositories } = this.state;
    let repos = repositories.map(repository => {
      let { id, name } = repository;
      return (
        <li key={id}>
          <Link to={`/repos/${name}`}>{name}</Link>
        </li>
      );
    });
    let child = children && React.cloneElement(this.props.children, { repositories });

    return (
      <div>
        <h1>Github Repos</h1>
        <ul>
          {repos}
        </ul>
        {child}
      </div>
    );
  }
}
Repos.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Repos;

