import { ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from '@mui/material'

export const SideBar = () => {
  const items = ['Ordenes','Productos', 'Usuarios']
  return (
    <Paper sx={{maxWidth: '100%' }}>
      <MenuList>
        {
          items.map(item => (
            <MenuItem>
              <ListItemIcon>
                {/* <ContentCut fontSize="small" /> */}
              </ListItemIcon>
              <ListItemText>{item}</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘X
              </Typography>
            </MenuItem>
          ))
        }
      </MenuList>
    </Paper>
  )
}
