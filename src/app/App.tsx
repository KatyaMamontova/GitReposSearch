import React from 'react';
import { MainPage } from '../pages/MainPage';
import { BaseLayout } from './layouts/BaseLayout';

function App() {
  return (
    // <ReduxProvider store={}>
    <BaseLayout><MainPage /></BaseLayout>
    // </ReduxProvider>
  );
}

export default App;