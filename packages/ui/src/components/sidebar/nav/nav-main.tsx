'use client';

import { Circle, Mail } from 'lucide-react';
import { SidebarGroup, SidebarGroupContent } from '../../base/sidebar';
import { NavItems } from './nav-items';

const items = [
  {
    title: 'Activity',
    icon: Circle,
    url: '/',
  },
  {
    title: 'Inbox',
    icon: Mail,
    url: '/test',
  },
];

const NavMain = () => {
  return (
    <SidebarGroup className="p-0">
      <SidebarGroupContent className="flex flex-col gap-0">
        <NavItems items={items} />
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export { NavMain };
