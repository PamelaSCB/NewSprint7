import {
	FaFacebookSquare,
	FaInstagram,
	FaTwitter,
	FaYoutubeSquare,
	FaTiktok,
} from 'react-icons/fa';

import { Container } from './FooterStyled';

export const Footer = () => (
	<Container>
		<p>More from Start Wars</p>
		<ul>
			<li>
				<a href='https://www.tiktok.com/@starwars'>
					<i>
						<FaTiktok />
					</i>
				</a>
			</li>
			<li>
				<a href='https://www.instagram.com/starwars/'>
					<i>
						<FaInstagram />
					</i>
				</a>
			</li>
			<li>
				<a href='https://twitter.com/starwars'>
					<i>
						<FaTwitter />
					</i>
				</a>
			</li>
			<li>
				<a href='https://www.facebook.com/starwars'>
					<i>
						<FaFacebookSquare />
					</i>
				</a>
			</li>

			<li>
				<a href='https://www.youtube.com/user/starwars'>
					<i>
						<FaYoutubeSquare />
					</i>
				</a>
			</li>
			<li>
				<a href='https://starwarskids.com/'>
					<img
						src='https://lumiere-a.akamaihd.net/v1/images/sw_nav_kids_937ed58b.svg?region=0%2C0%2C40%2C15'
						class='logo kids'
					/>
				</a>
			</li>
		</ul>
		<p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
		<ul>
			<li>
				<a href='terms'>Terms of Use</a>
			</li>
			<li>
				<a href='terms'>Additional Content Information</a>
			</li>
			<li>
				<a href='privacy'>Privacy Policy</a>
			</li>
			<li>
				<a href='privacy'> Children´s Online Privacy Policy</a>
			</li>
			<li>
				<a href='privacy'>Your US State Privacy Rights</a>
			</li>
			<li>
				<a href='shopdisney'>Star Wars at shopDisney</a>
			</li>
			<li>
				<a href='helpdesk'>Star Wars Helpdesk</a>
			</li>
			<li>
				<a href='helpdesk'>Interest Based Ads</a>
			</li>
			<li>
				<a href='helpdesk'>Do Not Sell or Share My Personal Information</a>
			</li>
		</ul>
	</Container>
);
