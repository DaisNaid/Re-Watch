type Dispatch<A> = (value: A) => void;

type SetStateAction<S> = S;

export interface Ctx {
  showMenu: boolean;
  isDarkMode: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
};
