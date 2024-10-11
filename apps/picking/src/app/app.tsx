// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { LibsPicking } from '@mywow/libs-picking';

export function App() {
  return (
    <div>
      <LibsPicking />
      <NxWelcome title="picking" />
    </div>
  );
}

export default App;
