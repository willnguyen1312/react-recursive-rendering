import { CSSProperties, FC, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { sampleMenuData } from "./mockedData";
import { MenuItemType } from "./types";

import styles from "./App.module.css";

const calculateStyle = ({ anchorElement }: { anchorElement: HTMLElement }) => {
  const {
    top: anchorTop,
    left: anchorLeft,
    width: anchorWidth,
  } = anchorElement.getBoundingClientRect();

  const style: CSSProperties = {
    left: anchorLeft + anchorWidth,
    top: anchorTop,
  };

  return style;
};

const Portal: FC = ({ children }) => {
  const bodyEle = document.getElementsByTagName("body")[0];
  return createPortal(children, bodyEle);
};

interface MenuItemProps {
  item: MenuItemType;
  anchorElement?: HTMLElement | null;
}

const MenuItem: FC<MenuItemProps> = ({ item, anchorElement }) => {
  const [hover, setHover] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hasChildren = item.children && item.children.length > 0;

  const style = anchorElement ? calculateStyle({ anchorElement }) : {};

  const extraProps = hasChildren
    ? {
        ref: wrapperRef,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
      }
    : {};

  return (
    <div {...extraProps} style={style} className={styles.menuItem}>
      <h3>{`${item.label} ${hasChildren ? "->" : ""}`}</h3>

      {hasChildren && hover && wrapperRef.current && (
        <MenuWrapper
          data={item.children || []}
          anchorElement={wrapperRef.current}
        />
      )}
    </div>
  );
};

interface MenuWrapperProps {
  data: MenuItemType[];
  anchorElement: HTMLElement;
}

const MenuWrapper: FC<MenuWrapperProps> = ({ anchorElement, data }) => {
  return (
    <div
      style={calculateStyle({ anchorElement })}
      className={styles.menuWrapper}
    >
      {data.map((item) => (
        <MenuItem key={item.label} item={item} />
      ))}
    </div>
  );
};

interface MenuProps {
  data: MenuItemType[];
  anchorElement: HTMLElement;
}

const Menu: FC<MenuProps> = ({ anchorElement, data }) => {
  return (
    <Portal>
      <MenuWrapper anchorElement={anchorElement} data={data} />
    </Portal>
  );
};

const App: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const anchorElement = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.app}>
      <button ref={anchorElement} onClick={() => setMenuOpen(!menuOpen)}>{`${
        menuOpen ? "Close" : "Open"
      } menu`}</button>

      {menuOpen && anchorElement.current && (
        <Menu data={sampleMenuData} anchorElement={anchorElement.current} />
      )}
    </div>
  );
};

export default App;
