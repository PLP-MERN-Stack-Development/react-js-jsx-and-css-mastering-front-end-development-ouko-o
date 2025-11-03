import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

const ApiDataDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // DummyJSON returns English posts
        const skip = (page - 1) * 10;
        const response = await fetch(
          `https://dummyjson.com/posts?limit=10&skip=${skip}`
        );
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        const posts = Array.isArray(result.posts) ? result.posts : [];
        setData(prev => page === 1 ? posts : [...prev, ...posts]);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const filteredData = data.filter(item =>
    (item.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.body || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card title="Latest Posts" className="mt-6">
      <div className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search posts"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        {error && (
          <div className="text-red-500 dark:text-red-400">
            Error: {error}
          </div>
        )}

        <div className="grid gap-4">
          {filteredData.map(post => (
            <div
              key={post.id}
              className="p-4 border rounded-lg dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2">{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>

        {loading && <div className="text-center">Loading…</div>}

        {!loading && !error && (
          <div className="text-center">
            <Button
              onClick={() => setPage(prev => prev + 1)}
              variant="secondary"
            >
              Load more
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ApiDataDisplay;