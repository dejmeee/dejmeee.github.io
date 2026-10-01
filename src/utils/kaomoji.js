const error_kaomojis = ["(# > <)", "(T~T)", "~(>_<~)", "(X_X)", "(@_@)", "(O_O)", "〜(> <)〜", "(・_・)"]

export function randomErrorKaomoji() {
  return error_kaomojis[Math.floor(Math.random() * error_kaomojis.length)]
}
