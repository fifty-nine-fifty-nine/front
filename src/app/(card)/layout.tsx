import { Template } from '@/components/templates';

export default function InfoCardFormLayout({ children }: { children: React.ReactNode }) {
  return (
    <Template withNavbar={false}>
      <div className={`viewport h-screen overflow-y-auto overflow-x-hidden`}>
        <div className="py-36">{children}</div>
      </div>
    </Template>
  );
}
