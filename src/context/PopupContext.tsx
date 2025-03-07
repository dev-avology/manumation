import React, { createContext, useContext, useState } from 'react';

type PopupContextType = {
  isQuizOpen: boolean;
  openQuiz: () => void;
  closeQuiz: () => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz = () => {
    setIsQuizOpen(true);
  };

  const closeQuiz = () => {
    setIsQuizOpen(false);
  };

  return (
    <PopupContext.Provider value={{ isQuizOpen, openQuiz, closeQuiz }}>
      {children}
    </PopupContext.Provider>
  );
};

// Custom hook to use the popup context
export const usePopup = (): PopupContextType => {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};