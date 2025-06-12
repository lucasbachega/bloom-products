import { Close, Search } from "@mui/icons-material";
import { IconButton, InputAdornment, InputBase, Paper } from "@mui/material";
import { memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const initial = params.get("search") || "";
  const [value, setValue] = useState(initial);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }
      setParams(params, { replace: true });
    }, 500);

    return () => clearTimeout(handler);
  }, [value]);

  const handleClear = () => {
    setValue("");
    params.delete("search");
    setParams(params, { replace: true });
  };

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 100,
        height: 40,
        maxWidth: 400,
        width: "100%",
        "& .MuiIconButton-root": { color: "action.active" },
      }}
    >
      <InputBase
        value={value}
        onChange={(e) => setValue(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            {Boolean(value.trim()) && (
              <IconButton color="primary" onClick={handleClear}>
                <Close />
              </IconButton>
            )}
          </InputAdornment>
        }
        placeholder="Pesquise aqui..."
        sx={{
          px: 2,
          pr: 1,
          gap: 1,
          height: "100%",
          width: "100%",
        }}
      />
    </Paper>
  );
};

export default memo(SearchBar);
