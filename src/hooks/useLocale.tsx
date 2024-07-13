import { useContext } from "react";

import { LocaleContext } from "../contexts/localeContext";

export function useLocale() {
  return useContext(LocaleContext);
}
