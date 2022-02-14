// Lưu các biến không động nhưng dễ dàng thay đổi các thuộc tính

const listMenu = [
    {
        name: "TRANG CHỦ",
        href: "/",
        // subMenu:[]
    },
    {
        name: "GIỚI THIỆU",
        href: "/GioiThieu",
        subMenu: [
            { name: "Về chúng tôi", href: "/GioiThieu/CongTy" },
            { name: "Đội ngũ luật sư", href: "/GioiThieu/LuatSu" },
        ],
    },
    {
        name: "DỊCH VỤ",
        href: "/DichVu",
    },
    {
        name: "KIẾN THỨC PHÁP LUẬT",
        href: "/DichVu",
    },
    {
        name: "ĐĂNG NHẬP",
        href: "/TaiKhoan/DangNhap",
    },
    {
        name: "ĐĂNG KÝ",
        href: "/TaiKhoan/DangKy",
    },

    {
        name: "LIÊN HỆ",
        href: "/LienHe",
        // subMenu:[]
    },
];

module.exports = {
    listMenu,
};
