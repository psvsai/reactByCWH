import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CountrySelect() {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300, margin: '0 auto' }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      groupBy={(option) => (option.suggested ? 'Suggested' : 'Other Countries')}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt={`Flag of ${option.label}`}
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // Disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

// Sample country data (static)
const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  { code: 'AE', label: 'United Arab Emirates', phone: '971' },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  { code: 'AU', label: 'Australia', phone: '61', suggested: true },
  { code: 'CA', label: 'Canada', phone: '1', suggested: true },
  { code: 'FR', label: 'France', phone: '33', suggested: true },
  { code: 'JP', label: 'Japan', phone: '81', suggested: true },
  { code: 'US', label: 'United States', phone: '1', suggested: true },
];
