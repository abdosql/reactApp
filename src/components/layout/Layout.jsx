import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Breadcrumb from '../common/Breadcrumb';
import {
  LayoutWrapper,
  MainContent,
  PageContent
} from '../../styles/components/LayoutStyles';

const Layout = ({ children, breadcrumbItems = [] }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <MainContent>
        <Navbar />
        <PageContent>
          <Breadcrumb items={breadcrumbItems} />
          {children}
        </PageContent>
      </MainContent>
    </LayoutWrapper>
  );
};

export default Layout; 