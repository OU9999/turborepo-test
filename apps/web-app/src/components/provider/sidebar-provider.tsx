import {
  SidebarProvider as AppSidebarProvider,
  SidebarInset,
} from '@workspace/ui/components/base/sidebar';
import { AppSidebar } from '@workspace/ui/components/sidebar/app-sidebar';
import { PropsWithChildren } from 'react';

const SidebarProvider = ({ children }: PropsWithChildren) => {
  return (
    <AppSidebarProvider>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </AppSidebarProvider>
  );
};

export { SidebarProvider };
