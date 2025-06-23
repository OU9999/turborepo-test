import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '../base/sidebar';
import { NavDocuments } from './nav/nav-docs';
import { NavMain } from './nav/nav-main';

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>header</SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavDocuments />
      </SidebarContent>
      <SidebarFooter>footer</SidebarFooter>
    </Sidebar>
  );
};

export { AppSidebar };
