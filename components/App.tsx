import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './navigation/Main';

const App: FC = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};

export default App;
