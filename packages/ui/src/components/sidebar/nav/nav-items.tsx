import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../../base/sidebar';
import Link from 'next/link';

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
        <Link href={item.url} key={item.title}>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip={item.title}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </Link>
      ))}
    </SidebarMenu>
  );
};

export { NavItems };
