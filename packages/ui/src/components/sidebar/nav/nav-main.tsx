'use client';

import { Circle, Mail } from 'lucide-react';
import { SidebarGroup, SidebarGroupContent } from '../../base/sidebar';
import { NavItems } from './nav-items';

const items = [
  {
    title: 'Quick Create',
    icon: Circle,
    url: '/test',
  },
  {
    title: 'Inbox',
    icon: Mail,
    url: '/test',
  },
];

const NavMain = () => {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <NavItems items={items} />
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export { NavMain };
