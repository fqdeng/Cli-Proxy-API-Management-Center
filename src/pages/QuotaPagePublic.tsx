import { QuotaPage } from './QuotaPage';

export function QuotaPagePublic() {
  return (
    <div style={{ padding: '10px 20px' }}>
      <QuotaPage publicUsed={true} />
    </div>
  );
}
