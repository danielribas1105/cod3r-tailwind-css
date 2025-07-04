import {
   IconArrowAutofitContent,
   IconAspectRatio,
   IconBoxMargin,
   IconBoxModel2,
   IconBoxPadding,
   IconClick,
   IconComponents,
   IconContainer,
   IconDeviceMobile,
   IconDimensions,
   IconGridDots,
   IconLayoutDashboard,
   IconLayoutGrid,
   IconResize,
   IconTextPlus,
   IconTexture,
   IconTypography,
} from '@tabler/icons-react'
import MenuGrupo from './menu-grupo'
import MenuItem from './menu-item'

interface MenuProps {
   className?: string
}

export default function Menu(props: MenuProps) {
   return (
      <div className={`${props.className ?? ''}`}>
         <MenuGrupo texto="Conceitos" />
         <MenuItem
            icone={<IconTextPlus />}
            texto="Tudo é Classe"
            url="/conceitos"
         />
         <MenuItem
            icone={<IconClick />}
            texto="Pseudo Classes"
            url="/conceitos"
         />
         <MenuItem
            icone={<IconDeviceMobile />}
            texto="Mobile-first"
            url="/conceitos"
         />
         <MenuItem
            icone={<IconComponents />}
            texto="Componentes"
            url="/conceitos"
         />
         <MenuGrupo texto="Box Model" />
         <MenuItem icone={<IconBoxPadding />} texto="Padding" url="/caixa" />
         <MenuItem icone={<IconBoxMargin />} texto="Margin" url="/caixa" />
         <MenuItem
            icone={<IconArrowAutofitContent />}
            texto="Espaços"
            url="/caixa"
         />
         <MenuItem icone={<IconResize />} texto="Tamanho" url="/caixa" />
         <MenuItem icone={<IconBoxModel2 />} texto="Box Sizing" url="/caixa" />
         <MenuGrupo texto="Flex" />
         <MenuItem
            icone={<IconAspectRatio />}
            texto="Resumão Flex"
            url="/flex"
         />
         <MenuItem
            icone={<IconDimensions />}
            texto="Redimensionamento"
            url="/flex"
         />
         <MenuGrupo texto="Grid" />
         <MenuItem icone={<IconGridDots />} texto="Resumão Grid" url="/grid" />
         <MenuItem
            icone={<IconLayoutDashboard />}
            texto="Posicionamento"
            url="/grid"
         />
         <MenuItem
            icone={<IconLayoutGrid />}
            texto="Componente Grid"
            url="/grid"
         />
         <MenuGrupo texto="Extras" />
         <MenuItem icone={<IconContainer />} texto="Container" url="/extras" />
         <MenuItem
            icone={<IconTypography />}
            texto="Tipografia"
            url="/extras"
         />
         <MenuItem
            icone={<IconTexture />}
            texto="Background Gradiente"
            url="/extras"
         />
      </div>
   )
}
