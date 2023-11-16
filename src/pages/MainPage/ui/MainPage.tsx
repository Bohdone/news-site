import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {

    const {t} = useTranslation('main')

    return (
        <div>
            <h1>{t('its main page')}</h1>
            <h1>{t('sdf')}</h1>
        </div>
    );
};

export default MainPage;