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
      <SidebarHeader className="bg-wdl-main border-b-1">header</SidebarHeader>
      <SidebarContent className="bg-wdl-main">
        <NavMain />
      </SidebarContent>
      <SidebarFooter className="bg-wdl-main border-t-1">footer</SidebarFooter>
    </Sidebar>
  );
};

export { AppSidebar };
