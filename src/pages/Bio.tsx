import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const performancePhotos = [
	{ src: 'Miss Saigon playing.jpeg', alt: 'Miss Saigon on Broadway' },
	{ src: 'Chihiro.MET Opera.jpg', alt: 'Metropolitan Opera' },
	{ src: 'timpani-carnegie.jpeg', alt: 'Timpani at Carnegie Hall' },
	{ src: 'Chihiro-Radio City Christmas Spactacular.jpg', alt: 'Radio City Christmas Spectacular' },
	{ src: 'radio city me.jpg', alt: 'Radio City' },
	{ src: 'Cinderella Pit.jpg', alt: 'Cinderella Broadway pit' },
	{ src: 'chihiro plays Cinderella Broadway.jpg', alt: 'Cinderella Broadway' },
	{ src: 'GMA-Selma.jpg', alt: 'Good Morning America' },
	{ src: 'Chihiro-SA.Dartmouth (Colin Lowry).jpeg', alt: 'Performance at Dartmouth' },
	{ src: 'GLANK-trayo.jpg', alt: 'GLANK trio' },
	{ src: 'kcs-cymbals.jpg', alt: 'Kansas City Symphony' },
	{ src: 'Glassmen-timpani.jpg', alt: 'Glassmen Drum & Bugle Corps' },
	{ src: 'carnegie-chihiro.jpg', alt: 'Carnegie Hall' },
	{ src: 'miss-saigon-sign.webp', alt: 'Miss Saigon marquee' },
	{ src: 'radio-city-jacket.webp', alt: 'Radio City backstage' },
	{ src: 'mozart-jungle.jpg', alt: 'Mozart in the Jungle' },
];

function PhotoCarousel() {
	const [index, setIndex] = useState(0);
	const [displayedIndex, setDisplayedIndex] = useState(0);
	const [opacity, setOpacity] = useState(1);
	const [visible, setVisible] = useState(true);
	const containerRef = useRef<HTMLDivElement>(null);

	const goTo = (newIndex: number) => {
		setOpacity(0);
		setTimeout(() => {
			setDisplayedIndex(newIndex);
			setIndex(newIndex);
			setOpacity(1);
		}, 500);
	};

	const prev = () => goTo((index - 1 + performancePhotos.length) % performancePhotos.length);
	const next = () => goTo((index + 1) % performancePhotos.length);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => setVisible(entry.isIntersecting),
			{ threshold: 0.3 }
		);
		if (containerRef.current) observer.observe(containerRef.current);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!visible) return;
		const timer = setInterval(() => {
			setOpacity(0);
			setTimeout(() => {
				setDisplayedIndex((i) => {
					const next = (i + 1) % performancePhotos.length;
					setIndex(next);
					return next;
				});
				setOpacity(1);
			}, 500);
		}, 4000);
		return () => clearInterval(timer);
	}, [visible]);

	const { src, alt } = performancePhotos[displayedIndex];

	return (
		<div ref={containerRef} className='relative mt-10 mb-2'>
			<div className='bg-off-white flex items-center justify-center' style={{ minHeight: '260px', maxHeight: '420px' }}>
				<img
					src={`/images/${src}`}
					alt={alt}
					className='w-full h-auto max-h-[420px] object-contain'
					style={{ opacity, transition: 'opacity 0.5s ease-in-out' }}
				/>
			</div>
			<button
				onClick={prev}
				aria-label='Previous photo'
				className='absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white px-3 py-4 transition-colors'
			>
				‹
			</button>
			<button
				onClick={next}
				aria-label='Next photo'
				className='absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white px-3 py-4 transition-colors'
			>
				›
			</button>
			<div className='flex justify-center gap-1.5 mt-3'>
				{performancePhotos.map((_, i) => (
					<button
						key={i}
						onClick={() => setIndex(i)}
						aria-label={`Go to photo ${i + 1}`}
						className={`w-1.5 h-1.5 rounded-full transition-colors ${i === index ? 'bg-accent' : 'bg-light-gray'}`}
					/>
				))}
			</div>
		</div>
	);
}

const HEADSHOT = '/images/chihiro-cym.jpg';

