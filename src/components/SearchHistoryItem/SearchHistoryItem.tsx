import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { type SearchHistoryItemType } from "../../types";

interface SearchHistoryItemProps {
  searchHistoryItem: SearchHistoryItemType;
  onSearch: (formValues: { city: string; country: string }) => void;
  onDelete: (id: number) => void;
}

export const SearchHistoryItem = ({
  searchHistoryItem: { city, country, datetime, id },
  onDelete,
  onSearch,
}: SearchHistoryItemProps) => {
  const handleDelete = () => {
    const ok = confirm("Are you sure you want to delete this item?");
    if (!ok) return;
    onDelete(id);
  };

  const handleSearch = () => {
    onSearch({
      city,
      country,
    });
  };

  return (
    <Stack
      direction="row"
      width="100%"
      alignItems="center"
      gap={1}
      sx={{
        padding: "0 20px",
        height: "60px",
        // backgroundColor: "bg.item",
        borderRadius: "16px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Stack
        marginRight="auto"
        width="100%"
        direction={{
          md: "row",
          sx: "column",
        }}
      >
        <Typography>
          {city}, {country}
        </Typography>
        <Typography
          variant="caption"
          marginLeft="auto"
          sx={{
            color: "font.itemInfo",
          }}
        >
          {dayjs(datetime).format("DD-MM-YYYY hh:mmA")}
        </Typography>
      </Stack>
      <Stack direction="row" gap={1}>
        <IconButton
          onClick={handleSearch}
          sx={{
            backgroundColor: "bg.itemIconButton",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "border.itemIconButton",
          }}
        >
          <SearchIcon />
        </IconButton>
        <IconButton
          onClick={handleDelete}
          sx={{
            backgroundColor: "bg.itemIconButton",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "border.itemIconButton",
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
