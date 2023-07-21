import React, { useState, createContext, useEffect } from 'react';

export const IPFSConfig = createContext();

export const IPFSProvider = ({ children }) => {

    return (
        <IPFSConfig.Provider value={{}}>{children}</IPFSConfig.Provider>
    )
}
