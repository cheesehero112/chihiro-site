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
]
