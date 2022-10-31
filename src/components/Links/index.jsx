import React, { Component } from 'react';
import './style.css';

class Links extends Component {
  render() {
    return (
      <div className="links">
        <button class="btn btn-block"><a href='https://twitter.com/iyanuoluwaOr'>Twitter Link</a></button>
				<button class="btn btn-block" id='btn__zuri'><a href='https://training.zuri.team/'>Zuri Team</a></button>
				<button class="btn btn-block" id='books'>						<a href=' http://books.zuri.team'>Zuri Books <br />
						<small>Check out some books on design and coding.</small>
					</a>
				</button>
				<button class="btn btn-block" id='book__python'><a href='https://books.zuri.team/python-for-beginners?ref_id=<IyanuoluwaD>'>Python Books
				<br />
						<small>Highly recommend these books on python </small></a>
				</button>
				<button class="btn btn-block" id='pitch'><a href='https://background.zuri.team'>Background Check for Coders
				<br />
						<small>Need some assistance?</small></a>
				</button>
				<button class="btn btn-block" id='book__design'><a href='https://books.zuri.team/design-rules'>Design Books
				<br />
						<small>Get a free book on design.</small></a>
				</button>
      </div>
    )
  }
}
export default Links;