import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { SearchFieldProps } from './types';

const SearchField = (props: SearchFieldProps) => {
    const { value } = props;
    const [searchText, setSearchText] = useState<string>(value);
    return (
        <TextField
            value={searchText}
        />
    );
}

export default SearchField;