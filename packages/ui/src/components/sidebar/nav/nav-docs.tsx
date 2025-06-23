'use client';

import { CircleAlert, Mail } from 'lucide-react';
import {
  SidebarGroup,
  SidebarGroupLabel,
  useSidebar,
} from '../../base/sidebar';
import { NavItems } from './nav-items';

const items = [
  {
    title: 'Quick Create',
    icon: CircleAlert,
    url: '/test',
  },
  {
    title: 'Inbox',
    icon: Mail,
    url: '/test',
  },
];

const NavDocuments = () => {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="flex flex-col gap-2">
      <SidebarGroupLabel>Documents</SidebarGroupLabel>
      <NavItems items={items} />
    </SidebarGroup>
  );
};

export { NavDocuments };
