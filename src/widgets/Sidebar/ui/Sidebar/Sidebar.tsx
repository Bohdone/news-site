import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {Button} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                onClick={() => setCollapsed(!collapsed)}
            >
                toggle
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};