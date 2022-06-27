import React from "react";
// import Button from "/src/components/ui/button/button";
// import { AppRoute } from "/src/const";

// function Nav() {
//   return (
//     <nav>
//       <Button link={AppRoute.ORDER}>Купить</Button>
//     </nav>
//   );
// }

// export default Nav;
import Button from "/src/components/ui/button/button";
import { Ul, Li } from "/src/components/styled";
import { AppRoute } from "/src/const";
// import { StyledButton } from "./styles";
import { useLocation } from "react-router-dom";

const links = [
  {
    to: AppRoute.MAIN,
    item: <Button link={AppRoute.MAIN}>Главная</Button>
  },
  { to: AppRoute.ORDER, item: <Button link={AppRoute.ORDER}>Купить</Button> }
];

// навигация
function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      <Ul>
        {links
          .filter((link) => link.to !== pageUrl)
          .map((link) => (
            <Li key={link.to}>{link.item}</Li>
          ))}
      </Ul>
    </nav>
  );
}

export default Nav;
