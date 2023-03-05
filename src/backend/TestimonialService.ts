import Testimonials from '../assets/Testimonials.json';
import { Testimonial } from '../type.d';

export { GetTestimonials }

const GetTestimonials = async() => {
    let testimonials: Testimonial[] = [];

    for (const testimonial of Testimonials) {
        let result = await fetch(process.env.PUBLIC_URL + testimonial.body);
        let html = await result.text();
        testimonials.push({
            fromName: testimonial.fromName,
            jobTitle: testimonial.jobTitle,
            company: testimonial.company,
            body: html
        })
    }

    return testimonials;
}