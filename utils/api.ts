// API Base URL - Vite proxy maneja /api en desarrollo
const API_BASE = '/api';

// Generic API call helper
async function apiCall(endpoint: string, options?: RequestInit) {
    try {
        const response = await fetch(`${API_BASE}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            ...options,
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        // DELETE requests return 204 No Content
        if (response.status === 204) {
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('API Call failed:', error);
        throw error;
    }
}

// ========== SERVICES API ==========
export const servicesAPI = {
    getAll: () => apiCall('/services'),
    create: (data: any) => apiCall('/services', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
    update: (id: string, data: any) => apiCall(`/services/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),
    delete: (id: string) => apiCall(`/services/${id}`, {
        method: 'DELETE',
    }),
};

// ========== PRODUCTS API ==========
export const productsAPI = {
    getAll: () => apiCall('/products'),
    create: (data: any) => apiCall('/products', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
    update: (id: string, data: any) => apiCall(`/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),
    delete: (id: string) => apiCall(`/products/${id}`, {
        method: 'DELETE',
    }),
};

// ========== GALLERY API ==========
export const galleryAPI = {
    getAll: () => apiCall('/gallery'),
    create: (data: any) => apiCall('/gallery', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
    update: (id: string, data: any) => apiCall(`/gallery/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),
    delete: (id: string) => apiCall(`/gallery/${id}`, {
        method: 'DELETE',
    }),
};

// ========== CLIENTS API ==========
export const clientsAPI = {
    getAll: () => apiCall('/clients'),
    create: (data: any) => apiCall('/clients', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
    update: (id: string, data: any) => apiCall(`/clients/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),
    delete: (id: string) => apiCall(`/clients/${id}`, {
        method: 'DELETE',
    }),
};

// ========== SETTINGS API ==========
export const settingsAPI = {
    get: () => apiCall('/settings'),
    update: (data: any) => apiCall('/settings', {
        method: 'PUT',
        body: JSON.stringify(data),
    }),
};

// ========== TESTIMONIALS API ==========
export const testimonialsAPI = {
    getAll: () => apiCall('/testimonials'),
    create: (data: any) => apiCall('/testimonials', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
    update: (id: string, data: any) => apiCall(`/testimonials/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),
    delete: (id: string) => apiCall(`/testimonials/${id}`, {
        method: 'DELETE',
    }),
};

// ========== BLOG API ==========
export const blogAPI = {
    getAll: () => apiCall('/blog'),
    create: (data: any) => apiCall('/blog', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
    update: (id: string, data: any) => apiCall(`/blog/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    }),
    delete: (id: string) => apiCall(`/blog/${id}`, {
        method: 'DELETE',
    }),
};
