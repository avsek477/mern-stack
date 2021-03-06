// import PropTypes from 'prop-types';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'redux';

import SubscriberPage from '../../../containers/SubscriberPage/Loadable';
import logo from '../../../assets/img/esr-logo.svg';
import fb from '../../../assets/img/fb.png';
import instagram from '../../../assets/img/Instagram.png';
import tw from '../../../assets/img/tw.png';
import mail from '../../../assets/img/mail.png';

const styles = {};
class Footer extends React.Component {
  state = { email: '' };

  handleSave = e => {
    e.preventDefault();
    this.props.loadSubscribeRequest();
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { email } = this.state;

    return (
      <footer className="footer bg-gray-900">
        <div className="w-full bg-gray-900 border-b border-gray-800 p-2 text-center">
          <h1 className="text-gray-500 mt-4 mb-2 uppercase text-2xl">
            Get updates
          </h1>
          <p className="mb-5 text-gray-700">
            Never miss any updates from ESRTech.
          </p>
          <SubscriberPage />
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap p-3">
            <div className="w-full lg:w-1/2 crorder my-auto">
              <p className="text-gray-700 m-0">Designed and built by ESRTech</p>
            </div>

            <div className="w-full lg:w-1/2 lg:flex lg:justify-end my-auto">
              <ul className="flex list-none p-0 m-0">
                <li className="pr-2 lg:m-auto lg:pr-2">
                  <a
                    href="https://www.facebook.com/esrtech"
                    target="_blank"
                    rel="noopener"
                    title="Facebook"
                  >
                    <img src={fb} alt="facebook" />
                  </a>
                </li>
                <li className="pr-2 lg:m-auto lg:pr-2">
                  <a href="mailto:info@esrtech.io" title="E-mail">
                    <img src={mail} alt="email" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {};

const withStyle = withStyles(styles);

export default compose(
  withRouter,
  withStyle,
)(Footer);
