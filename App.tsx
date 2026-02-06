import React from 'react';
import { MemoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import AdminLayout from './components/AdminLayout';

// Public Pages
import PublicHome from './pages/PublicHome';
import PublicServices from './pages/PublicServices';
import PublicGallery from './pages/PublicGallery';
import PublicAbout from './pages/PublicAbout';
import PublicProducts from './pages/PublicProducts';
import PublicBlog from './pages/PublicBlog';
import BlogPostDetail from './pages/BlogPostDetail';
import Login from './pages/Login';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Admin Pages
import AdminDashboard from './pages/AdminDashboard';
import AdminServices from './pages/AdminServices';
import AdminProducts from './pages/AdminProducts';
import AdminGallery from './pages/AdminGallery';
import AdminClients from './pages/AdminClients';
import AdminSettings from './pages/AdminSettings';

// Wrapper for Public Routes to include standard Layout
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Layout>{children}</Layout>
);

// Wrapper for Admin Routes to include Admin Layout
const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AdminLayout>{children}</AdminLayout>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <MemoryRouter>
        <Routes>
          {/* Auth Route */}
          <Route path="/login" element={<Login />} />

          {/* Public Routes */}
          <Route path="/" element={<PublicRoute><PublicHome /></PublicRoute>} />
          <Route path="/services" element={<PublicRoute><PublicServices /></PublicRoute>} />
          <Route path="/gallery" element={<PublicRoute><PublicGallery /></PublicRoute>} />
          <Route path="/about" element={<PublicRoute><PublicAbout /></PublicRoute>} />
          <Route path="/products" element={<PublicRoute><PublicProducts /></PublicRoute>} />
          <Route path="/blog" element={<PublicRoute><PublicBlog /></PublicRoute>} />
          <Route path="/blog/:id" element={<PublicRoute><BlogPostDetail /></PublicRoute>} />
          <Route path="/privacy" element={<PublicRoute><Privacy /></PublicRoute>} />
          <Route path="/terms" element={<PublicRoute><Terms /></PublicRoute>} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/admin/services" element={<AdminRoute><AdminServices /></AdminRoute>} />
          <Route path="/admin/products" element={<AdminRoute><AdminProducts /></AdminRoute>} />
          <Route path="/admin/gallery" element={<AdminRoute><AdminGallery /></AdminRoute>} />
          <Route path="/admin/clients" element={<AdminRoute><AdminClients /></AdminRoute>} />
          <Route path="/admin/settings" element={<AdminRoute><AdminSettings /></AdminRoute>} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>
  );
};

export default App;