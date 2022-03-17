import { 
  lightBackground, 
  lightContent, 
  lightBackgroundText, 
  darkContent, 
  darkBackground, 
  darkBackgroundText 
} from './variables';

export const lightTheme = {
  body: lightBackground,
  inside: lightContent,
  text: lightBackgroundText,
  filter: ""
}

export const darkTheme = {
  body: darkBackground,
  inside: darkContent,
  text: darkBackgroundText,
  filter: "invert(100)"
}