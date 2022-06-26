import { createContext, useContext } from "react";
import PropTypes from 'prop-types';

import apiClient from "../utils/apiClient";

export const APIContext = createContext();

const APIProvider = ({ children }) => {
  return <APIContext.Provider value={apiClient}>{children}</APIContext.Provider>
};

APIProvider.displayName = 'APIProvider';
APIProvider.propTypes = {
  children: PropTypes.node,
};

export default APIProvider;

/**
 * Connects a component to the <APIProvider />
 * @returns {APIProvider}
 */
export function useAPI() {
  const context = useContext(APIContext);

  if (typeof context === 'undefined') {
    throw new Error('useAPI must be used within a APIProvider');
  }

  return context;
}