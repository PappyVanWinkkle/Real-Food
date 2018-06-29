/* ================
   HEADER COMPONENT 
===================== */

import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header id="header">
				<div className="intro">
					<div className="overlay">
						<div className="container">
							<div className="row">
								<div class="intro-text">
									<h1>
										<strong>REAL / HOMES</strong> <span>-</span> Find your next home
									</h1>
									<input
										type="text"
										class="form-control"
										placeholder="Search by City or Postcode"
										aria-label="Search by City or Postcode"
										aria-describedby="basic-addon2"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
