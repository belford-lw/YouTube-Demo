import { Stack } from "@mui/material";
import { category } from "../../constants/Category";
import { colors } from "../../constants/colors";

const Category = ({ selectedCategoryHandle, selectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        background: "#fff",
        marginTop: {
          xs: "56px",  
          sm: "64px",   
          md: "75px",   
        },
        padding: {
          xs: 0.5,
          sm: 1,
        },
      }}
    >
      {category.map((item) => (
        <button
          style={{
            background: item.name === selectedCategory && colors.color,
            color: item.name === selectedCategory && "#fff",
          }}
          onClick={() => selectedCategoryHandle(item.name)}
          key={item.name}
          className="category_btn"
        >
          <span
            style={{
              color: item.name === selectedCategory ? "#fff" : colors.color,
              marginRight: "10px", 
            }}
          >
            <item.icon />
          </span>
          <span
            style={{
              fontSize: window.innerWidth < 600 ? "13px" : "14px",
            }}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
