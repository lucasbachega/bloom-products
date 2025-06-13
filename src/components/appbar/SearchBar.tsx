import { Close, Search } from "@mui/icons-material";
import { IconButton, InputAdornment, InputBase, Paper } from "@mui/material";
import { memo, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (value?.trim()) {
      navigate(`/?search=${value}`);
    }
  };

  return (
    <Paper
      component={"form"}
      onSubmit={handleSubmit}
      elevation={1}
      sx={{
        borderRadius: 100,
        height: 40,
        maxWidth: 450,
        width: "100%",
        boxShadow: 0,
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
                <Close sx={{ color: "text.primary" }} />
              </IconButton>
            )}
          </InputAdornment>
        }
        placeholder="Pesquise aqui..."
        slotProps={{
          input: {
            type: "search",
          },
        }}
        sx={{
          px: 2,
          pr: 1,
          gap: 1,
          height: "100%",
          width: "100%",
          borderRadius: 100,
          ":focus-within": {
            boxShadow: 10,
          },
        }}
      />
    </Paper>
  );
};

export default memo(SearchBar);
