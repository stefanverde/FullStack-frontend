import * as React from 'react';
import { observer } from 'mobx-react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function SearchBar() {
  const [brand, setBrand] = useState('');
  const navigate = useNavigate();

  const searchProducts = async () => {
    try {
      await fetch(`http://localhost:3001/item/byBrand/${brand}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      navigate(`/searchPage?brand=${brand}`);
    } catch (e) {}
  };
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
        background: `unset`,
        boxShadow: 'unset',
        border: '3px solid green',
        borderRadius: '50px',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: `darkgreen` }}
        placeholder="Search"
        value={brand}
        onChange={e => setBrand(e.target.value.trim())}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={searchProducts}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default observer(SearchBar);
