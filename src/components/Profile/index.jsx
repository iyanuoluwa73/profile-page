import React, { Component } from 'react';
import './style.css';


class Profile extends Component {
  render() {
    return (
			<div className="profile text-center">
				<img src='src/dp.jpg' id="profile__img" className="text-center" />
				<h1 id='twitter' className="text-center">iyanuoluwaOr</h1>
				<p id="slack">IyanuoluwaD</p>
				<a><i class="fa fa-share share" aria-hidden="true"></i></a>
				<a><i class="fa fa-ellipsis-h more" aria-hidden="true"></i></a>
      </div>
    )
  }
}
export default Profile;