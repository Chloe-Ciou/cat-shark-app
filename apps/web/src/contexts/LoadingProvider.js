import { useState, createContext, useContext } from "react";
import PropTypes from 'prop-types';

export const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return <LoadingContext.Provider value={{ isLoading, setIsLoading }}>{children}</LoadingContext.Provider>
};

LoadingProvider.displayName = 'LoadingProvider';
LoadingProvider.propTypes = {
  children: PropTypes.node,
};

export default LoadingProvider;

/**
 * Connects a component to the <LoadingProvider />
 * @returns {LoadingProvider}
 */
export function useLoading() {
  const context = useContext(LoadingContext);

  if (typeof context === 'undefined') {
    throw new Error('useLoading must be used within a LoadingProvider');
  }

  return context;
}