// Testimonials shown on the Coaching page.
// To add one: copy a block, fill it in, and save. `title` and `photo` are optional.
// Photos go in public/images/testimonials/ (square, about 320x320).
// When there are more than fit on screen (2 on desktop, 1 on phones), arrows appear and it becomes a swipeable carousel.

export interface Testimonial {
  quote: string
  name: string
  title?: string
  photo?: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'I just went through your quiz and thought it was so great. The statements were thought-provoking, and the whole experience was really seamless. I loved the final analysis, along with the three next steps.',
    name: 'Jennifer Rosenfeld',
    title: 'Composer, Pianist, Arts Entrepreneurship Educator and Coach',
    photo: '/images/testimonials/jennifer-rosenfeld.jpg',
  },
  {
    quote: 'The freelance world can often seem insecure and capricious. With amazing clarity, Chihiro helps us to be better aware of our current strengths and weaknesses and then gives us very practical steps to take matters into our own hands! Her experience and insight provide a shortcut to improving our freelance life!',
    name: 'Gabrielle',
    title: 'Freelance violinist',
  },
  {
    quote: 'Wow, I love this! Even if you already have a good idea of what you need to do or where you want to go, this is such a great opportunity to step back and rethink what you need to do, what you want to do, and what you’re capable of doing.\n\nI highly recommend this to everyone, not just musicians! Take the quiz and see where you are right now. It’s a great way to reflect on yourself and your next steps!',
    name: 'Megumi',
    title: 'Percussionist',
  },
  {
    quote: 'Chihiro is exactly the kind of expert and coach you should want if you are looking to get started in the freelance musician world! As a graduate of the Juilliard School, and a performer both at the Metropolitan Opera and on Broadway, she has exactly the expertise and knowledge to help people accomplish exactly what she did. Her 5 Pillars quiz is a great start to uncover your current strengths and weaknesses relating to the field. Anyone who is able to work with her would be very wise to do so!',
    name: 'Sean Swenson',
    title: 'Freelance percussionist & timpanist',
  },
]
