import { OAuthPage } from './OAuthPage';

export function Donate() {
  return (
    <div style={{ padding: '10px 20px' }}>
      <OAuthPage donate={true} />
    </div>
  );
}
