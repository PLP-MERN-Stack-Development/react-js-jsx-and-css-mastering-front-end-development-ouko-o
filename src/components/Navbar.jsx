import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Navbar = ({ onThemeToggle, isDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">PLP Task Manager</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={onThemeToggle}
            >
              {isDarkMode ? '🌞 Light mode' : '🌙 Dark mode'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onThemeToggle: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired
};

export default Navbar;