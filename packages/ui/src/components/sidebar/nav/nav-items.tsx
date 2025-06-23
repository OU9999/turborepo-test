import Link from 'next/link';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../../base/sidebar';
import { usePathname } from 'next/navigation';
import { cn } from '@workspace/ui/lib/utils';

interface NavItemData {
  title: string;
  icon: React.ElementType;
  url: string;
}

const NavItem = ({ title, icon: Icon, url }: NavItemData) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <Link href={url}>
      <SidebarMenuItem>
        <SidebarMenuButton
          className={cn(
            'bg-wdl-main hover:bg-wdl-main/70 rounded-none border-l-4 border-transparent py-6 pl-3 transition-colors',
            isActive &&
              'bg-wdl-main-active hover:bg-wdl-main-active/70 border-l-wdl-primary',
          )}
          tooltip={title}
          aria-current={isActive ? 'page' : undefined}
        >
          {Icon && <Icon />}
          <span>{title}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </Link>
  );
};

interface NavItemsProps {
  items: NavItemData[];
}

const NavItems = ({ items }: NavItemsProps) => {
  return (
    <SidebarMenu className="gap-0">
      {items.map((item) => (
        <NavItem
          key={item.title}
          title={item.title}
          icon={item.icon}
          url={item.url}
        />
      ))}
    </SidebarMenu>
  );
};

export { NavItems };
