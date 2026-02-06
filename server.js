import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));
app.use('/data', express.static(path.join(__dirname, 'public/data')));

// Helper functions para leer/escribir JSON
const readJSON = async (filename) => {
  try {
    const filePath = path.join(__dirname, 'public/data', filename);
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error.message);
    // Si el archivo no existe, devolver array vacío o objeto según el archivo
    if (filename === 'settings.json') {
      return {
        appName: 'Almaiti Hair Studio',
        phone: '5493876234866',
        address: 'Pasaje la tablada 159, Salta Capital',
        instagram: 'https://www.instagram.com/almaitii_aii/',
        facebook: 'https://www.facebook.com/almaitistudio/',
        profileImage: '/img/principal.jpg',
        horarios: 'Lunes a Sábado: 9:00 - 22:00hs',
        email: 'contacto@almaiti.com'
      };
    }
    return [];
  }
};

const writeJSON = async (filename, data) => {
  try {
    const filePath = path.join(__dirname, 'public/data', filename);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error(`Error writing to ${filename}:`, error);
    return false;
  }
};

// ========== API ENDPOINTS para SERVICIOS ========== 
app.get('/api/services', async (req, res) => {
  const services = await readJSON('services.json');
  res.json(services);
});

app.post('/api/services', async (req, res) => {
  try {
    const services = await readJSON('services.json');
    const newService = {
      id: String(Date.now()),
      ...req.body
    };
    services.push(newService);
    await writeJSON('services.json', services);
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ error: 'Error creating service' });
  }
});

app.put('/api/services/:id', async (req, res) => {
  try {
    const services = await readJSON('services.json');
    const index = services.findIndex(s => s.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Service not found' });
    }
    services[index] = { ...services[index], ...req.body };
    await writeJSON('services.json', services);
    res.json(services[index]);
  } catch (error) {
    res.status(500).json({ error: 'Error updating service' });
  }
});

app.delete('/api/services/:id', async (req, res) => {
  try {
    const services = await readJSON('services.json');
    const filtered = services.filter(s => s.id !== req.params.id);
    if (filtered.length === services.length) {
      return res.status(404).json({ error: 'Service not found' });
    }
    await writeJSON('services.json', filtered);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting service' });
  }
});

// ========== API ENDPOINTS para PRODUCTS ==========
app.get('/api/products', async (req, res) => {
  const products = await readJSON('products.json');
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  try {
    const products = await readJSON('products.json');
    const newProduct = {
      id: String(Date.now()),
      ...req.body
    };
    products.push(newProduct);
    await writeJSON('products.json', products);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error creating product' });
  }
});

app.put('/api/products/:id', async (req, res) => {
  try {
    const products = await readJSON('products.json');
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }
    products[index] = { ...products[index], ...req.body };
    await writeJSON('products.json', products);
    res.json(products[index]);
  } catch (error) {
    res.status(500).json({ error: 'Error updating product' });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  try {
    const products = await readJSON('products.json');
    const filtered = products.filter(p => p.id !== req.params.id);
    if (filtered.length === products.length) {
      return res.status(404).json({ error: 'Product not found' });
    }
    await writeJSON('products.json', filtered);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting product' });
  }
});

// ========== API ENDPOINTS para GALLERY ==========
app.get('/api/gallery', async (req, res) => {
  const gallery = await readJSON('gallery.json');
  res.json(gallery);
});

app.post('/api/gallery', async (req, res) => {
  try {
    const gallery = await readJSON('gallery.json');
    const newItem = {
      id: String(Date.now()),
      ...req.body
    };
    gallery.push(newItem);
    await writeJSON('gallery.json', gallery);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Error creating gallery item' });
  }
});

app.put('/api/gallery/:id', async (req, res) => {
  try {
    const gallery = await readJSON('gallery.json');
    const index = gallery.findIndex(g => g.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Gallery item not found' });
    }
    gallery[index] = { ...gallery[index], ...req.body };
    await writeJSON('gallery.json', gallery);
    res.json(gallery[index]);
  } catch (error) {
    res.status(500).json({ error: 'Error updating gallery item' });
  }
});

app.delete('/api/gallery/:id', async (req, res) => {
  try {
    const gallery = await readJSON('gallery.json');
    const filtered = gallery.filter(g => g.id !== req.params.id);
    if (filtered.length === gallery.length) {
      return res.status(404).json({ error: 'Gallery item not found' });
    }
    await writeJSON('gallery.json', filtered);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting gallery item' });
  }
});

