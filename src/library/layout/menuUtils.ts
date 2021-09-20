import React,{useState} from 'react'
import {Menu} from './type.menu';
interface UtilConstFilm{
    menu : Menu[]
}


export default function MenuUtils() : UtilConstFilm{
    const [menu, setMenu] = useState<Menu[]>(
        [
            {
                title : "Trang chủ",
                icon: "AiFillHome",
                element: [
                ]
            },
            {
                title : "Quản lý tài khoản",
                icon: "MdAccountCircle",
                element: [
                    {
                        title: "Tài khoản",
                        url : "/account"
                    },
                ]
            },
            {
                title : "Quản lý phim",
                icon: "AiFillSwitcher",
                element: [
                    {
                        title: "Phim",
                        url : "/film"
                    },
                    {
                        title: "Thể loại",
                        url : "/category"
                    },
                    {
                        title: "Tập phim",
                        url : "/episodes"
                    }
                ]
            }
        ]
    );

    return{
        menu
    }
   
}

