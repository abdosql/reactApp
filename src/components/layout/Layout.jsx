import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Breadcrumb from '../common/Breadcrumb';
import {
  LayoutWrapper,
  MainContent,
  PageContent
} from '../../styles/components/LayoutStyles';

const Layout = () => {
  const location = useLocation();
  
  const getBreadcrumbItems = () => {
    const path = location.pathname;
    const items = [
      {
        label: 'Home',
        onClick: () => console.log('Navigate to Home')
      }
    ];

    const pathSegments = path.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      items.push({
        label: pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1),
      });
    }

    return items;
  };

  return (
    <LayoutWrapper>
      <Sidebar />
      <MainContent>
        <Navbar />
        <PageContent>
          <Breadcrumb items={getBreadcrumbItems()} />
          <Outlet />
        </PageContent>
      </MainContent>
    </LayoutWrapper>
  );
};

export default Layout; 