import { Button, Drawer } from "antd";
import React from "react";

const MoreDetails: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <strong>This is another drawer</strong>
      <p>
        Donec non consectetur est. Vivamus feugiat posuere neque, vitae cursus
        lectus rutrum ac. Curabitur consectetur consectetur feugiat. Sed
        consectetur, arcu non eleifend laoreet, quam purus ultricies eros, sed
        pretium purus nisl ac risus.
      </p>
      <p>
        Nunc finibus rutrum accumsan. Nunc faucibus vehicula mi a ultrices.
        Suspendisse risus lacus, accumsan nec blandit ut, cursus malesuada leo.
        Praesent tincidunt dictum lectus vel pretium.
      </p>

      <ul>
        <li>Donec consequat, massa id lobortis convallis.</li>
        <li>Quam nisl cursus nulla, nec dictum mauris est id ex.</li>
        <li>Donec a libero sapien.</li>
        <li>Curabitur rutrum mi eget risus eleifend fringilla.</li>
        <li>
          Donec purus odio, imperdiet id ante a, vulputate elementum justo.
        </li>
        <li>
          Nunc bibendum turpis at sodales pharetra. Duis eget mollis nisl.
        </li>
      </ul>

      <Button type="primary" onClick={toggleDrawer}>
        Open another drawer
      </Button>

      <Drawer
        placement="right"
        onClose={toggleDrawer}
        open={isDrawerOpen}
        width="30%"
      >
        <strong>Lorem ipsum dolor sit amet</strong>
        <p>
          Aenean vestibulum quam sagittis auctor semper. Sed dignissim ex ex,
          eleifend luctus felis accumsan elementum. Sed faucibus pellentesque
          lorem et tincidunt. Nullam sit amet turpis sollicitudin, gravida eros
          quis, tincidunt tellus. Vivamus suscipit varius pharetra.
        </p>
      </Drawer>
    </>
  );
};

export default MoreDetails;
