import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from './actions';



class GoogleAuth extends React.Component {



  componentDidMount() {
    window.gapi.load('client:auth2', () => {

      window.gapi.client.init({
        clientId: '',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();

        this.onAuthChange(this.auth.isSignedIn.get());

        this.auth.isSignedIn.listen(this.onAuthChange);
      });

    });
  }

  onAuthChange = (isSignedIn) => {
    if ( isSignedIn ) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if ( this.props.isSignedIn === null ) {
      return null;
    } else if (this.props.isSignedIn) {
      window.location = '/national-pokedex';
      return (
        <button type="button" className="button buttonBlue" onClick={this.onSignOutClick}>Sign out
          <div className="ripples buttonRipples">
            <span className="ripplesCircle"></span>
          </div>
        </button>
      );
    } else {
      return (
        <button type="button" className="button buttonBlue" onClick={this.onSignInClick}>Sign up
          <div className="ripples buttonRipples">
            <span className="ripplesCircle"></span>
          </div>
        </button>
      );
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }
}


const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}


export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
