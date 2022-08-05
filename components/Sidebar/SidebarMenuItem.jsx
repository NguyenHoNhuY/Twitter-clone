import React from 'react';
import PropTypes from 'prop-types';

SidebarMenuItem.propTypes = {
    text: PropTypes.string,
    Icon: PropTypes.elementType,
    active: PropTypes.bool,
};

function SidebarMenuItem(props) {
    const { text, Icon, active } = props;
    return (
        <div className='hoverEffect  flex items-center justify-center space-x-3 text-lg text-gray-700 lg:justify-start'>
            <Icon className='h-7' />
            <span className={`${active && 'font-semibold'} hidden xl:inline`}>
                {text}
            </span>
        </div>
    );
}

export default SidebarMenuItem;
