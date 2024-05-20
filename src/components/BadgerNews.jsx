import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import BadgerTabs from './navigation/BadgerTabs';
import CS571 from '@cs571/mobile-client';

import PreferencesContext from "./PreferencesContext";

export default function BadgerNews(props) {

  // Just a suggestion for Step 4! Maybe provide this to child components via context...
  const [prefs, setPrefs] = useState({});

  return (
    <PreferencesContext.Provider value={[prefs,setPrefs]}>
      <NavigationContainer>
        <BadgerTabs />
      </NavigationContainer>
    </PreferencesContext.Provider>
  );
}