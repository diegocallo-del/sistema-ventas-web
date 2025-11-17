
import { Header } from '@/components/modules/layout/header';
import { Sidebar } from '@/components/modules/layout/sidebar';
import { ProtectedRoute } from '@/components/modules/layout/protected-route';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-secondary-50 text-secondary-900">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <Header />
            <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
