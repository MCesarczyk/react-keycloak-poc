import { useKeycloak } from '@react-keycloak/web';
import { aois } from './data';

export const Secured = () => {
  const { keycloak } = useKeycloak();

  const isAdmin = keycloak.hasResourceRole('admin');
  const isUser = keycloak.hasResourceRole('user');
  const canViewAreas = keycloak.hasResourceRole('view-aois');
  const canViewWaterQuality = keycloak.hasResourceRole('view-water-quality');
  const canViewWaterAreas = keycloak.hasResourceRole('view-water-surface');

  return (
    <div>
      <h1 className="text-black text-4xl">Protected Page.</h1>
      <p>
        Current user {isAdmin ? 'HAS' : 'DOES NOT HAVE'} access to the ADMIN
        role.
      </p>
      <p>
        Current user {isUser ? 'HAS' : 'DOES NOT HAVE'} access to the USER role.
      </p>
      {canViewAreas && (
        <ul>
          {aois.map((aoi) => (
            <li key={aoi.id}>{aoi.name}</li>
          ))}
        </ul>
      )}
      <p>{canViewWaterQuality && <a href="/water-quality">Water Quality</a>}</p>
      <p>{canViewWaterAreas && <a href="/water-areas">Water Areas</a>}</p>
    </div>
  );
};
