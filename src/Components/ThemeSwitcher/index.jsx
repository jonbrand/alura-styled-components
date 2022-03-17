import React from "react";

import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";
import { Icon } from "../../UI";

export const light = <Icon src={ThemeOn} alt="Tema Claro" />
export const dark = <Icon src={ThemeOff} alt="Tema Escuro" />

export const ThemeSwitcher = (({ theme }) => ( theme ? dark : light));

