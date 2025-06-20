import { SidebarProvider as AppSidebarProvider } from '@workspace/ui/components/base/sidebar';
import { AppSidebar } from '@workspace/ui/components/sidebar/app-sidebar';
import { PropsWithChildren } from 'react';

const SidebarProvider = ({ children }: PropsWithChildren) => {
  return (
    <AppSidebarProvider className="w-dvw">
      <main className="w-full overflow-x-hidden">
        <AppSidebar />
        {children}
      </main>
    </AppSidebarProvider>
  );
};

export { SidebarProvider };