export default function Bio() {
	return (
		<div className='pt-[80px]'>
			{/* HERO */}
			<section className='grid grid-cols-1 md:grid-cols-2 min-h-[85vh]'>
				<div className='relative bg-off-white overflow-hidden md:min-h-0'>
					<img
						src={HEADSHOT}
						alt='Chihiro Shibayama'
						className='w-full h-auto block md:absolute md:inset-0 md:h-full md:object-cover md:object-top'
					/>
				</div>
				<div className='flex flex-col justify-center px-6 lg:px-16 py-16 lg:py-24 border-l border-light-gray'>
					<div className='flex items-center gap-3 mb-5'>
						<img
							src='/images/shibayama_logo.svg'
							alt='Shibayama Percussion Studio'
							className='w-8 h-8 opacity-80 flex-shrink-0'
						/>
						<p className='text-xs tracking-[0.25em] uppercase text-black/70 font-medium'>Biography</p>
					</div>
					<h1
						className='font-serif font-normal text-black mb-8 leading-tight'
						style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)' }}
					>
						Chihiro
						<br />
						<em className='text-accent'>Shibayama.</em>
					</h1>
					<p className='text-[17px] text-text-gray font-light leading-relaxed mb-10'>
						After more than 25 years performing on some of music's most demanding stages — from Broadway and the Metropolitan Opera to Carnegie Hall and national television — Chihiro Shibayama has come to focus on what she sees as music's most important work: helping musicians build careers that are creative, sustainable, and authentically their own.
					</p>
					<div className='border-l-[3px] border-accent px-6 py-5 bg-off-white'>
						<p className='font-serif italic text-[18px] text-black leading-snug mb-2'>"…impressive soloist…"</p>
						<p className='text-[12px] tracking-[0.2em] uppercase text-mid-gray'>— The New York Times</p>
					</div>
				</div>
			</section>

			{/* MAIN BIO */}
			<section className='max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24'>
				<div className='max-w-3xl'>

					{/* About */}
					<p className='text-[17px] text-text-gray font-light leading-relaxed mb-6'>
						Based in Longmont, Colorado, Chihiro runs Shibayama Percussion Studio, where she teaches students of all ages and levels in person and online, drawing on more than two decades of teaching experience. She is currently developing <em>Creating Your Own Path: How to Build a Sustainable Music Career</em>, a webinar drawing on the strategies and lessons she's gathered navigating a multi-decade career across genres, cities, and life stages.
					</p>
					<p className='text-[17px] text-text-gray font-light leading-relaxed mb-6'>
						As a performer, Chihiro continues to play with the Longmont Symphony, the Colorado Symphony, and other regional ensembles, and she actively seeks collaborations with musicians in her community.
					</p>
					<Link to='/teaching' className='text-link'>View lesson options →</Link>

					<PhotoCarousel />

					{/* Selected Credits */}
					<h2 className='font-serif text-[26px] text-black mt-12 mb-5 pt-12 border-t border-light-gray'>
						Selected <em>Credits</em>
					</h2>

					<h3 className='font-serif text-[20px] text-black mt-8 mb-4'>
						Broadway & <em>Television</em>
					</h3>
					<p className='text-[17px] text-text-gray font-light leading-relaxed mb-6'>
						Chihiro was a percussionist for the Broadway run of <em>Miss Saigon</em> (March 2017 – January 2018), and made her Broadway debut as one of three on-stage musicians for <em>The Cherry Orchard</em> starring Diane Lane, produced by The Roundabout Theatre Company. She has performed for the Radio City Christmas Spectacular, NBC's <em>Good Morning America</em> with John Legend and Common, the Daytime Emmy Awards, and Broadway productions including <em>The Addams Family</em>, <em>Anything Goes</em>, <em>Cinderella</em>, and <em>West Side Story</em>.
					</p>

					<h3 className='font-serif text-[20px] text-black mt-8 mb-4'>
						Opera & <em>Orchestra</em>
					</h3>
					<p className='text-[17px] text-text-gray font-light leading-relaxed mb-6'>
						Chihiro was one of three on-stage percussion soloists in the U.S. premiere of Tan Dun's opera <em>TEA – A Mirror of Soul</em> at The Santa Fe Opera (2007), the East Coast premiere at the Opera Company of Philadelphia (2009), and the Canadian premiere at the Vancouver Opera (2013). She has performed with The Metropolitan Opera, Kansas City Symphony, San Diego Symphony, New Jersey Symphony, the Longmont Symphony, the Colorado Symphony, and many others.
					</p>

					<h3 className='font-serif text-[20px] text-black mt-8 mb-4'>
						New Music & <em>Chamber</em>
					</h3>
					<p className='text-[17px] text-text-gray font-light leading-relaxed mb-6'>
						A passionate new music advocate, Chihiro has performed and recorded with Alarm Will Sound, American Contemporary Music Ensemble (ACME), S.E.M. Ensemble, New Juilliard Ensemble, and AXIOM. She toured China in 2015 to perform at the Beijing Modern Music Festival, and has appeared on Amazon Prime's <em>Mozart in the Jungle</em>. She is co-founder of{' '}
						<a href='https://www.musefriends.org' target='_blank' rel='noopener noreferrer' className='text-accent no-underline border-b border-accent/30 hover:border-accent'>
							Multicultural Sonic Evolution (MuSE)
						</a>.
					</p>

					<h3 className='font-serif text-[20px] text-black mt-8 mb-4'>
						<em>Teaching</em>
					</h3>
					<p className='text-[17px] text-text-gray font-light leading-relaxed mb-6'>
						Chihiro has dedicated more than 20 years to percussion education. She served as percussion faculty at Diller-Quaile School of Music for seven years and Third Street Music Settlement for two years. From 2007 to 2010 she was faculty at The Juilliard Summer Percussion Seminar. Her masterclass <em>My Way to Broadway</em> has been presented at multiple universities and the Juilliard Summer Percussion Masterclass Series.
					</p>
					<p className='text-[17px] text-text-gray font-light leading-relaxed mb-6'>
						She is currently accepting private students in Longmont, Colorado and online worldwide.
					</p>
					<Link to='/teaching' className='text-link'>View lesson options →</Link>

					{/* Background & Training */}
					<h2 className='font-serif text-[26px] text-black mt-12 mb-5 pt-12 border-t border-light-gray'>
						Background & <em>Training</em>
					</h2>
					<p className='text-[17px] text-text-gray font-light leading-relaxed mb-6'>
						A native of Yokohama, Japan, Chihiro graduated from the Interlochen Arts Academy with a performance award in 2003. She earned her Bachelor of Music and Master of Music degrees from The Juilliard School in 2007 and 2009. Her mentors include Daniel Druckman, Greg Zuber, Markus Rhoten, Joe Pereira, Roland Kohloff, Keith Aleo, Mariko Okada, and John Alfieri.
					</p>

					{/* Endorsements */}
					<h2 className='font-serif text-[26px] text-black mt-12 mb-5 pt-12 border-t border-light-gray'>
						<em>Endorsements</em>
					</h2>
					<p className='text-[17px] text-text-gray font-light leading-relaxed'>
						Chihiro proudly endorses Pearl Adams Concert Percussion and Dragonfly Percussion.
					</p>
				</div>

			</section>

			{/* ENDORSEMENTS */}
			<div className='border-t border-b border-light-gray px-6 lg:px-16 py-10 bg-off-white flex flex-col sm:flex-row items-start sm:items-center gap-8'>
				<p className='text-[12px] tracking-[0.2em] uppercase text-mid-gray whitespace-nowrap'>Proudly endorses</p>
				<div className='flex items-center gap-10 flex-wrap'>
					<a href='https://pearldrum.com/en/products/adams-percussion' target='_blank' rel='noopener noreferrer' className='no-underline opacity-70 hover:opacity-100 transition-opacity'>
						<img src='/images/pearl-adams-black-logo.png' alt='Pearl Adams Concert Percussion' className='h-10 w-auto' />
					</a>
					<a href='https://dragonflypercussion.com/' target='_blank' rel='noopener noreferrer' className='text-[15px] text-text-gray no-underline border-b border-text-gray/50 hover:border-text-gray transition-colors'>
						Dragonfly Percussion
					</a>
				</div>
			</div>
		</div>
	);
}
