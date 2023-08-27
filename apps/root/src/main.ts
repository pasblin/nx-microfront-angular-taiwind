import { setRemoteDefinitions } from '@nx/angular/mf';
import { environment } from "./environments/environment";

const manifestUrl = environment.moduleFederationManifest;

console.log(environment.production, '******');
fetch(manifestUrl)
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
