
import { useThemeContext } from '../provider/ThemeContext'

export  function Header() {
  const { couleurPrincipale, police } = useThemeContext()

  return (
    <div>
      <h1>Thème : {couleurPrincipale} - Police : {police}</h1>
    </div>
  )
}
