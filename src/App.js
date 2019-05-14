import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render (){
    return (
      <div classNameName="App">
	<header id="home">
		<div className="bg-img" style={{backgroundImage: "url('./img/background1.jpg')"}}>
			<div className="overlay"></div>
		</div>
		<nav id="nav" className="navbar nav-transparent">
			<div className="container">
				<div className="navbar-header">
					<div className="navbar-brand">
						<a href="index.html">
							<img className="logo" src="img/logo.png" alt="logo" />
							<img className="logo-alt" src="img/logo-alt.png" alt="logo" />
						</a>
					</div>

					<div className="nav-collapse">
						<span></span>
					</div>
				</div>

				<ul className="main-nav nav navbar-nav navbar-right">
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#portfolio">Portfolio</a></li>
					<li><a href="#service">Services</a></li>
					<li><a href="#pricing">Prices</a></li>
					<li><a href="#team">Team</a></li>
					<li className="has-dropdown"><a href="#blog">Blog</a>
						<ul className="dropdown">
							<li><a href="blog-single.html">blog post</a></li>
						</ul>
					</li>
					<li><a href="#contact">Contact</a></li>
				</ul>

			</div>
		</nav>
		<div className="home-wrapper">
			<div className="container">
				<div className="row">

					<div className="col-md-10 col-md-offset-1">
						<div className="home-content">
							<h1 className="white-text">We Are Creative Agency</h1>
							<p className="white-text">Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere.
							</p>
							<button className="white-btn">Get Started!</button>
							<button className="main-btn">Learn more</button>
						</div>
					</div>

				</div>
			</div>
		</div>

	</header>

	<div id="about" className="section md-padding">

		<div className="container">

			<div className="row">

				<div className="section-header text-center">
					<h2 className="title">Welcome to Website</h2>
				</div>
				<div className="col-md-4">
					<div className="about">
						<i className="fa fa-cogs"></i>
						<h3>Fully Customizible</h3>
						<p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.</p>
						<a href="#">Read more</a>
					</div>
				</div>

				<div className="col-md-4">
					<div className="about">
						<i className="fa fa-magic"></i>
						<h3>Awesome Features</h3>
						<p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.</p>
						<a href="#">Read more</a>
					</div>
				</div>

				<div className="col-md-4">
					<div className="about">
						<i className="fa fa-mobile"></i>
						<h3>Fully Responsive</h3>
						<p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.</p>
						<a href="#">Read more</a>
					</div>
				</div>

			</div>

		</div>

	</div>


	<div id="portfolio" className="section md-padding bg-grey">

		<div className="container">

			<div className="row">

				<div className="section-header text-center">
					<h2 className="title">Featured Works</h2>
				</div>

				<div className="col-md-4 col-xs-6 work">
					<img className="img-responsive" src="./img/work1.jpg" alt="" />
					<div className="overlay"></div>
					<div className="work-content">
						<span>Category</span>
						<h3>Lorem ipsum dolor</h3>
						<div className="work-link">
							<a href="#"><i className="fa fa-external-link"></i></a>
							<a className="lightbox" href="./img/work1.jpg"><i className="fa fa-search"></i></a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-xs-6 work">
					<img className="img-responsive" src="./img/work2.jpg" alt="" />
					<div className="overlay"></div>
					<div className="work-content">
						<span>Category</span>
						<h3>Lorem ipsum dolor</h3>
						<div className="work-link">
							<a href="#"><i className="fa fa-external-link"></i></a>
							<a className="lightbox" href="./img/work2.jpg"><i className="fa fa-search"></i></a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-xs-6 work">
					<img className="img-responsive" src="./img/work3.jpg" alt="" />
					<div className="overlay"></div>
					<div className="work-content">
						<span>Category</span>
						<h3>Lorem ipsum dolor</h3>
						<div className="work-link">
							<a href="#"><i className="fa fa-external-link"></i></a>
							<a className="lightbox" href="./img/work3.jpg"><i className="fa fa-search"></i></a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-xs-6 work">
					<img className="img-responsive" src="./img/work4.jpg" alt="" />
					<div className="overlay"></div>
					<div className="work-content">
						<span>Category</span>
						<h3>Lorem ipsum dolor</h3>
						<div className="work-link">
							<a href="#"><i className="fa fa-external-link"></i></a>
							<a className="lightbox" href="./img/work4.jpg"><i className="fa fa-search"></i></a>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-xs-6 work">
					<img className="img-responsive" src="./img/work5.jpg" alt="" />
					<div className="overlay"></div>
					<div className="work-content">
						<span>Category</span>
						<h3>Lorem ipsum dolor</h3>
						<div className="work-link">
							<a href="#"><i className="fa fa-external-link"></i></a>
							<a className="lightbox" href="./img/work5.jpg"><i className="fa fa-search"></i></a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-xs-6 work">
					<img className="img-responsive" src="./img/work6.jpg" alt="" />
					<div className="overlay"></div>
					<div className="work-content">
						<span>Category</span>
						<h3>Lorem ipsum dolor</h3>
						<div className="work-link">
							<a href="#"><i className="fa fa-external-link"></i></a>
							<a className="lightbox" href="./img/work6.jpg"><i className="fa fa-search"></i></a>
						</div>
					</div>
				</div>

			</div>

		</div>

	</div>

	<div id="service" className="section md-padding">

		<div className="container">

			<div className="row">

				<div className="section-header text-center">
					<h2 className="title">What we offer</h2>
				</div>

				<div className="col-md-4 col-sm-6">
					<div className="service">
						<i className="fa fa-diamond"></i>
						<h3>App Development</h3>
						<p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
					</div>
				</div>

				<div className="col-md-4 col-sm-6">
					<div className="service">
						<i className="fa fa-rocket"></i>
						<h3>Graphic Design</h3>
						<p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
					</div>
				</div>

				<div className="col-md-4 col-sm-6">
					<div className="service">
						<i className="fa fa-cogs"></i>
						<h3>Creative Idea</h3>
						<p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
					</div>
				</div>

				<div className="col-md-4 col-sm-6">
					<div className="service">
						<i className="fa fa-diamond"></i>
						<h3>Marketing</h3>
						<p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
					</div>
				</div>

				<div className="col-md-4 col-sm-6">
					<div className="service">
						<i className="fa fa-pencil"></i>
						<h3>Awesome Support</h3>
						<p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
					</div>
				</div>

				<div className="col-md-4 col-sm-6">
					<div className="service">
						<i className="fa fa-flask"></i>
						<h3>Brand Design</h3>
						<p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
					</div>
				</div>

			</div>

		</div>

	</div>


	<div id="features" className="section md-padding bg-grey">

		<div className="container">

			<div className="row">
				<div className="col-md-6">
					<div className="section-header">
						<h2 className="title">Why Choose Us</h2>
					</div>
					<p>Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris. Ultrices sagittis orci a scelerisque purus.</p>
					<div className="feature">
						<i className="fa fa-check"></i>
						<p>Quis varius quam quisque id diam vel quam elementum.</p>
					</div>
					<div className="feature">
						<i className="fa fa-check"></i>
						<p>Mauris augue neque gravida in fermentum.</p>
					</div>
					<div className="feature">
						<i className="fa fa-check"></i>
						<p>Orci phasellus egestas tellus rutrum.</p>
					</div>
					<div className="feature">
						<i className="fa fa-check"></i>
						<p>Nec feugiat nisl pretium fusce id velit ut tortor pretium.</p>
					</div>
				</div>

				<div className="col-md-6">
					<div id="about-slider" className="owl-carousel owl-theme">
						<img className="img-responsive" src="./img/about1.jpg" alt="" />
						<img className="img-responsive" src="./img/about2.jpg" alt="" />
						<img className="img-responsive" src="./img/about1.jpg" alt="" />
						<img className="img-responsive" src="./img/about2.jpg" alt="" />
					</div>
				</div>

			</div>

		</div>

	</div>


	<div id="numbers" className="section sm-padding">

		<div className="bg-img" style={{backgroundImage: "url('./img/background2.jpg')"}}>
			<div className="overlay"></div>
		</div>

		<div className="container">

			<div className="row">

				<div className="col-sm-3 col-xs-6">
					<div className="number">
						<i className="fa fa-users"></i>
						<h3 className="white-text"><span className="counter">451</span></h3>
						<span className="white-text">Happy clients</span>
					</div>
				</div>

				<div className="col-sm-3 col-xs-6">
					<div className="number">
						<i className="fa fa-trophy"></i>
						<h3 className="white-text"><span className="counter">12</span></h3>
						<span className="white-text">Awards won</span>
					</div>
				</div>

				<div className="col-sm-3 col-xs-6">
					<div className="number">
						<i className="fa fa-coffee"></i>
						<h3 className="white-text"><span className="counter">154</span>K</h3>
						<span className="white-text">Cups of Coffee</span>
					</div>
				</div>
				<div className="col-sm-3 col-xs-6">
					<div className="number">
						<i className="fa fa-file"></i>
						<h3 className="white-text"><span className="counter">45</span></h3>
						<span className="white-text">Projects completed</span>
					</div>
				</div>

			</div>

		</div>

	</div>

	<div id="pricing" className="section md-padding">

		<div className="container">

			<div className="row">

				<div className="section-header text-center">
					<h2 className="title">Pricing Table</h2>
				</div>

				<div className="col-sm-4">
					<div className="pricing">
						<div className="price-head">
							<span className="price-title">Basic plan</span>
							<div className="price">
								<h3>$9<span className="duration">/ month</span></h3>
							</div>
						</div>
						<ul className="price-content">
							<li>
								<p>1GB Disk Space</p>
							</li>
							<li>
								<p>100 Email Account</p>
							</li>
							<li>
								<p>24/24 Support</p>
							</li>
						</ul>
						<div className="price-btn">
							<button className="outline-btn">Purchase now</button>
						</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="pricing">
						<div className="price-head">
							<span className="price-title">Silver plan</span>
							<div className="price">
								<h3>$19<span className="duration">/ month</span></h3>
							</div>
						</div>
						<ul className="price-content">
							<li>
								<p>1GB Disk Space</p>
							</li>
							<li>
								<p>100 Email Account</p>
							</li>
							<li>
								<p>24/24 Support</p>
							</li>
						</ul>
						<div className="price-btn">
							<button className="outline-btn">Purchase now</button>
						</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="pricing">
						<div className="price-head">
							<span className="price-title">Gold plan</span>
							<div className="price">
								<h3>$39<span className="duration">/ month</span></h3>
							</div>
						</div>
						<ul className="price-content">
							<li>
								<p>1GB Disk Space</p>
							</li>
							<li>
								<p>100 Email Account</p>
							</li>
							<li>
								<p>24/24 Support</p>
							</li>
						</ul>
						<div className="price-btn">
							<button className="outline-btn">Purchase now</button>
						</div>
					</div>
				</div>

			</div>

		</div>

	</div>


	<div id="testimonial" className="section md-padding">

		<div className="bg-img" style={{backgroundImage: "url('./img/background3.jpg')"}}>
			<div className="overlay"></div>
		</div>

		<div className="container">

			<div className="row">

				<div className="col-md-10 col-md-offset-1">
					<div id="testimonial-slider" className="owl-carousel owl-theme">

						<div className="testimonial">
							<div className="testimonial-meta">
								<img src="./img/perso1.jpg" alt="" />
								<h3 className="white-text">John Doe</h3>
								<span>Web Designer</span>
							</div>
							<p className="white-text">Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.</p>
						</div>

						<div className="testimonial">
							<div className="testimonial-meta">
								<img src="./img/perso2.jpg" alt="" />
								<h3 className="white-text">John Doe</h3>
								<span>Web Designer</span>
							</div>
							<p className="white-text">Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.</p>
						</div>

					</div>
				</div>

			</div>

		</div>

	</div>

	<div id="team" className="section md-padding">

		<div className="container">

			<div className="row">

				<div className="section-header text-center">
					<h2 className="title">Our Team</h2>
				</div>

				<div className="col-sm-4">
					<div className="team">
						<div className="team-img">
							<img className="img-responsive" src="./img/team1.jpg" alt="" />
							<div className="overlay">
								<div className="team-social">
									<a href="#"><i className="fa fa-facebook"></i></a>
									<a href="#"><i className="fa fa-google-plus"></i></a>
									<a href="#"><i className="fa fa-twitter"></i></a>
								</div>
							</div>
						</div>
						<div className="team-content">
							<h3>John Doe</h3>
							<span>Web Designer</span>
						</div>
					</div>
				</div>

				<div className="col-sm-4">
					<div className="team">
						<div className="team-img">
							<img className="img-responsive" src="./img/team2.jpg" alt="" />
							<div className="overlay">
								<div className="team-social">
									<a href="#"><i className="fa fa-facebook"></i></a>
									<a href="#"><i className="fa fa-google-plus"></i></a>
									<a href="#"><i className="fa fa-twitter"></i></a>
								</div>
							</div>
						</div>
						<div className="team-content">
							<h3>John Doe</h3>
							<span>Web Designer</span>
						</div>
					</div>
				</div>

				<div className="col-sm-4">
					<div className="team">
						<div className="team-img">
							<img className="img-responsive" src="./img/team3.jpg" alt="" />
							<div className="overlay">
								<div className="team-social">
									<a href="#"><i className="fa fa-facebook"></i></a>
									<a href="#"><i className="fa fa-google-plus"></i></a>
									<a href="#"><i className="fa fa-twitter"></i></a>
								</div>
							</div>
						</div>
						<div className="team-content">
							<h3>John Doe</h3>
							<span>Web Designer</span>
						</div>
					</div>
				</div>

			</div>

		</div>

	</div>

	<div id="blog" className="section md-padding bg-grey">

		<div className="container">

			<div className="row">

				<div className="section-header text-center">
					<h2 className="title">Recents news</h2>
				</div>

				<div className="col-md-4">
					<div className="blog">
						<div className="blog-img">
							<img className="img-responsive" src="./img/blog1.jpg" alt="" />
						</div>
						<div className="blog-content">
							<ul className="blog-meta">
								<li><i className="fa fa-user"></i>John doe</li>
								<li><i className="fa fa-clock-o"></i>18 Oct</li>
								<li><i className="fa fa-comments"></i>57</li>
							</ul>
							<h3>Molestie at elementum eu facilisis sed odio</h3>
							<p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.</p>
							<a href="blog-single.html">Read more</a>
						</div>
					</div>
				</div>

				<div className="col-md-4">
					<div className="blog">
						<div className="blog-img">
							<img className="img-responsive" src="./img/blog2.jpg" alt="" />
						</div>
						<div className="blog-content">
							<ul className="blog-meta">
								<li><i className="fa fa-user"></i>John doe</li>
								<li><i className="fa fa-clock-o"></i>18 Oct</li>
								<li><i className="fa fa-comments"></i>57</li>
							</ul>
							<h3>Molestie at elementum eu facilisis sed odio</h3>
							<p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.</p>
							<a href="blog-single.html">Read more</a>
						</div>
					</div>
				</div>

				<div className="col-md-4">
					<div className="blog">
						<div className="blog-img">
							<img className="img-responsive"  src="./img/blog3.jpg" alt="" />
						</div>
						<div className="blog-content">
							<ul className="blog-meta">
								<li><i className="fa fa-user"></i>John doe</li>
								<li><i className="fa fa-clock-o"></i>18 Oct</li>
								<li><i className="fa fa-comments"></i>57</li>
							</ul>
							<h3>Molestie at elementum eu facilisis sed odio</h3>
							<p>Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.</p>
							<a href="blog-single.html">Read more</a>
						</div>
					</div>
				</div>

			</div>

		</div>

	</div>

	<div id="contact" className="section md-padding">

		<div className="container">

			<div className="row">

				<div className="section-header text-center">
					<h2 className="title">Get in touch</h2>
				</div>
				<div className="col-sm-4">
					<div className="contact">
						<i className="fa fa-phone"></i>
						<h3>Phone</h3>
						<p>512-421-3940</p>
					</div>
				</div>

				<div className="col-sm-4">
					<div className="contact">
						<i className="fa fa-envelope"></i>
						<h3>Email</h3>
						<p>email@support.com</p>
					</div>
				</div>

				<div className="col-sm-4">
					<div className="contact">
						<i className="fa fa-map-marker"></i>
						<h3>Address</h3>
						<p>1739 Bubby Drive</p>
					</div>
				</div>

				<div className="col-md-8 col-md-offset-2">
					<form className="contact-form">
						<input type="text" className="input" placeholder="Name" />
						<input type="email" className="input" placeholder="Email" />
						<input type="text" className="input" placeholder="Subject" />
						<textarea className="input" placeholder="Message"></textarea>
						<button className="main-btn">Send message</button>
					</form>
				</div>

			</div>

		</div>

	</div>


	<footer id="footer" className="sm-padding bg-dark">

		<div className="container">

			<div className="row">

				<div className="col-md-12">

					<div className="footer-logo">
						<a href="index.html"><img src="img/logo-alt.png" alt="logo" /></a>
					</div>

					<ul className="footer-follow">
						<li><a href="#"><i className="fa fa-facebook"></i></a></li>
						<li><a href="#"><i className="fa fa-twitter"></i></a></li>
						<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
						<li><a href="#"><i className="fa fa-instagram"></i></a></li>
						<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
						<li><a href="#"><i className="fa fa-youtube"></i></a></li>
					</ul>
					<div className="footer-copyright">
						<p>Copyright © 2017. All Rights Reserved. Designed by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
					</div>

				</div>

			</div>

		</div>

	</footer>

	<div id="back-to-top"></div>

	<div id="preloader">
		<div className="preloader">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
      </div>
    );
  }
}

export default App;
