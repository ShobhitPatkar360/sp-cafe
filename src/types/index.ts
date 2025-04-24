/**
 * Contact form data interface
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Menu item interface
 */
export interface MenuItem {
  title: string;
  description: string;
  price: string;
  image: string;
}

/**
 * Testimonial interface
 */
export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

/**
 * Team member interface
 */
export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

/**
 * Gallery image interface
 */
export interface GalleryImage {
  src: string;
  alt: string;
}