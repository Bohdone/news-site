import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => setValue(val);

    return (
        <div>
            {t('Главная страница')}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Input value={value} onChange={onChange} placeholder="username" />
        </div>
    );
};

export default MainPage;
