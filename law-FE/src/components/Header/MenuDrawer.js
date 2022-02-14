import React from 'react';
import {Link} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CreateIcon from '@material-ui/icons/Create';
import ShareIcon from '@material-ui/icons/Share';
import PhoneIcon from '@material-ui/icons/Phone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
const menuItems = [
    {
        name:"TRANG CHỦ",
        href:"/",
        // subMenu:[]
        icon: <HomeIcon style={{fontSize:"22px"}}/>
    },
    {
        name:"GIỚI THIỆU",
        href:"/GioiThieu",
        // subMenu:[]
        icon: <InfoIcon style={{fontSize:"22px"}}/>
    },
    {
        name:"KHÓA HỌC",
        href:"/KhoaHoc",
        icon: <LibraryBooksIcon style={{fontSize:"22px"}}/>,
        subMenu:[
            {name:"Khóa học TOEIC", href:"/KhoaHoc/TOEIC"},
            {name:"Khóa học IELTS", href:"/KhoaHoc/IELTS"},
            {name:"Khóa học VSTEP", href:"/KhoaHoc/VSTEP"}
        ]
    },
    {
        name:"LUYỆN THI",
        href:"/LuyenThi",
        icon: <CreateIcon style={{fontSize:"22px"}}/>,
        subMenu:[
            {name:"Luyện thi TOEIC", href:"/LuyenThi/TOEIC"},
            {name:"Luyện thi IELTS", href:"/LuyenThi/IELTS"},
            {name:"Luyện thi VSTEP", href:"/LuyenThi/VSTEP"}
        ]
    },
    {
        name:"VSTep",
        href:"/VSTep",
        icon: <PlayCircleOutlineIcon style={{fontSize:"22px"}}/>
    },
    {
        name:"CHIA SẺ",
        href:"/ChiaSe",
        icon: <ShareIcon style={{fontSize:"22px"}}/>
        // subMenu:[]
    },
    {
        name:"LIÊN HỆ",
        href:"/LienHe",
        icon: <PhoneIcon style={{fontSize:"22px"}}/>
        // subMenu:[]
    }
]

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState( open );
  };

  const list = () => (
    <div
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{padding:"0 25px", marginTop:"50px"}}
    >
      <List>
        {menuItems.map((menuItem, index) => (
            <Link style={{color:"#000", textDecoration:"none"}} to={menuItem.href}>
                <ListItem button key={index}>
                    <ListItemIcon style={{minWidth:"auto", marginRight:"20px", marginBottom:"10px"}}>{menuItem.icon}</ListItemIcon>
                    {/* <ListItemText style={{fontSize:"14px"}} primary={menuItem.name} /> */}
                    <p style={{fontSize:"14px"}}>{menuItem.name}</p>
                </ListItem>
            </Link>
        ))}
      </List>
    </div>
  );

  return (
        <React.Fragment >
          <Button onClick={toggleDrawer(true)}><MenuIcon style={{color:"#fff"}}/></Button>
          <Drawer  open={state} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
  );
}