import { Button, Drawer } from "antd";
import React from "react";
import MoreDetails from "./MoreDetails";

const Details: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <strong>Details</strong>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis
        rhoncus purus interdum cursus. In euismod sem et nibh aliquet cursus.
        Aenean ornare at sem in condimentum. Proin a interdum sem, quis blandit
        mauris. Aenean ut nisl porta, convallis libero vel, pretium ex.
      </p>
      <p>
        Aenean vestibulum quam sagittis auctor semper. Sed dignissim ex ex,
        eleifend luctus felis accumsan elementum. Sed faucibus pellentesque
        lorem et tincidunt. Nullam sit amet turpis sollicitudin, gravida eros
        quis, tincidunt tellus. Vivamus suscipit varius pharetra.
      </p>

      <Button type="primary" onClick={toggleDrawer}>
        Learn more
      </Button>

      <Drawer
        placement="right"
        onClose={toggleDrawer}
        open={isDrawerOpen}
        width="40%"
      >
        {<MoreDetails />}
      </Drawer>
    </>
  );
};

export default Details;
