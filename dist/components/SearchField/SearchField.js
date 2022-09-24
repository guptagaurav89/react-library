import React, { useState } from 'react';
import { TextField } from '@mui/material';
const SearchField = (props) => {
    const { value } = props;
    const [searchText, setSearchText] = useState(value);
    return (React.createElement(TextField, { value: searchText }));
};
export default SearchField;
