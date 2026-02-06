export interface Service {
  id: string;
  title: string;
  description: string;
  priceStart: string;
  duration: string; // e.g., "2h"
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  image?: string;
}

export interface GalleryItem {
  id: string;
  beforeUrl?: string;
  afterUrl: string;
  category: string;
  title: string;
}

export interface Appointment {
  id: string;
  clientName: string;
  serviceId: string;
  date: string; // ISO string
  status: 'pending' | 'confirmed' | 'cancelled';
  contact: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  content?: string;
}