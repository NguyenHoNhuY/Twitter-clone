import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';
import {
    BellIcon,
    BookmarkIcon,
    ClipboardIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
    HashtagIcon,
    HomeIcon,
    InboxIcon,
    UserIcon,
} from '@heroicons/react/outline';

Sidebar.propTypes = {};

function Sidebar(props) {
    return (
        <div className='fixed hidden h-full flex-col p-2 sm:flex xl:items-start'>
            {/* Logo */}
            <div className='hoverEffect flex items-center justify-center p-0 hover:bg-blue-100 xl:p-0.5'>
                <Image
                    src='https://help.twitter.com/content/dam/help-twitter/brand/logo.png'
                    width='45'
                    height='45'
                    layout='fixed'
                />
            </div>

            {/* Menu */}
            <div className='mt-4 mb-2.5 xl:items-start'>
                <SidebarMenuItem text='Home' Icon={HomeIcon} active />
                <SidebarMenuItem text='Explore' Icon={HashtagIcon} />
                <SidebarMenuItem text='Notifications' Icon={BellIcon} />
                <SidebarMenuItem text='Messages' Icon={InboxIcon} />
                <SidebarMenuItem text='Bookmarks' Icon={BookmarkIcon} />
                <SidebarMenuItem text='List' Icon={ClipboardIcon} />
                <SidebarMenuItem text='Profile' Icon={UserIcon} />
                <SidebarMenuItem text='More' Icon={DotsCircleHorizontalIcon} />
            </div>

            {/* Button */}
            <button className='hidden h-12 w-56 rounded-full bg-[#1d9bf0] text-lg font-bold text-white shadow-md hover:brightness-95 lg:inline'>
                Tweet
            </button>

            {/* Mini profile */}
            <div className='hoverEffect text-gray-70 mt-auto flex items-center justify-center xl:justify-start'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-green-800 xl:mr-2'>
                    <p className='text-[22px] text-white'>H</p>
                </div>
                <div className='hidden leading-5 xl:inline'>
                    <h4 className='font-bold'>Nguyen Ho Nhu Y</h4>
                    <p className='text-gray-500'>@HNhnguy818239012</p>
                </div>
                <DotsHorizontalIcon className='h-5 w-5 lg:ml-8' />
            </div>
        </div>
    );
}

export default Sidebar;
