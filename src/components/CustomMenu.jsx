import React,{useState} from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../../css/header.css'
export default function CustomMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const options=[
        {text:'حساب کاربری',icon:'',link:'/'}, 
        {text:'سفارش‌ها',icon:<ShoppingBasketIcon/>,link:'/'}, 
        {text:'لیست‌ها',icon:<BookmarkBorderIcon/>,link:'/'}, 
        {text:'خروج از حساب',icon:<LogoutIcon/>,link:'/'}, 
    
    ]
  return (
    <div>
         <PersonIcon className='text-white person-icon'  onClick={handleClick} />
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        disableScrollLock={true}
      >
        {
            options.map((option,index)=>{
                return(
                    <MenuItem onClick={handleClose} className='menu-item'>
                        <span style={{fontSize:'14px'}}>
                        {option.icon}
                        </span>
                        <span className='mr-2'>
                        {option.text}
                            
                        </span>
                        </MenuItem>
                )
            }
            )
        }
      
    
      </Menu>
    </div>
  )
}
