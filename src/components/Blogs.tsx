import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Clock, User, ArrowRight, Search, Filter } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'freelancing' | 'success' | 'career' | 'technology';
  readTime: number;
  author: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Unleashing Freelancing Success',
    description: 'Hundreds of companies waiting for you, start applying and begin your journey today',
    imageUrl: '/api/placeholder/400/300',
    category: 'freelancing',
    readTime: 5,
    author: 'Sarah Johnson',
    date: '2024-03-15'
  },
  {
    id: 2,
    title: 'Building Your Digital Portfolio',
    description: 'Learn how to showcase your work effectively and attract more clients',
    imageUrl: '/api/placeholder/400/300',
    category: 'career',
    readTime: 7,
    author: 'Mike Chen',
    date: '2024-03-14'
  },
  {
    id: 3,
    title: 'Top Skills for 2024',
    description: 'Discover the most in-demand skills that companies are looking for',
    imageUrl: '/api/placeholder/400/300',
    category: 'technology',
    readTime: 6,
    author: 'Alex Turner',
    date: '2024-03-13'
  },
  {
    id: 4,
    title: 'Success Stories: Teen Entrepreneurs',
    description: 'Inspiring stories of teenagers who built successful careers',
    imageUrl: '/api/placeholder/400/300',
    category: 'success',
    readTime: 8,
    author: 'Rachel Woods',
    date: '2024-03-12'
  }
];

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Freelancing', value: 'freelancing' },
  { label: 'Success Stories', value: 'success' },
  { label: 'Career', value: 'career' },
  { label: 'Technology', value: 'technology' }
];

const BlogCard: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative group">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime} min read
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {post.description}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg flex items-center justify-center group"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const FunBlogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Book className="w-12 h-12 text-blue-600" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Fun Blogs
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            An investment in knowledge pays the best interest, read on.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white cursor-pointer w-full md:w-48"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-600">No blogs found matching your criteria.</p>
          </motion.div>
        )}

        {/* Load More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Load More Articles
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FunBlogs;