import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '../base/sidebar';
import { NavMain } from './nav/nav-main';

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>header</SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>footer</SidebarFooter>
    </Sidebar>
  );
};

export { AppSidebar };
