import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MoreIcon from '@material-ui/icons/MoreVert';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('1280')]: {
      display: 'none',
    },
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    margin:'0',
    color:'#000',
    textDecoration:'none'
  }
}));

export default function PrimarySearchAppBar(props) {
  const {user} = props;
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  
  const MenuViewMore = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link 
        to="/TaiKhoan/DangNhap" 
        onClick={handleMobileMenuClose} 
        className={classes.link}
      >
        <MenuItem className={classes.menuItem}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <AccountCircle />
            </IconButton>
            <p style={{marginBottom:'0'}}>Đăng nhập</p>
        </MenuItem>
      </Link>
      <Link 
        className={classes.link} 
        onClick={handleMobileMenuClose} 
        to="/TaiKhoan/DangKy"
      >
        <MenuItem className={classes.menuItem}>
          <IconButton aria-label="show 11 new notifications" color="inherit">
              <PersonAddIcon />
          </IconButton>
          <p style={{marginBottom:'0'}}>Đăng ký</p>
        </MenuItem>
      </Link>
    </Menu>
  )

  const MenuLogined = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link 
        className={classes.link} 
        to="/TaiKhoan/ThongTin"
        onClick={handleMobileMenuClose}
      >
        <MenuItem className={classes.menuItem}>
          <IconButton aria-label="show 4 new mails" color="inherit">
              <InfoIcon />
          </IconButton>
          <p style={{marginBottom:'0'}}>Thông tin</p>
        </MenuItem>
      </Link>
      <Link 
        className={classes.link} 
        to="/TaiKhoan/DangKy"
        onClick={handleMobileMenuClose}
      >
        <MenuItem className={classes.menuItem}>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <ExitToAppIcon />
          </IconButton>
          <p style={{marginBottom:'0'}}>Đăng ký</p>
        </MenuItem>
      </Link>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon style={{fontSize:"30px", color:"#fff"}}/>
        </IconButton>
      </div>
      {
        user 
        ? MenuLogined
        : MenuViewMore
      }
    </div>
  );
}

