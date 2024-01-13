import { Button, Drawer } from "antd";
import React from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { usePreviousPath } from "../utils/usePreviousPath";
import { Paths } from "../utils/paths";
import Details from "./Details";
import TermsAndConditions from "./Terms and Conditions";

const Home: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [drawerPath, setDrawerPath] = React.useState(Paths.Details);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const previousPath = usePreviousPath(pathname);
  React.useEffect(() => {
    if (pathname !== previousPath) {
      if (matchPath(Paths.Details, pathname) !== null) {
        toggleDrawer();
        setDrawerPath(Paths.Details);
        return navigate(Paths.Details);
      }

      if (matchPath(Paths.TermsAndConditions, pathname) !== null) {
        toggleDrawer();
        setDrawerPath(Paths.TermsAndConditions);
        return navigate(Paths.TermsAndConditions);
      }

      setIsDrawerOpen(false);
      return navigate(Paths.Home);
    }
  }, [pathname, drawerPath]);

  return (
    <>
      <h2>Home</h2>
      <p>
        Morbi nec tellus viverra, luctus elit nec, porta tellus. Duis nec
        blandit libero, ac volutpat lorem. Sed sed tortor eros. Ut sit amet
        aliquet justo. In vel bibendum arcu, ut tempor quam. Sed a lectus ac
        neque volutpat laoreet. Nulla vel consectetur sem. Curabitur lobortis et
        ex a rhoncus. Phasellus in venenatis urna, quis consectetur ex. Fusce
        sed nunc ac leo porta cursus id et urna. Vivamus consectetur commodo
        ligula at sodales. Sed in ligula a ex sodales volutpat. Morbi ultrices
        quam eget fringilla suscipit. Donec arcu urna, egestas a aliquet
        ultricies, laoreet vel felis. Donec vestibulum volutpat tristique.
      </p>
      <Button type="primary" onClick={() => navigate(Paths.Details)}>
        Learn more
      </Button>

      <p>
        Aenean volutpat odio ac velit iaculis mollis. Nullam aliquam justo at
        felis accumsan, non cursus enim condimentum. Proin at felis gravida,
        mattis sapien iaculis, aliquet orci. Praesent auctor eget magna at
        cursus. Fusce maximus, quam eget dapibus facilisis, mi lorem fermentum
        sapien, vel facilisis nisl risus a nulla.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Praesent venenatis mauris et convallis
        elementum. Maecenas convallis nisi finibus dignissim maximus. Curabitur
        id scelerisque velit, vitae efficitur velit. Fusce sit amet enim mauris.
        Vestibulum pharetra ligula vel blandit tincidunt. Donec ipsum est,
        feugiat lobortis enim id, congue gravida nisi.
      </p>
      <Button type="primary" onClick={() => navigate(Paths.TermsAndConditions)}>
        Read Terms and Conditions
      </Button>

      <Drawer
        placement="right"
        onClose={() => {
          toggleDrawer();
          return navigate(Paths.Home);
        }}
        open={isDrawerOpen}
        width="50%"
      >
        {drawerPath === Paths.Details ? <Details /> : <TermsAndConditions />}
      </Drawer>
    </>
  );
};

export default Home;
