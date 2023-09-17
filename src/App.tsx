import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import {TopNavigation} from "./navigation/top-navigation/TopNavigation";

function App() {
    const [currentPage, setCurrentPage] = React.useState<string>('house');

    const handlePageChange = (page: string) => {
        setCurrentPage(page);
    }
    return (
      <div className="App">
          <TopNavigation onPageChange={handlePageChange} />
          {currentPage === 'house' && <Home />}
      </div>
    );
}

export default App;
