import { IconDashboard, IconDatabase, IconNumbers } from '@tabler/icons-react'
import MenuGrupo from './menu-grupo'
import MenuItem from './menu-item'

interface MenuProps {
   className: string
}

export default function Menu(props: MenuProps) {
   return (
      <div className={`${props.className ?? ''}`}>
         <MenuGrupo texto="Conceitos" />
         <MenuItem icone={<IconDashboard />} texto="Classes" url="/" />
         <MenuItem icone={<IconNumbers />} texto="Classes" url="/" />
         <MenuItem icone={<IconDatabase />} texto="Classes" url="/" />
         <MenuGrupo texto="Box Model" />
         <MenuItem icone={<IconDashboard />} texto="Classes" url="/" />
         <MenuItem icone={<IconNumbers />} texto="Classes" url="/" />
         <MenuItem icone={<IconDatabase />} texto="Classes" url="/" />
         <MenuGrupo texto="Flex" />
         <MenuItem icone={<IconDashboard />} texto="Classes" url="/" />
         <MenuItem icone={<IconNumbers />} texto="Classes" url="/" />
         <MenuItem icone={<IconDatabase />} texto="Classes" url="/" />
         <MenuGrupo texto="Grid" />
         <MenuItem icone={<IconDashboard />} texto="Classes" url="/" />
         <MenuItem icone={<IconNumbers />} texto="Classes" url="/" />
         <MenuItem icone={<IconDatabase />} texto="Classes" url="/" />
         <MenuGrupo texto="Extras" />
         <MenuItem icone={<IconDashboard />} texto="Classes" url="/" />
         <MenuItem icone={<IconNumbers />} texto="Classes" url="/" />
         <MenuItem icone={<IconDatabase />} texto="Classes" url="/" />
      </div>
   )
}
