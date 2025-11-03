import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import ApiDataDisplay from './components/ApiDataDisplay';
import Card from './components/Card';

const AppContent = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Layout onThemeToggle={toggleTheme} isDarkMode={darkMode}>
      <div className="grid gap-6">
        <Card title="Task Management">
          <TaskManager />
        </Card>
        <ApiDataDisplay />
      </div>
    </Layout>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
