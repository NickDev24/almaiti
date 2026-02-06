import { useState, useEffect } from 'react';
import { servicesAPI, productsAPI, galleryAPI, clientsAPI, settingsAPI, testimonialsAPI, blogAPI } from '../utils/api';

// ========== useServices Hook ==========
export function useServices() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await servicesAPI.getAll();
            setData(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const create = async (item: any) => {
        try {
            const newItem = await servicesAPI.create(item);
            setData([...data, newItem]);
            return newItem;
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    const update = async (id: string, item: any) => {
        try {
            const updated = await servicesAPI.update(id, item);
            setData(data.map(d => d.id === id ? updated : d));
            return updated;
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    const remove = async (id: string) => {
        try {
            await servicesAPI.delete(id);
            setData(data.filter(d => d.id !== id));
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    return { data, loading, error, create, update, remove, refresh: fetchData };
}

// ========== useProducts Hook ==========
export function useProducts() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await productsAPI.getAll();
            setData(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const create = async (item: any) => {
        try {
            const newItem = await productsAPI.create(item);
            setData([...data, newItem]);
            return newItem;
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    const update = async (id: string, item: any) => {
        try {
            const updated = await productsAPI.update(id, item);
            setData(data.map(d => d.id === id ? updated : d));
            return updated;
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    const remove = async (id: string) => {
        try {
            await productsAPI.delete(id);
            setData(data.filter(d => d.id !== id));
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    return { data, loading, error, create, update, remove, refresh: fetchData };
}

// ========== useGallery Hook ==========
export function useGallery() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await galleryAPI.getAll();
            setData(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const create = async (item: any) => {
        try {
            const newItem = await galleryAPI.create(item);
            setData([...data, newItem]);
            return newItem;
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    const update = async (id: string, item: any) => {
        try {
            const updated = await galleryAPI.update(id, item);
            setData(data.map(d => d.id === id ? updated : d));
            return updated;
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    const remove = async (id: string) => {
        try {
            await galleryAPI.delete(id);
            setData(data.filter(d => d.id !== id));
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    return { data, loading, error, create, update, remove, refresh: fetchData };
}

// ========== useClients Hook ==========
export function useClients() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await clientsAPI.getAll();
            setData(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const create = async (item: any) => {
        try {
            const newItem = await clientsAPI.create(item);
            setData([...data, newItem]);
            return newItem;
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    const update = async (id: string, item: any) => {
        try {
            const updated = await clientsAPI.update(id, item);
            setData(data.map(d => d.id === id ? updated : d));
            return updated;
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    const remove = async (id: string) => {
        try {
            await clientsAPI.delete(id);
            setData(data.filter(d => d.id !== id));
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    return { data, loading, error, create, update, remove, refresh: fetchData };
}

// ========== useSettings Hook ==========
export function useSettings() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await settingsAPI.get();
            setData(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const update = async (settings: any) => {
        try {
            const updated = await settingsAPI.update(settings);
            setData(updated);
            return updated;
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    return { data, loading, error, update, refresh: fetchData };
}

// ========== useTestimonials Hook ==========
export function useTestimonials() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await testimonialsAPI.getAll();
            setData(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const create = async (item: any) => {
        try {
            const newItem = await testimonialsAPI.create(item);
            setData([...data, newItem]);
            return newItem;
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    const update = async (id: string, item: any) => {
        try {
            const updated = await testimonialsAPI.update(id, item);
            setData(data.map(d => d.id === id ? updated : d));
            return updated;
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    const remove = async (id: string) => {
        try {
            await testimonialsAPI.delete(id);
            setData(data.filter(d => d.id !== id));
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    return { data, loading, error, create, update, remove, refresh: fetchData };
}

// ========== useBlog Hook ==========
export function useBlog() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await blogAPI.getAll();
            setData(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const create = async (item: any) => {
        try {
            const newItem = await blogAPI.create(item);
            setData([...data, newItem]);
            return newItem;
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    const update = async (id: string, item: any) => {
        try {
            const updated = await blogAPI.update(id, item);
            setData(data.map(d => d.id === id ? updated : d));
            return updated;
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    const remove = async (id: string) => {
        try {
            await blogAPI.delete(id);
            setData(data.filter(d => d.id !== id));
        } catch (err: any) {
            setError(err.message);
            throw err;
        }
    };

    return { data, loading, error, create, update, remove, refresh: fetchData };
}
