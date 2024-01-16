//1. Function is get 2 params: key and value
//Key - property name of local storage item
//Value - it's data to store in localStorage
//
//2. It's must be React Hook, it's seems similar to useState native react hook
//so function return a tuple
//
//3. MVP. It's might be use React Native Hooks useState and useEffect inside

import { useState, useEffect } from 'react';

export function useLocalStorageState(key: string, defaultValue?: string) {
  const rawStorageData = window.localStorage.getItem(key);

  const getParsedStorageData = () => {
    if (rawStorageData !== null) {
      try {
        return JSON.parse(rawStorageData);
      } catch (error) {
        console.error('Error');
        window.localStorage.setItem(key, JSON.stringify(null));
        return defaultValue;
      }
    }
    return defaultValue;
  };

  const [state, setState] = useState(getParsedStorageData);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
/*  */

/* import { useEffect, useState } from 'react';

export function useLocalStorageState(key: string, value: any) {
  const currentValue = window.localStorage.getItem(key);

  if (currentValue === null) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  const [state, setState] = useState(currentValue);

  useEffect(() => {
    setState(value);
  }, [value]);

  return [state, setState];
} */

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/*
 */
/* import { useState } from 'react';

enum Method {
  SET = 'SET',
  GET = 'GET',
  REMOVE = 'REMOVE',
  CLEAR = 'CLEAR,',
}

/* 

export function useLocalStorageState(key: string, value?: any) {
  if (method === Method.SET) {
    localStorage.setItem(key, value);

    const [state, setState] = useState(value);
    return [state, setState];

    /*   const [state, setState] = useState(null);


  

  if (data !== null || data !== undefined) {

    try {
      const persistedState = localStorage.getItem(key);
  
      if (persistedState === null) {
        throw new Error('')
      }
        setState(JSON.parse(persistedState));
      
    } catch (error) {
      console.error(`ERROR>>>>>${useLocalStorage.name}()`);
    }



    `` */
// }

// try {
//   const persistedState = localStorage.getItem(key);

//   if (persistedState === null) {
//     // setState(key);
//   } else {
//     const parsedPersistedState = JSON.parse(persistedState);
//     setState(parsedPersistedState);
//   }
// } catch (error) {
//   console.error(`ERROR>>>>>${useLocalStorage.name}()`);
// }

//   return [state, setState] as const;
// }
//  */
