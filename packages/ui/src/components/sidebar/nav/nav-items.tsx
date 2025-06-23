import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../../base/sidebar';

interface NavItem {
  title: string;
  icon: React.ElementType;
  url: string;
}

interface NavItemsProps {
  items: NavItem[];
}

const NavItems = ({ items }: NavItemsProps) => {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton tooltip={item.title}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export { NavItems };