// ========== API ENDPOINTS para CLIENTS ==========
app.get('/api/clients', async (req, res) => {
  const clients = await readJSON('clients.json');
  res.json(clients);
});

app.post('/api/clients', async (req, res) => {
  try {
    const clients = await readJSON('clients.json');
    const newClient = {
      id: String(Date.now()),
      ...req.body
    };
    clients.push(newClient);
    await writeJSON('clients.json', clients);
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ error: 'Error creating client' });
  }
});

app.put('/api/clients/:id', async (req, res) => {
  try {
    const clients = await readJSON('clients.json');
    const index = clients.findIndex(c => c.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Client not found' });
    }
    clients[index] = { ...clients[index], ...req.body };
    await writeJSON('clients.json', clients);
    res.json(clients[index]);
  } catch (error) {
    res.status(500).json({ error: 'Error updating client' });
  }
});

app.delete('/api/clients/:id', async (req, res) => {
  try {
    const clients = await readJSON('clients.json');
    const filtered = clients.filter(c => c.id !== req.params.id);
    if (filtered.length === clients.length) {
      return res.status(404).json({ error: 'Client not found' });
    }
    await writeJSON('clients.json', filtered);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting client' });
  }
});

// ========== API ENDPOINTS para SETTINGS ==========
app.get('/api/settings', async (req, res) => {
  const settings = await readJSON('settings.json');
  res.json(settings);
});

app.put('/api/settings', async (req, res) => {
  try {
    await writeJSON('settings.json', req.body);
    res.json(req.body);
  } catch (error) {
    res.status(500).json({ error: 'Error updating settings' });
  }
});

// ========== API ENDPOINTS para TESTIMONIALS ==========
app.get('/api/testimonials', async (req, res) => {
  const testimonials = await readJSON('testimonials.json');
  res.json(testimonials);
});

app.post('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await readJSON('testimonials.json');
    const newTestimonial = {
      id: Date.now().toString(),
      ...req.body
    };
    testimonials.push(newTestimonial);
    await writeJSON('testimonials.json', testimonials);
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(500).json({ error: 'Error creating testimonial' });
  }
});

app.put('/api/testimonials/:id', async (req, res) => {
  try {
    const testimonials = await readJSON('testimonials.json');
    const index = testimonials.findIndex(t => t.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    testimonials[index] = { ...testimonials[index], ...req.body };
    await writeJSON('testimonials.json', testimonials);
    res.json(testimonials[index]);
  } catch (error) {
    res.status(500).json({ error: 'Error updating testimonial' });
  }
});

app.delete('/api/testimonials/:id', async (req, res) => {
  try {
    const testimonials = await readJSON('testimonials.json');
    const filtered = testimonials.filter(t => t.id !== req.params.id);
    if (filtered.length === testimonials.length) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    await writeJSON('testimonials.json', filtered);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting testimonial' });
  }
});

// ========== API ENDPOINTS para BLOG ==========
app.get('/api/blog', async (req, res) => {
  const blog = await readJSON('blog.json');
  res.json(blog);
});

app.post('/api/blog', async (req, res) => {
  try {
    const blog = await readJSON('blog.json');
    const newPost = {
      id: Date.now().toString(),
      ...req.body
    };
    blog.push(newPost);
    await writeJSON('blog.json', blog);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Error creating blog post' });
  }
});

app.put('/api/blog/:id', async (req, res) => {
  try {
    const blog = await readJSON('blog.json');
    const index = blog.findIndex(p => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    blog[index] = { ...blog[index], ...req.body };
    await writeJSON('blog.json', blog);
    res.json(blog[index]);
  } catch (error) {
    res.status(500).json({ error: 'Error updating blog post' });
  }
});

app.delete('/api/blog/:id', async (req, res) => {
  try {
    const blog = await readJSON('blog.json');
    const filtered = blog.filter(p => p.id !== req.params.id);
    if (filtered.length === blog.length) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    await writeJSON('blog.json', filtered);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting blog post' });
  }
});

// ========== SERVIR ARCHIVOS ESTÁTICOS ==========
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✨ Almaiti Server running on port ${PORT}`);
  console.log(`📁 API endpoints available at http://localhost:${PORT}/api/`);
});