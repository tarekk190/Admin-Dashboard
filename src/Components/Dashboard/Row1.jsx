import { Stack, useTheme } from "@mui/material";
import Card from "./Card";
import {
  EmailOutlined,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";
import { data1, data2, data3, data4 } from "./data";

export default function Row1() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      maxWidth={{ xs: "300px" , sm:"100%"}}
      // gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        icon={
          <EmailOutlined
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        subtitle={"12,322"}
        title={"Emails Sent"}
        increase={"+14%"}
        data={data1}
      />
      <Card
        icon={
          <PointOfSale
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        subtitle={"423,142"}
        title={"Sales Obtained"}
        increase={"+21%"}
        data={data2}
      />
      <Card
        icon={
          <PersonAdd
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        subtitle={"32,932"}
        title={"New Clients"}
        increase={"+5%"}
        data={data3}
      />
      <Card
        icon={
          <Traffic
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        subtitle={"1,232,932"}
        title={"Traffic Received"}
        increase={"+5%"}
        data={data4}
      />
    </Stack>
  );
}
