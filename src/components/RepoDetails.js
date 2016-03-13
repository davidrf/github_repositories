import React, { Component } from 'react';
import 'whatwg-fetch';

class RepoDetails extends Component {
  renderRepository() {
    const { repositories, params } = this.props;
    let repository = repositories.find(repo => {
      return repo.name === params.repositoryName
    });
    let stars = '★'.repeat(repository.stargazers_count);

    return (
      <div>
        <h2>{repository.name}</h2>
        <p>{repository.description}</p>
        <span>{stars}</span>
      </div>
    );
  }

  render() {
    const { repositories } = this.props;
    if (repositories.length > 0) {
      return this.renderRepository();
    } else {
      return <h4>Loading...</h4>;
    }
  }
}

export default RepoDetails;
