import { ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from '@mui/material'

export const SideBar = () => {
  const items = [
    {
      id: 'users'
    },
    {
      id:'products'
    },
    {
      id: 'orders'
    }
  ]
  return (
    <Paper sx={{maxWidth: '100%' }}>
      <MenuList>
        {
          items.map(item => (
            <MenuItem key={item.id}>
              <ListItemIcon>
                {/* <ContentCut fontSize="small" /> */}
              </ListItemIcon>
              <ListItemText>{item.id}</ListItemText>
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
