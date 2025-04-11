import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import YouTube from 'react-youtube';

import './BlogPage.css';

function BlogPage() {
	const opts = {
		height: '250',
		width: '345',
		borderRadius: '2',
		playerVars: {
			autoplay: 0,
		},
	};
	const DOUGH = process.env.PUBLIC_URL + '/images/dough.jpeg';
	const DISH = process.env.PUBLIC_URL + '/images/dish.jpeg';

	return (
		<div className="blog-page">
			<div className="blog-title">
				A full guide for a better and smarter cooking
			</div>
			<div className="blog-exp">
				<div className="blog-exp-author">
					<FontAwesomeIcon icon={faCircleUser} size="lg" /> Tricia Albert
				</div>
				<div className="blog-date">
					<FontAwesomeIcon
						icon={faCalendar}
						size="lg"
						className="icon-margin"
					/>
					Yesterday
				</div>
			</div>
			<div className="blog-pre-exp">
				One thing a learned living in the Canarsie section of Brooklyn, Ny was
				how to cook a good Italian meal.Here is recipe I created after having
				this dish in a restourant. Enjoy!
			</div>
			<div className="blog-vid">
				<YouTube videoId="sv3TXMSv6Lw" opts={opts} />
			</div>
			<div className="blog-before">
				<div className="blog-general-title">Before you begin</div>
				<div className="blog-basics-exp">
					In adipisicing quis deserunt est nostrud. Anim cupidatat aute in anim
					amet minim id proident adipisicing laboris sunt aute. Sit deserunt et
					deserunt non proident excepteur velit non elit excepteur fugiat ex
					duis labore.um lorem.
				</div>
			</div>
			<div className="blog-basics">
				<div className="blog-basics-text">
					<div className="blog-general-title">Here are the basics</div>
					<div className="blog-basics-exp">
						Dolore mollit pariatur eu tempor labore irure ut voluptate dolore
						enim. Voluptate cupidatat est elit eu incididunt occaecat. Labore
						labore ullamco do ea et ipsum occaecat exercitation dolor. Quis nisi
						do anim aliqua ipsum irure exercitation laboris duis elit sit.
						Proident exercitation incididunt ullamco laboris aliquip laboris
						aute commodo duis id nisi. Proident enim excepteur est tempor
						adipisicing est id adipisicing cillum consequat pariatur sint non
						duis.
					</div>
					<div className="blog-basics-exp">
						Et eu aliquip et pariatur do non non ad. Reprehenderit proident
						tempor ullamco anim nostrud quis labore. Ex non enim cillum amet
						voluptate laborum fugiat aliqua ipsum sunt. Nulla veniam cillum est
						ex reprehenderit aliqua laborum est culpa Lorem dolore.
					</div>
				</div>
				<div className="blog-basics-img">
					<img src={DOUGH} alt="dough"></img>
				</div>
			</div>

			<div className="blog-writer">
				<div className="blog-writer-quote">
					"One cannot think well,love well, sleep well, if one has not dined
					well."
				</div>
				<div className="blog-writer-name">
					-Virginia Woolf, A Room of One's Own
				</div>
			</div>
			<div className="blog-kitchen">
				<div className="blog-general-title">In the kitchen</div>
				<div className="blog-basics-exp">
					Mollit adipisicing nisi ea qui Lorem eiusmod reprehenderit fugiat
					veniam pariatur pariatur sunt nulla. Consequat Lorem mollit tempor
					fugiat occaecat do magna ex. Nostrud in reprehenderit aliquip amet
					amet eu id. Nulla cupidatat commodo cillum esse sit minim laborum elit
					id nisi adipisicing proident. Qui culpa labore tempor minim sint
					consectetur magna. Aute nisi eu aute aliqua dolore nisi aliqua
					reprehenderit occaecat anim nulla ad. Duis ad non minim magna minim.
					Ut officia consectetur dolore anim labore quis. Nisi ipsum consectetur
					dolore laborum ipsum ut culpa Lorem.
				</div>
				<div className="blog-basics-exp">
					In adipisicing quis deserunt est nostrud. Anim cupidatat aute in anim
					amet minim id proident adipisicing laboris sunt aute. Sit deserunt et
					deserunt non proident excepteur velit non elit excepteur fugiat ex
					duis labore.um lorem.
				</div>
				<div className="blog-basics-exp">
					Et exercitation aliqua commodo labore cillum eu Lorem. Consequat culpa
					ea commodo sunt mollit. Ullamco sunt deserunt eu sunt cupidatat in
					cupidatat nulla in id magna exercitation laboris. Occaecat enim
					exercitation adipisicing deserunt consectetur amet. Excepteur occaecat
					ad deserunt pariatur anim magna exercitation reprehenderit officia
					tempor eiusmod non sunt do. Consectetur elit nostrud reprehenderit
					nisi ut dolore ullamco aliqua ut tempor incididunt nostrud aliqua.
				</div>
				<div className="blog-kitchen-img">
					<img src={DISH} alt="dish"></img>
				</div>
				<div className="blog-basics-exp">
					Aliquip adipisicing nostrud culpa ex Lorem consectetur proident aute
					elit ex cupidatat officia. Reprehenderit in qui voluptate et aliqua
					laborum laborum aliquip est ex excepteur ad et. Nulla sit irure nisi
					magna quis laborum labore ea. Deserunt occaecat nisi ut ullamco amet
					aliquip excepteur velit aliqua duis. Aute proident sit consequat dolor
					nulla amet reprehenderit. Laborum magna consectetur nulla est commodo
					in enim dolore anim. Irure voluptate consequat quis velit duis velit
					exercitation ipsum quis deserunt.
				</div>
				<div className="blog-basics-exp">
					Consequat aute quis voluptate labore deserunt amet quis cupidatat
					deserunt commodo est. Culpa culpa laborum proident commodo veniam
					laboris. Culpa magna elit quis reprehenderit in officia culpa cillum
					occaecat cillum do nostrud aliqua. Enim incididunt ipsum aute tempor
					cillum deserunt aliqua aute id Lorem. Consectetur fugiat ullamco eu
					enim.
				</div>
				<div className="blog-basics-exp">
					Dolore tempor cupidatat veniam laborum officia sit deserunt nisi ea
					elit. Laboris mollit quis aliqua amet amet proident aliqua enim
					reprehenderit. Reprehenderit aliqua ut irure laboris fugiat veniam
					minim tempor qui ea incididunt.
				</div>
				<div className="blog-basics-exp">
					Incididunt velit consectetur aliqua ad sint. Quis magna exercitation
					do excepteur incididunt sint est nostrud sit aute ad fugiat. Do
					voluptate laborum cupidatat cupidatat mollit dolor nostrud Lorem et
					consequat. Deserunt deserunt aliquip minim consequat proident dolore.
					Excepteur quis commodo fugiat eu. Consequat ex id in excepteur
					reprehenderit ea fugiat ullamco consectetur ad magna.
				</div>
			</div>
			<div className="blog-author-info"></div>
		</div>
	);
}

export default BlogPage;
